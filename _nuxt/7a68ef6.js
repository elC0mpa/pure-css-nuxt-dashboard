(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4,5,7,8,10,11,14,15],{214:function(t,e,n){"use strict";n.r(e);n(211);var r={name:"ProgressBar",data:function(){return{}},props:{lowLeftText:{type:String,default:"Low Left Text"},lowRightText:{type:String,default:"Low Right Text"},color:{type:String,default:""},width:{type:Number,default:0}},computed:{widthProgress:function(){return"width: "+this.width+"%"}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"progress-bar"},[n("span",{class:{"is-primary":"primary"===t.color,"is-secondary":"secondary"===t.color,"is-tertiary":"tertiary"===t.color,"is-disabled":"disabled"===t.color},style:t.widthProgress})]),t._v(" "),n("div",{staticClass:"progress-bar__info-container"},[n("p",{staticClass:"progress-bar__info-container--text secondary-info"},[t._v("\n      "+t._s(t.lowLeftText)+"\n    ")]),t._v(" "),n("p",{staticClass:"progress-bar__info-container--status secondary-info"},[t._v("\n      "+t._s(t.lowRightText)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,n){"use strict";n.r(e);n(211),n(16),n(86);var r={name:"CreditCard",data:function(){return{firstSection:"",lastSection:""}},props:{holder:{type:String,required:!0},expireDate:{type:String,required:!0},cardId:{type:Number,required:!0},isEnabled:{type:Boolean,required:!0}},created:function(){var t=this.cardId.toString();this.firstSection=t.substring(0,4),this.lastSection=t.substring(t.length-4,t.length)}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credit-card",class:{"is-disabled":!t.isEnabled}},[t._m(0),t._v(" "),n("div",{staticClass:"credit-card__number"},[n("ul",[n("li",[t._v(t._s(t.firstSection))]),t._v(" "),n("li",[t._v("****")]),t._v(" "),n("li",[t._v("****")]),t._v(" "),n("li",[t._v(t._s(t.lastSection))])])]),t._v(" "),n("div",{staticClass:"credit-card__footer"},[n("div",[n("p",{staticClass:"credit-card__info"},[t._v("Card holder")]),t._v(" "),n("p",{staticClass:"credit-card__title"},[t._v(t._s(t.holder))])]),t._v(" "),n("div",[n("p",{staticClass:"credit-card__info"},[t._v("Expire date")]),t._v(" "),n("p",{staticClass:"credit-card__title"},[t._v(t._s(t.expireDate))])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credit-card__header"},[n("p",{staticClass:"credit-card__title"},[t._v("cloudcash")]),t._v(" "),n("p",{staticClass:"credit-card__info"},[t._v("PREMIUM ACCOUNT")])])}],!1,null,null,null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);var r={name:"Balances",data:function(){return{}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"balances"},[n("div",{staticClass:"balances__current"},[n("p",{staticClass:"balances__current-balance current-balance-typo"},[t._v("2000.50")]),t._v(" "),n("p",{staticClass:"balances__info secondary-info"},[t._v("Current balance")])]),t._v(" "),n("div",{staticClass:"balances__income"},[n("p",{staticClass:"balances__income-balance income-balance-typo"},[t._v("1000.12")]),t._v(" "),n("p",{staticClass:"balances__info secondary-info"},[t._v("Income")])]),t._v(" "),n("div",{staticClass:"balances__outcome"},[n("p",{staticClass:"balances__outcome-balance outcome-balance-typo"},[t._v("800.43")]),t._v(" "),n("p",{staticClass:"balances__info secondary-info"},[t._v("Outcome")])])])}],!1,null,null,null);e.default=component.exports},218:function(t,e,n){"use strict";n.r(e);var r={name:"SwitchComponent",props:{falseText:{type:String,required:!0},trueText:{type:String,required:!0},value:{type:Boolean,required:!0}},computed:{text:function(){return this.value?this.trueText:this.falseText}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switch-container"},[n("label",{staticClass:"switch-container__switch"},[n("input",{attrs:{type:"checkbox"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",!t.value)}}}),t._v(" "),n("span",{staticClass:"slider"})]),t._v(" "),n("p",{staticClass:"switch-container__info"},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);var r={name:"Table",props:{transactions:{type:Array,required:!0}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.transactions,(function(e,r){return n("tr",{key:r},[n("td",[n("div",{domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("p",{staticClass:"secondary-info is-bold"},[t._v(t._s(e.receiver))])]),t._v(" "),n("td",{staticClass:"secondary-info"},[t._v(t._s(e.type))]),t._v(" "),n("td",{staticClass:"secondary-info"},[t._v(t._s(e.date))]),t._v(" "),n("td",{staticClass:"secondary-info is-bold is-currency text-align-right"},[t._v("\n      "+t._s(e.amount)+"\n    ")])])}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{staticClass:"secondary-info"},[t._v("Receiver")]),t._v(" "),n("th",{staticClass:"secondary-info"},[t._v("Type")]),t._v(" "),n("th",{staticClass:"secondary-info"},[t._v("Date")]),t._v(" "),n("th",{staticClass:"secondary-info text-align-right"},[t._v("Amount")])])}],!1,null,null,null);e.default=component.exports},220:function(t,e,n){"use strict";n.r(e);n(211);var r=n(121),c=n.n(r),o={name:"GoalCard",data:function(){return{Graph:c.a}},props:{balance:{type:Number,required:!0},date:{type:String,required:!0},icon:{type:String,required:!0},iconClass:{type:String,required:!0},text:{type:String,required:!0}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goal-card"},[n("div",{staticClass:"goal-card__top-container"},[n("p",{staticClass:"goal-card__top-container--balance is-currency"},[t._v(t._s(t.balance))]),t._v(" "),n("p",{staticClass:"goal-card__top-container--date"},[t._v(t._s(t.date))])]),t._v(" "),n("div",{staticClass:"goal-card__bottom-container"},[n("div",{staticClass:"goal-card__bottom-container--icon",class:t.iconClass,domProps:{innerHTML:t._s(t.icon)}}),t._v(" "),n("div",{staticClass:"goal-card__bottom-container--id is-bold"},[t._v(t._s(t.text))])])])}),[],!1,null,null,null);e.default=component.exports},221:function(t,e,n){"use strict";n.r(e);var r=n(222),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=c.a},222:function(t,e){},223:function(t,e){t.exports='\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n<title>power-plug</title>\n<path d="M0 14v1.498c0 0.277 0.225 0.502 0.502 0.502h0.997c0.276 0 0.501-0.225 0.501-0.502v-1.498c0-0.959 0.801-2.273 2-2.779v-2.105c-2.316 0.536-4 2.854-4 4.884zM12.065 4.701l-2.53 1.898c-0.347 0.26-0.769 0.401-1.203 0.401h-2.327c-0.555 0-1.005 0.45-1.005 1.005v3.991c0 0.554 0.45 1.004 1.005 1.004h2.327c0.434 0 0.856 0.141 1.203 0.401l2.531 1.898c0.606 0.455 1.344 0.701 2.102 0.701h1.832v-12h-1.832c-0.758 0-1.496 0.246-2.103 0.701zM17 6v2h3v-2h-3zM17 14h3v-2h-3v2z"></path>\n</svg>\n'},224:function(t,e,n){var map={"./cloudcash.png":87,"./user.jpeg":165,"./user1.jpeg":225};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=224},225:function(t,e,n){t.exports=n.p+"img/user1.f8bd583.jpeg"},226:function(t,e,n){"use strict";n.r(e);var r=n(233),c=n(221);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var l=n(18),component=Object(l.a)(c.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{CardsSection:n(227).default,TransactionHistorySection:n(228).default,GoalsSection:n(229).default,OutcomeStatisticsSection:n(230).default,NewTransactionSection:n(231).default,LoanCard:n(232).default})},227:function(t,e,n){"use strict";n.r(e);var r=n(216),c=n(217),o=n(214),l=n(218),d=n(215),_={name:"CardsSection",components:{CreditCard:r.default,Balances:c.default,ProgressBar:o.default,SwitchComponent:l.default,Carousel:d.Carousel,Slide:d.Slide},data:function(){return{creditCards:this.$store.getters.cardsData}},methods:{changeData:function(t){this.$store.commit("updateActiveCard",t)}},computed:{cardEnabledComputed:{get:function(){return this.$store.getters.isEnabled},set:function(t){return this.$store.commit("updateIsEnabled",t)}}}},v=n(18),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cards-section"},[n("p",{staticClass:"card-title"},[t._v("Cards")]),t._v(" "),n("div",{staticClass:"cards-section__top-container"},[n("carousel",{attrs:{"per-page":1,navigationEnabled:!0,paginationEnabled:!1,navigationClickTargetSize:3},on:{"navigation-click":t.changeData}},t._l(t.creditCards,(function(e,r){return n("slide",{key:r},[n("credit-card",{attrs:{holder:e.holder,"expire-date":e.expireDate,"card-id":e.cardId,"is-enabled":t.cardEnabledComputed}})],1)})),1),t._v(" "),n("balances")],1),t._v(" "),n("div",{staticClass:"cards-section__bottom-container"},[n("progress-bar",{attrs:{"low-left-text":"Weekly payment limit","low-right-text":"$350.60 / $4000",width:t.$store.getters.weeklyPayment,color:t.$store.getters.isEnabled?"primary":"disabled"}}),t._v(" "),n("switch-component",{attrs:{trueText:"Enabled card",falseText:"Disabled card"},model:{value:t.cardEnabledComputed,callback:function(e){t.cardEnabledComputed=e},expression:"cardEnabledComputed"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgressBar:n(214).default})},228:function(t,e,n){"use strict";n.r(e);var r={name:"TransactionHistorySection",components:{TableComponent:n(219).default},computed:{transactions:function(){return this.$store.getters.transactionsHistory}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"transaction-history-section"},[n("p",{staticClass:"card-title"},[t._v("Transaction History")]),t._v(" "),n("table-component",{attrs:{transactions:t.transactions}})],1)}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,n){"use strict";n.r(e);var r=n(220),c=n(215),o={name:"GoalsSection",components:{GoalCard:r.default,Carousel:c.Carousel,Slide:c.Slide},computed:{goalCards:function(){return this.$store.getters.goals}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"goals-section"},[t._m(0),t._v(" "),n("carousel",{attrs:{"per-page":2,navigationEnabled:!0,paginationEnabled:!1,navigationClickTargetSize:3,"per-page-custom":[[530,3]]}},t._l(t.goalCards,(function(e,r){return n("slide",{key:r},[n("goal-card",{attrs:{balance:e.balance,date:e.date,icon:e.icon,"icon-class":t.$store.getters.isEnabled?e.iconClass:"is-disabled",text:e.text}})],1)})),1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goals-section__title-container"},[n("p",{staticClass:"card-title"},[t._v("Goals")]),t._v(" "),n("button",{staticClass:"infinite-button add-button"},[t._v("+")])])}],!1,null,null,null);e.default=component.exports},230:function(t,e,n){"use strict";n.r(e);n(43),n(223),n(34);var r={name:"OutcomeStatisticsSection",computed:{outcomeStatistics:function(){return this.$store.getters.outcomeStatistics}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"outcome-statistics-section"},[n("p",{staticClass:"card-title"},[t._v("Outcome statistics")]),t._v(" "),t._l(t.outcomeStatistics,(function(e,r){return n("div",{key:r,staticClass:"outcome-statistics-section__progress-bar-container"},[n("div",{staticClass:"outcome-statistics-section__progress-bar-container--icon",class:t.$store.getters.isEnabled?e.iconClass:"disabled-box-icon",domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("progress-bar",{staticClass:"outcome-statistics-section__progress-bar-container--bar",attrs:{"low-left-text":e.progressBarText,"low-right-text":"",color:t.$store.getters.isEnabled?e.progressBarColor:"disabled",width:e.width}}),t._v(" "),n("p",{staticClass:"outcome-statistics-section__progress-bar-container--percent is-percent"},[t._v("\n      "+t._s(e.width)+"\n    ")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgressBar:n(214).default})},231:function(t,e,n){"use strict";n.r(e);var r={name:"NewTransactionSection",computed:{avatars:function(){return this.$store.getters.newTransactions}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"new-transaction-section"},[r("p",{staticClass:"card-title"},[t._v("New transaction")]),t._v(" "),r("div",{staticClass:"new-transaction-section__avatars-container"},[t._l(t.avatars,(function(e,c){return r("div",{key:c,staticClass:"new-transaction-section__avatar-wrapper"},[r("img",{staticClass:"new-transaction-section__user-photo",attrs:{src:n(224)("./"+e.filename),alt:""}}),t._v(" "),r("span",{staticClass:"new-transaction-section__user-name secondary-info"},[t._v(t._s(e.name))])])})),t._v(" "),t._m(0)],2),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-transaction-section__button-wrapper"},[n("button",{staticClass:"infinite-button add-button"},[t._v("+")]),t._v(" "),n("span",{staticClass:"new-transaction-section__user-name secondary-info"},[t._v("\n        Add new")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-transaction-section__actions-container"},[n("input",{staticClass:"new-transaction-section__number-input",attrs:{type:"text"}}),t._v(" "),n("button",{staticClass:"infinite-button secondary-info"},[t._v("Send the transfer >")])])}],!1,null,null,null);e.default=component.exports},232:function(t,e,n){"use strict";n.r(e);var r={},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loan-card"},[n("p",{staticClass:"card-title"},[t._v("Get great loan! >")])])}],!1,null,null,null);e.default=component.exports},233:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"dashboard"},[n("div",{staticClass:"dashboard__first-column"},[n("cards-section"),t._v(" "),n("transaction-history-section")],1),t._v(" "),n("div",{staticClass:"dashboard__second-column"},[n("goals-section"),t._v(" "),n("outcome-statistics-section"),t._v(" "),n("div",{staticClass:"dashboard__second-column-horizontal-sections"},[n("new-transaction-section"),t._v(" "),n("loan-card")],1)],1)])},c=[]}}]);