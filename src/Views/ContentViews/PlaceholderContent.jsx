export function PlaceholderContent({title,description}){

    return <>
        <p className="content-header">{title}</p>
        <div className="content-body">
            <p><b>Under Construction.</b></p>
            {description}
        </div>
    
    </>

}