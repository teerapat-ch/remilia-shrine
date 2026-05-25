export type RemiliaGalleryImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

export const remiliaGalleryImages: RemiliaGalleryImage[] = [
  {
    id: 1,
    src: "/remilia_full.png",
    alt: "Remilia Scarlet full portrait",
    title: "Scarlet Presence",
  },
  {
    id: 2,
    src: "/remilia_pose.png",
    alt: "Remilia Scarlet posed portrait",
    title: "Mistress of the Mansion",
  },
  {
    id: 3,
    src: "/remilia_wine.png",
    alt: "Remilia Scarlet holding a wine glass",
    title: "Evening at the Lake",
  },
  {
    id: 4,
    src: "/remilia_front.png",
    alt: "Remilia Scarlet front view",
    title: "Gothic Elegance",
  },
  {
    id: 5,
    src: "/remilia_drunk.png",
    alt: "Remilia Scarlet relaxed portrait",
    title: "After the Banquet",
  },
];
