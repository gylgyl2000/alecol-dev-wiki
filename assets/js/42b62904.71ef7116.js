"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[1862],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(i),m=l,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return i?n.createElement(k,r(r({ref:t},c),{},{components:i})):n.createElement(k,r({ref:t},c))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var u=2;u<a;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5162:(e,t,i)=>{i(7294)},5488:(e,t,i)=>{i(7294),i(2389)},982:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=i(7462),l=(i(7294),i(3905));i(5488),i(5162);const a={},r="Organisation des fichiers sources",s={unversionedId:"Documents/Organisation_des_fichiers_sources",id:"Documents/Organisation_des_fichiers_sources",title:"Organisation des fichiers sources",description:"Architecture MVC",source:"@site/docs/5-Documents/Organisation_des_fichiers_sources.mdx",sourceDirName:"5-Documents",slug:"/Documents/Organisation_des_fichiers_sources",permalink:"/alecol-dev-wiki/docs/Documents/Organisation_des_fichiers_sources",draft:!1,editUrl:"https://github.com/gylgyl2000/alecol-dev-wiki/docs/5-Documents/Organisation_des_fichiers_sources.mdx",tags:[],version:"current",frontMatter:{},sidebar:"DocumentsSidebar",previous:{title:"Mettre en place un exercice",permalink:"/alecol-dev-wiki/docs/Documents/Mettre_en_place_un_exercice"}},o={},u=[{value:"Architecture MVC",id:"architecture-mvc",level:2},{value:"1. Mod\xe8le - base de donn\xe9es",id:"1-mod\xe8le---base-de-donn\xe9es",level:3},{value:"2. Vue - client",id:"2-vue---client",level:3},{value:"3. Contr\xf4leur - serveur",id:"3-contr\xf4leur---serveur",level:3},{value:"Le pattern Atomic Design",id:"le-pattern-atomic-design",level:2},{value:"1. Organismes",id:"1-organismes",level:3},{value:"a. <code>competence</code>",id:"a-competence",level:4},{value:"b. <code>exercice</code>",id:"b-exercice",level:4},{value:"c. <code>home</code>",id:"c-home",level:4},{value:"d. <code>matiere</code>",id:"d-matiere",level:4},{value:"e. <code>question</code>",id:"e-question",level:4},{value:"f. <code>register</code>",id:"f-register",level:4},{value:"g. <code>selection</code>",id:"g-selection",level:4},{value:"h. <code>signin</code>",id:"h-signin",level:4},{value:"i. <code>theme</code>",id:"i-theme",level:4},{value:"2. Mol\xe9cules",id:"2-mol\xe9cules",level:3},{value:"a. <code>choiceList</code>",id:"a-choicelist",level:4},{value:"b. <code>competenceList</code>",id:"b-competencelist",level:4},{value:"c. <code>excerciceList</code>",id:"c-excercicelist",level:4},{value:"d. <code>form</code>",id:"d-form",level:4},{value:"e. <code>header</code>",id:"e-header",level:4},{value:"f. <code>matiereList</code>",id:"f-matierelist",level:4},{value:"g. <code>navBar</code>",id:"g-navbar",level:4},{value:"h. <code>statusBar</code>",id:"h-statusbar",level:4},{value:"i. <code>step</code>",id:"i-step",level:4},{value:"j. <code>steps</code>",id:"j-steps",level:4},{value:"k. <code>themeList</code>",id:"k-themelist",level:4},{value:"3. Atomes",id:"3-atomes",level:3},{value:"a. <code>alert</code>",id:"a-alert",level:4},{value:"b. <code>btn</code>",id:"b-btn",level:4},{value:"c. <code>card</code>",id:"c-card",level:4},{value:"d. <code>description</code>",id:"d-description",level:4},{value:"e. <code>exit</code>",id:"e-exit",level:4},{value:"f. <code>field</code>",id:"f-field",level:4},{value:"g. <code>headerItem</code>",id:"g-headeritem",level:4},{value:"h. <code>item</code>",id:"h-item",level:4},{value:"i. <code>logo</code>",id:"i-logo",level:4},{value:"j. <code>privateRoute</code>",id:"j-privateroute",level:4},{value:"k. <code>proposition</code>",id:"k-proposition",level:4},{value:"l. <code>publicRoute</code>",id:"l-publicroute",level:4},{value:"m. <code>score</code>",id:"m-score",level:4},{value:"n. <code>scoreBox</code>",id:"n-scorebox",level:4}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"organisation-des-fichiers-sources"},"Organisation des fichiers sources"),(0,l.kt)("h2",{id:"architecture-mvc"},"Architecture MVC"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"D\xe9finition :")," MVC signifie ",(0,l.kt)("em",{parentName:"p"},"Model-View-Controller"),". Il s\u2019agit d\u2019une architecture ou d\u2019un mod\xe8le de conception logicielle qui facilite la cr\xe9ation d\u2019applications \xe9normes. Il n\u2019appartient pas \xe0 un langage de programmation ou \xe0 un Framework sp\xe9cifique, mais c\u2019est un concept que vous pouvez utiliser pour cr\xe9er tout type d\u2019application ou de logiciel dans n\u2019importe quel langage de programmation."),(0,l.kt)("p",null,"Le sch\xe9ma suivant repr\xe9sente l\u2019architecture MVC du site ainsi que les diff\xe9rents composants qui le permettent de fonctionner correctement :"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-MVC01.png",alt:"Figure 1 : Architecture MVC"}),(0,l.kt)("figcaption",null,"Figure 1 : Architecture MVC")),(0,l.kt)("h3",{id:"1-mod\xe8le---base-de-donn\xe9es"},"1. Mod\xe8le - base de donn\xe9es"),(0,l.kt)("p",null,"Le mod\xe8le fonctionne directement avec la base de donn\xe9es. Il n\u2019a pas \xe0 traiter de l\u2019interface utilisateur ou du traitement des donn\xe9es. Dans un sc\xe9nario r\xe9el, vous utiliserez simplement le mod\xe8le pour r\xe9cup\xe9rer, ins\xe9rer, mettre \xe0 jour et supprimer des donn\xe9es de votre base de donn\xe9es et d\xe9finit les donn\xe9es et la logique applicative :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Encapsule les donn\xe9es de l'application"),(0,l.kt)("li",{parentName:"ul"},"Ex\xe9cute les commandes de mise \xe0 jour des donn\xe9es"),(0,l.kt)("li",{parentName:"ul"},"R\xe9pond aux requ\xeates de consultation")),(0,l.kt)("h3",{id:"2-vue---client"},"2. Vue - client"),(0,l.kt)("p",null,"En termes simples, Vue est l\u2019interface utilisateur sur laquelle notre client / utilisateur peut effectuer certaines actions. Il contient HTML, CSS, JS, XML ou tout autre langage de balisage que nous pouvons utiliser pour cr\xe9er une belle interface utilisateur. Il contient \xe9galement du code pour afficher les donn\xe9es qu\u2019il re\xe7oit de notre application, elle pr\xe9sente graphiquement les donn\xe9es du mod\xe8le :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Se rafra\xeechit \xe0 la demande"),(0,l.kt)("li",{parentName:"ul"},"Fournit des informations compl\xe9mentaires lors de l'action de l'utilisateur")),(0,l.kt)("h3",{id:"3-contr\xf4leur---serveur"},"3. Contr\xf4leur - serveur"),(0,l.kt)("p",null,"Le contr\xf4leur est la partie dans laquelle nous traitons les donn\xe9es apr\xe8s avoir re\xe7u une demande de Vue et avant de mettre \xe0 jour quoi que ce soit dans notre base de donn\xe9es avec notre mod\xe8le."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"R\xe9cup\xe8re des informations \xe0 partir de la vue"),(0,l.kt)("li",{parentName:"ul"},"Traduit les actions de l'utilisateur en commandes de modification du mod\xe8le")),(0,l.kt)("p",null,"Dans notre application l\u2019architecture se concr\xe9tise dans les dossiers suivants :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contr\xf4leur -> dossier \u201ccontrollers\u201d"),(0,l.kt)("li",{parentName:"ul"},"Vue -> dossier \u201ccomponents\u201d"),(0,l.kt)("li",{parentName:"ul"},"Mod\xe8le -> dossier \u201cmodels\u201d")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"le-pattern-atomic-design"},"Le pattern Atomic Design"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"D\xe9finition :")," L\u2019id\xe9e derri\xe8re la m\xe9thodologie est de consid\xe9rer les composants comme des blocs de construction. Les composants sont rassembl\xe9s, allant de composants simples \xe0 faible complexit\xe9 \xe0 des composants plus complexes. Les principaux avantages derri\xe8re ce mod\xe8le architectural sont la coh\xe9rence de la conception (par exemple, les champs d\u2019entr\xe9e se ressemblent toujours) ainsi que la r\xe9utilisabilit\xe9 (en particulier parmi les composants de l\u2019atome et de la mol\xe9cule qui ne sont pas fortement avis\xe9s). La m\xe9thode \xe0 ce principe consiste \xe0 d\xe9composer votre conception en composants jusqu\u2019\xe0 ce que le composant ne puisse plus \xeatre d\xe9compos\xe9."),(0,l.kt)("p",null,"Le sch\xe9ma suivant repr\xe9sente architecture appel\xe9e \xab Atomic design \xbb :"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA00.png",alt:"Figure 2 : Architecture Atomic design"}),(0,l.kt)("figcaption",null,"Figure 2 : Architecture Atomic design")),(0,l.kt)("h3",{id:"1-organismes"},"1. Organismes"),(0,l.kt)("p",null,"Les organismes sont constitu\xe9s de plusieurs mol\xe9cules et/ou atomes. Les organismes deviennent de plus en plus complexes. C\u2019est l\xe0 que l\u2019\xe9tat peut commencer \xe0 montrer sa pr\xe9sence (par exemple, un composant ",(0,l.kt)("inlineCode",{parentName:"p"},"<Form />")," ou ",(0,l.kt)("inlineCode",{parentName:"p"},"<Navigation>"),")."),(0,l.kt)("h4",{id:"a-competence"},"a. ",(0,l.kt)("inlineCode",{parentName:"h4"},"competence")),(0,l.kt)("p",null,"Un composant qui repr\xe9sente une comp\xe9tence d\u2019un \xe9l\xe8ve s\xe9lectionn\xe9e \xe0 partir d\u2019une liste avec deux autres composants qui sont ",(0,l.kt)("em",{parentName:"p"},"Description")," et ",(0,l.kt)("em",{parentName:"p"},"Item"),"."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setCompetence")," qui permet d\u2019initialiser une comp\xe9tence bas\xe9 sur son nombre."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SelectionHandler")," qui initialise une comp\xe9tence par la valeur s\xe9lectionn\xe9e (elle fait appel \xe0 la premi\xe8re m\xe9thode).")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA01.png",alt:"Organisme competence"})),(0,l.kt)("h4",{id:"b-exercice"},"b. ",(0,l.kt)("inlineCode",{parentName:"h4"},"exercice")),(0,l.kt)("p",null,"Un composant qui affiche ",(0,l.kt)("inlineCode",{parentName:"p"},"StatusBar")," et la liste des exercices."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SetExcercice")," qui permet d'initialiser l'exercice s\xe9lectionn\xe9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SetImage")," qui modifie la valeur responsable de la navigation entre les images de transition."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenExcercice")," qui redirige vers la page des questions et affiche les questions de l'exercice s\xe9lectionn\xe9 \xe9tape par \xe9tape.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA02.png",alt:"Organisme exercice"})),(0,l.kt)("h4",{id:"c-home"},"c. ",(0,l.kt)("inlineCode",{parentName:"h4"},"home")),(0,l.kt)("p",null,"Un composant graphique qui repr\xe9sente la vue de la page Home obtenue apr\xe8s le Login, on trouve les iles propos\xe9es \xe0 jouer."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setExcercice")," qui permet de s\xe9lectionner l\u2019excercice."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SetIle")," qui permet de s\xe9lectionner l\u2019ile."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SetDonneExcercice")," qui v\xe9rifier que l\u2019excercice est bien charge.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA03.png",alt:"Organisme home"})),(0,l.kt)("h4",{id:"d-matiere"},"d. ",(0,l.kt)("inlineCode",{parentName:"h4"},"matiere")),(0,l.kt)("p",null,"Un composant qui permet de montrer la vue d\u2019une mati\xe8re s\xe9lectionn\xe9e."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setMatiere")," qui permet de s\xe9lectionner la matiere en basant sur l\u2019identifiant \u201cid\u201d de l\u2019objet.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA04.png",alt:"Organisme matiere"})),(0,l.kt)("h4",{id:"e-question"},"e. ",(0,l.kt)("inlineCode",{parentName:"h4"},"question")),(0,l.kt)("p",null,"R\xe9cup\xe8re la liste des questions de l'exercice ainsi que le type d'exercice."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setExercice")," initialise l'exercice s\xe9lectionn\xe9 basant sur l\u2019identifiant de l\u2019objet s\xe9lectionn\xe9e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setQuestions")," initialise la liste des questions basant sur la liste des questions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GetExoType")," r\xe9cup\xe8re le type de l'exercice s\xe9lectionn\xe9.")),(0,l.kt)("h4",{id:"f-register"},"f. ",(0,l.kt)("inlineCode",{parentName:"h4"},"register")),(0,l.kt)("p",null,"Le composant responsable de l\u2019enregistrement du client \u201d\xe9l\xe8ve\u201d base sur une registrform."),(0,l.kt)("p",null,"Le code utilise : une portion de code qui nous permet de v\xe9rifier la similarit\xe9 des mots de passe entre eux et l'enregistre, l\u2019existence de l\u2019email et enfin de compte d\u2019enregistrer les informations mentionn\xe9es et crypter le mot de passe par la fonction bcrypt."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA06.png",alt:"Organisme register"})),(0,l.kt)("h4",{id:"g-selection"},"g. ",(0,l.kt)("inlineCode",{parentName:"h4"},"selection")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA07.png",alt:"Organisme selection"})),(0,l.kt)("h4",{id:"h-signin"},"h. ",(0,l.kt)("inlineCode",{parentName:"h4"},"signin")),(0,l.kt)("p",null,"Le composant responsable de la connexion du client \xe0 son compte bas\xe9 sur un formulaire."),(0,l.kt)("p",null,"Le code utilise : une portion de code qui nous permet de v\xe9rifier l\u2019existence des informations rentr\xe9es sur notre base de donn\xe9es."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA08.png",alt:"Organisme signin"})),(0,l.kt)("h4",{id:"i-theme"},"i. ",(0,l.kt)("inlineCode",{parentName:"h4"},"theme")),(0,l.kt)("p",null,"Affiche la liste des th\xe8mes et initialise l'\xe9tat correspondant au th\xe8me s\xe9lectionn\xe9."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selectionHandeler")," qui se base sur la fonction ",(0,l.kt)("inlineCode",{parentName:"li"},"setTheme")," qui permet d\u2019initialiser le theme.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA09.png",alt:"Organisme theme"})),(0,l.kt)("h3",{id:"2-mol\xe9cules"},"2. Mol\xe9cules"),(0,l.kt)("p",null,"Plusieurs atomes peuvent former une mol\xe9cule (par exemple un ",(0,l.kt)("inlineCode",{parentName:"p"},"<IconButton />"),"). Les Mol\xe9cules sont \xe9galement assez simples et seraient probablement sans \xe9tat, mais peuvent contenir un \xe9tat de bascule simple ou similaire."),(0,l.kt)("h4",{id:"a-choicelist"},"a. ",(0,l.kt)("inlineCode",{parentName:"h4"},"choiceList")),(0,l.kt)("p",null,"Un composant de cat\xe9gorie mol\xe9cule qui permet d\u2019afficher une liste des choix et/ou des r\xe9ponses."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA10.png",alt:"Mol\xe9cule choiceList"})),(0,l.kt)("h4",{id:"b-competencelist"},"b. ",(0,l.kt)("inlineCode",{parentName:"h4"},"competenceList")),(0,l.kt)("p",null,"Permet de r\xe9cup\xe8rer et d'afficher la liste des comp\xe9tences par th\xe8me."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setCompetences")," Modifie la liste des comp\xe9tences."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setTheme")," d\xe9finit la valeur du th\xe8me."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setActiveRoute")," permet de changer la r\xe9f\xe9rence vers la page courante."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GetThemecompetence")," r\xe9cup\xe8re la liste des Comp\xe9tences par th\xe8me."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GetAllCompetence")," r\xe9cup\xe8re la liste de tous les th\xe8mes.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA11.png",alt:"Mol\xe9cule competenceList"})),(0,l.kt)("h4",{id:"c-excercicelist"},"c. ",(0,l.kt)("inlineCode",{parentName:"h4"},"excerciceList")),(0,l.kt)("p",null,"Permet de r\xe9cup\xe8rer et d'afficher la liste des exercices."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setActiveRoute")," permet de changer la r\xe9f\xe9rence vers la page courante.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA12.png",alt:"Mol\xe9cule excerciceList"})),(0,l.kt)("h4",{id:"d-form"},"d. ",(0,l.kt)("inlineCode",{parentName:"h4"},"form")),(0,l.kt)("p",null,"Une mol\xe9cule qui repr\xe9sente le formulaire utilis\xe9 pour la connexion. Il se base sur Alert, Btn, Link, Logo, Field comme des atomes."),(0,l.kt)("p",null,"Le code de fonctionnement du formulaire se trouve dans les organismes dont il fait partie de leur construction."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA13.png",alt:"Mol\xe9cule form"})),(0,l.kt)("h4",{id:"e-header"},"e. ",(0,l.kt)("inlineCode",{parentName:"h4"},"header")),(0,l.kt)("p",null,"Un composant qui repr\xe9sente une partie de vue avec des buttons, qui contient des liens vers diff\xe9rents page (mati\xe8re, th\xe8me, comp\xe9tence, exercice) construit \xe0 partir d\u2019un logo et une liste d\u2019item."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setMenuItem")," qui permet de modifier la liste des liens vers diff\xe9rentes pages.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA14.png",alt:"Mol\xe9cule header"})),(0,l.kt)("h4",{id:"f-matierelist"},"f. ",(0,l.kt)("inlineCode",{parentName:"h4"},"matiereList")),(0,l.kt)("p",null,"Un composant de cat\xe9gorie mol\xe9cule qui permet d\u2019afficher la liste des mati\xe8res et leurs descriptions."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setMatiere")," qui initialise la liste des mati\xe8res."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GetAllMatiere")," r\xe9cup\xe8re la liste de toutes les mati\xe8res et les charges dans le state."),(0,l.kt)("li",{parentName:"ul"},"une portion de code qui modifier la r\xe9f\xe9rence vers la page courante.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA15.png",alt:"Mol\xe9cule matiereList"})),(0,l.kt)("h4",{id:"g-navbar"},"g. ",(0,l.kt)("inlineCode",{parentName:"h4"},"navBar")),(0,l.kt)("p",null,"Un composant qui repr\xe9sente partie d\u2019une vue ou se trouve les deux Button Next et forward."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setActiveRoute")," permet de changer la r\xe9f\xe9rence vers la page courante."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setBtn")," permet de d\xe9finir si c'est un bouton de r\xe9initialisation ou de retour."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setBtnText")," change le texte du bouton de droite."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setResetBtn")," permet d'initialiser le bouton de r\xe9initialisation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Next"),' cette fonction est ex\xe9cut\xe9e une fois que le bouton "valider" est cliqu\xe9, elle \xe9value les r\xe9ponses de la question, si les r\xe9ponses sont correctes, on passe \xe0 la prochaine question.')),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA16.png",alt:"Mol\xe9cule navBar"})),(0,l.kt)("h4",{id:"h-statusbar"},"h. ",(0,l.kt)("inlineCode",{parentName:"h4"},"statusBar")),(0,l.kt)("p",null,"Composant qui nous permet d\u2019afficher le score se basant sur les atomes ",(0,l.kt)("inlineCode",{parentName:"p"},"logo")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"score"),"."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA17.png",alt:"Mol\xe9cule statusBar"})),(0,l.kt)("h4",{id:"i-step"},"i. ",(0,l.kt)("inlineCode",{parentName:"h4"},"step")),(0,l.kt)("p",null,"Permet la d\xe9finition d'une question de l'exercice courant, construit \xe0 partir de ",(0,l.kt)("inlineCode",{parentName:"p"},"choiceList"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"snackbar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"navbar"),"."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setPairAnswers")," modifie la valeur du ",(0,l.kt)("inlineCode",{parentName:"li"},"Key"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setKey")," modifie la valeur du ",(0,l.kt)("inlineCode",{parentName:"li"},"Key"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setChoices")," initialise la liste des choix d'une question."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setReponses")," initialise la liste des r\xe9ponses d'une question."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setCorrection")," modifie la valeur de cette variable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setOpen")," modifie la valeur de cette variable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setNoter")," modifie la valeur de cette variable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setConsigne")," modifie la valeur du ",(0,l.kt)("inlineCode",{parentName:"li"},"Key"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setLibelle")," modifie le libell\xe9 de la question."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setVides")," initialise la liste des r\xe9ponses d'une question."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setDone")," initialise la liste des r\xe9ponses d'une question."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setStyle")," initialise la liste des r\xe9ponses d'une question.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA18.png",alt:"Mol\xe9cule step"})),(0,l.kt)("h4",{id:"j-steps"},"j. ",(0,l.kt)("inlineCode",{parentName:"h4"},"steps")),(0,l.kt)("p",null,"Composant qui permet d'afficher les questions \xe9tape par \xe9tape \xe0 partir du composant pr\xe9c\xe8dent \u201cstep\u201d."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA19.png",alt:"Mol\xe9cule steps"})),(0,l.kt)("h4",{id:"k-themelist"},"k. ",(0,l.kt)("inlineCode",{parentName:"h4"},"themeList")),(0,l.kt)("p",null,"Mol\xe9cule qui affiche la liste des th\xe8mes r\xe9cup\xe9r\xe9s pour la mati\xe8re s\xe9lectionn\xe9e en utilisant ",(0,l.kt)("inlineCode",{parentName:"p"},"ListGroup"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Item")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"description"),"."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setThemes")," initialise la liste des th\xe8mes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setMatiere")," modifie la mati\xe8re s\xe9lectionn\xe9e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setActiveRoute")," permet de changer la r\xe9f\xe9rence vers la page courante.")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://monwikidevweb.la-loutre.fr/img/docs/Alecol/assets/OFS-OMA20.png",alt:"Mol\xe9cule themeList"})),(0,l.kt)("h3",{id:"3-atomes"},"3. Atomes"),(0,l.kt)("p",null,"Le plus petit composant possible sera l\u2019atome (par exemple un ",(0,l.kt)("inlineCode",{parentName:"p"},"<Icon />"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<Paragraphe />")," ou un ",(0,l.kt)("inlineCode",{parentName:"p"},"<Button />"),"). La m\xe9thodologie de conception atomique d\xe9termine les atomes comme des composants qui ne peuvent pas \xeatre d\xe9compos\xe9s davantage et qui ont encore un sens. Il serait donc logique de cr\xe9er une liste en tant qu\u2019atome, bien qu\u2019elle contienne des \xe9l\xe9ments de liste, car les \xe9l\xe9ments de liste (",(0,l.kt)("inlineCode",{parentName:"p"},"<li>"),") n\u2019ont aucune valeur \xe0 moins qu\u2019ils ne soient repr\xe9sent\xe9s dans ",(0,l.kt)("inlineCode",{parentName:"p"},"<ul>")," ou ",(0,l.kt)("inlineCode",{parentName:"p"},"<ol>"),". Les atomes sont par d\xe9finition super simples. Dans React, ceux-ci seraient tr\xe8s certainement apatrides."),(0,l.kt)("h4",{id:"a-alert"},"a. ",(0,l.kt)("inlineCode",{parentName:"h4"},"alert")),(0,l.kt)("p",null,"Composant graphique qui est \u201cune fen\xeatre\u201d \xe0 afficher en cas d\u2019erreur."),(0,l.kt)("h4",{id:"b-btn"},"b. ",(0,l.kt)("inlineCode",{parentName:"h4"},"btn")),(0,l.kt)("p",null,"Composant graphique ",(0,l.kt)("inlineCode",{parentName:"p"},"Button")," utilis\xe9 pour soumettre le formulaire."),(0,l.kt)("h4",{id:"c-card"},"c. ",(0,l.kt)("inlineCode",{parentName:"h4"},"card")),(0,l.kt)("p",null,"Composant qui affiche une carte et permet de contr\xf4ler son \xe9tat (tourn\xe9e, cache)."),(0,l.kt)("p",null,"Les fonctions utilis\xe9es"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setCardResultsContext")," ajoute une combinaison dans la liste."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setIsFlipped")," modifie l'\xe9tat de la carte."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setMatch")," modifie la valeur du match (3 \xe9tats : 'match' , 'no match', '')."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setCardFlipped")," incr\xe9mente/d\xe9cr\xe9mente le nombre de carte tourn\xe9es."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setFirstChosenCard")," initialise une r\xe9f\xe9rence vers la premi\xe8re carte s\xe9lectionn\xe9e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setSecondChosenCard")," initialise une r\xe9f\xe9rence vers la deuxi\xe8me carte s\xe9lectionn\xe9e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FlipCard")," initialise la premi\xe8re et la deuxi\xe8me carte s\xe9lectionn\xe9es."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"turnCard")," cache une carte et d\xe9cr\xe9mente le nombre de carte tourn\xe9es."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HideCard")," v\xe9rifie si cela concerne la bonne carte avant de la cacher."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ShowCard")," rend une carte visible et incr\xe9mente le nombre de cartes visibles."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Evaluate")," compare les 2 cartes choisies et retourne le r\xe9sultat dans le state.")),(0,l.kt)("h4",{id:"d-description"},"d. ",(0,l.kt)("inlineCode",{parentName:"h4"},"description")),(0,l.kt)("p",null,"Composant qui donne une description de la mati\xe8re, du th\xe8me, de lale\xe7on, ou de l'exercice."),(0,l.kt)("h4",{id:"e-exit"},"e. ",(0,l.kt)("inlineCode",{parentName:"h4"},"exit")),(0,l.kt)("p",null,"C\u2019est l\u2019\xe9l\xe9ment de sortie, il est repr\xe9sent\xe9 par une image."),(0,l.kt)("h4",{id:"f-field"},"f. ",(0,l.kt)("inlineCode",{parentName:"h4"},"field")),(0,l.kt)("p",null,"Composant qui donne l\u2019entr\xe9e des informations mentionn\xe9e par le client, il se trouve dans les Forms et tout composant qui n\xe9cessite une r\xe9ponse du client."),(0,l.kt)("h4",{id:"g-headeritem"},"g. ",(0,l.kt)("inlineCode",{parentName:"h4"},"headerItem")),(0,l.kt)("p",null,"Composant responsable de la d\xe9finition d'une des sections du Header (mati\xe8res, th\xe8mes, exercices...)."),(0,l.kt)("h4",{id:"h-item"},"h. ",(0,l.kt)("inlineCode",{parentName:"h4"},"item")),(0,l.kt)("p",null,"Composant qui nous permet de d\xe9finir un item de la liste (liste des mati\xe8res, des comp\xe9tences, des exercices)."),(0,l.kt)("h4",{id:"i-logo"},"i. ",(0,l.kt)("inlineCode",{parentName:"h4"},"logo")),(0,l.kt)("p",null,"Le logo du site."),(0,l.kt)("h4",{id:"j-privateroute"},"j. ",(0,l.kt)("inlineCode",{parentName:"h4"},"privateRoute")),(0,l.kt)("p",null,"Composant qui dirige vers la route \u201cconnexion\u201d si le login est bien v\xe9rifi\xe9."),(0,l.kt)("h4",{id:"k-proposition"},"k. ",(0,l.kt)("inlineCode",{parentName:"h4"},"proposition")),(0,l.kt)("p",null,"Composant qui affiche un choix ou une r\xe9ponse :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cas ",(0,l.kt)("inlineCode",{parentName:"li"},"dnd")," : affiche des textes glissables."),(0,l.kt)("li",{parentName:"ul"},"Cas ",(0,l.kt)("inlineCode",{parentName:"li"},"flip")," : affiche une carte."),(0,l.kt)("li",{parentName:"ul"},"Cas ",(0,l.kt)("inlineCode",{parentName:"li"},"Link")," : dans le cas des choix affiche un text."),(0,l.kt)("li",{parentName:"ul"},"Cas des r\xe9ponses affiche des images."),(0,l.kt)("li",{parentName:"ul"},"Cas ",(0,l.kt)("inlineCode",{parentName:"li"},"select")," : affiche les choix sous forme de boutons.")),(0,l.kt)("h4",{id:"l-publicroute"},"l. ",(0,l.kt)("inlineCode",{parentName:"h4"},"publicRoute")),(0,l.kt)("p",null,"Composant qui nous dirige vers la route \u201chome\u201d si le login est bien v\xe9rifi\xe9."),(0,l.kt)("h4",{id:"m-score"},"m. ",(0,l.kt)("inlineCode",{parentName:"h4"},"score")),(0,l.kt)("p",null,"Responsable d\u2019afficher le score d\xe9pendant de la progression, des r\xe9compenses et un scorebox."),(0,l.kt)("h4",{id:"n-scorebox"},"n. ",(0,l.kt)("inlineCode",{parentName:"h4"},"scoreBox")),(0,l.kt)("p",null,"Affiche le score qui dans ce cas une forme lin\xe9aire."))}d.isMDXComponent=!0}}]);