(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(153);a.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return m}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return f});var n=t(0),r=t.n(n),o=t(4),c=t.n(o),i=t(143),s=t.n(i);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var u=t(145),l=t.n(u);t.d(a,"PageRenderer",function(){return l.a});var d=t(33);t.d(a,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},145:function(e,a,t){var n;e.exports=(n=t(148))&&n.default||n},148:function(e,a,t){"use strict";t.r(a);t(32);var n=t(0),r=t.n(n),o=t(4),c=t.n(o),i=t(52),s=t(2),u=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=u},149:function(e,a,t){},150:function(e,a,t){e.exports={header:"_2Y8LlogLgo",left:"_1g8Lt14D9C",right:"WS4hLWpgdm",link:"_30iM3cr0oZ"}},151:function(e,a,t){e.exports={footer:"_3bnhcWy7Bh"}},152:function(e,a,t){e.exports={app:"_1QQMx1fnRB",children:"_3PG9yDbs7a",footer:"LEyK3Dg2bc"}},153:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(4),c=t.n(o),i=t(154),s=t.n(i),u=(t(149),t(155),t(144)),l=t(150),d=t.n(l),p=function(e){var a,t=e.location;return r.a.createElement("div",{className:d.a.header},r.a.createElement("div",{className:d.a.left}),r.a.createElement("div",{className:d.a.right},r.a.createElement("h2",null,r.a.createElement(u.Link,{to:"/about",className:d.a.link},"/"!==(a=t.pathname)&&a?"/ vasco-santos "+a:"/ vasco-santos"))))};p.propTypes={location:c.a.object};var f=p,m=t(146),h=t.n(m),g=t(151),v=t.n(g),y=function(e){var a=e.className;return r.a.createElement("div",{className:h()(a,v.a.footer)},"Vasco Santos © ",(new Date).getFullYear())};y.propTypes={className:c.a.string};var E=y,b=t(152),w=t.n(b),N=function(e){var a=e.children,t=e.location;return console.log("layout"),r.a.createElement("div",{className:w.a.app},r.a.createElement(s.a,{defaultTitle:"Vasco Santos",meta:[{name:"description",content:"Vasco Santos website"},{name:"msapplication-TileColor",content:"#000"},{name:"theme-color",content:"#000"}]}),r.a.createElement(f,{location:t||{}}),r.a.createElement("main",{className:w.a.children},a),r.a.createElement(E,{className:w.a.footer}))};N.propTypes={children:c.a.node.isRequired};a.a=N}}]);
//# sourceMappingURL=component---src-pages-404-js.87666fcef2520274a386.js.map