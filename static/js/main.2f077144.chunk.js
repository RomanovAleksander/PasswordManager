(this["webpackJsonppassword-manager"]=this["webpackJsonppassword-manager"]||[]).push([[0],{157:function(e,t){},159:function(e,t){},169:function(e,t){},171:function(e,t){},197:function(e,t){},199:function(e,t){},200:function(e,t){},205:function(e,t){},207:function(e,t){},213:function(e,t){},215:function(e,t){},234:function(e,t){},246:function(e,t){},249:function(e,t){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){},286:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=n(7),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(45),u=n(144),j=n(3),b="SIGN_IN_REQUEST",h="SIGN_IN_SUCCESS",f="SIGN_IN_FAILURE",p="SIGN_OUT",m=n(8),O=n(9),v=new(function(){function e(){return Object(m.a)(this,e),e.instance?e.instance:(e.instance=this,this)}return Object(O.a)(e,[{key:"getItem",value:function(e){return JSON.parse(localStorage.getItem("".concat(e)))}},{key:"setItem",value:function(e,t){return localStorage.setItem("".concat(e),JSON.stringify(t))}},{key:"removeItem",value:function(e){return localStorage.removeItem("".concat(e))}}]),e}()),g={masterPassword:null,isAuthorized:!1,loading:!1,error:null},x="OPEN_GENERATOR",_="CLOSE_GENERATOR",N={isOpen:!1},w=n(58),y="FETCH_DATA_REQUEST",k="FETCH_DATA_SUCCESS",I="FETCH_DATA_FAILURE",C="SEARCH_DATA",S="VIEW_DETAILS",E="CREATE_ITEM",T="REMOVE_ITEM",D="CHANGE_ITEM",A=function(e,t){return e.findIndex((function(e){return e.id===t}))},L=function(){return new Date(Date.now()).toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})},F={data:[],activeItemId:null,searchText:"",loading:!0,error:null},P="SET_FILENAME",R={fileName:"",isSave:!1},U="CHANGE_THEME",B={isDark:!0},G=Object(d.combineReducers)({authorization:function(e,t){if(void 0===e)return g;var n=t.type,a=t.payload;switch(n){case b:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case h:return Object(j.a)(Object(j.a)({},e),{},{masterPassword:a,isAuthorized:!0,loading:!1,error:null});case f:return Object(j.a)(Object(j.a)({},g),{},{error:a});case p:return v.removeItem("Data"),Object(j.a)({},g);default:return e}},generator:function(e,t){if(void 0===e)return N;switch(t.type){case x:return Object(j.a)(Object(j.a)({},e),{},{isOpen:!0});case _:return Object(j.a)(Object(j.a)({},e),{},{isOpen:!1});default:return e}},dataList:function(e,t){if(void 0===e)return F;var n=t.type,a=t.payload;switch(n){case y:return Object(j.a)(Object(j.a)({},e),{},{data:[],loading:!0,error:null});case k:return Object(j.a)(Object(j.a)({},e),{},{data:a,loading:!1,error:null});case I:return Object(j.a)(Object(j.a)({},e),{},{data:[],loading:!1,error:a});case C:return Object(j.a)(Object(j.a)({},e),{},{searchText:a.searchText});case S:return Object(j.a)(Object(j.a)({},e),{},{activeItemId:a.activeItemId});case T:var r=e.data.filter((function(e){return e.id!==a}));return Object(j.a)(Object(j.a)({},e),{},{data:r,activeItemId:0===r.length?null:r[0].id});case E:var c={title:"(no title)",id:Date.now()+Math.random(),user:"-",password:"",website:"",notes:"",tags:"",group:"",created:L(),updated:"",file:""};return Object(j.a)(Object(j.a)({},e),{},{data:[c].concat(Object(w.a)(e.data)),activeItemId:c.id});case D:var s=A(e.data,e.activeItemId),i=[].concat(Object(w.a)(e.data.slice(0,s)),[Object(j.a)(Object(j.a)({},e.data[s]),{},{updated:L()},a)],Object(w.a)(e.data.slice(s+1)));return Object(j.a)(Object(j.a)({},e),{},{data:i});default:return e}},file:function(e,t){if(void 0===e)return R;var n=t.type,a=t.payload;switch(n){case P:return Object(j.a)(Object(j.a)({},e),{},{fileName:a});default:return e}},settings:function(e,t){if(void 0===e)return localStorage.isDark?Object(j.a)(Object(j.a)({},B),{},{isDark:v.getItem("isDark")}):B;var n=t.type,a=t.payload;switch(n){case U:return v.setItem("isDark",a),Object(j.a)(Object(j.a)({},e),{},{isDark:a});default:return e}}}),z=Object(d.createStore)(G,Object(u.composeWithDevTools)()),H=n(13),M=n(12),W=n(57),q=function(){return{type:x}},J=function(){return{type:_}},V=function(){return{type:y}},Q=function(e){return{type:P,payload:e}},Y=n(47),X=n.n(Y),$=function(e,t){var n,a=X.a.AES.decrypt(e,"Encrypt Password ".concat(t));try{n=a.toString(X.a.enc.Utf8)}catch(r){n=!1}return n?JSON.parse(a.toString(X.a.enc.Utf8)):"Invalid Password"},K=n(20),Z=n(0),ee=function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).selectButton=function(e){a.setState({active:e.target.id}),a.props.changeButton(e)},a.state={active:""},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this,t=this.props.button,n=function(e){return"open"===e?"fa-lock":"new"===e?"fa-plus":"generate"===e?"fa-bolt":void 0};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("input",{id:t,type:"radio",value:t,name:"category",onChange:this.selectButton,required:!0}),"generate"===t?Object(Z.jsxs)("label",{className:"",onClick:function(){return e.props.openGenerator()},children:[Object(Z.jsx)("i",{className:"fa ".concat(n(t)," open__icon-i"),children:" "}),Object(Z.jsx)("div",{className:"open__icon-text",children:t})]}):Object(Z.jsxs)("label",{className:"",htmlFor:t,children:[Object(Z.jsx)("i",{className:"fa ".concat(n(t)," open__icon-i"),children:" "}),Object(Z.jsx)("div",{className:"open__icon-text",children:t})]})]})}}]),n}(r.a.Component),te={openGenerator:q},ne=Object(i.b)(null,te)(ee),ae=function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=e.props.onButtonChange,a=t.target.value;e.setState({button:a}),n(a)},e.state={button:""},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this,t=this.props.buttons;return Object(Z.jsx)("div",{className:"open__icons",children:t.map((function(t){return Object(Z.jsx)("div",{className:"open__icon open__icon-open",children:Object(Z.jsx)(ne,{button:t,changeButton:e.handleChange},t)},t)}))})}}]),n}(r.a.Component),re=(n(85),n(276),n(30)),ce=n(24),se=(n(277),function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).toggleTheme=function(){var e=a.props,t=e.changeTheme,n=e.isDark;t(!n),document.body.className=n?"th-light":"th-dark"},a.state={},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isDark,n=e.isFooter;return Object(Z.jsxs)("div",{className:n?"switch-rel":"switch-abs",children:[Object(Z.jsx)("input",{type:"checkbox",className:"checkbox",id:"chk",defaultChecked:t}),Object(Z.jsxs)("label",{className:"label",htmlFor:"chk",onClick:this.toggleTheme,children:[Object(Z.jsx)(re.a,{icon:ce.b}),Object(Z.jsx)(re.a,{icon:ce.d}),Object(Z.jsx)("div",{className:"ball"})]})]})}}]),n}(r.a.Component)),ie={changeTheme:function(e){return{type:U,payload:e}}},oe=Object(i.b)((function(e){return{isDark:e.settings.isDark}}),ie)(se),le=function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t=e.target;a.setState({masterPassword:t.value})},a.onButtonChange=function(e){a.setState({button:e})},a.checkCypher=function(e,t){var n=a.props,r=n.signInRequest,c=n.signInSuccess,s=n.signInError,i=n.dataLoaded;r(),"Invalid Password"!==e&&e?(c(t),i(e)):s(e),console.log(t),console.log("open data",e)},a.onSubmit=function(e){e.preventDefault();var t=a.state.masterPassword,n=a.props,r=n.signInRequest,c=n.signInSuccess,s=n.setFileName;switch(a.state.button){case"open":var i=v.getItem("Data"),o=null;i?(o=$(i,t),a.checkCypher(o,t)):a.upload();break;case"new":r(),c(t),s("New.txt"),console.log(t);break;case"generate":console.log("err file"),K.b.error("Select the file or create",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;default:console.log("default")}},a.upload=function(){a.dofileUpload.click()},a.openFile=function(e){var t=e.target.files[0],n="",r=new FileReader,c=function(e){var r=e.target.result;a.setState({fileContent:r}),n=t.name,a.props.setFileName(n),v.setItem("Data",r);var c=$(r,a.state.masterPassword);a.checkCypher(c,a.state.masterPassword)};c=c.bind(Object(W.a)(a)),r.onload=c,r.readAsText(t)},a.fileContent="",a.state={button:"new",masterPassword:"",isAuthorized:!1,fileContents:""},a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){window.onbeforeunload=function(e){v.removeItem("Data")}}},{key:"componentWillUnmount",value:function(){window.onbeforeunload=null}},{key:"render",value:function(){var e=this;return Object(Z.jsxs)("form",{className:"open",onSubmit:this.onSubmit,children:[Object(Z.jsx)(oe,{isFooter:!1}),Object(Z.jsx)(ae,{onButtonChange:this.onButtonChange,buttons:["open","new","generate"]}),Object(Z.jsx)("input",{type:"file",className:"hidden",multiple:!1,accept:".txt",onChange:function(t){return e.openFile(t)},ref:function(t){return e.dofileUpload=t}}),Object(Z.jsx)("div",{className:"open__pass-area",children:Object(Z.jsxs)("div",{className:"open__pass-field-wrap",children:[Object(Z.jsx)("input",{className:"open__pass-input",name:"password",type:"password",size:"30",autoComplete:"new-password",maxLength:"1024",placeholder:"Enter password",readOnly:"",tabIndex:"23",required:!0,onChange:this.onChange}),Object(Z.jsxs)("button",{className:"open__pass-enter-btn",tabIndex:"24",type:"submit",children:[Object(Z.jsx)("i",{className:"fa fa-level-down rotate-90 open__pass-enter-btn-icon-enter"}),Object(Z.jsx)("i",{className:"fa fa-fingerprint open__pass-enter-btn-icon-touch-id"})]})]})}),Object(Z.jsx)(K.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),n}(r.a.Component),de={signInRequest:function(){return{type:b}},signInSuccess:function(e){return{type:h,payload:e}},signInError:function(e){return{type:f,payload:e}},dataLoaded:function(e){return{type:k,payload:e}},dataRequested:V,openGenerator:q,closeGenerator:J,setFileName:Q},ue=Object(i.b)((function(e){return{isAuthorized:e.authorization.isAuthorized,loading:e.authorization.loading,error:e.authorization.error,data:e.dataList.data}}),de)(le),je=n(31),be=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},he=(n(278),{closeGenerator:J}),fe=Object(i.b)(null,he)((function(e){var t=e.closeGenerator,n=Object(a.useState)(""),r=Object(je.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(20),o=Object(je.a)(i,2),l=o[0],d=o[1],u=Object(a.useState)(!1),j=Object(je.a)(u,2),b=j[0],h=j[1],f=Object(a.useState)(!1),p=Object(je.a)(f,2),m=p[0],O=p[1],v=Object(a.useState)(!1),g=Object(je.a)(v,2),x=g[0],_=g[1],N=Object(a.useState)(!1),w=Object(je.a)(N,2),y=w[0],k=w[1],I=function(e){for(var t="",n=e.length,a=0;a<l;a++){var r=Math.round(Math.random()*n);t+=e.charAt(r)}return t},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?K.b.error(e,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):K.b.dark("Copied!",{position:"top-center",autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return Object(Z.jsx)("div",{className:"container",children:Object(Z.jsxs)("div",{className:"generator",children:[Object(Z.jsx)("div",{className:"generator__close",onClick:function(){return t()},children:"X"}),Object(Z.jsx)("h2",{className:"generator__header",children:"Password Generator"}),Object(Z.jsxs)("div",{className:"generator__password",children:[Object(Z.jsx)("div",{children:c}),Object(Z.jsx)("button",{onClick:function(e){""===c?C("Nothing To Copy",!0):(be(c),C("Password successfully copied to clipboard"))},className:"copy__btn",children:Object(Z.jsx)("i",{className:"fa fa-clipboard",children:" "})})]}),Object(Z.jsxs)("div",{className:"form-group",children:[Object(Z.jsx)("label",{htmlFor:"password-strength",children:"Password length"}),Object(Z.jsx)("input",{defaultValue:l,onChange:function(e){return d(e.target.value)},type:"number",id:"password-strength",name:"password-strength",max:"20",min:"10"})]}),Object(Z.jsxs)("div",{className:"form-group",children:[Object(Z.jsx)("span",{children:"Include Uppercase Letters"}),Object(Z.jsx)("input",{checked:b,onChange:function(e){return h(e.target.checked)},type:"checkbox",id:"uppercase-letters",name:"uppercase-letters"}),Object(Z.jsx)("label",{htmlFor:"uppercase-letters",children:" "})]}),Object(Z.jsxs)("div",{className:"form-group",children:[Object(Z.jsx)("span",{children:"Include Lowercase Letters"}),Object(Z.jsx)("input",{checked:m,onChange:function(e){return O(e.target.checked)},type:"checkbox",id:"lowercase-letters",name:"lowercase-letters"}),Object(Z.jsx)("label",{htmlFor:"lowercase-letters",children:" "})]}),Object(Z.jsxs)("div",{className:"form-group",children:[Object(Z.jsx)("span",{children:"Include Numbers"}),Object(Z.jsx)("input",{checked:x,onChange:function(e){return _(e.target.checked)},type:"checkbox",id:"include-numbers",name:"include-numbers"}),Object(Z.jsx)("label",{htmlFor:"include-numbers",children:" "})]}),Object(Z.jsxs)("div",{className:"form-group",children:[Object(Z.jsx)("span",{children:"Include Symbols"}),Object(Z.jsx)("input",{checked:y,onChange:function(e){return k(e.target.checked)},type:"checkbox",id:"include-symbols",name:"include-symbols"}),Object(Z.jsx)("label",{htmlFor:"include-symbols",children:" "})]}),Object(Z.jsx)("button",{onClick:function(e){b||m||x||y||C("You must Select at least one option",!0);var t="";m&&(t+="abcdefghijklmnopqrstuvwxyz"),b&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),x&&(t+="0123456789"),y&&(t+="!'^+%&/()=?_#$\xbd\xa7{[]}|;:>\xf7`<.*-@\xe9"),s(I(t))},className:"generator__btn",children:"Generate Password"}),Object(Z.jsx)(K.a,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})})),pe=(n(279),function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(e){var a;Object(m.a)(this,n),(a=t.call(this,e)).download=function(e){var t=a.props,n=t.data,r=t.masterPassword,c=t.dataRequested,s=t.userSignOut,i=function(e,t){return X.a.AES.encrypt(JSON.stringify(e),"Encrypt Password ".concat(t)).toString()}(n,r),o=new Blob([i]),l=URL.createObjectURL(o);a.setState({fileDownloadUrl:l},(function(){a.dofileDownload.click(),URL.revokeObjectURL(l),a.setState({fileDownloadUrl:""}),e&&(s(),c())}))},a.logOut=function(){window.confirm("Do you want to save this file?")?a.download(!0):a.props.userSignOut()};return a.state={fileType:"txt",fileDownloadUrl:null,status:"",isSave:a.props.isSave},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:"footer__btn footer__btn-lock",id:"footer__btn-lock","data-title":"Lock",onClick:function(){return e.download(!1)},title:"Save",children:Object(Z.jsx)("i",{className:"fa fa-save"})}),Object(Z.jsx)("a",{className:"hidden",download:this.props.fileName,href:this.state.fileDownloadUrl,ref:function(t){return e.dofileDownload=t},children:"download it"}),Object(Z.jsx)("div",{className:"footer__btn",title:"Log out",onClick:this.logOut,children:Object(Z.jsx)("i",{className:"fa fa-sign-out"})})]})}}]),n}(r.a.Component)),me={dataRequested:V,userSignOut:function(){return{type:p}}},Oe=Object(i.b)((function(e){return{data:e.dataList.data,masterPassword:e.authorization.masterPassword,fileName:e.file.fileName,isSave:e.file.isSave}}),me)(pe),ve=(n(280),{openGenerator:q,setFileName:Q}),ge=Object(i.b)((function(e){return{fileName:e.file.fileName}}),ve)((function(e){var t=e.openGenerator,n=e.setFileName,a=e.fileName;return Object(Z.jsx)("div",{className:"app__footer",children:Object(Z.jsxs)("div",{className:"footer",children:[Object(Z.jsx)("div",{className:"footer__btn-wrapper",children:Object(Z.jsx)(oe,{isFooter:!0})}),Object(Z.jsx)("input",{id:"fileName",name:"fileName",type:"text",autoComplete:"off",value:a.split(".")[0],onChange:function(e){return n("".concat(e.target.value,".txt"))}}),Object(Z.jsxs)("div",{className:"footer__btn-wrapper",children:[Object(Z.jsx)("div",{className:"footer__btn footer__btn-generate",id:"footer__btn-generate",title:"Generator",onClick:function(){return t()},children:Object(Z.jsx)(re.a,{icon:ce.a})}),Object(Z.jsx)(Oe,{})]})]})})})),xe=(n(281),{searchData:function(e){return{type:C,payload:{searchText:e}}},createItem:function(){return{type:E}}}),_e=Object(i.b)((function(e){return{searchText:e.dataList.searchText}}),xe)((function(e){var t=e.searchData,n=e.searchText,a=e.createItem;return Object(Z.jsx)("div",{className:"list__header",children:Object(Z.jsx)("div",{className:"list__search show",children:Object(Z.jsxs)("div",{className:"list__search-header",children:[Object(Z.jsxs)("div",{className:"list__search-field-wrap",children:[Object(Z.jsx)("input",{type:"text",className:"list__search-field input-search",autoComplete:"off",spellCheck:"false",value:n,onChange:function(e){var n=e.target.value;t(n)}}),Object(Z.jsx)("div",{className:"list__search-icon-search","data-title":"Toggle advanced search",children:Object(Z.jsx)("i",{className:"fa fa-search",children:" "})})]}),Object(Z.jsx)("div",{className:"list__search-btn-new ","data-title":"Add New",onClick:function(){return a()},children:Object(Z.jsx)("i",{className:"fa fa-plus",children:" "})})]})})})})),Ne=(n(282),function(e){var t=e.item,n=t.title,a=t.user;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("i",{className:"fa fa-key list__item-icon",children:" "}),Object(Z.jsx)("span",{className:"list__item-title",children:n}),Object(Z.jsx)("span",{className:"list__item-descr thin",children:a})]})}),we=(n(283),function(e){var t=e.items,n=e.onView,a=e.activeItemId,r=function(e,t){return e===t?"list__item list__item--active":"list__item"};return Object(Z.jsx)("div",{className:"list__list list__items-container",children:t.map((function(e){return Object(Z.jsx)("div",{className:r(e.id,a),onClick:function(){return function(e,t,n){switch(t){case e:break;default:return n(e)}}(e.id,a,n)},children:Object(Z.jsx)(Ne,{item:e,activeItemId:a})},e.id)}))})}),ye=function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"search",value:function(e,t){return 0===t?e:e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.searchText,a=e.viewDetails,r=e.activeItemId,c=this.search(t,n);if(t.length>=0)return Object(Z.jsx)(we,{onView:function(e){return a(e)},activeItemId:r,items:c})}}]),n}(r.a.Component),ke={viewDetails:function(e){return{type:S,payload:{activeItemId:e}}}},Ie=Object(i.b)((function(e){return{data:e.dataList.data,searchText:e.dataList.searchText,activeItemId:e.dataList.activeItemId}}),ke)(ye),Ce=n(55),Se=(n(284),function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleInputChange=function(t){var n=t.target,a=n.value,r=n.name;e.props.changeItem(Object(Ce.a)({},r,a))},e.copyInformation=function(e){be(e),K.b.dark("Copied!",{position:"top-right",autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.fileName,r=t.removeItem,c=t.emptyBlock,s=t.activeItemId,i=n[A(n,s)];if(n.length>0){var o=i.title,l=i.user,d=i.password,u=i.website,j=i.notes,b=i.tags,h=i.group,f=i.created,p=i.updated,m=i.id,O={user:l,password:d,website:u,notes:j,tags:b,group:h},v={group:h,created:f,updated:p},g=Object.keys(O),x=Object.keys(v);return Object(Z.jsxs)("div",{className:"details",children:[Object(Z.jsxs)("div",{className:"details__header",children:[Object(Z.jsx)("i",{className:"details__header-color fa fa-bookmark-o",children:" "}),Object(Z.jsx)("input",{name:"title",className:"details__header-title",type:"text",autoComplete:"off",value:o,onChange:this.handleInputChange}),Object(Z.jsx)("i",{className:"details__header-icon fa fa-key",children:" "})]}),Object(Z.jsxs)("div",{className:"details__body",children:[Object(Z.jsx)("div",{className:"details__body-fields",children:g.map((function(t){return Object(Z.jsxs)("div",{className:"details__field",children:[Object(Z.jsx)("div",{className:"details__field-label",onClick:function(){return e.copyInformation(O[t])},children:t}),Object(Z.jsx)("input",{className:"details__field-value",name:t,type:"text",autoComplete:"off",value:O[t],onChange:e.handleInputChange})]},t)}))}),Object(Z.jsxs)("div",{className:"details__body-aside",children:[Object(Z.jsxs)("div",{className:"details__field",children:[Object(Z.jsx)("div",{className:"details__field-label",children:"file"}),Object(Z.jsx)("div",{className:"details__field-value",children:a.split(".")[0]})]}),x.map((function(e){return Object(Z.jsxs)("div",{className:"details__field",children:[Object(Z.jsx)("div",{className:"details__field-label",children:e}),Object(Z.jsx)("div",{className:"details__field-value",children:v[e]})]},e)}))]})]}),Object(Z.jsx)("div",{className:"details__buttons",children:Object(Z.jsx)("i",{className:"details__buttons-trash fa fa-trash",title:"Delete",onClick:function(){return r(m)},children:" "})}),Object(Z.jsx)(K.a,{position:"top-right",autoClose:1e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}return c}}]),n}(r.a.Component)),Ee={removeItem:function(e){return{type:T,payload:e}},changeItem:function(e){return{type:D,payload:e}}},Te=Object(i.b)((function(e){return{data:e.dataList.data,activeItemId:e.dataList.activeItemId,fileName:e.file.fileName}}),Ee)(Se),De=(n(285),function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){window.onbeforeunload=function(e){return v.removeItem("Data"),window.confirm("Confirm refresh")}}},{key:"componentWillUnmount",value:function(){window.onbeforeunload=null}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.activeItemId;return Object(Z.jsxs)("div",{className:"app-list-wrap",children:[Object(Z.jsx)("div",{className:"app__list",children:Object(Z.jsxs)("div",{className:"list",children:[Object(Z.jsx)(_e,{}),Object(Z.jsx)("div",{className:"list__items","data-baron-v-id":"2",children:t.length?Object(Z.jsx)(Ie,{}):Ae()})]})}),Object(Z.jsx)("div",{className:"app__details",children:n?Object(Z.jsx)(Te,{emptyBlock:Le()}):Le()})]})}}]),n}(r.a.Component)),Ae=function(){return Object(Z.jsxs)("div",{className:"empty-block muted-color",children:[Object(Z.jsx)("div",{className:"empty-block__icon",children:Object(Z.jsx)("i",{className:"fa fa-key"})}),Object(Z.jsx)("h1",{className:"empty-block__title",children:"Empty"}),Object(Z.jsxs)("p",{className:"empty-block__text",children:["add with ",Object(Z.jsx)(re.a,{icon:ce.c})," button above"]})]})},Le=function(){return Object(Z.jsx)("div",{className:"empty-block muted-color",children:Object(Z.jsx)("h1",{className:"empty-block__title",children:"Your passwords will be displayed here"})})},Fe=Object(i.b)((function(e){return{data:e.dataList.data,activeItemId:e.dataList.activeItemId}}))(De),Pe=(n(286),function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.isDark;document.body.className=e?"th-dark":"th-light"}},{key:"render",value:function(){var e=this.props,t=e.isAuthorized,n=e.isOpen;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("div",{className:"app__body",children:[n?Object(Z.jsx)(fe,{}):null,t?Object(Z.jsx)(Fe,{}):Object(Z.jsx)(ue,{})]}),t?Object(Z.jsx)(ge,{}):null]})}}]),n}(r.a.Component)),Re=Object(i.b)((function(e){return{isAuthorized:e.authorization.isAuthorized,isOpen:e.generator.isOpen,isDark:e.settings.isDark}}))(Pe);n(287),n(288),n(289);s.a.render(Object(Z.jsx)(i.a,{store:z,children:Object(Z.jsx)(Re,{})}),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("/PasswordManager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/PasswordManager","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[290,1,2]]]);
//# sourceMappingURL=main.2f077144.chunk.js.map