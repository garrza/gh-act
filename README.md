# Aplicación Web de Formulario de Registro

Una aplicación web simple de formulario de registro con pipeline de CI/CD utilizando GitHub Actions.

## Características

- Formulario de registro de usuario con validación
- Validación de formulario para:
  - Nombre de usuario (mínimo 3 caracteres)
  - Correo electrónico (formato válido)
  - Contraseña (mínimo 6 caracteres)
  - Confirmación de contraseña
- Pruebas automatizadas con Jest
- Integración/Despliegue Continuo con GitHub Actions

## Estructura del Proyecto

```
.
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── script.test.js      # Archivo de pruebas Jest
├── package.json        # Dependencias del proyecto
└── .github/workflows/  # Flujo de trabajo de GitHub Actions
    └── ci-cd.yml
```

## Configuración

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar pruebas:
   ```bash
   npm test
   ```

## Pipeline de CI/CD

El proyecto utiliza GitHub Actions para integración y despliegue continuo. El pipeline:

1. Se ejecuta en cada push a la rama principal y en pull requests
2. Ejecuta los siguientes pasos:
   - Configura el entorno Node.js
   - Instala dependencias
   - Ejecuta pruebas
   - Despliega a GitHub Pages (solo en la rama principal)

## Desarrollo

Para realizar cambios en el proyecto:

1. Crear una nueva rama
2. Realizar los cambios
3. Ejecutar pruebas localmente
4. Crear un pull request

## Despliegue

La aplicación se despliega automáticamente a GitHub Pages cuando se envían cambios a la rama principal. El proceso de despliegue es manejado por el flujo de trabajo de GitHub Actions.

## Pruebas

El proyecto utiliza Jest para las pruebas. Las pruebas se encuentran en `script.test.js` y pueden ejecutarse usando:

```bash
npm test
```