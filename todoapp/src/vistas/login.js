// login.js
import Usuarios from '../bd/ususario.js';
import { admin } from './admin.js';
import { alumno } from './alumno.js'; // Suponiendo que tienes un componente de panel

export const login = {
    template: `
        <div class="login-container container ">
            <h2 class="text-center">Iniciar sesión</h2>
            <form id="loginForm" class="col-6 m-auto">
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="emailLogin" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="passwordLogin" required>
                </div>
                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
    `,
    script: () => {

        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar que el formulario se envíe
            event.stopPropagation();
            // Recoger los datos del formulario
            const email = document.getElementById('emailLogin').value;
            const password = document.getElementById('passwordLogin').value;

            // Buscar el usuario utilizando el módulo Usuarios
            const usuario = Usuarios.buscarUsuario(email, password);
            console.log(usuario);
            if (usuario == true) {
                localStorage.setItem('email', email)
                const emailLogin = localStorage.getItem('email')
                if(emailLogin){
                    document.querySelector('#email').innerHTML = emailLogin
                }
                cargarVistaSegunRol(email)
                localStorage.setItem('rol', usuario.rol); // Guardar el rol del usuario
                console.log("Inicio de sesión exitoso:", usuario);
                // Redirigir a la vista del panel según el rol del usuario

                
            } else {
                console.log("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
            }
        });
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
    }
};
