APP
-Recibe: Nada
-Muestra: Interfaz de usuario
-Estado: nada
-Accion del Usuario: nada

HEADER
-Recibe: nada
-Muestra: imagen y titulo, texto con instrucciones, boton de generar meme y my favorites
-Estado: nada
-Accion del Usuario: pulsar botones para moverse a my favorites y generar meme

CARD LIST
-Recibe props : nada
-Recibir provider: - un array de cards - los datos de cada card
-Muestra: las cards
-Estado: array de cards
-Accion del Usuario: nada

CARD
-Recibe por provider: una imagen, subreddit
-Muestra: imagen, el footer de la imagen (texto del subredit y boton para ir a la pagina de detalles), estrella de "me gusta"
-Estado: pasar a favoritos/quitar
-Accion del Usuario: añadir/quitar de favoritos, ir a la pagina de detalles

BUTTON
-Recibe: accion
-Muestra: boton con un texto
-Estado: ninguno
-Accion del Usuario: clickar para hacer la funcion del boton

FORMULARIO
-Recibe por props: titulo, la url de la imagen, likes de la imagen
-Recibe por provider: objeto al que editar
-Muestra: formulario con textboxes y boton para submitear
-Estado: crear/editar
-Accion del Usuario: rellenar campos del formulario

DETALLES
-Recibe por props: objeto meme
-Muestra: imagen, e informacion del meme
-Estado: ninguno
-Accion del Usuario: ninguno

FOOTER
-Recibe: nada
-Muestra: texto de footer e imagen
-Estado: ninguno
-Accion del Usuario: ninguna
