(this.webpackJsonpcambio=this.webpackJsonpcambio||[]).push([[0],{77:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(12),o=a.n(n),s=a(50),l=a.n(s),j=a(59),i=a(33),b=(a(76),a(51)),u=a(60),d=a(37),O=a(42),x=a(64),h=a(52),v=(a(77),a(119)),f=a(62),p=a.n(f),m=a(122),g=a(120),y=a(63),S=a.n(y),R=a(7);var C=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),o=Object(i.a)(n,2),s=o[0],f=o[1],y=Object(r.useState)("BRL"),C=Object(i.a)(y,2),E=C[0],k=C[1],w=Object(r.useState)("USD"),I=Object(i.a)(w,2),L=I[0],B=I[1],D=Object(r.useState)(new Date),N=Object(i.a)(D,2),M=N[0],T=N[1],U=[{value:"USD",label:"$ D\xf3lar"},{value:"EUR",label:"\u20ac Euro"},{value:"BRL",label:"R$ Real"}];function $(){return($=Object(j.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="https://economia.awesomeapi.com.br/".concat(E,"-").concat(L,"/1"),""!==(r=a.replace(",","."))){e.next=5;break}return f(0),e.abrupt("return");case 5:if(!(isNaN(r)||r<0)){e.next=9;break}return alert("Ops! Valores inv\xe1lidos, por favor digite novamente"),c(""),e.abrupt("return");case 9:E!==L?fetch(t).then((function(e){return e.json()})).then((function(e){e=e[0],f(r*e.high),T(e.create_date)})):f(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){$.apply(this,arguments)}(),document.title="Conversor de moedas"})),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(b.a,{bg:"info",children:[" ",Object(R.jsx)(b.a.Brand,{children:"Conversor de Moedas"})]}),Object(R.jsxs)(u.a,{children:[Object(R.jsxs)("h1",{children:["Ol\xe1! Bem-vindo(a) ao conversor de moedas ",Object(R.jsx)(x.a,{})]}),Object(R.jsx)("p",{children:"Aqui voc\xea poder\xe1 fazer a convers\xe3o de moedas para Real, D\xf3lar e Euro!"}),Object(R.jsx)("br",{}),Object(R.jsxs)(d.a,{children:[Object(R.jsx)(d.a.Label,{children:"Informe o valor a ser convertido"}),Object(R.jsx)(O.a,{type:"text",value:a,placeholder:"$",onChange:function(e){return c(e.target.value)}}),Object(R.jsx)("br",{}),Object(R.jsx)(d.a.Label,{children:"Informe a moeda atual"}),Object(R.jsx)("br",{}),Object(R.jsx)(g.a,{id:"standard-select-currency1",select:!0,label:"",value:E,onChange:function(e){return k(e.target.value)},helperText:"Por favor selecione a moeda atual",children:U.map((function(e){return Object(R.jsx)(m.a,{value:e.value,children:e.label},e.value)}))}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsx)(v.a,{variant:"contained",color:"primary",startIcon:Object(R.jsx)(p.a,{}),onClick:function(){return function(){var e=E;k(L),B(e)}()},children:"INVERTER"}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsx)(d.a.Label,{children:"Informe a moeda a ser convertida"}),Object(R.jsx)("br",{}),Object(R.jsx)(g.a,{id:"standard-select-currency1",select:!0,label:"",value:L,onChange:function(e){return B(e.target.value)},helperText:"Por favor selecione a moeda a ser convertida",children:U.map((function(e){return Object(R.jsx)(m.a,{value:e.value,children:e.label},e.value)}))}),Object(R.jsx)("br",{}),Object(R.jsxs)(h.a,{bg:"info",className:"text-center",children:[" ",Object(R.jsx)(h.a.Header,{children:Object(R.jsx)("h2",{children:s.toLocaleString("pt-br",{style:"currency",currency:L})})})]}),Object(R.jsx)("br",{}),Object(R.jsx)("span",{children:"\xdaltima atualiza\xe7\xe3o: ".concat(M)})]})]}),Object(R.jsxs)("footer",{children:[" ","Aplicativo desenvolvido por Cintia Felix Mendon\xe7a ",Object(R.jsx)("br",{})," ",Object(R.jsx)(S.a,{})," cintiafelix1@gmail.com"]})]})};o.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(C,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.b6322cca.chunk.js.map