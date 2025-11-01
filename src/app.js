import imageCard from './components/imageCard';
import { imagesData } from './db/imagenes';


function app() {
  //seleccionamos el DIV con id='app' que está en index.html
  const divApp= document.getElementById('app');
  //siempre validar que divApp exista *****************
  if(!divApp)
    throw new Error('No se encontró el contenedor con id ="app"');


  //Limpiar el contenedor app
  divApp.innerHTML = '';
  const header = document.createElement('div');
  header.className= 'text-center mb-10 py-6';
  const titulo = document.createElement('h1');
  titulo.className= 'text-4xl font-bold text-purple-600 mb-2';
  titulo.textContent= '👻 wazaa Galería imágenes';
  const subtitulo = document.createElement('p');
  const textoSubtitulo= document.createElement('h3');
  textoSubtitulo.textContent=  'Explora y visualiza tu colección visual';
  subtitulo.append(textoSubtitulo);
  //-------------------------No falta subtitulo-------------------------------
  header.append(titulo,subtitulo);

  // construcción de las imágenes ---------------------
  const grid = document.createElement('div');
  grid.className= 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-w-6xl mx-auto px-4';




  imagesData.forEach((img)=>{
    const tarjeta = imageCard(img);
    //voy a injectar a cada tarjeta un atributo  (dataset)
    tarjeta.dataset.imageId=img.id;
    grid.append(tarjeta);
  });
  divApp.append(header,grid);
}



export default app;