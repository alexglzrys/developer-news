# App Social Votos

Es una aplicación similar a Reddit y Hacker News, la cuál muestra un listado de publicaciones ordenadas por número de votos, mismos que puden cambiar con base en la interacción de los usuarios. Asimismo, enfatiza toda publicación siempre y cuando su número de votos sea mayor o igual a 25.

### Resumen técnico

1. La instancia de Vue es el punto de partida de todas las aplicaciones de Vue. La instancia puede tener opciones como los datos, las propiedades calculadas y los métodos y, a menudo, se monta / adjunta a un elemento DOM.

2. La sintaxis de "bigote" se puede utilizar para el enlace de datos. La directiva v-bind ( : ) se usa para enlazar atributos HTML.

3. Las directivas Vue, como v-for, se pueden utilizar para manipular la plantilla en función de los datos proporcionados. La directiva v-on ( @ ) se utiliza como controlador de eventos para escuchar eventos del DOM en nuestras aplicaciones Vue.

4. Los elementos renderizados a través de la directiva v-for, deben identificarse de manera única a través de su prop key, para que Vue haga un seguimiento de cada uno de ellos y tenga conocimiento de que elemento es el que sale, entra, o se mueve en el DOM. **De hacer caso omiso a este key, el render funcionará; pero si tiene una transición asociada, esta no se verá reflejada. Ya que por rendimiento, Vue solo parcha los cambios en el DOM virtual y el resultado lo proyecta en el DOM real**

5. Pensamos y organizamos nuestras aplicaciones Vue con componentes. Puesto que nos ayudan a adelgazar el DOM con HTML, CSS y JS agrupado por funcionalidad. A su vez, hace mas ligero el objeto de opciones de nuestra instancia principal, dado que solo refleja la lógica generica, ya que la especifica se encuentra declarada de forma independiente en cada componente.

6. Frecuentemente los componente hijos necesitan información del padre para poder realizar su trabajo. Esta información debe ser proporcionada a través de sus props.

7. El estado dentro de Vue es reactivo, y en ReactJS el estado es inmutable. **El estado reactivo es una de las diferencias clave que hace que Vue sea único**. La gestión del estado (es decir, los datos) a menudo es intuitiva y fácil de entender, ya que la modificación del estado a menudo hace que la vista se actualice directamente.

8. Binding Class: permite asociar una clase de CSS a un elemento, si una determinada condición (basada en los datos del modelo) se cumple.

#### Instrucciones de uso

Abrir el archivo index.html mediante el uso de un navagador. VueJS esta asociado en el proyecto mediante una red de entrega de contenidos (CDN), ya que es la forma más rapida de iniciar un proyecto con esta librería de frontend orientada a la vista.

El archivo seed.js es un Fake API para proporcionar datos falsos a la aplicación. Consiste en un arreglo de objetos cuyo contenido se encuentra asociado a publicaciones realizadas en una red social (titulo, descripcion, avatar, imagen, votos, etc).