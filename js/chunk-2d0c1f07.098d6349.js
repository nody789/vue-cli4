(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1f07"],{"47d2":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),s("div",{staticClass:"row mt-4"},t._l(t.products,(function(e){return s("div",{key:e.id,staticClass:"col-md-4 mb-4"},[s("div",{staticClass:"card border-0 shadow-sm"},[s("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:`url(${e.imageUrl})`}}),s("div",{staticClass:"card-body"},[s("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),s("h5",{staticClass:"card-title"},[s("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),s("p",{staticClass:"card-text text-dark"},[t._v(t._s(e.content))]),s("div",{staticClass:"d-flex text-dark justify-content-between align-items-baseline"},[e.price?t._e():s("div",{staticClass:"h5"},[t._v(" "+t._s(e.origin_price)+" 元 ")]),e.price?s("del",{staticClass:"h6"},[t._v("原價 "+t._s(e.origin_price)+" 元")]):t._e(),e.price?s("div",{staticClass:"h5"},[t._v(" 現在只要 "+t._s(e.price)+"元 ")]):t._e()])]),s("div",{staticClass:"card-footer d-flex"},[s("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(s){return t.getProduct(e.id)}}},[t.status.loadingItem===e.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 查看更多 ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(s){return t.addtoCart(e.id)}}},[t.status.loadingItem===e.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.cart.carts,(function(e){return s("tr",{key:e.cart},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.removeCartItem(e.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),s("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.product.title)+" "),e.coupon?s("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e()]),s("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+t._s(e.product.unit))]),s("td",{staticClass:"align-middle"},[t._v(t._s(e.final_total))])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.cart.total))])]),t.cart.final_total!==t.cart.total?s("tr",[s("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),s("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])]):t._e()])]),s("div",{staticClass:"input-group mb-3 input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(s){s.target.composing||(t.coupon_code=s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(s){return t.addCouponCode()}}},[t._v(" 套用優惠碼 ")])])]),s("div",{staticClass:"my-5 row justify-content-center"},[s("validation-observer",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function({invalid:e}){return[s("form",{on:{submit:function(s){return s.preventDefault(),t.createOrder.apply(null,arguments)}}},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function({errors:e,classes:a}){return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:a,attrs:{id:"email",type:"email",name:"email"},domProps:{value:t.form.user.email},on:{input:function(s){s.target.composing||t.$set(t.form.user,"email",s.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])])]}}],null,!0)}),s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e,classes:a}){return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:a,attrs:{id:"username",type:"text",name:"name"},domProps:{value:t.form.user.name},on:{input:function(s){s.target.composing||t.$set(t.form.user,"name",s.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])])]}}],null,!0)}),s("validation-provider",{attrs:{rules:"required||numeric"},scopedSlots:t._u([{key:"default",fn:function({classes:e}){return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:e,attrs:{id:"usertel",type:"tel",name:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(s){s.target.composing||t.$set(t.form.user,"tel",s.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s("請輸入電話"))])])]}}],null,!0)}),s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function({classes:e}){return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:e,attrs:{id:"useraddress",type:"text",name:"address",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(s){s.target.composing||t.$set(t.form.user,"address",s.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s("請輸入地址"))])])]}}],null,!0)}),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"comment"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(s){s.target.composing||t.$set(t.form,"message",s.target.value)}}})]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{disabled:e}},[t._v("送出訂單")])])],1)]}}])})],1),s("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(" "+t._s(t.product.title)+" ")]),t._m(1)]),s("div",{staticClass:"modal-body"},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),s("blockquote",{staticClass:"blockquote mt-3"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),s("footer",{staticClass:"blockquote-footer text-right"},[t._v(" "+t._s(t.product.description)+" ")])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():s("div",{staticClass:"h5"},[t._v(" "+t._s(t.product.origin_price)+" 元 ")]),t.product.price?s("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),s("div",{staticClass:"h5"},[t._v("現在只要 "+t._s(t.product.price)+"元")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.product,"num",s.target.multiple?e:e[0])}}},t._l(10,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(" 選購"+t._s(e)+" "+t._s(t.product.unit)+" ")])})),0)]),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"text-muted text-nowrap mr-3"},[t.product.price!=t.product.origin_price?s("strong",[t._v("小計"+t._s(t.product.num*t.product.price))]):t._e(),t.product.price==t.product.origin_price?s("strong",[t._v("小計"+t._s(t.product.num*t.product.origin_price))]):t._e(),t._v(" 元 ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.status.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])])],1)},o=[function(){var t=this,s=t._self._c;return s("thead",[s("th"),s("th",[t._v("品名")]),s("th",[t._v("數量")]),s("th",[t._v("單價")])])},function(){var t=this,s=t._self._c;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=(e("14d9"),e("1157")),r=e.n(i),n=e("7bb1"),c={components:{ValidationProvider:n["b"]},data(){return{products:[],product:{},cart:[],form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:"",status:{loadingItem:""},isLoading:!1}},methods:{getProducts(){const t="https://vue-course-api.hexschool.io/api/nody852/products",s=this;console.log(Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"nody852",NODE_ENV:"production",BASE_URL:"/vue-cli4/"}).APIPATH,Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"nody852",NODE_ENV:"production",BASE_URL:"/vue-cli4/"}).CUSTOMPATH),s.isLoading=!0,this.$http.get(t).then(t=>{console.log(t.data),s.isLoading=!1,s.products=t.data.products})},getProduct(t){const s="https://vue-course-api.hexschool.io/api/nody852/product/"+t,e=this;console.log(Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"nody852",NODE_ENV:"production",BASE_URL:"/vue-cli4/"}).APIPATH,Object({VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"nody852",NODE_ENV:"production",BASE_URL:"/vue-cli4/"}).CUSTOMPATH),e.status.loadingItem=t,this.$http.get(s).then(t=>{console.log(t.data),e.product=t.data.product,r()("#productModal").modal("show"),e.status.isLoading=""})},addtoCart(t,s=1){const e="https://vue-course-api.hexschool.io/api/nody852/cart",a=this,o={product_id:t,qty:s};a.status.loadingItem=t,this.$http.post(e,{data:o}).then(t=>{console.log(t.data),a.status.isLoading="",a.getCart(),r()("#productModal").modal("hide")})},getCart(){const t="https://vue-course-api.hexschool.io/api/nody852/cart",s=this;s.isLoading=!0,this.$http.get(t).then(t=>{s.cart=t.data.data,console.log(s.cart),s.isLoading=!1})},removeCartItem(t){const s=this,e="https://vue-course-api.hexschool.io/api/nody852/cart/"+t;s.isLoading=!0,this.$http.delete(e).then(()=>{this.getCart(),s.isLoading=!1})},addCouponCode(){const t=this,s="https://vue-course-api.hexschool.io/api/nody852/coupon",e={code:t.coupon_code};t.isLoading=!0,this.$http.post(s,{data:e}).then(s=>{console.log(s),this.getCart(),t.isLoading=!1})},createOrder(){const t=this,s="https://vue-course-api.hexschool.io/api/nody852/order",e=t.form;this.$http.post(s,{data:e}).then(s=>{console.log("建立訂單",s),s.data.success&&t.$router.push("Customer_checkout/"+s.data.orderId),t.isLoading=!1})}},created(){this.getProducts(),this.getCart(),this.$bus.$emit("message:push","這裡是一段訊息","success")}},l=c,d=e("2877"),u=Object(d["a"])(l,a,o,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c1f07.098d6349.js.map