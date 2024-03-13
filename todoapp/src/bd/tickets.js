const tickets = {
    obtenerTickets() {
        return JSON.parse(localStorage.getItem('tareasPendientes')) || [];
    },

    guardarTicket(ticket) {
        let tickets = this.obtenerTickets();
        tickets.push(ticket);
        localStorage.setItem('tickets', JSON.stringify(tickets));
    },

    buscarTicket(id) {
        const tickets = this.obtenerTickets();
        console.log(tickets);
        
        // const foundUser = tickets.find(user => user.email === email && user.password === password);
        
        // if (foundUser) {
        //     return true;
        // } else {
        //     return false;
        // }
    },
    pintaTickets() {
        const tareasPendientes = JSON.parse(localStorage.getItem('tareasPendientes')) || [];
        let html = '';
    
        tareasPendientes.forEach(tarea => {
            html += `
                <tr data-tareaid="${tarea.id}">
                    <td>${tarea.id}</td>
                    <td>${tarea.fecha}</td>
                    <td>${tarea.aula}</td>
                    <td>${tarea.grupo}</td>
                    <td>${tarea.ordenador}</td>
                    <td>${tarea.descripcion}</td>
                    <td>${tarea.tarea}</td>
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
            `;
        });
    
        // Asegúrate de seleccionar el elemento donde deseas agregar las filas de tickets
        const tablaTickets = document.getElementById('adminTbody');
        tablaTickets.innerHTML = html;
    },
    pintaTicketsCompletados() {
        const ticketsResueltos = JSON.parse(localStorage.getItem('ticketsResueltos')) || [];
        let html = '';
    
        ticketsResueltos.forEach(ticket => {
            html += `
                <tr>
                    <td>${ticket.id}</td>
                    <td>${ticket.fecha}</td>
                    <td>${ticket.aula}</td>
                    <td>${ticket.grupo}</td>
                    <td>${ticket.ordenador}</td>
                    <td>${ticket.descripcion}</td>
                    <td>${ticket.tarea}</td>
                </tr>
            `;
        });
    
        const tablaTicketsCompletados = document.getElementById('tareasCompletadas');
        tablaTicketsCompletados.innerHTML = html;
    },
    
    resolverTicket(id) {
        if (id) {
            let tickets = this.obtenerTickets();
            let ticketIndex = tickets.findIndex(ticket => ticket.id === id);
    
                const ticketResuelto = tickets.splice(ticketIndex, 1)[0];
                let ticketsResueltos = JSON.parse(localStorage.getItem('ticketsResueltos')) || [];
                ticketsResueltos.push(ticketResuelto);
                localStorage.setItem('ticketsResueltos', JSON.stringify(ticketsResueltos));
                localStorage.setItem('tareasPendientes', JSON.stringify(tickets));
                this.pintaTickets();
                this.pintaTicketsCompletados();
            
        } else {
            console.error('Se necesita proporcionar un ID válido para resolver el ticket.');
        }
    },
    
    findIndex(id) {
        const tickets = this.obtenerTickets();
        return tickets.findIndex(ticket => ticket.id === id);
    },
    borrarTicket(id) {
        let tickets = this.obtenerTickets();
        const ticketIndex = tickets.findIndex(ticket => ticket.id === id);
    
            tickets.splice(ticketIndex, 1);
            localStorage.setItem('tareasPendientes', JSON.stringify(tickets));
            this.pintaTickets();
    },
    
    
};

export default tickets;

