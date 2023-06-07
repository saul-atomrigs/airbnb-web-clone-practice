"use client";

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeReservation, SafeUser } from "../types";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

type TripsClientProps = {
  reservations?: SafeReservation[];
  currentUser?: SafeUser | null | undefined;
};

export default function TripsClient({
  reservations,
  currentUser,
}: TripsClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = async (id: string) => {
    setDeletingId(id);

    try {
      await axios.delete(`/api/reservations/${id}`);
      toast.success("Reservation cancelled");
      router.refresh();
    } catch (error) {
      toast.error("Failed to cancel reservation");
    } finally {
      setDeletingId("");
    }
  };

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg;grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations?.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel Reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
