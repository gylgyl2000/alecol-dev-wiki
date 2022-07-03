"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[7934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>x});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),x=o,v=d["".concat(a,".").concat(x)]||d[x]||u[x]||c;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},8395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));n(5488),n(5162);const c={sidebar_position:1},i="Contextes",s={unversionedId:"Frontend_Application/Application/Contextes/contexts",id:"Frontend_Application/Application/Contextes/contexts",title:"Contextes",description:"ActiveRoute",source:"@site/docs/3-Frontend_Application/Application/Contextes/contexts.mdx",sourceDirName:"3-Frontend_Application/Application/Contextes",slug:"/Frontend_Application/Application/Contextes/contexts",permalink:"/alecol-dev-wiki/docs/Frontend_Application/Application/Contextes/contexts",draft:!1,editUrl:"https://github.com/gylgyl2000/alecol-dev-wiki/docs/3-Frontend_Application/Application/Contextes/contexts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"FrontendSidebar",previous:{title:"app.js",permalink:"/alecol-dev-wiki/docs/Frontend_Application/Application/App_js"},next:{title:"Questions",permalink:"/alecol-dev-wiki/docs/Frontend_Application/Application/Composants/Organismes/Questions_js"}},a={},p=[{value:"ActiveRoute",id:"activeroute",level:2},{value:"User",id:"user",level:2},{value:"Exercice",id:"exercice",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contextes"},"Contextes"),(0,o.kt)("h2",{id:"activeroute"},"ActiveRoute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/contexts/ActiveRouteContext.js"',title:'"./src/contexts/ActiveRouteContext.js"'},'import React, { useState, createContext } from "react";\n\nexport const ActiveRouteContext = createContext();\n\nexport const ActiveRouteProvider = (props) => {\n  const [ActiveRoute, setActiveRoute] = useState("/matieres");\n\n  return (\n    <ActiveRouteContext.Provider value={[ActiveRoute, setActiveRoute]}>\n      {props.children}\n    </ActiveRouteContext.Provider>\n  );\n};\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"user"},"User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/contexts/UserContext.js"',title:'"./src/contexts/UserContext.js"'},'import React, { useState, createContext } from "react";\n\nexport const UserContext = createContext();\n\nexport const UserProvider = (props) => {\n  const [User, setUser] = useState({\n    isLoggedIn: false,\n  });\n\n  return (\n    <UserContext.Provider value={[User, setUser]}>\n      {props.children}\n    </UserContext.Provider>\n  );\n};\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"exercice"},"Exercice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/contexts/ExerciceContext.js"',title:'"./src/contexts/ExerciceContext.js"'},'import React, { createContext, useState } from "react";\n\nexport const ExerciceContext = createContext();\n\nexport const ExerciceProvider = (props) => {\n  const [Exercice, setExercice] = useState({});\n\n  return (\n    <ExerciceContext.Provider value={[Exercice, setExercice]}>\n      {props.children}\n    </ExerciceContext.Provider>\n  );\n};\n')))}u.isMDXComponent=!0}}]);