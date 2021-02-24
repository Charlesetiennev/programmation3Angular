// Reservation Interface
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021
export interface Reservations {
    _id: string,
    dateReservation: string,
    destination: string,
    nombrePassagers: number,
    prixTotal: number
}
