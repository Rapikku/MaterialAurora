// array de contenido selector de spans
let spans = document.querySelectorAll(".info-item span")

//título del documento
spans[0].textContent = document.title;

//URL actual
spans[1].textContent = document.URL;

//el idioma del documento y del navegador
spans[2].textContent = `Idioma documento: ${document.documentElement.lang}; Idioma navegador: ${navigator.language}` ;

//ancho y alto de la ventana del navegador
spans[3].textContent = `${window.innerHeight} x ${window.innerWidth}`;

//ancho y alto de la pantalla
spans[4].textContent = `${screen.height} x ${screen.width}`;

//el UserAgent del navegador
spans[5].textContent = navigator.userAgent;

//ejercicio 3.2

//selector iframe
const iframe = document.querySelector("iframe");
console.log(iframe) 

//mostrar URL
const selecIframe= document.querySelector(".notice");
selecIframe.textContent = iframe.contentWindow.location.href;

