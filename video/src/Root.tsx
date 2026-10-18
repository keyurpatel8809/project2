import React from "react";
import { Composition } from "remotion";
import { Video } from "./Video";
import { DURATION_FRAMES, FPS, HEIGHT, WIDTH } from "./timeline";

export const Root: React.FC = () => (
  <>
    <Composition
      id="SqlDeleteVsDrop"
      component={Video}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{ burnCaptions: false }}
    />
    <Composition
      id="SqlDeleteVsDropCaptioned"
      component={Video}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{ burnCaptions: true }}
    />
  </>
);
