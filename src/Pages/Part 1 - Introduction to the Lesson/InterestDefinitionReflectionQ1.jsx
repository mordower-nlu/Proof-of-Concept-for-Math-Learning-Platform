import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import { ReflectionAnswerView } from "../../Views/ContentViews/ReflectionAnswerView";
import { ReflectionQuestionView } from "../../Views/ContentViews/ReflectionQuestionView";
import { SetFadeAnimationParameters } from "../../Utilities/SetAnimationParameters";

function reflectionAnswer(){return <div >
    <p style={SetFadeAnimationParameters(2,0)}><b>Answer:</b></p>
    <p>
        <span style={SetFadeAnimationParameters(2,2)}>There are many reasons for this.</span><br/>
        <span style={SetFadeAnimationParameters(3,4)}>One of the most important: when banks agree to lend people money, <b>there's a catch!</b><br/></span>
    </p>
    <p style={SetFadeAnimationParameters(3,7)}>
        Most banks only lend people money if the recipient promises to pay the bank back, <b>plus some extra money.</b> 
    </p>
    <p>
        <span style={SetFadeAnimationParameters(2,13)}>It's not all bad, though.<br/></span>
        <span style={SetFadeAnimationParameters(3,17)}>Most banks also offer something called a savings account, where they <b>pay you extra money</b> as a reward for choosing to save money at their bank, instead of saving it elsewhere.</span>
    </p>
    <p style={SetFadeAnimationParameters(2,22)}>There's a lot of extra money being tossed around!</p>
    <p style={SetFadeAnimationParameters(3,25)}>This idea of paying or asking for extra money happens everywhere. <br/>Banks, credit cards, department stores, and even entire countries -- they all charge or pay extra from time to time!</p>
</div>;
}
export function DefinitionOfInterestReflectionQuestion1(){

    return <>

        <p className={"content-header"}>Why People Borrow: A Reflection Question:</p>
        <div className="content-body">

           <Accordion alwaysOpen="true">
                <Accordion.Item eventKey="0">
                    <AccordionHeader>Click here to reveal the questions.</AccordionHeader>
                    <Accordion.Body>
                        <ReflectionQuestionView questionText={["Sometimes people borrow money from the bank.","Why would a bank agree to lend someone money?","After all, couldn\'t the person just choose not to pay the bank back?"]} questionId={"definition-of-interest-question"}/>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <AccordionHeader>Click here to reveal a possible answer.</AccordionHeader>
                    <AccordionBody>
                        {reflectionAnswer()} 

                    </AccordionBody>



                </Accordion.Item>
            </Accordion>
        

        </div>

    </>
}