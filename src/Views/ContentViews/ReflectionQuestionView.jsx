export function ReflectionQuestionView({questionText,questionId}){
    return <>
        <div className="animation-paragraph-fade">
            <p><strong>Reflection Question(s):</strong></p>
            {questionText.map(
                (elem,index)=>{
                    return <p key={questionId+"-"+index}>{elem}</p>
                }
            )}
        </div>
    </>
}