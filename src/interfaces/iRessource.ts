interface IRessource {
  id?: string;
  media: "book" | "video" | "post" | "other";
  title: string;
  lang: "fr" | "en";
  image?: string;
  url: string;
  description?: string;
  rating: number;
  isTop: boolean;
  isValid: boolean;
  date: string;
}

export default IRessource;
