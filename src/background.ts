import {runtime, tabs} from "webextension-polyfill"
//import { playAudioAtURL } from "./components/AudioSource";
import { changeImages } from "./utils/changeImages";
import { EventType } from "./types/EventType";
import { Message } from "./types/Message";
//playAudioAtURL(runtime.getURL("./assets/sfx_pop_appear.mp3"), false);


console.log('Hello Background PEPE');
export {}

tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(changeInfo.status);
    
    if(changeInfo.status === 'loading' || changeInfo.status === 'complete') {
        tabs.sendMessage(tabId, { id: EventType.TabLoadComplete })
    }
})

//tabs.onActivated.addListener((args) => {
//    console.log(`On activated + ${args.tabId}`);
//    tabs.sendMessage(args.tabId,{id: EventType.SwitchToggleUpdated});
//});

runtime.onMessage.addListener(function (msg: Message, sender, sendResponse) {
    if(msg.evenType == EventType.SwitchToggleUpdated){

    }    
});