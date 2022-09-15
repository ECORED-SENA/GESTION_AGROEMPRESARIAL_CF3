<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 6
      h1  Información
    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6(data-aos="fade-right") 
        .jumbotron-4.p-4.mb-3
          p.mb-3 Para el desarrollo de los procesos de diagnóstico de mercado y de planeación estratégica, la empresa requiere de datos e información de la actividad económica que desarrolla, la cual se puede obtener de manera directa en sus archivos, por ejercicios anteriores, pero a su vez puede referenciarse de información externa a la empresa, bien sea del sector o de otras condiciones que afectan la empresa.

        p.mb-3 Los procesos de investigación para los procesos de planeación y diagnóstico de mercados, exigen como aspecto fundamental y de importancia, identificar las fuentes de la información para llegar a ellas y consultar, pues es donde se produce, genera o se dispone.

        p.mb-0 En el siguiente esquema, se puede identificar la forma de clasificación de las fuentes de información, que pueden ser consultadas por la organización:


      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema6/img_1.svg')

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.m-top.mb-0.cs
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema6/fig_1.svg')
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right") 
        .jumbotron-3.p-4.mb-3.mt-3
          h4.mb-3 Fuentes primarias
          p.mb-0 Las fuentes primarias de información producen, generan, elaboran datos e información original, que ha sido publicada directamente por quienes dominan los procesos o las actividades, evidenciando los registros: datos tal cual ocurren.
      .col-lg-6(data-aos="fade-left")
        .jumbotron-3.p-4.mb-3
          h4 Fuentes secundarias
          p.mb-0 Promueven y difunden información primaria, la cual sintetizan, le realizan análisis y reorganizan. Facilitan y maximizan el acceso a datos, permitiendo mayor alcance. Si bien son una fuente válida de información presentan cierto nivel de riesgo ya que, al ser información reprocesada, reorganizada, puede incurrir en imprecisiones o desviaciones de su sentido inicial.

    .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA
        .row.justify-content-center.align-items-center.p-5
          .col-12.col-md-2.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema6/ico_1.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-2
          .col-12.col-md-10.mb-3.mb-md-0
            p.mb-0 <b>Exploración e indagación:</b> las fuentes secundarias se utilizan mucho para efectos de exploración e indagación sobre tendencias o por conceptos derivados de las fuentes primarias, facilitando su entendimiento.

        .row.justify-content-center.align-items-star.p-5
          .col-12.col-md-10.mb-3.mb-md-0
            p.mb-0 <b>Diagnósticos y toma de decisiones:</b> para efectos de cualquier investigación diagnóstica, y como base para la toma de decisiones, se sugiere siempre contar con fuentes primarias, que son las que tienen mayor grado de confiabilidad.
          .col-12.col-md-2.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema6/ico_2.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-2
          
        .row.justify-content-center.align-items-star.p-5
          .col-12.col-md-2.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema6/ico_3.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-2
          .col-12.col-md-10.mb-3.mb-md-0
            p.mb-0 <b>Fiabilidad de ambos tipos:</b> la confiabilidad que otorgan las fuentes primarias no significa que, en un determinado momento, no se puedan tomar referentes de fuentes secundarias, pero hay que tener en cuenta la fiabilidad de quien la genera o del tipo de documento que representa.

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6(data-aos="fade-right") 
          h4.mb-3 Reconocimiento de fuentes y citación de autoría
          p.mb-3 El desarrollo de un diagnóstico empresarial debe contemplar el registro y citación de las fuentes de información, autores, etc., al momento de la redacción y en la generación del informe general, así como de los resultados parciales en la identificación de los aspectos externos e internos.

          p.mb-3 El líder del proceso y su equipo deberán compilar esta información de fuentes y procedencia de la información de fuentes externas, utilizada por cada una de las diferentes instancias y áreas funcionales de la empresa, la cual debe ser suministrada por la misma, al momento del envió de su información y presentada de igual manera en el informe general del diagnóstico empresarial como en la bibliografía.
      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema6/img_2.png')


    Separador

    #t_6_1.titulo-segundo
      .h2 6.1  Técnicas e instrumentos de recolección de información

    p.mb-3 Para el desarrollo de un diagnóstico de mercado y el establecimiento de la planeación estratégica de una empresa, se debe obtener información que exige técnicas de recolección o captura, bien sea cualitativa o cuantitativa, según el caso.

    p.mb-3 Dentro de las técnicas e instrumentos de recolección de información más comunes y prácticos, se encuentran:

    .row.justify-content-center.align-items-center.mb-3
      SlyderB.sl.color-custom-1.mb-5.p-5(:datos="datosSlyder")(data-aos="zoom-in-down")

    p.mb-3 Tanto las entrevistas como las encuestas manejan formularios para realizar las preguntas, las cuales dependiendo de la naturaleza de la información pueden ser de pregunta cerrada o abierta, cuando se busca información descriptiva.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-10
        .jumbotron-3.color-custom-3.py-3.px-4
          .row.justify-content-center.align-items-center
            .col-6.col-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/images/tema6/ico_4.svg'  alt='' , style="width:80px; display:block; margin:auto 0 ;")
            .col-lg-10
              p.my-3 El moderador de estas técnicas debe promover y facilitar que se responda con precisión a preguntas tipo: qué, cómo, dónde, etc., las cuales deben estar orientadas a obtener datos de medidas cuantitativas y hechos objetivos, hábitos, frecuencia de consumo y opiniones.

    Separador

    #t_6_2.titulo-segundo
      .h2 6.2 Técnicas de presentación y compilación de información

    p.mb-3 Frecuentemente, la información empresarial se compila y presenta a través de instrumentos que aportan al diagnóstico, a la notificación de avances al plan estratégico, a la difusión de la comercialización y de la producción o, en general, a dar cuenta de los procesos micro y macro de la gestión empresarial.

    p.mb-0 Se debe analizar la siguiente infografía y detallar las características de las técnicas de presentación y compilación de información que pueden ser usados en la empresa; se debe recordar registrar en una libreta de apuntes, los elementos más destacados:

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Informes")
            .row.align-items-center.align-items-center
              .col-12.col-lg-6.mb-4.mb-lg-0
                h4 Informes
                p.mb-0 Todo informe debe presentar diferentes contenidos o capítulos, dependiendo del tipo de información por comunicar, indicando la metodología o proceso al cual refiere y si será un documento al público en general o para algunos usuarios, lo que es potestativo de la empresa por ser esta de carácter discrecional y fundamental para la toma de decisiones del futuro inmediato.
              .col-12.col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema6/img_8.png')
            
          .tarjeta.back-tab.px-5.py-4(titulo="Boletines")
            .row.align-items-center.align-items-center
              .col-12.col-lg-6.mb-4.mb-lg-0
                h4 Boletines
                p.mb-0 Sirven de soporte a los informes físicos. Son desagregaciones resumidas de los procesos, de resultados de la empresa, así como de aspectos propios de la actividad empresarial, donde se utiliza información estadística y descriptiva, que puede ser cuantitativa o cualitativa muy sintetizada. Pueden ser ocasionales o seriados; es decir, con una frecuencia definida por la empresa.
              .col-12.col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema6/img_9.png')
           
          
          .tarjeta.back-tab.px-5.py-4(titulo="Difusión por página <i>web</i> o intranet")
            .row.align-items-center.align-items-center
              .col-12.col-lg-6.mb-4.mb-lg-0
                h4 Difusión por página <i>web</i> o intranet
                p.mb-0 Según el tipo de información y nivel de detalle, la comunicación puede ofrecerse desde la página <i>web</i> empresarial (pública). Asimismo, la información exclusiva de la organización, para efecto de sus comunicaciones, coordinación y desarrollo de actividades, resultados internos de sus procesos, se puede divulgar desde la intranet, a la cual solo tendrán acceso los empleados  y personas vinculadas con la empresa. 
              .col-12.col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema6/img_10.png')

          .tarjeta.back-tab.px-5.py-4(titulo="Validación de la información ofrecida")
            .row.align-items-center.align-items-center
              .col-12.col-lg-6.mb-4.mb-lg-0
                h4 Validación de la información ofrecida
                p.mb-0 En cada una de estas alternativas y técnicas para la presentación y difusión de la información empresarial se debe tener visto bueno sobre su contenido, lo cual obedece a un ejercicio interactivo y de coordinación en un comité de gestión y comunicaciones.
              .col-12.col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema6/img_11.png')






















































































































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Entrevistas individuales',
        texto:
          'Es una conversación empática en un clima de confianza mutua, comprensión y afinidad emocional entre el entrevistador y el entrevistado. Regularmente, se orienta a clientes, proveedores o posibles demandantes de producto. ',
        imagen: require('@/assets/curso/images/tema6/img_3.png'),
      },
      {
        titulo: 'Análisis de documentos de informes previos',
        texto:
          'Se delega un investigador que reunirá los documentos que contengan la información por analizar (informes cuantitativos o cualitativos, que necesitan ser estudiados), a fin de comprender la información histórica y demás características propias de la empresa. Así mismo, se debe obtener informes sectoriales y gremiales que contextualicen las posibilidades de actividad y su comportamiento histórico.',
        imagen: require('@/assets/curso/images/tema6/img_3_1.png'),
      },
      {
        titulo: 'Debates o foros en grupos pequeños',
        texto:
          'Se adelantan sesiones grupales con un tema central por indagar, promoviendo los diferentes puntos de vista e interpretación que nutren la discusión dirigida frente a algún factor o variable, problema específico, sustentación del sector agropecuario y sus posibilidades, necesidades de desarrollo, abastecimiento, etc.',
        imagen: require('@/assets/curso/images/tema6/img_4.png'),
      },
      {
        titulo: 'Entrevista colectiva',
        texto:
          'Donde, a partir de la convocatoria de un grupo de personas, el moderador o entrevistador aplicará una serie de preguntas registrando las respuestas diferenciadas y comunes, en un lenguaje amable.',
        imagen: require('@/assets/curso/images/tema6/img_5.png'),
      },
      {
        titulo: 'Encuestas',
        texto:
          'Son el diligenciamiento de formularios que, por medio de preguntas de los diferentes factores y aspectos por diagnosticar, los participantes del diagnóstico expresan su percepción sobre los productos desarrollados por la empresa, o de la competencia, con el fin de identificar tendencias y sustituciones de consumo..',
        imagen: require('@/assets/curso/images/tema6/img_6.png'),
      },
      {
        titulo: 'Autoevaluaciones',
        texto:
          'Ejercicio de consulta para obtener respuesta, a partir de la reflexión de los trabajadores, sobre los aspectos o factores que afectan el mercado, sus posibilidades de desarrollo, etc. Se realiza con formularios o cuestionarios.',
        imagen: require('@/assets/curso/images/tema6/img_7.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
