export var fadeAnimationMultiplier = 1; //Changing this changes the animation speed, I think.

export function SetFadeAnimationParameters(duration,delay){  
    return {
            opacity: "0",
            animation:"fadein",
            animationDuration: (1.0/fadeAnimationMultiplier)*duration+"s",
            animationDelay: (1.0/fadeAnimationMultiplier)*delay+"s",
            animationFillMode: "forwards",
            animationTimingFunction: "ease-in-out"

        
    };

}