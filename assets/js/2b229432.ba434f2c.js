"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[1025],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>m});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(l),m=r,v=c["".concat(o,".").concat(m)]||c[m]||p[m]||a;return l?n.createElement(v,s(s({ref:t},u),{},{components:l})):n.createElement(v,s({ref:t},u))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,s=new Array(a);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=l[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},2242:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=l(3117),r=(l(7294),l(3905));const a={sidebar_position:2},s="Manuel d'installation",i={unversionedId:"Installation/installation",id:"Installation/installation",title:"Manuel d'installation",description:"Pr\xe9requis",source:"@site/docs/1-Installation/installation.mdx",sourceDirName:"1-Installation",slug:"/Installation/installation",permalink:"/alecol-dev-wiki/docs/Installation/installation",draft:!1,editUrl:"https://github.com/gylgyl2000/alecol-dev-wiki/docs/1-Installation/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},o={},d=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation de l\u2019environnement de d\xe9veloppement",id:"installation-de-lenvironnement-de-d\xe9veloppement",level:2},{value:"Installation de NodeJS",id:"installation-de-nodejs",level:3},{value:"Param\xe9trage des ports",id:"param\xe9trage-des-ports",level:4},{value:"Installation de Visual Studio",id:"installation-de-visual-studio",level:3},{value:"Installation de MySQL",id:"installation-de-mysql",level:3},{value:"Installation de Wampserver 32bits",id:"installation-de-wampserver-32bits",level:3},{value:"Chargement de la base de donn\xe9es.",id:"chargement-de-la-base-de-donn\xe9es",level:3},{value:"T\xe9l\xe9chargement et Installation de git.",id:"t\xe9l\xe9chargement-et-installation-de-git",level:3},{value:"Installation du projet.",id:"installation-du-projet",level:3},{value:"D\xe9marrage de l\u2019environnement de d\xe9veloppement",id:"d\xe9marrage-de-lenvironnement-de-d\xe9veloppement",level:2},{value:"D\xe9marrer le serveur de base de donn\xe9es Mysql",id:"d\xe9marrer-le-serveur-de-base-de-donn\xe9es-mysql",level:3},{value:"D\xe9marrage du serveur backend NodeJS",id:"d\xe9marrage-du-serveur-backend-nodejs",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis-1",level:4},{value:"D\xe9marrer le serveur NodeJS",id:"d\xe9marrer-le-serveur-nodejs",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"D\xe9marrage du serveur frontend React JS",id:"d\xe9marrage-du-serveur-frontend-react-js",level:3},{value:"Versions du document",id:"versions-du-document",level:2},{value:"(Installation)",id:"installation",level:2},{value:"Cloner le d\xe9p\xf4t Al\xe9col",id:"cloner-le-d\xe9p\xf4t-al\xe9col",level:3},{value:"Installer la base de donn\xe9es",id:"installer-la-base-de-donn\xe9es",level:3},{value:"Installer les d\xe9pendances",id:"installer-les-d\xe9pendances",level:3},{value:"D\xe9marrer le serveur MySQL",id:"d\xe9marrer-le-serveur-mysql",level:3},{value:"Lancer le serveur backend",id:"lancer-le-serveur-backend",level:3},{value:"Lancer l&#39;application frontend",id:"lancer-lapplication-frontend",level:3}],u={toc:d};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manuel-dinstallation"},"Manuel d'installation"),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Fichiers n\xe9cessaires \xe0 l\u2019installation :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"creation users.sql"),(0,r.kt)("li",{parentName:"ul"},"creation insertion tables.sql")),(0,r.kt)("h2",{id:"installation-de-lenvironnement-de-d\xe9veloppement"},"Installation de l\u2019environnement de d\xe9veloppement"),(0,r.kt)("p",null,"Le projet ALECOL est construit sur une pile Fullstack ReactJS/NodeJS, utilisant une base de donn\xe9es MySQL via Express."),(0,r.kt)("p",null,"Il faut donc installer ces diff\xe9rentes briques logicielles."),(0,r.kt)("h3",{id:"installation-de-nodejs"},"Installation de NodeJS"),(0,r.kt)("p",null,"Cette \xe9tape consiste \xe0 t\xe9l\xe9charger et installer node.js sur la machine : ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,r.kt)("h4",{id:"param\xe9trage-des-ports"},"Param\xe9trage des ports"),(0,r.kt)("p",null,"Les ports utilis\xe9s sont param\xe9tr\xe9s dans plusieurs endroits :"),(0,r.kt)("p",null,"Les ports 8080 et 8081, utilis\xe9 pour communiquer avec le serveur NodeJS :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fichier ",(0,r.kt)("strong",{parentName:"li"},"server.js")," dans le r\xe9pertoire racine",(0,r.kt)("br",null),"\nCe fichier contient le port 8080 et 8081 (utilis\xe9 par le CORS)"),(0,r.kt)("li",{parentName:"ol"},"Fichier ",(0,r.kt)("strong",{parentName:"li"},".env")," dans le r\xe9pertoire racine, ex : ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Users\\fbacheli\\Documents\\1 - Fba\\programmation\\React\\alecol"),(0,r.kt)("br",null),"\nCe fichier contient le port utilis\xe9, ex : 8080"),(0,r.kt)("li",{parentName:"ol"},"Fichier ",(0,r.kt)("strong",{parentName:"li"},"http-common.js")," dans le r\xe9pertoire src, ex : ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Users\\fbacheli\\Documents\\1 - Fba\\programmation\\React\\alecol\\src"),(0,r.kt)("br",null),"\nCe fichier contient aussi le m\xeame port, \xe0 destination de Axios")),(0,r.kt)("p",null,"Le port 3306, utilis\xe9 pour communiquer avec la base de donn\xe9es :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fichier ",(0,r.kt)("strong",{parentName:"li"},"index.js db.config.js")," dans le r\xe9pertoire des descripteurs de la base de donn\xe9es")),(0,r.kt)("h3",{id:"installation-de-visual-studio"},"Installation de Visual Studio"),(0,r.kt)("p",null,"T\xe9l\xe9charger Visual Studio 2019 sur le site ",(0,r.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/fr/downloads/"},"https://visualstudio.microsoft.com/fr/downloads/")),(0,r.kt)("h3",{id:"installation-de-mysql"},"Installation de MySQL"),(0,r.kt)("p",null,"T\xe9l\xe9charger sur le site ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/installer/"},"https://dev.mysql.com/downloads/installer/")),(0,r.kt)("p",null,"Inutile de se logger ni de cr\xe9er un compte."),(0,r.kt)("p",null,"version community mysql-installer-community-8.0.23.0.msi (no thanks, just start my download)"),(0,r.kt)("h3",{id:"installation-de-wampserver-32bits"},"Installation de Wampserver 32bits"),(0,r.kt)("p",null,"T\xe9l\xe9charger la version 32 bits (la version 64 bits est buggu\xe9e) ",(0,r.kt)("a",{parentName:"p",href:"https://www.wampserver.com/"},"https://www.wampserver.com/")),(0,r.kt)("h3",{id:"chargement-de-la-base-de-donn\xe9es"},"Chargement de la base de donn\xe9es."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"D\xe9marrer Wampserver"),(0,r.kt)("li",{parentName:"ul"},"Suivre le lien ",(0,r.kt)("a",{parentName:"li",href:"http://localhost/phpmyadmin/"},"http://localhost/phpmyadmin/")),(0,r.kt)("li",{parentName:"ul"},"Lancer wampServer"),(0,r.kt)("li",{parentName:"ul"},"Ouvrir phpMyAdmin avec le compte root"),(0,r.kt)("li",{parentName:"ul"},"Cr\xe9er la database alecol_db"),(0,r.kt)("li",{parentName:"ul"},"Se positionner sur la base de donn\xe9es alecol_db"),(0,r.kt)("li",{parentName:"ul"},"Cliquer sur importer et charger le fichier creation insertion.sql"),(0,r.kt)("li",{parentName:"ul"},"Cliquer sur Ex\xe9cuter")),(0,r.kt)("p",null,"Lors de l\u2019import des fichiers, il ne devrait pas y avoir d\u2019erreurs !"),(0,r.kt)("h3",{id:"t\xe9l\xe9chargement-et-installation-de-git"},"T\xe9l\xe9chargement et Installation de git."),(0,r.kt)("p",null,"La premi\xe8re \xe9tape c\u2019est de t\xe9l\xe9charger et d\u2019installer git sur la machine via le lien suivant : ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,r.kt)("p",null,"la deuxi\xe8me \xe9tape consiste \xe0 ouvrir une console (cmd), se positionner l\xe0 o\xf9 on veut installer les sources et taper la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/Frederic7101/RepoAlecol.git\n")),(0,r.kt)("h3",{id:"installation-du-projet"},"Installation du projet."),(0,r.kt)("p",null,"Se positionner au niveau du projet RepoAlecol et lancer la commande npm install."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd RepoAlecol\nnpm install\n")),(0,r.kt)("h2",{id:"d\xe9marrage-de-lenvironnement-de-d\xe9veloppement"},"D\xe9marrage de l\u2019environnement de d\xe9veloppement"),(0,r.kt)("h3",{id:"d\xe9marrer-le-serveur-de-base-de-donn\xe9es-mysql"},"D\xe9marrer le serveur de base de donn\xe9es Mysql"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\u2019assurer qu\u2019aucune autre application utilise les m\xeames ports que NodeJS et ReactJS, sinon il faut stopper les applications pour lib\xe9rer les ports."),(0,r.kt)("li",{parentName:"ul"},"D\xe9marrer les services Wampserver pour fournir un serveur Mysql"),(0,r.kt)("li",{parentName:"ul"},"D\xe9marrer PhpMyAdmin depuis l\u2019ic\xf4ne de Wamp qui doit \xeatre pass\xe9 au vert"),(0,r.kt)("li",{parentName:"ul"},"Se connecter avec le compte alecolweb (mot de passe alecol) pour v\xe9rifier que tout est OK")),(0,r.kt)("h3",{id:"d\xe9marrage-du-serveur-backend-nodejs"},"D\xe9marrage du serveur backend NodeJS"),(0,r.kt)("h4",{id:"pr\xe9requis-1"},"Pr\xe9requis"),(0,r.kt)("p",null,"Si l\u2019application n\xe9cessite une base de donn\xe9es, il faut d\xe9marrer le serveur de base de donn\xe9es avant NodeJS."),(0,r.kt)("h4",{id:"d\xe9marrer-le-serveur-nodejs"},"D\xe9marrer le serveur NodeJS"),(0,r.kt)("p",null,"Se positionner dans le r\xe9pertoire du projet o\xf9 est install\xe9e l\u2019instance de NodeJS d\xe9di\xe9e au projet ALECOL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd RepoAlecol\n")),(0,r.kt)("p",null,"D\xe9marrer le serveur NodeJS :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node server\n")),(0,r.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Les logs indiquent le message suivant, ceci signifie que le port 8080 est d\xe9j\xe0 utilis\xe9, i.e. qu\u2019une autre application utilise d\xe9j\xe0 ce port. La solution\nimm\xe9diate est de stopper l\u2019autre application pour lib\xe9rer le port. La solution plus p\xe9renne est de param\xe9trer diff\xe9remment pour que les applications\nn\u2019utilisent pas le m\xeame port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Error: listen EADDRINUSE: address already in use :::8080\n    at Server.setupListenHandle [as _listen2] (net.js:1318:16)\n    at listenInCluster (net.js:1366:12)\n    at Server.listen (net.js:1452:7)\n    at Function.listen (C:\\Users\\fbacheli\\Documents\\1 - Fba\\programmation\\React\\alecol\\node_modules\\express\\lib\\application.js:618:24)\n    at Object.<anonymous> (C:\\Users\\fbacheli\\Documents\\1 - Fba\\programmation\\React\\alecol\\server.js:32:5)\n    at Module._compile (internal/modules/cjs/loader.js:1063:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)\n    at Module.load (internal/modules/cjs/loader.js:928:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:769:14)\n    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\nEmitted 'error' event on Server instance at:\n    at emitErrorNT (net.js:1345:8)\n    at processTicksAndRejections (internal/process/task_queues.js:80:21) {\n  code: 'EADDRINUSE',\n  errno: -4091,\n  syscall: 'listen',\n  address: '::',\n  port: 8080\n}\n")),(0,r.kt)("h3",{id:"d\xe9marrage-du-serveur-frontend-react-js"},"D\xe9marrage du serveur frontend React JS"),(0,r.kt)("p",null,"Se positionner dans le r\xe9pertoire du projet o\xf9 est install\xe9 l\u2019instance de ReactJS d\xe9di\xe9e au projet ALECOL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd RepoAlecol\n")),(0,r.kt)("p",null,"D\xe9marrer le serveur ReactJS :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n")),(0,r.kt)("h2",{id:"versions-du-document"},"Versions du document"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Date"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,r.kt)("th",{parentName:"tr",align:null},"Modification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"02/05/2022"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"F. Bachelier"),(0,r.kt)("td",{parentName:"tr",align:null},"Modification du script SQL")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"installation"},"(Installation)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ReactJS - NodeJS - MySQL")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cloner-le-d\xe9p\xf4t-al\xe9col"},"Cloner le d\xe9p\xf4t Al\xe9col"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/Frederic7101/RepoAlecol.git\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"installer-la-base-de-donn\xe9es"},"Installer la base de donn\xe9es"),(0,r.kt)("p",null,"Le fichier source se trouve dans le dossier suivant :\n",(0,r.kt)("inlineCode",{parentName:"p"},"./RepoAlecol/documents/scripts/creation_insertion.sql")),(0,r.kt)("p",null,"Cr\xe9er une base ",(0,r.kt)("inlineCode",{parentName:"p"},"alecol_db"),"."),(0,r.kt)("p",null,"Importer la base ",(0,r.kt)("inlineCode",{parentName:"p"},"creation_insertion.sql"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"installer-les-d\xe9pendances"},"Installer les d\xe9pendances"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd RepoAlecol\nnpm install\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"d\xe9marrer-le-serveur-mysql"},"D\xe9marrer le serveur MySQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mysql -u root -p\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lancer-le-serveur-backend"},"Lancer le serveur backend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd RepoAlecol\nnode server\n")),(0,r.kt)("p",null,"http://localhost:8082"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lancer-lapplication-frontend"},"Lancer l'application frontend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd RepoAlecol\nnpm start\n")),(0,r.kt)("p",null,"http://localhost:8083"))}p.isMDXComponent=!0}}]);