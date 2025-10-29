<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-3 Cada destino encierra la esencia que lo define y lo distingue de cualquier otro lugar. Representa la suma de todas las características que un viajero percibe y experimenta, generando una impresión única y perdurable. Esta identidad se configura a partir de elementos tangibles e intangibles, que abarcan desde el patrimonio cultural, la historia y las tradiciones, hasta los paisajes naturales, la gastronomía y la hospitalidad de sus habitantes.
        .row.justify-content-end.mb-0.align-items-end
          .col-sm-12.col-lg-9
            .bg-color-1.p-4.br-1
              p.mb-0 Comprender y gestionar dicha identidad resulta esencial para el éxito de todo destino turístico. Esta comprensión permite a los gestores y a las comunidades locales diseñar estrategias de marca efectivas, atraer al público adecuado y promover un desarrollo sostenible. En última instancia, la identidad de un destino constituye la historia que comunica, la promesa que ofrece y el recuerdo que deja en cada visitante, transformándolo no solo en un sitio para conocer, sino en una experiencia para vivir.
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/2.png', alt='')
    .row.justify-content-center.mb-5.align-items-center
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/3.svg', alt='')
      .col-sm-12.col-lg-11
          p.mb-0 Una pregunta clave en este contexto es: ¿cómo ofrecer a un cliente un destino que despierte su interés? La respuesta surge del estudio de las motivaciones de viaje de las personas. A partir del análisis de la información recopilada, es posible orientar la oferta hacia aquellos destinos que respondan a dichas motivaciones, integrando servicios turísticos que generen experiencias auténticas y enriquecedoras. Desde esta perspectiva, se abordarán las técnicas y procesos necesarios para investigar las motivaciones de viaje y, con base en ellas, identificar el destino más adecuado. 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
