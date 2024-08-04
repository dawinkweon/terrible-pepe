import {tabs} from "webextension-polyfill"
//playAudioAtURL(runtime.getURL("./assets/sfx_pop_appear.mp3"), false);

console.log('Hello Background PEPE');
export {}

tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(changeInfo.status);
    
    if(changeInfo.status === 'loading' || changeInfo.status === 'complete') {
        tabs.sendMessage(tabId, { id:'tab_load_complete'})
    }
})