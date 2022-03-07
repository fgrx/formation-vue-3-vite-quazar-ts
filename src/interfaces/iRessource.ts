type lang = "en" | "fr";
type media = "book" | "video" | "post" | "other";

interface IRessource {
  id?: string;
  media: media;
  title: string;
  lang: lang;
  image?: string;
  url: string;
  description?: string;
  rating: number;
  isTop: boolean;
  isValid: boolean;
  date: string;
}
export type { lang, media };
export default IRessource;
