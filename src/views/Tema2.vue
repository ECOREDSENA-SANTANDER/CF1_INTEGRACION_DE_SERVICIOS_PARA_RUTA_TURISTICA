<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Base de datos
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Un gestor de base de datos es un programa diseñado para introducir, almacenar, ordenar y manipular datos de manera estructurada. Su objetivo principal es organizar la información de forma significativa, de modo que sea posible obtener resultados útiles, como totales, tendencias o relaciones entre distintos elementos.
        
      p.mb-5(data-aos='fade-right') En términos generales, un gestor de base de datos debe permitir las siguientes funciones básicas:
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-cus
          p.mb-3 La información se organiza habitualmente en tablas, donde cada fila representa un registro y cada columna corresponde a un campo o categoría de datos. Por ejemplo, puede compararse con un directorio telefónico, en el que se registran nombres, números y direcciones de contacto. Este tipo de estructura facilita el acceso y la gestión eficiente de la información contenida en la base de datos.
          p.mb-0 En una base de datos, un dato aparece en una fila de la tabla; a esto se le denomina registro. El registro agrupa la información asociada a un elemento de un conjunto y está compuesto por diferentes campos. Cada una de las partes en que se desglosa la información recibe el nombre de campo, y el conjunto formado por todos los registros conforma una tabla, entendida como un conjunto de registros homogéneos organizados bajo la misma estructura.
        .col-sm-12.col-lg-4.mb-cus
          .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 1.] Directorio telefónico
          figure.mb-0
              img.mb-1(src='@/assets/curso/temas/t2/2.png', alt='Directorio telefónico abierto que muestra nombres y números de contacto impresos en sus páginas.')
              figcaption.mb-0 #[b Fuente:] Freepik-  https://www.freepik.es/foto-gratis/directorio-telefonico-mesa_33626694.htm
        .col-sm-12.col-lg-4.bg-color-1
          .p-4
            p.mb-0.m-cus-2 En un directorio telefónico, por ejemplo, se identifica un campo principal que da sentido a la tabla: el campo denominado “Nombre”. Este campo es clave, ya que permite reconocer que los datos de los demás campos en esa misma fila como número telefónico, dirección o correo electrónico pertenecen a la misma persona. Por este motivo, se denominan campos fundamentales aquellos que definen el registro, y campos secundarios los que complementan o amplían la información del mismo.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Esquema componentes base de datos
          figure.mb-0
              img.mb-1(src='@/assets/curso/temas/t2/3.svg', alt='Estructura jerárquica de una base de datos con tablas, registros, campos y tipos de dato.')
              figcaption.mb-0 #[b Fuente:] Alarza B. (2009 pag.6). Bases de datos: sistema de gestión de rutas turísticas.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png', alt='')
        .col-sm-12.col-lg-7
          p.mb-4 Para el diseño de una base de datos tener en cuenta lo siguiente:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-location-dot.icon-list
              p.mb-0 Conocer exactamente para que se quiere usar la base de datos, qué datos son los que interesan de los que existen en la realidad y qué información se necesitará extraer.
            li.d-flex
              i.fas.fa-location-dot.icon-list
              p.mb-0 Una vez este clara la información que se necesita, se define la tabla que compondrá la base de datos. 
            li.d-flex
              i.fas.fa-location-dot.icon-list
              p.mb-0 Dentro de cada tabla se organizan los campos necesarios. 
            li.d-flex
              i.fas.fa-location-dot.icon-list
              p.mb-0 Conviene definir correctamente la base de datos, ya que un mal diseño hará que los resultados no sean los esperados. 

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de bases de datos
      p.mb-5(data-aos='fade-right') Existen dos tipos principales de bases de datos:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .tarjeta--container.row.mb-0
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/temas/t2/5.svg', alt='Texto que describa la imagen')          
              h3.text-center Base de datos plana
              p.mb-0 Contiene una única tabla en la que se almacena toda la información. Su estructura es sencilla y no establece relaciones entre los datos.
            .col-md.tarjeta.bg-color-4.p-5
              .row.justify-content-center.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/temas/t2/6.svg', alt='Texto que describa la imagen')          
              h3.text-center.text-white Base de datos relacional
              p.mb-0.text-white Está conformada por varias tablas que se relacionan entre sí mediante uno o más campos comunes. Este tipo de base de datos permite gestionar la información de manera más organizada y eficiente.




      

      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Técnicas de manipulación de datos
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 La manipulación de datos es el proceso mediante el cual se organizan y transforman los datos para hacerlos más comprensibles y útiles. Cualquier tipo de información puede ordenarse de diversas maneras, por ejemplo, alfabéticamente, lo que facilita la búsqueda y el análisis.

          .bg-color-1.p-4
            p.mb-0 Cuando los datos no se encuentran organizados, resulta complejo acceder a información específica. Por ejemplo, en una empresa con numerosos empleados, la falta de orden dificultaría ubicar los registros individuales. En cambio, al organizar los nombres alfabéticamente, se facilita el acceso a la información de cada persona.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')



      .bg-full-width.bg-fondo-3
        .p-full-width 
            .row.justify-content-center.mb-0.align-items-center.mb-cus(data-aos='fade-right')
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/1.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-0 En el ámbito contable, la manipulación de datos permite ordenar la información para determinar costos de producción, proyecciones fiscales, tendencias de precios y otros aspectos relevantes. De igual manera, en el sector turístico, los datos recopilados durante la investigación de un destino pueden clasificarse en una base de datos que contenga información sobre:
            .row.justify-content-center.mb-5(data-aos='fade-right')
              .col-sm-12.col-lg-5
                ol.lista-ol--cuadro.lista-ol--separador
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 1
                    | Zona o destino.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 2
                    |  Provincia o municipio.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 3
                    | Tipos de acceso y condiciones de las vías.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 4
                    | Tiempo de recorrido entre puntos de origen y destino.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 5
                    | Atractivos turísticos.     
              .col-sm-12.col-lg-5
                ol.lista-ol--cuadro.lista-ol--separador
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 6
                    | Fechas y eventos importantes
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 7
                    | Oferta cultural y gastronómica.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 8
                    | Prestadores de servicios turísticos (alojamientos, transporte, restaurantes).
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span.text-cus-1 9
                    | Condiciones meteorológicas, entre otros.
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Principales técnicas de manipulación de datos

      .row.mb-0.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/8.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0.text-center #[b Recopilar datos de diversas fuentes y almacenarlos en una base de datos:] puede emplearse software como Microsoft Excel, Google Analytics o Data Studio.
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/9.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0.text-center #[b Organizar y depurar los datos:] estructurar la información, eliminar duplicados y corregir errores para garantizar su precisión y coherencia.

        .col-sm-12.col-md-6.col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/10.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0.text-center #[b Analizar los datos para extraer información relevante:] consiste en examinar los resultados para identificar patrones, tendencias o comportamientos. Por ejemplo, los hábitos de compra de los consumidores, las proyecciones de beneficios, la interacción digital con la marca o las motivaciones de viaje y los tipos de destinos más visitados.
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
