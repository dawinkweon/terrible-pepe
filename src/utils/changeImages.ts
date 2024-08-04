import runtime from "./runtime";

const PEPE_FILENAME_TOKENS = ["pepe"];

const changeImagesToPepe = (imgs: HTMLImageElement[]) => {
  // only change non pepe images
  const imagesToChange = imgs.filter((img) => !isPepeImageUrl(img.src));
  changeImages(imagesToChange);
};

const isPepeImageUrl = (imgUrl: string): boolean => {
  const matches = PEPE_FILENAME_TOKENS.filter((token) =>
    imgUrl.toUpperCase().includes(token.toUpperCase())
  );
  return matches.length > 0;
};

const changeImages = (imgs: Array<HTMLImageElement>) => {
  console.debug("Changing images...");
  for (let img of imgs) {
    let r = Math.floor(Math.random() * 14);
    let file = `images/pepe${r + 1}.png`;
    let url = runtime.getURL(file);

    img?.setAttribute("currentSrc", url);

    img!.src = url;
  }
};

export { changeImagesToPepe };
