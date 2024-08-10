import { InlineMath } from "react-katex";


//Wraps inline math inside of a span element for animation purposes.
export function MathSymbol({math}){

    return <span><InlineMath math={math}/></span>


}