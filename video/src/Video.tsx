import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { NarrationTrack, SfxTrack } from "./components/AudioTracks";
import { Captions } from "./components/Captions";
import { Build } from "./scenes/Build";
import { DeleteAll } from "./scenes/DeleteAll";
import { DeleteWhere } from "./scenes/DeleteWhere";
import { Drop } from "./scenes/Drop";
import { Hook } from "./scenes/Hook";
import { Quiz } from "./scenes/Quiz";
import { Recap } from "./scenes/Recap";
import { C } from "./theme";
import { SCENES, SceneKey, sec } from "./timeline";

export type VideoProps = { burnCaptions: boolean };

const SCENE_COMPONENTS: Record<SceneKey, React.FC> = {
  hook: Hook,
  build: Build,
  deleteWhere: DeleteWhere,
  deleteAll: DeleteAll,
  drop: Drop,
  quiz: Quiz,
  recap: Recap,
};

/** Gentle fade-in at the start of each scene (no flashy transitions). */
const SceneFade: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

export const Video: React.FC<VideoProps> = ({ burnCaptions }) => (
  <AbsoluteFill style={{ background: C.bg }}>
    {/* Subtle vignette for depth; static, so no motion noise. */}
    <AbsoluteFill style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.035), transparent 70%)" }} />

    {(Object.keys(SCENES) as SceneKey[]).map((key) => {
      const { start, end } = SCENES[key];
      const Scene = SCENE_COMPONENTS[key];
      return (
        <Sequence key={key} from={sec(start)} durationInFrames={sec(end - start)} name={`scene:${key}`}>
          <SceneFade>
            <Scene />
          </SceneFade>
        </Sequence>
      );
    })}

    <NarrationTrack />
    <SfxTrack />
    {burnCaptions && <Captions />}
  </AbsoluteFill>
);
