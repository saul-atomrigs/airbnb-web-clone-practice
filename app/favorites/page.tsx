import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../EmptyState';

export default async function ListingPage() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length) {
    return (
      <ClientOnly>
        <FavoritesClient listings={listings} currentUser={currentUser} />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <EmptyState title="You don't have any favorites yet." subtitle='Click the "heart" icon on a listing to add it to your favorites.' />
    </ClientOnly>
  );
}
