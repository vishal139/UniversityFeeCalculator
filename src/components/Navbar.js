import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Indian University</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
