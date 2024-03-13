import tickets from "../bd/tickets"

export const alumno = {
    template:`
    
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

    `,
    script: () =>{
        //Base de datos

        // Añadir tarea

        // const addTarea = document.querySelector('.addTarea')
        // addTarea.addEventListener('click', (e) =>{
        //     const input = document.querySelector('#tarea')
        //     const textoInput = input.value
        //     let nuevoId = (bd[bd.length-1]?.id) + 1 || 1

        //     //Creamos objeto con info de tarea
        //     const tareaObject = {
        //         id: nuevoId,
        //         texto: textoInput,
        //         completado: false,
        //         fecha: new Date()
        //     }

        //     bd.push(tareaObject)
        //     pintarTareas(bd)
        // })


        // function pintarTareas(bd) {
            
        //     let cards = ''
            
            
        //     bd.map((item) => {
        //         cards += `
        //         <div class="tarea border shadow m-2 p-2 d-flex justify-content-between " data-tarea-id="${item.id}">
        //             <div class="textoTarea d-flex align-items-center p-2">${item.texto}</div>
        //             <div>
        //             <button class="botonEditar m-1 p-1">✏</button>
        //             <button class="botonBorrar m-1 p-1">🗑</button>
        //             <button class="botonCompletar m-1 p-1">✔</button>
        //             </div>
        //         </div>
        //         `
        //     })
        //     document.querySelector('#tareasPendientes').innerHTML = cards
        // }


        

        // Función para agregar una nueva tarea
        function agregarTarea() {
            // Obtener los valores de la tarea
            const tareaInput = document.getElementById('tarea').value;
            const aulaInput = document.getElementById('aula').value;
            const grupoInput = document.getElementById('grupo').value;
            const ordenadorInput = document.getElementById('ordenador').value;
            const descripcionInput = document.getElementById('descripcion').value;
            const fechaCreacion = obtenerFechaActual();
            const id = Math.floor(Math.random() * 20); // Genera un id único
        
            function obtenerFechaActual() {
                const ahora = new Date();
                const dia = String(ahora.getDate()).padStart(2, '0');
                const mes = String(ahora.getMonth() + 1).padStart(2, '0');
                const año = ahora.getFullYear();
                return `${dia}/${mes}/${año}`;
            }
            
            // Crear el objeto de la nueva tarea
            const nuevaTarea = {
                id: id,
                tarea: tareaInput,
                aula: aulaInput,
                grupo: grupoInput,
                ordenador: ordenadorInput,
                descripcion: descripcionInput,
                completada: false,
                fecha: fechaCreacion
            };
        
            console.log(nuevaTarea);
            // Guardar la nueva tarea en localStorage
            let tareasPendientes = JSON.parse(localStorage.getItem('tareasPendientes')) || [];
            tareasPendientes.push(nuevaTarea);
            localStorage.setItem('tareasPendientes', JSON.stringify(tareasPendientes));
        }
        

        // Evento para agregar una tarea al hacer clic en el botón "Añadir tarea"
        document.querySelector('.addTarea').addEventListener('click', agregarTarea);

    }
}
