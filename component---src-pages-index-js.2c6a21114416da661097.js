(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(154);a.default=function(e){var a=e.location;return r.a.createElement(o.a,{location:a},r.a.createElement("div",null,"aaaa"))}},145:function(e,a,n){var t;e.exports=(t=n(147))&&t.default||t},146:function(e,a,n){"use strict";n.r(a),n.d(a,"graphql",function(){return m}),n.d(a,"StaticQueryContext",function(){return p}),n.d(a,"StaticQuery",function(){return f});var t=n(0),r=n.n(t),o=n(4),c=n.n(o),i=n(144),s=n.n(i);n.d(a,"Link",function(){return s.a}),n.d(a,"withPrefix",function(){return i.withPrefix}),n.d(a,"navigate",function(){return i.navigate}),n.d(a,"push",function(){return i.push}),n.d(a,"replace",function(){return i.replace}),n.d(a,"navigateTo",function(){return i.navigateTo});var u=n(145),l=n.n(u);n.d(a,"PageRenderer",function(){return l.a});var d=n(33);n.d(a,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,a,n){"use strict";n.r(a);n(32);var t=n(0),r=n.n(t),o=n(4),c=n.n(o),i=n(52),s=n(2),u=function(e){var a=e.location,n=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=u},149:function(e,a,n){},151:function(e,a,n){e.exports={header:"_2Y8LlogLgo",left:"_1g8Lt14D9C",right:"WS4hLWpgdm",link:"_30iM3cr0oZ"}},152:function(e,a,n){e.exports={footer:"_3bnhcWy7Bh"}},153:function(e,a,n){e.exports={app:"_1QQMx1fnRB",children:"_3PG9yDbs7a",footer:"LEyK3Dg2bc"}},154:function(e,a,n){"use strict";var t=n(0),r=n.n(t),o=n(4),c=n.n(o),i=n(155),s=n.n(i),u=(n(149),n(156),n(146)),l=n(151),d=n.n(l),p=function(e){var a,n=e.location;return r.a.createElement("div",{className:d.a.header},r.a.createElement("div",{className:d.a.left}),r.a.createElement("div",{className:d.a.right},r.a.createElement("h2",null,r.a.createElement(u.Link,{to:"/about",className:d.a.link},"/"!==(a=n.pathname)&&a?"/ vasco-santos "+a:"/ vasco-santos"))))};p.propTypes={location:c.a.object};var f=p,m=n(148),h=n.n(m),v=n(152),g=n.n(v),y=function(e){var a=e.className;return r.a.createElement("div",{className:h()(a,g.a.footer)},"Vasco Santos © ",(new Date).getFullYear())};y.propTypes={className:c.a.string};var b=y,E=n(153),w=n.n(E),q=function(e){var a=e.children,n=e.location;return console.log("layout"),r.a.createElement("div",{className:w.a.app},r.a.createElement(s.a,{defaultTitle:"Vasco Santos",meta:[{name:"description",content:"Vasco Santos website"},{name:"msapplication-TileColor",content:"#000"},{name:"theme-color",content:"#000"}]}),r.a.createElement(f,{location:n||{}}),r.a.createElement("main",{className:w.a.children},a),r.a.createElement(b,{className:w.a.footer}))};q.propTypes={children:c.a.node.isRequired};a.a=q}}]);
//# sourceMappingURL=component---src-pages-index-js.2c6a21114416da661097.js.map