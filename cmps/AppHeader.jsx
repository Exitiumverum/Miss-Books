
const { Link, NavLink } = ReactRouterDOM

export function AppHeader(){
    return(
        <header className="app-header">
                <section>
                    <h1>Miss Books Shop</h1>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/books">Books</NavLink>
                    </nav>
                </section>
        </header>
    )
}