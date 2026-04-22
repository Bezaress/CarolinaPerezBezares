// navbar-dinamico.js

// 1. Lógica para extraer las iniciales
function obtenerIniciales(nombreCompleto) {
    const partes = nombreCompleto.trim().split(' ');
    let iniciales = '';
    
    if (partes.length > 0 && partes[0].length > 0) iniciales += partes[0][0];
    if (partes.length > 1 && partes[1].length > 0) iniciales += partes[1][0];
    
    return iniciales.toUpperCase();
}

// 2. Función que busca el navbar en la página activa y lo actualiza
function inicializarNavbar() {
    const imagenAvatar = document.getElementById('user-avatar');
    
    // Solo ejecuta el cambio si encuentra un avatar en la página actual
    if (imagenAvatar) {
        // En un futuro, este nombre vendrá de tu base de datos o de la sesión iniciada
        const nombreDelUsuario = "Carlos Valdés"; 
        
        const iniciales = obtenerIniciales(nombreDelUsuario);
        const urlDinamica = `https://ui-avatars.com/api/?name=${iniciales}&background=C8A45A&color=fff&rounded=true`;
        
        imagenAvatar.src = urlDinamica;
    }
}

// 3. Ejecutar la función automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', inicializarNavbar);