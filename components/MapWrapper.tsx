"use client";

import dynamic from "next/dynamic";

const Locations = dynamic(() => import("@/components/Locations"), { ssr: false });

export default function MapWrapper() {
  return <Locations />;
}
