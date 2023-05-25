import EmptyState from "@/app/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getListingById from "@/app/actions/getListingById";

type ListingPageProps = {
  listingId?: string;
};

export default async function ListingPage({
  params,
}: {
  params: ListingPageProps;
}) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
