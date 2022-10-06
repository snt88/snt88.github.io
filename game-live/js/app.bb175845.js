(function(){"use strict";var n={358:function(n,e,t){var i=t(963),o=t(252);function s(n,e,t,i,s,r){var a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a,{missions:n.missions,completedMissions:n.completedMissions,hero:n.hero,onMission:n.onMission,onCreateMission:n.createMission,onEditMission:n.editMission,onRemoveMission:n.removeMission,onStartMission:n.startMission,onCompleteMission:n.completeMission},null,8,["missions","completedMissions","hero","onMission","onCreateMission","onEditMission","onRemoveMission","onStartMission","onCompleteMission"])}var r,a=t(262);function c(n){return n.toString().padStart(2,"0")}function l(n){return[n.getFullYear(),c(n.getMonth()+1),c(n.getDate())].join("-")+" "+[c(n.getHours()),c(n.getMinutes()),c(n.getSeconds())].join(":")}function u(n){if(!n.includes("Date"))return n;var e=n.substring(5,n.length-1),t=e.split(",");return l(new Date(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function d(n){var e=JSON.parse(n.substring(47).slice(0,-2)),t=e.table.cols;return 0===e.table.parsedNumHeaders?[]:e.table.rows.map((function(n){var e={};return n.c.forEach((function(n,i){e[t[i].label]=null===n.v?"":n.v})),e}))}function p(n,e,t,i){console.log("url "+t);var o={};for(var s in i)o[s]=typeof i[s];var r={crud:n,sheet:e,data:i,dataType:o};console.log(r),fetch("https://script.google.com/macros/s/".concat(t,"/exec"),{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify(r)}).then((function(n){return console.log(n)})).catch((function(){return alert("fail to update")}))}(function(n){n["create"]="create",n["reading"]="reading",n["update"]="update",n["delete"]="delete"})(r||(r={}));var m=t(201),f=t(577),h=t.p+"img/avatar.6ce26684.jpg",v=function(n){return(0,o.dD)("data-v-32e1e916"),n=n(),(0,o.Cn)(),n},M={class:"host"},_=v((function(){return(0,o._)("div",{class:"header"},[(0,o._)("h3",null,"Dashboard"),(0,o._)("img",{class:"avatar",src:h})],-1)})),w={class:"hi"},y=v((function(){return(0,o._)("h1",null,[(0,o.Uk)("Hello, "),(0,o._)("br"),(0,o.Uk)("Mark Koo 👋")],-1)})),g={class:"subheader"},b={class:"title"},C={class:"desc"},x={class:"point"},D=v((function(){return(0,o._)("span",null,"Exp",-1)})),k=["onClick"],I=v((function(){return(0,o._)("p",null,"Create",-1)})),P={class:"subheader"},$={class:"title"},z={class:"desc"},F=v((function(){return(0,o._)("section",null,null,-1)}));function T(n,e,t,s,r,a){var c=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",M,[_,(0,o._)("div",w,[y,(0,o._)("h5",null,"Level: "+(0,f.zw)(n.getLevelAndExp().level),1),(0,o._)("h5",null," Exp: "+(0,f.zw)(n.getLevelAndExp().exp)+" /"+(0,f.zw)(n.getLevelAndExp().maxLevelExp),1)]),(0,o._)("nav",null,[(0,o._)("button",{onClick:e[0]||(e[0]=function(e){n.$router.push({name:"home"}),n.nav="missions"}),class:(0,f.C_)([{transparent:"missions"!==n.nav},"btn"])}," Missions ",2),(0,o._)("button",{onClick:e[1]||(e[1]=function(e){n.$router.push({name:"home"}),n.nav="completed"}),class:(0,f.C_)([{transparent:"completed"!==n.nav},"btn"])}," Completed ",2)]),(0,o.wy)((0,o._)("section",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.missions,(function(e){return(0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"card"},[(0,o._)("section",null,[(0,o._)("p",g,(0,f.zw)(e.minute)+" min",1),(0,o._)("h4",b,(0,f.zw)(e.title),1),(0,o._)("p",C,(0,f.zw)(e.description),1)]),(0,o._)("section",null,[(0,o._)("p",x,[(0,o.Uk)((0,f.zw)(e.point),1),D]),(0,o._)("button",{onClick:function(t){return n.$router.push({name:"onMission",params:{missionId:e.id}})},class:"btn purple small"}," Take It ",8,k)])])})),128)),(0,o._)("div",{onClick:e[2]||(e[2]=function(e){return n.$router.push({name:"createMission"})}),class:"card",style:{cursor:"pointer"}},[(0,o._)("section",null,[(0,o.Wm)(c,{icon:"fa-solid fa-plus"}),I])])],512),[[i.F8,"missions"===n.nav]]),(0,o.wy)((0,o._)("section",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.completedMissions,(function(e){return(0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"card"},[(0,o._)("section",null,[(0,o._)("p",P,(0,f.zw)(n.dateToString(e.completedDate)),1),(0,o._)("h4",$,(0,f.zw)(e.title),1),(0,o._)("p",z," Earn "+(0,f.zw)(e.point)+" experience / Duration: "+(0,f.zw)(e.minute)+" min ",1)]),F])})),128))],512),[[i.F8,"completed"===n.nav]])])}var E=t(810),S=(0,o.aZ)({props:["missions","completedMissions","hero"],components:{FontAwesomeIcon:E.GN},setup:function(){var n=(0,a.iH)(),e=(0,m.yj)().query.nav;return n.value=void 0!==e?e:"missions",{nav:n}},data:function(){return{firstLevelMaxExp:10,levelIncreaseRate:1.2}},methods:{getLevelAndExp:function(){var n=this.hero.exp,e=1,t=this.firstLevelMaxExp;while(n-t>=0)e++,n-=t,t*=this.levelIncreaseRate;return{level:e,exp:Math.round(n),maxLevelExp:Math.round(t)}},dateToString:function(n){return u(n)}}}),j=t(744);const O=(0,j.Z)(S,[["render",T],["__scopeId","data-v-32e1e916"]]);var U=O,A=function(n){return(0,o.dD)("data-v-02024b33"),n=n(),(0,o.Cn)(),n},q={class:"host"},H={class:"header"},L=A((function(){return(0,o._)("h3",null,"Create",-1)})),N=A((function(){return(0,o._)("div",{style:{width:"26px"}},null,-1)})),Z={class:"form"},V={class:"formField"},R=A((function(){return(0,o._)("label",null,"Title",-1)})),J={class:"formField"},W=A((function(){return(0,o._)("label",null,"Minute",-1)})),G={class:"formField"},K=A((function(){return(0,o._)("label",null,"Point",-1)})),Y={class:"formField"},Q=A((function(){return(0,o._)("label",null,"Description",-1)}));function B(n,e,t,s,r,a){var c=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("div",H,[(0,o._)("button",{onClick:e[0]||(e[0]=function(e){return n.$router.push({name:"home"})}),class:"icon border"},[(0,o.Wm)(c,{icon:"fa-solid fa-arrow-left"})]),L,N]),(0,o._)("div",Z,[(0,o._)("div",V,[R,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return n.mission.title=e}),placeholder:"Mission A"},null,512),[[i.nr,n.mission.title]])]),(0,o._)("div",J,[W,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=function(e){return n.mission.minute=e}),placeholder:"In minute",min:"1"},null,512),[[i.nr,n.mission.minute]])]),(0,o._)("div",G,[K,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=function(e){return n.mission.point=e}),placeholder:"Point",min:"1"},null,512),[[i.nr,n.mission.point]])]),(0,o._)("div",Y,[Q,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(e){return n.mission.description=e}),placeholder:"Note"},null,512),[[i.nr,n.mission.description]])]),(0,o._)("button",{onClick:e[5]||(e[5]=function(e){return n.createMission(n.mission)}),class:"btn large",type:"button"}," Create ")])])}var X=t(655),nn=(0,o.aZ)({emits:["createMission"],components:{FontAwesomeIcon:E.GN},data:function(){return{mission:{}}},methods:{createMission:function(n){this.$emit("createMission",(0,X.pi)({},n)),Qn.push({name:"home"})}}});const en=(0,j.Z)(nn,[["render",B],["__scopeId","data-v-02024b33"]]);var tn=en,on=function(n){return(0,o.dD)("data-v-383259f8"),n=n(),(0,o.Cn)(),n},sn={class:"host"},rn={class:"header"},an=on((function(){return(0,o._)("h3",null,"Edit",-1)})),cn=on((function(){return(0,o._)("div",{style:{width:"26px"}},null,-1)})),ln={class:"form"},un={class:"formField"},dn=on((function(){return(0,o._)("label",null,"Title",-1)})),pn={class:"formField"},mn=on((function(){return(0,o._)("label",null,"Minute",-1)})),fn={class:"formField"},hn=on((function(){return(0,o._)("label",null,"Point",-1)})),vn={class:"formField"},Mn=on((function(){return(0,o._)("label",null,"Description",-1)}));function _n(n,e,t,s,r,a){var c=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",sn,[(0,o._)("div",rn,[(0,o._)("button",{onClick:e[0]||(e[0]=function(e){return n.$router.go(-1)}),class:"icon border"},[(0,o.Wm)(c,{icon:"fa-solid fa-arrow-left"})]),an,cn]),(0,o._)("div",ln,[(0,o._)("div",un,[dn,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return n.mission.title=e}),placeholder:"Mission A"},null,512),[[i.nr,n.mission.title]])]),(0,o._)("div",pn,[mn,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=function(e){return n.mission.minute=e}),placeholder:"In minute",min:"1"},null,512),[[i.nr,n.mission.minute]])]),(0,o._)("div",fn,[hn,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=function(e){return n.mission.point=e}),placeholder:"Point",min:"1"},null,512),[[i.nr,n.mission.point]])]),(0,o._)("div",vn,[Mn,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(e){return n.mission.description=e}),placeholder:"Note"},null,512),[[i.nr,n.mission.description]])]),(0,o._)("button",{onClick:e[5]||(e[5]=function(e){return n.editMission(n.mission)}),class:"btn large",type:"button"}," Update ")])])}var wn=(0,o.aZ)({props:["missions"],emits:["editMission"],components:{FontAwesomeIcon:E.GN},computed:{mission:function(){var n=+(0,m.yj)().params.missionId;return(0,X.pi)({},this.missions.find((function(e){return e.id===n})))}},methods:{editMission:function(n){this.$emit("editMission",(0,X.pi)({},n)),Qn.push("/")}}});const yn=(0,j.Z)(wn,[["render",_n],["__scopeId","data-v-383259f8"]]);var gn,bn,Cn=yn,xn=function(n){return(0,o.dD)("data-v-666c1799"),n=n(),(0,o.Cn)(),n},Dn={key:0,class:"host"},kn={class:"header"},In={class:"info"},Pn={class:"duration"},$n={class:"title"},zn={class:"exp"},Fn={class:"desc"},Tn={class:"action"},En={key:0,class:"run"},Sn=xn((function(){return(0,o._)("div",{class:"bar"},null,-1)})),jn={class:"circle"},On={class:"point"},Un=xn((function(){return(0,o._)("span",{class:"text"},"Exp",-1)})),An={class:"title"},qn={class:"desc"},Hn={class:"actionButton"},Ln={key:0},Nn={key:1,class:"progressBar"},Zn={class:"progressText"},Vn={key:1};function Rn(n,e,t,s,r,a){var c=(0,o.up)("font-awesome-icon");return n.mission?((0,o.wg)(),(0,o.iD)("div",Dn,[(0,o._)("div",kn,[(0,o._)("button",{onClick:e[0]||(e[0]=function(e){return n.$router.push({name:"home"})}),class:"icon border"},[(0,o.Wm)(c,{icon:"fa-solid fa-arrow-left"})]),(0,o._)("section",null,[(0,o._)("button",{onClick:e[1]||(e[1]=function(e){return n.$router.push({name:"editMission",params:{missionId:n.mission.id}})}),class:"icon large"},[(0,o.Wm)(c,{icon:"fa-solid fa-pen-nib"})]),(0,o.wy)((0,o._)("button",{onClick:e[2]||(e[2]=function(e){return n.removeMission(n.mission)}),class:"icon large"},[(0,o.Wm)(c,{icon:"fa-solid fa-trash-can"})],512),[[i.F8,n.missions.length>1]]),(0,o._)("button",{onClick:e[3]||(e[3]=function(e){return n.$router.push({name:"createMission"})}),class:"icon large"},[(0,o.Wm)(c,{icon:"fa-solid fa-plus"})])])]),(0,o._)("div",In,[(0,o._)("p",Pn,(0,f.zw)(n.mission.minute)+" mixins",1),(0,o._)("h1",$n,(0,f.zw)(n.mission.title),1),(0,o._)("p",zn,(0,f.zw)(n.mission.point)+" Exp",1),(0,o._)("p",Fn,(0,f.zw)(n.mission.description),1)]),(0,o._)("div",Tn,[(0,o._)("button",{onClick:e[4]||(e[4]=function(e){return n.$router.push({name:"home"})}),class:"btn transparent textRed large"}," Cancel "),n.isCompleted||n.isPlay?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:e[5]||(e[5]=function(e){return n.play()}),class:"btn large shadow",type:"button"}," Play "))]),n.isPlay||n.isCompleted?((0,o.wg)(),(0,o.iD)("div",En,[Sn,(0,o._)("div",jn,[(0,o._)("span",On,(0,f.zw)(n.mission.point),1),Un]),(0,o._)("h2",An,(0,f.zw)(n.mission.title),1),(0,o._)("p",qn,(0,f.zw)(n.mission.description),1),(0,o._)("div",Hn,[n.isCompleted?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:e[6]||(e[6]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.stop&&n.stop.apply(n,e)}),class:"btn large pink shadow",type:"button"}," Stop ")),n.isCompleted?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:e[7]||(e[7]=function(e){return n.$router.push({name:"home",query:{nav:"completed"}})}),class:"btn large shadow",type:"button"}," Close ")):(0,o.kq)("",!0)]),n.isCompleted?((0,o.wg)(),(0,o.iD)("dt",Ln,"Completed !!!")):(0,o.kq)("",!0),n.isCompleted?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",Nn,[(0,o._)("div",{style:(0,f.j5)({width:n.getProgressPercent()}),class:"progressTime"},null,4),(0,o._)("div",Zn,(0,f.zw)(n.countdown)+" / "+(0,f.zw)(n.second),1)]))])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",Vn,"Loading..."))}var Jn=(0,o.aZ)({props:["missions"],emits:["removeMission","completeMission","startMission"],setup:function(n){var e=(0,o.FN)().proxy,t=(0,a.iH)({url:e.$getUrl,fetchCode:e.$fetchCode}),i=(0,a.iH)();if(n.missions.length>0){var s=+(0,m.yj)().params.missionId;i.value=n.missions.find((function(n){return n.id===s}))}return{mission:i,proxyData:t}},beforeCreate:function(){var n=this;if(!this.mission){var e=+(0,m.yj)().params.missionId;fetch("".concat(this.proxyData.url,"&sheet=missions&tq=").concat(encodeURIComponent("select * where A = ".concat(e)))).then((function(n){return n.text()})).then((function(e){return n.mission=d(e)[0]}))}},components:{FontAwesomeIcon:E.GN},data:function(){return{mission:{},onMission:{},isPlay:!1,isCompleted:!1,countdown:0,second:0}},watch:{mission:function(){var n=this;fetch("".concat(this.proxyData.url,"&sheet=OnMission")).then((function(n){return n.text()})).then((function(e){n.onMission=d(e)[0],0!==n.onMission.onMissionId&&n.play(!0)}))}},methods:{removeMission:function(n){this.$emit("removeMission",(0,X.pi)({},n))},play:function(n){var e=this;if(void 0===n&&(n=!1),this.isPlay=!0,!1===n){this.onMission.id=1,this.onMission.onMissionId=this.mission.id;var t=new Date;t.setSeconds(t.getSeconds()+60*this.mission.minute),this.onMission.onMissionCompletedDate=l(t),this.$emit("startMission",(0,X.pi)({},this.onMission)),this.countdown=this.second=60*this.mission.minute,gn=setInterval((function(){return e.countdown--}),1e3),bn=setTimeout((function(){clearInterval(gn),e.isPlay=!1,e.isCompleted=!0,e.$emit("completeMission",(0,X.pi)({},e.mission)),e.playSound()}),1e3*this.second+1e3)}else{t=new Date(this.onMission.onMissionCompletedDate.replace(" ","T"));var i=Math.floor((t.getTime()-(new Date).getTime())/1e3);i>0?(this.countdown=i,this.second=60*this.mission.minute,gn=setInterval((function(){return e.countdown--}),1e3),bn=setTimeout((function(){clearInterval(gn),e.isPlay=!1,e.isCompleted=!0,e.$emit("completeMission",(0,X.pi)({},e.mission)),e.playSound()}),1e3*this.countdown+1e3)):(this.countdown=0,this.second=60*this.mission.minute,setTimeout((function(){e.isPlay=!1,e.isCompleted=!0,e.$emit("completeMission",(0,X.pi)({},e.mission))}),2e3))}},stop:function(){clearInterval(gn),clearTimeout(bn),this.isPlay=!1},getProgressPercent:function(){return"".concat(this.countdown/this.second*100,"%")},playSound:function(){var n=new Audio("./ring.mp3");n.play()}}});const Wn=(0,j.Z)(Jn,[["render",Rn],["__scopeId","data-v-666c1799"]]);var Gn=Wn,Kn=[{path:"/",name:"home",component:U},{path:"/create-mission",name:"createMission",component:tn},{path:"/edit-mission/:missionId",name:"editMission",component:Cn},{path:"/on-mission/:missionId",name:"onMission",component:Gn}],Yn=(0,m.p7)({history:(0,m.r5)(),routes:Kn}),Qn=Yn,Bn=t(417),Xn=t(636);Xn.vI.add(Bn.acZ,Bn.S6C,Bn.Qz9,Bn.Vui,Bn.r8p);var ne=(0,o.aZ)({setup:function(){var n=(0,o.FN)().proxy,e=(0,a.iH)({url:n.$getUrl,fetchCode:n.$fetchCode}),t=(0,a.iH)([]),i=(0,a.iH)([]),s=(0,a.iH)({id:1,exp:0});return fetch("".concat(e.value.url,"&sheet=Missions")).then((function(n){return n.text()})).then((function(n){return t.value=d(n)})),fetch("".concat(e.value.url,"&sheet=CompletedMissions&tq=").concat(encodeURIComponent("select * order by A desc"))).then((function(n){return n.text()})).then((function(n){return i.value=d(n)})),fetch("".concat(e.value.url,"&sheet=Hero")).then((function(n){return n.text()})).then((function(n){return s.value.exp=d(n)[0].exp})),{missions:t,completedMissions:i,hero:s,proxyData:e}},data:function(){return{onMission:{},firstLevelMaxExp:10,levelIncreaseRate:1.2}},methods:{createMission:function(n){n.id=Math.max.apply(Math,this.missions.map((function(n){return n.id})))+1,p(r.create,"Missions",this.proxyData.fetchCode,n),this.missions.push(n)},editMission:function(n){p(r.update,"Missions",this.proxyData.fetchCode,n);var e=this.missions.findIndex((function(e){return e.id===n.id}));this.missions[e]=n},removeMission:function(n){p(r["delete"],"Missions",this.proxyData.fetchCode,n);var e=this.missions.findIndex((function(e){return e.id===n.id}));this.missions.splice(e,1),Qn.push({name:"home"})},startMission:function(n){p(r.update,"OnMission",this.proxyData.fetchCode,n)},completeMission:function(n){n.id=0===this.completedMissions.length?1:Math.max.apply(Math,this.completedMissions.map((function(n){return n.id})))+1;var e=60*n.minute*1e3,t=(new Date).getTime()+e;n.completedDate=l(new Date(t)),delete n.description,console.log(n),p(r.create,"CompletedMissions",this.proxyData.fetchCode,n),this.completedMissions.unshift(n),p(r.update,"OnMission",this.proxyData.fetchCode,{id:1,onMissionCompletedDate:"",onMissionId:0}),this.hero.exp+=n.point,p(r.update,"Hero",this.proxyData.fetchCode,this.hero)}}});const ee=(0,j.Z)(ne,[["render",s]]);var te=ee,ie=(0,i.ri)(te);ie.config.globalProperties.$getUrl="https://docs.google.com/spreadsheets/d/1JvK8fSGKJp7U0edAsokelElq41jJYotLMz1RYQXVIZ4/gviz/tq?tqx=out:json",ie.config.globalProperties.$fetchCode="AKfycbyu81gb1r2LJIBv-_vSPV88Aad2DFCdY0v1-PydaXThFF0QO9fdXenFiqnyqNhfGfPJCQ",ie.use(Qn).mount("#app")}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return n[i](s,s.exports,t),s.exports}t.m=n,function(){var n=[];t.O=function(e,i,o,s){if(!i){var r=1/0;for(u=0;u<n.length;u++){i=n[u][0],o=n[u][1],s=n[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&s||r>=s)&&Object.keys(t.O).every((function(n){return t.O[n](i[c])}))?i.splice(c--,1):(a=!1,s<r&&(r=s));if(a){n.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=n.length;u>0&&n[u-1][2]>s;u--)n[u]=n[u-1];n[u]=[i,o,s]}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p=""}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var o,s,r=i[0],a=i[1],c=i[2],l=0;if(r.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var u=c(t)}for(e&&e(i);l<r.length;l++)s=r[l],t.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return t.O(u)},i=self["webpackChunkgame_live"]=self["webpackChunkgame_live"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(358)}));i=t.O(i)})();
//# sourceMappingURL=app.bb175845.js.map