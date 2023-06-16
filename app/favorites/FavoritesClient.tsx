import React from 'react';
import { SafeListing, SafeUser } from '../types';
import Heading from '../components/Heading';
import Container from '../components/Container';
import ListingCard from '../components/listings/ListingCard';

type FavoritesClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};

export default function FavoritesClient({ listings, currentUser }: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited" />
      <div
        className="
        mt-10
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      >
        {listings.map((listing: any) => (
          <ListingCard data={listing} key={listing.id} reservation={null} currentUser={currentUser} />
        ))}
      </div>
    </Container>
  );
}
