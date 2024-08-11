import { PlaceholderContent } from "../../Views/ContentViews/PlaceholderContent";

function BankBOfferDescription(){
    return <>
        <p>Bank B's Offer:</p>

        <p>Insert video here with fun drawing of Sandra and a fancy-looking Bank rep.</p>
        
        <p>If Sandra chooses to save her $3000 with Bank B, Bank B has offered:</p>
        <p>To pay Sandra interest equal to 10% of whatever her <b>currently saved amount</b> is, each year.</p>

        <p>You check for understanding by asking why this is different from Bank A's offer, and you'll have to include a little toggle for students to review Bank A's terms and decipher.</p>

        <p>Have students predict which plan will be better for Sandra after 5 years.</p>
    
    </>

}

export function SandraBankB(){

    return <>
        <PlaceholderContent title={"Sandra Listens to Bank B's Offer"} description={<BankBOfferDescription/>}></PlaceholderContent>
    </>
}