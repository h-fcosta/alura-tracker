(function(){"use strict";var o={5807:function(o,a,r){var e=r(9242),t=r(3396),i=r(7139);const n={class:"column is-one-quarter"},s={class:"column is-three-quarter conteudo"},d={class:"lista"},l=(0,t.Uk)("Você não está muito produtivo hoje :( ");function u(o,a,r,e,u,c){const m=(0,t.up)("BarraLateral"),f=(0,t.up)("Formulario"),g=(0,t.up)("Tarefa"),v=(0,t.up)("Box");return(0,t.wg)(),(0,t.iD)("main",{class:(0,i.C_)(["columns is-gapless is-multiline",{"modo-escuro":o.modoEscuroAtivo}])},[(0,t._)("div",n,[(0,t.Wm)(m,{onAoTemaAlterado:o.trocarTema},null,8,["onAoTemaAlterado"])]),(0,t._)("div",s,[(0,t.Wm)(f,{onAoSalvarTarefa:o.salvarTarefa},null,8,["onAoSalvarTarefa"]),(0,t._)("div",d,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.tarefas,((o,a)=>((0,t.wg)(),(0,t.j4)(g,{key:a,tarefa:o},null,8,["tarefa"])))),128))]),o.listaEstaVazia?((0,t.wg)(),(0,t.j4)(v,{key:0},{default:(0,t.w5)((()=>[l])),_:1})):(0,t.kq)("",!0)])],2)}var c="data:image/png;base64,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";const m=o=>((0,t.dD)("data-v-5743ba0f"),o=o(),(0,t.Cn)(),o),f=m((()=>(0,t._)("h1",null,[(0,t._)("img",{src:c,alt:""})],-1)));function g(o,a,r,e,n,s){return(0,t.wg)(),(0,t.iD)("header",null,[f,(0,t._)("button",{class:"button",onClick:a[0]||(a[0]=(...a)=>o.alterarTema&&o.alterarTema(...a))},(0,i.zw)(o.textoBotao),1)])}var v=(0,t.aZ)({name:"barraLateral",emits:["aoTemaAlterado"],data(){return{modoEscuroAtivo:!1}},computed:{textoBotao(){return this.modoEscuroAtivo?"Desativar modo escuro":"Ativar modo escuro"}},methods:{alterarTema(){this.modoEscuroAtivo=!this.modoEscuroAtivo,this.$emit("aoTemaAlterado",this.modoEscuroAtivo)}}}),p=r(89);const E=(0,p.Z)(v,[["render",g],["__scopeId","data-v-5743ba0f"]]);var h=E;const A={class:"box formulario"},C={class:"columns"},B={class:"column is-8",role:"form","aria-label":"Formulário para criação de uma nova tarefa"},b={class:"column"};function I(o,a,r,i,n,s){const d=(0,t.up)("Temporizador");return(0,t.wg)(),(0,t.iD)("div",A,[(0,t._)("div",C,[(0,t._)("div",B,[(0,t.wy)((0,t._)("input",{type:"text",class:"input",placeholder:"Qual tarefa você deseja iniciar?","onUpdate:modelValue":a[0]||(a[0]=a=>o.descricao=a)},null,512),[[e.nr,o.descricao]])]),(0,t._)("div",b,[(0,t.Wm)(d,{onAoTemporizadorFinalizado:o.finalizarTarefa},null,8,["onAoTemporizadorFinalizado"])])])])}const F={class:"is-flex is-align-items-center is-justify-content-space-between"};function T(o,a,r,e,i,n){const s=(0,t.up)("Cronometro"),d=(0,t.up)("Botao");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("section",F,[(0,t.Wm)(s,{tempoEmSegundos:o.tempoEmSegundos},null,8,["tempoEmSegundos"]),(0,t.Wm)(d,{onClicado:o.iniciar,icone:"fas fa-play",texto:"play",desabilitado:o.cronometroRodando},null,8,["onClicado","desabilitado"]),(0,t.Wm)(d,{onClicado:o.finalizar,icone:"fas fa-stop",texto:"stop",desabilitado:!o.cronometroRodando},null,8,["onClicado","desabilitado"])])])}const x={class:"display"};function Q(o,a,r,e,n,s){return(0,t.wg)(),(0,t.iD)("section",null,[(0,t._)("strong",x,(0,i.zw)(o.tempoDecorrido),1)])}var V=(0,t.aZ)({name:"CronometroVue",props:{tempoEmSegundos:{type:Number,default:0}},computed:{tempoDecorrido(){return new Date(1e3*this.tempoEmSegundos).toISOString().substr(11,8)}}});const k=(0,p.Z)(V,[["render",Q]]);var U=k;const W=["disabled"],R={class:"icon"};function S(o,a,r,e,n,s){return(0,t.wg)(),(0,t.iD)("button",{class:"button",onClick:a[0]||(a[0]=(...a)=>o.clicado&&o.clicado(...a)),disabled:o.desabilitado},[(0,t._)("span",R,[(0,t._)("i",{class:(0,i.C_)(o.icone)},null,2)]),(0,t._)("span",null,(0,i.zw)(o.texto),1)],8,W)}var L=(0,t.aZ)({name:"BotaoVue",emits:["clicado"],props:{desabilitado:{type:Boolean},icone:{type:String,required:!0},texto:{type:String,required:!0}},methods:{clicado(){this.$emit("clicado")}}});const Y=(0,p.Z)(L,[["render",S]]);var w=Y,P=(0,t.aZ)({name:"TemporizadorVue",emits:["aoTemporizadorFinalizado"],data(){return{tempoEmSegundos:0,cronometro:0,cronometroRodando:!1}},methods:{iniciar(){this.cronometroRodando=!0,this.cronometro=setInterval((()=>{this.tempoEmSegundos+=1}),1e3)},finalizar(){this.cronometroRodando=!1,clearInterval(this.cronometro),this.$emit("aoTemporizadorFinalizado",this.tempoEmSegundos),this.tempoEmSegundos=0}},components:{Cronometro:U,Botao:w}});const y=(0,p.Z)(P,[["render",T]]);var K=y,z=(0,t.aZ)({name:"FormularioVue",emits:["aoSalvarTarefa"],components:{Temporizador:K},data(){return{descricao:""}},methods:{finalizarTarefa(o){this.$emit("aoSalvarTarefa",{duracaoEmSegundos:o,descricao:this.descricao}),this.descricao=""}}});const q=(0,p.Z)(z,[["render",I]]);var X=q;const O={class:"columns"},j={class:"column is-7"},Z={class:"column"};function J(o,a,r,e,n,s){const d=(0,t.up)("Cronometro"),l=(0,t.up)("Box");return(0,t.wg)(),(0,t.j4)(l,null,{default:(0,t.w5)((()=>[(0,t._)("div",O,[(0,t._)("div",j,(0,i.zw)(o.tarefa.descricao||"Tarefa sem descrição"),1),(0,t._)("div",Z,[(0,t.Wm)(d,{tempoEmSegundos:o.tarefa.duracaoEmSegundos},null,8,["tempoEmSegundos"])])])])),_:1})}function G(o,a,r,e,n,s){return(0,t.wg)(),(0,t.iD)("div",{class:"box has-text-weight-bold",style:(0,i.j5)(o.estilos)},[(0,t.WI)(o.$slots,"default")],4)}var H=(0,t.aZ)({name:"BoxVue",data(){return{estilos:{backgroundColor:"#faf0ca"}}}});const D=(0,p.Z)(H,[["render",G]]);var N=D,M=(0,t.aZ)({name:"TarefaVue",components:{Cronometro:U,Box:N},props:{tarefa:{type:Object,required:!0}}});const _=(0,p.Z)(M,[["render",J]]);var $=_,oo=(0,t.aZ)({name:"App",components:{BarraLateral:h,Formulario:X,Tarefa:$,Box:N},data(){return{tarefas:[],modoEscuroAtivo:!1}},computed:{listaEstaVazia(){return 0===this.tarefas.length}},methods:{salvarTarefa(o){this.tarefas.push(o)},trocarTema(o){this.modoEscuroAtivo=o}}});const ao=(0,p.Z)(oo,[["render",u]]);var ro=ao;(0,e.ri)(ro).mount("#app")}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return o[e](i,i.exports,r),i.exports}r.m=o,function(){var o=[];r.O=function(a,e,t,i){if(!e){var n=1/0;for(u=0;u<o.length;u++){e=o[u][0],t=o[u][1],i=o[u][2];for(var s=!0,d=0;d<e.length;d++)(!1&i||n>=i)&&Object.keys(r.O).every((function(o){return r.O[o](e[d])}))?e.splice(d--,1):(s=!1,i<n&&(n=i));if(s){o.splice(u--,1);var l=t();void 0!==l&&(a=l)}}return a}i=i||0;for(var u=o.length;u>0&&o[u-1][2]>i;u--)o[u]=o[u-1];o[u]=[e,t,i]}}(),function(){r.n=function(o){var a=o&&o.__esModule?function(){return o["default"]}:function(){return o};return r.d(a,{a:a}),a}}(),function(){r.d=function(o,a){for(var e in a)r.o(a,e)&&!r.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:a[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){r.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)}}(),function(){var o={143:0};r.O.j=function(a){return 0===o[a]};var a=function(a,e){var t,i,n=e[0],s=e[1],d=e[2],l=0;if(n.some((function(a){return 0!==o[a]}))){for(t in s)r.o(s,t)&&(r.m[t]=s[t]);if(d)var u=d(r)}for(a&&a(e);l<n.length;l++)i=n[l],r.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return r.O(u)},e=self["webpackChunkalura_tracker"]=self["webpackChunkalura_tracker"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(5807)}));e=r.O(e)})();
//# sourceMappingURL=app.bc2b32ab.js.map