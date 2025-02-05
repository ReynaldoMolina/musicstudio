class SpecialNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="container navbar-container">
            <div class="container navbar">
                <div class="container logo">
                    <a class="container" href="index.html">
                        <img class="logo-img" src="images/logo.jpg" alt="Inicio">
                    </a>
                </div>
                <div class="container menu">
                    <a class="container menu-link" href="index.html">INICIO</a>

                    <div class="container menu-link" id="menu" href="html/servicios.html">
                        <a class="container menu-link" id="menu" href="html/servicios.html">SERVICIOS ▼</a>
                        <div class="container servicios-menu">
                            <a class="container" href="html/grabacion.html">GRABACION</a>
                            <a class="container" href="html/mezcla.html">MEZCLA & MASTERING</a>
                            <a class="container" href="html/reamping.html">REAMPING</a>
                        </div>
                    </div>
                    
                    <a class="container menu-link" href="html/equipos.html">LISTA DE EQUIPO</a>
                    <a class="container menu-link" href="html/tarifas.html">TARIFAS</a>
                </div>  
            </div>
        </nav>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="container footer">
                <div class="container footer-container">
                    <div class="container footer-info">
                        <div class="container address">
                            <p>Iglesia La Recolección 1 Cuadra al Norte, 1/2 al Oeste;</p>
                            <p>León - Nicaragua</p>
                        </div>
                        <p>contacto@supraural.com</p>
                        <a href="https://api.whatsapp.com/send?phone=89131100" target="_blank">(+505) 89131100</a>
                    </div>
                    <div class="container footer-info">
                        <a class="container" href="https://www.facebook.com/SuprauralStudio" target="_blank">
                            <img src="https://www.supraural.com/images/icono%20de%20fb.png" alt="Facebook">
                        </a>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('special-navbar', SpecialNavbar);
customElements.define('special-footer', SpecialFooter);