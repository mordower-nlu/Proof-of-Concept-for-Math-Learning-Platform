import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

export function ListOfDesignConsiderations(){
    return <>
    <p className="content-header">Some Design Choices</p>
    <div className="content-body">
        <p>Click on a topic below to reveal my design process re: said element.</p>
        <Accordion>
            <Accordion.Item eventKey="0" id="color-scheme-design-guide">
                <Accordion.Header>
                    Color Scheme
                </Accordion.Header>
                <Accordion.Body>
                    <p>Best practices suggest using a fairly low number of colors, so that things don't get too distracting.</p>
                    <p>For brand consistency, I opted to use the same shades of blue used on the <a href={"https://nl.edu/"} target="__blank">NLU Website</a> and in the <a href={"/nlu-emblem.svg"} target="__blank">NLU Logo</a></p>
                    <p>
                        I did choose <em>some</em> custom colors, though.<br/>
                        Across the board, I kept things <b>analogous</b>, though, with most of the colors falling very close to the brand colors on the color wheel.
                    </p>
                    <p>
                        By the way: the watermark effect for the background -- that was SO difficult to make work. Good gravy. I have no idea how you're "supposed" to create a watermark effect like that, but there's no way my method was the intended way. It was tough! I hope it looks good!
                    </p>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="1" id="font-design-guide">
                <Accordion.Header>
                    Font Considerations
                </Accordion.Header>
                <Accordion.Body>
                    <p>In accordance with best practices, I used a sans-serif font.</p>
                    <p>For brand consistency, I used the same fonts as those used on the NLU website: Din and Barlow</p>
                    <p>Din is proprietary, and I couldn't use it in my project without paying a fee, I don't think. Thankfully it's only used in a couple of places on the website, with almost all of the body text (at least in Chrome) being displayed in Barlow.</p>
                    <p>
                        For simplicity's sake, I only used two font colors: white when using a dark background, and black when using a light background. You keep things easy to read that way.
                    </p>
                    <p>
                        To boost readability for dyslexic audiences, no text, other than hyperlinks, are underlined.
                    </p>
                    <p>
                        In accordance with the <b>signaling principle</b>, bold typefaces were only used for emphasis, titles, and key terminology.
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" id="layout-design-guide">
                <AccordionHeader>
                    Layout Considerations
                </AccordionHeader>
                <Accordion.Body>
                    <p>Depending on whether you prioritize accessibility or general usability, you're supposed to use either a <b>keyboard-first</b> or <b>mobile-first</b> approach to app development.</p>
                    <p>In my case, I tried to do the best of both worlds. For mobile compatibility, I used a design library known as <a href={"https://getbootstrap.com/"} target="__blank">Bootstrap</a>, which is one of the more common tools for responsive website design.</p>
                    <p>The whole app was designed with the <b>segmenting principle</b> in mind. Generally, you don't want to bombard users with paragraphs; you're better off dosing information line-by-line, with appropriate spacing between each key point.</p>
                    <p>I also leveraged the <b>spatial contiguity principle</b> for vocabulary, as well as a design heuristic called <b>recognition vs. recall</b>. Clicking on vocab words makes their definition appear, which means users won't have to navigate to a different page to review terminology.</p>
                    <p>One of my goals for this project is to include this feature for variables as well, when introducing algebraic formulas. Students frequently forget what each symbol means in an equation, and having a reminder that you can see just by tapping the screen streamlines resource usage.</p>
               
                </Accordion.Body>
            </Accordion.Item>

            <AccordionItem eventKey="3" id="animation-design-guide">
                <AccordionHeader>Animation Design</AccordionHeader>
                <AccordionBody>
                    <p>This <b>segmenting principle</b> informed my decision to animate text, so as only to present small doses of information at once.</p>
                    <p>As the project continued, the text animation got complicated. Initially, each animation triggered at regular intervals, and you still see that on the first few pages on this app.</p>
                    <p>By the time I reached the "Reflection Question Answer" part of the page titled "Why People Borrow", however, I ran into a problem: there wasn't enough time to read each paragraph before the next paragraph started displaying.</p>
                    <p>This ended up being super-distracting for me as a user, so I invented some code that allows you to customize the speed at which certain animations trigger without having to re-code a bunch of the app.</p>
                    <p>Inside of this code, there's a special variable that controls the speed at which new text appears. Eventually I'll make the speed adjustable by the user, but for now, it's stuck as is due to some quirks with the <a href={"https://react.dev/"} target="__blank">React</a> library I used to create this application.</p>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="4" id="accessibility-design-guide">
                <AccordionHeader>Accessibility Considerations</AccordionHeader>
                <AccordionBody>
                    <p>Along the way, I tested to ensure I could navigate the website with a keyboard using the tab and enter keys. It's doable, though it gets slightly complicated when opening / closing "Accordion" subsections, like those on this page. Thankfully, nothing requires precise-clicking, either way.</p>
                    <p>As far as DHH accessibility goes, I have some ideas, but I haven't implemented them yet at the time of writing.</p>
                    <p>To keep up with readings for this class, I actually used a screen reader so I could hear audio while doing dishes or folding laundry, and one problem I kept running into: section titles that don't include punctuation confuse the readers. This means that alt text for section headers should include punctuation!</p>
                    <p>Down the line, once I implement better accessibility for DHH users, I'll contend with timing. Since screen readers will read the text at a different speed than the text-revealing animations, I anticipate some violations of the <b>temporal contiguity principle</b> for users relying on screen readers.</p>
                    <p>This also means that at some point, I'll have to include a toggle for disabling or fast-forwarding through the text animation, either way.</p>
                    <p>For the embedded videos, I used Panopto's auto-caption feature, and then manually edited any errors in the generated captions.</p>
                </AccordionBody>
            </AccordionItem>
        </Accordion>

    </div>
    </>
}