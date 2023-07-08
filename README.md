# Newshore Assessment By Sergio Carrillo

## Development server

Para ejecutar el proyecto en local ejecute uno de los siguientes comandos

 - `ng serve`
 - `yarn start`
 - `npm start`

Una vez iniciado el servidor, ingresar la siguiente dirección en el navegador: `http://localhost:4200/`.

## Despliegue continuo

Adicionalmente, este proyecto está desplegado como un sitio estático en Cloudflare Pages, por lo que se puede acceder directamente a través de este link: [https://newshore-assessment.pages.dev/](https://newshore-assessment.pages.dev/).

## Modo de uso

- Dirigirse al módulo "Rutas", utilizando el dock en la parte inferior de la pantalla.
- Ingresar "origen" y "destino" y hacer click en "Calcular".
- Inmediatamente se mostrará en pantalla el resultado de la busqueda.
- Opcionalmente puede ir al módulo "Config." y elegir el tipo de moneda.

## Detalles técnicos

- Este proyecto cuenta con manejador de estados NgRx por feature (por módulo).

- Diseño realizado con Tailwindcss e inspirado en [https://www.figma.com/community/file/1248375255495415511](https://www.figma.com/community/file/1248375255495415511).

- La estructura es modular, cada módulo puede tener su propio manejador de estados, servicios, componentes, etc., los recursos compartidos se encuentran en el módulo `common`.

- Se implementaron caracteristicas de las últimas versiones de angular, por ejemplo: signals, standalone components, typed forms y prerender (Angular Universal).
