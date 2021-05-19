(this["webpackJsonppassword-manager"]=this["webpackJsonppassword-manager"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),s=n.n(o),c=(n(23),n(6)),i=n(4),l=n(5),u=n(9),d=n(8),b=(n(27),"SIGN_IN_REQUEST"),p="SIGN_IN_SUCCESS",j="SIGN_IN_FAILURE",h="SIGN_OUT",O="OPEN_GENERATOR",g="CLOSE_GENERATOR",f=function(){return{type:O}},m=function(){return{type:g}},v=new(function(){function e(){return Object(i.a)(this,e),e.instance?e.instance:(e.instance=this,this)}return Object(l.a)(e,[{key:"getItem",value:function(e){return JSON.parse(localStorage.getItem("".concat(e)))}},{key:"setItem",value:function(e,t){return localStorage.setItem("".concat(e),JSON.stringify(t))}}]),e}()),x=(n(28),n(1)),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).selectButton=function(t){e.setState({active:t.target.id}),e.props.changeButton(t)},e.state={active:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.button,n=function(e){return"open"===e?"fa-lock":"new"===e?"fa-plus":"generate"===e?"fa-bolt":void 0};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{id:t,type:"radio",value:t,name:"category",onChange:this.selectButton,required:!0}),"generate"===t?Object(x.jsxs)("label",{className:"",htmlFor:t,onClick:function(){return e.props.openGenerator()},children:[Object(x.jsx)("i",{className:"fa ".concat(n(t)," open__icon-i"),children:" "}),Object(x.jsx)("div",{className:"open__icon-text",children:t})]}):Object(x.jsxs)("label",{className:"",htmlFor:t,children:[Object(x.jsx)("i",{className:"fa ".concat(n(t)," open__icon-i"),children:" "}),Object(x.jsx)("div",{className:"open__icon-text",children:t})]})]})}}]),n}(a.a.Component),_={openGenerator:f},N=Object(c.b)(null,_)(w),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=e.props.onButtonChange,r=t.target.value;e.setState({button:r}),n(r)},e.state={button:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.buttons;return Object(x.jsx)("div",{className:"open__icons",children:t.map((function(t){return Object(x.jsx)("div",{className:"open__icon open__icon-open",children:Object(x.jsx)(N,{button:t,changeButton:e.handleChange},t)},t)}))})}}]),n}(a.a.Component),y=n(10),C=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onChange=function(t){var n=t.target;e.setState({password:n.value})},e.onButtonChange=function(t){e.setState({button:t})},e.onSubmit=function(t){t.preventDefault();var n=e.state.password,r=e.props,a=r.signInRequest,o=r.signInSuccess;switch(e.state.button){case"open":console.log("open file");break;case"new":a(),o(n),v.setItem("userData",n),console.log(n);break;case"generate":console.log("err file"),y.b.error("Select the file or create",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;default:console.log("default")}},e.state={button:"new",password:"",isPassword:!1},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{className:"open",onSubmit:this.onSubmit,children:[Object(x.jsx)(k,{onButtonChange:this.onButtonChange,buttons:["open","new","generate"]}),Object(x.jsx)("div",{className:"open__pass-area",children:Object(x.jsxs)("div",{className:"open__pass-field-wrap",children:[Object(x.jsx)("input",{className:"open__pass-input",name:"password",type:"password",size:"30",autoComplete:"new-password",maxLength:"1024",placeholder:"Enter password",readOnly:"",tabIndex:"23",required:!0,onChange:this.onChange}),Object(x.jsxs)("button",{className:"open__pass-enter-btn",tabIndex:"24",type:"submit",children:[Object(x.jsx)("i",{className:"fa fa-level-down rotate-90 open__pass-enter-btn-icon-enter"}),Object(x.jsx)("i",{className:"fa fa-fingerprint open__pass-enter-btn-icon-touch-id"})]})]})}),Object(x.jsx)(y.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),n}(a.a.Component)),S={signInRequest:function(){return{type:b}},signInSuccess:function(e){return{type:p,payload:e}},signInError:function(e){return{type:j,payload:e}},openGenerator:f,closeGenerator:m},I=Object(c.b)((function(e){return{isAuthorized:e.userData.isAuthorized,loading:e.userData.loading,error:e.userData.error}}),S)(C),E=n(11),P=(n(30),{closeGenerator:m}),B=Object(c.b)(null,P)((function(e){var t=e.closeGenerator,n=Object(r.useState)(""),a=Object(E.a)(n,2),o=a[0],s=a[1],c=Object(r.useState)(20),i=Object(E.a)(c,2),l=i[0],u=i[1],d=Object(r.useState)(!1),b=Object(E.a)(d,2),p=b[0],j=b[1],h=Object(r.useState)(!1),O=Object(E.a)(h,2),g=O[0],f=O[1],m=Object(r.useState)(!1),v=Object(E.a)(m,2),w=v[0],_=v[1],N=Object(r.useState)(!1),k=Object(E.a)(N,2),C=k[0],S=k[1],I=function(e){for(var t="",n=e.length,r=0;r<l;r++){var a=Math.round(Math.random()*n);t+=e.charAt(a)}return t},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?y.b.error(e,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):y.b.dark(e,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"generator",children:[Object(x.jsx)("div",{className:"generator__close",onClick:function(){return t()},children:"X"}),Object(x.jsx)("h2",{className:"generator__header",children:"Password Generator"}),Object(x.jsxs)("div",{className:"generator__password",children:[Object(x.jsx)("div",{children:o}),Object(x.jsx)("button",{onClick:function(e){""===o?P("Nothing To Copy",!0):(!function(){var e=document.createElement("textarea");e.innerText=o,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}(),P("Password successfully copied to clipboard"))},className:"copy__btn",children:Object(x.jsx)("i",{className:"fa fa-clipboard",children:" "})})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password-strength",children:"Password length"}),Object(x.jsx)("input",{defaultValue:l,onChange:function(e){return u(e.target.value)},type:"number",id:"password-strength",name:"password-strength",max:"20",min:"10"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("span",{children:"Include Uppercase Letters"}),Object(x.jsx)("input",{checked:p,onChange:function(e){return j(e.target.checked)},type:"checkbox",id:"uppercase-letters",name:"uppercase-letters"}),Object(x.jsx)("label",{htmlFor:"uppercase-letters",children:" "})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("span",{children:"Include Lowercase Letters"}),Object(x.jsx)("input",{checked:g,onChange:function(e){return f(e.target.checked)},type:"checkbox",id:"lowercase-letters",name:"lowercase-letters"}),Object(x.jsx)("label",{htmlFor:"lowercase-letters",children:" "})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("span",{children:"Include Numbers"}),Object(x.jsx)("input",{checked:w,onChange:function(e){return _(e.target.checked)},type:"checkbox",id:"include-numbers",name:"include-numbers"}),Object(x.jsx)("label",{htmlFor:"include-numbers",children:" "})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("span",{children:"Include Symbols"}),Object(x.jsx)("input",{checked:C,onChange:function(e){return S(e.target.checked)},type:"checkbox",id:"include-symbols",name:"include-symbols"}),Object(x.jsx)("label",{htmlFor:"include-symbols",children:" "})]}),Object(x.jsx)("button",{onClick:function(e){p||g||w||C||P("You must Select at least one option",!0);var t="";g&&(t+="abcdefghijklmnopqrstuvwxyz"),p&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),w&&(t+="0123456789"),C&&(t+="!'^+%&/()=?_#$\xbd\xa7{[]}|;:>\xf7`<.*-@\xe9"),s(I(t))},className:"generator__btn",children:"Generate Password"}),Object(x.jsx)(y.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})})),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuthorized,n=e.isOpen;return Object(x.jsxs)("div",{className:"app__body",children:[n?Object(x.jsx)(B,{}):null,t?Object(x.jsx)("div",{children:"Main Page"}):Object(x.jsx)(I,{})]})}}]),n}(a.a.Component),G=Object(c.b)((function(e){return{isAuthorized:e.userData.isAuthorized,isOpen:e.generator.isOpen}}))(A),F=(n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=n(12),R=n(18),W=n(2),z={password:null,isAuthorized:!1,loading:!1,error:null},D={isOpen:!1},U=Object(L.combineReducers)({userData:function(e,t){if(void 0===e)return z;var n=t.type,r=t.payload;switch(n){case b:return Object(W.a)(Object(W.a)({},e),{},{loading:!0,error:null});case p:return Object(W.a)(Object(W.a)({},e),{},{password:r,isAuthorized:!0,loading:!1,error:null});case j:return Object(W.a)(Object(W.a)({},z),{},{error:r});case h:return localStorage.clear(),Object(W.a)({},z);default:return e}},generator:function(e,t){if(void 0===e)return D;switch(t.type){case O:return Object(W.a)(Object(W.a)({},e),{},{isOpen:!0});case g:return Object(W.a)(Object(W.a)({},e),{},{isOpen:!1});default:return e}}}),H=Object(L.createStore)(U,Object(R.composeWithDevTools)());s.a.render(Object(x.jsx)(c.a,{store:H,children:Object(x.jsx)(G,{})}),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("/PasswordManager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/PasswordManager","/sw.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.f9e17bb3.chunk.js.map