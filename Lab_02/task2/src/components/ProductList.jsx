import Card from './Card';
// өнімдер тізімін көрсететін компонент
function ProductList() {
    // өнімдер массиві
    const products = [
        { id: 1, name: 'Widget', price: 9.99 },
        { id: 2, name: 'Gadget', price: 12.49 },
        { id: 3, name: 'Doohickey', price: 7.75 },
    ];
    return (
        <>
        // әр өнім үшін Card компонентін қолдану
        {products.map(product => (
            // key әр элементті ажырату үшін қажет
            <Card key={product.id} title={product.name}>
                <p>Price: ${product.price}</p>
            </Card>
        ))}
        </>
    );
}

export default ProductList;