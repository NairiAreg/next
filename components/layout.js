export default function Layout(props) {
    return (
        <div>
            <header>
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Something</li>
                </ul>
            </header>
            {props.children}
            <footer>
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Something</li>
                </ul>
            </footer>
        </div>
    )
}
