[< volver](README.md "volver a README")

# Básicos de Docker y como dockerizar esta app

Antes de todo, es necesario ser superusuario para ejecutar **Docker**.

```
sudo -i
```

Luego de esto, se pedirá tu contraseña de *root* en **Ubuntu** y si todo es correcto, se podrá comenzar a utilizar **Docker**.

## **Versión de Docker**

* `docker version`.
  * muestra la versión actual que tenemos instalada.

  ``` 
  docker version
  ```

## **Obtener ayuda de un comando**

* `docker COMMAND --help`.
  * obtener ayuda del comando `COMMAND` especificado.

  ``` 
  docker COMMAND --help
  docker ps --help
  ```

## **Ver contenedores**

* `docker ps`.
  * obtener ayuda del comando.

  * 1 - muestra los contenedores que tenemos *ejecutándose* (comportamiento por defecto).

  * 2 - muestra **TODOS** los contenedores, ya sean aquellos *ejecutándose* como los que no. la opción `-a` es el alias de `--all`.

  ```
  docker ps --help
  # 1
  docker ps
  # 2
  docker ps -a
  ```

## **Ver imágenes**

* `docker images`
  * obtener ayuda del comando.

  * 1 - muestra una lista con todas las imágenes que tenemos descargadas.

  * 2 - muestra una lista con todas las imágenes, incluso algunas intermedias.

  * 3 - muestra información de la imágen específica (`<repository>`) con un tag específico (`<tag>`). `<options>` es opcional y se lo puede incluir para controlar un poco más los datos mostrados acerca de la imágen.

  ```
  docker images --help
  # 1
  docker images
  # 2
  docker images -a
  # 3
  docker images <options> <repository:tag>
  docker images nginx:latest
  docker images node:lts
  docker images node:12.22.7-alpine3.12
  ```

## **Buscar imágenes**

* `docker search`
  * obtener ayuda del comando.

  * 1 - buscar una imágen en el registro de Docker Hub.

  * 2 - buscar la imágen de *httpd*.

  ```
  docker search --help
  # 1
  docker search <options> TERM
  # 2
  docker search httpd
  ```

## **Eliminar una o varias imágenes**

* `docker rmi`
  * obtener ayuda del comando.

  * 1 - eliminar una imágen.

  * 2 - eliminar una imágen de manera forzada. la opción `-f` es el alias de `--force`.

  * 3 - eliminar varias imágenes de manera forzada. (si no funciona con el nombre, usar el `imageid`).

  ```
  docker rmi --help
  # 1
  docker rmi IMAGE
  docker rmi nginx
  # 2
  docker rmi -f IMAGE
  docker rmi -f nginx
  # 3
  docker rmi -f IMAGE IMAGE [IMAGE ...]
  docker rmi -f nginx node mysql
  docker rmi -f be9abcb064f2 ea335eea17ab 5964aa70c11d
  ```

## **Ejecutar/comenzar un contenedor**

* `docker start`
  * obtener ayuda del comando.

  * 1 - ejecutar/comenzar uno o varios contenedores detenidos. puede ser tanto con su nombre o `names` o con su `containerid`. este comando también resulta cómodo para volver a ejecutar un contenedor que previamente estaba en funcionamiento pero fue detenido por alguna razón. no haría falta ejecutar nuevamente un `docker run ...`

  ```
  docker start --help
  # 1
  docker start <options> CONTAINER [CONTAINER ...]
  docker start mysql nginx
  ```

## **Detener un contenedor**

* `docker stop`
  * obtener ayuda del comando.

  * 1 - detener uno o varios contenedores en ejecución.

  ```
  docker stop --help
  # 1
  docker stop <options> CONTAINER [CONTAINER ...]
  docker stop mysql nginx
  ```

## **Detener/matar un contenedor**

* `docker kill`
  * obtener ayuda del comando.

  * 1 - matar uno o varios contenedores en ejecución.

  ```
  docker kill --help
  # 1
  docker kill <options> CONTAINER [CONTAINER ...]
  docker kill mysql nginx
  ```

