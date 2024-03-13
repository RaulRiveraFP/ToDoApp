// registro.js
import Usuarios from '../bd/ususario';
import { login } from './login';

export const registro = {
    template: `
        <div class="registro-container container ">
            <h2 class="text-center">Registro</h2>
            <form id="registroForm" class="col-6 m-auto">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="emailForm" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" required>
                </div>
                <div class="mb-3">
                    <label for="rol">Rol:</label><br>
                    <input type="radio" id="alumno" name="rol" value="alumno" required>
                    <label for="alumno">Alumno</label><br>
                    <input type="radio" id="profesor" name="rol" value="profesor">
                    <label for="profesor">Profesor</label><br>
                    <input type="radio" id="admin" name="rol" value="admin">
                    <label for="admin">Administrador</label><br>
                </div>
                <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
        </div>
    `,
    script: () => {
        document.getElementById('registroForm').addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar que el formulario se envíe
            event.stopPropagation();
            // Recoger los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('emailForm').value;
            const password = document.getElementById('password').value;
            const rol = document.querySelector('input[name="rol"]:checked').value;
            localStorage.setItem('email', email)
            // Crear un objeto de usuario
            const usuario = {
                nombre: nombre,
                email: email,
                password: password,
                rol: rol
            };

            // Guardar el usuario utilizando el módulo Usuarios
            Usuarios.guardarUsuario(usuario);

            // Aquí puedes enviar los datos a tu servidor para el registro
            console.log("Usuario registrado:", Usuarios.obtenerUsuarios());
            document.querySelector('main').innerHTML = login.template
            login.script()

            // Lógica de registro...
        });
    }
};
