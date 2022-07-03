"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[1927],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,v=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return r?t.createElement(v,s(s({ref:n},d),{},{components:r})):t.createElement(v,s({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=p;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3658:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const l={},s="\xc9l\xe8ve",o={unversionedId:"Backend_Serveur/Sources/MPD_Eleve/Eleve",id:"Backend_Serveur/Sources/MPD_Eleve/Eleve",title:"\xc9l\xe8ve",description:"Service",source:"@site/docs/2-Backend_Serveur/Sources/1-MPD_Eleve/3-Eleve.mdx",sourceDirName:"2-Backend_Serveur/Sources/1-MPD_Eleve",slug:"/Backend_Serveur/Sources/MPD_Eleve/Eleve",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_Eleve/Eleve",draft:!1,editUrl:"https://github.com/gylgyl2000/alecol-dev-wiki/docs/2-Backend_Serveur/Sources/1-MPD_Eleve/3-Eleve.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"BackendSidebar",previous:{title:"Parent => enfant",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_Eleve/Parent_has_enfant"},next:{title:"Classe",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_Eleve/Classe"}},i={},c=[{value:"Service",id:"service",level:2},{value:"Mod\xe8le",id:"mod\xe8le",level:2},{value:"Contr\xf4leur",id:"contr\xf4leur",level:2},{value:"Route",id:"route",level:2}],d={toc:c};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\xe9l\xe8ve"},"\xc9l\xe8ve"),(0,a.kt)("h2",{id:"service"},"Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/services/alecol.eleve.service.js"',title:'"./src/services/alecol.eleve.service.js"'},'import http from "../http-common";\n\nclass EleveDataService {\n  getAll() {\n    return http.get("/eleve");\n  }\n\n  get(id) {\n    return http.get(`/eleve/${id}`);\n  }\n\n  post(data) {\n    return http.post("/eleve", data);\n  }\n\n  findByNom(prenom) {\n    return http.get(`/eleve?prenom=${prenom}`);\n  }\n\n  login(data) {\n    return http.post("/eleve/login", data);\n  }\n\n  getUserFromToken(token) {\n    return http.post("/eleve/getUser", token);\n  }\n\n  isNewInMatiere(eleve_id, matiere_id) {\n    return http.get(`/eleve/is_new_in_matiere?eleve_id=${eleve_id}&id_matiere=${matiere_id}`)\n  }\n\n  updateUserMatiereStatus(eleve_id, matiere_id) {\n    return http.post(`/eleve/update_matiere_status?eleve_id=${eleve_id}&id_matiere=${matiere_id}`)\n  }\n}\n\nexport default new EleveDataService();\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/services/index.js"',title:'"./src/services/index.js"'},'...\nconst EleveService = require("./alecol.eleve.service");\n...\nconst Services = {};\n...\nServices.EleveService = EleveService.default;\n...\nexport default Services;\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"mod\xe8le"},"Mod\xe8le"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/eleve.model.js"',title:'"./src/models/eleve.model.js"'},'module.exports = (sequelize, Sequelize) => {\n  const Eleve = sequelize.define("eleve", {\n    id: {\n      type: Sequelize.INTEGER,\n      primaryKey: true,\n      autoIncrement: true,\n    },\n    prenom: {\n      type: Sequelize.STRING,\n    },\n    password: {\n      type: Sequelize.STRING,\n    },\n    date_fin: {\n      type: Sequelize.DATE,\n    },\n    date_inscription: {\n      type: Sequelize.DATE,\n    },\n    fk_classe_id: {\n      type: Sequelize.STRING,\n      references: {\n        model: "classe",\n        key: "id",\n      },\n    },\n  });\n\n  return Eleve;\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/index.js"',title:'"./src/models/index.js"'},'...\ndb.eleves = require("./eleve.model")(sequelize, Sequelize);\n...\n// eleves => classes\ndb.classes.hasMany(db.eleves, { foreignKey: "fk_classe_id" });\ndb.eleves.belongsTo(db.classes, { foreignKey: "fk_classe_id" });\n...\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"contr\xf4leur"},"Contr\xf4leur"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/controllers/alecol.eleve.controllers.js"',title:'"./src/controllers/alecol.eleve.controllers.js"'},'const bcrypt = require("bcryptjs");\nvar jwt = require("jsonwebtoken");\n\nconst db = require("../models");\n\nconst Eleve = db.eleves;\n\nconst Op = db.Sequelize.Op;\n\n// R\xe9cup\xe9rer tous les \xe9l\xe8ves de la base de donn\xe9es.\nexports.findAll = (req, res) => {\n    const prenom = req.query.prenom;\n\n    var condition = prenom ? { prenom: { [Op.like]: `${prenom}` } } : null;\n\n    Eleve.findAll({ where: condition })\n        .then((data) => {\n            res.send(data);\n        })\n        .catch((err) => {\n            res.status(500).send({\n                message:\n                err.message || "Une erreur s\'est produite lors de la r\xe9cup\xe9ration des El\xe8ves.",\n            });\n        });\n};\n\n// Trouver un seul \xe9l\xe8ve avec un identifiant\nexports.findOne = (req, res) => {\n    const id = req.params.id;\n\n    Eleve.findByPk(id)\n        .then((data) => {\n            res.send(data);\n        })\n        .catch((err) => {\n            res.status(500).send({\n                message: "Erreur lors de la r\xe9cup\xe9ration de l\'\xe9l\xe8ve avec l\'id=" + id,\n            });\n        });\n};\n\nexports.postOne = (req, res) => {\n    let data = req.body;\n    data = { ...data, fk_classe_id: "CP" };\n    Eleve.create(data)\n        .then(() => {\n            res.send("inscription r\xe9ussi");\n        })\n        .catch((err) => {\n            res.status(500).send({\n                message: err,\n            });\n        });\n}\n\nexports.loginEleve = (req, res) => {\n    const prenom = req.body.prenom;\n    const passwordEnfant = req.body.password;\n\n    var condition = prenom ? { prenom: { [Op.like]: `${prenom}` } } : null;\n\n    Eleve.findAll({ where: condition })\n        .then((data) => {\n        if (\n            data[0].prenom === prenom &&\n            bcrypt.compareSync(passwordEnfant, data[0].password)\n        ) {\n            const token = jwt.sign({ id: data[0].id, prenom: data[0].prenom }, "MA_CLE", {\n                expiresIn: "1h",\n            });\n\n            res.status(200).send({ token: token });\n        }\n        })\n        .catch((err) => {\n            res.status(500).send({\n                message: err,\n            });\n        });\n};\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/routes/alecol.eleve.routes.js"',title:'"./src/routes/alecol.eleve.routes.js"'},'const checkAuth = require("../middleware/auth_middleware");\n\nmodule.exports = (app) => {\n    const eleves = require("../controllers/alecol.eleve.controllers");\n\n    var router = require("express").Router();\n\n    // R\xe9cup\xe9rer tous les \xe9l\xe8ves\n    router.get("/", eleves.findAll);\n\n    // Poster un \xe9l\xe8ve\n    router.post("/", eleves.postOne);\n\n    // R\xe9cup\xe9rer un seul \xe9l\xe8ve avec id\n    router.get("/:id", eleves.findOne);\n\n    router.post("/login", eleves.loginEleve);\n\n    router.post("/getUser", checkAuth);\n\n    app.use("/api/eleve", router);\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},'...\nrequire("./src/routes/alecol.eleve.routes")(app);\n...\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"--\n-- Table structure for table `eleve`\n--\n\nDROP TABLE IF EXISTS `eleve`;\nCREATE TABLE IF NOT EXISTS `eleve` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `prenom` varchar(45) NOT NULL,\n  `nom` varchar(255) NOT NULL,\n  `email` varchar(45) NOT NULL,\n  `password` varchar(1000) NOT NULL,\n  `createTime` date DEFAULT NULL,\n  `dateNaissance` date DEFAULT NULL,\n  `dateDebut` date DEFAULT NULL,\n  `classe_id` varchar(5) NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `Email_UNIQUE` (`email`),\n  KEY `fk_Eleve_classe1_idx` (`classe_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;\n\n--\n-- Dumping data for table `eleve`\n--\n\nINSERT INTO `eleve` (`id`, `prenom`, `nom`, `email`, `password`, `createTime`, `dateNaissance`, `dateDebut`, `classe_id`) VALUES\n(1, 'Bachelier', '', 'frederic_bachelier@yahoo.com', 'aaaaa', '2021-10-01', '1971-10-01', '2021-10-01', 'CP'),\n(2, 'yassine', '', 'yassine19265@gmail.com', '$2a$10$KdTsiWi4oaKiIOfNNeA9WOaLlex33A1mvZcKlqFjX8Aw.hLclJCyi', '1995-05-20', '1995-05-20', '1995-05-20', 'CP'),\n(3, 'antoto', '', 'tonin386@gmail.com', '$2a$10$NohKDmuDTFrzkt8ZdT3G1e5xbgOJAAQKgbhRJPZ9kWfg4EEAYS.A2', '2000-09-30', '2000-09-30', '2000-09-30', 'CP'),\n(5, 'laid', '', 'laid@gmail.com', '$2a$10$u93iKcHZJqQVvnUEkD2heOKNHgXAdBJ2gNQ3lJhcP5kBrJ0DPAtay', '1999-02-10', '1999-02-10', '1999-02-10', 'CP'),\n(27, 'sofiane', '', 'sofiane@gmail.com', '$2a$10$meFBDYzPYbgUdo9RVKwFv.PpjJ2qrqsfO923xcdM9xmf/WZAzATEi', '2010-10-10', '2010-10-10', '2010-10-10', 'CP'),\n(32, 'cc', 'aa', 'aabb@gmail.com', '$2a$10$CqCxF2NvxVzn8K9w1ynotuADImHq5CODDmF5RhEYduBR3pasmIQIi', NULL, NULL, '2022-06-14', 'CP'),\n(33, 'c', 'a', 'ab@gmail.com', '$2a$10$QtnTg5MQ3lLd4aN7Vx7fI.XV/WPVsIePY.eoeKTPW37GCxcCMhwXK', NULL, NULL, '2022-06-15', 'CP'),\n(35, 'cc', 'aa', 'aabbd@gmail.com', '$2a$10$DhT78bnhXcOOJw8UhArLveB8APK7fekpTP4TlBUmKUY430A.zLoSC', NULL, NULL, '2022-06-26', 'CP'),\n(36, 'ccc', 'aaa', 'aaabbb@gmail.com', '$2a$10$bGW/vW648bE3GTZ0mFIR.OwqcJPyrZR2KSfjFZc/frib7ZovLdnsa', NULL, NULL, '2022-06-26', 'CP');\n\n-- --------------------------------------------------------\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"--\n-- Table structure for table `parent`\n--\n\nDROP TABLE IF EXISTS `parent`;\nCREATE TABLE IF NOT EXISTS `parent` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `nom` varchar(255) COLLATE utf32_bin DEFAULT NULL,\n  `prenom` varchar(255) COLLATE utf32_bin DEFAULT NULL,\n  `email` varchar(255) COLLATE utf32_bin DEFAULT NULL,\n  `password` varchar(255) COLLATE utf32_bin DEFAULT NULL,\n  `createTime` datetime DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf32 COLLATE=utf32_bin;\n\n--\n-- Dumping data for table `parent`\n--\n\nINSERT INTO `parent` (`id`, `nom`, `prenom`, `email`, `password`, `createTime`) VALUES\n(11, 'alex', 'martin', 'alexmartin@gmail.com', '$2a$10$G3N.7Fuq0AG1kOWWPyzqd.jVb3qrNhGRO4HOWhOWfjSvrZY171Gly', NULL),\n(18, 'aa', 'bb', 'aabb@gmail.com', '$2a$10$orbdcvNkPkJXCxgbQLd5hO.kRxSnjJaOOz6TQna1V5Ok7nTYj4Wxi', NULL),\n(19, 'a', 'b', 'ab@gmail.com', '$2a$10$9f8NDRp3y45NiiyEUiaZOew44ye/O3M8HtoMuG0abWfP9ouE2qSW.', NULL),\n(20, 'aa', 'bb', 'aabb@gmail.com', '$2a$10$acAlAGlpLFEg5kDte6xW7.bs4XWOm9g5aVOQfEw0qwq8t41hiEdXu', NULL),\n(21, 'aa', 'bb', 'aabbd@gmail.com', '$2a$10$WqKwH3IxFF/kp3sVb2rh3.Pw3EzBwS42EiEK0150MzSX.qCgSaPPO', NULL),\n(22, 'aaa', 'bbb', 'aaabbb@gmail.com', '$2a$10$Xg.t.80TnRL4y1rSS9J5C.O7gwzkP/s.IPNVNlxnPeSWA1uz.j4hq', NULL);\n\n-- --------------------------------------------------------\n")))}u.isMDXComponent=!0}}]);