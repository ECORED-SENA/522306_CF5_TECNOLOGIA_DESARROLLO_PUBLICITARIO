(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"50ae696f","chunk-0206bfa0":"a42ad23d","chunk-04b93936":"5d7ea5fb","chunk-0cfca828":"0bfb03ab","chunk-13303073":"36d849e2","chunk-13a6037e":"a33204fe","chunk-1479a341":"5721b349","chunk-1fb07a61":"9bfa650b","chunk-2c06842c":"607ee19f","chunk-2d208d90":"9aa1c247","chunk-2d21d0e2":"c874b3ba","chunk-2d22c123":"29a14c4f","chunk-2e80bb9a":"a3623c55","chunk-3c94cd2f":"7b3d14b0","chunk-4cdd78c0":"e46a1745","chunk-515a8379":"29e43faf","chunk-522cec8c":"7398a3f2","chunk-53ccb27e":"fb2fd315","chunk-59974754":"968135f5","chunk-7432e4d4":"9254f441","chunk-766a929b":"cbfc421a","chunk-839300a6":"28a6c9e3","chunk-c796899c":"45eab547",comple:"f5620994",creditos:"ddd1bd44",glosario:"71a40294",referencias:"46115770",tema1:"da1149a8",tema2:"d9c4be25",tema3:"2a811572",tema4:"5df8627e",tema5:"192102a2"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-3c94cd2f":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3c94cd2f":"1dbe8d4a","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"89515b51","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"554896e8","chunk-7432e4d4":"99a35118","chunk-766a929b":"4fa115f0","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"36ceebfb",creditos:"14c251ae",glosario:"9e3ac68c",referencias:"bc07171e",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===t))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"0aae":function(e,a,n){e.exports=n.p+"img/CF5-banner-bg.5cede3c4.svg"},"3a4b":function(e,a,n){e.exports=n.p+"img/CF5-banner-img.415ff897.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=r,s=(n("cf25"),n("2877")),l=Object(s["a"])(c,i,t,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),m=n("ae58"),f=n("7e58");o["a"].use(d["a"]);var p=new d["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=p,h=n("1c2c"),g=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Estrategia creativa",descripcionCurso:"En el ámbito de la publicidad y la comunicación, la creatividad se hace necesaria e indispensable, ya que los anunciantes están siempre en la búsqueda de agencias o publicistas que realicen para ellos anuncios que marquen la diferencia y den un toque de originalidad y diferenciación a sus productos frente a la competencia. Sin embargo, en la realización publicitaria la creatividad tiene cabida en todos los frentes: medios, estrategias, redacción de textos, creación de imágenes, merchandising y promoción de ventas.",imagenBannerPrincipal:n("3a4b"),fondoBannerPrincipal:n("0aae")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Creatividad",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Definiciones de creatividad",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"El proceso creativo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Técnicas creativas",hash:"t_3_1"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"La estrategia creativa",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Desarrollo de la estrategia",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Objetivos",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Target comunicacional",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"El concepto creativo",hash:"t_5_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Castelló, A. Pino, C. (2019). De la Publicidad a la Comunicación Persuasiva. Esic Editorial."},{referencia:"Consumer truth. (2020). Técnicas de Insights.",link:"https://cutt.ly/coqGVlR"},{referencia:"Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A."},{referencia:"Fundación Neuronilla para la Creatividad y la Innovación. (2020). Técnicas de Creatividad para la Innovación.",link:"https://cutt.ly/CpsdBrp"},{referencia:"Gerard, J. P. (2015). Imagina lo Imposible: Manual Práctico & Caja de Herramientas para la Innovación. 2015. Ril Editores, Editorial Universidad Católica de la Santísima Concepción."},{referencia:"Publicidad y Promoción. (2010). El Proceso Creativo.",link:"https://cutt.ly/woqFXKN"},{referencia:"Rajadell, M. (2019). Creatividad. Emprendimiento y Mejora Continua. Editorial Reverté."},{referencia:"Reimers Design. (s.f.). Pequeño Diccionario del Diseñador. Consultado el 27 de mayo de 2020.",link:"https://cutt.ly/VyDzeWh"},{referencia:"Roig, F. A. (2011). La estrategia creativa: Relaciones entre concepto e idea. Ediciones Infinito."},{referencia:"Vila, F. (2013). Comunicación Estratégica. Editorial UOC.",link:"https://cutt.ly/VyDzeWh"},{referencia:"Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC."}],glosario:[{termino:"Aviso",significado:"En términos generales, un aviso, refiere a aquel anuncio o noticia que una persona tiene para darle a otra o bien, aquel que está destinado a un público mucho más amplio y que puede referir a cualquier situación plausible de comunicarse.<br><br>Casi siempre, si se trata de este último caso, los medios de comunicación masiva serán quienes porten el aviso en cuestión."},{termino:"Branding",significado:"Hace referencia al proceso de creación de valor de marca (brand equity) mediante la administración estratégica del conjunto total de activos y pasivos vinculados en forma directa o indirecta al nombre o símbolo (isotipo) que identifican a la marca influyendo en el valor suministrado; tanto al cliente como a la empresa oferente; por un producto o servicio, incrementando o reduciendo según el caso."},{termino:"Briefing",significado:"Conjunto de datos sobre la empresa, sus objetivos, su estrategia... que sirven de base al consultor o diseñador para plantear la comunicación corporativa."},{termino:"Canal",significado:"En teoría de la comunicación, camino técnico o fisiológico que recorre un mensaje desde el emisor hasta el receptor."},{termino:"Comunicación",significado:"Término que deriva del latín commune y del sufijo ie-, similar a fie-, que significa hacer; es decir, realizar la transmisión de información o de conocimiento entre una persona y otra del modo más exacto posible."},{termino:"Diseño gráfico",significado:"Es una actividad intelectual, técnica y creativa involucrada no solamente con la producción de imágenes sino con el análisis, la organización y los métodos de presentación de soluciones visuales a los problemas de comunicación."},{termino:"Información",significado:"Se entiende comúnmente por información la noticia; es decir, el mensaje ligado al contenido de una cosa significada."},{termino:"Mensaje",significado:"Serie organizada de signos según un código, con la intención de comunicar."},{termino:"Mnemotécnico",significado:"Es un sistema sencillo de código para recordar aspectos fácilmente (señales, números, letras, datos, nombres, entre otros)."},{termino:"Teaser",significado:"Es conocido como una técnica que se utiliza al momento de lanzar, ya sea un producto o un servicio. Su principal función es generar intriga en el público."}],complementario:[{texto:"La Creatividad",tipo:"Video",link:"https://www.youtube.com/watch?v=ivz15d1vPI0"},{texto:"La estrategia creativa",tipo:"Video",link:"https://www.youtube.com/watch?v=gyWNLNeB1Jc"},{texto:"Propuesta de valor.",tipo:"Infografía",descarga:"/downloads/propuestadevalor_infografia.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Manuel Augusto Arias López",cargo:"Instructor – Experto temático",centro:"Centro de Comercio y Servicios Regional Quindío"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Diseñador Instruccional",centro:"Centro de Diseño y Metrología Regional Distrito Capital"},{nombre:"Vilma Lucía Perilla Méndez",cargo:"Evaluadora Instruccional",centro:"Centro para la Industria y la Comunicación Gráfica Regional Distrito Capital"},{nombre:"Martha Isabel Martínez Vargas",cargo:"Productora audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:["Jesús Antonio Vecino"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Walter Roa Serrano",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Yuli Marcela Gómez Tarazona",cargo:["Validación de diseño y contenido"],centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}]}});o["a"].prototype.$config=g;var v=n("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,o["a"].directive("child",{bind:function(e,a){e.appendChild(a.value)}}),new o["a"]({router:b,store:h["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.1","core-js":"^3.6.5","ecored-base-pkg":"2.3.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},cf25:function(e,a,n){"use strict";n("fea6")},fea6:function(e,a,n){}});
//# sourceMappingURL=app.adbe3d55.js.map