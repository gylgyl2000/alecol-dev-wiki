"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[118],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>x});var s=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,s,o=function(e,n){if(null==e)return{};var r,s,o={},t=Object.keys(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=s.createContext({}),a=function(e){var n=s.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=a(e.components);return s.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=a(r),x=o,m=u["".concat(c,".").concat(x)]||u[x]||d[x]||t;return r?s.createElement(m,i(i({ref:n},p),{},{components:r})):s.createElement(m,i({ref:n},p))}));function x(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var a=2;a<t;a++)i[a]=r[a];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7233:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(7462),o=(r(7294),r(3905));const t={},i="R\xe9ponses possibles",l={unversionedId:"Backend_Serveur/Sources/MPD_exercices/ReponsesExos",id:"Backend_Serveur/Sources/MPD_exercices/ReponsesExos",title:"R\xe9ponses possibles",description:"Service",source:"@site/docs/2-Backend_Serveur/Sources/3-MPD_exercices/9-ReponsesExos.mdx",sourceDirName:"2-Backend_Serveur/Sources/3-MPD_exercices",slug:"/Backend_Serveur/Sources/MPD_exercices/ReponsesExos",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_exercices/ReponsesExos",draft:!1,editUrl:"https://github.com/gylgyl2000/alecol-dev-wiki/docs/2-Backend_Serveur/Sources/3-MPD_exercices/9-ReponsesExos.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"BackendSidebar",previous:{title:"R\xe9ponse image",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_exercices/RepImg"},next:{title:"R\xe9ponses memory",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_exercices/ReponsesMemory"}},c={},a=[{value:"Service",id:"service",level:2},{value:"Mod\xe8le",id:"mod\xe8le",level:2},{value:"Contr\xf4leur",id:"contr\xf4leur",level:2},{value:"Route",id:"route",level:2}],p={toc:a};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"r\xe9ponses-possibles"},"R\xe9ponses possibles"),(0,o.kt)("h2",{id:"service"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/services/alecol.reponse_exos.service.js"',title:'"./src/services/alecol.reponse_exos.service.js"'},'import http from "../http-common";\n\nclass ReponseExosDataService {\n    getAll() {\n        console.log("GetAll");\n        return http.get("/reponsesExos");\n    }\n\n    get(id) {\n        console.log("Get");\n        return http.get(`/reponsesExos/${id}`);\n    }\n\n    getCountReponses(exoid) {\n        console.log("getCountReponses");\n        return http.get(`/reponsesExos?fk_exo_id=${exoid}&count=${true}`);\n    }\n\n    findByExoId(fk_exo_id) {\n        console.log("FindByNom");\n        return http.get(`/reponsesExos?fk_exo_id=${fk_exo_id}`);\n    }\n}\n\nexport default new ReponseExosDataService();\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/services/index.js"',title:'"./src/services/index.js"'},'const ReponseExosService = require("./alecol.reponse_exos.service");\n...\nconst Services = {};\n...\nServices.ReponseExosService = ReponseExosService.default;\n...\nexport default Services;\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"mod\xe8le"},"Mod\xe8le"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/reponse_exos.model.js"',title:'"./src/models/reponse_exos.model.js"'},'module.exports = (sequelize, Sequelize) => {\n    const Reponses_exos = sequelize.define("reponses_exos", {\n        fk_exo_id: {\n            type: Sequelize.STRING,\n            primaryKey: true,\n            references: {\n                model: "exercices",\n                key: "pk_exo_id",\n            },\n        },\n        Type: {\n            type: Sequelize.STRING,\n            primaryKey: true,\n        },\n        fk_rep_id: {\n            type: Sequelize.STRING,\n            primaryKey: true,\n        },\n        ValRep: {\n            type: Sequelize.INTEGER,\n        },\n        type_exercice: {\n            type: Sequelize.STRING,\n            primaryKey: true,\n            references: {\n                model: "type_exo",\n                key: "id",\n            },\n        },\n    });\n\n    return Reponses_exos;\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/index.js"',title:'"./src/models/index.js"'},'...\ndb.reponse_exos = require("./reponse_exos.model")(sequelize, Sequelize);\n...\n// reponses_exos => exercices\ndb.exercices.hasMany(db.reponse_exos, { foreignKey: "fk_exo_id" });\ndb.reponse_exos.belongsTo(db.exercices, { foreignKey: "fk_exo_id" });\n\n// reponses_exos => type_exo\ndb.type_exercice.hasMany(db.reponse_exos, { foreignKey: "type_exercice" });\ndb.reponse_exos.belongsTo(db.type_exercice, { foreignKey: "type_exercice" });\n...\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"contr\xf4leur"},"Contr\xf4leur"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/controllers/alecol.reponse_exos.controllers.js"',title:'"./src/controllers/alecol.reponse_exos.controllers.js"'},'const db = require("../models");\nconst Reponse = db.reponse_exos;\nconst RepText = db.Rep_txt;\nconst Op = db.Sequelize.Op;\n\n// R\xe9cup\xe9rer toutes les r\xe9ponses possibles de la base de donn\xe9es\nexports.findAll = (req, res) => {\n  const exoId = req.query.fk_exo_id;\n\n  var condition = exoId ? { fk_exo_id: { [Op.like]: `${exoId}` } } : null;\n\n  var cond1 = {\n    // include: [{ model: RepText, required: true, constraints: false }],\n    where: condition,\n  };\n\n  var cond2 = {\n    //include: [{ model: RepText, required: true, constraints: false }],\n    where: {\n      [Op.and]: [condition, { ValRep: { [Op.eq]: true } }],\n    },\n  };\n\n  var cond = req.query.count ? cond2 : cond1;\n\n  Reponse.findAll(cond)\n    .then((data) => {\n      res.send(data);\n    })\n    .catch((err) => {\n      res.status(500).send({\n        message:\n          err.message || "Une erreur s\'est produite lors de la r\xe9cup\xe9ration des r\xe9ponses possibles",\n      });\n    });\n};\n\nexports.findCountOfCorrectReponses = (req, res) => {\n    const pk_exo_id = req.query.exoid;\n\n    var condition = pk_exo_id\n        ? { fk_exo_id: { [Op.like]: `${pk_exo_id}` } }\n        : null;\n\n    condition = condition && { ValRep: { [Op.like]: true } };\n\n    Reponse.findAll({ where: condition })\n        .then((data) => {\n            res.send(data);\n        })\n        .catch((error) => {\n            res.status(500).send({\n                message: "Erreur lors de la r\xe9cup\xe9ration de la r\xe9ponse possible avec l\'id=" + pk_exo_id,\n            });\n        });\n};\n// Trouver une seule r\xe9ponse possible avec un identifiant\nexports.findOne = (req, res) => {\n    const id = req.params.id;\n\n    Reponse.findByPk(id)\n        .then((data) => {\n            res.send(data);\n        })\n        .catch((err) => {\n            res.status(500).send({\n                message: "Erreur lors de la r\xe9cup\xe9ration de la r\xe9ponse possible avec l\'id=" + id,\n            });\n        });\n};\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/routes/alecol.reponse_exos.routes.js"',title:'"./src/routes/alecol.reponse_exos.routes.js"'},'module.exports = (app) => {\n    const reponse_exos = require("../controllers/alecol.reponse_exos.controllers");\n\n    var router = require("express").Router();\n\n    // R\xe9cup\xe9rer toutes les r\xe9ponses possibles\n    router.get("/", reponse_exos.findAll);\n\n    // R\xe9cup\xe9rer une seule r\xe9ponse possible avec id\n    router.get("/:id", reponse_exos.findOne);\n\n    router.get("/:exoid", reponse_exos.findCountOfCorrectReponses);\n\n    app.use("/api/reponsesExos", router);\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},'...\nrequire("./src/routes/alecol.reponse_exos.routes")(app);\n...\n')))}d.isMDXComponent=!0}}]);