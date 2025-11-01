//tarjeta o Card de Imagen
const imageCard= (image) => {
  //const {src,title} = image;
  // createElement <- Crea un elemento html en memoria
  const card = document.createElement('div');

  card.className =
    'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer';

  const imageContainer = document.createElement('div');
  imageContainer.className =
    'relative aspect-square overflow-hidden bg-gray-200  ';

  //imagen
  const img = document.createElement('img');
  img.src= image.url;
  img.alt = image.title;
  img.className= 'w-full h-full object-cover';
  //object cover <- ocupe todo el espacio sin deformarse 

  //botón corazón

  const heartButton= document.createElement('button');
  heartButton.className='absolute top-2 right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10';
  heartButton.textContent='🤍';
  heartButton.title= 'Añadir a favoritos';
  // eslint-disable-next-line no-prototype-builtins
  if(!localStorage.hasOwnProperty('favoritos'))
    localStorage.setItem(JSON.stringify([]));
  heartButton.addEventListener('click', function(event){
    //stopPropagation
    if (heartButton.textContent === '🤍') {
      heartButton.textContent = '❤️‍🔥';
      heartButton.title = 'Quitar de favoritos';
    } else {
      heartButton.textContent = '🤍';
      heartButton.title = 'Añadir a favoritos';
    }
    event.stopPropagation();
    //<-- aquí lanzaremos la función que gestione el añadir quitar favoritos;
  });
  // Información de la imagen, autor , categoría
  //-------------------------------------imageContainer append---------------------------------------------
  imageContainer.append(img, heartButton);

  const infoContainer= document.createElement('div');
  infoContainer.className='p-4';
  //categoría
  const categoría= document.createElement('label');
  categoría.textContent= image.category;
  

  //titulo
  const titleInfo= document.createElement('h3');
  titleInfo.textContent= image.title;
  titleInfo.className='front-bold text-lg text-gray-800 mb-1 truncate';

  const autor= document.createElement('p');
  autor.textContent= `Autor: ${image.author}`;
  autor.className= 'text-sm text-gray-600 truncate';
  //-------------------------------------InfoContainer append---------------------------------------------
  infoContainer.append(titleInfo,autor,categoría);

  //evento de la card
  card.addEventListener('click', function(){
    alert(`abriendo la imagen ${image.title}`);
  });

  card.append(imageContainer,infoContainer);

  return card;

  //
};

export default imageCard;