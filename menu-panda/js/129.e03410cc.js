"use strict";(self["webpackChunkmenupanda2"]=self["webpackChunkmenupanda2"]||[]).push([[129],{605:function(n,i,t){t.r(i),t.d(i,{default:function(){return R}});var e=t(252),r=t(963),o=t(577),a=t.p+"img/no-added-order.f7735f5a.png",s=function(n){return(0,e.dD)("data-v-2d1ba47f"),n=n(),(0,e.Cn)(),n},c={class:"host"},d=s((function(){return(0,e._)("div",{class:"topHeader"},[(0,e._)("span"),(0,e._)("h3",{class:"title"},"ORDER"),(0,e._)("span")],-1)})),l={class:"rows"},u={class:"nothing"},m=s((function(){return(0,e._)("img",{src:a,alt:"No order in list"},null,-1)})),p=s((function(){return(0,e._)("p",null,"No order in list...",-1)})),f=[m,p],w=["onClick"],_=["src"],v={key:1,src:"https://via.placeholder.com/180/EFEFEF/8E8E8E?text=menupanda"},g={class:"content"},h=["onClick"],k={class:"title"},D={class:"description truncate"},C={class:"bottom"},I={class:"amount"},F={class:"controlArea"},z=["onClick"],b=["onClick"];function y(n,i,t,a,s,m){var p=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",c,[d,(0,e._)("div",l,[(0,e.wy)((0,e._)("div",u,f,512),[[r.F8,0===n.orderList.length]]),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.orderList,(function(i){return(0,e.wg)(),(0,e.iD)("div",{key:i.id,class:"row"},[(0,e._)("div",{onClick:function(t){return n.showItemDetail(i.id)},class:"nav"},[i.image?((0,e.wg)(),(0,e.iD)("img",{key:0,src:n.convertFlickrImage(i.image,n.ImageSize.w150)},null,8,_)):((0,e.wg)(),(0,e.iD)("img",v))],8,w),(0,e._)("div",g,[(0,e._)("div",{onClick:function(t){return n.showItemDetail(i.id)},class:"top"},[(0,e._)("p",k,(0,o.zw)(i.name),1),(0,e._)("p",D,(0,o.zw)(i.code)+". "+(0,o.zw)(i.description),1)],8,h),(0,e._)("div",C,[(0,e._)("p",I,[(0,e.Uk)((0,o.zw)(i.price.toFixed(2))+" x "+(0,o.zw)(i.added)+" = ",1),(0,e._)("span",null,"RM "+(0,o.zw)((i.price*i.added).toFixed(2)),1)]),(0,e._)("div",F,[(0,e._)("button",{onClick:function(t){return n.addToOrder(i.id,1)},class:"primary icon"},[(0,e.Wm)(p,{icon:"plus"})],8,z),(0,e._)("button",{onClick:function(t){return n.addToOrder(i.id,-1)},class:"primary icon"},[(0,e.Wm)(p,{icon:"minus"})],8,b)])])])])})),128))])])}var E=t(399),O=t(981),T=(0,e.aZ)({props:["orderList"],emits:["showItemDetail","addToOrder"],data:function(){return{ImageSize:E.h2}},methods:{showItemDetail:function(n){this.$emit("showItemDetail",n)},addToOrder:function(n,i){this.$emit("addToOrder",{id:n,qty:i})},convertFlickrImage:function(n,i){return(0,O.AF)(n,i)}}}),x=t(744);const L=(0,x.Z)(T,[["render",y],["__scopeId","data-v-2d1ba47f"]]);var R=L}}]);
//# sourceMappingURL=129.e03410cc.js.map