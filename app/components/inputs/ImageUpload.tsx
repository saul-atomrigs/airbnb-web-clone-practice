"use client";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";

// Declare global variable for Cloudinary:
declare global {
  var cloudinary: any;
}

type ImageUploadProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const handleUpload = (result) => {
    onChange(result.info.secure_url);
  };

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="iiofmfz4"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()} // open() 하면 간혹 에러가 발생함
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div
                className="
									absolute inset-0 w-full h-full"
              >
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}
