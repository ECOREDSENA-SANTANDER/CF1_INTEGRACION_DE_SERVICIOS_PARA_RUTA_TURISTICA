<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Perfil del turista
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 El perfil del turista se refiere al conjunto de características, comportamientos, actitudes y motivaciones que describen a una persona durante su experiencia de viaje. Este concepto va más allá de los datos demográficos básicos como edad, género o nivel de ingresos, pues incluye también aspectos psicológicos, sociales y culturales que influyen en sus decisiones y expectativas al momento de viajar.
          .bg-color-5.p-4
            p.mb-0 Conocer el perfil del turista es fundamental para el sector turístico, ya que permite a los destinos, empresas y entidades públicas diseñar productos y servicios ajustados a las preferencias de los viajeros, mejorar la comunicación con los mercados meta y optimizar las estrategias de promoción y fidelización.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png', alt='')  
      p.mb-5(data-aos='fade-right') Un análisis completo del perfil del turista integra variables como:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-cus.bg-color-1
          .p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/t4/2.svg')
            h4.text-center Datos sociodemográficos
            p.text-center.mb-0 Edad, sexo, nivel educativo, ocupación, ingresos y estado civil.

        .col-sm-12.col-md-6.col-lg-3.mb-cus.bg-color-2
          .p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/t4/3.svg')
            h4.text-center Datos geográficos
            p.text-center.mb-0 País o región de origen, procedencia urbana o rural, y distancia recorrida.

        .col-sm-12.col-md-6.col-lg-3.mb-cus.bg-color-1
          .p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/t4/4.svg')
            h4.text-center Datos psicográficos
            p.text-center.mb-0 Personalidad, intereses, valores, estilo de vida y motivaciones.

        .col-sm-12.col-md-6.col-lg-3.mb-cus.bg-color-2
          .p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/t4/5.svg')
            h4.text-center Datos conductuales
            p.text-center.mb-0 Frecuencia de viaje, nivel de gasto, duración de la estancia, tipo de alojamiento preferido y medios de transporte utilizados.
      






      p.mb-5(data-aos='fade-right') En conjunto, estos elementos permiten a los profesionales del turismo identificar patrones de comportamiento, segmentar el mercado y ofrecer experiencias turísticas diferenciadas, sostenibles y de calidad.
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos y características del turista
      p.mb-5(data-aos='fade-right') El turista puede clasificarse según diversos criterios, cada uno de los cuales refleja sus motivaciones, comportamiento, poder adquisitivo y relación con el entorno del destino. A continuación, se presentan los tipos más representativos:
      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h4.mb-0.titulo-icono-2-text.px-0.py-2 a) Según la motivación del viaje
      
      SlyderF(columnas="col-md-6 col-lg-6 col-xl-4").mb-5(data-aos='fade-right')
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t4/6.svg' alt='')
          h4.text-center Turista de sol y playa
          p.mb-0.text-center Busca descanso, relajación y bienestar físico y emocional. Prefiere destinos cálidos, con playas, hoteles todos incluidos y actividades recreativas acuáticas. Su motivación principal es escapar de la rutina y disfrutar del ocio en entornos tranquilos.
      
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t4/7.svg' alt='')
          h4.text-center Turista cultural
          p.mb-0.text-center Se interesa por conocer la historia, el arte, las tradiciones y las manifestaciones culturales de un destino. Suele visitar museos, sitios patrimoniales, ferias, festivales y espectáculos. Valora la autenticidad, el aprendizaje y la preservación del patrimonio cultural.
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t4/8.svg' alt='')
          h4.text-center Turista de aventura
          p.mb-0.text-center Motivado por el desafío físico y la búsqueda de emociones intensas. Participa en actividades como senderismo, escalada, parapente, rafting o ciclismo de montaña. Busca experiencias que combinen naturaleza, riesgo controlado y superación personal.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t4/9.svg' alt='')
          h4.text-center Turista gastronómico
          p.mb-0.text-center Viaja para descubrir la identidad culinaria de los destinos. Participa en degustaciones, talleres de cocina, rutas gastronómicas y visitas a mercados o restaurantes tradicionales. Valora la autenticidad de los sabores y la relación entre gastronomía y cultura local.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t4/10.svg' alt='')
          h4.text-center Turista religioso o espiritual
          p.mb-0.text-center Orienta su viaje hacia la reflexión, la fe y la búsqueda de bienestar interior. Realiza peregrinaciones, retiros o visitas a lugares sagrados. Este tipo de turismo fortalece el vínculo entre espiritualidad, cultura y comunidad.
        
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t4/11.svg' alt='')
          h4.text-center Turista de salud y bienestar
          p.mb-0.text-center Viaja con el propósito de mejorar su condición física o mental. Busca destinos con spas, balnearios, centros de medicina alternativa o clínicas especializadas. Su interés principal es el equilibrio entre cuerpo y mente.

      
      
      
      
      
      
      
      
      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h4.mb-0.titulo-icono-2-text.px-0.py-2 b) Según el comportamiento de viaje 

      .row.justify-content-center.cursor-pointer.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/12.png", alt="")
            .crd_hover_txt--body
              h5.mb-3 Turista organizado
              p.mb-0 Refiere la seguridad y comodidad de los paquetes turísticos. Viaja mediante agencias o turoperadores, sigue itinerarios definidos y valora la planificación, la asistencia y la ausencia de riesgos.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .crd_hover_txt
            .crd_hover_txt--img
                img(src="@/assets/curso/temas/t4/13.png", alt="")
            .crd_hover_txt--body
              h5.mb-3 Turista independiente
              p.mb-0 Organiza sus viajes de forma autónoma, selecciona personalmente los servicios de transporte, alojamiento y actividades. Prefiere la libertad, la flexibilidad y el contacto directo con la cultura local.
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .crd_hover_txt
            .crd_hover_txt--img
                img(src="@/assets/curso/temas/t4/14.png", alt="")
            .crd_hover_txt--body
              h5.mb-3 Turista #[i bleisure]
              p.mb-0 Combina actividades laborales con experiencias de ocio. Aprovecha los viajes de negocios para extender su estancia y disfrutar del destino. Este perfil se ha incrementado con la globalización y la digitalización del trabajo.
        .col-sm-12.col-md-6.col-lg-3
          .crd_hover_txt
            .crd_hover_txt--img
                img(src="@/assets/curso/temas/t4/15.png", alt="")
            .crd_hover_txt--body
              h5.mb-3 Turista digital o tecnológico
              p.mb-0 Utiliza herramientas digitales para planificar, reservar y compartir su experiencia de viaje. Confía en aplicaciones móviles, redes sociales y plataformas de recomendaciones para tomar decisiones.












      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h4.mb-0.titulo-icono-2-text.px-0.py-2 c) Según la frecuencia del viaje 

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .card-hover-cus.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-4
                  img.card-svg(src='@/assets/curso/temas/t4/16.svg' alt='')
            .bg-color-6.p-2.mb-4.w-cus-1.m-auto
              h4.text-center.mb-0 Viajero habitual
            p.text-center.mb-0 Realiza desplazamientos frecuentes a lo largo del año, tanto por motivos laborales como recreativos. Es un visitante experimentado, que valora la eficiencia, la calidad del servicio y la comodidad.
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .card-hover-cus.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-4
                  img.card-svg(src='@/assets/curso/temas/t4/17.svg' alt='')
            .bg-color-6.p-2.mb-4.w-cus-1.m-auto
              h4.text-center.mb-0 Viajero ocasional
            p.text-center.mb-0 Realiza pocos viajes, generalmente uno o dos al año. Suele planificar con anticipación y destinar mayor presupuesto y tiempo a cada experiencia, buscando aprovecharla al máximo.
        
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .card-hover-cus.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-4
                  img.card-svg(src='@/assets/curso/temas/t4/18.svg' alt='')
            .bg-color-6.p-2.mb-4.w-cus-1.m-auto
              h4.text-center.mb-0 Viajero temporal o esporádico
            p.text-center.mb-0 Viaja de forma eventual, motivado por circunstancias especiales como eventos familiares, festividades o celebraciones. Su gasto y nivel de planificación son variables.

      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h4.mb-0.titulo-icono-2-text.px-0.py-2 d) Según el poder adquisitivo

      .row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/19.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                h4.mb-3.text-center Turista mochilero
                p.mb-0.text-center  Suele ser joven, con recursos económicos limitados. Viaja solo o en grupos pequeños, utilizando medios de transporte económicos y alojamientos sencillos. Busca autenticidad, interacción con la comunidad y experiencias fuera del turismo convencional.
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/20.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                h4.mb-3.text-center Turista familiar o de clase media
                p.mb-0.text-center Representa un segmento amplio del mercado. Realiza viajes planificados con anticipación, buscando un equilibrio entre calidad y precio. Prioriza la seguridad, la comodidad y las actividades que beneficien a toda la familia.

        .col-sm-12.col-md-6.col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/21.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                h4.mb-3.text-center Turista #[i premium] o de lujo
                p.mb-0.text-center Posee un alto poder adquisitivo y busca experiencias exclusivas, personalizadas y de alto nivel. Prefiere servicios de primera categoría, hoteles de lujo, gastronomía gourmet y actividades privadas. También se asocia con el turismo de negocios y el turismo de compras de alto valor.




      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h4.mb-0.titulo-icono-2-text.px-0.py-2 e) Según el impacto y la actitud frente al destino

      .tarjeta--container.row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-4.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t4/22.svg')          
          h3.mb-4.text-center.text-white Turista responsable o sostenible
          p.mb-0.text-center.text-white  Actúa de manera respetuosa con el medio ambiente, la cultura local y las comunidades receptoras. Promueve el uso racional de los recursos naturales y apoya el desarrollo local.
        
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-7.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t4/23.svg')          
          h3.mb-4.text-center.text-white Turista masivo
          p.mb-0.text-center.text-white  Pertenece a grandes grupos que viajan a destinos populares durante las temporadas altas. Suele buscar comodidad y precios asequibles, aunque su presencia puede generar presión sobre los recursos locales.
        
        .col-sm-12.col-md-6.col-lg-4.tarjeta.bg-color-8.text-white.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t4/24.svg')          
          h3.mb-4.text-center.text-white Turista alternativo
          p.mb-0.text-center.text-white  Elige destinos poco convencionales y experiencias personalizadas. Se interesa por el turismo rural, comunitario o ecológico, priorizando el contacto humano y el aprendizaje cultural.


      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h4.mb-0.titulo-icono-2-text.px-0.py-2 f) Importancia de identificar el perfil del turista
      p.mb-5(data-aos='fade-right') Comprender los distintos perfiles del turista permite:

      .row.justify-content-start.mb-5.align-items-center(data-aos='fade-right')
        .col-lg-11.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/t4/25.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/26.svg", alt="alt").img100
              .col
                p.mb-0 #[b Diseñar estrategias de #[i marketing] segmentadas] que respondan a las expectativas y necesidades específicas de cada grupo.

          .crd.crd--avatarHorizontal.py-4.bg-color-9
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/27.svg", alt="alt").img100
              .col
                p.mb-0 #[b Optimizar la oferta turística], adaptando productos, servicios y precios a los hábitos de consumo.
          
          .crd.crd--avatarHorizontal.py-4.bg-color-10
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/27.svg", alt="alt").img100
              .col
                p.mb-0 #[b Fomentar la sostenibilidad], promoviendo comportamientos responsables y respetuosos con el entorno.

          .crd.crd--avatarHorizontal.py-4.bg-color-9
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/27.svg", alt="alt").img100
              .col
                p.mb-0 #[b Fortalecer la competitividad de los destinos], mediante una gestión basada en información confiable sobre la demanda.

          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/28.svg", alt="alt").img100
              .col
                p.mb-0 #[b Mejorar la experiencia del visitante], ofreciendo servicios personalizados que incrementen la satisfacción y la fidelización.

      p.mb-5(data-aos='fade-right') El estudio del perfil del turista constituye una herramienta estratégica para la planificación, promoción y gestión del turismo moderno. Conocer quiénes viajan, qué buscan, cómo se comportan y qué expectativas tienen, permite a los destinos adaptarse a las tendencias del mercado, generar experiencias memorables y promover un desarrollo turístico equilibrado y sostenible. 
  
  
  </template>

<script>
export default {
  name: 'Tema4',
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
