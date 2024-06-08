import React, { useState } from 'react'

export const Navbar = () => {
    const [active, setActive] = useState(false)

    return (
        <nav className='navbar is-spaced'>
            <div className="navbar-brand">
                <a href="#" className="navbar-item">
                    <img src="/logo.png" alt="" />
                </a>

                <a className={`navbar-burger ${active && 'is-active'}`}
                    onClick={() => setActive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>

            <div className={`navbar-menu ${active && "is-active"}`}>
                <div className="navbar-end is-size-6">
                    <a href="#" className="navbar-item">Descargar Signal</a>
                    <a href="#" className="navbar-item">Ayuda</a>
                    <a href="#" className="navbar-item">Blog</a>
                    <a href="#" className="navbar-item">Desarrolladores</a>
                    <a href="#" className="navbar-item">Oportunidades laborales</a>
                    <a href="#" className="navbar-item">Donar</a>
                    <a href="#" className="navbar-item">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="navbar-item">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="navbar-item">
                        <span className="icon is-small">
                            <i className="bi bi-globe2"></i>
                        </span>
                        <span className='ml-1'>Español</span>
                    </a>
                </div>
            </div>

        </nav>
    )
}
