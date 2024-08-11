import { InlineVocabWithOverlay } from "../../Views/ContentViews/InlineVocabWithOverlay";

export function InterestAnecdote1(){

    return <>
        <p className="content-header">A Real-Life (sort of) Situation</p>
        <div className="content-body">
            <p>To show an application of <InlineVocabWithOverlay term={"interest"} definition={"Amount of extra money added over time to an original amount owed/saved"}/>
             we're going to here a little story about my friend Sandra.</p>
             <iframe src="https://nl.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=b7091233-bcd6-4f55-b1fe-b1c9010cfbc3&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=false&interactivity=all" height="338" width="90%" style={{border: "1px solid #464646;"}} allowFullsSreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Interest Part 1 - Introduction to Sandra" ></iframe>

        </div>
    
    </>

    
}