import './header.css'

export default function Header() {
    return (
        <header className="app-header">
            <div className="container">
                <h1>SmartCart</h1>
                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#">Inventory</a>
                    <a href="#">Settings</a>
                </nav>
            </div>
        </header>
    )
}
