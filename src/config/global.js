export default {
  global: {
    componenteFormativo: 'Iniciativas estratégicas y de mercado en la empresa',
    descripcionCurso:
      'A través del estudio de este componente, el aprendiz afianzará conceptos, metodologías y procesos relacionados con la organización y estructura administrativa de una empresa. Se cualificará en la gestión de diagnóstico, planeación estratégica, estrategias y desarrollo de mercado, recolección de información, segmentación y seguimiento al plan de actividades.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de estructura organizacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Componentes de la organización',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de planes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de planeación estratégica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '3.1 Tipos de diagnóstico',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas de análisis diagnóstico',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Indicadores de gestión',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Recursos organizacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Inventarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Técnicas e instrumentos de recolección de información',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas de presentación y compilación de información',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Técnicas e instrumentos de recolección de información',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Tecnologías de la información y la comunicación',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Estrategias de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Elementos del mercado',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Segmentación',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Plan de mercadeo',
            hash: 't_8_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.4',
            titulo: 'Análisis diagnóstico',
            hash: 't_8_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.5',
            titulo: 'Seguimiento al plan y sus actividades',
            hash: 't_8_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Adriana, B. (2020). El Diagnóstico Organizacional: elementos, métodos y técnicas. ',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      referencia:
        'Beltrán, A., & Anzola, O. (2013). Mejorando la Competitividad de la PYME. Ediciones Universidad Externado de Colombia.',
    },
    {
      referencia:
        'Enred Consultoría, S.L. (2011). Metodología para la elaboración de diagnóstico y plan para la igualdad en empresas y entidades privadas. Ed. EMAKUNDE, Instituto Vasco de la Mujer. C/ Manuel Iradier.',
      link:
        'https://www.emakunde.euskadi.eus/u72-igualorg/es/contenidos/informacion/ig_org_enlaces/es_material/adjuntos/metodologia-definitiva-web.pdf',
    },
    {
      referencia:
        'Federación Nacional de Asociaciones de Trabajadores Autónomos (2021). Diagnóstico Empresarial en tiempos de Covid-19.',
      link:
        'https://ata.es/wp-content/uploads/2021/05/ATA-guia-diagnostico-empresarial-en-tiempos-de-covid-murcia-V2.pdf',
    },
    {
      referencia:
        'Garza, T. J. (2009). Administración Contemporánea, Reto para la empresa. Ed. Alhambra Mexicana.',
    },
    {
      referencia:
        'Gregori, P. (s.f.). Herramientas estadísticas básicas de la calidad. ',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html ',
    },
    {
      referencia:
        'Jdelca, A. E. (2020). ¿Cómo iniciar el proceso del diagnóstico empresarial en mi organización? [Video]. YouTube',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico Organizacional. Centro Regional de Ayuda Técnica.',
    },
    {
      referencia:
        'Rodríguez, D. (2012). Diagnóstico organizacional. Alfa Omega Grupo Editor,S.A.',
    },
    {
      referencia:
        'Tlaxcala, I. t. (s.f.). Herramientas Estadísticas- Instituto tecnológico Apizaco de Tlaxcala. Herramientas Estadísticas:',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html ',
    },
    {
      referencia:
        'UPRA, Unidad de Planeamiento Rural Agropecuario. Ministerio de agricultura. (2017). Mercado de Productos Agropecuarios.',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Se puede identificar como la probabilidad que un aspecto crítico, muy relacionado con la actividad de la empresa, la afecte sin poder evitarlo, solo puede mitigar o reducir el impacto.',
    },
    {
      termino: 'Captura de información',
      significado:
        'Es la acción de registrar la información que se desea analizar a través de un instrumento como pueden ser formularios, cuestionarios o entrevistas grabadas, etc.',
    },
    {
      termino: 'Conclusiones diagnósticas ',
      significado:
        'Son el conjunto de aspectos más relevantes para la empresa, que son críticas por su nivel de impacto. Pueden ser aspectos a mejorar o consolidar, pueden por ende estar en condición de desventaja o de ventaja competitiva, y sobre las cuales se adelantarán acciones o vigilancia y control.',
    },
    {
      termino: 'Cronograma',
      significado:
        'En planeación, refiere a la determinación en función del tiempo, de las actividades a realizar y los recursos a utilizar para el desarrollo de las estrategias y acciones propiamente definidas en el plan de acción',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Son aspectos y hábitos comunes en las personas de la empresa, que comparten con los compañeros, tal como puede ser el cumplimiento, la calidad, las buenas maneras, lo que se defiende y cumple sin necesidad de normatividad, a pesar que existe.',
    },
    {
      termino: 'Debilidad',
      significado:
        'Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables, ejemplo retrasos en las entregas.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Es un proceso de análisis integral de información de los diferentes aspectos o factores en los cuales está inmerso el ejercicio empresarial, con el fin de identificar el estado actual de competitividad, los aspectos a mejorar y las oportunidades por las que debe optar para un mejor futuro.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Técnica de aplicación de un cuestionario para obtener información referente a consumos, preferencias, y que facilitan la identificación de tendencias proporcionan información de opiniones, actitudes y comportamientos de los empleados, clientes, proveedores, etc.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'Son conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos de análisis y toma de decisiones',
    },
    {
      termino: 'Factores',
      significado:
        'Conjunto de variables o aspectos que se agrupan por su familiaridad facilitando su análisis, ejemplo factores económicos, factores de comercialización y ventas.',
    },
    {
      termino: 'Factores críticos',
      significado:
        'Son los aspectos o variables que inciden en la empresa de manera significativa, se denominan críticos, porque repercuten en el estado actual de la empresa. no siempre son los mismos, pueden cambiar con el tiempo.',
    },
    {
      termino: 'Metodología',
      significado:
        'Para procesos de diagnóstico, corresponde a la definición de las diferentes formas de capturar la información que se utilizará para análisis.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Propósitos de logros que fija la empresa a partir de su condición actual, los cuales pueden ser para crecer, vender, pero a su vez pueden ser mitigar o erradicar una debilidad ya que es plenamente controlable.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo',
    },
  ],
  complementario: [
    {
      tema: ' Diagnóstico',
      referencia:
        'Asesoría empresarial y coaching ejecutivo – JDELCA (2020). ¿Cómo iniciar el proceso del diagnóstico empresarial en mi organización? - Fase I',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=xbS2KO92BZU&ab_channel=ASESOR%C3%8DAEMPRESARIALYCOACHINGEJECUTIVO-JDELCA ',
    },
    {
      tema: 'Diagnóstico',
      referencia:
        'Andrade, G. (2017). Mercado de Productos Agropecuarios- Guía para Priorización y Diagnóstico. Ministerio de Agricultura y Desarrollo Rural',
      tipo: 'Libro',
      link:
        'https://es.scribd.com/document/456736598/Mercado-productos-agropecuarios',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Bastidas, E. (2010). Gestión de inventarios. Logística y abastecimiento. ',
      tipo: 'Artículo',
      link:
        'https://logisticayabastecimiento.jimdofree.com/gesti%C3%B3n-de-inventarios/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto Temático',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Marcela Alarcon Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
