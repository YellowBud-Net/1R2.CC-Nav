(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4544a07e"],{"65d4":function(s,e,t){"use strict";t("df28")},bf77:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"tool-page"},[s._m(0),t("div",{staticClass:"inputs"},[t("div",{staticClass:"title"},[s._v("输入")]),t("div",{staticClass:"content"},[t("div",{staticClass:"input-address"},[t("div",{staticClass:"title"},[s._v("连接地址")]),t("el-input",{model:{value:s.address.suffix,callback:function(e){s.$set(s.address,"suffix",e)},expression:"address.suffix"}},[t("el-select",{attrs:{slot:"prepend"},slot:"prepend",model:{value:s.address.prefix,callback:function(e){s.$set(s.address,"prefix",e)},expression:"address.prefix"}},[t("el-option",{attrs:{label:"ws://",value:"ws://"}}),t("el-option",{attrs:{label:"wss://",value:"wss://"}})],1)],1)],1),t("div",{staticClass:"input-send"},[t("div",{staticClass:"title"},[s._v("发送内容")]),t("el-input",{attrs:{type:"textarea",placeholder:"在此处输入要发送的内容（换行符会被移除）",rows:2},model:{value:s.inputs,callback:function(e){s.inputs=e},expression:"inputs"}})],1)])]),t("div",{staticClass:"ctrl"},[t("div",{staticClass:"title"},[s._v("操作")]),t("div",{staticClass:"content"},[t("el-button",{attrs:{type:"success",disabled:null!==s.ws,size:"medium",plain:""},on:{click:function(e){return s.wsConnect()}}},[s._v("连接")]),t("el-button",{attrs:{type:"warning",disabled:null===s.ws,size:"medium",plain:""},on:{click:function(e){return s.wsClose()}}},[s._v("断开")]),t("el-button",{attrs:{type:"primary",disabled:null===s.ws,size:"medium",plain:""},on:{click:function(e){return s.wsSend()}}},[s._v("发送")]),t("el-button",{attrs:{type:"danger",size:"medium",plain:""},on:{click:function(e){return s.clearInputs()}}},[s._v("清空输入")]),t("el-button",{attrs:{type:"danger",size:"medium",plain:""},on:{click:function(e){return s.clearMessages()}}},[s._v("清空消息")])],1)]),t("div",{staticClass:"logs"},[t("div",{staticClass:"title"},[s._v("日志")]),t("div",{ref:"logsContent",staticClass:"content",style:{height:s.logsHeight+"rem"}},[t("div",{staticClass:"messages"},s._l(s.messages,(function(e){return t("div",{key:e.id,staticClass:"item"},[t("el-tag",{attrs:{type:"send"===e.type?"primary":"success",effect:"plain",size:"small"}},[s._v(s._s(s._f("tsToTime")(e.time)))]),"html"===s.parseType?t("span",{domProps:{innerHTML:s._s(e.message)}}):t("span",[s._v(s._s(e.message))])],1)})),0)])]),t("div",{staticClass:"config"},[t("div",{staticClass:"title"},[s._v("设置")]),t("div",{staticClass:"content"},[t("div",{staticClass:"config-item"},[t("div",{staticClass:"title"},[s._v("日志高度")]),t("el-input-number",{attrs:{size:"medium",min:5,max:50,step:1,"step-strictly":""},model:{value:s.logsHeight,callback:function(e){s.logsHeight=e},expression:"logsHeight"}})],1),t("div",{staticClass:"config-item"},[t("div",{staticClass:"title"},[s._v("日志最大行数")]),t("el-input-number",{attrs:{size:"medium",min:1,max:8192,step:1,"step-strictly":""},model:{value:s.logsMax,callback:function(e){s.logsMax=e},expression:"logsMax"}})],1),t("div",{staticClass:"config-item"},[t("div",{staticClass:"title"},[s._v("解析类型")]),t("el-radio-group",{attrs:{size:"medium"},model:{value:s.parseType,callback:function(e){s.parseType=e},expression:"parseType"}},s._l(s.parseTypes,(function(e){return t("el-radio-button",{key:e.name,attrs:{label:e.name}},[s._v(s._s(e.label))])})),1)],1),t("div",{staticClass:"config-item"},[t("div",{staticClass:"title"},[s._v("自动滚动")]),t("el-radio-group",{attrs:{size:"medium"},model:{value:s.autoScroll,callback:function(e){s.autoScroll=e},expression:"autoScroll"}},[t("el-radio-button",{attrs:{label:!0}},[s._v("开启")]),t("el-radio-button",{attrs:{label:!1}},[s._v("关闭")])],1)],1)])])])},a=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"inputs"},[t("div",{staticClass:"title"},[s._v("注意")]),t("div",{staticClass:"content"},[t("p",[s._v("由于浏览器限制，通过 HTTPS 访问网站时只能连接带 SSL 的 WebSocket（WSS）；")]),t("p",[s._v("若需要连接不带 SSL 的 WebSocket（WS），建议下载到本地后使用。")])])])}],n={name:"OtherWebSocket",filters:{tsToTime(s){const e=new Date(s),t={h:e.getHours(),m:e.getMinutes(),s:e.getSeconds()};for(let i in t)t[i]<10&&(t[i]="0"+t[i]);return`${t.h}:${t.m}:${t.s}`}},data(){return{address:{prefix:"ws://",suffix:""},autoScroll:!0,inputs:"",logsHeight:20,logsMax:100,messages:[],messageID:0,parseType:"string",parseTypes:[{name:"html",label:"HTML"},{name:"json",label:"JSON"},{name:"string",label:"字符串"}],ws:null}},mounted(){this.init()},beforeDestroy(){this.wsClose()},methods:{init(){"undefined"===typeof WebSocket&&this.notify({duration:0,message:"您的浏览器不支持 WebSocket。",title:"错误",type:"error"})},clearInputs(){const s="确定要清空输入内容吗？";this.$confirm(s,"确认",{type:"warning"}).then(()=>{this.inputs=""}).catch(()=>{})},clearMessages(){const s="确定要清空消息内容吗？";this.$confirm(s,"确认",{type:"warning"}).then(()=>{this.messages=[],this.messageID=0}).catch(()=>{})},pushMessage(s,e=""){const t=["receive","send"];if(-1===t.indexOf(s))return;const i=this.messages.length,a=this.logsMax;i>=a&&this.messages.splice(0,i-a+1),this.messageID+=1,this.messages.push({id:this.messageID,message:e,time:(new Date).getTime(),type:s})},notify(s){const e={duration:5e3,message:"",title:"提示",type:"info"};this.$notify({...e,...s})},handleClose(){this.notify({message:"WebSocket 已关闭",type:"warning"}),this.ws=null},handleError(){this.notify({message:"WebSocket 发生错误",type:"error"})},handleMessage(s){const e=s.data,t=this.$refs["logsContent"];if(!e)return;const i=this.wsParse(e),a=i||e;console.log("%c%s","color: #2196F3;","[接收]",i||a),this.pushMessage("receive",e),this.$nextTick(()=>{t&&this.autoScroll&&t.scrollTo(0,t.scrollHeight)})},handleOpen(){this.notify({message:"WebSocket 已连接",type:"info"})},wsClose(){const s=this.ws;s&&s.close()},wsConnect(){const s=this.address,e=s.prefix+s.suffix;try{const s=new WebSocket(e);s.addEventListener("close",this.handleClose),s.addEventListener("error",this.handleError),s.addEventListener("message",this.handleMessage),s.addEventListener("open",this.handleOpen),this.ws=s}catch(t){this.notify({duration:1e4,message:t.toString(),title:"错误",type:"error"})}},wsParse(s=""){const e=this.parseType;if("json"!==e)return s;try{const e=JSON.parse(s);return e}catch(t){return this.notify({message:t.toString(),title:"JSON 格式错误",type:"warning"}),null}},wsSend(){const s=this.ws,e=this.inputs.replace(/(\n|\r)/g,""),t=this.wsParse(e);s&&t&&(console.log("%c%s","color: #4CAF50;","[发送]",t),s.send(e),this.pushMessage("send",e))}}},l=n,o=(t("65d4"),t("2877")),r=Object(o["a"])(l,i,a,!1,null,"d6fb7702",null);e["default"]=r.exports},df28:function(s,e,t){}}]);