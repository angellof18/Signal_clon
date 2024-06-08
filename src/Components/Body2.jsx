import React from 'react'

export const Body2 = () => {
    return (
        <>
            <div className="hero is-hidden-mobile">
                <div className="hero-body">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-4">
                                <p className="title is-size-1 is-size-3-mobile has-text-black">
                                    Sin publicidad. Sin seguimiento. Sin bromas.
                                </p>
                                <p className='is-size-5 is-size-6-mobile'>
                                    No tenemos anuncios, ni vendedores afiliados, ni hacemos un rastreo de tu uso de Signal. Así que concéntrate en compartir los momentos que te importan con las personas que te importan.
                                </p>
                            </div>
                            <div className="column is-7">
                                <figure className="image">
                                    <img style={{ borderRadius: "20px" }} src="/Ads.png" alt="" />
                                </figure>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div className="columns">
                            <div className="column is-offset-1 is-7">
                                <figure className="image">
                                    <img style={{ borderRadius: "20px" }} src="/World.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-4">
                                <p className="title is-size-1 is-size-3-mobile has-text-black">
                                    Gratis para todo el mundo
                                </p>
                                <p className='is-size-5 is-size-6-mobile'>
                                    Signal es una organización independiente sin ánimo de lucro. No dependemos de ninguna compañía tecnológica importante, y tampoco podemos ser adquiridos por una. El desarrollo de Signal se sostiene con subvenciones y donaciones de gente interesada en la privacidad como tú.
                                </p>
                                <button className="button is-link is-outlined is-medium mt-1">Donar a Signal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero is-hidden-desktop">
                <div className="hero-body">
                    <div className="content">
                        <div className="columns">
                            <div className="column ">
                                <figure className="image">
                                    <img style={{ borderRadius: "20px" }} src="/Ads.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-two-fifths">
                                <p className="title is-size-1 is-size-3-mobile has-text-black">
                                    Sin publicidad. Sin seguimiento. Sin bromas.
                                </p>
                                <p className='is-size-5 is-size-6-mobile'>
                                    No tenemos anuncios, ni vendedores afiliados, ni hacemos un rastreo de tu uso de Signal. Así que concéntrate en compartir los momentos que te importan con las personas que te importan.
                                </p>
                            </div>
                        </div>
                        <br /><br />
                        <div className="columns">
                            <div className="column">
                                <figure className="image">
                                    <img style={{ borderRadius: "20px" }} src="/World.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-two-fifths">
                                <p className="title is-size-1 is-size-3-mobile has-text-black">
                                    Gratis para todo el mundo
                                </p>
                                <p className='is-size-5 is-size-6-mobile'>
                                    Signal es una organización independiente sin ánimo de lucro. No dependemos de ninguna compañía tecnológica importante, y tampoco podemos ser adquiridos por una. El desarrollo de Signal se sostiene con subvenciones y donaciones de gente interesada en la privacidad como tú.
                                </p>
                                <button className="button is-link is-outlined is-medium mt-1">Donar a Signal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
