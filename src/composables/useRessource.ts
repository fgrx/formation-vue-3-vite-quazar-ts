export function dateInFrench(ressourceDate: string) {
  const ressourceDateObj = new Date(ressourceDate);
  return ressourceDateObj.toLocaleDateString();
}

export function mediaInFrench(ressourceMedia: string) {
  switch (ressourceMedia) {
    case "video":
      return "Vidéo";
    case "post":
      return "Article";
    case "book":
      return "Livre";
    default:
      return "Autre";
  }
}
