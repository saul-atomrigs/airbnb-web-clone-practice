"use client";

import Image from "next/image";
import React from "react";

type AvatarProps = {
  src?: string | null | undefined;
};

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      className="rounded-full"
      width="30"
      height="30"
      alt="Avatar"
    />
  );
}
