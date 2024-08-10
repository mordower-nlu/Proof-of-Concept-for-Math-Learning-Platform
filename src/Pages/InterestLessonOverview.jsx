import { Container } from "react-bootstrap";



export function InterestLessonOverview(){
    return <>
        <p className={"content-header"}>Lesson Overview:</p>
        <div className="animation-paragraph-fade content-body">
            <p>In this lesson we will:</p>
            <p>-learn about <strong>interest</strong>, a key concept in finance.</p>
            <p>-learn about two different types of interest:<br/>
                    <b>simple interest</b><br/>
                    and<br/>
                    <b>compound interest.</b>
            </p>
            <p>-learn how interest is calculated.</p>
        </div>
    </>
    
    
}