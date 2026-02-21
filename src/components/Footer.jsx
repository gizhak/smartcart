import './footer.css'

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="container">
                <span>© {new Date().getFullYear()} SmartCart</span>
                <span className="muted">Built with Vite + React</span>
            </div>
        </footer>
    )
}
