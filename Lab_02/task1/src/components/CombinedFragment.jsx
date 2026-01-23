// элементтер тізімі сақталған массив
const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
];
// fragment қолдана отырып бірнеше элементті біріктіретін компонент
function CombinedFragment() {
    return (
        <>
        <h2>Items</h2>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <p>Total: {items.length} items</p>
        </>
    );
}
// компонентті экспорттау
export default CombinedFragment;