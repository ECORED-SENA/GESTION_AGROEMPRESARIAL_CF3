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
  

    .container.bg-white.px-md-5.py-2.container-top.fondo.m-top.mb-0.mt-3.cs
      .color-custom-1.p-4
        SlyderA(tipo="b")(data-aos="fade-left")
          .row.justify-content-center.align-items-center
            .col-md-11.mb-4.mb-md-3.col-lg-4
              h3 Distinción del producto
              p.mb-0 A través de los procesos de certificación se obtiene un sello que distingue a un producto de otros, lo cual se convierte en un elemento diferenciador que mejorará la confianza de los consumidores en los productos, permite mayores precios de venta y facilita el acceso a nuevos mercados, incluso, en ámbitos internacionales.      
            .col-md-11.col-lg-7
              figure
                img.img-a.img-t(src='@/assets/curso/images/tema1/img_2.png', alt='Texto que describa la imagen')


          .row.justify-content-center.align-items-center
            .col-md-11.mb-4.mb-md-3.col-lg-4
              h3 Mejora profunda de los procesos
              p.mb-0 Cuando se implementan procesos de certificación se obtiene una mejora sustancial en los procesos de manufactura debido al estricto seguimiento del que son objeto, lo cual reduce los costos de producción al procurar un uso eficiente de los recursos disponibles y una administración responsable del negocio agropecuario.      
            .col-md-11.col-lg-7
              figure
                img.img-a.img-t(src='@/assets/curso/images/tema1/img_3.png', alt='Texto que describa la imagen')
          

          .row.justify-content-center.align-items-center
            .col-md-11.mb-4.mb-md-3.col-lg-4
              h3 Entes competentes
              p.mb-0 Cuando se implementan procesos de certificación se obtiene una mejora sustancial en los procesos de manufactura debido al estricto seguimiento del que son objeto, lo cual reduce los costos de producción al procurar un uso eficiente de los recursos disponibles y una administración responsable del negocio agropecuario.      
            .col-md-11.col-lg-7
              figure
                img.img-a.img-t(src='@/assets/curso/images/tema1/img_4.png', alt='Texto que describa la imagen')
            

          .row.justify-content-center.align-items-center
            .col-md-11.mb-4.mb-md-3.col-lg-4
              h3 Certificaciones adicionales o complementarias
              p.mb-0 Además de los requisitos establecidos por el ICA, las actividades productivas agropecuarias pueden obtener certificaciones adicionales a las que se accede de manera voluntaria, las cuales le confieren al producto un sello de calidad que lo acredita como depositario de ciertas características especiales.      
            .col-md-11.col-lg-7
              figure
                img.img-a.img-t(src='@/assets/curso/images/tema1/img_5.png', alt='Texto que describa la imagen')
          
              
          .row.justify-content-center.align-items-center
            .col-md-11.mb-4.mb-md-3.col-lg-4
              h3 Concepto de empresa u organización
              p.mb-0 En definitiva, se trata de un conjunto de personas que, de manera organizada y con el uso de recursos propios de su labor, desarrollan actividades con el fin de lograr objetivos comunes. Todo ello, en el marco de ciertas normas que favorecen tal cumplimiento de actividades y aseguran a los individuos que participan en ellas.
            .col-md-11.col-lg-7
              figure
                img.img-a.img-t(src='@/assets/curso/images/tema1/img_6.png', alt='Texto que describa la imagen')
              

    h4.mb-3.mt-5 Dedicación de las organizaciones según su actividad y proceso

    p.mb-3 En Colombia la economía se estructura a partir del tipo de proceso de producción que desarrollan las empresas u organizaciones, las cuales, desde un enfoque clásico convencional, se dividen en tres sectores: 

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5  
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in-down")
      .py-4.py-md-4(titulo="Sector primario")
        .row.justify-content-center.p-5
          .col-12.col-md-5.mb-3.mb-md-0
              img(src="@/assets/curso/images/tema1/img_6_1.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Sector primario
            p.mb-3 Todas las empresas u organizaciones que obtienen sus productos directamente de recursos naturales, sin procesos elaborados. Se consideran generadores de materias primas no elaboradas o bienes consumibles directos.
            p.mb-0 Su producción se orienta en gran medida a soportar o abastecer los procesos industriales de transformación y elaboración de productos o bienes. También se le denomina sector extractivo. En este sector se ubican las empresas agropecuarias, la pesca, la minería.
          

      .py-3.py-md-4(titulo="Sector secundario")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-5.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema1/img_7.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Sector secundario
            p.mb-3 Empresas cuyas actividades están dedicadas a la elaboración o producción industrial, la transformación industrial de materias primas, de bienes de otras empresas, que también se utilizan como base para la fabricación y elaboración de otros o nuevos productos.

            p.mb-0 Transforman materias primas en productos elaborados: cárnicos, lácteos, construcción, industria, marroquinería, etc.
          

      .py-3.py-md-4(titulo="Sector terciario o servicios")
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
      .video(data-aos="zoom-in-up")
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qnyD2OYF33c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>












































































































 
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
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
