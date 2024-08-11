import { Accordion, AccordionBody, AccordionItem } from "react-bootstrap";



function CodingTools(){

    return <>
         <p>
            - I wrote the code inside of the <a href="https://code.visualstudio.com/" target="__blank">Visual Studio Code</a> application.
        </p>
        <p>
            - I used the <a href="https://react.dev/" target="__blank">React</a> JavaScript framework as the main platform for the apppcation.
        </p>
        <p>
            - To create the "skeleton" for the app, I boostrapped the project using <a href="https://vitejs.dev/" target="__blank">Vite.js</a>.
        </p>
        <p>
            - To handle mobile compatibility/some aesthetic niceties, I used <a href="https://getbootstrap.com/" target="__blank">Bootstrap</a>, which I integrated into my application using a package called <a href="https://react-bootstrap.netlify.app/" target="__blank">React-Bootstrap</a>.
        </p>

        <p>
            - To make my code publicly available, I hosted it on <a href="https://github.com/" target="__blank">GitHub</a> using a <a href="https://github.com/mordower-nlu" target="__blank">repository I created for work</a>.
        </p>

        <p>
            - To launch the actual website, I used <a href="https://www.netlify.com/" target="__blank">Netlify</a> for hosting, after integrating it into my GitHub account.
        </p>

        <p>
            - To render formuas in a pretty way, I used a library called <a href="https://www.npmjs.com/package/react-katex" target="__blank">React-Katex</a>, which plugs into React to make it easier to use a math-displaying library (I think it was originally created by Khan Academy) called <a href="https://katex.org/" target="__blank">KaTeX</a>.
        </p>
    
    </>
}


export function ExternalTools(){


    return <>
        <p className="content-header">Tools / Resources / References Used</p>
        <div className="content-body">
            <p>I used a lot of technology to get this working. Click the items below to see the details:</p>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Coding / Web Design Tools</Accordion.Header>
                    <AccordionBody>
                           <CodingTools/>

                    </AccordionBody>

                </Accordion.Item>

                <AccordionItem eventKey="1">
                    <Accordion.Header>Multimedia Creation Tools</Accordion.Header>
                    <AccordionBody>
                        <p>For the embedded videos:</p>
                        <p> - I used Microsoft's <a href="https://www.onenote.com/" target="__blank">OneNote</a> application for real-time drawing and typing.</p>
                        <p> - I recorded live video / screencasts using <a href="https://zoom.us" target="__blank">Zoom</a></p>
                        <p> - I hosted, edited and captioned the videos on <a href="https://www.panopto.com/" target="__blank">Panopto</a></p>

                    </AccordionBody>
                </AccordionItem>


                <AccordionItem eventKey="2">
                    <Accordion.Header>Other Multimedia Sources Used</Accordion.Header>
                    <AccordionBody>Color themes and the NLU emblem were taken directly from the <a href="https://nl.edu/" target="_blank">NLU website</a>.</AccordionBody>
                </AccordionItem>


            </Accordion>
           
        </div>
    </>
}