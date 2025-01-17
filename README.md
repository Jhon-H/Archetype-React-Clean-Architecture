<div align="center">
  <div>
    <img src="./docs/react.png" alt="Logo" width="200" height="190">
  <h2 align="center">React TS - Clean Architecture</h2>
  </div>

  <p align="center">
   Arquetipo  Frontend con React, Typescript y Vite, utilizando Clean Architecture y patrones de diseño para un código modular y escalable.
    <br />
  </p>
</div>

<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
    </li>
    <li>
      <a href="#cómo-empezar">Cómo empezar</a>
      <ul>
        <li><a href="#prerrequisitos">Prerrequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#estructura-de-carpetas">Estructura de carpetas</a></li>
    <li>
      <a href="#documentación">Documentación</a>
      <ul>
        <li><a href="#linters-y-git-hooks">Linters y Git hooks</a></li>
        <li><a href="#estilos">Estilos</a></li>
        <li><a href="#testing">Testing</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- SOBRE EL PROYECTO -->

## Sobre el proyecto

Este proyecto es un arquetipo listo para usar, que emplea React con TypeScript y está construido con Vite. Está diseñado siguiendo los principios de la arquitectura limpia y patrones de diseño, lo que facilita la creación de aplicaciones escalables, flexibles ante cambios y fáciles de testear.

## Cómo empezar

Para ejecutar este proyecto localmente, siga las instrucciones a continuación

### Prerrequisitos

- npm
  ```sh
  npm install --global yarn
  ```
- node.js
  - Si usa [nvm](https://github.com/nvm-sh/nvm), ejecute `nvm use`
  - Si no usa [nvm](https://github.com/nvm-sh/nvm) o no funcionó el comando anterior, instale la versión especificada en el archivo `.nvmrc`

### Instalación

1. Clonar el repositorio
   ```sh
   git clone https://github.com/Jhon-H/Archetype-React-Clean-Architecture
   ```
2. Instalar las dependencias
   ```sh
   cd Archetype-React-Clean-Architecture && yarn install
   ```
3. Crear el archivo y agregar las variables de entorno
   ```sh
   src/config/environment/.env.development
   ```
4. Iniciar el servidor local
   ```sh
   npm run dev
   ```

## Estructura de carpetas

La siguiente estructura refleja la organización del proyecto, excluyendo archivos de configuración y otros menos relevantes:

    .
    ├── src
    ├──   config/
    ├──       environment/        # Variables de entorno (desarrollo, producción).
    ├──       routes/             # Rutas de la aplicación
    ├──       dependencies/       # Factories para inyección de dependencias
    ├──   domain/
    ├──       adapters/           # Interfaces para interactuar con servicios externos.
    ├──       entities/           # Entidades del dominio.
    ├──       gateways/           # Interfaces de acceso a datos o servicios.
    ├──       use-cases/          # Casos de uso del dominio.
    ├──   infrastructure/
    ├──       adapters/           # Implementaciones concretas de adaptadores.
    ├──       gateways/           # Implementaciones concretas de gateways.
    ├──       mappers/            # Implementaciones de mapeo de datos.
    ├──       models/             # Modelos de infraestructura.
    ├──   presentation/
    ├──       app/                # Páginas y componentes principales.
    ├──       components/         # Componentes reutilizables.
    ├──       features/           # Componentes específicos por funcionalidad.
    ├──       routes/             # Rutas públicas y privadas.
    ├──       store/              # Estado global: UI, features e infraestructura.
    ├──       styles/             # Archivos de estilo globales.
    ├──   shared/
    ├──       constants/          # Constantes globales.
    ├──       types/              # Tipos y modelos comunes.
    ├──       utils/              # Funciones utilitarias y helpers.

La aplicación se organiza en cinco módulos principales:

- **config**: Centraliza toda la configuración de la aplicación, incluyendo variables por ambiente, rutas y dependencias.

- **domain**: Contiene las reglas de negocio, definiendo entidades principales y casos de uso que representan las operaciones del sistema.

- **infrastructure**: Implementa la comunicación con el mundo exterior, como servicios externos, además de las transformaciones de datos necesarias.

- **presentation**: Maneja toda la interfaz de usuario, organizando componentes, módulos funcionales y gestión del estado visual.

- **shared**: Agrupa recursos utilizados por múltiples módulos, como constantes, tipos y funciones utilitarias comunes.


### Directorios Fuera de `src/`:

- **assets/**: Recursos estáticos (imágenes, íconos).
- **public/**: Archivos públicos (e.g., `index.html`, `favicon.ico`).
- **dist/**: Archivos generados en la construcción (`build`).
- **coverage/**: Reportes de cobertura de pruebas.


## Documentación

Esta sección enumera y explica los estándares y guías propuestas en el proyecto.

### Linters y Git hooks

Este proyecto utiliza ESlint, Husky, lint-staged, commitlint y Prettier para garantizar la sincronización automática de las decisiones de codificación y mantener un código consistente.

### Estilos

Los estilos están basados en módulos SASS. Los estilos globales, variables, fuentes y otras configuraciones relacionadas se encuentran en la carpeta `src/styles/`. Además, se utiliza **BEM** como arquitectura CSS.

Recuerde usar las variables, colores y mixins que se encuentran en la carpeta `presentation/styles`, ya que esto facilitará el mantenimiento del código y permitirá realizar modificaciones globales de estilos de manera más sencilla.

### SEO

Por defecto, este proyecto incluye un archivo `robots.txt` en la carpeta `public/`. Si decide hacer público el sitio, asegúrese de modificar este archivo según sea necesario.

Además, se recomienda validar las métricas de SEO, accesibilidad y rendimiento web después de cada desarrollo, utilizando herramientas como [pagespeed.dev](https://pagespeed.web.dev/) y [Axe DevTools](https://axe.deque.com/axe-devtools).

### Testing

Las pruebas unitarias se realizan con [Jest](https://jestjs.io/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Los mocks se encuentran en `src/__mocks__`, mientras que los tests de cada componente están ubicados en la carpeta correspondiente al componente, por ejemplo, `src/presentation/components/atoms/Image/Image.test.tsx`.

Para ejecutar las pruebas unitarias y obtener el coverage, ejecute:

```sh
npm run test
npm run coverage
```
