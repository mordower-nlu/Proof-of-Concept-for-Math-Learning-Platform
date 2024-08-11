import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

export function ThingsIdLikeToChange(){


    return <>
        <p className="content-header">Some Things I'd Like to Improve Here:</p>
        <div className="content-body">
            <p>I would love to change <em>so many things</em> about this application but do not currently have the skills to do so.</p>
            <Accordion>
                <AccordionItem eventKey="0">
                    <Accordion.Header>Layout Changes</Accordion.Header>
                    <AccordionBody>
                        <p>I want the main content for each section front-and-center. I think that part is implemented okay for now; however, the navigation and glossary panes are pretty weird.</p>
                        <p>
                            Depending on screen size, the navigation buttons get bunched together at the top of the screen and become super-cluttered. This makes it so that you have to scroll to get to the main content pane, too.
                        </p>
                    </AccordionBody>
                </AccordionItem>


                <AccordionItem eventKey="1">
                    <Accordion.Header>Navigation Changes</Accordion.Header>
                    <AccordionBody>
                        <p>There are too many pages, and they're not broken down into sub-sections right now. It's too hard to navigate.</p>
                        <p>Ideally, on top of breaking the app into multiple lesson sub-sections, there'd be a collapsible navigation pane that becomes a traditional "Navbar" at the top during mobile view. I can't get that to work right now.</p>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey="2">
                    <AccordionHeader>Other Design Changes</AccordionHeader>
                    <AccordionBody>
                        <p>
                            There are issues with text overflow, buttons being inconsistent sizes, text frames being inconsistent sizes, and certain features, such as the glossary buttons / overlays / tooltips not working the way I'd like.
                        </p>
                        <p>
                            Eventually, once I get better at frontend development, I'll be able to rectify many of these issues, but in the meantime, it's tough.
                        </p>

                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey="3">
                    <AccordionHeader>Content Modifications</AccordionHeader>
                    <AccordionBody>
                        <p>
                            I still haven't finished making all the content yet!
                        </p>
                        <p>
                            I still have multiple videos to make, multiple checks for understanding / reflection questions to implement, and multiple text-based sections to draft.
                        </p>
                        <p>
                            I haven't even integrated something I was really, really excited to do for this project: <br/>Equations where you can hover the mouse over a variable / tap it to reveal which is symbol means.<br/>
                            This was honestly the main thing I wanted to accomplish with this project! I was able to get it to work in a previous attempt at making an app like this, but I wasn't able to write enough content for us to get to that point, organically, here. 
                        </p>

                    </AccordionBody>
                </AccordionItem>


            </Accordion>

        </div>

    </>
}