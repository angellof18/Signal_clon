import React from 'react'

export const Body = () => {
    return (
        <>
            <section className="hero is-hidden-mobile">
                <div className="hero-body">
                    <div className="content">
                        <div className="columns is-centered">
                            <div className="column is-full has-text-centered">
                                <p className="title is-size-1 is-size-3-mobile has-text-black">¿Por qué usar Signal?</p>
                                <p className='is-size-5 is-size-6-mobile'>Continúa hacia abajo para comprobar por qué Signal es una aplicación de chat simple, potente y segura</p>
                                <br /><br />

                                <div className="columns is-centered">
                                    <div className="column is-half has-text-left pr-6">
                                        <p className="title is-size-1 is-size-3-mobile has-text-black">Comparte sin inseguridades</p>
                                        <p className='is-size-5 is-size-6-mobile'>El cifrado de extremo a extremo de última generación (respaldado por el protocolo de código abierto de Signal) mantiene tus chats seguros. Ni nosotros podemos acceder a tu lista de contactos, leer tus mensajes, ni escuchar tus llamadas. Tampoco nadie más. La privacidad no es un modo opcional, es cómo funciona Signal. En todos tus mensajes, todas tus llamadas, para siempre.</p>
                                    </div>
                                    <div className="column">
                                        <figure className="image is-square">
                                            <img src="/vid.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero is-hidden-desktop">
                <div className="hero-body">
                    <div className="content">
                        <div className="columns is-centered">
                            <div className="column is-full has-text-centered">
                                <p className="title is-size-1 is-size-3-mobile has-text-black">¿Por qué usar Signal?</p>
                                <p className='is-size-5 is-size-6-mobile'>Continúa hacia abajo para comprobar por qué Signal es una aplicación de chat simple, potente y segura</p>
                                <br />
                                <figure className="image is-square">
                                    <img src="/vid.png" alt="" />
                                </figure>
                                <br /><br />
                                <div className="columns is-centered">
                                    <div className="column is-half has-text-left pr-6">
                                        <p className="title is-size-1 is-size-3-mobile has-text-black">Comparte sin inseguridades</p>
                                        <p className='is-size-5 is-size-6-mobile'>El cifrado de extremo a extremo de última generación (respaldado por el protocolo de código abierto de Signal) mantiene tus chats seguros. Ni nosotros podemos acceder a tu lista de contactos, leer tus mensajes, ni escuchar tus llamadas. Tampoco nadie más. La privacidad no es un modo opcional, es cómo funciona Signal. En todos tus mensajes, todas tus llamadas, para siempre.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
