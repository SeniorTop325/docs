(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{194:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Vuetable comes ready with two pagination components and a pagination information component which you can extend to easily build your own.")]),t._v(" "),e("ul",[e("li",[e("p",[e("router-link",{attrs:{to:"./../api/pagination/pagination.html"}},[t._v("VuetablePagination")]),t._v("\nIt is implemented as a sliding window which displays only a certain number of pages with buttons to jump to the first page, previous page, next page, and the last page.")],1),t._v(" "),t._m(1),t._m(2)]),t._v(" "),e("li",[e("p",[e("router-link",{attrs:{to:"./../api/pagination/dropdown.html"}},[t._v("VuetablePaginationDropdown")]),t._v("\nIt is implemented as a dropdown button showing the current page. User can click the dropdown to select the page. It also has previous page button and next page button on its side. This pagination component is designed to take less space.")],1),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),e("p",[t._v("In order for the Vuetable's compatible pagination component to work, you'll need to bind it with Vuetable first. This could be done in 3 easy steps:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("The pagination component assumes that the following information are available for its calculation")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("Once the pagination information is available, the following computed properties can be used to build the template of the pagination component.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("You can even create your own pagination component without using it, but would still be able to work with Vuetable if you understand how it works.")]),t._v(" "),e("p",[t._v("See also:")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./../api/pagination/mixin.html"}},[t._v("VuetablePaginationMixin")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./../api/pagination/pagination.html"}},[t._v("VuetablePagination")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./../api/pagination/dropdown.html"}},[t._v("VuetablePaginationDropdown")])],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagination","aria-hidden":"true"}},[this._v("#")]),this._v(" Pagination")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[First][Prev][1][2][3][4][5][Next][Last]\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("number of sliding pages = onEachSide * 2 +1")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("[Prev][ Page 1 ▼ ][Next]\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This is possible because they are all built on top of the "),a("code",[this._v("VuetablePaginationMixin")]),this._v(", which contains most of the pagination logic. So, you just provide the template that embedded pagination functionality from this mixin.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("And this is exactly what happens with "),a("code",[this._v("VuetablePagination")]),this._v(" component. If you look at the "),a("a",{attrs:{href:""}},[this._v("source code")]),this._v(" of the component, you'll see that it only contains the template. All the methods and props are in fact inside the mixin.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("For "),a("code",[this._v("VuetablePaginationDropdown")]),this._v(", it only uses the mixin, but also adds its own prop and event.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"zero-based-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zero-based-pagination","aria-hidden":"true"}},[this._v("#")]),this._v(" Zero Based Pagination")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In some system, the first page starts at 0 (zero) and the second page starts at 1, and so on. In that case, you can use "),a("a",{attrs:{href:""}},[a("code",[this._v("first-page")])]),this._v(" prop to set it to "),a("code",[this._v("0")]),this._v(". So when Vuetable requests the first page from the API endpoint, it will request page "),a("code",[this._v("0")]),this._v(" instead.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("vuetable\n    api"),e("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("url"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first"),e("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("page"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"0"')]),t._v("\n  "),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token operator"}},[t._v("<")]),e("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("vuetable"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"binding-pagination-component-to-vuetable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-pagination-component-to-vuetable","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Pagination Component to Vuetable")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("p",[t._v("On "),e("code",[t._v("Vuetable")]),t._v(", use "),e("code",[t._v("v-on")]),t._v(" to listen to "),e("code",[t._v("vuetable:pagination-data")]),t._v(" event and specify the binding handler function.")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    <vuetable ref="vuetable"\n      // This tells Vuetable that when the paginaiton data is available,\n      // call `onPaginationData` method.\n      @vuetable:pagination-data="onPaginationData"\n    >'),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vuetable")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vuetable-pagination")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pagination"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vuetable-pagination")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tempalte")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("On "),e("code",[t._v("VuetablePagination")]),t._v(", use "),e("code",[t._v("v-on")]),t._v(" to listen to "),e("code",[t._v("vuetable-pagination:change-page")]),t._v(" event and specify the binding handler function.")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    <vuetable ref="vuetable"\n      //...\n    >'),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vuetable")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    <vuetable-pagination ref="pagination"\n      // This tells VuetablePagination component that when there is\n      // a request to change the page, call `onChangePage` method.\n      @vuetable-pagination:change-page="onChangePage"\n    >'),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vuetable-pagination")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tempalte")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Define both of the binding handler functions in the component.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\nmethods"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// when the pagination data is available, set it to pagination component")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("onPaginationData")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paginationData"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pagination"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("setPaginationData")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paginationData"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// when the user click something that causes the page to change,")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v('// call "changePage" method in Vuetable, so that that page will be')]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// requested from the API endpoint.")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("onChangePage")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuetable"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("changePage")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"how-the-pagination-component-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-the-pagination-component-works","aria-hidden":"true"}},[this._v("#")]),this._v(" How the Pagination Component Works")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("total")]),t._v(" -- the total number of records available")]),t._v(" "),e("li",[e("code",[t._v("per_page")]),t._v(" -- the number of records in each page (page size)")]),t._v(" "),e("li",[e("code",[t._v("current_page")]),t._v(" -- the current page number of this data chunk")]),t._v(" "),e("li",[e("code",[t._v("last_page")]),t._v(" -- the last page number of this data")]),t._v(" "),e("li",[e("code",[t._v("next_page_url")]),t._v(" -- URL of the next page")]),t._v(" "),e("li",[e("code",[t._v("prev_page_url")]),t._v(" -- URL of the previous page")]),t._v(" "),e("li",[e("code",[t._v("from")]),t._v(" -- the start record of this page, in relation to page size")]),t._v(" "),e("li",[e("code",[t._v("to")]),t._v(" -- the end record of this page, in relation to page size")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("These information should be passed down to it via "),a("code",[this._v("setPaginationData")]),this._v(" method through its parameter object.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Vuetable expects this meta data to be returned from the API endpoint together with the data. It will emit "),a("code",[this._v("vuetable:pagination-data")]),this._v(" event with the pagination data every time the data is successfully retrieved from the API endpoiint.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),a("p",[this._v("You must ensure that the aboved information are available or the "),a("code",[this._v("VuetablePagination")]),this._v(" component will not work as expected.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("totalPage")]),t._v(" -- the last page number")]),t._v(" "),e("li",[e("code",[t._v("isOnFirstPage")]),t._v(" -- whether the current page number is the first page")]),t._v(" "),e("li",[e("code",[t._v("isOnLastPage")]),t._v(" -- whether the current page number is the last page")]),t._v(" "),e("li",[e("code",[t._v("notEnoughPages")]),t._v(" -- whether all the pages is less than the sliding window size. (Please help suggest for a better name)")]),t._v(" "),e("li",[e("code",[t._v("windowSize")]),t._v(" -- the size of a sliding pagination window. Calculated by "),e("code",[t._v("on-each-side")]),t._v(" * 2 +1.")]),t._v(" "),e("li",[e("code",[t._v("windowStart")]),t._v(" -- the first page number of this sliding pagination window.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Like Vuetable, "),a("code",[this._v("VuetablePagination")]),this._v(" and "),a("code",[this._v("VuetablePaginationDropdown")]),this._v(" try to be CSS as neutral as possible, so you could use it in any CSS framework. But to make it looks nice and integrated, you should customize the following CSS classes")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("wrapperClass")])]),t._v(" "),e("li",[e("code",[t._v("activeClass")])]),t._v(" "),e("li",[e("code",[t._v("disabledClass")])]),t._v(" "),e("li",[e("code",[t._v("pageClass")])]),t._v(" "),e("li",[e("code",[t._v("linkClass")])]),t._v(" "),e("li",[e("code",[t._v("paginationClass")])]),t._v(" "),e("li",[e("code",[t._v("paginationInfoClass")])]),t._v(" "),e("li",[e("code",[t._v("dropdownClass")])]),t._v(" "),e("li",[e("code",[t._v("icons")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("first")])]),t._v(" "),e("li",[e("code",[t._v("prev")])]),t._v(" "),e("li",[e("code",[t._v("next")])]),t._v(" "),e("li",[e("code",[t._v("last")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Both "),a("code",[this._v("VuetablePagination")]),this._v(" and "),a("code",[this._v("VuetablePaginationDropdown")]),this._v(" have a few prop for customization. Please check its documentation for more detail.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"making-your-own-pagination-for-vuetable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-your-own-pagination-for-vuetable","aria-hidden":"true"}},[this._v("#")]),this._v(" Making Your Own Pagination for Vuetable")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("VuetablePaginationMixin")]),this._v(" has already provided most of the functionality for a pagination component. You can easily use it to create a pagination component for specific CSS framework with minimum effort.")])}],!1,null,null,null);s.options.__file="pagination.md";a.default=s.exports}}]);