## **Remover un contenedor**

* `docker rm`
  * obtener ayuda del comando.

  * 1 - remover uno o varios contenedores. si se intentó crear un contenedor y por algún motivo no se pudo, revisar el error arrojado y luego proceder a eliminar el contenedor, incluso si no se está ejecutando. al querer volver a crearlo, puede que nos diga que ya existe el contenedor, sobre todo si queremos utilizar el mismo nombre.

  * 2 - remover de manera forzada uno o varios contenedores en ejecución.

  ```
  docker rm --help
  # 1
  docker rm <options> CONTAINER [CONTAINER ...]
  docker rm mysql nginx
  # 2
  docker rm -f mysql nginx
  ```

## **Descargar imágenes**

* `docker pull`
  * obtener ayuda del comando.

  * 1 - *traer/descargar* una imágen o un repositorio desde un registro. el TAG especifíca una "versión" de la imágen y el DIGEST es un identificador único con formato de HASH.

  * 2 - traer la imágen de *httpd* con el tag *latest* y el digest *sha256:24d492e04f02881adcc1d7543b0251754a2be6a24c75aae7a008fdae767b7337*. si miramos en Docker Hub, esta imágen pertenece a su última versión pero para el OS de **linux/amd64**. todos estos datos son para tener mayor control sobre lo que se quiere descargar, pero con un `docker pull httpd` es suficiente para traernos el `httpd` de igual manera.

  * 3 - supongamos que cuando ejecutamos `docker images`, la imágen `httpd` tiene un **imageid** que es **ea28e1b82f31**. si vemos todo lo demás bien pero `httpd` no tiene un tag o aparece como nulo o vacío, podemos editarlo usando este comando. ahora la imágen tendrá el tag de *latest*, lo que nos será de ayuda para identificarlo en un futuro.

  ```
  docker pull --help
  # 1
  docker pull <options> NAME[:TAG[@DIGEST]]
  # 2
  docker pull httpd:latest@sha256:24d492e04f02881adcc1d7543b0251754a2be6a24c75aae7a008fdae767b7337
  docker pull httpd
  # 3
  docker image tag IMAGEID IMAGENAME:NEWTAG
  docker image tag ea28e1b82f31 httpd:latest
  ```

## **Ejecutar un contenedor**

* `docker run`
  * usando `docker pull`, lo único que hacemos es descargar la imágen. con `docker run` es parecido, pero dependiendo de los parámetros especificados, se descargará dicha imágen y se ejecutará. al ejecutar `docker run` lo que hacemos es instanciar esa imagen en un contenedor.

  * obtener ayuda del comando.

  * 1 - crear un nuevo contenedor. si la imágen no existe, primero será descargada y luego ejecutada, dependiendo de los parámetros especificados.

  * 2 - crear un nuevo contenedor con el nombre de **apache01**. la opción `-d` es por `--detach` y lo que hace es correr el contenedor en segundo plano. luego de esto, lo único que nos retorna por pantalla es el **id** del contenedor en ejecución. las opciones `it` junto a `-d` sería lo mismo que poner `-i -t` y es por `--interactive` y `--tty` (*ejecutar `docker run --help` para más información sobre estas opciones*). la opción `--name` simplemente le da un nombre a ese contenedor para poder identificarlo de la manera que nosotros querramos. en este caso se eligió **apache01**. si quisieramos correr otra instancia de `httpd`, simplemente corremos el mismo comando pero cambiándole el nombre y eligiendo otro puerto, sino habría conflictos. ej: `docker run -dit --name apache02 -p 8180:80 httpd`.

  ```
  docker run --help
  # 1
  docker run <options> IMAGE <command> <arg ...>
  # 2
  docker run -dit --name apache01 -p 8080:80 httpd
  ```

## **Ejecutar comandos dentro de un contenedor**

