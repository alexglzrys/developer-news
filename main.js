/** En Vue podemos registrar componentes de forma global o con un alcance limitado (locales). En nuestro caso crearemos la definición de un componente con alcance local que se encuentre limitado a la instancia de nuestra app vue
 *
 * Por otra parte los componentes tambien son instancias de Vue, por lo que sus opciones son similares a las de la instancia raiz, a excepción de algunas especificas.
 *
 * La principal razon de usar componentes es la reutilización y mantenimiento de la app. ya que internamente son modulos autonomos donde se agrupa HTML/CSS/JS, lo que permite dar mantenimiento sencillo a aplicaciones de gran escala
 */
const submissionComponent = {
  props: ["submission", "submissions"],
  // No puedo usar <template> como root element. Existe un plugin llamado Fragment para vue al estilo ReactJS <fragment>
  template: `<div style="display: flex; width: 100%">
        <figure class="media-left">
          <img :src="submission.submissionImage" class="image is-64x64">
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a href="#" class="has-text-info">{{ submission.title }}</a>
                <span class="tag is-small">#{{ submission.id }}</span>
              </strong>
              <br>
              {{ submission.description }}
              <br>
              <small class="is-size-7">
                Enviado por:
                <img :src="submission.avatar" class="image is-24x24" :title="submission.name">
              </small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <!-- Para asociar detectores de eventos en Vue, hacemos uso de la directiva v-on | @ -->
          <span class="icon is-small" @click="upvote(submission.id)" title="Votar">
            <i class="fa fa-chevron-up"></i>
            <strong class="has-text-info">{{ submission.votes }}</strong>
          </span>
        </div>
    </div>`,
  // Listado de metodos de la aplicación Vue
  methods: {
    upvote(submissionId) {
      // En este punto this.submissions es el arreglo sortedSubmissions que se le paso como valor del prop submissions a este componente.
      const submission = this.submissions.find(
        submission => submission.id === submissionId
      );
      submission.votes++;
      // Una forma más rápida y eficiente es haberle pasado el objeto completo como tal, y en esta sección incrementar el valor de la propiedad votes.. objeto.votes++
    }
  }
};

const footerComponent = {
  props: ["title"],
  template: `<div class="footer">
    <div class="content has-text-centered">
      <strong>{{ title }}</strong> &copy;2019. Todos los derechos reservados
    </div>
  </div>`
};

// Crear una intancia de Vue
new Vue({
  el: "#app",
  // Registrar los componentes a usar en el template de este componente
  // Se puede registrar tambien a manera de arreglo [submissionComponent]
  components: {
    "submission-component": submissionComponent,
    "footer-component": footerComponent
  },
  // La instancia de Vue, puede devolver datos que deben manejarse dentro de la vista
  data() {
    return {
      // Seed el la propiedad que se inyecta al objeto window en el archivo seed.js. la cual es un objeto que contiene el path submissions que a su vez tiene como valor un arreglo de objetos
      submissions: Seed.submissions,
      title: "Developer News",
      description:
        "La red social con artículos del programador para el programador"
    };
  },
  // Las propiedades calculadas se usan para manejar calculos complejos de información que se necesitan mostrar en la vista. Y son recalculadas si alguno de sus datos (variables) dependientes cambia
  computed: {
    sortedSubmissions() {
      // retornar una matriz ordenada de mayor a menor numero de votos
      return this.submissions.sort((a, b) => {
        // Si el resultado es negativo, a va primero, 0 se quedan igual, positivo b va primero
        return b.votes - a.votes;
      });
    }
  }
});
