export default function OverlayImage() {
  const createDiv = document.createElement("div") as HTMLDivElement;
  const createImage = document.createElement("img") as HTMLImageElement;

  let r = Math.floor(Math.random() * 9);

  const imgSrc = [
    "/public/images/ic_pepe_snug.png",
    "/public/images/ic_pepe_good.png",
    "/public/images/ic_pepe_gun.png",
    "/public/images/ic_pepe_doctor.png",
    "/public/images/ic_pepe_new_zealand.png",
    "/public/images/ic_pepe_yell.png",
    "/public/images/ic_pepe_angry.png",
    "/public/images/ic_pepe_angry_yell.png",
    "/public/images/ic_pepe_annoyed.png",
    "/public/images/ic_pepe_punch.png"
  ];
  createDiv.setAttribute("id", "overlay");
  createImage.setAttribute("id", "img");

  document.body.appendChild(createDiv);
  createDiv.appendChild(createImage);

  let getOverlay = document.getElementById("overlay") as HTMLImageElement;
  let getImage = document.getElementById("img") as HTMLImageElement;

  function on() {
    getOverlay.style.position = "fixed";
    getOverlay.style.backgroundColor = "black";
    getOverlay.style.opacity = "0.7";
    getOverlay.style.height = "100%";
    getOverlay.style.width = "100%";
    getOverlay.style.top = "0";
    getOverlay.style.left = "0";
    getOverlay.style.zIndex = "999999";
    getImage.src = "https://avatars.githubusercontent.com/u/114366902?v=4";
    console.log(getImage);
    getImage.style.position = "fixed";
    getImage.style.top = "50%";
    getImage.style.left = "50%";
    getImage.style.opacity = "1.0";
    getImage.style.transform = "translate(-50%, -50%)";
    getImage.style.zIndex = "9999999";
    console.log(getOverlay);
  }
  function off() {
    // getImage!.style.display = "none";
  }

  return {
    on,
    off,
  };
}
