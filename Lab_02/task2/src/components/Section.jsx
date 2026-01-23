// бөлім атауы мен ішіндегі мазмұнды көрсететін компонент
function Section({title, children}) {
    return (
        <>
        <h2>{title}</h2>
        {children}  
        </>
    );
}
// компонентті экспорттау
export default Section;