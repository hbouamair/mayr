import { redirect } from "next/navigation";

/** Retreat weeks now live on the Retreat program page (browse + itinerary + pricing in one place). */
export default function RoomsIndexRedirect() {
  redirect("/retreat-program");
}
