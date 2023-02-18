alert('Bienvenido a Poblaciones de Sudamerica')
let pais = prompt('Ingrese un pais de Sudamerica para saber su pobalcion')
let paisMayuscula = pais.toLocaleUpperCase();
switch (paisMayuscula) {
  case 'ARGENTINA':
    alert('Argentina tiene una poblacion de 48.21 millones');
    break;
  case 'BRASIL':
    alert('Brasil tiene una poblacion de 214.3 millones');
    break;
  case 'BOLIVIA':
    alert('Bolivia tiene una poblacion de 12.08 millones');
    break;
  case 'CHILE':
    alert('Chile tiene una poblacion de 19.49 millones');
    break;
  case 'COLOMBIA':
    alert('Colombia tiene una poblacion de 51.52 millones');
    break;
  case 'ECUADOR':
    alert('Ecuador tiene una poblacion de 17.8 millones');
    break;
  case 'PARAGUAY':
    alert('Paraguay tiene una poblacion de 6.7 millones');
    break;
  case 'PERU':
    alert('Peru tiene una poblacion de 33.72 millones');
    break;
  case 'URUGUAY':
    alert('Uruguay tiene una poblacion de 3.426 millones');
    break;
  case 'VENEZUELA':
    alert('Venezuela tiene una poblacion de 28.2 millones');
    break;
  default:
    alert(pais +' no pertenece a Sudamerica');
}