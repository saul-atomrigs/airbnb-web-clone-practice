"use client";

import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "../hooks/useFavorite";

type HeartButtonProps = {
  listingId: string;
  currentUser?: SafeUser | null;
};

export default function HeartButton({
  listingId,
  currentUser,
}: HeartButtonProps) {
  /** HOOKS */
  const { toggleFavorite, hasFavorited } = useFavorite({
    listingId,
    currentUser,
  });

  /** UI */

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited() ? "fill-rose-500" : "fill-white"}
      />
    </div>
  );
}
