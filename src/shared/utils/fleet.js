import {
  Car,
  Truck,
  UsersRound,
  BusFront,
  CarFront,
} from "lucide-react";

export const fleetIcons = {
  Sedan: Car,
  SUV: Truck,
  "Tempo Traveller": UsersRound,
  "Mini Bus": BusFront,
  "Luxury Bus": BusFront,
};

export const getFleetIcon = (category) => {
  return fleetIcons[category] || CarFront;
};

export const getActiveItems = (items = []) => {
  return items.filter((items) => items.status === true);
};

export const getUniqueFleet = (feeds = []) => {
  return feeds.filter(
    (feed, index, self) =>
      index ===
      self.findIndex(
        (item) => item.category === feed.category
      )
  );
};