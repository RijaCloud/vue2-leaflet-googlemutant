(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babel-runtime/helpers/typeof"),require("leaflet"),require("leaflet.gridlayer.googlemutant"),require("vue2-leaflet")):"function"==typeof define&&define.amd?define(["babel-runtime/helpers/typeof","leaflet","leaflet.gridlayer.googlemutant","vue2-leaflet"],t):"object"==typeof exports?exports.Vue2LeafletGoogleMutant=t(require("babel-runtime/helpers/typeof"),require("leaflet"),require("leaflet.gridlayer.googlemutant"),require("vue2-leaflet")):e.Vue2LeafletGoogleMutant=t(e["babel-runtime/helpers/typeof"],e.leaflet,e["leaflet.gridlayer.googlemutant"],e["vue2-leaflet"])})(this,function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=8)}([function(e,t,r){var n=r(2)(r(1),r(3),null,null);e.exports=n.exports},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),i=n(o),a=r(5),u=n(a);r(6);var l=r(7),f={options:{type:Object,default:function(){return{}}},apikey:{type:String,default:function(){return""}},lang:{type:String,default:null},region:{type:String,default:null},name:{type:String,default:""},layerType:{type:String,default:"base"},visible:{type:Boolean,default:!0}};t.default={props:f,data:function(){return{ready:!1}},mounted:function(){if(this.mapObject=u.default.gridLayer.googleMutant(this.options),u.default.DomEvent.on(this.mapObject,this.$listeners),(0,l.propsBinder)(this,this.mapObject,f),"object"!==("undefined"==typeof google?"undefined":(0,i.default)(google))||"object"!==(0,i.default)(google.maps)){var e=document.createElement("script"),t="https://maps.googleapis.com/maps/api/js?key="+this.apikey+"&libraries=places,drawing,visualization,geometry";t+=this.lang?"&language="+this.lang:"",t+=this.region?"&region="+this.region:"",e.setAttribute("src",t),document.head.appendChild(e)}this.ready=!0,this.parentContainer=(0,l.findRealParent)(this.$parent),this.parentContainer.addLayer(this,!this.visible)},beforeDestroy:function(){this.parentContainer.removeLayer(this)},methods:{addLayer:function(e,t){t||this.mapObject.addLayer(e.mapObject)},removeLayer:function(e,t){t||this.mapObject.removeLayer(e.mapObject)}}}},function(e,t){e.exports=function(e,t,r,n){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var l=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{display:"none"}},[e.ready?e._t("default"):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports=require("babel-runtime/helpers/typeof")},function(e,t){e.exports=require("leaflet")},function(e,t){e.exports=require("leaflet.gridlayer.googlemutant")},function(e,t){e.exports=require("vue2-leaflet")},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=Vue2LeafletGoogleMutant.js.map
