import { alumno } from "./src/vistas/alumno";
import { header } from "./src/componentes/header";
document.querySelector('main').innerHTML =  alumno.template 
alumno.script()
document.querySelector('header').innerHTML =  header.template 
header.script()

