<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Un turista elige un destino motivado por los atractivos, actividades y servicios que este ofrece. Por ello, resulta esencial identificar las motivaciones de viaje con el fin de determinar el tipo de destino que desea visitar y orientar la planificación turística hacia experiencias que respondan a sus intereses.
    p En el siguiente mapa conceptual se presentan, en primer lugar, los métodos de investigación y las técnicas de comunicación empleadas para conocer las motivaciones de los turistas y establecer una relación efectiva con los distintos actores del destino. En segundo lugar, se aborda el componente de la base de datos, sus tipos y las técnicas de manipulación, que permiten estructurar y organizar la información recolectada de manera ordenada y útil.
    p.mb-5 Por último, se destacan las motivaciones de viaje y el perfil del turista, aspectos fundamentales para comprender los intereses, comportamientos y preferencias de los viajeros. Estos elementos facilitan el diseño de experiencias personalizadas y contribuyen al desarrollo de destinos turísticos competitivos y sostenibles.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado claves para entender al turista que relaciona los temas: métodos de investigación, base de datos, motivaciones de viaje y perfil del turista.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
