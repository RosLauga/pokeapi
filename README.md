# Poke APP - Aplicación para busqueda de Pokémons

Esta aplicacion fue creada con el fin de agilizar la busqueda de Pokémons.

# Requerimientos

> Busqueda de Pókemons: Se puede utilizar el nombre completo o hasta 1 sóla letra en la busqueda. Cuanto menos caracteres más tardara la busqueda dado que traerá más información.
> Se puede buscar haciendo clic en el botón de busqueda o apretando la tecla Enter
> En caso de no encontrar ninguna coincidencia dará un mensaje de aviso
> Se listan todos los pokémons de la busqueda
> Se utiliza una Api para realizar la busqueda y filtro de los pokémons. La misma trabaja con la apirest de PokeApi tal como se solicita.
> El repo utilizada es el siguiente: https://github.com/RosLauga/pokeapi

# tecnologías

React (CRA)
Nodejs
Express
VScode
Git

# Instalación

> Api: Una vez clonado el repositorio, se debera entrar a la carpeta api y realizar un "npm i", luego se podra correr el servidor con "node server.js".
> App: Una vez clonado el repositorio, se deberá ingresar a la carpeta pokeapi, realizar un "npm i", luego se podrá levantar la apliación con "npm start".

# Implementación y mejoras a realizar

Teniendo en cuenta que la pokeapi tiene su limitaciones a la hora de la busqueda, se procedió a realizar una copia del listado de pokémons al servidor. De esta manera, se pueden realizar los filtros necesarios para buscar 1 o más pokémons.

> Mejora propuesta: En estos casos se recomienda utilizar una base de datos propia para realizar una copia del listado y poder realizar la busquedas más eficientemente con las queries proporcionadas por la db. Esto aceleraría y sería más perfomante a la hora de trabajar con grandes volumenes de datos.

A la hora de realizar la busqueda, he encontrado que hay muchos resultados según el parametro, por lo que el listado puede ser muy extenso.

> Mejora propuesta: Se puede implementar un páginado para los casos que el listado de pokémons sea muy extenso, esto ayuda a la experiencia del usuario a la hora de navegar.
