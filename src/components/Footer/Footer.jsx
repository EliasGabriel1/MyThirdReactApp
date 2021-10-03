import React from 'react';
import useStyles from './styles';
import Copyright from './Copyright/Copyright'

const Footer  = () => {
  const classes = useStyles();

  return (
    <>
        <div className={classes.Container}>
            <div className={classes.MxW}>
                <div>
                    <div>
                        <h1>Atendimento</h1>
                        <div>
                            <ul className={classes.footerAtendimento}>
                                <li className={classes.main}>
                                    <span className={classes.footer}>
                                    <a href="https://api.whatsapp.com/send?phone=5599999999999" className={classes.footer}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                            <span>(99) 99999-9999</span></a></span></li>
                                <li className={classes.footer}><span className={classes.footer}>
                                    <a href="tel:5599999999999" target="_blank" className={classes.footer}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                        <span> (99) 99999-9999</span></a></span>
                                        </li>
                                <li className={classes.footertTell}><span className={classes.footer}><a href="mail:contato@dolphin.com.br" className={classes.footer}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                    <span>contato@dolphin.com.br</span></a></span>
                                    </li>
                                <li className={classes.footer}><span>Atendimento de Segunda a Quinta, das 9h às 18h e aos Sextas das 8h às 17h.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Institucional</h1>
                        <div>
                            <ul className={classes.footerinstitucional}>
                                <li className={classes.footer}><a href="/empresa" className={classes.footer}>Empresa</a></li>
                                <li className={classes.footer}><a href="/cart" className={classes.footer}>Meus Pedidos</a></li>
                                <li className={classes.footer}><a href="/contato" className={classes.footer}>Contato</a></li></ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Helper</h1>
                        <div>
                            <ul className={classes.footerAjuda}>
                                <li className={classes.footer}><a href="/Topico1" className={classes.footer}>Topico 1</a></li>
                                <li className={classes.footer}><a href="/Topico2" className={classes.footer}>Topico 2</a></li>
                                <li className={classes.footer}><a href="/Topico3" className={classes.footer}>Topico 3</a></li>
                                <li className={classes.footer}><a href="/Topico4" className={classes.footer}>Topico 4</a></li>
                                <li className={classes.footer}><a href="/Topico5" className={classes.footer}>Topico 5</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Pagamentos</h1>
                        <div>
                            <ul className={classes.footerCart}>
                                <li className={classes.footer}>
                                    <img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqboletoonline.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Boleto Bancário"/></li>
                                <li className={classes.footer}>
                                    <img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqboletotraycheckout.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Boleto - Yapay"/></li>
                                <li className={classes.footer}><img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqitaushoplinetraycheckout.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Transf. Itau"/></li>
                                <li className={classes.footer}><img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqtransfbradescotraycheckout.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Transf. Bradesco"/></li>
                                <li className={classes.footer}><img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqtransfbbtraycheckout.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Transf. Banco do Brasil"/></li>
                                <li className={classes.footer}><img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqAuxilioEmergencialCaixa.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Auxílio Emergencial Caixa - Yapay"/></li>
                                <li className={classes.footer}><img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqcartavisatraycheckout.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Cartão Visa - Yapay"/></li>
                                <li className={classes.footer}><img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqmastercardtraycheckout.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Cartão MasterCard - Yapay"/></li>
                                <li className={classes.footer}><img className={classes.footer}
                                        src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqdinerstraycheckout.png?4c35674b5dd7dda7d3e6210408ac869c"
                                        alt="Cartão Diners - Yapay"/></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright/>
        </div>
    </>
  );
};

export default Footer;