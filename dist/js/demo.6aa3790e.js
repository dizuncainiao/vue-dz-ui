(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo"],{"1dde":function(e,t,c){var o=c("d039"),n=c("b622"),a=c("2d00"),l=n("species");e.exports=function(e){return a>=51||!o((function(){var t=[],c=t.constructor={};return c[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,c){var o=c("861d"),n=c("e8b5"),a=c("b622"),l=a("species");e.exports=function(e,t){var c;return n(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?o(c)&&(c=c[l],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},"680c":function(e,t,c){"use strict";c.r(t);var o=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"demo ovh"},[c("d-section",{attrs:{title:"Buttons"}},[c("d-button",{staticClass:"cta",attrs:{title:"CTA"},on:{click:e.clickBtn}},[e._v(" CTA ")]),c("d-button",{staticClass:"primary",attrs:{title:"Primary"},on:{click:e.clickBtn}},[e._v(" PRIMARY ")]),c("d-button",{staticClass:"secondary",attrs:{title:"Secondary"},on:{click:e.clickBtn}},[e._v(" SECONDARY ")]),c("d-button",{staticClass:"inactive",attrs:{title:"Secondary"},on:{click:e.clickBtn}},[e._v(" SECONDARY Inactive ")])],1),c("d-section",{attrs:{title:"Input"}},[c("d-input",{attrs:{placeholder:"USERNAME",validator:e.validatorUser},on:{focus:e.focusHandler,input:e.getVal},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),c("div",[e._v("USERNAME : "+e._s(e.user))]),c("d-input",{attrs:{placeholder:"PASSWORD",type:"password",validator:e.validatorPwd},on:{pressEnter:e.pressEnter,blur:e.blurHandler},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),c("div",[e._v("PASSWORD : "+e._s(e.password))]),c("d-input",{attrs:{placeholder:"READONLY",value:"readonly",readonly:!0}}),c("d-input",{attrs:{placeholder:"DISABLED",value:"disabled",disabled:!0}})],1),c("d-section",{attrs:{title:"Async check"}},[c("d-form",[c("d-input",{ref:"userInput",attrs:{placeholder:"ACCOUNT",validator:e.validatorFormUser},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}}),c("div",{staticClass:"btn-box",staticStyle:{"text-align":"right"}},[c("d-button",{staticClass:"cta",on:{click:e.asyncCheck}},[e._v("Submit")])],1)],1)],1),c("d-section",{attrs:{title:"Checkbox"}},[c("d-checkbox",{on:{change:e.checkboxChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(" Checked it out ")]),c("div",[e._v("checked : "+e._s(e.checked))]),c("d-checkbox",{model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v(" Checked it out ")]),c("div",[e._v("checked : "+e._s(e.checked2))]),c("d-checkbox",{attrs:{disabled:""}},[e._v(" Disabled ")])],1),c("d-section",{attrs:{title:"Radio"}},[c("d-radio",{attrs:{value:"Radio"},model:{value:e.checked3,callback:function(t){e.checked3=t},expression:"checked3"}},[e._v(" Radio ")]),c("d-radio",{attrs:{value:"Radio2"},model:{value:e.checked3,callback:function(t){e.checked3=t},expression:"checked3"}},[e._v(" Radio2 ")]),c("div",[e._v("checked : "+e._s(e.checked3))])],1),c("d-section",{attrs:{title:"Select"}},[c("d-select",{attrs:{placeholder:"Dropdown",options:e.options},on:{openChange:e.openChange},model:{value:e.checked4,callback:function(t){e.checked4=t},expression:"checked4"}}),c("div",[e._v("selected : "+e._s(e.checked4))])],1),c("d-section",{attrs:{title:"Select"}},[c("d-select",{attrs:{placeholder:"Dropdown",options:e.options},on:{openChange:e.openChange},model:{value:e.checked5,callback:function(t){e.checked5=t},expression:"checked5"}}),c("div",[e._v("selected : "+e._s(e.checked5))])],1),c("d-section",{attrs:{title:"InputNumber"}},[c("d-input-number",{staticStyle:{width:"290px"},attrs:{placeholder:"Default step"},model:{value:e.count,callback:function(t){e.count=t},expression:"count"}}),c("div",[e._v("count : "+e._s(e.count))]),c("d-input-number",{staticStyle:{width:"290px"},attrs:{placeholder:"Step 0.1",step:.1},model:{value:e.count2,callback:function(t){e.count2=t},expression:"count2"}}),c("div",[e._v("count2 : "+e._s(e.count2))]),c("d-input-number",{staticStyle:{width:"290px"},attrs:{placeholder:"Step 10",step:10},model:{value:e.count3,callback:function(t){e.count3=t},expression:"count3"}}),c("div",[e._v("count2 : "+e._s(e.count3))])],1)],1)},n=[],a=(c("99af"),c("d3b7"),{name:"Demo",data:function(){return{user:"Jake",password:"",validatorUser:{required:!0,msg:"Please enter userName"},validatorPwd:{regexp:/^.{4,12}$/,required:!0,msg:"Please enter 4-12 digit"},checked:!0,checked2:!1,checked3:"Radio",checked4:"Select-1",checked5:"",options:[{value:"Select-1",label:"Select 1"},{value:"Select-2",label:"Select 2",disabled:!0},{value:"Select-3",label:"Select 3"},{value:"Select-4",label:"Select 4"},{value:"Select-5",label:"Select 5"},{value:"Select-6",label:"Select 6"},{value:"Select-7",label:"Select 7"},{value:"Select-8",label:"Select 8"}],count:10,count2:void 0,count3:void 0,form:{user:""},validatorFormUser:{required:!0,msg:"Please enter account"}}},methods:{pressEnter:function(){console.log("按下了回车")},clickBtn:function(){console.log("点击了按钮")},focusHandler:function(e){console.log(e,"focus")},blurHandler:function(e){console.log(e,"blur")},getVal:function(e){console.log(e,"line 75")},checkboxChange:function(e){console.log(e)},openChange:function(e){var t=e.value,c=e.status;console.log("value: ".concat(t,", status: ").concat(c))},asyncCheck:function(){var e=this;if(this.form.user){var t=new Promise((function(e){setTimeout((function(){e({checkStatus:!1,msg:"We couldn’t find this account."})}),1e3)}),(function(e){e()}));t.then((function(t){e.$refs.userInput.asyncCheck(t.checkStatus,t.msg)})).catch()}else this.$refs.userInput.forceCheckFailed()}}}),l=a,r=c("2877"),s=Object(r["a"])(l,o,n,!1,null,null,null);t["default"]=s.exports},8418:function(e,t,c){"use strict";var o=c("c04e"),n=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var l=o(t);l in e?n.f(e,l,a(0,c)):e[l]=c}},"99af":function(e,t,c){"use strict";var o=c("23e7"),n=c("d039"),a=c("e8b5"),l=c("861d"),r=c("7b0b"),s=c("50c4"),i=c("8418"),d=c("65f0"),u=c("1dde"),v=c("b622"),p=c("2d00"),h=v("isConcatSpreadable"),f=9007199254740991,k="Maximum allowed index exceeded",b=p>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),m=u("concat"),S=function(e){if(!l(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)},x=!b||!m;o({target:"Array",proto:!0,forced:x},{concat:function(e){var t,c,o,n,a,l=r(this),u=d(l,0),v=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?l:arguments[t],S(a)){if(n=s(a.length),v+n>f)throw TypeError(k);for(c=0;c<n;c++,v++)c in a&&i(u,v,a[c])}else{if(v>=f)throw TypeError(k);i(u,v++,a)}return u.length=v,u}})},e8b5:function(e,t,c){var o=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);