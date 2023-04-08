import "./style.scss"

function Header() {
    return (
        <header className="App-header">
            <h3 className="my-name">
                Tuan Tai
            </h3>
            <ul className="Nav">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header