import { runtime } from "webextension-polyfill";

const PEPE_FILENAME_TOKENS = ["pepe"];

const changeImagesToPepe = (imgs: HTMLImageElement[]) => {
  const imagesToChange = imgs.filter((img) => !isPepeImageUrl(img.src))

  console.debug(`Changing images to pepe, to be changed: ${imagesToChange.length} out of ${imgs.length}`);
  
  for (const img of imagesToChange){
    const url = getRandomPepeImage();
    img!.setAttribute("currentSrc", url);
    img!.setAttribute("srcset", url);
    img!.src = url;
  }
};

const changeVideosToPepe = (videos : HTMLVideoElement[]) => {
  for (const video of videos){
    const url = runtime.getURL("videos/pepe_listening_music.gif");
    //video!.setAttribute("href", url);
    video!.src = url;
  }
};

const isPepeImageUrl = (imgUrl: string): boolean => {
  // only change non pepe images
  const matches = PEPE_FILENAME_TOKENS.filter((token) =>
    imgUrl.toUpperCase().includes(token.toUpperCase())
  );
  return matches.length > 0;
};

const getRandomPepeImage = () => {
  let r = Math.floor(Math.random() * 14);
  let file = `images/pepe${r + 1}.png`;
  return runtime.getURL(file);
}

export { changeImagesToPepe, changeVideosToPepe };
