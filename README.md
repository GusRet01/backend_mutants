# Backend para Detección de Mutantes

Este repositorio contiene el backend de la aplicación para detectar si un humano es un mutante basándose en su secuencia de ADN. La aplicación utiliza una API REST para procesar y verificar las secuencias de ADN y proporcionar estadísticas.

## Descripción

La aplicación permite cargar un archivo JSON con la secuencia de ADN y determina si el individuo es un mutante o no. También proporciona estadísticas sobre las secuencias de ADN verificadas.

# Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

backend-mutants/
├── config/       
│   └── db.js     # Archivo de configuración de la base de datos
├── controllers/  # Controladores de las rutas
├── models/       # Definición de modelos de datos (schemas de MongoDB)
├── routes/       # Definición de rutas y controladores
├── services/     # Servicios de negocio y lógica de la aplicación
├── .env          # Variables de entorno
├── .gitignore    # Archivos y carpetas ignorados por Git
├── package.json  # Configuración del proyecto y dependencias
├── server.js     # Configuración y arranque del servidor
└── vercel.json   # Configuración de Vercel

## Uso de la Aplicación

Para usar la aplicación, sigue estos pasos:

1. Visita el frontend de la aplicación en [este enlace](https://frontend-mutants.vercel.app/).
2. Carga un archivo JSON con la secuencia de ADN de acuerdo con el formato permitido
 {
  "dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CACCTA", "TCACTG"]
 }
3. Presiona el botón **"Enviar JSON"**.

   - La aplicación enviará una solicitud al endpoint [`/mutant/`](https://backend-mutants.vercel.app/mutant/) del backend para verificar si el ADN pertenece a un mutante.

### Cargar Estadísticas

Para ver las estadísticas de las secuencias de ADN verificadas:

1. Presiona el botón **"Cargar estadísticas"**.

   - La aplicación enviará una solicitud al endpoint [`/stats/`](https://backend-mutants.vercel.app/stats/) del backend y mostrará los datos guardados en la base de datos.

## Endpoints de la API

### Verificar ADN Mutante

**Endpoint**: `POST [https://backend-mutants.vercel.app/mutant/]`

**Descripción**: Verifica si la secuencia de ADN cargada pertenece a un mutante.

**Formato del Request**:

```json
{
  "dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CACCTA", "TCACTG"]
}
```

### Verificar ADN Mutante 

**Endpoint**: `GET [https://backend-mutants.vercel.app/stats/]`

**Descripción**: Obtiene las estadísticas de las secuencias de ADN verificadas.

**Formato del Response**:

```json
{
  "count_mutant_dna": 40,
  "count_human_dna": 100,
  "ratio": 0.4
}
```


***********************************************************************************************
***********************************************************************************************


# Pasos para correr el backend localmente

1. Clonar el repositorio:

   `git clone https://github.com/GusRet01/backend_mutants.git`

2. Instalar dependencias con: 

    `npm i`

3. Correr servidor:

    `npm run dev`

# En caso de querer configurar tu propia base de datos realiza la configuración en config/db.js con MongoDB Atlas

La base de datos de este proyecto está alojada en MongoDB Atlas. Si deseas crear tu propia base de datos, sigue estos pasos para configurar una cuenta en MongoDB Atlas, crear un usuario y modificar el archivo `.env` con tus credenciales para que puedas conectarte.

## Pasos para Configurar la Base de Datos

### 1. Crear una Cuenta en MongoDB Atlas

Visita la página de MongoDB Atlas y crea una cuenta. Una vez registrada tu cuenta, inicia sesión y crea un nuevo proyecto. Dentro del proyecto, crea un nuevo cluster. Puedes elegir la configuración gratuita para empezar.

### 2. Crear un Usuario de Base de Datos

En el panel de MongoDB Atlas, navega a la sección de Database Access. Crea un nuevo usuario proporcionando un nombre de usuario y una contraseña segura. 

### 3. Obtener el URI de Conexión

Una vez que tu cluster esté listo, navega a la sección de Connect. Selecciona Connect your application y copia el URI de conexión proporcionado. Debe verse algo así:

mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

### 4. Modificar el Archivo `.env`

En la raíz del proyecto backend, en el archivo `.env`. Modifica la variable de entorno `MONGO_URI` en el archivo `.env`:

MONGO_URI='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority'

Asegúrate de reemplazar `<username>`, `<password>` y `<dbname>` con tus credenciales y nombre de la base de datos.

## Iniciar el Servidor

Para iniciar el servidor localmente, ejecuta el siguiente comando en la terminal desde la raíz del proyecto:

npm run dev

El servidor se iniciará y estará listo para recibir solicitudes en http://localhost:3000.

## Usar Postman para Hacer Solicitudes

Puedes utilizar Postman para realizar solicitudes a los endpoints de tu servidor local.

### Verificar ADN Mutante

Configura el método a POST y la URL a http://localhost:3000/mutant/. En la pestaña Body, selecciona raw y JSON. Ingresa el siguiente JSON:

{
  "dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CACCTA", "TCACTG"]
}

Haz clic en Send para enviar la solicitud.

### Obtener Estadísticas

Configura el método a GET y la URL a http://localhost:3000/stats/. Haz clic en Send para enviar la solicitud.


# Gracias por ayudar a detectar mutantes!