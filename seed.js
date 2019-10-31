// Inyectamos en el objeto window, una nueva propiedad llamada Seed. 
// Cuando se invoca, se ejecuta de forma automática (IIFE) la función interna que nos devuelve a su vez un objeto con la propiedad submission, cuyo valor es el arreglo de datos falsos

// Por tanto, podemos acceder a el mediante Seed.submissions

window.Seed = (function () {

  // Fake data: arreglo con objetos que representan un envio en una red social
  const submissions = [
    {
      id: 1,
      title: 'Estado reactivo vs inmutable en VueJS',
      description: 'El estado reactivo es una de las diferencias clave que hace que Vue sea único.',
      url: '#',
      votes: 13,
      avatar: './public/images/avatars/daniel.jpg',
      name: 'Rodrigo Valenzuela',
      submissionImage: './public/images/submissions/image-yellow.png',
    },
    {
      id: 2,
      title: 'Single File Components de Vue',
      description: 'Con los Single File Components de Vue podemos tener en un único fichero la lógica, la vista y el estilo para hacer más escalable nuestro desarrollo.',
      url: '#',
      votes: 8,
      avatar: './public/images/avatars/kristy.png',
      name: 'Paulina Linares',
      submissionImage: './public/images/submissions/image-rose.png',
    },
    {
      id: 3,
      title: 'El CLI de VueJS para proyectos robustos',
      description: 'Vue CLI es un conjunto de herramientas para la creación rápida de prototipos, la fácil aplicación de andamios y la gestión eficiente de proyectos a gran escala.',
      url: '#',
      votes: 17,
      avatar: './public/images/avatars/veronika.jpg',
      name: 'Alejandro González',
      submissionImage: './public/images/submissions/image-steel.png',
    },
    {
      id: 4,
      title: 'Async/Await en VueJS',
      description: 'La finalidad de los operadores async y await es simplificar aun más la forma en la que trabajamos con las promesas.',
      url: '#',
      votes: 21,
      avatar: './public/images/avatars/molly.png',
      name: 'Fernanda Salgado',
      submissionImage: './public/images/submissions/image-aqua.png',
    }
  ];

  // Retornar un objeto cuya propiedad submission contiene el arreglo de datos falsos
  return {
    submissions
  }
})()