import React from 'react';
import ReactWOW from 'react-wow';
import logo from './assets/logow.png';
import grid1 from './assets/img1.jpg';
import grid2 from './assets/banner2.jpg';
import grid3 from './assets/img4.jpg';
import Slides from './components/Slides/';
import './App.scss';
import 'react-wow/example/assets/styles/animate.css';

class App extends React.Component{
  state = {
    news: {
      error: false,
      success: false
    },
    contact: {
      error: false,
      success: false,
      sending: false
    }
  }

  getCurrentYear()
  {
    let date = new Date();
    return date.getFullYear();
  }

  sendNewsletter()
  {
    let state = this.state;
    let email = document.getElementById('input-newsletter').value;
    if(email.length < 5 || !email.includes("@"))
    {
      state.news.error = true;
      state.news.success = false;
    } else {
      state.news.error = false;
      state.news.success = true;
    }

    console.log(state);
    this.setState(state);
  }

  enviarContato = (form) => 
  {
    form.preventDefault();
    let state = this.state;
    let parent = this;
    state.contact.sending = true;
    parent.setState(state);
    let data = new FormData(form.target);
    if(data){
      setTimeout(function() {
        state.contact.success = true;
        state.contact.error = false;
        state.contact.sending = false;
        parent.setState(state);
      }, 2000);
    }
    
  }

  render() {
    let year = this.getCurrentYear();
    return (
      <div className="App">
          <div className="header">
            <img src={ logo } alt="Jô Verduras" />
            <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Nossa empresa</a></li>
            <li><a href="#produtos">Nossos produtos</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <ReactWOW animation="fadeIn">
              <div className="banner" id="home">
                <div className="description">
                  <h1>Jô Verduras</h1>
                  <p>
                    Hortaliças <span>Frescas</span><br />Para Seus Clientes!
                  </p>
                  <a href="#about">Saiba mais +</a>
                </div>
              </div>
          </ReactWOW>
          <div id="about">
            <ReactWOW animation="fadeInLeft">
              <div>
                <h3>Sobre nossa empresa</h3>
                <h2>Nossa história</h2>
                <p>
                Somos especialistas na área do <b>plantio e cultivo de hortaliças</b> desde 1975, oferecendo produtos frescos de qualidade para supermercados, varejos, sacolões e prefeituras.
                <br /><br />
                O fundador, <b>Josoé Luis Pereira</b>, tem seu pai como inspiração, 
                com quem aprendeu o amor pelo plantio que perpetua até hoje.<br /><br />
                Somos uma das empresas mais conceituadas do mercado, tendo uma história de <b>evolução contínua</b> de nossos produtos, sempre atendendo a demanda de nossos clientes e nos aperfeiçoando a cada dia.
                </p>
                <br /><br />
                <h2>Missão, visão e valores</h2>
                <p>
                  Buscamos ser uma empresa referência no ramo de hortaliças através do fornecimento de produtos com a melhor qualidade de sabor, textura e coloração, trazendo, assim, a satisfação aos clientes.<br /><br />
                  Trabalhamos sempre com integridade, respeito pelas pessoas e características, desenvolvimento humano, foco no consumidor, alta performance e qualidade.
                </p>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="500ms">
              <div className="img-sobre" />
            </ReactWOW>
          </div>
          <div id="produtos">
            <ReactWOW animation="fadeIn">
              <h3>O que fazemos</h3>
              <h2>Produtos de qualidade para seu cliente</h2>
            </ReactWOW>
              <div className="grid">
                <div className="grid-item">
                <ReactWOW animation="fadeInUp" delay="300ms">
                    <div className="half" style={{backgroundImage: `url(${grid1})`}}>
                      <p>Hortaliças <span>em geral</span></p>
                    </div>
                    </ReactWOW>
                    <ReactWOW animation="fadeInUp" delay="500ms">
                        <div className="half" style={{backgroundImage: `url(${grid2})`}}>
                          <p>Verduras <span>frescas</span></p>
                        </div>
                    </ReactWOW>
                </div>
                <div className="grid-item">
                    <ReactWOW animation="fadeInUp" delay="900">
                        <div className="full" style={{backgroundImage: `url(${grid3})`}}>
                          <p>Alimentos <span>saborosos</span></p>
                        </div>
                    </ReactWOW>
                </div>
              </div>
              <Slides />
          </div>
          <ReactWOW animation="fadeIn">
            <div id="newsletter">
              <div className="content">
                <h3>Informações e novidades</h3>
                <h2>Assine nossa newsletter</h2>
                <p>Assim, você fica sabendo de todas as nossas campanhas e divulgações através do e-mail cadastrado!</p>
                <input type="email" name="newsletter" id="input-newsletter" placeholder="Insira seu e-mail"/>
                <button type="button" onClick={() => this.sendNewsletter()}>Cadastrar</button>
                {this.state.news.error && <div className="error">Insira seu e-mail!</div>}
                {this.state.news.success && <div className="success">Seu interesse foi registrado!</div>}
              </div>
            </div>
          </ReactWOW>
          <div id="contato">
            <ReactWOW animation="fadeIn">
              <h3>Contato</h3>
              <h2>Tire suas dúvidas ou deixe sua sugestão</h2>
            </ReactWOW>
              <form onSubmit={this.enviarContato}>
                  <ReactWOW animation="fadeInUp" delay="300ms">
                      <label htmlFor="nome">Nome completo</label>
                      <input type="text" name="nome" required/>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="600ms">
                      <label htmlFor="email">E-mail</label>
                      <input type="email" name="email" required/>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="900ms">
                      <label htmlFor="assunto">Assunto</label>
                      <input type="text" name="assunto" required/>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="1200ms">        
                      <label htmlFor="mensagem">Mensagem</label>
                      <textarea name="mensagem" required></textarea>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" delay="1500ms">
                      {!this.state.contact.sending && !this.state.contact.success && <button type="submit">Enviar contato</button>}
                  </ReactWOW>
                  {this.state.contact.sending && <button type="submit" disabled>Enviando...</button>}
                  {this.state.contact.success && <div className="success">Tudo certo! Em breve, entraremos em contato!</div>}
                  {this.state.contact.error && <div className="error">Ops, não conseguimos enviar sua solicitação :(</div>}
              </form>
          </div>
          <div className="footer">
            <span title="Desenvolvido por Gustavo Barbosa">© {year}</span>&nbsp;<span title="Desenvolvido por Agência Websoft">- Todos os direitos reservados</span>
          </div>
      </div>
    );
  }
}

export default App;
