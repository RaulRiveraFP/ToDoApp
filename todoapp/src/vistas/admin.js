import tickets from "../bd/tickets";

export const admin = {
    template: `
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    `,
    script: () => {
            tickets.pintaTickets();
            tickets.pintaTicketsCompletados();
        document.querySelector('#adminTbody').addEventListener('click', (e) => {
            if (e.target.classList.contains('botonBorrar')) {
                const idTarea = e.target.closest('tr').dataset.tareaid;
                
                tickets.borrarTicket(idTarea);
            }

            if (e.target.classList.contains('botonCompletar')) {
                const idTarea = e.target.closest('tr').dataset.tareaid;
                console.log(e.target.closest('tr').dataset);
                tickets.resolverTicket(idTarea);
            }
        });
    }
};
