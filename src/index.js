import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./top-gun-maverick.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Tickets</li>
                    <li>Bio</li>
                    <li>Contact</li>
                </ul>

                
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Pab development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Top Gun Maverick</h1>
            <ol>
                <li>With Tom Cruise</li>
                <li>One of the best movies of 2022</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))