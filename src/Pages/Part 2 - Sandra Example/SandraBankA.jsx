import { PlaceholderContent } from "../../Views/ContentViews/PlaceholderContent";

function BankAOfferDescription(){
    return <>
        <p>Bank A's Offer:</p>

        <p>Insert video here with fun drawing of Sandra and a fancy-looking Bank rep.</p>
        
        <p>If Sandra chooses to save her $3000 with Bank A, Bank A has offered:</p>
        <p>To pay Sandra interest equal to 10% of her original dollar amount, each year.</p>

        <p>You then include a check-for-understanding question here where students calculate 10% of $3000.</p>


    
    </>

}

export function SandraBankA(){

    return <>
        <PlaceholderContent title={"Sandra Listens to Bank A's Offer"} description={<BankAOfferDescription/>}></PlaceholderContent>
    </>
}