(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{220:function(t,e,n){"use strict";n.r(e);n(211);var o=n(121),r=n.n(o),c={name:"GoalCard",data:function(){return{Graph:r.a}},props:{balance:{type:Number,required:!0},date:{type:String,required:!0},icon:{type:String,required:!0},iconClass:{type:String,required:!0},text:{type:String,required:!0}}},l=n(18),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goal-card"},[n("div",{staticClass:"goal-card__top-container"},[n("p",{staticClass:"goal-card__top-container--balance is-currency"},[t._v(t._s(t.balance))]),t._v(" "),n("p",{staticClass:"goal-card__top-container--date"},[t._v(t._s(t.date))])]),t._v(" "),n("div",{staticClass:"goal-card__bottom-container"},[n("div",{staticClass:"goal-card__bottom-container--icon",class:t.iconClass,domProps:{innerHTML:t._s(t.icon)}}),t._v(" "),n("div",{staticClass:"goal-card__bottom-container--id is-bold"},[t._v(t._s(t.text))])])])}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,n){"use strict";n.r(e);var o=n(220),r=n(215),c={name:"GoalsSection",components:{GoalCard:o.default,Carousel:r.Carousel,Slide:r.Slide},computed:{goalCards:function(){return this.$store.getters.goals}}},l=n(18),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"goals-section"},[t._m(0),t._v(" "),n("carousel",{attrs:{"per-page":2,navigationEnabled:!0,paginationEnabled:!1,navigationClickTargetSize:3,"per-page-custom":[[530,3]]}},t._l(t.goalCards,(function(e,o){return n("slide",{key:o},[n("goal-card",{attrs:{balance:e.balance,date:e.date,icon:e.icon,"icon-class":t.$store.getters.isEnabled?e.iconClass:"is-disabled",text:e.text}})],1)})),1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goals-section__title-container"},[n("p",{staticClass:"card-title"},[t._v("Goals")]),t._v(" "),n("button",{staticClass:"infinite-button add-button"},[t._v("+")])])}],!1,null,null,null);e.default=component.exports}}]);