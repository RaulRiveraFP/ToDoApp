import { header } from "./src/componentes/header";
import { alumno } from './src/vistas/alumno.js';
import { admin } from './src/vistas/admin.js';
import { login } from "./src/vistas/login.js";
import Usuarios from "./src/bd/ususario.js";

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

