export default {
  global: {
    Name: 'Claves para entender al turista',
    Description:
      'Para incursionar en el aprendizaje sobre la integración de servicios en la ruta turística, resulta fundamental comprender los conceptos básicos que permiten identificar las preferencias de viaje. Se abordan los métodos de investigación para reconocer las motivaciones de los viajeros, las técnicas de comunicación necesarias para el relacionamiento con los distintos actores del destino, la estructura y organización de la información en bases de datos, así como los diferentes perfiles del turista. Todo ello orientado a comprender sus necesidades y, de esta manera, diseñar una oferta de servicios pertinente y coherente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métodos de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Técnicas aplicadas a la investigación de motivaciones de viaje',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fuentes de información',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Base de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de manipulación de datos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Motivaciones de viaje',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Perfil del turista',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Perfil del turista',
      referencia:
        'Conde Pérez, E. M., Herrera Vázquez, N. L., & Schmidt Cornejo, N. E. (2012). Procedimiento para analizar el comportamiento del turista: Aplicación en el destino Manzanillo, México. TURYDES: Revista sobre Turismo y Desarrollo Local Sostenible.',
      tipo: 'Documento.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8952014',
    },
    {
      tema: 'Bases de datos',
      referencia:
        'Alarza Blázquez, G. (2009). Bases de datos: sistema de gestión de rutas turísticas. (Proyecto fin de carrera, Universidad Carlos III de Madrid), Repositorio Institucional UC3M.',
      tipo: 'Proyecto.',
      link: 'https://e-archivo.uc3m.es/handle/10016/9748',
    },
    {
      tema: 'Perfil del turista',
      referencia:
        'Canal IPE. (2022b) ¿Qué es el turismo y por qué es importante?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7e3Zht_Hf3E',
    },
  ],
  glosario: [
    {
      termino: '<i>Bleisure</i>',
      significado:
        'tendencia de la industria de reuniones que combina viajes de negocios con actividades de ocio.',
    },
    {
      termino: '<i>Branding</i>>',
      significado:
        'proceso de construir una identidad distintiva y deseable para un destino, empresa o producto turístico y diferenciarlo de los competidores.',
    },
    {
      termino: '<i>Coaching</i>',
      significado:
        'metodología que acompaña a individuos o grupos en el desarrollo de las habilidades y competencias, con el objetivo de mejorar el desempeño y lograr las metas dentro de la industria turística.',
    },
    {
      termino: 'Expectativas',
      significado:
        'impresiones, deseos y esperanzas que un turista tiene sobre un destino y la experiencia de viaje antes de realizarla.',
    },
    {
      termino: 'Experiencias inmersivas',
      significado:
        'estrategias y actividades que buscan sumergir al turista en un destino, cultura o entorno de manera profunda y significativa.',
    },
    {
      termino: 'Gastronomía autóctona.',
      significado:
        'comida local y prácticas culinarias propias de una región específica que son utilizadas como atractivo turístico para atraer visitantes interesados en experimentar la cultura local a través de la comida.',
    },
    {
      termino: 'Mentorías',
      significado:
        'relación de aprendizaje y desarrollo profesional donde una persona con experiencia en el sector comparte sus conocimientos y habilidades con otra persona el aprendiz o mentorizado para ayudarle a crecer y alcanzar sus objetivos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilera, C. (2024). Qué es la gestión de talento humano en una empresa. Blog de E-learning.',
      link: 'https://www.ispring.es/blog/gestion-talento-humano',
    },
    {
      referencia:
        'Alarza, B. (2009). Bases de datos: sistema de gestión de rutas turísticas.',
      link:
        'https://file:///C:/Users/EQUIPO/Downloads/PFC_Gladys_Alarza_Blazquez.pdf',
    },
    {
      referencia:
        'Castro, C. D. (2024, 27 mayo). Todo sobre turismo: 8 tipos y sus motivaciones. Tickelia.',
      link: 'https://tickelia.com/blog/glosario/8-tipos-turismo-motivaciones/',
    },
    {
      referencia:
        'Habilidades de un agente de viajes exitoso. (s. f.). Indeed.',
      link:
        'https://mx.indeed.com/orientacion-profesional/como-encontrar-empleo/habilidades-agente-viajes',
    },
    {
      referencia:
        'Jiménez, E. A. C., & De Jesús Vizcaíno, A. (2017). Talento humano: una contribución a la competitividad organizacional.',
      link: 'https://www.redalyc.org/journal/5718/571864086001/html/',
    },
    {
      referencia: 'Ley 300 de 1996. Ley General de Turismo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634',
    },
    {
      referencia:
        'Ortega, C. (2023a). 5 instrumentos para recopilar información. QuestionPro.',
      link:
        'https://www.questionpro.com/blog/es/instrumentos-para-recopilar-informacion/',
    },
    {
      referencia:
        'Ortega, C. (2023b). Manipulación de datos: qué es, técnicas y ejemplos. QuestionPro.',
      link: 'https://www.questionpro.com/blog/es/manipulacion-de-datos/',
    },
    {
      referencia:
        'Puestos en una agencia de viajes: funciones y salario. (s. f.). Indeed.',
      link:
        'https://mx.indeed.com/orientacion-profesional/como-encontrar-empleo/puestos-agencia-viajes',
    },
    {
      referencia:
        'Scaminacci, J., & Scaminacci, J. (2024). ¿Cuáles son los nuevos perfiles profesionales en el sector turístico? Blog Centro de e-Learning.',
      link:
        'https://blog.centrodeelearning.com/cuales-son-los-nuevos-perfiles-profesionales-en-el-sector-turistico',
    },
    {
      referencia:
        'Verne. (2021). El análisis de datos, clave para el sector del turismo. Verne Group.',
      link:
        'https://www.vernegroup.com/actualidad/noticias/analisis-de-datos-sector-turismo/#:~:text=El%20an%C3%A1lisis%20de%20datos%20permite,y%20la%20gesti%C3%B3n%20del%20negocio.&text=%C2%BFQu%C3%A9%20beneficios%20aporta%20el%20an%C3%A1lisis,Smart%20City%20al%20turismo%20inteligente',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2019a). Comunicación efectiva en turismo: guía para profesionales. OMT.',
    },

    {
      referencia:
        'Organización Mundial del Turismo. (2019b). Medición del turismo sostenible: guía práctica. OMT.',
    },

    {
      referencia:
        'Organización Mundial del Turismo. (2019c). Turismo y comunidades locales: guía para el desarrollo de experiencias autóctonas. OMT.',
    },

    {
      referencia:
        'Yousefi, M., & Marzuki, A. (2014). Perfiles turísticos en función de las motivaciones para viajar. Revista de Turismo y Patrimonio Cultural, (pp. 223–239).',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
