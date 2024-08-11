import { SetFadeAnimationParameters } from "../../Utilities/SetAnimationParameters";

export function VocabDefinitionInterest(){

    return <>
         <p className={"content-header"}>Vocabulary:</p>
         <div className="content-body">
            <p style={SetFadeAnimationParameters(2,0)}><b>Interest</b></p>
            <hr/>
            <p style={SetFadeAnimationParameters(2,3)}>"Unofficial" Definition of <b>Interest</b>:</p>
            <p style={SetFadeAnimationParameters(3,6)}>
                <b>Interest</b> is extra money that gets added to an original amount that a person owes / saves.

            </p>

         </div>
    
    </>
    
}