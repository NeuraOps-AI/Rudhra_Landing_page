"use client";

import { useEffect, useRef } from "react";

const START_TIME = 1;
const END_TIME = 8;
const FRAME_RATE = 12;
const FRAME_INTERVAL = 1 / FRAME_RATE;
const MAX_FRAME_WIDTH = 1280;

type PingPongHeroVideoProps = {
  src: string;
  label: string;
};

export function PingPongHeroVideo({ src, label }: PingPongHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!video || !canvas || !context) {
      return;
    }

    let animationFrame = 0;
    let reverseTimeout = 0;
    let isDisposed = false;
    let hasInitialized = false;
    let hasFrameCache = false;
    let lastCapturedAt = START_TIME - FRAME_INTERVAL;
    let reverseFrameIndex = 0;
    const frames: ImageBitmap[] = [];

    const getEndTime = () => {
      if (!Number.isFinite(video.duration) || video.duration <= START_TIME) {
        return END_TIME;
      }

      return Math.min(END_TIME, Math.max(START_TIME, video.duration - 0.05));
    };

    const clearTimers = () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(reverseTimeout);
    };

    const setCanvasSize = () => {
      const sourceWidth = video.videoWidth || 1920;
      const sourceHeight = video.videoHeight || 1080;
      const scale = Math.min(1, MAX_FRAME_WIDTH / sourceWidth);

      canvas.width = Math.round(sourceWidth * scale);
      canvas.height = Math.round(sourceHeight * scale);
    };

    const drawVideoToCanvas = () => {
      if (!canvas.width || !canvas.height) {
        setCanvasSize();
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    const captureFrame = async () => {
      if (isDisposed || video.readyState < 2 || !canvas.width || !canvas.height) {
        return;
      }

      drawVideoToCanvas();
      const frame = await createImageBitmap(canvas);

      if (isDisposed) {
        frame.close();
        return;
      }

      frames.push(frame);
    };

    const showVideoLayer = () => {
      video.style.opacity = "1";
      canvas.style.opacity = "0";
    };

    const showCanvasLayer = () => {
      video.style.opacity = "0";
      canvas.style.opacity = "1";
    };

    const monitorForwardPlayback = () => {
      if (isDisposed) {
        return;
      }

      if (video.currentTime >= getEndTime() - 0.04) {
        video.pause();
        video.currentTime = getEndTime();
        showCanvasLayer();
        hasFrameCache = frames.length > 1;
        reverseFrameIndex = Math.max(0, frames.length - 1);
        reversePlayback();
        return;
      }

      if (!hasFrameCache && video.currentTime - lastCapturedAt >= FRAME_INTERVAL) {
        lastCapturedAt = video.currentTime;
        void captureFrame();
      }

      animationFrame = window.requestAnimationFrame(monitorForwardPlayback);
    };

    const playForward = () => {
      clearTimers();
      showVideoLayer();
      lastCapturedAt = START_TIME - FRAME_INTERVAL;
      video.currentTime = START_TIME;
      video.playbackRate = 1;
      void video.play();
      animationFrame = window.requestAnimationFrame(monitorForwardPlayback);
    };

    const reversePlayback = () => {
      if (isDisposed) {
        return;
      }

      const frame = frames[reverseFrameIndex];

      if (frame) {
        context.drawImage(frame, 0, 0, canvas.width, canvas.height);
      }

      reverseFrameIndex -= 1;

      if (reverseFrameIndex < 0) {
        playForward();
        return;
      }

      reverseTimeout = window.setTimeout(reversePlayback, 1000 / FRAME_RATE);
    };

    const initialize = () => {
      if (hasInitialized) {
        return;
      }

      hasInitialized = true;
      setCanvasSize();
      video.currentTime = START_TIME;
      playForward();
    };

    video.addEventListener("loadedmetadata", initialize);

    if (video.readyState >= 1) {
      initialize();
    }

    return () => {
      isDisposed = true;
      clearTimers();
      video.removeEventListener("loadedmetadata", initialize);
      frames.forEach((frame) => frame.close());
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-150"
        muted
        playsInline
        preload="auto"
        aria-label={label}
        disablePictureInPicture
      >
        <source src={src} type="video/mp4" />
      </video>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-150"
        aria-hidden="true"
      />
    </>
  );
}
