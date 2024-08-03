import { runtime } from "webextension-polyfill";

export {};

let imgs = document.getElementsByTagName('img');

function changeImages() {
    for (let i = 0; i < imgs.length; i++) {
        let r = Math.floor(Math.random() * 14 )
        let file = `images/pepe${r + 1}.png`
        let url = runtime.getURL(file)
        
        const img = imgs.item(i)
        img?.setAttribute("currentSrc", url)
        
        img!.src = url
    }   
}

changeImages()




