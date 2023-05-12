"use client";

type ImageUploadProps = {
  value: string;
  onChange: (value: string) => void;
};

import React from "react";

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const handleUpload = (result) => {
    onChange(result.info.secure_url);
  };
}
