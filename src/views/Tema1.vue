<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Estructura organizacional

    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right") 
          p.mb-3 Una organización es un conjunto de personas que persiguen un fin u objetivo común; esta visión de empresa, con las configuraciones propias del tiempo y de la historia, prevalece desde que el ser humano, por sus características de #[span.color-text ser relacional,] estableció criterios para poder organizarse colectivamente y mejorar las condiciones de sobrevivencia. 
          p.mb-3 Las familias fueron la primera forma de organización, llegando a conformar organizaciones sociales más complejas, lo que dio origen a pueblos o civilizaciones. 
          p.mb-3 La forma espontánea de organización que el ser humano ha ido encontrando y que da paso a la conformación de lo que, en la actualidad, se reconoce como empresa, tiene algunas particularidades que vale tener presentes: 

      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/img_1.png')
    
    .row.justify-content-center.align-items-center.mb-3
      SlyderB.sl.color-custom-1.mb-5.p-5(:datos="datosSlyder")(data-aos="zoom-in-down")

    p.mb-3 Dedicación de las organizaciones según su actividad y proceso

    p.mb-3 En Colombia la economía se estructura a partir del tipo de proceso de producción que desarrollan las empresas u organizaciones, las cuales, desde un enfoque clásico convencional, se dividen en tres sectores: 

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in-down")
      .py-4.py-md-4.mg-top-2(titulo="Sector primario")
        .row.justify-content-center.p-5
          .col-12.col-md-5.mb-3.mb-md-0
              img(src="@/assets/curso/images/tema1/img_6_1.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Sector primario
            p.mb-3 Todas las empresas u organizaciones que obtienen sus productos directamente de recursos naturales, sin procesos elaborados. Se consideran generadores de materias primas no elaboradas o bienes consumibles directos.
            p.mb-0 Su producción se orienta en gran medida a soportar o abastecer los procesos industriales de transformación y elaboración de productos o bienes. También se le denomina sector extractivo. En este sector se ubican las empresas agropecuarias, la pesca, la minería.
          

      .py-3.py-md-4.mg-top-2(titulo="Sector secundario")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-5.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema1/img_7.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Sector secundario
            p.mb-3 Empresas cuyas actividades están dedicadas a la elaboración o producción industrial, la transformación industrial de materias primas, de bienes de otras empresas, que también se utilizan como base para la fabricación y elaboración de otros o nuevos productos.

            p.mb-0 Transforman materias primas en productos elaborados: cárnicos, lácteos, construcción, industria, marroquinería, etc.
          

      .py-3.py-md-4.mg-top-2(titulo="Sector terciario o servicios")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-5.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema1/img_8.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Sector terciario o servicios
            p.mb-3 Se compone de las empresas que tienen como actividad, el abastecimiento de la sociedad y el mercado en general de bienes y servicios de los otros sectores, o de proporcionar beneficios intangibles fundamentales a la sociedad, asegurando su correcto funcionamiento.

            p.mb-0 Se encuentran allí, el comercio, el turismo, la sanidad, la educación, entre otras.
          
    Separador

    #t_1_1.titulo-segundo
      .h2 1.1 Tipos de estructura organizacional
 
    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6(data-aos="fade")
        p.mb-3 La estructura organizacional es un mecanismo que sirve para esquematizar gráficamente y adecuar las actividades por desarrollar en una empresa. En la estructura organizacional se asigna el personal requerido en función de dichas actividades; ello, deviene en una mejor comprensión de la empresa y del quehacer ordinario.

          .cajon.color-custom-2.p-4         
            p.mb-0 Así mismo, la estructura organizacional sirve para definir el esquema de comunicaciones y de división del trabajo, dando como resultado las áreas funcionales de una empresa; esta estructuración deriva en una jerarquización según el nivel de roles de la empresa, es decir quiénes toman decisiones, quiénes coordinan las operaciones y quiénes ejecutan las acciones propiamente dichas. 

        p.mb-0 Se debe analizar el siguiente esquema y reconocer la configuración jerárquica de la empresa agropecuaria que en este se ejemplifica; se debe identificar roles y probables responsabilidades del personal, según su designación y ubicación en la estructura (ver figura 1):


      .col-lg-6.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema1/img_9.png'  alt='')

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-botones
          h5 Figura 1
          span Ejemplo de Organigrama de Áreas Funcionales para una empresa agropecuaria

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade")
        figure
          img(src='@/assets/curso/images/tema1/fig_1.svg')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-10
        .jumbotron-3.color-custom-3.py-3.px-4
          .row.justify-content-center.align-items-center
            .col-6.col-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/images/tema1/ico_1.svg'  alt='' , style="width:80px; display:block; margin:auto 0 ;")
            .col-lg-10
              p.my-3 En una empresa agropecuaria, del sector primario, es fundamental definir esquemas gráficos que faciliten a los nuevos trabajadores, al personal interno, externo y, en general, a todas las dependencias de la empresa, una mejor comprensión de las demás dependencias.

    Separador

    #t_1_2.titulo-segundo
      .h2 1.2  Componentes de la organización

    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 Se trata del conjunto de aspectos que van más allá de los recursos materiales con que opera la empresa y con los cuales la empresa se desarrolla dinámicamente. Los componentes de una empresa pueden estar clasificados o configurados por ella misma, pero hay una clasificación básica que se puede aplicar a casi cualquier organización: talento humano y grupos estratégicos, administración y liderazgo, activos materiales, sistema de gestión.

          p.mb-3 En lo relacionado con los componentes de la organización o empresa, se debe tener en cuenta las siguientes generalidades; se debe procurar llevar registro de lo más importante en una libreta personal de apuntes:
         

      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/img_10.png')

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qnyD2OYF33c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>












































































































 
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Niveles y roles de la agrupación humana',
        texto:
          'Estas organizaciones de individuos, para que funcionaran, definieron niveles y roles por lo cual surge la división del trabajo.',
        imagen: require('@/assets/curso/images/tema1/img_new.jpg'),
      },
      {
        titulo: 'Surgimiento de las normas y reglas',
        texto:
          'Del cumplimiento o incumplimiento de los roles y responsabilidades asignados a cada individuo, vino el surgimiento de las normas, con las cuales se busca la armonía, el alcance de metas y objetivos comunes que, inicialmente, se basaban en sobrevivir. ',
        imagen: require('@/assets/curso/images/tema1/img_2.png'),
      },
      {
        titulo: 'Configuración del concepto de empresa',
        texto:
          'Por otro lado y con el desarrollo de las civilizaciones, surge el concepto de empresa, como el conjunto de acciones arduas y continuas, que las personas desarrollan para lograr un fin u objetivo.',
        imagen: require('@/assets/curso/images/tema1/img_3.png'),
      },
      {
        titulo: 'Resignificación de la empresa moderna y las organizaciones',
        texto:
          'Con la aparición de las sociedades de trabajo, la administración de empresas homologa los dos términos empresa y organización, de manera que es indistinto referirse a ambos, pues denotan los mismos propósitos básicos.',
        imagen: require('@/assets/curso/images/tema1/img_4.png'),
      },
      {
        titulo: 'Concepto de empresa u organización',
        texto:
          'En definitiva, se trata de un conjunto de personas que, de manera organizada y con el uso de recursos propios de su labor, desarrollan actividades con el fin de lograr objetivos comunes. Todo ello, en el marco de ciertas normas que favorecen tal cumplimiento de actividades y aseguran a los individuos que participan en ellas.',
        imagen: require('@/assets/curso/images/tema1/img_5.png'),
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
