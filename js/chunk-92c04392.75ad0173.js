(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92c04392"],{"1ccd":function(t,s,a){"use strict";a.r(s);a("14d9");var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),s("div",{staticClass:"container checkOut"},[s("ProgressStep",{staticClass:"py-4",attrs:{current:t.step}}),s("h3",[t._v("訂單資訊")]),s("div",{staticClass:"row listRow"},[s("div",{staticClass:"col-md-6 col-12"},[s("ul",{staticClass:"order"},[s("li",[s("p",[t._v("訂購日期 - "+t._s(t._f("date")(t.order.create_at)))])]),t._l(t.order.products,(function(a){return s("li",{key:a.id,staticClass:"orderList"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 p-0"},[s("div",{staticClass:"pro-title",on:{click:function(s){return s.preventDefault(),t.$router.push("/product_detail/"+a.product.id)}}},[t._v(" "+t._s(a.product.title)+" ")])]),s("div",{staticClass:"col-2 p-0"},[s("div",{staticClass:"pro-qty"},[t._v("x"+t._s(a.qty))])]),s("div",{staticClass:"col-4 p-0"},[s("div",{staticClass:"pro-price"},[t._v(" NT"+t._s(t._f("currency")(t._f("floor")(a.final_total/a.qty)))+" ")])])])])})),s("li",{staticClass:"pt-2 summaryBlock"},[s("div",{staticClass:"row summaryList"},[s("div",{staticClass:"col-8 p-0 summary"},[t._v("總計")]),s("div",{staticClass:"col-4 p-0 summary"},[t._v(" NT"+t._s(t._f("currency")(t.order.total))+" ")])])])],2)]),s("div",{staticClass:"col-md-6 col-12"},[s("div",{staticClass:"order_info"},[s("table",{staticClass:"table"},[s("tr",[s("td",{staticClass:"title"},[t._v("姓名")]),s("td",[t._v(t._s(t.order.user.name))])]),s("tr",[s("td",{staticClass:"title"},[t._v("電話")]),s("td",[t._v(t._s(t.order.user.tel))])]),s("tr",[s("td",{staticClass:"title"},[t._v("Email")]),s("td",[t._v(t._s(t.order.user.email))])]),s("tr",[s("td",{staticClass:"title"},[t._v("地址")]),s("td",[t._v(t._s(t.order.user.address))])]),s("tr",[s("td",{staticClass:"title"},[t._v("付款方式")]),"CVS"===t.order.user.payment?s("td",[t._v("超商取貨付款")]):t._e(),"CTP"===t.order.user.payment?s("td",[t._v("貨到付款")]):t._e()]),s("tr",[s("td",{staticClass:"title"},[t._v("付款狀態")]),t.order.is_paid?s("td",{staticClass:"complete"},[t._v("付款完成")]):s("td",{staticClass:"incomplete"},[t._v("尚未付款")])])]),s("div",{staticClass:"endpay"},[t.order.is_paid?s("button",{attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.$router.push("about")}}},[t._v(" 回到商店 ")]):s("button",{attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.completePay.apply(null,arguments)}}},[t._v(" 確認付款 ")])])])])])],1),t._m(0)],1)},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"modal fade",attrs:{id:"endPayModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("PURE SAVON")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body p-3 d-flex align-items-center justify-content-center"},[s("i",{staticClass:"fas fa-clipboard-check"}),s("h3",{staticClass:"ml-2 text-dark"},[t._v(" 付款完成"),s("br"),t._v(" 我們會盡快處理您的訂單！ ")])])])])])}],r=a("1157"),l=a.n(r),o=a("ea8a"),d={components:{ProgressStep:o["a"]},data(){return{step:3,isLoading:!1,orderId:"",order:{user:{}}}},methods:{getOrder(){const t=this,s="https://vue-course-api.hexschool.io/api/nody852/order/"+t.orderId;t.isLoading=!0,t.$http.get(s).then(s=>{s.data.success&&(t.order=s.data.order,console.log(t.order)),t.isLoading=!1})},completePay(){const t=this,s="https://vue-course-api.hexschool.io/api/nody852/pay/"+t.orderId;t.isLoading=!0,t.$http.post(s).then(s=>{s.data.success?(t.getOrder(),l()("#endPayModal").modal("show")):t.$bus.$emit("message:push","付款失敗","danger"),t.isLoading=!1})}},created(){this.orderId=this.$route.params.order_id,this.getOrder()}},c=d,n=a("2877"),u=Object(n["a"])(c,e,i,!1,null,null,null);s["default"]=u.exports},ea8a:function(t,s,a){"use strict";var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"progressStep"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"step",class:{now:1===t.current}},[s("p",[t._v("01 確認購買")])])]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"step",class:{now:2===t.current}},[s("p",[t._v("02 填寫資料")])])]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"step",class:{now:3===t.current}},[s("p",[t._v("03 完成訂單")])])])])])},i=[],r={name:"ProgressStep",props:["current"]},l=r,o=a("2877"),d=Object(o["a"])(l,e,i,!1,null,null,null);s["a"]=d.exports}}]);
//# sourceMappingURL=chunk-92c04392.75ad0173.js.map