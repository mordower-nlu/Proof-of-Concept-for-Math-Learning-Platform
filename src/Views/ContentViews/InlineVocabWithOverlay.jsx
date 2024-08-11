import { useRef, useState } from "react";
import {  Overlay } from "react-bootstrap";

export function InlineVocabWithOverlay({term,definition}){
    const [show,setShow] = useState(false);
    const target = useRef(null);

    return <>
        <span ref={target} onClick={() => setShow(!show)} >
            <b> {term} </b>
        </span>
        <Overlay target={target.current} show={show} placement="top" rootClose={true} rootCloseEvent="mousedown">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}

            className="glossary-tooltip"

            style={{
              
              ...props.style,
            }}
          >
            <b>{term}:</b><br/>
            {definition}
          </div>
          )}

        </Overlay>
    
    </>

    
    
}