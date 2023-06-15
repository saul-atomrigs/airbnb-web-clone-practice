import React from 'react';
import getCurrentUser from './getCurrentUser';
import prisma from '@/app/libs/prismadb';

export default async function getFavoriteListings() {
  try {
    // Get current user:
    const currentUser = await getCurrentUser();

    // if no user, return empty array:
    if (!currentUser) return [];

    // Get favorites:
    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    // Return safe favorites, and add createdAt field from favorites array:
    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
