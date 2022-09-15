<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Diagnóstico

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 Un diagnóstico es una investigación que las empresas realizan para determinar el estado actual de condiciones en que se opera en la actualidad. Se puede decir que el diagnóstico es la interpretación real de la organización o el marco de referencia de operación, que le sirve para tomar decisiones frente propósitos empresariales, objetivos o metas proyectadas.

          p.mb-3 El diagnóstico empresarial para el empresario contemporáneo es una herramienta de gestión que:

          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              p Permite identificar las debilidades y fortalezas para enfrentar un mercado muy dinámico. 
            li 
              i.fas.fa-angle-right
              p Después del análisis, permite la evaluación de los productos, servicios, estrategia de ventas, el <i>marketing</i> y la publicidad empleados, entre otras variables operativas.
            li 
              i.fas.fa-angle-right
              p Permite descubrir cuáles son los puntos fuertes y débiles para actuar en consecuencia.

      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/img_1.png')

    Separador

    #t_3_1.titulo-segundo
      .h2 3.1 Tipos de diagnóstico

    p.mb-3 En tanto proceso para conocer la situación actual y real de la empresa u organización, el diagnóstico puede ser clasificado en función de su utilidad, fin, áreas diagnosticadas, propósitos de su elaboración, entre otras.

    p.mb-3 A continuación se presentan algunos tipos de diagnóstico empresarial y sus aspectos más característicos; se debe prestar mucha atención a estas definiciones y se debe llevar registro de lo más destacado en una libreta personal de apuntes:

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Diagnóstico funcional")
            .row.align-items-center.align-items-center
              .col-12.col-lg-6.mb-4.mb-lg-0
                h4 Diagnóstico funcional
                p.mb-0 Busca identificar variables relevantes en la comunicación interna, que repercuten en la operación bien sea administrativa, comercial o de producción; variables que pueden estar afectando la productividad o ciclo del negocio. El diagnóstico funcional permite, mediante el uso de cuestionarios, entrevistas, sistematización de experiencias, análisis grupal, establecer los mecanismos de comunicación generales de toda la organización.
              .col-12.col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema3/img_2.png')
            
          .tarjeta.back-tab.px-5.py-4(titulo="Diagnóstico específico")
            .row.align-items-center.align-items-center
              .col-12.col-lg-6.mb-4.mb-lg-0
                h4 Diagnóstico específico
                p.mb-0 Permite determinar el estado actual de un proceso específico en la empresa, unidad de negocio o línea de producto, analizando los diferentes aspectos relacionados como estados financieros, proceso de mercadeo y ventas, gestión de producción de la empresa, administración del talento humano, entre otros.
              .col-12.col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema3/img_3.png')
           
          
          .tarjeta.back-tab.px-5.py-4(titulo="Diagnóstico organizacional integral")
            .row.align-items-center.align-items-center
              .col-12.col-lg-6.mb-4.mb-lg-0
                h4 Diagnóstico organizacional integral
                p.mb-0 Diagnóstico global que abarca un análisis de todos los procesos y funciones de la empresa; incluye variables y aspectos de los anteriores diagnósticos, implica el análisis de factores externos e internos determinado su posición relativa de competitividad, es decir, identifica qué aspectos la están conduciendo al éxito y cuáles se han descuidado en su capacidad productiva y de crecimiento. Tiene un enfoque eminentemente estratégico a largo plazo.
              .col-12.col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema3/img_4.png')

    Separador

    #t_3_2.titulo-segundo
      .h2 3.2  Herramientas de análisis diagnóstico

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6(data-aos="fade")
        p.mb-3 En primera instancia para un diagnóstico de mercado agropecuario se recomienda la revisión de informaciones estadísticas publicadas y disponibles, como estudios relacionados con el sector y su capacidad, tipos de producción etc. Ejercicio que se recomienda hacer tanto para la oferta como para la demanda, dentro de la región o zona de influencia de la empresa.

          .cajon.color-custom-2.p-4        
            p.mb-0 En esta revisión es importante verificar variables cualitativas y cuantitativas para toma de decisiones frente a alternativas productivas; además, hacer un estudio y evaluación de disponibilidad de espacios o de tierras contempladas para el uso e incluir en la planificación productiva. 

      .col-lg-6.mb-3(data-aos="fade-right") 
        img.mt-5(src='@/assets/curso/images/tema3/img_5.png'  alt='') 


    .row.align-items-center.aling.my-3
      .col-lg-12(data-aos="zoom-in-down")
        .tarjeta.color-custom-5.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img(src="@/assets/curso/images/tema3/ico_1.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h6.text-white Herramientas De Análisis Diagnostica
                  p.mb-1.text-white A continuación le invitamos a profundizar a acerca de las diferentes herramientas de análisis y diagnóstico organizacional
                .col-md-2
                  a.boton.color-custom-8(:href="obtenerLink('downloads/OKEst_Anexo_1_HerramientasAnalisisDiasgnostica.pdf')" target="_blank")
                    span Descargar
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema3/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
    Separador

    #t_3_3.titulo-segundo
      .h2 3.3  Indicadores de gestión
    

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 Los indicadores de gestión son los instrumentos a través de los cuales la empresa mide sus desempeños en las diferentes funciones y actividades que desarrolla, los cuales contrasta con los resultados esperados y fijados desde la planeación.

          p.mb-3 Cuando se habla de indicadores de gestión se hace referencia a medición y control que, efectivamente, es la función para la cual se establecen, es decir, son los instrumentos que facilitan identificar y evaluar los niveles de cumplimiento o desviación de los logros o actividades a realizar frente a los resultados esperados.

          p.mb-3 Sobre los indicadores de gestión, se deben tener presentes algunas generalidades clave, como las que se enuncian enseguida:

      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/img_6.png')


    .row.justify-content-center.align-items-center.p-2 
      .col-12.col-lg-6.mb-4.p-0.p-md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='KPI' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Los indicadores de gestión, conocidos como KPI (<i>Key Performance Indicator</i>), representan la forma de medir si una función, proyecto, actividad, área funcional, unidad de negocio, o persona están alcanzando las metas y objetivos, o resultados esperados.

          .row(titulo='Todos los niveles empresariales' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Se deben utilizar indicadores de gestión en todos los niveles empresariales para evaluar el éxito como el logro establecido en la planeación de la gestión empresarial. 

          .row(titulo='Múltiples fuentes' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0 Estos recursos de información se pueden obtener de informes de las entidades gremiales (en el caso del sector agropecuario: Finagro, Fedearroz, Fedepapa, Agronet, Sociedad de agricultores de Colombia, Ministerio de Agricultura, DANE, entre otras).
            
          .row(titulo='Regulación en Colombia' numero='4')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  El DANE, Departamento Administrativo Nacional de Estadística en Colombia, recoge y/o calcula indicadores del sector agropecuario que sirven como parámetro para los ejercicios diagnósticos y de planeación en las empresas del sector.
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema3/img_7.png' alt='', style="width:500px; display:block; margin:auto 0;")





















































































































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
