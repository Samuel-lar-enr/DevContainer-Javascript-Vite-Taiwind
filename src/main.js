// Punto de entrada principal de la aplicación
// import './styles/main.css';
import app from './app';
import './styles/tailwind.css';

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  console.log('Iniciando app galeria interactiva');
  app();
});