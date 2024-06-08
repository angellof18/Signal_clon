import React from 'react'
import colorStyle from './Styles/Colors.module.css'
import imageStyle from './Styles/Image.module.css'

export const Hero = () => {
    return (
        <div className={`hero ${colorStyle.primary_bg}`}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-two-fifths">
                            <p className="title is-size-1 has-text-black">Habla con libertad</p>
                            <p className='is-size-5 is-size-6-mobile has-text-black'>Di «hola» a una manera diferente de chatear: Signal se enfoca en la privacidad, pero con todas las características que esperas de una aplicación de chat.</p>
                            <br />
                            <button className={`button is-medium is-white has-text-link ${colorStyle.primary_fg}`}>Descargar Signal</button>
                        </div>
                        <div className="column">
                            <div className="columns is-centered">
                                <div className="column is-two-thirds">
                                    <figure className="image">
                                        <img className={`${imageStyle.image}`} src="/phone.png" alt="" />
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
