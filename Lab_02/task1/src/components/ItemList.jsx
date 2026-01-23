// элементтер тізімін сақтайтын массив
const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
];
// тізімді экранға шығаратын компонент
function ItemList() {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
// компонентті экспорттау
export default ItemList;