* `docker exec`
  * obtener ayuda del comando.

  * 1 - ejecutar un comando dentro de un contenedor en ejecución.

  * 2 - siguiendo el ejercicio anterior, ahora lo que hacemos es ejecutar un comando dentro del contenedor de *apache01*. primero debemos especificarle en que contenedor queremos ejecutar el comando. en este caso es en **apache01** y el comando elegido es `ls`. como está corriendo sobre **Linux**, lo que hace este comando es listar carpetas y archivos. lo hacemos sobre *htdocs* porque, por defecto, aquí es donde están los archivos con la información que se muestra en la página al ir a [localhost](http://localhost:8080).

  * 3 - lo que hace `ls -l` es listar todo dentro de *htdocs*, incluyendo información sobre los permisos que se tienen sobre cada elemento, cantidad de elementos, dueño, grupo, peso en kb, fecha de última modificación, hora de última modificación y nombre del archivo o carpeta. la opción `-l` es para decir que queremos la salida en formato largo. también se le podría pasar `-a` para mostrarnos archivos ocultos. si son varias opciones, se los puede poner todos juntos como por ejemplo `ls -lah`, donde `-h` es para que nos muestre los datos que sean fáciles de leer para un humano, sobre todo el peso de los archivos que los mostraría en *kb*.

  * 4 - lo que hace `cat` es imprimir por pantalla todo lo que se encuentre dentro de un archivo y es por `con`**`cat`**`enate`. en este caso, es un archivo *html* y puede tener algo como ```<html><body><h1>It works!</h1></body></html>```.

  * 5 - las opciones de `-it` son para decir que debe ser en modo interactivo (`--interactive`) y en modo de pseudo consola (`--tty`). especificando `bash` al final lo que se hace es tener acceso a una consola donde se pueden probar diferentes comandos de **Linux**. ahora podemos realizar ciertas acciones mediante la linea de comandos.

  * 6 - una vez dentro: 
    * ejecutamos `ls` y nos listará todas las carpetas y archivos en el directorio actual. quizás hayan carpetas como *bin build cgi-bin conf error htdocs icons include logs modules*.
    * entramos a *htdocs* con `cd`.
    * volvemos a listar con `ls` y puede que veamos el *index.html*.
    * mostramos el contenido de *index.html* por pantalla con `cat`.
    * modificamos el contenido en ese archivo con el comando `echo`. éste agrega contenido dependiendo de cómo lo especificamos. con `echo "..." > index.html` reemplazamos todo dentro del archivo. con `echo "..." >> index.html` agregamos al final del archivo nuevo contenido pero conservando lo anterior.
    * volvemos a mostrar lo que hay dentro del archivo y ahora solamente debe mostrar lo que especificamos anteriormente: **hola mundo**.
    * cuando no necesitemos hacer nada más, salimos con `exit`, pero solamente saldremos de la consola interactiva. el contenedor seguirá corriendo.

  ```
  docker exec --help
  # 1
  docker exec <options> CONTAINER COMMAND [ARG ...]
  # 2
  docker exec apache01 ls htdocs/
  # 3
  docker exec apache01 ls -l htdocs/
  # 4
  docker exec apache01 cat htdocs/index.html
  # 5
  docker exec -it apache01 bash
  # 6
  ls
  cd htdocs/
  ls
  cat index.html
  echo "hola mundo" > index.html
  cat index.html
  exit
  ```

## **Terminar de trabajar con los contenedores**

Una vez que hayamos terminado de trabajar, tenemos que **[detener](#detener-un-contenedor "Detener")** el contenedor y luego **[remover](#remover-un-contenedor "Remover")** dicho contenedor.

## **Dockerfile**
Un **Dockerfile** es un archivo que contiene una serie de instrucciones para crear una imágen de acuerdo a las necesidades de nuestro proyecto. Éste archivo debe llamarse exactamente así, **`Dockerfile`**, y no tener ningún prefijo, sufijo o extensión. Debe ir en la raíz de nuestro proyecto y puede ir acompañado de un **`.dockerignore`** que sirve como un **`.gitignore`**, para ignorar todos aquellos elementos que no son relevantes para la imágen.

### [Éstas son las buenas prácticas para escribir un buen archivo **Dockerfile**.](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/ "Best practices for writing Dockerfiles")

## **Crear una imagen a partir de un Dockerfile**

* `docker build`
  * obtener ayuda del comando.

  * 1 - crear una imágen con los datos especificados en un **Dockerfile**.

  * 2 - una vez situados en la carpeta de nuestro proyecto, si éste tiene un **Dockerfile** con información sobre cómo crear la imágen, al ejecutar este comando se creará nuestra imágen. la opción `-t` es un alias para `--tag`, que nos sirve para darle un nombre a nuestra imágen, sino solamente sería identificable por el `imageid`. opcionalmente, se le puede especificar un *tag* utilizando el formato de `imagename:tag`. el punto final `.` es para especificar que el **Dockerfile** se encuentra en el mismo directorio en dónde nos encontramos.

  * 3 - una vez creada la imágen, ejecutamos el contenedor utilizando el nombre que le dimos anteriormente. usamos las opciones `-dp` para decirle que se ejecute en segundo plano y también para especificarle un puerto. si sería un proyecto en *React*, usaríamos el *3000*. al final le especificamos el nombre de nuestra imágen y listo.

  ```
  docker build --help
  # 1
  docker build <options> PATH | URL | -
  # 2
  docker build -t my-app .
  docker build -t my-app:v1 .
  # 3
  docker run -dp 3000:3000 my-app
  ```

## **Conectar con Docker Hub**

* `docker login`
  * obtener ayuda del comando.

  * 1 - al ejecutar el comando se abrirá el navegador para consultarnos las credenciales o nos pedirá todo por consola.

  ```
  docker login --help
  # 1
  docker login
  ```

## **Subir imágen a Docker Hub**

* `docker push`
  * obtener ayuda del comando.

  * 1 - subir la imágen especificando un nombre (normalmente es el autor de la imágen), el nombre de la imágen y un tag, por si se tiene planeado tener varias versiones de la misma imágen.

  * 2 - supongamos que nuestra imágen creada tiene el `imageid` de `be9abcb064f2` *(para saber este dato, simplemente ejecutamos `docker images` y nos dará todos los datos sobre las imágenes creadas y descargadas que tengamos, incluído el `imageid`)*. ahora vamos a tener que volver a darle un tag a nuestra imágen pero ya con los datos definitivos para poder subirlo a Docker Hub. una vez que ejecutamos el comando, si volvemos a ejecutar `docker images`, ahora vamos a tener dos imágenes que apuntan al mismo `imageid`. nosotros vamos a subir aquel que tiene el nombre del autor precediendo al nombre de la imágen.

  * 3 - subir la imágen a mi cuenta de Docker Hub (normalmente el usuario en Docker Hub coincide con este nombre especificado). siguiendo con el ejemplo anterior, nuestra imágen creada se llama `my-app` y tiene el tag `v1`. al momento de enviar la imágen al repositorio, debemos hacerlo con el nombre de la imágen creada pero, generalmente, con el nombre del autor precediéndolo. también es bueno especificarle un tag para controlar mejor las versiones de nuestra imágen.

  ```
  docker push --help
  # 1
  docker push NAME/IMAGE:TAG
  # 2
  docker tag be9abcb064f2 minombre/my-app:v1
  # 3
  docker push minombre/my-app:v1
  ```

## [**Importar la imágen de este proyecto y ejecutar un contenedor**](https://hub.docker.com/r/norbertofabrizio/feedback "Feedback App")

* `docker pull`
* `docker run`
  * 1 - traer la imagen de *feedback* con el tag de *v1*.

  * 2 - crear el contenedor y ejecutar la app.

  ```
  # 1
  docker pull norbertofabrizio/feedback:v1
  # 2
  docker run -d --name feedback -p 3000:3000 norbertofabrizio/feedback:v1
  ```
