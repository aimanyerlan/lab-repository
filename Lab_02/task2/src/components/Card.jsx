// карта компоненті, тақырып пен ішіндегі контентті көрсету үшін
function Card({ title, children, className }) {
    const cardClassName = `card ${className ? className : ''}`;
    return (
        // компоненттің негізгі құрылымы
        <div className="cardClassName">
            <h3>{title}</h3>
            {children}
        </div>
    );
}
// компонентті экспорттау
export default Card;
