<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1 Recursos organizacionales
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.m-top.mb-0.cs
    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 Son llamados también recursos administrativos, con estos opera la empresa para el desarrollo de sus actividades y se pueden clasificar en cuatro grandes grupos: recursos de talento humano, recursos físicos o tangibles, recursos financieros y recursos intangibles.

          p.mb-3 En el siguiente esquema, se puede identificar las particularidades de los diferentes tipos de recursos administrativos; se debe procurar llevar registro de lo más destacado en una libreta personal de apuntes:
       
      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema4/img_1.svg')
  

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in-down")
      .py-4.py-md-4.mg-top-2(titulo="Recursos humanos")
        .row.justify-content-center.p-5
          .col-12.col-md-5.mb-3.mb-md-0
              img(src="@/assets/curso/images/tema4/img_2.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Recursos Humanos
            p.mb-0 Personas vinculadas con la empresa: operarios, obreros, supervisores, jefes, directores, gerentes, presidente, socios.
          

      .py-3.py-md-4.mg-top-2(titulo="Recursos técnicos - tecnológicos")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-5.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema4/img_2_1.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Recursos técnicos - tecnológicos
            p.mb-0 Recursos intangibles que posee la empresa y que atesoran los valores de la actividad a la que se dedica la empresa, entre los que se encuentran: el <i>software</i>, el sistema de ventas, el sistema de producción, las patentes, los secretos del saber hacer, fórmulas, etc.
          

      .py-3.py-md-4.mg-top-2(titulo="Recursos físicos")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-5.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema4/img_3.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Recursos Físicos
            p.mb-3 Son los recursos tangibles que posee la empresa para el desarrollo de sus actividades, los cuales se clasifican como: 
            p.mb-3 #[span.color-text Bienes muebles:] equipo de cómputo y comunicaciones, equipo de oficina (calculadora, perforadoras, cosedoras, etc.), muebles y enseres, flota de transporte (vehículos, camiones, tractores, etc.), maquinaria agrícola, etc.
            p.mb-0 #[span.color-text Bienes inmuebles:] lotes, edificios, oficinas, casas, minas, etc.

      .py-3.py-md-4.mg-top-2(titulo="Recursos financieros")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-md-5.mb-3.mb-md-0
            img(src="@/assets/curso/images/tema4/img_4.png").m-auto
          .col-12.col-md-7.mb-3.mb-md-0
            h3 Recursos Financieros
            p.mb-3 Recursos eminentemente monetarios que necesita la empresa para el desarrollo de las actividades, los cuales pueden ser:
            p.mb-3 #[span.color-text Propios:] caja, bancos, inversiones temporales que tenga la empresa (acciones, CDT, bonos, etc.), cuentas por cobrar.
            p.mb-0 #[span.color-text Ajenos:] créditos (bancarios, Findeter, Bancoldex, Finagro o  extrabancarios), cuentas por pagar, inversiones temporales (acciones comunes o preferenciales, bonos).
  
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
    h3.mb-3 Herramientas para la estimación de recursos

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6(data-aos="fade")
        p.mb-3 La estimación de los diferentes recursos para operar una empresa parte de las funciones y actividades a realizar, las cuales se agrupan en cargos y estos, a su vez, son ocupados y desarrollados por personas a quienes se les asigna un salario en conformidad con sus capacidades y talentos.

          .cajon.color-custom-2.p-4        
            p.mb-0 A su vez, los trabajadores necesitarán recursos físicos, técnicos y tecnológicos para el desarrollo de sus labores; por tanto, se deben asignar según corresponda. Algunos recursos no son asignables a un cargo o puesto en sí, sino que son activos de uso general, los cuales se suman finalmente a los asignados a las labores funcionales de los trabajadores.

      .col-lg-6.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema4/img_5.png'  alt='')
        
    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/images/tema3/ico_1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1.text-white Tabla 1 Estimación de recursos
              p.mb-0 Analice la tabla que describe la técnica para la asignación y estimación de recursos para el desarrollo de las actividades.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/OKEst_Anexo_Presupuesto_recursos.xlsx')" target="_blank")
                span.ts Descargar
                i.ts.fas.fa-file-download


















































































































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
