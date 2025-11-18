## Contexto del juego:

Eres parte de una organización secreta que cataloga y estudia criaturas extrañas (como Pokémon, Digimon, etc.).

## Rutas de la aplicación (React Router):

/field: Mapa de exploración y captura de criaturas (agente).
/dex: Enciclopedia personal del jugador (favoritos/capturados).

## Estados globales (Redux):

Criaturas capturadas (favoritos del agente).
Resultados de búsqueda de la API pública (ej. https://digi-api.com/#docs ).

API a usar:
https://digi-api.com/api/v1/digimon?pageSize=25
(para obtener 25 digimon por página).

Ruta /field
Muestra lista de Digimon a partir del API:
Solo imagen, nombre e id de cada uno.
Fetch a la API Digimon (href del API).
Botón capturar

Ruta /dex
Muestra los Digimon capturados.
