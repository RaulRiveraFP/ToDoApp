import { header } from "./componentes/header.js";
import { alumno } from './vistas/alumno.js';
import { admin } from './vistas/admin.js';
import { login } from "./vistas/login.js";
import Usuarios from "./bd/ususario.js";

// Función para cargar la vista según el rol del usuario
function cargarVistaSegunRol(email) {
    const rol = Usuarios.obtenerRolUsuario(email);
    console.log(rol);
    if (rol === 'alumno') {
        document.querySelector('main').innerHTML = alumno.template;
        alumno.script();
    } else {
        document.querySelector('main').innerHTML = admin.template;
        admin.script();
    }
}

// Verificar si hay un usuario logeado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el email del usuario logeado del localStorage
    const emailUsuario = localStorage.getItem('email');
    if (emailUsuario) {
        // Cargar la vista correspondiente según el rol del usuario
        cargarVistaSegunRol(emailUsuario);
    } else {
        // Si no hay usuario logeado, redirigir al formulario de inicio de sesión
        document.querySelector('main').innerHTML = login.template;
        login.script();
    }
});




document.querySelector('header').innerHTML =  header.template 
header.script()

