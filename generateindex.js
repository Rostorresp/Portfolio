const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio</title>
    <!-- fonts google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&family=Roboto:wght@300;400;700;900&display=swap"
        rel="stylesheet">
    <!-- //fonts google -->

    <!-- fontAwesome -->
    <script src="https://kit.fontawesome.com/04294075b3.js" crossorigin="anonymous"></script>
    <!-- //fontAwesome -->

    <link rel="stylesheet" href="/ghpages-portfolio/css/app.css">
</head>

<body>
    <header class="header">
        <div class="contenido-header menu-fixed">
            <div id="scrollBtn">
                <i class="fa-sharp fa-solid fa-house botton-up" id="btonHouse"></i>
                <i class="fas fa-arrow-up botton-up" id="arrowUp" style="display:none"></i>
            </div>
            <nav class="navegacion-principal">
                <a class="navegacion-enlace" href="#sobre-mi">Sobre mí</a>
                <a class="navegacion-enlace" href="#experiencia">Experiencia</a>
                <a class="navegacion-enlace" href="#proyectos">Proyectos</a>
            </nav>
        </div>
        <div class="barra-responsive">
            <i id="close" class="menu-close fa-sharp fa-solid fa-xmark hidden"></i>
            <i id="menu" class="menu-boton fa-solid fa-bars"></i>
            <nav id="navegacion__responsive-id" class="navegacion__responsive">
                <a class="navegacion__enlace-responsive" href="#sobre-mi">Sobre mí</a>
                <a class="navegacion__enlace-responsive" href="#experiencia">Experiencia</a>
                <a class="navegacion__enlace-responsive" href="#proyectos">Proyectos</a>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="hero-contenido">
            <div class="hero-imagen">
                <picture>
                    <source srcset="/ghpages-portfolio/img/coding-amico.webp" type="image/webp">
                    <img loading="lazy" width="200" height="300" src="/ghpages-portfolio/img/coding-amico.png" alt="imagen-main">
                </picture>
            </div>
            <div class="hero-texto">
                <h2 class="no-margin">Rosmery Torres</h2>
                <p class="no-margin">Frontend web developer</p>
            </div>
        </div>
    </section>

    <!-- ---------------------Ending Header------------- -->
    <span id="sobre-mi"></span>
    <h3 class="main-titulo no-margin centrar-texto">Sobre mí</h3>
    <main id="sobre-mi" class="contenedor sobre-mi">
        <div class="contenido-sobre-mi">
            <p>Como estudiante autodidacta de programación web, tengo experiencia trabajando como desarrolladora
                frontend freelance. Estoy buscando una oportunidad para crecer en mi carrera y desarrollar mis
                habilidades mientras continúo con mi educación. Estoy buscando un trabajo a tiempo completo o parcial
                que me permita hacerlo.
            </p>
            <p>
                Además, soy una persona proactiva, responsable y comprometida con mi trabajo. Estoy dispuesta a trabajar
                en equipo y colaborar con otros desarrolladores para lograr los objetivos de la empresa. También estoy
                dispuesta a aprender y mejorar continuamente, ya sea a través de cursos o prácticas en el trabajo.
            </p>
            <p>
                En resumen, estoy buscando una oportunidad de trabajo en la que pueda seguir creciendo y desarrollando
                mis habilidades, mientras contribuyo al crecimiento y éxito de la empresa. Estoy segura de que, con mi
                experiencia y dedicación, podré ser un valioso miembro de cualquier equipo de desarrollo.
            </p>
        </div>

        <div class="iconos">
            <div class="tecnologias">
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-html5 html"></i>
                    <p>HTML5</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-css3-alt css3"></i>
                    <p>CSS3</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class=" fa-brands fa-square-js javascript"></i>
                    <p>JavaScript</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-sass sass"></i>
                    <p>SASS</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-gulp gulp"></i>
                    <p>Gulp</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-git-alt github"></i>
                    <p>GIT</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-react react"></i>
                    <p>React</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-bootstrap bootstrap"></i>
                    <p>Bootstrap</p>
                </div>
                <div class="contenedor-tecnologias">
                    <i class="fa-brands fa-figma figma"></i>
                    <p>Figma</p>
                </div>
            </div>
        </div>
    </main>

    <!---------------------- Ending main ---------------------------- -->
    <span id="experiencia"></span>
    <h3 class="experiencia-titulo centrar-texto">Formación y Experiencia</h3>
    <section class="contenedor">
        <div class="experiencia-contenedor">

            <div class="educacion">
                <div class="educacion-bloque">
                    <h4>Programación web con JavaScript</h4>
                    <span class="educacion-date"> 2021 - 2022</span>
                    <p>Universidad Tecnológica Nacional</p>
                    <div class="educacion-enlace">
                        <a href="https://drive.google.com/file/d/1t6UaA5vZdMptYB4UKRWxqQhEIpr26Yk-/view?usp=sharing"
                            target="_blank">Certificado</a>
                    </div>
                </div>

                <div class="educacion-bloque">
                    <h4>#SéProgramar</h4>
                    <span class="educacion-date"> 2021 - 2022</span>
                    <p>Argentina Programa</p>
                    <div class="educacion-enlace">
                        <a href="https://drive.google.com/file/d/1-Xgdc4ArOb-biIqhldEQOx-66B28-qiX/view?usp=sharing"
                            target="_blank">Certificado</a>
                    </div>
                </div>

                <div class="educacion-bloque">
                    <h4>Responsive Design</h4>
                    <span class="educacion-date"> 2021 - 2021</span>
                    <p>Platzi</p>
                    <div class="educacion-enlace">
                        <a href="https://drive.google.com/file/d/1U-K3nvaqVnk_iGiBQUdysVnf2PnpPqjP/view?usp=sharing"
                            target="_blank">Certificado</a>
                    </div>
                </div>

                <div class="educacion-bloque">
                    <h4>Desarrollo Web Online Completo</h4>
                    <span class="educacion-date"> 2021 - 2021</span>
                    <p>Platzi</p>
                    <div class="educacion-enlace">
                        <a href="https://drive.google.com/file/d/1RlX18Xvb_njQ4HdMsAIXHLMZKa_0qicB/view?usp=sharing"
                            target="_blank">Certificado</a>
                    </div>
                </div>
            </div>

            <div class="experiencia">
                <div class="experiencia-bloque">
                    <h4>Desarrollador web Freelance</h4>
                    <p>Maindevs | 2021 - 2022</p>
                    <ul>
                        <li>Desarrollo de aplicaciones web a medida.</li>
                        <li>Creación de interfaces de usuario empleando figma.</li>
                        <li>Reuniones regulares, desarrollo de soluciones y estimación de tiempos.</li>
                    </ul>
                </div>
                <a target="_blank"
                    href="https://drive.google.com/file/d/14AgKXgz-KSZkHPSddwUfGvNC69K-i2aZ/view?usp=sharing">Resumen</a>
            </div>
        </div>
    </section>
    <!---------------------- Ending experience ---------------------------- -->

    <!-- <picture>
        <source srcset="/ghpages-portfolio/img/coding-amico.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="/ghpages-portfolio/img/coding-amico.png" alt="imagen-main">
    </picture> -->

    <section id="proyectos" class="proyectos">
        <h2 class="centrar-texto">Proyectos</h2>
        <div class="contenedor">
            <div class="proyectos-contenedor">

                <article class="proyectos-articulo">
                    <picture>
                        <source srcset="/ghpages-portfolio/img/sitelogo.webp" type="image/webp">
                        <img src="/ghpages-portfolio/img/sitelogo.png" width="500" alt="image-sitelogo">
                    </picture>
                    <div class="proyectos-detail">
                        <h3>Landing Page</h3>

                        <a href="https://sitelogo.netlify.app/" target="_blank">Demo</a>
                    </div>
                </article>

                <article class="proyectos-articulo">
                    <picture>
                        <source srcset="/ghpages-portfolio/img/landingcoffee.webp" type="image/webp">
                        <img src="/ghpages-portfolio/img/landingcoffee.png" width="500" alt="image-landingcoffe">
                    </picture>
                    <div class="proyectos-detail">
                        <h3>Blog de Café</h3>
                        <a href="https://landingcoffee.netlify.app/" target="_blank">Demo</a>
                    </div>
                </article>

                <article class="proyectos-articulo">
                    <picture>
                        <source srcset="/ghpages-portfolio/img/tresenuno.webp" type="image/webp">
                        <img src="/ghpages-portfolio/img/tresenuno.png" width="500" alt="image-tresenuno">
                    </picture>
                    <div class="proyectos-detail">
                        <h3>Tres en Raya</h3>
                        <a href="https://tresenuno.netlify.app/" target="_blank">Demo</a>
                    </div>
                </article>

                <article class="proyectos-articulo">
                    <picture>
                        <source srcset="/ghpages-portfolio/img/rockfestivale.webp" type="image/webp">
                        <img src="/ghpages-portfolio/img/rockfestivale.png" width="500" alt="image-sitestorefrontend">
                    </picture>
                    <div class="proyectos-detail">
                        <h3>Rock & EDM</h3>
                        <a href="https://rockfestivale.netlify.app/" target="_blank">Demo</a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!---------------------- Ending proyectos ---------------------------- -->

    <footer class="footer">
        <div class="footer-contenido contenedor">
            <div class="footer-redes">
                <a href="https://github.com/Rostorresp" target="_blank" class="one"></a>
                <a href="mailto:rosmery.torres.dev@gmail.com" target="_blank" class="two"></a>
                <a href="https://www.linkedin.com/in/rosmerytorres/" target="_blank" class="three"></a>
                <!-- <a href="https://wa.me/+5491135234973" target="_blank" class="four"></a> -->
            </div>
            <div class="footer-texto">
                <p class="centrar-texto">Hecho con ❤️ por Rosmery Torres - Código disponible en
                    <a href="https://github.com/Rostorresp/ghpages-portfolio" target="_blank">GitHub</a>
            </div>
        </div>
    </footer>

    <script src="/ghpages-portfolio/js/app.js"></script>
</body>

</html>`;




fs.writeFile('./build/index.html', html, (err) => {
    if (err) throw err;
    console.log('index.html created successfully');
});