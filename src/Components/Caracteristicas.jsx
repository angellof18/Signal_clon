import React from 'react';
import colorStyle from './Styles/Colors.module.css';
import imageStyle from './Styles/Image.module.css';

export const Caracteristicas = () => {
    return (
        <section className={`hero ${colorStyle.secondary_bg}`}>
            <br />
            <div className="columns is-centered">
                <div className="column is-12">

                    <div className="columns is-centered mx-3">
                        <div className="column is-half">
                            <div className="box has-text-centered py-6">
                                <div className="columns is-centered is-vcentered">
                                    <div className="column is-two-thirds">
                                        <figure className="image">
                                            <img className={imageStyle.image_char} src="/Media.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <p className="title is-size-3 has-text-black">Di lo que quieras</p>
                                <p className="is-size-6">Envía y recibe mensajes, notas de voz, fotos, vídeos, GIFs y archivos gratis. Signal usa la conexión de datos de tu teléfono por lo que no se generan gastos por SMS o MMS.</p>
                            </div>
                            <div className="box has-text-centered py-6">
                                <div className="columns is-centered is-vcentered">
                                    <div className="column is-two-thirds">
                                        <figure className="image">
                                            <img className={imageStyle.image_char} src="/Stickers.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <p className="title is-size-3 has-text-black">Adhiérete a la privacidad</p>
                                <p className="is-size-6">Añade una nueva capa de expresión a tus chats con los stickers cifrados. También puedes crear y compartir tus propios paquetes de stickers.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box has-text-centered py-6">
                                <div className="columns is-centered is-vcentered">
                                    <div className="column is-two-thirds">
                                        <figure className="image">
                                            <img className={imageStyle.image_char} src="/Calls.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <p className="title is-size-3 has-text-black">Habla con libertad</p>
                                <p className="is-size-6">Haz llamadas y vídeollamadas con calidad cristalina a personas que viven al otro lado de la ciudad o al otro lado del océano sin cargos de larga distancia.</p>
                            </div>
                            <div className="box has-text-centered py-6">
                                <div className="columns is-centered">
                                    <div className="column is-two-thirds">
                                        <figure className="image">
                                            <img className={imageStyle.image_char} src="/Groups.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <p className="title is-size-3 has-text-black">Únete a grupos</p>
                                <p className="is-size-6">Los chats de grupo te permiten conectar fácilmente con tu familia, amistades y compañeros de trabajo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </section>
    )
}
