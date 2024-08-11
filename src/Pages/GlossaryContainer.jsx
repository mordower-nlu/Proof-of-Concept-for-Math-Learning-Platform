import { Button, ButtonGroup } from "react-bootstrap";
import { VocabButtonWithOverlay } from "../Views/ContentViews/VocabButtonWithOverlay";

export function Glossary(){

    return <>
        <ButtonGroup vertical>
            <Button className={"button-group-header"} onClick={()=>{}}>Glossary <br/>(click word to see definition):</Button>
            <VocabButtonWithOverlay term={"Interest"} definition={"Extra money added on top of some original amount borrowed/saved"}/>
            <VocabButtonWithOverlay term={"Principal"} definition={"The amount of money you originally borrow or deposit"} />
            <VocabButtonWithOverlay term={"Simple Interest"} definition={"A type of interest where you add the same amount of money each time interest gets added"} />
            <VocabButtonWithOverlay term={"Compound Interest"} definition={"A type of interest where the amount of extra money owed/received depends on how much money is currently owed/saved"}/>
        </ButtonGroup>
    </>
}