import { useState } from 'react'
import 'katex/dist/katex.min.css';
import './App.css'
import './Styles/nlustyles.css';
import './Styles/animations.css';
import { InlineMath, BlockMath } from 'react-katex';
import { InterestLessonOverview } from './Pages/Part 1 - Introduction to the Lesson/InterestLessonOverview';
import { DefinitionOfInterestReflectionQuestion1 } from './Pages/Part 1 - Introduction to the Lesson/InterestDefinitionReflectionQ1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup, Stack } from 'react-bootstrap';
import { DesignSummary } from './Pages/Design Summary Pages/DesignSummary';
import { VocabDefinitionInterest } from './Pages/Part 1 - Introduction to the Lesson/VocabDefinitionInterest';
import { Glossary } from './Pages/GlossaryContainer';
import { ThingsIdLikeToChange } from './Pages/Design Summary Pages/ThingsIdLikeToChange';
import { ListOfDesignConsiderations } from './Pages/Design Summary Pages/DesignConsiderations';
import { InterestVocabCheckForUnderstanding } from './Pages/Part 1 - Introduction to the Lesson/VocabularyInterestCheck';
import { InterestAnecdote1 } from './Pages/Part 2 - Sandra Example/InterestAnecdote1';
import { ExternalTools } from './Pages/References/ExternalLibraryCitations';
import { SandraBankA } from './Pages/Part 2 - Sandra Example/SandraBankA';
import { SandraBankB } from './Pages/Part 2 - Sandra Example/SandraBankB';

 //Glorified switch statement for deciding which content to render.
 const pages = [
  <InterestLessonOverview/>,
  <DefinitionOfInterestReflectionQuestion1/>,
  <VocabDefinitionInterest/>,
  <InterestVocabCheckForUnderstanding/>,
  <InterestAnecdote1/>,
  <SandraBankA/>,
  <SandraBankB/>,
  <DesignSummary/>,
  <ListOfDesignConsiderations/>,
  <ThingsIdLikeToChange/>,
  <ExternalTools/>


]

const pageDescriptions = [
  "Lesson Overview",
  "Why People Borrow",
  "Vocabulary: Interest",
  "Vocab Check for Understanding: Interest",
  "A Story About Interest: Part 1",
  "Bank A\'s Offer",
  "Bank B\'s Offer",
  "Project Context Summary",
  "Design Considerations",
  "Things I\'d Like to Improve for This App",
  "Technology Citations"
]


function App() {
  const [pageId, setPageId] = useState(0)

 

  

  const onClickNext = ()=>{
        setPageId((pageId)=>(pageId<pages.length-1)?pageId+1:pageId); 

  }

  const onClickBack = ()=>{
   
      setPageId((pageId)=>(pageId>0)?pageId-1:pageId); 

  }

  

  return (
    <>
      
      <h2>Proof of Concept for E-Learning Lesson</h2>
      
      <Container >
        <Row>
          <Col className="nav-sidebar" sm="2">
          <ButtonGroup vertical className='side-button-group'>
            <span className="btn btn-primary" >Sections:</span>
            {pageDescriptions.map(
                (elem,index)=>{
                  return <Button key={"nav-button-"+index} onClick={()=>{setPageId(index)}}>{index+1}: {elem}</Button>;



              })}

          </ButtonGroup>
            
          
          </Col>
          <Col className="content-container" sm="8">
            <Row>{pages[pageId]}</Row>
            <Row>
                <Col md={3}>
                  {(pageId>0)?<Button className="change-page-button" onClick={onClickBack}>◀ Back: {pageDescriptions[pageId-1]} </Button>:<></>}
                </Col>
                <Col md={6}>
                    <span>Page {pageId+1} / {pages.length}</span>
                </Col>
               <Col md={3}>
                 {(pageId<pages.length-1)?<Button className="change-page-button" onClick={onClickNext}> ▶ Next: {pageDescriptions[pageId+1]}</Button>:<></>}
              </Col>
            </Row>
          
          </Col>
          
          <Col className="glossary" sm="2">
              <Glossary/>
          
          </Col>
        </Row>
        

        
      </Container>
   

      
    </>
  )
}

export default App
