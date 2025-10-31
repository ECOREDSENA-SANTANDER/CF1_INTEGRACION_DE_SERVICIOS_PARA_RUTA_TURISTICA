<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Métodos de investigación
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-sm-12.col-lg-7
          .bg-color-1.p-4.br-1.mb-3
            p.mb-0 Los métodos de investigación aplicados al sector turístico hacen referencia a los diversos medios mediante los cuales es posible recolectar información relevante sobre un destino, sus atractivos, la oferta turística, las actividades, festividades, historia, experiencias y técnicas artesanales, entre otros aspectos.
          p.mb-0 Asimismo, los métodos de investigación resultan fundamentales para identificar las motivaciones que llevan a una persona a elegir un destino específico. Estas pueden incluir el deseo de realizar determinadas actividades, vivir experiencias particulares o compartirlas con ciertas personas. También abarcan las preferencias frente a los tipos de atractivos que despiertan su interés, como destinos naturales, culturales, gastronómicos o aquellos que simplemente ofrecen placer y disfrute al visitarlos. Descubrir las motivaciones de los viajeros o turistas es esencial, ya que permite ofrecer destinos acordes con sus intereses y generar experiencias significativas que fortalezcan su vínculo con el lugar visitado.
      
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Instrumentos
      
      p.mb-5(data-aos='fade-right') Los instrumentos de investigación son herramientas que permiten recolectar datos y varían según el propósito del estudio. Un diseño adecuado de estos instrumentos es esencial para obtener conclusiones confiables y válidas.
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 La recolección de datos constituye una etapa fundamental del proceso investigativo. El instrumento seleccionado depende del tipo de información que se necesite (cualitativa o cuantitativa) y del método empleado para obtenerla. Entre los principales instrumentos utilizados en la investigación turística se encuentran:
          .bg-color-1.px-4.pt-4
            .row.justify-content-center.mb-0.align-items-end
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/3.svg', alt='')
              .col-sm-12.col-lg-8
                  ul.lista-ul--color.mb-4
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Entrevistas.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Observaciones.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Documentos de archivo y fuentes gubernamentales.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Cuestionarios en papel o en línea.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Grupos focales (presenciales o virtuales).
                    li.d-flex.mb-0
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Comunidades en línea.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.png', alt='')

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Principales instrumentos de recolección de información

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")(data-aos='fade-right')
        .row.justify-content-center.align-items-center.px-5(titulo="a) Cuestionarios")
          .col-sm-12.col-lg-7
              p.mb-0 Son herramientas empleadas para recolectar datos cuantitativos. Se utilizan con frecuencia en las investigaciones por su capacidad para obtener información estandarizada que facilite generalizaciones. Los cuestionarios ofrecen respuestas rápidas, pero deben diseñarse cuidadosamente para evitar influir en las respuestas. Su estructura y contenido deben reflejar los objetivos de la investigación. 
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/4.png', alt='')
        .row.justify-content-center.align-items-center.px-5(titulo="b) Entrevistas")
          .col-sm-12.col-lg-7
              p.mb-4 Constituyen instrumentos útiles para la recolección de datos cualitativos. Se destacan por su flexibilidad y la posibilidad de profundizar en las respuestas. Al planificar una entrevista, se deben tener en cuenta aspectos como la exhaustividad, tacto, precisión, exactitud y confidencialidad.
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-cus-1 1
                  | #[b Tipos de entrevistas:]
              ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-location-dot.icon-list
                  p.mb-0 #[b Individuales:] intercambio verbal cara a cara.
                li.d-flex
                  i.fas.fa-location-dot.icon-list
                  p.mb-0 #[b  Grupales:] discusión con varios participantes.
                li.d-flex
                  i.fas.fa-location-dot.icon-list
                  p.mb-0 #[b  Telefónicas].
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-cus-1 2
                  | #[b Según su estructura, pueden ser:]
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-location-dot.icon-list
                  p.mb-0 Estructuradas.
                li.d-flex
                  i.fas.fa-location-dot.icon-list
                  p.mb-0 Semiestructuradas.
                li.d-flex
                  i.fas.fa-location-dot.icon-list
                  p.mb-0 No estructuradas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/5.png', alt='')
        .row.justify-content-center.align-items-center.px-5(titulo="c) Observación")
          .col-sm-12.col-lg-7
              p.mb-0 Consiste en registrar el comportamiento o las actividades de las personas en su entorno natural. Los datos se obtienen mediante notas de campo, grabaciones de video o audio, y pueden analizarse de forma cualitativa o cuantitativa, dependiendo del nivel de codificación aplicado.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/6.png', alt='')
        .row.justify-content-center.align-items-center.px-5(titulo="d) Grupos focales (<i>Focus Groups</i>)")
          .col-sm-12.col-lg-7
              p.mb-0 Son una técnica cualitativa que reúne a un grupo de personas moderadas por un facilitador neutral. Su propósito es obtener información sobre un número limitado de preguntas predefinidas. Permiten explorar distintas perspectivas y estimular el intercambio de ideas, lo que enriquece el análisis y la comprensión de las opiniones de los participantes.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/7.png', alt='')
        .row.justify-content-center.align-items-center.px-5(titulo="e) Comunidades en línea")
          .col-sm-12.col-lg-7
              p.mb-0 El uso de plataformas digitales facilita la creación de comunidades donde se promueven interacciones sociales y se recopila información de manera dinámica. Estas comunidades permiten aplicar encuestas, realizar sondeos, organizar grupos de discusión, generar ideas colaborativamente y reconocer la participación de los usuarios mediante incentivos.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/8.png', alt='')



      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Técnicas aplicadas a la investigación de motivaciones de viaje
      p.mb-5(data-aos='fade-right') En el contexto del turismo, los instrumentos de recolección de información pueden emplearse para identificar las motivaciones de los viajeros o turistas. Algunas de las técnicas más utilizadas son:
      
      SlyderF(columnas="col-md-6 col-lg-6 col-xl-4").mb-5(data-aos='fade-right')
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t1/9.svg' alt='')
          h4.text-center Análisis de redes sociales
          p.mb-0.text-center Permite examinar las experiencias compartidas por los visitantes a través de plataformas digitales. Los comentarios, calificaciones y reseñas sobre los servicios, actividades y destinos proporcionan información valiosa para evaluar la calidad de la experiencia turística.
      
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t1/10.svg' alt='')
          h4.text-center Análisis de datos
          p.mb-0.text-center En el sector turístico, el análisis de datos facilita la predicción de comportamientos, expectativas y necesidades futuras de los consumidores, apoyando la toma de decisiones estratégicas.
          p.mb-0.text-center Entre sus ventajas se destacan la detección de tendencias, el conocimiento del cliente, la optimización de procesos y la fidelización de los visitantes.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t1/11.svg' alt='')
          h4.text-center Entrevista
          p.mb-0.text-center Consiste en formular preguntas relacionadas con los destinos y las motivaciones de viaje, aplicadas directamente a turistas, viajeros, prestadores de servicios o habitantes locales.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t1/12.svg' alt='')
          h4.text-center Encuesta
          p.mb-0.text-center Es un documento que reúne preguntas sobre los destinos, los gustos, los tipos de atractivos turísticos preferidos, las actividades que desean realizar y otros intereses como la gastronomía o las tradiciones culturales.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/temas/t1/13.svg' alt='')
          h4.text-center Observación directa
          p.mb-0.text-center Implica visitar los destinos para analizar actividades, gastronomía autóctona, atractivos turísticos y fechas importantes. Durante la visita, se pueden realizar entrevistas a turistas con el fin de conocer su percepción sobre los servicios, las experiencias vividas y el aprendizaje obtenido. Esta técnica ofrece información más profunda y real.



      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h4.mb-0.titulo-icono-2-text.px-0.py-2 Fuentes y tipos de datos utilizados


      .row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-lg-6.mb-cus
          .tarjeta-avatar-b.mb-0
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t1/14.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b 1. Fuentes:] encuestas, redes sociales, transacciones, sistemas de reservas, sitios web, sensores y sistemas de transporte.
        .col-sm-12.col-lg-6
          .tarjeta-avatar-b.mb-0
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t1/15.svg' alt='')          
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b 2. Tipos de datos:] cuantitativos (numéricos) y cualitativos (descriptivos), como información demográfica, preferencias de viaje, comportamiento en línea, opiniones y comentarios.


      .tarjeta.bg-fondo-2.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/16.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.text-cus-2 Procedimiento para analizar el comportamiento del turista. Aplicación en el destino Manzanillo. México. 
                p.mb-0.text-white Se invita a revisar el siguiente documento de apoyo que permite reforzar el anterior tema.
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Dialnet-ProcedimientoParaAnalizarElComportamientoDelTurist-8952014.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download


      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Fuentes de información
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/17.png', alt='')
        .col-sm-12.col-lg-7
          p.mb-3  En el ámbito del turismo, las fuentes de información constituyen todos los medios, documentos, plataformas, organizaciones o personas que proporcionan datos, conocimientos y referencias útiles para planificar, desarrollar, promocionar y evaluar actividades, servicios o investigaciones relacionadas con el sector.
          .bg-color-2.p-4.br-1.mb-0
            p.mb-0 La calidad de la información obtenida influye directamente en la toma de decisiones, la satisfacción del visitante y el desarrollo sostenible del destino, por lo que resulta fundamental conocer, seleccionar y utilizar adecuadamente aquellas fuentes que garanticen veracidad, actualidad y pertinencia, permitiendo generar análisis confiables y estrategias efectivas en la gestión turística.
      
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Clasificación de las fuentes de información
      p.mb-5(data-aos='fade-right') Las fuentes se agrupan en tres categorías principales según el origen y la forma en que se obtiene la información:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-1")
            .row(titulo="Fuentes primarias").justify-content-center
              .col-sm-12.col-lg-12
                  p.mb-5 Son aquellas que proporcionan información directa y original, obtenida de primera  mano mediante la interacción o el contacto con los actores del turismo. Se caracterizan por reflejar datos reales y actuales sobre la experiencia del visitante, el comportamiento del mercado o las condiciones del destino.
                  p.mb-3.fw-bold Ejemplos de fuentes primarias:
                  ul.lista-ul--color.mb-5
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Encuestas:] permiten conocer las percepciones, intereses y niveles de satisfacción de los turistas.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Entrevistas:] recogen opiniones y experiencias de viajeros, prestadores de servicios o habitantes locales.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Observación directa:] facilita el registro de comportamientos, flujos turísticos y prácticas culturales.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Grupos focales:] reúnen a personas para analizar sus expectativas y motivaciones de viaje.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Diarios o bitácoras de viaje:] describen vivencias, emociones y aprendizajes de los visitantes.

                  .row.justify-content-center.mb-0.bg-color-3.p-4.align-items-center
                    .col-sm-12.col-lg-2.d-none.d-lg-block
                      img.w-75.m-auto(src='@/assets/curso/temas/t1/19.svg', alt='')  
                    .col-sm-12.col-lg-10
                        p.mb-0 #[b Utilidad en el turismo:] las fuentes primarias son esenciales para identificar tendencias de mercado, diseñar productos turísticos más adecuados a las preferencias del visitante y evaluar la calidad del servicio prestado.
            .row(titulo="Fuentes secundarias").justify-content-center
              .col-sm-12.col-lg-12
                  p.mb-5 Corresponden a la información ya existente, elaborada y publicada por otras personas o instituciones, que sirve como base de referencia para investigaciones o diagnósticos turísticos. Son útiles para contextualizar un estudio, validar hallazgos o complementar datos obtenidos por medios primarios.
                  p.mb-3.fw-bold Ejemplos de fuentes secundarias:
                  ul.lista-ul--color.mb-5
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Publicaciones académicas y científicas:] artículos, tesis, libros o informes sobre turismo, sostenibilidad o desarrollo local.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Estadísticas oficiales:] datos de entidades como el DANE, el Ministerio de Comercio, Industria y Turismo, o la Organización Mundial del Turismo (OMT).
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Informes sectoriales:] estudios de mercado elaborados por cámaras de comercio, gremios o agencias gubernamentales.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Portales web especializados:] plataformas que publican información actualizada sobre destinos, tendencias y comportamiento del viajero.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 #[b Material promocional:] folletos, catálogos o sitios web de agencias y operadores turísticos.
                  .row.justify-content-center.mb-0.bg-color-3.p-4.align-items-center
                    .col-sm-12.col-lg-2.d-none.d-lg-block
                      img.w-75.m-auto(src='@/assets/curso/temas/t1/19.svg', alt='')  
                    .col-sm-12.col-lg-10
                        p.mb-0 #[b Utilidad en el turismo:] las fuentes secundarias permiten ahorrar tiempo y recursos, ya que ofrecen información recopilada y verificada. Facilitan el análisis comparativo entre destinos, la identificación de oportunidades de mercado y la formulación de estrategias de promoción.
            .row(titulo="Fuentes terciarias").justify-content-center
              .col-sm-12.col-lg-12
                  ul.lista-ul--color.mb-5
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Directorios turísticos y bases de datos.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Catálogos de bibliotecas y repositorios institucionales.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Guías de consulta y compilaciones bibliográficas.
                    li.d-flex
                      i.fas.fa-location-dot.icon-list
                      p.mb-0 Motores de búsqueda académicos o turísticos.
                  .row.justify-content-center.mb-0.bg-color-3.p-4.align-items-center
                    .col-sm-12.col-lg-2.d-none.d-lg-block
                      img.w-75.m-auto(src='@/assets/curso/temas/t1/19.svg', alt='')  
                    .col-sm-12.col-lg-10
                        p.mb-0 #[b Utilidad en el turismo:] estas fuentes ayudan a encontrar información confiable y actualizada de forma eficiente. Son ampliamente utilizadas en investigaciones, planificación de viajes, desarrollo de proyectos turísticos y procesos de capacitación.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/18.png', alt='')









      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Importancia de las fuentes de información en el turismo

      p.mb-5(data-aos='fade-right') El uso adecuado de las fuentes de información permite:
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-5
          .bg-color-2.p-4.mb-cus
            ul.lista-ul--color.mb-0
              li.d-flex.mb-1
                i.fas.fa-location-dot.icon-color
                p.mb-0 Conocer el perfil, comportamiento y expectativas de los turistas.
              li.d-flex.mb-1
                i.fas.fa-location-dot.icon-color
                p.mb-0  Evaluar la eficacia de estrategias de promoción y #[i marketing] turístico.
              li.d-flex
                i.fas.fa-location-dot.icon-color
                p.mb-0  Analizar la competitividad y sostenibilidad de los destinos.
              li.d-flex.mb-1
                i.fas.fa-location-dot.icon-color
                p.mb-0  Facilitar la toma de decisiones basada en evidencia.
              li.d-flex.mb-1
                i.fas.fa-location-dot.icon-color
                p.mb-0  Promover la innovación y mejora continua en la oferta turística.
              li.d-flex.mb-0
                i.fas.fa-location-dot.icon-color
                p.mb-0  Fortalecer la planificación y gestión integral de los destinos.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/20.svg', alt='')
        .col-sm-12.col-lg-4
           img.d-none.d-lg-block.w-25.mb-4(src='@/assets/curso/temas/t1/21.svg', alt='')
           p.mb-0 Las fuentes de información son pilares del conocimiento turístico, ya que sustentan los procesos de diagnóstico, planificación, promoción, evaluación e innovación en el sector. Su uso ético y responsable garantiza la generación de información veraz y útil para la construcción de destinos más sostenibles, competitivos y atractivos.



















  </template>

<script>
export default {
  name: 'Tema1',
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
