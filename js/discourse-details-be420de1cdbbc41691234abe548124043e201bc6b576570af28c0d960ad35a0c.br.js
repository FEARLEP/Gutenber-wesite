define("discourse/plugins/discourse-details/initializers/apply-details",["exports","jquery","discourse/lib/plugin-api","discourse-i18n"],(function(e,t,i,s){"use strict"
function l(e){e.decorateCooked((e=>(0,t.default)("details",e)),{id:"discourse-details"}),e.addComposerToolbarPopupMenuOption({action:function(e){e.applySurround(`\n[details="${s.default.t("composer.details_title")}"]\n`,"\n[/details]\n","details_text",{multiline:!1})},icon:"caret-right",label:"details.title"})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"apply-details",initialize(){(0,i.withPluginApi)("1.14.0",l)}}})),define("discourse/plugins/discourse-details/lib/discourse-markdown/details",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["summary","summary[title]","details","details[open]","details.elided"]),e.registerPlugin((e=>{e.block.bbcode.ruler.push("details",t)}))}
const t={tag:"details",before(e,t){const i=t.attrs,s=e.push("bbcode_open","details",1)
e.push("bbcode_open","summary",1),""===i.open&&(s.attrs=[["open",""]]),e.push("text","",0).content=i._default||"",e.push("bbcode_close","summary",-1)},after(e){e.push("bbcode_close","details",-1)}}}))

//# sourceMappingURL=discourse-details-a37264aca5536296cb27ff4455546ef12a2222124dafc2f5b3c3a3cb7443d0a7.map
//!

;
