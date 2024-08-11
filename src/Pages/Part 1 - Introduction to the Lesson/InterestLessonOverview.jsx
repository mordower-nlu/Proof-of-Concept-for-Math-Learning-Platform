import { Button } from "react-bootstrap";
import { useState } from "react";





export function InterestLessonOverview(){
    const [lessonStart,setLessonStart]=useState(false);

    const lessonStartScreen = <div className="content-body">
        <p>Click the button below to begin our lesson on <b>interest</b>.</p>
        <Button onClick={()=>setLessonStart(true)}>Start</Button>
    </div>

    const lessonContent =  <>
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

    return <>
        <p className={"content-header"}>Lesson Overview:</p>
        {
            (lessonStart)?lessonContent:lessonStartScreen
        }
    </>
    
    
}