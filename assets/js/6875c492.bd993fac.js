"use strict";(self.webpackChunkalecol_dev_wiki=self.webpackChunkalecol_dev_wiki||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),s=a(5999),n=a(2244);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&l.createElement(n.Z,{permalink:r,title:l.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7294),s=a(6010),n=a(5999),r=a(8824),o=a(1944),i=a(5281),g=a(9960),c=a(9058),m=a(1860),p=a(9703),d=a(197);function u(e){let{tag:t,items:a,sidebar:u,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,r.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(o.FG,{className:(0,s.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},l.createElement(o.d,{title:E}),l.createElement(d.Z,{tag:"blog_tags_posts"}),l.createElement(c.Z,{sidebar:u},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(g.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(p.Z,{metadata:h})))}}}]);