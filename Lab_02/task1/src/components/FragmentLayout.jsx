// Fragmet арқылы бірнеше элементтерді орау үшін қолданылады, осылайша қосымша түйіндер DOM-қа қосылмайды.
function FragementLayout() {
    return (
        <>
        <header>
            <h1>Fragment Layout</h1>
        </header>
        <main>
            <p>Short paragraph</p>
        </main>
        <footer>
            <small>© 2026 Fragment Layout</small>
        </footer>
        </>
    )
}
// Компонентті басқа файлдарда қолдану үшін экспорттау
export default FragementLayout;