(this.webpackJsonptimes2021=this.webpackJsonptimes2021||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(8),r=s.n(c),o=s(26),n=s.n(o),a=(s(41),s(15)),i=(s(42),s(43),s.p+"static/media/times_logo_bw.f1a15517.svg"),l=s(25),d=s(33),b=s(35),m=s(21),j=(s(46),s(9)),u=function(){return Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("p",{className:"text-secondary pt-20 text-2xl font-bold text-center mb-10 sm:text-4xl",children:"Csapat \xc9rt\xe9kel\xe9se"}),Object(j.jsx)("form",{action:"",className:"px-4 max-w-2xl w-3/4 mx-auto flex flex-col justify-center items-center bg-white shadow mt-4 py-8 rounded text-secondary",children:Object(j.jsxs)("div",{className:"flex justify-center items-center text-center flex-col sm:flex-row",children:[Object(j.jsxs)("p",{className:"pr-4",children:["Csapat kiv\xe1laszt\xe1sa",Object(j.jsx)("span",{className:"text-red-600",children:"*"})]}),Object(j.jsxs)("select",{className:" px-2 w-full border border-formBorder sm:w-auto focus:outline-none focus:ring-2 focus:ring-estiemGreen focus:border-opacity-0",children:[Object(j.jsx)("option",{value:"Team1",children:"Team1"}),Object(j.jsx)("option",{value:"Team2",children:"Team2"}),Object(j.jsx)("option",{value:"Team3",children:"Team3"}),Object(j.jsx)("option",{value:"Team4",children:"Team4"})]})]})})]})},x=Object(b.a)({apiKey:"AIzaSyBV685ZZr9FV18lEOxvd_jcuPtzqq35xiE",authDomain:"times-budapest-2021.firebaseapp.com",projectId:"times-budapest-2021",storageBucket:"times-budapest-2021.appspot.com",messagingSenderId:"876651553073",appId:"1:876651553073:web:a3af78105d93847104d010"}),p=Object(l.a)(x);function f(){var e=Object(d.a)(p),t=Object(a.a)(e,1)[0];return Object(j.jsxs)("div",{className:"bg-primary",children:[Object(j.jsxs)("div",{className:"fixed top-0 left-0 w-screen flex justify-end items-center bg-white py-2 pr-5 shadow",children:[Object(j.jsx)("img",{alt:"",src:i,className:"h-3 pl-5 mr-auto"}),Object(j.jsx)("h1",{className:"text-secondary text-xs hidden sm:text-md sm:block",children:t?t.email:""}),Object(j.jsx)("button",{className:"bg-estiemGreen py-1 text-white px-3 ml-4 hover:bg-estiemGreenHover text-sm rounded",onClick:function(){m.b.success("Sikeres kijelentkez\xe9s!",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),Object(l.d)(p)},children:"Kijelentkez\xe9s"})]}),Object(j.jsx)(u,{})]})}function O(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),s=t[0],r=t[1],o=Object(c.useState)(""),n=Object(a.a)(o,2),d=n[0],b=n[1];return Object(j.jsxs)("div",{className:"flex justify-center items-center h-screen flex-col",children:[Object(j.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(j.jsx)("img",{src:i,alt:"",className:"h-4 mb-1"}),Object(j.jsx)("p",{className:"text-4xl text-secondary mb-6 font-semibold",children:"Bejelentkez\xe9s"})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(l.c)(p,s,d).then((function(e){m.b.success("Sikeres bejelentkez\xe9s",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){e.code,e.message;console.log(e.code),b(""),"auth/user-not-found"==e.code&&m.b.error("Ismeretlen e-mail c\xedm!",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),"auth/wrong-password"==e.code&&m.b.error("Hib\xe1s jelsz\xf3!",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))},className:"w-3/5 max-w-sm shadow px-8 py-8 bg-white rounded flex justify-center flex-col",children:[Object(j.jsxs)("div",{className:"flex mb-2 flex-col",children:[Object(j.jsxs)("p",{className:"mb-1 text-secondary mr-2 font-semibold text-xs",children:["E-mail",Object(j.jsx)("span",{className:"text-red-600",children:"*"})]}),Object(j.jsx)("input",{required:!0,className:"pl-2 border border-formBorder focus:outline-none focus:ring-2 focus:ring-estiemGreen focus:border-opacity-0",type:"email",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex mb-6 flex-col",children:[Object(j.jsxs)("p",{className:"mb-1 text-secondary mr-2 font-semibold text-xs",children:["Jelsz\xf3",Object(j.jsx)("span",{className:"text-red-600",children:"*"})]}),Object(j.jsx)("input",{required:!0,className:"pl-2 border border-formBorder focus:outline-none focus:ring-2 focus:ring-estiemGreen focus:border-opacity-0",type:"password",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"mb-2 bg-estiemGreen hover:bg-estiemGreenHover text-white py-1 rounded-",children:"Bejelentkez\xe9s"}),Object(j.jsx)("p",{onClick:function(e){e.preventDefault(),s&&(Object(l.b)(p,s),m.b.info("Eml\xe9keztetet\u0151 k\xfcldve a "+s+" c\xedmre!",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}).then((function(){})).catch((function(e){e.code,e.message})))},className:"text-xs underline",children:"Elfelejtett jelsz\xf3"})]})]})}var h=function(){var e=Object(d.a)(p),t=Object(a.a)(e,1)[0];return Object(j.jsxs)("div",{className:"bg-primary h-screen relative w-screen",children:[Object(j.jsx)(m.a,{position:"top-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(j.jsx)("section",{children:t?Object(j.jsx)(f,{}):Object(j.jsx)(O,{})})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,n=t.getTTFB;s(e),c(e),r(e),o(e),n(e)}))};n.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),g()}},[[48,1,2]]]);
//# sourceMappingURL=main.d6f3eee5.chunk.js.map