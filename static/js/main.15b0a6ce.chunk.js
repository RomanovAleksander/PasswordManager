(this["webpackJsonppassword-manager"]=this["webpackJsonppassword-manager"]||[]).push([[0],{145:function(e,t,a){},154:function(e,t){},156:function(e,t){},166:function(e,t){},168:function(e,t){},195:function(e,t){},197:function(e,t){},198:function(e,t){},203:function(e,t){},205:function(e,t){},211:function(e,t){},213:function(e,t){},232:function(e,t){},244:function(e,t){},247:function(e,t){},274:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(18),c=a.n(i),r=(a(145),a(6)),o=a(9),l=a(10),d=a(13),u=a(12),j=a(51),b="SIGN_IN_REQUEST",f="SIGN_IN_SUCCESS",h="SIGN_IN_FAILURE",p="SIGN_OUT",m="OPEN_GENERATOR",O="CLOSE_GENERATOR",v=function(){return{type:m}},_=function(){return{type:O}},g="FETCH_DATA_REQUEST",x="FETCH_DATA_SUCCESS",N="FETCH_DATA_FAILURE",w="SEARCH_DATA",y="VIEW_DETAILS",C="CREATE_ITEM",I="REMOVE_ITEM",k="CHANGE_ITEM",S=function(){return{type:g}},E="SET_FILENAME",T=function(e){return{type:E,payload:e}},A=a(44),L=a.n(A),P=function(e,t){var a,n=L.a.AES.decrypt(e,t);try{a=n.toString(L.a.enc.Utf8)}catch(s){a=!1}return a?JSON.parse(n.toString(L.a.enc.Utf8)):"Invalid Password"},F=a(19),U=new(function(){function e(){return Object(o.a)(this,e),e.instance?e.instance:(e.instance=this,this)}return Object(l.a)(e,[{key:"getItem",value:function(e){return JSON.parse(localStorage.getItem("".concat(e)))}},{key:"setItem",value:function(e,t){return localStorage.setItem("".concat(e),JSON.stringify(t))}}]),e}()),R=a(0),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).selectButton=function(e){n.setState({active:e.target.id}),n.props.changeButton(e)},n.state={active:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.button,a=function(e){return"open"===e?"fa-lock":"new"===e?"fa-plus":"generate"===e?"fa-bolt":void 0};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("input",{id:t,type:"radio",value:t,name:"category",onChange:this.selectButton,required:!0}),"generate"===t?Object(R.jsxs)("label",{className:"",onClick:function(){return e.props.openGenerator()},children:[Object(R.jsx)("i",{className:"fa ".concat(a(t)," open__icon-i"),children:" "}),Object(R.jsx)("div",{className:"open__icon-text",children:t})]}):Object(R.jsxs)("label",{className:"",htmlFor:t,children:[Object(R.jsx)("i",{className:"fa ".concat(a(t)," open__icon-i"),children:" "}),Object(R.jsx)("div",{className:"open__icon-text",children:t})]})]})}}]),a}(s.a.Component),B={openGenerator:v},G=Object(r.b)(null,B)(D),z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=e.props.onButtonChange,n=t.target.value;e.setState({button:n}),a(n)},e.state={button:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.buttons;return Object(R.jsx)("div",{className:"open__icons",children:t.map((function(t){return Object(R.jsx)("div",{className:"open__icon open__icon-open",children:Object(R.jsx)(G,{button:t,changeButton:e.handleChange},t)},t)}))})}}]),a}(s.a.Component),W=(a(82),a(274),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target;n.setState({masterPassword:t.value})},n.onButtonChange=function(e){n.setState({button:e})},n.checkCypher=function(e,t){var a=n.props,s=a.signInRequest,i=a.signInSuccess,c=a.signInError,r=a.dataLoaded;s(),"Invalid Password"!==e&&e?(i(t),r(e)):c(e),console.log(t),console.log("open data",e)},n.onSubmit=function(e){e.preventDefault();var t=n.state.masterPassword,a=n.props,s=a.signInRequest,i=a.signInSuccess,c=a.setFileName;switch(n.state.button){case"open":var r=U.getItem("Data"),o=null;r?(o=P(r,t),n.checkCypher(o,t)):n.upload();break;case"new":s(),i(t),c("New.txt"),console.log(t);break;case"generate":console.log("err file"),F.b.error("Select the file or create",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;default:console.log("default")}},n.upload=function(){n.dofileUpload.click()},n.openFile=function(e){var t=e.target.files[0],a="",s=new FileReader,i=function(e){var s=e.target.result;n.setState({fileContent:s}),a=t.name,n.props.setFileName(a),U.setItem("Data",s);var i=P(s,n.state.masterPassword);n.checkCypher(i,n.state.masterPassword)};i=i.bind(Object(j.a)(n)),s.onload=i,s.readAsText(t)},n.fileContent="",n.state={button:"new",masterPassword:"",isAuthorized:!1,fileContents:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.onbeforeunload=function(e){localStorage.clear()}}},{key:"componentWillUnmount",value:function(){window.onbeforeunload=null}},{key:"render",value:function(){var e=this;return Object(R.jsxs)("form",{className:"open",onSubmit:this.onSubmit,children:[Object(R.jsx)(z,{onButtonChange:this.onButtonChange,buttons:["open","new","generate"]}),Object(R.jsx)("input",{type:"file",className:"hidden",multiple:!1,accept:".txt",onChange:function(t){return e.openFile(t)},ref:function(t){return e.dofileUpload=t}}),Object(R.jsx)("div",{className:"open__pass-area",children:Object(R.jsxs)("div",{className:"open__pass-field-wrap",children:[Object(R.jsx)("input",{className:"open__pass-input",name:"password",type:"password",size:"30",autoComplete:"new-password",maxLength:"1024",placeholder:"Enter password",readOnly:"",tabIndex:"23",required:!0,onChange:this.onChange}),Object(R.jsxs)("button",{className:"open__pass-enter-btn",tabIndex:"24",type:"submit",children:[Object(R.jsx)("i",{className:"fa fa-level-down rotate-90 open__pass-enter-btn-icon-enter"}),Object(R.jsx)("i",{className:"fa fa-fingerprint open__pass-enter-btn-icon-touch-id"})]})]})}),Object(R.jsx)(F.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),a}(s.a.Component)),H={signInRequest:function(){return{type:b}},signInSuccess:function(e){return{type:f,payload:e}},signInError:function(e){return{type:h,payload:e}},dataLoaded:function(e){return{type:x,payload:e}},dataRequested:S,openGenerator:v,closeGenerator:_,setFileName:T},M=Object(r.b)((function(e){return{isAuthorized:e.authorization.isAuthorized,loading:e.authorization.loading,error:e.authorization.error,data:e.dataList.data}}),H)(W),q=a(28),J=function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},V=(a(275),{closeGenerator:_}),Q=Object(r.b)(null,V)((function(e){var t=e.closeGenerator,a=Object(n.useState)(""),s=Object(q.a)(a,2),i=s[0],c=s[1],r=Object(n.useState)(20),o=Object(q.a)(r,2),l=o[0],d=o[1],u=Object(n.useState)(!1),j=Object(q.a)(u,2),b=j[0],f=j[1],h=Object(n.useState)(!1),p=Object(q.a)(h,2),m=p[0],O=p[1],v=Object(n.useState)(!1),_=Object(q.a)(v,2),g=_[0],x=_[1],N=Object(n.useState)(!1),w=Object(q.a)(N,2),y=w[0],C=w[1],I=function(e){for(var t="",a=e.length,n=0;n<l;n++){var s=Math.round(Math.random()*a);t+=e.charAt(s)}return t},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?F.b.error(e,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):F.b.success(e,{position:"top-center",autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"generator",children:[Object(R.jsx)("div",{className:"generator__close",onClick:function(){return t()},children:"X"}),Object(R.jsx)("h2",{className:"generator__header",children:"Password Generator"}),Object(R.jsxs)("div",{className:"generator__password",children:[Object(R.jsx)("div",{children:i}),Object(R.jsx)("button",{onClick:function(e){""===i?k("Nothing To Copy",!0):(J(i),k("Password successfully copied to clipboard"))},className:"copy__btn",children:Object(R.jsx)("i",{className:"fa fa-clipboard",children:" "})})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("label",{htmlFor:"password-strength",children:"Password length"}),Object(R.jsx)("input",{defaultValue:l,onChange:function(e){return d(e.target.value)},type:"number",id:"password-strength",name:"password-strength",max:"20",min:"10"})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("span",{children:"Include Uppercase Letters"}),Object(R.jsx)("input",{checked:b,onChange:function(e){return f(e.target.checked)},type:"checkbox",id:"uppercase-letters",name:"uppercase-letters"}),Object(R.jsx)("label",{htmlFor:"uppercase-letters",children:" "})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("span",{children:"Include Lowercase Letters"}),Object(R.jsx)("input",{checked:m,onChange:function(e){return O(e.target.checked)},type:"checkbox",id:"lowercase-letters",name:"lowercase-letters"}),Object(R.jsx)("label",{htmlFor:"lowercase-letters",children:" "})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("span",{children:"Include Numbers"}),Object(R.jsx)("input",{checked:g,onChange:function(e){return x(e.target.checked)},type:"checkbox",id:"include-numbers",name:"include-numbers"}),Object(R.jsx)("label",{htmlFor:"include-numbers",children:" "})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("span",{children:"Include Symbols"}),Object(R.jsx)("input",{checked:y,onChange:function(e){return C(e.target.checked)},type:"checkbox",id:"include-symbols",name:"include-symbols"}),Object(R.jsx)("label",{htmlFor:"include-symbols",children:" "})]}),Object(R.jsx)("button",{onClick:function(e){b||m||g||y||k("You must Select at least one option",!0);var t="";m&&(t+="abcdefghijklmnopqrstuvwxyz"),b&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),g&&(t+="0123456789"),y&&(t+="!'^+%&/()=?_#$\xbd\xa7{[]}|;:>\xf7`<.*-@\xe9"),c(I(t))},className:"generator__btn",children:"Generate Password"}),Object(R.jsx)(F.a,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})})),Y=(a(276),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).download=function(e){var t=n.props,a=t.data,s=t.masterPassword,i=t.dataRequested,c=t.userSignOut,r=function(e,t){return L.a.AES.encrypt(JSON.stringify(e),t).toString()}(a,s),o=new Blob([r]),l=URL.createObjectURL(o);n.setState({fileDownloadUrl:l},(function(){n.dofileDownload.click(),URL.revokeObjectURL(l),n.setState({fileDownloadUrl:""}),e&&(c(),i())}))},n.logOut=function(){window.confirm("Do you want to save this file?")?n.download(!0):n.props.userSignOut()};return n.state={fileType:"txt",fileDownloadUrl:null,status:"",isSave:n.props.isSave},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"footer__btn footer__btn-lock",id:"footer__btn-lock","data-title":"Lock",onClick:function(){return e.download(!1)},title:"Save",children:Object(R.jsx)("i",{className:"fa fa-save"})}),Object(R.jsx)("a",{className:"hidden",download:this.props.fileName,href:this.state.fileDownloadUrl,ref:function(t){return e.dofileDownload=t},children:"download it"}),Object(R.jsx)("div",{className:"footer__btn",title:"Log out",onClick:this.logOut,children:Object(R.jsx)("i",{className:"fa fa-sign-out"})})]})}}]),a}(s.a.Component)),X={dataRequested:S,userSignOut:function(){return{type:p}}},$=Object(r.b)((function(e){return{data:e.dataList.data,masterPassword:e.authorization.masterPassword,fileName:e.file.fileName,isSave:e.file.isSave}}),X)(Y),K=(a(277),{openGenerator:v,setFileName:T}),Z=Object(r.b)((function(e){return{fileName:e.file.fileName}}),K)((function(e){var t=e.openGenerator,a=e.setFileName,n=e.fileName;return Object(R.jsx)("div",{className:"app__footer",children:Object(R.jsxs)("div",{className:"footer",children:[Object(R.jsx)("div",{className:"change-lng",children:" "}),Object(R.jsx)("input",{id:"fileName",name:"fileName",type:"text",autoComplete:"off",value:n.split(".")[0],onChange:function(e){return a("".concat(e.target.value,".txt"))}}),Object(R.jsxs)("div",{className:"footer__btn-wrapper",children:[Object(R.jsx)("div",{className:"footer__btn footer__btn-generate",id:"footer__btn-generate",title:"Generator",onClick:function(){return t()},children:Object(R.jsx)("i",{className:"fa fa-bolt",children:" "})}),Object(R.jsx)($,{})]})]})})})),ee=(a(278),{searchData:function(e){return{type:w,payload:{searchText:e}}},createItem:function(){return{type:C}}}),te=Object(r.b)((function(e){return{searchText:e.dataList.searchText}}),ee)((function(e){var t=e.searchData,a=e.searchText,n=e.createItem;return Object(R.jsx)("div",{className:"list__header",children:Object(R.jsx)("div",{className:"list__search show",children:Object(R.jsxs)("div",{className:"list__search-header",children:[Object(R.jsxs)("div",{className:"list__search-field-wrap",children:[Object(R.jsx)("input",{type:"text",className:"list__search-field input-search",autoComplete:"off",spellCheck:"false",value:a,onChange:function(e){var a=e.target.value;t(a)}}),Object(R.jsx)("div",{className:"list__search-icon-search","data-title":"Toggle advanced search",children:Object(R.jsx)("i",{className:"fa fa-search",children:" "})})]}),Object(R.jsx)("div",{className:"list__search-btn-new ","data-title":"Add New",onClick:function(){return n()},children:Object(R.jsx)("i",{className:"fa fa-plus",children:" "})})]})})})})),ae=(a(279),function(e){var t=e.item,a=t.title,n=t.user;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("i",{className:"fa fa-key list__item-icon",children:" "}),Object(R.jsx)("span",{className:"list__item-title",children:a}),Object(R.jsx)("span",{className:"list__item-descr thin",children:n})]})}),ne=(a(280),function(e){var t=e.items,a=e.onView,n=e.activeItemId,s=function(e,t){return e===t?"list__item list__item--active":"list__item"};return Object(R.jsx)("div",{className:"list__list list__items-container",children:t.map((function(e){return Object(R.jsx)("div",{className:s(e.id,n),onClick:function(){return function(e,t,a){switch(t){case e:break;default:return a(e)}}(e.id,n,a)},children:Object(R.jsx)(ae,{item:e,activeItemId:n})},e.id)}))})}),se=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"search",value:function(e,t){return 0===t?e:e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.searchText,n=e.viewDetails,s=e.activeItemId,i=this.search(t,a);if(t.length>=0)return Object(R.jsx)(ne,{onView:function(e){return n(e)},activeItemId:s,items:i})}}]),a}(s.a.Component),ie={viewDetails:function(e){return{type:y,payload:{activeItemId:e}}}},ce=Object(r.b)((function(e){return{data:e.dataList.data,searchText:e.dataList.searchText,activeItemId:e.dataList.activeItemId}}),ie)(se),re=a(53),oe=(a(281),function(e,t){return e.findIndex((function(e){return e.id===t}))}),le=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleInputChange=function(t){var a=t.target,n=a.value,s=a.name;e.props.changeItem(Object(re.a)({},s,n))},e.copyInformation=function(e){J(e),F.b.dark("Copied!",{position:"top-right",autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.removeItem,s=t.emptyBlock,i=t.activeItemId,c=a[oe(a,i)];if(a.length>0){var r=c.title,o=c.user,l=c.password,d=c.website,u=c.notes,j=c.tags,b=c.group,f=c.created,h=c.updated,p=c.file,m=c.id;return Object(R.jsxs)("div",{className:"details",children:[Object(R.jsxs)("div",{className:"details__header",children:[Object(R.jsx)("i",{className:"details__header-color fa fa-bookmark-o",children:" "}),Object(R.jsx)("input",{name:"title",className:"details__header-title",type:"text",autoComplete:"off",value:r,onChange:this.handleInputChange}),Object(R.jsx)("i",{className:"details__header-icon fa fa-key",children:" "})]}),Object(R.jsxs)("div",{className:"details__body",children:[Object(R.jsxs)("div",{className:"details__body-fields",children:[Object(R.jsxs)("div",{className:"details__field details__field--editable details__field--options",children:[Object(R.jsx)("div",{className:"details__field-label",onClick:function(){return e.copyInformation(o)},children:"User"}),Object(R.jsx)("input",{className:"details__field-value",name:"user",type:"text",autoComplete:"off",value:o,onChange:this.handleInputChange})]}),Object(R.jsxs)("div",{className:"details__field details__field--editable details__field--can-gen details__field--protect details__field--options",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Password"}),Object(R.jsx)("input",{className:"details__field-value",name:"password",type:"text",autoComplete:"off",value:l,onChange:this.handleInputChange})]}),Object(R.jsxs)("div",{className:"details__field details__field--url details__field--editable details__field--options",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Website"}),Object(R.jsx)("input",{className:"details__field-value",name:"website",type:"text",autoComplete:"off",value:d,onChange:this.handleInputChange})]}),Object(R.jsxs)("div",{className:"details__field details__field--editable details__field--multiline",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Notes"}),Object(R.jsx)("input",{className:"details__field-value",name:"notes",type:"text",autoComplete:"off",value:u,onChange:this.handleInputChange})]}),Object(R.jsxs)("div",{className:"details__field details__field--editable",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Tags"}),Object(R.jsx)("input",{className:"details__field-value",name:"tags",type:"text",autoComplete:"off",value:j,onChange:this.handleInputChange})]}),Object(R.jsxs)("div",{className:"details__field details__field--editable",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Group"}),Object(R.jsx)("input",{className:"details__field-value",name:"group",type:"text",autoComplete:"off",value:b,onChange:this.handleInputChange})]})]}),Object(R.jsxs)("div",{className:"details__body-aside",children:[Object(R.jsxs)("div",{className:"details__field",children:[Object(R.jsx)("div",{className:"details__field-label",children:"File"}),Object(R.jsx)("div",{className:"details__field-value",children:p})]}),Object(R.jsxs)("div",{className:"details__field",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Group"}),Object(R.jsx)("div",{className:"details__field-value",children:b})]}),Object(R.jsxs)("div",{className:"details__field",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Created"}),Object(R.jsx)("div",{className:"details__field-value",children:f})]}),Object(R.jsxs)("div",{className:"details__field",children:[Object(R.jsx)("div",{className:"details__field-label",children:"Updated"}),Object(R.jsx)("div",{className:"details__field-value",children:h})]})]})]}),Object(R.jsx)("div",{className:"details__buttons",children:Object(R.jsx)("i",{className:"details__buttons-trash fa fa-trash",title:"Delete",onClick:function(){return n(m)},children:" "})}),Object(R.jsx)(F.a,{position:"top-right",autoClose:1e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}return s}}]),a}(s.a.Component),de={removeItem:function(e){return{type:I,payload:e}},changeItem:function(e){return{type:k,payload:e}}},ue=Object(r.b)((function(e){return{data:e.dataList.data,activeItemId:e.dataList.activeItemId}}),de)(le),je=(a(282),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.onbeforeunload=function(e){return window.confirm("Confirm refresh")}}},{key:"componentWillUnmount",value:function(){window.onbeforeunload=null}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.activeItemId;return Object(R.jsxs)("div",{className:"app-list-wrap",children:[Object(R.jsx)("div",{className:"app__list",children:Object(R.jsxs)("div",{className:"list",children:[Object(R.jsx)(te,{}),Object(R.jsx)("div",{className:"list__items","data-baron-v-id":"2",children:t.length?Object(R.jsx)(ce,{}):be()})]})}),Object(R.jsx)("div",{className:"app__details",children:a?Object(R.jsx)(ue,{emptyBlock:fe()}):fe()})]})}}]),a}(s.a.Component)),be=function(){return Object(R.jsxs)("div",{className:"empty-block muted-color",children:[Object(R.jsx)("div",{className:"empty-block__icon",children:Object(R.jsx)("i",{className:"fa fa-key"})}),Object(R.jsx)("h1",{className:"empty-block__title",children:"Empty"}),Object(R.jsxs)("p",{className:"empty-block__text",children:["add with ",Object(R.jsx)("i",{className:"fa fa-plus"})," button above"]})]})},fe=function(){return Object(R.jsx)("div",{className:"empty-block muted-color",children:Object(R.jsx)("h1",{className:"empty-block__title",children:"Your passwords will be displayed here"})})},he=Object(r.b)((function(e){return{data:e.dataList.data,activeItemId:e.dataList.activeItemId}}))(je),pe=(a(283),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isAuthorized,a=e.isOpen;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"app__body",children:[a?Object(R.jsx)(Q,{}):null,t?Object(R.jsx)(he,{}):Object(R.jsx)(M,{})]}),t?Object(R.jsx)(Z,{}):null]})}}]),a}(s.a.Component)),me=Object(r.b)((function(e){return{isAuthorized:e.authorization.isAuthorized,isOpen:e.generator.isOpen}}))(pe),Oe=(a(284),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _e=a(42),ge=a(140),xe=a(4),Ne={masterPassword:null,isAuthorized:!1,loading:!1,error:null},we={isOpen:!1},ye=a(54),Ce={data:[],activeItemId:null,searchText:"",loading:!0,error:null},Ie={fileName:"",isSave:!1},ke=Object(_e.combineReducers)({authorization:function(e,t){if(void 0===e)return Ne;var a=t.type,n=t.payload;switch(a){case b:return Object(xe.a)(Object(xe.a)({},e),{},{loading:!0,error:null});case f:return Object(xe.a)(Object(xe.a)({},e),{},{masterPassword:n,isAuthorized:!0,loading:!1,error:null});case h:return Object(xe.a)(Object(xe.a)({},Ne),{},{error:n});case p:return localStorage.clear(),Object(xe.a)({},Ne);default:return e}},generator:function(e,t){if(void 0===e)return we;switch(t.type){case m:return Object(xe.a)(Object(xe.a)({},e),{},{isOpen:!0});case O:return Object(xe.a)(Object(xe.a)({},e),{},{isOpen:!1});default:return e}},dataList:function(e,t){if(void 0===e)return Ce;var a=t.type,n=t.payload;switch(a){case g:return Object(xe.a)(Object(xe.a)({},e),{},{data:[],loading:!0,error:null});case x:return Object(xe.a)(Object(xe.a)({},e),{},{data:n,booksQuantity:n.length,loading:!1,error:null});case N:return Object(xe.a)(Object(xe.a)({},e),{},{data:[],loading:!1,error:n});case w:return Object(xe.a)(Object(xe.a)({},e),{},{searchText:n.searchText});case y:return Object(xe.a)(Object(xe.a)({},e),{},{activeItemId:n.activeItemId});case I:var s=e.data.filter((function(e){return e.id!==n}));return Object(xe.a)(Object(xe.a)({},e),{},{data:s,activeItemId:0===s.length?null:s[0].id});case C:var i={title:"(no title)",id:Date.now()+Math.random(),user:"-",password:"",website:"",notes:"",tags:"",group:"",created:"",updated:"",file:""};return Object(xe.a)(Object(xe.a)({},e),{},{data:[i].concat(Object(ye.a)(e.data)),activeItemId:i.id});case k:var c=oe(e.data,e.activeItemId),r=[].concat(Object(ye.a)(e.data.slice(0,c)),[Object(xe.a)(Object(xe.a)({},e.data[c]),n)],Object(ye.a)(e.data.slice(c+1)));return Object(xe.a)(Object(xe.a)({},e),{},{data:r});default:return e}},file:function(e,t){if(void 0===e)return Ie;var a=t.type,n=t.payload;switch(a){case E:return Object(xe.a)(Object(xe.a)({},e),{},{fileName:n});default:return e}}}),Se=Object(_e.createStore)(ke,Object(ge.composeWithDevTools)());c.a.render(Object(R.jsx)(r.a,{store:Se,children:Object(R.jsx)(me,{})}),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("/PasswordManager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/PasswordManager","/service-worker.js");Oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(t,e)}))}}()}},[[285,1,2]]]);
//# sourceMappingURL=main.15b0a6ce.chunk.js.map