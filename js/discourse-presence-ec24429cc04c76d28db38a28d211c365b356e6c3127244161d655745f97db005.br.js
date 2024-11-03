define("discourse/plugins/discourse-presence/discourse/components/composer-presence-display",["exports","@ember/component","@glimmer/component","@glimmer/tracking","@ember/object","@ember/service","@ember/template-factory"],(function(e,s,t,n,r,i,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const p=(0,l.createTemplateFactory)({id:"8VNX790D",block:'[[[11,0],[4,[38,0],[[30,0,["setupChannels"]]],null],[4,[38,1],[[30,0,["setupChannels"]],[30,1,["reply"]],[30,1,["whisper"]],[30,0,["state"]]],null],[12],[1,"\\n"],[41,[30,0,["shouldDisplay"]],[[[1,"    "],[10,0],[14,0,"presence-users"],[12],[1,"\\n      "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[37,4],[[28,[37,4],[[30,0,["users"]]],null]],null],null,[[[1,"          "],[8,[39,5],null,[["@user"],[[30,2]]],[["default"],[[[[1,"\\n            "],[1,[28,[35,6],[[30,2]],[["imageSize"],["small"]]]],[1,"\\n          "]],[]]]]],[1,"\\n"]],[2]],null],[1,"      "],[13],[1,"\\n      "],[10,1],[14,0,"presence-text"],[12],[1,"\\n        "],[10,1],[14,0,"description"],[12],[41,[30,0,["isReply"]],[[[1,[28,[35,7],["presence.replying"],[["count"],[[30,0,["users","length"]]]]]]],[]],[[[1,[28,[35,7],["presence.editing"],[["count"],[[30,0,["users","length"]]]]]]],[]]],[13],[1,"\\n        "],[10,1],[14,0,"wave"],[12],[1,"\\n          "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n          "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n          "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["@model","user"],false,["did-insert","did-update","if","each","-track-array","user-link","avatar","i18n"]]',moduleName:"discourse/plugins/discourse-presence/discourse/components/composer-presence-display.hbs",isStrictMode:!1})
class a extends t.default{static#e=(()=>dt7948.g(this.prototype,"presence",[i.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
static#t=(()=>dt7948.g(this.prototype,"composerPresenceManager",[i.service]))()
#n=(()=>{dt7948.i(this,"composerPresenceManager")})()
static#r=(()=>dt7948.g(this.prototype,"currentUser",[i.service]))()
#i=(()=>{dt7948.i(this,"currentUser")})()
static#l=(()=>dt7948.g(this.prototype,"siteSettings",[i.service]))()
#p=(()=>{dt7948.i(this,"siteSettings")})()
static#a=(()=>dt7948.g(this.prototype,"replyChannel",[n.tracked]))()
#h=(()=>{dt7948.i(this,"replyChannel")})()
static#o=(()=>dt7948.g(this.prototype,"whisperChannel",[n.tracked]))()
#c=(()=>{dt7948.i(this,"whisperChannel")})()
static#u=(()=>dt7948.g(this.prototype,"editChannel",[n.tracked]))()
#d=(()=>{dt7948.i(this,"editChannel")})()
get isReply(){return"reply"===this.state||"whisper"===this.state}get isEdit(){return"edit"===this.state}get state(){const{editingPost:e,whisper:s,replyingToTopic:t}=this.args.model
return e?"edit":s?"whisper":t?"reply":void 0}get replyChannelName(){const e=this.args.model?.topic?.id
if(e&&this.isReply)return`/discourse-presence/reply/${e}`}get whisperChannelName(){const e=this.args.model?.topic?.id
if(e&&this.isReply&&this.currentUser.whisperer)return`/discourse-presence/whisper/${e}`}get editChannelName(){const e=this.args.model?.post?.id
if(e&&this.isEdit)return`/discourse-presence/edit/${e}`}get replyUsers(){return this.replyChannel?.users||[]}get whisperUsers(){return this.whisperChannel?.users||[]}get replyingUsers(){return[...this.replyUsers,...this.whisperUsers]}get editingUsers(){return this.editChannel?.users||[]}get users(){return(this.isEdit?this.editingUsers:this.replyingUsers).filter((e=>e.id!==this.currentUser.id)).slice(0,this.siteSettings.presence_max_users_shown)}get shouldDisplay(){return this.users.length>0}setupChannels(){this.setupReplyChannel(),this.setupWhisperChannel(),this.setupEditChannel(),this.notifyState()}static#m=(()=>dt7948.n(this.prototype,"setupChannels",[r.action]))()
setupReplyChannel(){this.setupChannel("replyChannel",this.replyChannelName)}setupWhisperChannel(){this.currentUser.staff&&this.setupChannel("whisperChannel",this.whisperChannelName)}setupEditChannel(){this.setupChannel("editChannel",this.editChannelName)}setupChannel(e,s){this[e]?.name!==s&&(this[e]?.unsubscribe(),s&&(this[e]=this.presence.getChannel(s),this[e].subscribe()))}notifyState(){const{reply:e,post:s,topic:t}=this.args.model,n=this.isEdit&&s?.raw||"",r=this.isEdit?s:t
e!==n&&this.composerPresenceManager.notifyState(this.state,r?.id)}willDestroy(){super.willDestroy(...arguments),this.unsubscribeFromChannels(),this.composerPresenceManager.leave()}unsubscribeFromChannels(){this.replyChannel?.unsubscribe(),this.whisperChannel?.unsubscribe(),this.editChannel?.unsubscribe()}}e.default=a,(0,s.setComponentTemplate)(p,a)})),define("discourse/plugins/discourse-presence/discourse/components/topic-presence-display",["exports","@ember/component","@glimmer/component","@glimmer/tracking","@ember/object","@ember/service","@ember/template-factory"],(function(e,s,t,n,r,i,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const p=(0,l.createTemplateFactory)({id:"48MbJy9j",block:'[[[11,0],[4,[38,0],[[30,0,["setupChannels"]]],null],[4,[38,1],[[30,0,["setupChannels"]],[30,1,["id"]]],null],[12],[1,"\\n"],[41,[30,0,["shouldDisplay"]],[[[1,"    "],[10,0],[14,0,"presence-users"],[12],[1,"\\n      "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[37,4],[[28,[37,4],[[30,0,["users"]]],null]],null],null,[[[1,"          "],[8,[39,5],null,[["@user"],[[30,2]]],[["default"],[[[[1,"\\n            "],[1,[28,[35,6],[[30,2]],[["imageSize"],["small"]]]],[1,"\\n          "]],[]]]]],[1,"\\n"]],[2]],null],[1,"      "],[13],[1,"\\n      "],[10,1],[14,0,"presence-text"],[12],[1,"\\n        "],[10,1],[14,0,"description"],[12],[1,"\\n          "],[1,[28,[35,7],["presence.replying_to_topic"],[["count"],[[30,0,["users","length"]]]]]],[1,"\\n        "],[13],[1,"\\n        "],[10,1],[14,0,"wave"],[12],[1,"\\n          "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n          "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n          "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["@topic","user"],false,["did-insert","did-update","if","each","-track-array","user-link","avatar","i18n"]]',moduleName:"discourse/plugins/discourse-presence/discourse/components/topic-presence-display.hbs",isStrictMode:!1})
class a extends t.default{static#e=(()=>dt7948.g(this.prototype,"presence",[i.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
static#t=(()=>dt7948.g(this.prototype,"currentUser",[i.service]))()
#i=(()=>{dt7948.i(this,"currentUser")})()
static#r=(()=>dt7948.g(this.prototype,"replyChannel",[n.tracked]))()
#h=(()=>{dt7948.i(this,"replyChannel")})()
static#l=(()=>dt7948.g(this.prototype,"whisperChannel",[n.tracked]))()
#c=(()=>{dt7948.i(this,"whisperChannel")})()
get replyChannelName(){return`/discourse-presence/reply/${this.args.topic.id}`}get whisperChannelName(){return`/discourse-presence/whisper/${this.args.topic.id}`}get replyUsers(){return this.replyChannel?.users||[]}get whisperUsers(){return this.whisperChannel?.users||[]}get users(){return[...this.replyUsers,...this.whisperUsers].filter((e=>e.id!==this.currentUser.id))}get shouldDisplay(){return this.users.length>0}setupChannels(){this.setupReplyChannel(),this.setupWhisperChannel()}static#a=(()=>dt7948.n(this.prototype,"setupChannels",[r.action]))()
willDestroy(){super.willDestroy(...arguments),this.unsubscribeFromChannels()}unsubscribeFromChannels(){this.replyChannel?.unsubscribe(),this.whisperChannel?.unsubscribe()}setupReplyChannel(){this.replyChannel?.name!==this.replyChannelName&&(this.replyChannel?.unsubscribe(),this.replyChannel=this.presence.getChannel(this.replyChannelName),this.replyChannel.subscribe())}setupWhisperChannel(){this.currentUser.staff&&this.whisperChannel?.name!==this.whisperChannelName&&(this.whisperChannel?.unsubscribe(),this.whisperChannel=this.presence.getChannel(this.whisperChannelName),this.whisperChannel.subscribe())}}e.default=a,(0,s.setComponentTemplate)(p,a)})),define("discourse/plugins/discourse-presence/discourse/services/composer-presence-manager",["exports","@ember/runloop","@ember/service","discourse-common/config/environment"],(function(e,s,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{static#e=(()=>dt7948.g(this.prototype,"presence",[t.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
notifyState(e,t){if(this.siteSettings.allow_users_to_hide_profile&&this.currentUser.user_option.hide_profile_and_presence)return
if(void 0===e)return this.leave()
if(!["reply","whisper","edit"].includes(e))throw`Unknown intent ${e}`
const r=`${e}/${t}`
this._state!==r&&(this._enter(e,t),this._state=r),(0,n.isTesting)()||(this._autoLeaveTimer=(0,s.debounce)(this,this.leave,1e4))}leave(){this._presentChannel?.leave(),this._presentChannel=null,this._state=null,this._autoLeaveTimer&&((0,s.cancel)(this._autoLeaveTimer),this._autoLeaveTimer=null)}_enter(e,s){this.leave()
let t=`/discourse-presence/${e}/${s}`
this._presentChannel=this.presence.getChannel(t),this._presentChannel.enter()}willDestroy(){this.leave()}}e.default=r})),define("discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"G/OxL/Vj",block:'[[[8,[39,0],null,[["@model"],[[30,0,["model"]]]],null]],[],false,["composer-presence-display"]]',moduleName:"discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"CmudhbhK",block:'[[[8,[39,0],null,[["@topic"],[[30,0,["model"]]]],null]],[],false,["topic-presence-display"]]',moduleName:"discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-presence-f89a54edda5d071833b5e7eb4e30a5e90792ca27d0281568b9ff6ba943fcb573.map
//!

;
