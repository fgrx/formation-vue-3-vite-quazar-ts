interface IRessource {
  id?: string;
  media: string;
  title: string;
  lang: string;
  image?: string;
  url: string;
  description?: string;
  rating: number;
  isTop: boolean;
  isValid: boolean;
  date: string;
}

export default IRessource;
