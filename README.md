## 🧪 Preparatorio Checkpoint Final

### 🎯 Objetivo

Desarrollar una aplicación de gestión de personajes utilizando la API pública de Rick and Morty. La app debe permitir:

- Listar personajes (fetch a API)
- Navegar entre vistas (React Router)
- Crear, editar y eliminar personajes locales (solo en Redux o Context, no persiste en API)
- Buscar personajes por nombre
- Manejar todos los datos con Redux (no estado local)

### Requisitos técnicos

1. Hooks: Uso obligatorio de useEffect, useState, useDispatch, useSelector.
2. Redux: @reduxjs/toolkit recomendado. Estado global debe manejar:
   - Lista de personajes (api + locales)
   - Personaje en edición
3. Router: Debe tener mínimo 3 rutas:
   - / → Lista de personajes
   - /create → Crear personaje
   - /edit/:id → Editar personaje
4. Formularios: Crear y editar deben compartir el mismo formulario reutilizable.
5. CRUD completo: Agregar, editar y eliminar personajes, todo manejado por Redux.
6. Implementar una búsqueda por nombre de personaje (Filter con los datos guardados Redux).

### 🔐 Control de acceso por tipo de usuario (mock)

Implementa un estado global en Redux que maneje el tipo de usuario actual. Este estado será mockeado, es decir, no se implementará autenticación real. Debe haber un botón que permita simular el cambio de usuario, es decir, pasar de administrador a usuario.

El estado puede tener el siguiente formato:
const initialState = {
userType: 'admin' // o 'user'
};

Comportamiento esperado:

- Si el userType es 'user':
  - Solo puede ver la lista de personajes.
  - No puede ver los botones de 'Crear', 'Editar' ni 'Eliminar'.
- Si el userType es 'admin':
  - Puede agregar, editar y eliminar personajes.

Este estado debe ser consultado en los componentes correspondientes para condicionar el renderizado de botones o accesos a rutas de edición/creación.

### 🔗 API pública sugerida

Rick and Morty API
Endpoint base: https://rickandmortyapi.com/api/character
Solo debes hacer fetch de los primeros 20 personajes.

### ✅ Funcionalidades detalladas

🏠 Página principal (`/`)

- Muestra personajes de la API y los agregados localmente (Redux).
- Cada personaje tiene botones de 'Editar' y 'Eliminar'.
- Implementar un campo de búsqueda por nombre que filtre los personajes mostrados.

🧾 Crear personaje (`/create`)

- Formulario para crear un nuevo personaje.
- Campos: name, status, species.
- Al guardar, se despacha una acción Redux que agrega al array global de personajes.

🛠️ Editar personaje (`/edit/:id`)

- Reutiliza el formulario pero lo llena con los datos del personaje seleccionado.
- Al guardar, actualiza el personaje en Redux.
