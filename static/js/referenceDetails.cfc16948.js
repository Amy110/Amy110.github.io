(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referenceDetails"],{"502d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.referenceDetails?n("div",{staticClass:"reference-details-container"},[n("h1",{staticClass:"reference-title"},[e._v(e._s(e.referenceDetails.title))]),e._v(" "),n("div",{staticClass:"create-time"},[e._v(e._s(e.referenceDetails.createTime))]),e._v(" "),n("div",{staticClass:"article-content",domProps:{innerHTML:e._s(e.referenceDetails.content)}})]):e._e()},u=[],i=n("8e44"),a={data:function(){return{referenceDetails:null}},mounted:function(){var e=this,t=this.$route.query.datumId;Object(i["p"])(t).then((function(t){e.referenceDetails=t.result}))}},o=a,c=(n("ec8c"),n("2877")),s=Object(c["a"])(o,r,u,!1,null,"6e2d46cb",null);t["default"]=s.exports},"63b9":function(e,t,n){},7884:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n("8982"),u=n("4328"),i=n.n(u),a=n("4360"),o=n("7ca6"),c=function(e){return new Promise((function(t,n){r["a"].post("user/login",i.a.stringify(e)).then((function(e){var r=e.result;a["a"].dispatch("user/setUserInfo",r).then((function(){t(e)})).catch((function(e){n(e)}))})).catch((function(e){n(e)}))}))},s=function(){a["a"].dispatch("user/removeUserInfo").then((function(){Object(o["h"])()}))}},"7ca6":function(e,t,n){"use strict";n.d(t,"h",(function(){return u})),n.d(t,"m",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"u",(function(){return o})),n.d(t,"r",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"o",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"i",(function(){return h})),n.d(t,"t",(function(){return g})),n.d(t,"q",(function(){return l})),n.d(t,"f",(function(){return m})),n.d(t,"k",(function(){return v})),n.d(t,"l",(function(){return y})),n.d(t,"j",(function(){return b})),n.d(t,"n",(function(){return w})),n.d(t,"e",(function(){return I})),n.d(t,"p",(function(){return P})),n.d(t,"s",(function(){return C})),n.d(t,"d",(function(){return q}));var r=n("a18c"),u=function(){r["a"].push({path:"index"})},i=function(e){r["a"].push({path:"peptidedetals",query:{id:e}})},a=function(){r["a"].push({path:"contactus"})},o=function(){r["a"].push({path:"teamIntroduction"})},c=function(){r["a"].push({path:"researchService"})},s=function(){r["a"].push({path:"geneProject"})},f=function(){r["a"].push({path:"cellProject"})},d=function(){r["a"].push({path:"pharmacyProject"})},p=function(){r["a"].push({path:"aboutUs"})},h=function(){r["a"].push({path:"login"})},g=function(){r["a"].push({path:"register"})},l=function(e){r["a"].push({path:"referenceDetails",query:{datumId:e}})},m=function(){r["a"].push({path:"customService"})},v=function(){r["a"].push({path:"news"})},y=function(e){r["a"].push({path:"newsdetails",query:{nId:e}})},b=function(e){r["a"].push({path:"peptideList",query:{type:e}})},w=function(){r["a"].push({path:"peptideIntroduce"})},I=function(){r["a"].push({path:"customPeptide"})},P=function(){r["a"].push({path:"polypeptideMall"})},C=function(){r["a"].push({path:"shoppingcart"})},q=function(){r["a"].push({path:"customPeptideCart"})}},8982:function(e,t,n){"use strict";var r=n("bc3a"),u=n.n(r),i=(n("9923"),u.a.create({baseURL:"http://39.96.32.197:8095/peptide/api/",timeout:25e3}));i.interceptors.request.use((function(e){return new Promise((function(t,n){t(e)}))}),(function(e){Promise.reject(e)})),i.interceptors.response.use((function(e){var t=e.data;return t.hasError?Promise.reject(e.data):t}),(function(e){return Promise.reject(e)})),t["a"]=i},"8e44":function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return f})),n.d(t,"s",(function(){return d})),n.d(t,"u",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return l})),n.d(t,"o",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"l",(function(){return y})),n.d(t,"t",(function(){return b})),n.d(t,"g",(function(){return w})),n.d(t,"p",(function(){return I})),n.d(t,"r",(function(){return P})),n.d(t,"m",(function(){return C})),n.d(t,"d",(function(){return q})),n.d(t,"h",(function(){return D})),n.d(t,"n",(function(){return U})),n.d(t,"q",(function(){return j})),n.d(t,"f",(function(){return _}));var r=n("8982"),u=n("4328"),i=n.n(u),a=n("7884"),o=n("4360"),c=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return r["a"].get("parameter/queryNewsTypeData")},s=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].get("news/queryNewsDetails?newsId="+e)},f=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t="news/queryNews?pageSize="+e.pageSize+"&page="+e.page+"&newsType="+encodeURIComponent(e.newsType);return r["a"].get(t)},d=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].post("user/saveUserData",i.a.stringify(e))},p=function(e){return Object(a["a"])(e)},h=function(){return!!o["a"].getters.userInfo},g=function(e){return r["a"].post("message/saveMessageData",i.a.stringify(e))},l=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].post("order/saveOrderData",i.a.stringify(e))},m=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].get("catalogue/getCatalogueTypes")},v=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t="catalogue/getCatalogueTidesPage?pageSize="+e.pageSize+"&page="+e.page+"&sequence="+encodeURIComponent(e.sequence)+"&typeName="+encodeURIComponent(e.typeName);return r["a"].get(t)},y=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].get("catalogue/getCatalogueTides?tideId="+e)},b=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].post("order/saveOrderData",i.a.stringify(e))},w=function(){return r["a"].get("parameter/getParameterData")},I=function(e){return r["a"].get("catalogue/getDatum?datumId="+e)},P=function(e){var t="libraries/queryPeptidesLibrariesList?sequence="+encodeURIComponent(e.sequence)+"&aminoAcid="+encodeURIComponent(e.aminoAcid)+"&groupModel="+encodeURIComponent(e.groupModel);return r["a"].get(t)},C=function(e){return r["a"].get("libraries/getQueryCriteria?typeName="+e)},q=function(e){var t="libraries/getAminoAcid?groupModel="+encodeURIComponent(e);return r["a"].get(t)},D=function(e){var t="libraries/getGroupModel?typeName="+encodeURIComponent(e);return r["a"].get(t)},U=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].get("libraries/getPeptidesLibraries?peptidesId="+e)},j=function(){var e=o["a"].getters.cartProducts;return new Promise((function(t,n){var r=e;t(r)}))},_=function(){var e=o["a"].getters.customCartProducts;return new Promise((function(t,n){var r=e;t(r)}))}},ec8c:function(e,t,n){"use strict";var r=n("63b9"),u=n.n(r);u.a}}]);