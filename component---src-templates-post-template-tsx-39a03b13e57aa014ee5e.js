"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{866:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(7294)),a=s(n(5697));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function f(e,t){var n=t.onNewComment,r=t.language,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in i)e.page[o]=i[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return u(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return d.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),c=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};d.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);p.displayName="DisqusThread",p.propTypes={id:a.default.string,shortname:a.default.string.isRequired,identifier:a.default.string,title:a.default.string,url:a.default.string,category_id:a.default.string,onNewComment:a.default.func,language:a.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},1227:function(e,t,n){e.exports=n(866)},2870:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(1227),i=n(8468),o=function(e){var t=e.identifier;return i.createElement(r.default,{shortname:"kyungmokweon",identifier:t,url:"https://kkweon.dev/"+t,title:"My Disqus",onNewComment:function(e){return console.log(e.text)}})},a=n(4035),s=n(5750),u=n(7294),l=n(8468),d=function(e){function t(){return e.apply(this,arguments)||this}(0,s.Z)(t,e);var n=t.prototype;return n.componentWillMount=function(){"undefined"!=typeof window&&(this.getAddthisGoogleAnalyticsScript(),document.body.appendChild(this.getAddthisScript()))},n.getAddthisGoogleAnalyticsScript=function(){window.addthis_config={data_ga_property:"UA-69116729-1",data_ga_social:!0}},n.componentDidMount=function(){window.addthis.layers&&window.addthis.layers.refresh&&window.addthis.layers.refresh()},n.componentWillUnmount=function(){var e=document.querySelector("#addthis");e&&document.body.removeChild(e)},n.getAddthisScript=function(){var e=document.createElement("script");return e.id="addthis",e.src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5932152d13edaf2f",e.async=!0,e.onload=function(){window.addthis.init(),window.addEventListener("load",(function(){var e,t,n;"function"==typeof(null===(e=window)||void 0===e||null===(t=e.addthis)||void 0===t||null===(n=t.layers)||void 0===n?void 0:n.refresh)&&window.addthis.layers.refresh()}))},e},n.render=function(){return l.createElement("div",null,l.createElement("div",{className:"addthis_inline_share_toolbox","data-url":"https://kkweon.dev/"+this.props.slug,"data-title":this.props.title,"data-description":this.props.description}))},t}(u.Component),c=d,f=n(2082),p=n(4038),m=n(1597),h=n(1352),y=n(5070),g=n(4944),w=n(8468),v=(0,h.css)({display:"inline-block",marginBottom:(0,y.q)(1),cursor:"pointer",color:g.iZ}),b=function(){return w.createElement("div",null,w.createElement(m.rU,(0,p.Z)({to:"/"},v),w.createElement("i",{style:{marginRight:(0,y.q)(.5)},className:"fa fa-backward","aria-hidden":"true"}),"Back to the posts"))},_=n(8468);function E(e){var t=e.data.markdownRemark,n=t.frontmatter,r=t.html,i=t.fields.slug,s=t.excerpt,u=n.description||s;return _.createElement(f.Z,null,_.createElement(b,null),_.createElement("section",{className:"post-container"},_.createElement(a.Z,{title:n.title,date:n.date,description:u,tags:n.keywords}),_.createElement("article",{className:"post"},_.createElement("header",{className:"post__header"},_.createElement("h2",null,n.title),_.createElement("p",null,_.createElement("time",null,n.date))),_.createElement("main",{className:"post__body",dangerouslySetInnerHTML:{__html:r}})),_.createElement(c,{slug:i,title:n.title,description:u}),_.createElement(o,{identifier:i})))}},4944:function(e,t,n){n.d(t,{Vz:function(){return i},iZ:function(){return r}});var r="#0381ff",i="#ffe203"}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-39a03b13e57aa014ee5e.js.map