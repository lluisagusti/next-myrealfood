import { useEffect } from "react";
import { scannerConfig } from "../constants/constants";
import Quagga from "quagga";

export default function Scanner({ onDetected }) {

  useEffect(() => {
    Quagga.init(scannerConfig, (err) => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.stop();
      };
    });

    Quagga.onDetected(detected);
  }, []);

  const detected = (result) => {
    onDetected(result.codeResult.code);
  };

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <div id="interactive" className="viewport" />
  );
};