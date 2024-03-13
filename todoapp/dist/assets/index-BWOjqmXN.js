(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u={template:`
    <body>
  <main class="container mt-5">
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123459</td>
          <td>18/04/2023</td>
          <td>T6</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Error de impresora</td>
          <td>Ana Martínez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123460</td>
          <td>19/04/2023</td>
          <td>T8</td>
          <td>DAW2</td>
          <td>PC4</td>
          <td>Problema de acceso a archivos</td>
          <td>Pedro Gómez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123461</td>
          <td>20/04/2023</td>
          <td>T6</td>
          <td>DAW1</td>
          <td>PC1</td>
          <td>Aplicación se cierra inesperadamente</td>
          <td>Sofía Fernández</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123462</td>
          <td>21/04/2023</td>
          <td>T7</td>
          <td>DAW2</td>
          <td>PC2</td>
          <td>Problema de conexión a la red</td>
          <td>Luis Torres</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123463</td>
          <td>22/04/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Archivos corruptos</td>
          <td>Carolina Ramírez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>123457</td>
          <td>16/04/2023</td>
          <td>15/05/2023</td>
          <td>T7</td>
          <td>DAW2</td>
          <td>PC1</td>
          <td>Problema de conexión a Internet</td>
          <td>Maria López</td>
          
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
        <tr>
          <td>123458</td>
          <td>17/04/2023</td>
          <td>15/05/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC2</td>
          <td>Pantalla en blanco</td>
          <td>Juan Rodríguez</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
        <tr>
          <td>123459</td>
          <td>18/04/2023</td>
          <td>15/05/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Error de impresora</td>
          <td>Ana Martínez</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
       
       
      </tbody>
    </table>
  </main>
  


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Observaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Código incidencia: <span>123546</span></p>
        <label for="comentario" class="form-label">Comentario:</label> 
        <input class="form-control">Estee es un comentario sobre esta incidencia</input>
        <p class="small text-end">Autor: <span>Pepe Loco</span></p>
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
  </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"><\/script>
</body>
    `},m={obtenerUsuarios(){return JSON.parse(localStorage.getItem("usuarios"))||[]},guardarUsuario(t){let a=this.obtenerUsuarios();a.push(t),localStorage.setItem("usuarios",JSON.stringify(a))},buscarUsuario(t,a){const r=this.obtenerUsuarios();return console.log("email login",t),console.log("pass login",a),!!r.find(e=>e.email===t&&e.password===a)},obtenerRolUsuario(t){const r=this.obtenerUsuarios().find(d=>d.email===t);return r?r.rol:null}},g={template:`
    
    <div class="d-flex flex-column gap-4 w-100">
    <div class="border w-100 p-2">
        <div>
            <input class="form-control mb-3" type="text" id="tarea" placeholder="Introduce tu tarea">
            <input class="form-control mb-3" type="text" id="aula" placeholder="Aula">
            <input class="form-control mb-3" type="text" id="grupo" placeholder="Grupo">
            <input class="form-control mb-3" type="text" id="ordenador" placeholder="Ordenador">
            <textarea class="form-control mb-3" id="descripcion" placeholder="Descripción"></textarea>
            <button class="addTarea btn btn-success ">Añadir tarea</button>
        </div>
    </div>
    <div class="border w-100 p-2">
        <h3>Tareas pendientes</h3>
        <div id="tareasPendientes"></div>
    </div>
    <div class="border w-100 p-2">
        <h3>Tareas completadas</h3>
        <div id="tareasCompletadas"></div>
    </div>
</div>

    `,script:()=>{let t=[],a=[];document.querySelector(".addTarea").addEventListener("click",n=>{var p;const s=document.querySelector("#tarea").value,c={id:((p=t[t.length-1])==null?void 0:p.id)+1||1,texto:s,completado:!1,fecha:new Date};t.push(c),d(t)});function d(n){let i="";n.map(s=>{i+=`
                <div class="tarea border shadow m-2 p-2 d-flex justify-content-between " data-tarea-id="${s.id}">
                    <div class="textoTarea d-flex align-items-center p-2">${s.texto}</div>
                    <div>
                    <button class="botonEditar m-1 p-1">✏</button>
                    <button class="botonBorrar m-1 p-1">🗑</button>
                    <button class="botonCompletar m-1 p-1">✔</button>
                    </div>
                </div>
                `}),document.querySelector("#tareasPendientes").innerHTML=i}function e(n){let i="";n.map(s=>{i+=`
                <div class="tarea border shadow m-2 p-2 d-flex justify-content-between " data-tarea-id="${s.id}">
                    <div class="textoTarea d-flex align-items-center p-2">${s.texto}</div>
                </div>
                `}),document.querySelector("#tareasCompletadas").innerHTML=i}document.querySelector("body").addEventListener("click",n=>{if(n.target.classList.contains("botonBorrar")){const i=n.target.closest(".tarea").dataset.tareaId,s=t.filter(l=>l.id!=i);d(s),t=s}if(n.target.classList.contains("botonEditar")){const i=n.target.closest(".tarea").dataset.tareaId,s=t.filter(l=>l.id!=i);console.log(n.target.closest(".tarea")),document.querySelector("#tareasPendientes").innerHTML=s}if(n.target.classList.contains("botonCompletar")){const i=n.target.closest(".tarea").dataset.tareaId,s=t.filter(c=>c.id==i),l=t.filter(c=>c.id!=i);a=a.concat(s),console.log(a),e(a),t=l,d(l)}});function o(){const n=document.getElementById("tarea"),i=document.getElementById("aula"),s=document.getElementById("grupo"),l=document.getElementById("ordenador"),c=document.getElementById("descripcion"),p={tarea:n.value,aula:i.value,grupo:s.value,ordenador:l.value,descripcion:c.value,completada:!1};let f=JSON.parse(localStorage.getItem("tareasPendientes"))||[];f.push(p),localStorage.setItem("tareasPendientes",JSON.stringify(f))}document.querySelector(".addTarea").addEventListener("click",o)}},b={template:`
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
    `,script:()=>{document.getElementById("loginForm").addEventListener("submit",a=>{a.preventDefault(),a.stopPropagation();const r=document.getElementById("emailLogin").value,d=document.getElementById("passwordLogin").value,e=m.buscarUsuario(r,d);if(console.log(e),e==!0){localStorage.setItem("email",r);const o=localStorage.getItem("email");o&&(document.querySelector("#email").innerHTML=o),t(r),localStorage.setItem("rol",e.rol),console.log("Inicio de sesión exitoso:",e)}else console.log("Credenciales incorrectas. Por favor, inténtalo de nuevo.")});function t(a){const r=m.obtenerRolUsuario(a);console.log(r),r==="alumno"?(document.querySelector("main").innerHTML=g.template,g.script()):(document.querySelector("main").innerHTML=u.template,u.script())}}},v={template:`
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
    `,script:()=>{document.getElementById("registroForm").addEventListener("submit",t=>{t.preventDefault(),t.stopPropagation();const a=document.getElementById("nombre").value,r=document.getElementById("emailForm").value,d=document.getElementById("password").value,e=document.querySelector('input[name="rol"]:checked').value;localStorage.setItem("email",r);const o={nombre:a,email:r,password:d,rol:e};m.guardarUsuario(o),console.log("Usuario registrado:",m.obtenerUsuarios()),document.querySelector("main").innerHTML=b.template,b.script()})}},h={template:`
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
    `,script:()=>{const t=localStorage.getItem("email");console.log(t),t&&(document.querySelector("#email").innerHTML=t),document.querySelector(".signHeader").addEventListener("click",()=>{document.querySelector("main").innerHTML=v.template,v.script()}),document.querySelector(".loginHeader").addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script()}),document.querySelector(".panelHeader").addEventListener("click",()=>{console.log("test"),document.querySelector("main").innerHTML=u.template})}};function y(t){const a=m.obtenerRolUsuario(t);console.log(a),a==="alumno"?(document.querySelector("main").innerHTML=g.template,g.script()):(document.querySelector("main").innerHTML=u.template,u.script())}document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("email");t?y(t):(document.querySelector("main").innerHTML=b.template,b.script())});document.querySelector("header").innerHTML=h.template;h.script();
