import { admin } from "../vistas/admin";
// import { login } from "../vistas/login";
// import { sign } from "../vistas/sign";
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
      <span>administrador@fpllefia.com</span>
      
    </div>
  </div>
</nav>
</header>
    `,
    script: () =>{
        document.querySelector('.panelHeader').addEventListener('click', ()=>{
            console.log('test');
            document.querySelector('main').innerHTML = admin.template
        })
    }
}
