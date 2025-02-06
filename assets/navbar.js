// const basePath = window.location.pathname.includes("/musicstudio/assets/") ? "." : "..";

class SpecialNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="flx navbar-container">
        <div class="flx navbar">
          <a class="flx logo" href="./">
            <img class="logo-img" src="./assets/images/logo.jpg" alt="Inicio">
          </a>
          <menu class="flx menu">
            <a class="flx menu-link" href="./">INICIO</a>

            <div class="flx flx-col menu-link menu-services" href="./servicios.html">
              <a class="flx menu-link service-link" href="./servicios.html">SERVICIOS ▼</a>
              <div class="flx flx-col sub-menu">
                <a class="flx menu-link service-link" href="./grabacion.html">GRABACION</a>
                <a class="flx menu-link service-link" href="./mezcla.html">MEZCLA & MASTERING</a>
                <a class="flx menu-link service-link" href="./reamping.html">REAMPING</a>
              </div>
            </div>
            
            <a class="flx menu-link" href="./equipos.html">LISTA DE EQUIPO</a>
            <a class="flx menu-link" href="./tarifas.html">TARIFAS</a>
          </menu>  
        </div>
      </header>
    `
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="flx footer">
        <div class="flx footer-container">
          <div class="flx footer-info">
            <div class="flx address">
              <p>Iglesia La Recolección 1 Cuadra al Norte, 1/2 al Oeste;</p>
              <p>León - Nicaragua</p>
            </div>
            <p>contacto@supraural.com</p>
            <a href="https://api.whatsapp.com/send?phone=89131100" target="_blank">(+505) 89131100</a>
          </div>
          <div class="flx footer-info">
            <a class="flx" href="https://www.facebook.com/SuprauralStudio" target="_blank">
              <img src="./assets/images/facebook.svg" alt="Facebook">
            </a>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('special-navbar', SpecialNavbar);
customElements.define('special-footer', SpecialFooter);