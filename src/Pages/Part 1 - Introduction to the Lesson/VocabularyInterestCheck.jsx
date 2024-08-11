import { PlaceholderContent } from "../../Views/ContentViews/PlaceholderContent";

export function InterestVocabCheckForUnderstanding(){
    const description = <>
        <p>TO CREATE: <br/>
        3 check-for-understanding questions.</p>
        <hr/>
        
        <p>Question 1: Very, very easy interest question: John lends Marty $30. Marty agrees to pay John back for the original $30, plus an extra $20. How much interest does Marty pay?</p>
        <p>Include animated walkthrough of steps, revealed after clicking.</p>
        
        <hr/>

        <p>Question 2a: Add slightly more difficult question. Something like: "Fred agrees to lend Rudy $200, on the condition that Rudy will owe fred $2 of interest, <b>for each day</b> until Rudy pays him back. If Rudy waits 7 days to pay Fred back, how much <b>interest</b> will he owe Fred?</p>

        <p> Question 2b: If Fred pays [answer from 2a] in interest, how much will he end up paying Fred <b>in total</b>?</p>

        <hr/>
        <p>Question 3 (segues into interest rates): Mahmoud borrows $300 from Carole after agreeing that he'll pay interest equal to 15% of the original $300, when he pays her back.</p>
        <p>3a. How much interest will Mahmoud pay Carole?</p>
        <p>3b. How much money will Mahmoud pay Carole <b>in total</b>?</p>


        <hr/>
        <p>Will use bullet-point representations rather than paragraph representations of problems to easy cognitive load / reading comprehension obstacles.</p>
    </>

    return <>
       <PlaceholderContent title={"Check for Understanding: Definition of Interest"}
        description={description}


       ></PlaceholderContent>
    
    </>;

}