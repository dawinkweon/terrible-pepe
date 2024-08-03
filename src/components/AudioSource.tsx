
const miliseconds = 1000;
const ASSETS_PATH = "./assets/";
let coroutine: NodeJS.Timeout | undefined;

export const SoundEffects = {
    audio1 :  ASSETS_PATH + "sfx_pop_up_appear.mp3",
    audio2 :  ASSETS_PATH + "sfx_pop_up_disappear.mp3",
    audio3 :  ASSETS_PATH + "sfx_select_move.mp3",
};

export  function playAudioAtURL( url: string){
    const audio = new Audio(url);
    audio.loop = false;
    audio.play();
    console.log("Looping audio source");
}

export function playAudioInterval(url: string, second: number, repeat: boolean = false){
    const audio = new Audio(url);
    audio.loop = false;
    if(!repeat){
        coroutine = setInterval(function() { 
            console.log("interval once");
            audio.play();
            clearInterval(coroutine);
        },miliseconds * second);
    }
    else
    {
    coroutine = setInterval(function () {
        audio.play();
    }, miliseconds * second);
        console.log("interval loop");
    }
    console.log(`${url} : ${second}`);
}
export function stopAudioInterval(){
    clearInterval(coroutine);
}
