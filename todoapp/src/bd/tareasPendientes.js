export function pintarTareasPendientes(tareas) {
    let html = '';
    tareas.forEach(tarea => {
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.fecha}</td>
                <td>${tarea.aula}</td>
                <td>${tarea.grupo}</td>
                <td>${tarea.ordenador}</td>
                <td>${tarea.descripcion}</td>
                <td>${tarea.completada ? 'Sí' : 'No'}</td>
            </tr>
        `;
    });
    return html;
}