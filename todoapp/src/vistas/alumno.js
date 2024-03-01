export const alumno = {
    template:`
    
    <div class="d-flex flex-column gap-4 w-100">
    <div class="border w-100 p-2">
      <div>
        <input class="form-control mb-3" type="text" id="tarea" placeholder="Introduce tu tarea">
        <button class="addTarea btn btn-success ">Añadir tarea</button>
      </div>
    </div>
    <div class="border w-100 p-2">
    <h3>Tareas pendientes</h3>
    <div id="tareasPendientes">
    </div>
    </div>
    <div class="border w-100 p-2"><h3>Tareas completadas</h3>
      <div id="tareasCompletadas">
      </div>
    </div>
</div>
    `,
    script: () =>{
        //Base de datos

        let bd = [] 
        let bdCompletado = []
        // Añadir tarea

        const addTarea = document.querySelector('.addTarea')
        addTarea.addEventListener('click', (e) =>{
            const input = document.querySelector('#tarea')
            const textoInput = input.value
            let nuevoId = (bd[bd.length-1]?.id) + 1 || 1

            //Creamos objeto con info de tarea
            const tareaObject = {
                id: nuevoId,
                texto: textoInput,
                completado: false,
                fecha: new Date()
            }

            bd.push(tareaObject)
            pintarTareas(bd)
        })


        function pintarTareas(bd) {
            
            let cards = ''
            
            
            bd.map((item) => {
                cards += `
                <div class="tarea border shadow m-2 p-2 d-flex justify-content-between " data-tarea-id="${item.id}">
                    <div class="textoTarea d-flex align-items-center p-2">${item.texto}</div>
                    <div>
                    <button class="botonEditar m-1 p-1">✏</button>
                    <button class="botonBorrar m-1 p-1">🗑</button>
                    <button class="botonCompletar m-1 p-1">✔</button>
                    </div>
                </div>
                `
            })
            document.querySelector('#tareasPendientes').innerHTML = cards
        }

        function pintarTareasCompletadas(bd) {
            
            let cards = ''
            
            
            bd.map((item) => {
                cards += `
                <div class="tarea border shadow m-2 p-2 d-flex justify-content-between " data-tarea-id="${item.id}">
                    <div class="textoTarea d-flex align-items-center p-2">${item.texto}</div>
                </div>
                `
            })
            document.querySelector('#tareasCompletadas').innerHTML = cards
        }

        document.querySelector('body').addEventListener('click', (e) => {

            if (e.target.classList.contains('botonBorrar')) {
                const idTarea = e.target.closest('.tarea').dataset.tareaId
                const bdElementoBorrado = bd.filter((item) => item.id != idTarea)
                pintarTareas(bdElementoBorrado)
                bd = bdElementoBorrado
            }
        
            if (e.target.classList.contains('botonEditar')) {
                const idTarea = e.target.closest('.tarea').dataset.tareaId
                const bdElementoEditado = bd.filter((item) => item.id != idTarea)
                console.log(e.target.closest('.tarea'))
                document.querySelector('#tareasPendientes').innerHTML = bdElementoEditado
        
            }
            if (e.target.classList.contains('botonCompletar')) {
                const idTarea = e.target.closest('.tarea').dataset.tareaId
                const bdElementoCompletado = bd.filter((item) => item.id == idTarea)
                const bdElementoCompletadoNuevo = bd.filter((item) => item.id != idTarea)
                
                // Concatenate the completed tasks into bdCompletado
                bdCompletado = bdCompletado.concat(bdElementoCompletado)
                
                console.log(bdCompletado);
                pintarTareasCompletadas(bdCompletado)
                bd = bdElementoCompletadoNuevo
                pintarTareas(bdElementoCompletadoNuevo)
            }
        })
        


    }
}
