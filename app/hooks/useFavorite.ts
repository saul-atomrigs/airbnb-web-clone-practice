import React from "react";
import { SafeUser } from "../types";
import { useRouter } from "next/navigation";
import useLoginModal from "./useLoginModal";
import axios from "axios";
import toast from "react-hot-toast";

type UseFavorite = {
  listingId: string;
  currentUser?: SafeUser | null;
};

export default function useFavorite({ listingId, currentUser }: UseFavorite) {
  /** HOOKS */

  const router = useRouter();

  const loginModal = useLoginModal();

  /** CONDITIONS */

  const hasFavorited = () => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  };

  /** HANDLERS */

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasFavorited()) {
        request = () => axios.delete(`/api/favorites/${listingId}`);
      } else {
        request = () => axios.post(`/api/favorites/${listingId}`);
      }

      await request();
      router.refresh();
      toast.success("Success!");
    } catch (error: any) {
      console.log(error);
    }
  };
  return { hasFavorited, toggleFavorite };
}
