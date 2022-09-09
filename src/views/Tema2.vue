<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Planeación estratégica
    
    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6(data-aos="fade")
        p.mb-3 Es un ejercicio de gestión que permite establecer el quehacer y que define el conjunto de decisiones por tomar; la planeación estratégica establece el camino que debe seguir la empresa para el desarrollo de las iniciativas de los emprendedores agropecuarios y alcanzar los objetivos o metas que se fijen.

          .cajon.color-custom-2.p-4         
            p.mb-0 La importancia de la planeación estratégica radica en que, con su aplicación, es más favorable el logro de metas con las cuales suplir necesidades de la sociedad local o internacional. A partir de esto, la organización puede ajustarse más y mejor a los constantes y probables cambios de las condiciones climáticas, de acceso a recursos, tendencias de consumo, bloqueos comerciales y todos los aspectos que puedan afectarla.

        p.mb-3 En una empresa agropecuaria se distinguen tres fases, que son soporte fundamental para diseñar la planeación y crear acciones de mejora en cada una de ellas:

      .col-lg-6.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_1.png'  alt='') 

    .row.align-items-center.justify-content-center.p-4
      .col-lg-8
        .jumbotron-2
          p.text-center.p-2.mb-0 <b>Fases de la planeación estratégica en empresas agropecuarias</b>


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema2/fig_1.svg', alt='Texto que describa la imagen')
       

          .tarjeta.color-custom-4.p-3(x="59%" y="72%" numero="1")
            .h5.mb-2 Producción
            p De productos agrícolas o pecuarios.

          .tarjeta.color-custom-4.p-3(x="40%" y="5%" numero="3")
            .h5.mb-2 Consumo
            p Adquisición directa o indirecta de los productos por parte de usuarios o clientes (personas u otras empresas).

          .tarjeta.color-custom-4.p-3(x="31%" y="71%" numero="2")
            .h5.mb-2 Distribución
            p Distribución reparto o transferencia de los productos agropecuarios a zonas de influencia de la empresa.

          .tarjeta.color-custom-4.p-3(x="92%" y="9%" numero="4")
            .h5.mb-2 Comercialización
            p La distribución facilita la comercialización y el mercadeo

          .tarjeta.color-custom-4.p-3(x="81%" y="51%" numero="5")
            .h5.mb-2 Mercadeo
            p El mercadeo a su vez será el gran mecanismo que promoverá al consumo.

    p.mb-3 Se debe profundizar en los aspectos característicos y más destacados de la planeación estratégica, los cuales se enuncian y detallan a continuación:

    .row.justify-content-center.align-items-center.mb-3
      SlyderB.sl.color-custom-1.mb-5.p-5(:datos="datosSlyder")(data-aos="zoom-in-down")

    p.mb-3 Ahora, se debe identificar los elementos estructurales que configuran la planeación estratégica de una organización:

    .tarjeta.back-line.p-4.mb-5(data-aos="zoom-in-down")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-star(titulo="")
          .col-md-7
            h3 Los objetivos
            p.mb-3 Refieren a los diferentes niveles de alcance y/o resultado deseado dentro de los propósitos de la empresa, estos se pueden clasificar en corporativos y específicos.
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_1.svg", alt='', style="width:120px; display:block; margin:auto 0 ;").mb-3

        .row.justify-content-center.align-items-star(titulo="")
          .col-md-7
            h3 Objetivos corporativos
            p.mb-3 Aquellos que la empresa persigue en el desarrollo de su actividad como, por ejemplo, rentabilidad, participación en el mercado por ventas, crecimiento y expansión, etc.
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_2.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")
                  
        .row.justify-content-center.align-items-star(titulo="")       
          .col-md-7
            h3 Objetivos específicos
            p.mb-3 Parten de los corporativos y se fijan desde las iniciativas de las líneas de producto, es decir, los niveles de alcance que tendrá cada línea de producto contribuirán al logro de los objetivos corporativos. Ejemplo: si el objetivo corporativo es crecimiento y expansión en el mercado, los objetivos específicos deben indicar con qué producto y a qué lugares, qué segmento de mercado, en qué magnitud de ventas, etc. 
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_3.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")
        .row.justify-content-center.align-items-star(titulo="")    
          .col-md-7
            h3 Para el sector agropecuario
            p.mb-3  Los fines objetivos que establezca la empresa en el sector agropecuario, tienen un marcado y específico período de tiempo, dada la naturaleza de sus productos, lo que facilita su control y seguimiento.
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_4.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")

        .row.justify-content-center.align-items-star(titulo="")          
          .col-md-7
            h3 Estrategias
            p.mb-3 Conjunto de decisiones fundamentales e interfuncionales que fijan los cursos de acción general, que indican cómo deberán utilizarse los recursos y metodologías productivas para el logro de los objetivos. 
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_5.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")
                  
        .row.justify-content-center.align-items-star(titulo="")
          .col-md-7
            h3 Políticas y normas
            p.mb-3 Conjunto de disposiciones para el desarrollo de actividades empresariales. #[span.color-text Las normas ] son de carácter obligatorio e impartidas por los entes regulatorios del sector, quienes definen los lineamientos generales para tomar el ejercicio de la actividad agropecuaria y fijan guías que orientan la acción y constituyen base para las decisiones en la empresa. Las políticas pueden ser establecidas por la empresa, son de carácter discrecional y complementan las normas dispuestas.
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_6.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")
          
        .row.justify-content-center.align-items-star(titulo="")    
          .col-md-7
            h3 Plan de acción
            p.mb-3 Determina el procedimiento, establece el conjunto de actividades propiamente dichas a realizar dentro de una secuencia, para el logro de los objetivos y obedece al enfoque estratégico previsto; el plan de acción hace que las acciones tengan un orden cronológico y la secuencia de actividades que deben seguirse estrictamente durante la realización del plan.
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_7.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")


        .row.justify-content-center.align-items-star(titulo="")          
          .col-md-7
            h3 Los presupuestos
            p.mb-3 Es la determinación del nivel de recursos necesarios para el desarrollo de las actividades definidas en el plan de acción, expresado en cantidad y valor de dichos recursos, que son los planes expresados en términos económicos.
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_8.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")

        .row.justify-content-center.align-items-star(titulo="")          
          .col-md-7
            h3 Cronograma
            p.mb-3 Es la correlación de las actividades y recursos en función del tiempo, esto es, la programación de cada una de las actividades del plan en un horizonte de tiempo, lo que implica la utilización de los recursos necesarios al momento de su realización, por lo cual estos deben estar disponibles en cantidad y funcionalidad al momento de iniciar las actividades. 
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/images/tema2/ico_9.svg",  alt='', style="width:120px; display:block; margin:auto 0 ;")

    Separador

    #t_2_1.titulo-segundo
      .h2 2.1  Tipos de planes

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 Las posibilidades de planeación en el sector agropecuario se enmarcan desde la naturaleza de los medios productivos, los cuales obedecen a los ciclos vitales de las especies vegetales o pecuarias; por tanto, se pueden tipificar los planes en conformidad a dichos ciclos, además en función del tiempo como variable fundamental.

          p.mb-3 Las empresas en general y con mayor razón las organizaciones del sector agropecuario, pueden y deben establecer planes, con las siguientes características, según casos y necesidad: 

      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema2/img_5.svg')

    .row.justify-content-evenly.align-items-center.p-2 
      .col-12.col-lg-6.mb-4.p-0.p-md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Planes a largo plazo' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Aquellos donde se estima un tiempo superior a dos años; el propósito es delimitar las líneas de productos, los niveles de calidad, precio, metas de ventas y participación en nichos o segmentos de mercado que la empresa establezca para sus operaciones.

          .row(titulo='Productos de los planes a largo plazo' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  En este tipo de proyecto se enmarcan productos de mayor maduración para su desarrollo y producción, hasta llegar a los primeros consumos. Por ejemplo, la plantación de un lote de frutales que requiere el tiempo que transcurre desde la siembra hasta la maduración de la planta y sus primeras producciones, lo cual, según la variedad, puede tardar hasta tres años. Así mismo con la producción de derivados de algunas especies animales.


          .row(titulo='Planes de corto plazo' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0 Iniciativas que fijan un horizonte inferior a un año donde, regularmente, su desarrollo se mide en semanas. Este tipo de planes exige un trabajo muy puntual y disciplinado en su desarrollo.

          .row(titulo='Planes a mediano plazo' numero='4')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0 Son aquellas iniciativas estratégicas con un periodo comprendido entre uno a dos años, en promedio. Por ejemplo, nuevas plantaciones de algunos frutales, las cuales requieren el desarrollo de las plantas hasta sus primeras producciones.
            
          .row(titulo='Iniciativas de los planes a corto plazo' numero='5')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  En los planes a corto plazo se pueden identificar las iniciativas cíclicas que tienen ya su estacionalidad productiva, tal es el caso de la producción de cohortes de crianza y engorde de pollo, donde el ejercicio se mide en semanas y se desarrollan varias cohortes en el año, con sus respectivas estacionalidades de consumo (o las producciones de fruta por cosechas, cuando se trata de plantas ya maduras).

      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_6.png' alt='', style="width:500px; display:block; margin:auto 0;")

    Separador

    #t_2_2.titulo-segundo
      .h2 2.2  Técnicas de planeación estratégica

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 Se puede indicar que la planeación en las empresas agropecuarias facilita el desarrollo en el largo plazo, optimiza el uso de los recursos, disminuye los riesgos por el repentismo y la improvisación, y faculta el buen uso del tiempo.

          p.mb0 En el siguiente recurso, se pueden conocer las diversas técnicas para el desarrollo de propósitos empresariales, en el marco de la planeación estratégica:


      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema2/img_7.png')

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tTTeEk2PySs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>













































































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Las fases de la producción',
        texto:
          'Las fases producción, mercadeo y consumo, se desarrollan en forma sucesiva, existiendo una interrelación entre ellas y una estrecha vinculación entre las dos primeras, a tal punto que es difícil establecer dónde termina la producción y dónde empieza el mercadeo. ',
        imagen: require('@/assets/curso/images/tema2/img_2_1.png'),
      },
      {
        titulo: 'Planeación y ordenamiento productivo',
        texto:
          'El Ministerio de Agricultura, mediante la Unidad de Planificación Rural Agropecuaria (UPRA), promueve y vincula aspectos de mercado, con el análisis de variables e indicadores de actividad, relacionados con la oferta y la demanda nacional, para consumo interno y externo (importaciones y exportaciones); ello ayuda a los productores a focalizarse competitivamente, identificando aspectos  comparativos de evolución de la producción y consumo, del uso del suelo rural y de las posibilidades de los acuerdos de comercio que Colombia ha firmado con otros países.',
        imagen: require('@/assets/curso/images/tema2/img_2.png'),
      },
      {
        titulo: 'Implementación de método',
        texto:
          'La planeación dentro de un proceso productivo agropecuario consiste en la definición e implementación de un método de trabajo para obtener los productos deseados por los inversionistas, según sus intereses y posibilidades técnicas, en las cantidades adecuadas, en los tiempos apropiados y corrientes para la producción y consumo, estableciendo la estructura de costos apropiada para hacer rentable la producción. ',
        imagen: require('@/assets/curso/images/tema2/img_3.png'),
      },
      {
        titulo: 'Factores del ambiente de mercado',
        texto:
          'La planificación fusiona factores del ambiente de mercado y la tecnología de la organización para transformarlo en una actividad productiva y económicamente eficiente. En general, la planeación constituye el proceso que permite obtener la visión del futuro productivo, lo cual requiere del establecimiento de: objetivos, estrategias, políticas y normas, plan de acción, presupuesto, cronograma.',
        imagen: require('@/assets/curso/images/tema2/img_4.png'),
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
