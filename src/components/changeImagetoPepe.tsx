import React from 'react'

type document = 

const changeImagetoPepe = (doc: document) => {

    document.getElementsByTagName('img').map((img) => {
        console.log(img.src)

        let r = Math.floor(Math.random() * 15)
        let file = `images/pepe${r}.png`
        let url = chrome.extension.getURL(file)
        img.src = url 
    })
}

export default changeImagetoPepe
