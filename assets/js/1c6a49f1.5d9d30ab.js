"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[9707],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=i(r),m=s,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function m(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=r.length,o=new Array(l);o[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var i=2;i<l;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3277:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var t=r(3117),s=(r(7294),r(3905));const l={},o="Classe => le\xe7on",a={unversionedId:"Backend_Serveur/Sources/MPD_Eleve/Classe_lesson",id:"Backend_Serveur/Sources/MPD_Eleve/Classe_lesson",title:"Classe => le\xe7on",description:"Mod\xe8le",source:"@site/docs/2-Backend_Serveur/Sources/1-MPD_Eleve/9-Classe_lesson.mdx",sourceDirName:"2-Backend_Serveur/Sources/1-MPD_Eleve",slug:"/Backend_Serveur/Sources/MPD_Eleve/Classe_lesson",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_Eleve/Classe_lesson",draft:!1,editUrl:"https://github.com/gylgyl2000/alecol-dev-wiki/docs/2-Backend_Serveur/Sources/1-MPD_Eleve/9-Classe_lesson.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"BackendSidebar",previous:{title:"Matiere",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_Eleve/Matiere"},next:{title:"M\xe9ta comp\xe9tence",permalink:"/alecol-dev-wiki/docs/Backend_Serveur/Sources/MPD_Competences/MetaComp"}},c={},i=[{value:"Mod\xe8le",id:"mod\xe8le",level:2}],u={toc:i};function d(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"classe--le\xe7on"},"Classe => le\xe7on"),(0,s.kt)("h2",{id:"mod\xe8le"},"Mod\xe8le"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/classe_lesson.model.js"',title:'"./src/models/classe_lesson.model.js"'},'module.exports = (sequelize, Sequelize) => {\n    const Lesson = sequelize.define("classe_lesson", {\n        classe_id: {\n            type: Sequelize.STRING,\n            references: {\n                model: "classe",\n                key: "id",\n            },\n        },\n        lesson_id: {\n            type: Sequelize.STRING,\n            references: {\n                model: "lesson",\n                key: "id",\n            },\n        },\n    });\n\n    return Lesson;\n};\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/models/index.js"',title:'"./src/models/index.js"'},'...\ndb.classe_lesson = require("./classe_lesson.model")(sequelize, Sequelize);\n...\n// classe <=> lesson\ndb.classes.belongsToMany(db.lessons, {through: "classe_lesson", foreignKey: "classe_id",});\ndb.lessons.belongsToMany(db.classes, {through: "classe_lesson", foreignKey: "lesson_id",});\n...\n')),(0,s.kt)("hr",null))}d.isMDXComponent=!0}}]);