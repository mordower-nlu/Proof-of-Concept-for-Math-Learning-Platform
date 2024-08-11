import { useRef, useState } from "react";
import { Button, Overlay } from "react-bootstrap";

export function VocabButtonWithOverlay({term,definition}){
    const [show,setShow] = useState(false);
    const target = useRef(null);

    return <>
        <Button ref={target} onClick={() => setShow(!show)} >
            {term}
        </Button>
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