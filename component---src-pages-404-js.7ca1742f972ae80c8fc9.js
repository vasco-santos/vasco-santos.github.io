(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(146)),o=a(n(152)),i=a(n(7)),s=a(n(51)),u=a(n(52)),c=a(n(4)),l=a(n(0)),p=n(22),f=n(144);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=d(n);return l.default.createElement(p.Link,(0,o.default)({to:m,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:h})),!0}},v))},t}(l.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var m=v;t.default=m;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(143),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(145),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),d=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},147:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},148:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(53),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,n){},150:function(e,t,n){"use strict";n(151)("link",function(e){return function(t){return e(this,"a","href",t)}})},151:function(e,t,n){var a=n(11),r=n(24),o=n(16),i=/"/g,s=function(e,t,n,a){var r=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},152:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},153:function(e,t,n){e.exports={header:"_2Y8LlogLgo",left:"_1g8Lt14D9C",right:"WS4hLWpgdm",link:"_30iM3cr0oZ"}},154:function(e,t,n){e.exports={footer:"_3bnhcWy7Bh"}},155:function(e,t,n){e.exports={app:"_1QQMx1fnRB",children:"_3PG9yDbs7a",footer:"LEyK3Dg2bc"}},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=(n(149),n(150),n(144)),u=n(153),c=n.n(u),l=function(e){var t,n=e.location;return r.a.createElement("div",{className:c.a.header},r.a.createElement("div",{className:c.a.left}),r.a.createElement("div",{className:c.a.right},r.a.createElement("h2",null,r.a.createElement(s.Link,{to:"/about",className:c.a.link},"/"!==(t=n.pathname)&&t?"/ vasco-santos "+t:"/ vasco-santos"))))};l.propTypes={location:i.a.object};var p=l,f=n(147),d=n.n(f),h=n(154),v=n.n(h),m=function(e){var t=e.className;return r.a.createElement("div",{className:d()(t,v.a.footer)},"Vasco Santos © ",(new Date).getFullYear())};m.propTypes={className:i.a.string};var g=m,y=n(155),w=n.n(y),b=function(e){var t=e.children,n=e.location;return console.log("layout"),r.a.createElement("div",{className:w.a.app},r.a.createElement(p,{location:n||{}}),r.a.createElement("main",{className:w.a.children},t),r.a.createElement(g,{className:w.a.footer}))};b.propTypes={children:i.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js.7ca1742f972ae80c8fc9.js.map