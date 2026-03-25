---
title: "¿Por que hemos elegido Hugo? (Te queremos hugo <3)"
date: 2026-03-19T12:00:00+01:00
author: "juan"
description: "Un pequeño resumen de por que hemos elegido hugo y que es"
---
 

# ¿Por qué hemos elegido Hugo para nuestro blog?
 
A la hora de crear un blog, una de las primeras decisiones importantes es elegir la herramienta con la que vamos a construirlo. En nuestro caso, optamos por Hugo, un generador de sitios web estáticos que destaca por su velocidad, simplicidad y flexibilidad.

Pero, ¿qué significa exactamente esto y por qué fue una buena elección?

# ¿Qué es Hugo y qué hace?

Hugo es una herramienta que permite crear páginas web sin necesidad de un servidor complejo ni de una base de datos. En lugar de generar contenido dinámicamente cada vez que un usuario accede a la web, Hugo hace todo el trabajo de antemano.

El proceso es sencillo: nosotros escribimos el contenido del blog (por ejemplo, en archivos Markdown), definimos el diseño mediante plantillas o temas, y Hugo se encarga de combinar ambas cosas para generar una web completa en formato HTML, CSS y JavaScript.

El resultado es un conjunto de archivos estáticos listos para ser publicados. Es decir, Hugo no “sirve” la web, sino que la construye previamente.

# Cómo funciona en la práctica

El funcionamiento de Hugo se puede entender en tres pasos:

Creación del contenido:

Escribimos los artículos del blog en archivos sencillos, normalmente en formato Markdown.

Aplicación del diseño:

Hugo utiliza plantillas y temas para dar forma visual a ese contenido, definiendo cómo se verá cada página.

Generación del sitio:

Al ejecutar Hugo, se genera una carpeta con todos los archivos finales del sitio web, lista para ser desplegada.

Una vez generado el sitio, cualquier servidor web (como Nginx o GitHub Pages) puede mostrarlo directamente.

# Ventajas de usar Hugo

Elegimos Hugo principalmente por varias razones que encajan muy bien con el tipo de proyecto que estamos desarrollando:

Rapidez

Hugo es extremadamente rápido. Genera sitios completos en cuestión de milisegundos, incluso cuando el número de páginas es elevado. Esto hace que el flujo de trabajo sea muy ágil.

Simplicidad en el despliegue

El resultado final son archivos estáticos. Esto significa que no necesitamos configurar bases de datos ni servidores complejos: basta con copiar los archivos a un servidor y la web funciona.

Seguridad y robustez

Al no haber ejecución de código en el servidor ni bases de datos, se reducen mucho los posibles fallos y vulnerabilidades. Es una solución muy estable.

Independencia del entorno

El sitio generado puede desplegarse en prácticamente cualquier lugar: GitHub Pages, una máquina virtual en Azure o cualquier hosting básico. No depende de tecnologías específicas del servidor.

Organización del proyecto

Hugo estructura claramente el proyecto separando contenido, diseño y configuración. Esto facilita el trabajo en equipo y el mantenimiento del código.

Un detalle importante: la generación previa

Uno de los aspectos más importantes de Hugo —y que puede generar cierta confusión al principio— es que el sitio se genera teniendo en cuenta una URL concreta. Esto significa que, si cambiamos el lugar donde se despliega (por ejemplo, de GitHub Pages a una máquina virtual), puede ser necesario volver a generar el sitio para que las rutas funcionen correctamente.

Conclusión

Hugo es una herramienta que encaja muy bien en proyectos como el nuestro: un blog sencillo, rápido y fácil de desplegar. Nos permite centrarnos en el contenido y el diseño sin preocuparnos por la complejidad del servidor.

En esencia, Hugo no es el sistema que muestra la web al usuario, sino el que la construye. Una vez generada, cualquier servidor puede encargarse de hacerla accesible. Esa separación entre construcción y despliegue es precisamente una de sus mayores ventajas.

Y ademas y muy importamte, por encima de todo, el nombre nos hizo <b>gracia</strong>.