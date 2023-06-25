'use client';

import React, { useState } from 'react';
import { SafeReservation, SafeUser } from '../types';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

type ReservationClientProps = {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
};

export default function ReservationClient({ reservations, currentUser }: ReservationClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = async (id: string) => {
    setDeletingId(id);
    try {
      await axios.delete(`/api/reservations/${id}`);
      toast.success('Reservation cancelled');
      router.refresh();
    } catch (error) {
      toast.error('Failed to cancel reservation');
    } finally {
      setDeletingId('');
    }
  };

  return (
    <Container>
      <Heading title="Trips" subtitle="Where you've been and where you're going" />
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
