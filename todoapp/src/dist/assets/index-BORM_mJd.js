(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const d={obtenerTickets(){return JSON.parse(localStorage.getItem("tareasPendientes"))||[]},guardarTicket(t){let e=this.obtenerTickets();e.push(t),localStorage.setItem("tickets",JSON.stringify(e))},buscarTicket(t){const e=this.obtenerTickets();console.log(e)},pintaTickets(){const t=JSON.parse(localStorage.getItem("tareasPendientes"))||[];let e="";t.forEach(o=>{e+=`
                <tr data-tareaid="${o.id}">
                    <td>${o.id}</td>
                    <td>${o.fecha}</td>
                    <td>${o.aula}</td>
                    <td>${o.grupo}</td>
                    <td>${o.ordenador}</td>
                    <td>${o.descripcion}</td>
                    <td>${o.tarea}</td>
                    <td><button class="btn btn-success botonCompletar" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil botonEditar" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger botonBorrar" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button>
                </tr>
            `});const s=document.getElementById("adminTbody");s.innerHTML=e},pintaTicketsCompletados(){const t=JSON.parse(localStorage.getItem("ticketsResueltos"))||[];let e="";t.forEach(o=>{e+=`
                <tr>
                    <td>${o.id}</td>
                    <td>${o.fecha}</td>
                    <td>${o.aula}</td>
                    <td>${o.grupo}</td>
                    <td>${o.ordenador}</td>
                    <td>${o.descripcion}</td>
                    <td>${o.tarea}</td>
                </tr>
            `});const s=document.getElementById("tareasCompletadas");s.innerHTML=e},resolverTicket(t){if(t){let e=this.obtenerTickets(),s=e.findIndex(r=>r.id===t);const o=e.splice(s,1)[0];let a=JSON.parse(localStorage.getItem("ticketsResueltos"))||[];a.push(o),localStorage.setItem("ticketsResueltos",JSON.stringify(a)),localStorage.setItem("tareasPendientes",JSON.stringify(e)),this.pintaTickets(),this.pintaTicketsCompletados()}else console.error("Se necesita proporcionar un ID válido para resolver el ticket.")},findIndex(t){return this.obtenerTickets().findIndex(s=>s.id===t)},borrarTicket(t){let e=this.obtenerTickets();const s=e.findIndex(o=>o.id===t);e.splice(s,1),localStorage.setItem("tareasPendientes",JSON.stringify(e)),this.pintaTickets()}},n={template:`
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
                    <tbody id="adminTbody">
                        <!-- Aquí se añadirán las tareas -->
                    </tbody>
                </table>
                <h2 class="mt-5">Tickets resueltos</h2>
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
                        </tr>
                    </thead>
                    <tbody id="tareasCompletadas">
                        <!-- Aquí se añadirán los tickets resueltos -->
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"><\/script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"><\/script>
        </body>
    `,script:()=>{d.pintaTickets(),d.pintaTicketsCompletados(),document.querySelector("#adminTbody").addEventListener("click",t=>{if(t.target.classList.contains("botonBorrar")){const e=t.target.closest("tr").dataset.tareaid;d.borrarTicket(e)}if(t.target.classList.contains("botonCompletar")){const e=t.target.closest("tr").dataset.tareaid;console.log(t.target.closest("tr").dataset),d.resolverTicket(e)}})}},c={obtenerUsuarios(){return JSON.parse(localStorage.getItem("usuarios"))||[]},guardarUsuario(t){let e=this.obtenerUsuarios();e.push(t),localStorage.setItem("usuarios",JSON.stringify(e))},buscarUsuario(t,e){const s=this.obtenerUsuarios();return console.log("email login",t),console.log("pass login",e),!!s.find(a=>a.email===t&&a.password===e)},obtenerRolUsuario(t){const s=this.obtenerUsuarios().find(o=>o.email===t);return s?s.rol:null}},u={template:`
    
    <div class="d-flex flex-column gap-4 w-100">
    <div class="border w-100 p-2">
        <div>
            <input class="form-control mb-3" type="text" id="tarea" placeholder="Introduce tu nombre">
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

    `,script:()=>{function t(){const e=document.getElementById("tarea").value,s=document.getElementById("aula").value,o=document.getElementById("grupo").value,a=document.getElementById("ordenador").value,r=document.getElementById("descripcion").value,l=v(),h=Math.floor(Math.random()*20);function v(){const m=new Date,y=String(m.getDate()).padStart(2,"0"),S=String(m.getMonth()+1).padStart(2,"0"),I=m.getFullYear();return`${y}/${S}/${I}`}const p={id:h,tarea:e,aula:s,grupo:o,ordenador:a,descripcion:r,completada:!1,fecha:l};console.log(p);let b=JSON.parse(localStorage.getItem("tareasPendientes"))||[];b.push(p),localStorage.setItem("tareasPendientes",JSON.stringify(b))}document.querySelector(".addTarea").addEventListener("click",t)}},i={template:`
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
    `,script:()=>{document.getElementById("loginForm").addEventListener("submit",e=>{e.preventDefault(),e.stopPropagation();const s=document.getElementById("emailLogin").value,o=document.getElementById("passwordLogin").value,a=c.buscarUsuario(s,o);if(console.log(a),a==!0){localStorage.setItem("email",s);const r=localStorage.getItem("email");r&&(document.querySelector("#email").innerHTML=r),t(s),localStorage.setItem("rol",a.rol),console.log("Inicio de sesión exitoso:",a)}else console.log("Credenciales incorrectas. Por favor, inténtalo de nuevo.")});function t(e){const s=c.obtenerRolUsuario(e);console.log(s),s==="alumno"?(document.querySelector("main").innerHTML=u.template,u.script()):(document.querySelector("main").innerHTML=n.template,n.script())}}},g={template:`
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
    `,script:()=>{document.getElementById("registroForm").addEventListener("submit",t=>{t.preventDefault(),t.stopPropagation();const e=document.getElementById("nombre").value,s=document.getElementById("emailForm").value,o=document.getElementById("password").value,a=document.querySelector('input[name="rol"]:checked').value;localStorage.setItem("email",s);const r={nombre:e,email:s,password:o,rol:a};c.guardarUsuario(r),console.log("Usuario registrado:",c.obtenerUsuarios()),document.querySelector("main").innerHTML=i.template,i.script()})}},f={template:`
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
    `,script:()=>{const t=localStorage.getItem("email");console.log(t),t&&(document.querySelector("#email").innerHTML=t),document.querySelector(".signHeader").addEventListener("click",()=>{document.querySelector("main").innerHTML=g.template,g.script()}),document.querySelector(".loginHeader").addEventListener("click",()=>{document.querySelector("main").innerHTML=i.template,i.script()}),document.querySelector(".panelHeader").addEventListener("click",()=>{console.log("test"),document.querySelector("main").innerHTML=n.template,n.script(9)})}};function T(t){const e=c.obtenerRolUsuario(t);console.log(e),e==="alumno"?(document.querySelector("main").innerHTML=u.template,u.script()):(document.querySelector("main").innerHTML=n.template,n.script())}document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("email");t?T(t):(document.querySelector("main").innerHTML=i.template,i.script())});document.querySelector("header").innerHTML=f.template;f.script();
