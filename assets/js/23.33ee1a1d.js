(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{610:function(e,t,l){"use strict";l.r(t);var n={data:function(){var e=this.$createElement;return{requestUrl:"https://easy-mock.com/mock/5aee142c96e73977996d13b6/listview/list",filterButtons:[{text:"primary",type:"primary",click:function(){return console.log("click:button-primary")}}],filterFields:[{type:"text",model:"name",label:"文本字段"}],tableColumns:[{label:"自定义标签",prop:"sku",width:100,align:"center"},{label:"产品名称",prop:"name",width:200,align:"center"},{label:"操作",width:150,align:"center",render:function(t){return e("div",[e("el-button",{on:{click:function(e){return e.stopPropagation()}},style:"padding:4px 8px",attrs:{size:"mini",type:"success"}},["审核"]),e("el-button",{on:{click:function(e){return e.stopPropagation()}},style:"padding:4px 8px",attrs:{size:"mini",type:"danger"}},["删除"])])}},{label:"销售员",prop:"seller",align:"center"},{label:"仓库",prop:"warehouse",align:"center"},{label:"零售价格",prop:"sale_price",align:"center"},{label:"折扣率",align:"center",formatter:function(e){return e.discount.toFixed(2)}},{label:"折后价",align:"center",formatter:function(e){return(e.discount*e.sale_price).toFixed(2)}},{label:"折扣时间",align:"center",children:[{label:"折扣开始",prop:"date",align:"center"},{label:"折扣结束",prop:"date",align:"center"}]},{label:"数量",prop:"quantity",align:"center"},{label:"最后修改",align:"center",children:[{label:"修改人",prop:"seller",align:"center"},{label:"修改时间",prop:"date",align:"center"}]}]}}},r=l(2),i=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("listview",{attrs:{"header-title":"演示列表1","header-nav":[{text:"菜单1",to:"/list"},"菜单2"],"request-url":this.requestUrl,"filter-buttons":this.filterButtons,"filter-fields":this.filterFields,"table-columns":this.tableColumns,"full-height":!1}})}),[],!1,null,null,null);t.default=i.exports}}]);