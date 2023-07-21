(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6cc9"],{"73a8":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openCodeModal(!0)}}},[t._v(" 建立優惠卷 ")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.couponCode,(function(o){return e("tr",{key:o.id},[e("td",[t._v(t._s(o.title))]),e("td",[t._v(t._s(o.percent))]),e("td",[t._v(t._s(o.code))]),e("td",[t._v(t._s(t._f("dateFilter")(o.due_date)))]),e("td",[o.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用 ")])]),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.openCodeModal(!1,o)}}},[t._v(" 編輯 ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.deleteModal(o)}}},[t._v(" 刪除 ")])])])})),0)]),e("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"code"}},[t._v("優惠碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"date"}},[t._v("到期日")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{"asp-for":"MyDate","asp-format":"{0:yyyy-MM-dd}",type:"date",id:"due_date"},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"price"}},[t._v("折扣百分比")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"80%"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":1,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var o=t.tempCoupon.is_enabled,a=e.target,s=(a.checked,1);if(Array.isArray(o)){var d=null,n=t._i(o,d);a.checked?n<0&&t.$set(t.tempCoupon,"is_enabled",o.concat([d])):n>-1&&t.$set(t.tempCoupon,"is_enabled",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.tempCoupon,"is_enabled",s)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"tempCoupon.is_enabled"}},[t._v(" 是否啟用 ")])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.updatdCode}},[t._v(" 確認 ")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteCoupon}},[t._v(" 確認刪除 ")])])])])])])},s=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("名稱")]),e("th",{attrs:{width:"120"}},[t._v("折扣百分比")]),e("th",{attrs:{width:"120"}},[t._v("優惠碼")]),e("th",{attrs:{width:"120"}},[t._v("到期日")]),e("th",{attrs:{width:"120"}},[t._v("是否啟用")]),e("th",{attrs:{width:"140"}},[t._v("編輯")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header bg-white text-dark"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("Coupon")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],d=o("1157"),n=o.n(d),i={data(){return{isLoading:!1,couponCode:[],pagination:{},New:!1,tempCoupon:{},status:{loadingItem:""},Dateitem:[],due_date:new Date,today:""}},watch:{due_date(){const t=this,e=Math.floor(new Date/1e3);t.tempCoupon.due_date=e}},filters:{dateFilter(t){const e=new Date(1e3*t);return e.toLocaleDateString()}},methods:{getCodes(){const t="https://vue-course-api.hexschool.io/api/nody852/admin/coupons",e=this;e.isLoading=!0,console.log(Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"nody852",NODE_ENV:"production",BASE_URL:"/vue-cli4/"}).APIPATH,Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"nody852",NODE_ENV:"production",BASE_URL:"/vue-cli4/"}).CUSTOMPATH),this.$http.get(t).then(t=>{console.log("ddd",t.data),e.isLoading=!1,e.couponCode=t.data.coupons})},openCodeModal(t,e){const o=this;if(t)o.tempCoupon={},o.New=!0;else if(!t){o.tempCoupon={...e},o.New=!1;const t=new Date(1e3*o.tempCoupon.due_date).toISOString().split("T");o.due_date=t[0]}n()("#couponModal").modal("show")},updatdCode(){const t=this;let e="https://vue-course-api.hexschool.io/api/nody852/admin/coupon/",o="post";t.isLoading=!0,t.New||(o="put",e="https://vue-course-api.hexschool.io/api/nody852/admin/coupon/"+t.tempCoupon.id,t.due_date=new Date(1e3*t.tempCoupon.due_date).toISOString().split("T")[0]),this.$http[o](e,{data:t.tempCoupon}).then(e=>{console.log(e.data),t.isLoading=!1,console.log(t.tempCoupon),e.data.success&&(n()("#couponModal").modal("hide"),t.getCodes())})},deleteModal(t){const e=this;e.tempCoupon=t,n()("#delProductModal").modal("show")},deleteCoupon(){const t=this,e="https://vue-course-api.hexschool.io/api/nody852/admin/coupon/"+t.tempCoupon.id;this.$http.delete(e,{data:t.tempProduct}).then(e=>{console.log(e.data),n()("#delProductModal").modal("hide"),t.getCodes()})}},created(){this.getCodes()}},l=i,r=o("2877"),c=Object(r["a"])(l,a,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d6cc9.61acdc45.js.map