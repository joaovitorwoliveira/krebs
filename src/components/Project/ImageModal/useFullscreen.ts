import { useCallback, useState } from "react";

import { DocumentWithFullscreen, ElementWithFullscreen } from "./types";

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = async () => {
    try {
      const element = document.documentElement as ElementWithFullscreen;
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } catch (error) {
      console.error("Error entering fullscreen:", error);
    }
  };

  const exitFullscreen = async () => {
    try {
      const doc = document as DocumentWithFullscreen;
      if (
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.msFullscreenElement
      ) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        } else if (doc.msExitFullscreen) {
          await doc.msExitFullscreen();
        }
        setIsFullscreen(false);
      } else {
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Error exiting fullscreen:", error);
      setIsFullscreen(false);
    }
  };

  const toggleFullscreen = useCallback(async () => {
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }, [isFullscreen]);

  const handleFullscreenChange = useCallback(() => {
    const doc = document as DocumentWithFullscreen;
    const isCurrentlyFullscreen = !!(
      document.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.msFullscreenElement
    );
    setIsFullscreen(isCurrentlyFullscreen);
  }, []);

  return {
    isFullscreen,
    toggleFullscreen,
    exitFullscreen,
    handleFullscreenChange,
  };
}
