<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 5
      h1 Inventarios

    p.mb-3 Entre los recursos físicos de activos que posee la empresa para su operación se encuentran los inventarios; es decir, existencias de recursos para transformación, venta, uso o cualquier otro aspecto, con fines operativos, que se encuentran almacenados en bodega en espera de ser utilizados.
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema5/img_1.jpg')

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 La siguiente es una lista de los principales tipos de inventarios, existentes en una empresa agropecuaria:

          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              p <b>Inventarios de materias primas:</b>recursos esenciales para la elaboración o fabricación de bienes o productos. 
            li 
              i.fas.fa-angle-right
              p <b>Inventarios de productos en proceso:</b> materias primas, que ya han sufrido algún proceso de agregación de valor o transformación, pero que aún no han sido terminados totalmente (producción de huevos que no han sido preparados, pesados, y embalados / leche que se encuentra pasteurizada pero no empacada, está en silos).
            li 
              i.fas.fa-angle-right
              p <b>Inventario de productos terminados:</b> productos que ya tienen completa su agregación de valor, cumplieron su proceso de producción y están esperando para ser distribuidos.

      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema5/img_2.png')

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema5/img_3.png').mb-3
      .col-lg-6(data-aos="fade-right") 
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p <b>Inventario de repuestos:</b> recursos que posee la empresa para efectos de suplir fallas en máquinas o partes intercambiables; deben permanecer disponibles cuando sean necesitados por el departamento de producción y no interrumpir el proceso de producción (llantas para camiones, cuchilla para un tractor o guadaña, etc.).
          li 
            i.fas.fa-angle-right
            p <b>Inventario de activos:</b> conjunto de recursos de capital con que cuenta la organización para su operación y el trabajo de los individuos (computadores muebles y escritorios, bodegas, etc.).

          li 
            i.fas.fa-angle-right
            p <b>Inventario de obsoletos:</b> es el inventario que posee la empresa de productos que ya están obsoletos, deteriorados, que cumplieron su vida útil o caducaron, dañados o estropeados y no pueden ser comercializados ni distribuidos.

    .row.align-items-center.aling.my-3
      .col-lg-12(data-aos="zoom-in-down")
        .tarjeta.color-custom-5.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-md-2
                  img.mx-5(src="@/assets/curso/images/tema3/ico_1.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;")
                .col.mb-3.mb-sm-0
                  h3.text-white Gestión De Inventarios
                  p.mb-1.text-white Amplíe su saber sobre manejo de existencias de inventario.
                .col-md-3
                  a.boton.color-custom-8(:href="obtenerLink('downloads/Anexo_2_GestionDeInventarios.pdf')" target="_blank")
                    span Descargar
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema3/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
    




















































































































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
