# Proyecto Back End (Guía de inicio)

Este proyecto fue creado con NodeJs, Express Y MongoDB para la implemetación de una API REST

## Descripción

* Este proyecto se crea a partir de un requisito para el proceso de seleccion en N5, el proyecto fue desarrollado con las librerías NodeJs, Express Y MongoDB.
* El fin de este proyecto crear los distintos EndPoints y configuración de Base de datos para listar y validar las peticiones hechas desde los distintos poyectos en cuestión
* Las base de datos que se usó fue MongoDb con implementación de Mongoose para manejo que querys y filtros.
* La librería para levantamiento de servidor fue Express


## Requisitos Previos
* `NodeJs 16.x` o Mayor. [descargar](https://nodejs.org/es/download/)

## Para iniciar

Copie la siguiente url `https://github.com/JohabarWil/n5-project-back.git` o selecione en la parte superior derecha de este recuadro en la opción "Code" y "HTTPS".
Luego abra una terminal en la carpeta en cual alojará el proyecto en su computador y ejecute el comando:

```
git clone https://github.com/JohabarWil/n5-project-back.git
```
#### Nota: Si decide instalar con yarn, recuerda que primero dede instalarlo en tu computador ejecutando en una terminal `npm install --global yarn`

## Instalar dependencias del Proyecto

Ingrese a la carpeta que se descargó en el paso anterior y ejecute en la raíz el comando `yarn install` o `npm install` para instalar las dependencias con las que el proyecto funciona


## Correr la aplicacción en modo desarrollo

Ejecuta `yarn start` o `npm start` para correr servidor en modo desarrollo

Y eso es todo. Ya esta listo el proyecto para usarse y hacer peticiones REST desde los Micro FrontEnds por medio de `http://localhost:9000/api`.
