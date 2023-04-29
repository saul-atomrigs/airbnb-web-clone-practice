"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import qs from "query-string";
import { IconType } from "react-icons";

type CategoryBoxProps = {
  icon: IconType | string;
  label: string;
  selected?: boolean;
};

export default function CategoryBox({
  icon: Icon,
  label,
  selected,
}: CategoryBoxProps) {
  const router = useRouter();
  const searchParams = useSearchParams;

  const handleClick = () => {
    let currentQuery = {};

    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if ((searchParams as any)?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
}
