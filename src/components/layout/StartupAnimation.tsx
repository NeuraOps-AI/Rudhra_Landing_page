"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function StartupAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 2500);
    const hideTimer = window.setTimeout(() => setIsVisible(false), 3000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`startup-screen ${isLeaving ? "startup-screen--leaving" : ""}`} aria-label="Loading Rudhra Constructions">
      <div className="startup-glow" />
      <div className="startup-logo-wrap">
        <div className="startup-ring" />
        <Image
          src="/images/logos/rudhra-r-mark.png"
          alt=""
          width={620}
          height={820}
          className="startup-mark"
          priority
        />
        <div className="startup-line" />
      </div>
    </div>
  );
}
