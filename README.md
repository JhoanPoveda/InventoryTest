<h1>Inventory Test</h1>
<h2>Descargarlo</h2>
Con el siguiente link puede hacer el clone
https://github.com/JhoanPoveda/InventoryTest.git

<h2>Para correr el proyecto</h2>
Primero se debe crear la base de datos en mongoDB la cual esta registrada como "DBInventory", recordar que esta corriendo de manera local, el settings de python ira a buscar en el localhost:27017.

Segundo se debe activar el entorno de python 
el cual se activa de la siguiente manera en Windows
 ```
.\env\Scripts\activate
```
Despues de estar corriendo el entorno se hace ejecutar la Api con el siguiente comando
```
python manage.py runserver
```
Ya despues de tener la API corriendo, puedes correr el front (client), para ello abres una nueva terminal y abres el folder CLIENT de la siguiente forma y haces el install del node_module.
```
 cd .\CLIENT\
 npm i 
```
Luego de ello corres el front con el comando 
```
 npm run dev
```
Ya te debe abrir el puerto 5173, en caso de que desee cambiar el puerto donde se despliegue el Front, tambien se debe agregar o modificar ese puerto en el archivo settings.py en la sección CORS_ALLOWED_ORIGINS, 
si no esta la url de donde se va hacer la petición en esta lista, entonces no te dejara hacer peticiones a la API.
<hr>
Este proyecto esta echo con el fin de presentar la prueba técnica de la compañia STEFANINI, el proyecto es un CRUD sencillo, desarrollado en las siguientes tecnologías: <br>
<ul>
  <li>
    FRONTEND -> Vite-React (nodejs v20.12.1 npm 10.8.2)
  </li>
  <li>
    BACKEND -> Python v3.12
  </li>
  <li>
    BD -> MongoDB v7.0
  </li>
</ul>

