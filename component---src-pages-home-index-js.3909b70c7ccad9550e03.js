(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(157),s=n.n(i),o=n(167),c=n.n(o),l={particles:{number:{value:100,density:{enable:!0,value_area:1e3}},line_linked:{enable:!0,opacity:.05},move:{direction:"right",speed:.5},size:{value:2},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0},u=n(4),p=n.n(u),f=n(146),d=n.n(f),v=(n(34),n(32),n(147)),h=n.n(v),m=n(7),g=n.n(m),y=n(144),b=function(e){function t(){return e.apply(this,arguments)||this}g()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.to,n=e.href,a=(e.prefixLocale,h()(e,["to","href","prefixLocale"]));return t?r.a.createElement(y.Link,Object.assign({},a,{to:this.buildTo()})):r.a.createElement("a",Object.assign({},a,{href:n,target:"_blank",rel:"noopener noreferrer"}))},n.buildTo=function(){var e=this.props,t=e.to,n=e.prefixLocale,a=this.context.intl,r="";return n&&a.defaultLocale!==a.locale&&(r+="/"+a.locale),r+=t.replace(/\/+$/,""),r+="/"},t}(a.Component);b.defaultProps={prefixLocale:!0},b.propTpes={to:p.a.string,href:p.a.string,prefixLocale:p.a.bool},b.contextTypes={intl:p.a.object.isRequired};var w=b,_=n(158),x=n.n(_),E=function(e){var t=e.svg,n=h()(e,["svg"]);return r.a.createElement("i",n,r.a.createElement("svg",{viewBox:t.viewBox},r.a.createElement("use",{xlinkHref:t.symbol})))};E.propTypes={svg:p.a.object.isRequired};var C=function(e){var t=e.svg,n=h()(e,["svg"]);return r.a.createElement("i",Object.assign({},n,{dangerouslySetInnerHTML:{__html:t}}))};C.propTypes={svg:p.a.string.isRequired};var P=function(e){var t=Object.assign({},e);return r.a.createElement("img",Object.assign({alt:""},t))},j=function(e){var t=e.svg,n=e.className,a=h()(e,["svg","className"]),i=Object.assign({},a,{className:d()(x.a.svg,n)});return"string"!=typeof t?r.a.createElement(E,Object.assign({},i,{svg:t})):0===t.indexOf("<")?r.a.createElement(C,Object.assign({},i,{svg:t})):r.a.createElement(P,Object.assign({},i,{src:t}))};j.propTypes={svg:p.a.oneOfType([p.a.string,p.a.object]).isRequired,className:p.a.string};var k=j,O=n(159),N=n.n(O),R=n(160),T=n.n(R),S=n(161),z=n.n(S),q=n(162),M=n.n(q),I=n(163),L=n.n(I),G=n(164),B=n.n(G),D=[{href:"https://github.com/vasco-santos",name:"github",svg:N.a,css:B.a.github},{href:"https://twitter.com/vascosantos10",name:"twitter",svg:T.a,css:B.a.twitter},{href:"https://instagram.com/vasco.santos10",name:"instagram",svg:z.a,css:B.a.instagram},{href:"https://linkedin.com/in/vascosantos10",name:"linkedin",svg:M.a,css:B.a.linkedin},{href:"https://open.spotify.com/user/1167427245",name:"spotify",svg:L.a,css:B.a.spotify}],H=function(e){e.orientation;return r.a.createElement("div",{className:B.a.list},D.map(function(e){return r.a.createElement(w,{href:e.href},r.a.createElement(k,{className:d()(B.a.svg,e.css),svg:e.svg,role:"presentation"}))}))};H.propTypes={orientation:p.a.oneOf(["horizontal","vertical"])},H.defaultProps={orientation:"horizontal"};var K=H,A=n(165),Q=n.n(A);t.default=function(){return r.a.createElement("div",{className:Q.a.home},r.a.createElement(c.a,{className:Q.a.particles,params:l}),r.a.createElement("div",{className:Q.a.profile},r.a.createElement("img",{className:Q.a.picture,src:s.a,alt:"Project Preview"}),r.a.createElement("div",{className:Q.a.info},r.a.createElement("div",{className:Q.a.role},"P2P Software Engineer"),r.a.createElement("div",{className:Q.a.intro},"A technology enthusiast driven by the daily challenges of software engineering, who aspires to build software to make the world a better place."),r.a.createElement(K,null),r.a.createElement("div",{className:Q.a.ending},"... and a world traveler in the free time"))))}},143:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(147)),i=a(n(156)),s=a(n(7)),o=a(n(53)),c=a(n(54)),l=a(n(4)),u=a(n(0)),p=n(23),f=n(144);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var v={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var n;n=e.call(this,t)||this,(0,c.default)((0,o.default)((0,o.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,s=void 0===a?this.defaultGetProps:a,o=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),v=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var m=d(n);return u.default.createElement(p.Link,(0,i.default)({to:m,state:l,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:v})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},v,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,i.default)({innerRef:t},e))});t.default=m;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(143),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(145),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),d=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},148:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(52),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},156:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},157:function(e,t,n){e.exports=n.p+"static/profile-ea5481f3661df2590e2c4f91f6ce7a57.jpg"},158:function(e,t,n){e.exports={svg:"bBDk6P8Zc1"}},159:function(e,t){e.exports='<svg id="icon-github" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'},160:function(e,t){e.exports='<svg id="icon-twitter" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>'},161:function(e,t){e.exports='<svg id="icon-instagram" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>'},162:function(e,t){e.exports='<svg id="icon-linkedin" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'},163:function(e,t){e.exports='<svg id="icon-spotify" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>'},164:function(e,t,n){e.exports={list:"_2_ukGDTCIJ",svg:"_2UO5Tmr4nm",github:"_1khSxKS_m7",twitter:"jl9fKLH-Iy",instagram:"_2vupYwol93",linkedin:"_3YmbN9EXP_",spotify:"_2nxHDDw5D5"}},165:function(e,t,n){e.exports={home:"_1zIyCfevna",particles:"_1cStlj-eiN",profile:"_328k41asCM",picture:"_1p4dS_6V8m",info:"eNyr2k-jNH",role:"_31OMy200XX",intro:"_2xPtzIKrQW",ending:"_3vStx1E_ho"}}}]);
//# sourceMappingURL=component---src-pages-home-index-js.3909b70c7ccad9550e03.js.map