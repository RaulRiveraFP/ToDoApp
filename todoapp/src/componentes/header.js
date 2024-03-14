import { admin } from "../vistas/admin";
import { login } from "../vistas/login";
import { registro } from "../vistas/registro"; // Importa la vista de registro aquí

export const header = {
    template:`
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
                <div>
                    <button class="panelHeader btn btn-secondary ms-2">PANEL</button>
                    <button class="loginHeader btn btn-secondary ms-2">LOGIN</button>
                    <button class="signHeader btn btn-secondary ms-2">REGISTRO</button>
                </div>
                <div>
                    <span id="email"></span>
                </div>
            </div>
        </nav>
    </header>
    `,
    script: () =>{
      const email = localStorage.getItem('email')
      console.log(email);
      if(email){
        document.querySelector('#email').innerHTML = email
        
      }
        // Añade el evento de clic para el botón de registro
        document.querySelector('.signHeader').addEventListener('click', () => {
            document.querySelector('main').innerHTML = registro.template;
            registro.script()
          });

          document.querySelector('.loginHeader').addEventListener('click', () => {
            document.querySelector('main').innerHTML = login.template;
            login.script()
          });
        // Añade el evento de clic para el botón del panel (ya existente)
        document.querySelector('.panelHeader').addEventListener('click', () => {
            console.log('test');
            document.querySelector('main').innerHTML = admin.template;
            admin.script(9)
        });
    }
}
