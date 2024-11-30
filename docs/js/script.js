    // Obtener todas las imágenes con la clase 'imagen-uniforme'
  const imagenes = document.querySelectorAll('.imagen-uniforme'); 
  let indiceActual = 0;
  
  // Función para cambiar la imagen al siguiente de la lista
  function cambiarImagen() {//
    // Obtiene la imagen principal
  imagenes[indiceActual].style.display = 'none';
  
    // Aumenta el índice para la próxima vez
      // Incrementa el índice y vuelve al inicio si es necesario
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;

      // Muestra la nueva imagen
      imagenes[indiceActual].style.display = 'block';  
    // Si el índice es mayor o igual al número de imágenes, vuelve al inicio

  
  }
  
  
  // Al cargar la página, se establece la primera imagen
  document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la imagen principal y establece la primera imagen de la lista
  const imagen = document.getElementById('imagenPrincipal');
    imagen.src = imagenes[0]; // Muestra 'img/Redes.gif' al cargar la página
  });
  
  
  function cambiarImagen2(){
    imagenes[indiceActual].style.display = 'none';

    indiceActual = (indiceActual + 1) % imagenes.length;
    

    imagenes[indiceActual].style.display = 'block';
  }


  function mostrarVentana() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('ventanaEmergente').style.display = 'block';

}

function cerrarVentana() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('ventanaEmergente').style.display = 'none';
  
}


function mostrarVentana1() {
  document.getElementById('overlay-1').style.display = 'block';
  document.getElementById('ventanaEmergente-1').style.display = 'block';

}

function cerrarVentana1() {
  document.getElementById('overlay-1').style.display = 'none';
  document.getElementById('ventanaEmergente-1').style.display = 'none';
  
}

