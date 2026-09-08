export const vehicleOptions = [
  { id: "suv", name: "SUV", seats: 7, price: 9533, description: "Comfortable for families and small groups." },
  { id: "sedan", name: "Sedan", seats: 4, price: 7850, description: "A refined choice for couples and business travel." },
  { id: "tempo", name: "Tempo Traveller", seats: 12, price: 14500, description: "Spacious seating for larger groups." },
];

export function formatCurrency(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function formatDate(value) {
  if (!value) return "Not selected";
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

export function formatTime(value) {
  if (!value) return "Not selected";
  return new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit" }).format(new Date(`2026-01-01T${value}`));
}