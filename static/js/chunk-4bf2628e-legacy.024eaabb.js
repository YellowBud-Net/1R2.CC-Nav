(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bf2628e"],{2038:function(e,t,n){},"26d3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"settings"},[n("div",{staticClass:"wrapper shadow-2"},[n("el-form",{attrs:{"label-position":"left","label-width":"12rem"}},[n("el-form-item",{staticClass:"set-font",attrs:{label:"字体大小"}},[n("el-input-number",{attrs:{min:12,max:32,"controls-position":"right",label:"字体大小",size:"small"},model:{value:e.config.fontSize,callback:function(t){e.$set(e.config,"fontSize",t)},expression:"config.fontSize"}})],1),n("el-form-item",{attrs:{label:"显示网站标题"}},[n("el-switch",{model:{value:e.config.showSiteTitle,callback:function(t){e.$set(e.config,"showSiteTitle",t)},expression:"config.showSiteTitle"}})],1),n("el-form-item",{attrs:{label:"折叠主页侧边菜单"}},[n("el-switch",{model:{value:e.config.sideMenuCollapse,callback:function(t){e.$set(e.config,"sideMenuCollapse",t)},expression:"config.sideMenuCollapse"}})],1),n("el-form-item",{attrs:{label:"获取搜索引擎关键词建议"}},[n("el-switch",{model:{value:e.config.searchSuggestion,callback:function(t){e.$set(e.config,"searchSuggestion",t)},expression:"config.searchSuggestion"}})],1),n("el-form-item",{attrs:{label:"清除数据"}},[n("el-button",{attrs:{type:"danger",size:"medium"},on:{click:function(t){return e.resetDatas("settings")}}},[e._v("清除设置")]),n("el-button",{attrs:{type:"danger",size:"medium"},on:{click:function(t){return e.resetDatas("cache")}}},[e._v("清除缓存")])],1)],1)],1)])},s=[],o={name:"Settings",beforeRouteEnter:function(e,t,n){n((function(e){e.utils.changeTitle("设置")}))},data:function(){return{config:this.$root.config.storage,utils:this.$root.utils}},methods:{resetDatas:function(e){var t=this;this.$confirm("确定要清除吗？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if("cache"===e)localStorage.removeItem("navLinksCache");else{if("settings"!==e)return;localStorage.removeItem("navConfig")}t.$message({message:"已清除，2s 后自动刷新",type:"success"}),setTimeout((function(){location.reload()}),2e3)})).catch((function(){t.$message({message:"取消清除",type:"info"})}))}}},a=o,c=(n("71c4"),n("2877")),l=Object(c["a"])(a,i,s,!1,null,"5cdd03d6",null);t["default"]=l.exports},"71c4":function(e,t,n){"use strict";n("2038")}}]);