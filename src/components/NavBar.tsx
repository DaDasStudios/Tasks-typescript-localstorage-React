import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" />
                </NavLink>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to="/" className="navbar-item">
                        Home
                    </NavLink>

                    <NavLink to='/' className="navbar-item">
                        Add Task
                    </NavLink>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <NavLink to={'/about'} className="navbar-item">
                                About
                            </NavLink>
                            <NavLink to={'/contact'} className="navbar-item">
                                Contact
                            </NavLink>
                            <hr className="navbar-divider" />
                            <NavLink to={'/report'} className="navbar-item">
                                Report an issue
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
