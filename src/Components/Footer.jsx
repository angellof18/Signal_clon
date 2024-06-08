import React from 'react'
import colorStyle from './Styles/Colors.module.css'

export const Footer = () => {
    return (
        <footer className={`${colorStyle.third_bg} footer has-text-light`}>
            <div className="columns">
                <div className="column is-4">
                    <p>© 2013–2024 Signal, organización sin ánimo de lucro.
                        "Signal", los logotipos de Signal y otras marcas comerciales son marcas comerciales o marcas comerciales registradas de Signal Technology Foundation en los Estados Unidos y otros países (más información aquí).
                    </p>
                    <br />
                    <p>Para consultas de prensa, ponte en contacto con press@signal.org</p>
                </div>
                <div className="column is-2">
                    <p className='has-text-weight-bold	'>Organización</p>
                    <p>Donar</p>
                    <p>Oportunidades laborables</p>
                    <p>Blog</p>
                    <p>Activos de la marca</p>
                    <p>Términos y política de privacidad</p>
                </div>
                <div className="column is-2">
                    <p className='has-text-weight-bold	'>Descargar</p>
                    <p>Android</p>
                    <p>iPhone & iPad</p>
                    <p>Windows</p>
                    <p>Mac</p>
                    <p>Linux</p>
                </div>
                <div className="column is-2">
                    <p className='has-text-weight-bold	'>Social</p>
                    <p>GitHub</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="column is-2">
                    <p className='has-text-weight-bold	'>Ayuda</p>
                    <p>Centro de soporte</p>
                    <p>Comunidad</p>
                </div>
            </div>
            <br />
        </footer>
    )
}
