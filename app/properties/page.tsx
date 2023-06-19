import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../EmptyState';

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();
  const listings = await getListings({ userId: currentUser?.id });

  if (!currentUser) {
    return <EmptyState title="You must be signed in to view your properties." subtitle="Click the button below to sign in." />;
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="You don't have any properties yet."
          subtitle='Click the "heart" icon on a listing to add it to your properties.'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <EmptyState title="You don't have any properties yet." subtitle='Click the "heart" icon on a listing to add it to your properties.' />
    </ClientOnly>
  );
}
