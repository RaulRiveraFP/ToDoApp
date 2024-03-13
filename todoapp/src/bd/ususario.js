const Usuarios = {
    obtenerUsuarios() {
        return JSON.parse(localStorage.getItem('usuarios')) || [];
    },

    guardarUsuario(usuario) {
        let usuarios = this.obtenerUsuarios();
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    },

    buscarUsuario(email, password) {
        const usuarios = this.obtenerUsuarios();
        console.log('email login', email);
        console.log('pass login', password);
        
        const foundUser = usuarios.find(user => user.email === email && user.password === password);
        
        if (foundUser) {
            return true;
        } else {
            return false;
        }
    },
    obtenerRolUsuario(email) {
        const usuarios = this.obtenerUsuarios();
        const foundUser = usuarios.find(user => user.email === email);
        if (foundUser) {
            return foundUser.rol;
        } else {
            return null; // O puedes manejar este caso de otra manera según tu lógica
        }
    }
};

export default Usuarios;

