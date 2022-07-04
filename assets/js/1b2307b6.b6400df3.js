"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[4849],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>u});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=a.createContext({}),l=function(e){var r=a.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return a.createElement(o.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=t,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,s(s({ref:r},p),{},{components:n})):a.createElement(g,s({ref:r},p))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},684:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),t=(n(7294),n(3905));const i={},s="Param\xe8tres r\xe9ponse image",c={unversionedId:"Backend_Serveur/Sources/MPD_exercices/ParamRepImage",id:"Backend_Serveur/Sources/MPD_exercices/ParamRepImage",title:"Param\xe8tres r\xe9ponse image",description:"Service",source:"@site/docs/2-Backend_Serveur/Sources/3-MPD_exercices/16-ParamRepImage.mdx",sourceDirName:"2-Backend_Serveur/Sources/3-MPD_exercices",slug:"/Backend_Serveur/Sources/MPD_exercices/ParamRepImage",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_exercices/ParamRepImage",draft:!1,editUrl:"https://github.com/gylgyl2000/alecol-dev-wiki/docs/2-Backend_Serveur/Sources/3-MPD_exercices/16-ParamRepImage.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"BackendSidebar",previous:{title:"Type exercice",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_exercices/TypeExo"},next:{title:"Le\xe7on",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_exercices/Lesson"}},o={},l=[{value:"Service",id:"service",level:2},{value:"Mod\xe8le",id:"mod\xe8le",level:2},{value:"Contr\xf4leur",id:"contr\xf4leur",level:2},{value:"Route",id:"route",level:2}],p={toc:l};function m(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"param\xe8tres-r\xe9ponse-image"},"Param\xe8tres r\xe9ponse image"),(0,t.kt)("h2",{id:"service"},"Service"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/services/alecol.param_rep_image.service.js"',title:'"./src/services/alecol.param_rep_image.service.js"'},'import http from "../http-common";\n\nclass ParamRepImageDataService {\n    getAll() {\n        return http.get("/ParamRepImage");\n    }\n\n    get(id) {\n        return http.get(`/ParamRepImage/${id}`);\n    }\n\n    findByExoId(fk_exercice_id) {\n        return http.get(`/ParamRepImage?fk_exercice_id=${fk_exercice_id}`);\n    }\n}\n\nexport default new ParamRepImageDataService();\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/services/index.js"',title:'"./src/services/index.js"'},'const ParamRepImageService = require("./alecol.param_rep_image.service");\n...\nconst Services = {};\n...\nServices.ParamRepImageService = ParamRepImageService.default;\n...\nexport default Services;\n')),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"mod\xe8le"},"Mod\xe8le"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/param_rep_image.model.js"',title:'"./src/models/param_rep_image.model.js"'},'module.exports = (sequelize, Sequelize) => {\n        const ParamRep_Image = sequelize.define("param_rep_image", {\n        FK_exercice_id: {\n            type: Sequelize.STRING,\n            primaryKey: true,\n            references: {\n                model: "exercices",\n                key: "pk_exo_id",\n            },\n        },\n        FK_reponse_id: {\n            type: Sequelize.STRING,\n            primaryKey: true,\n            references: {\n                model: "type_exo",\n                key: "id",\n            },\n        },\n        FK_image_id: {\n            type: Sequelize.INTEGER,\n            references: {\n                model: "images",\n                key: "id",\n            },\n        },\n        nombre: {\n            type: Sequelize.INTEGER,\n        },\n        taille: {\n            type: Sequelize.INTEGER,\n        },\n    });\n    \n    return ParamRep_Image;\n};\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/index.js"',title:'"./src/models/index.js"'},'...\ndb.param_rep_image = require("./param_rep_image.model")(sequelize, Sequelize);\n...\n// param_rep_image => exercices\ndb.exercices.hasMany(db.param_rep_image, { foreignKey: "FK_exercice_id" });\ndb.param_rep_image.belongsTo(db.exercices, { foreignKey: "FK_exercice_id" });\n\n// param_rep_image => images\ndb.images.hasMany(db.param_rep_image, { foreignKey: "FK_image_id" });\ndb.param_rep_image.belongsTo(db.images, { foreignKey: "FK_image_id" });\n\n// param_rep_image => type_exo\ndb.type_exercice.hasMany(db.param_rep_image, { foreignKey: "FK_reponse_id" });\ndb.param_rep_image.belongsTo(db.type_exercice, { foreignKey: "FK_reponse_id" });\n...\n')),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"contr\xf4leur"},"Contr\xf4leur"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/controllers/alecol.param_rep_image.controllers.js"',title:'"./src/controllers/alecol.param_rep_image.controllers.js"'},'const db = require("../models");\nconst ParamRepImage = db.param_rep_image;\nconst Op = db.Sequelize.Op;\n\n// R\xe9cup\xe9rer tous les param\xe8tres r\xe9ponse image de la base de donn\xe9es\nexports.findAll = (req, res) => {\n    const exerciceId = req.query.fk_exercice_id;\n\n    var condition = exerciceId ? { FK_exercice_id: { [Op.like]: `${exerciceId}` } } : null;\n\n    ParamRepImage.findAll({ where: condition })\n        .then((data) => {\n            res.send(data);\n        })\n        .catch((err) => {\n            res.status(500).send({\n                message:\n                err.message || "Une erreur s\'est produite lors de la r\xe9cup\xe9ration des param\xe8tres r\xe9ponse image.",\n            });\n        });\n};\n\n// Trouver un seul param\xe8tre r\xe9ponse image avec un identifiant\nexports.findOne = (req, res) => {\n    const id = req.params.id;\n\n    ParamRepImage.findByPk(id)\n        .then((data) => {\n            res.send(data);\n        })\n        .catch((err) => {\n            res.status(500).send({\n                message: "Erreur lors de la r\xe9cup\xe9ration du param\xe8tre r\xe9ponse image avec l\'id=" + id,\n            });\n        });\n};\n')),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"route"},"Route"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/routes/alecol.param_rep_image.routes.js"',title:'"./src/routes/alecol.param_rep_image.routes.js"'},'module.exports = (app) => {\n    const param_rep_image = require("../controllers/alecol.param_rep_image.controllers");\n\n    var router = require("express").Router();\n\n    // R\xe9cup\xe9rer tous les param\xe8tres r\xe9ponse image\n    router.get("/", param_rep_image.findAll);\n\n    // R\xe9cup\xe9rer un seul param\xe8tre r\xe9ponse image avec id\n    router.get("/:id", param_rep_image.findOne);\n\n    app.use("/api/paramRepImage", router);\n};\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},'...\nrequire("./src/routes/alecol.param_rep_image.routes")(app);\n...\n')))}m.isMDXComponent=!0}}]);