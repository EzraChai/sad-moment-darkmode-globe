import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const Globe = () => {
  const canvasRef = useRef<any>();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 7,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [255, 255, 0],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [2.52254, 101.796295], size: 0.03 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
};

export default Globe;
