export type ProjectStatus = "ongoing" | "upcoming" | "completed";

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: "Apartment" | "Villa Community" | "Commercial" | "Mixed Use";
  status: ProjectStatus;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  amenities: string[];
  highlights: string[];
};
