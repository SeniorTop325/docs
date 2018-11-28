(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{170:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vuetable-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuetable-methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Vuetable - Methods")]),e._v(" "),a("h2",{attrs:{id:"normalizefields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normalizefields","aria-hidden":"true"}},[e._v("#")]),e._v(" normalizeFields")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")]),e._v(" "),a("em",[e._v("none")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Parse "),a("code",[e._v("fields")]),e._v(' definition to field objects usable by Vuetable. This method is called automatically "once" during\nthe '),a("code",[e._v("created")]),e._v(" life cycle hook.")]),e._v(" "),a("p",[e._v("If you dynamically change the "),a("code",[e._v("fields")]),e._v(" prop, you will need to manually call "),a("code",[e._v("normalizeFields")]),e._v(" method to properly\nparse the "),a("code",[e._v("fields")]),e._v(" definition as Vuetable will not be able to pickup the change and will not work as expected.")])])]),e._v(" "),a("h2",{attrs:{id:"setdata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setdata","aria-hidden":"true"}},[e._v("#")]),e._v(" setData")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("data: "),a("code",[e._v("Array | Object")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("You can use this method to manually set the data that Vuetable will be used for table rendering instead of requesting data from the server.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("data")]),e._v(" parameter is of type Array, Vuetable will use those array as the data to render the table.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("data")]),e._v(" parameter is of type Object, it must be conform to the "),a("a",{attrs:{href:"#"}},[e._v("Data Structure")]),e._v(" that Vuetable expects (e.g. contains both data and pagination information).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v("\nThe method will automatically set "),a("code",[e._v("api-mode")]),e._v(" to "),a("code",[e._v("false")]),e._v(".")])])])]),e._v(" "),a("h2",{attrs:{id:"reload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reload","aria-hidden":"true"}},[e._v("#")]),e._v(" reload")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")]),e._v(" "),a("em",[e._v("none")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Force Vuetable to reload the data from the server using the current value of parameters. However, the page number will not be reset.")])])]),e._v(" "),a("h2",{attrs:{id:"refresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh","aria-hidden":"true"}},[e._v("#")]),e._v(" refresh")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")]),e._v(" "),a("em",[e._v("none")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Force Vuetable to reload the data from the server and the page number will be reset to 1. It's the same as using goto-page page event to load page 1.")])])]),e._v(" "),a("h2",{attrs:{id:"resetdata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resetdata","aria-hidden":"true"}},[e._v("#")]),e._v(" resetData")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")]),e._v(" "),a("em",[e._v("none")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("This will set "),a("code",[e._v("tableData")]),e._v(" and "),a("code",[e._v("tablePagination")]),e._v(" to "),a("code",[e._v("null")]),e._v(" resulting in not displaying any data in the table (as there is no data to display). This method will also fire "),a("code",[e._v("vuetable:data-reset")]),e._v(" event which can be captured to force update pagination component accordingly.")])])]),e._v(" "),a("h2",{attrs:{id:"transform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transform","aria-hidden":"true"}},[e._v("#")]),e._v(" transform")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("data: "),a("code",[e._v("Array")])])])]),e._v(" "),a("li",[a("p",[e._v("must return: "),a("code",[e._v("Array")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("In case, the data returned from the server is not in the format that Vuetable expected, you can define "),a("code",[e._v("transform")]),e._v(" method on the main Vue instance\nand Vuetable will automatically called it with the data from the server.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("transform")]),e._v(" method must return the array of data that Vuetable expected.")]),e._v(" "),a("p",[e._v("See also: Data Format (JSON)")])])]),e._v(" "),a("h2",{attrs:{id:"gotopreviouspage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gotopreviouspage","aria-hidden":"true"}},[e._v("#")]),e._v(" gotoPreviousPage")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")]),e._v(" "),a("em",[e._v("none")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[a("strong",[e._v("** API Mode Only **")])]),e._v(" "),a("p",[e._v("This method will automatically request the previous page of data from the server.")])])]),e._v(" "),a("h2",{attrs:{id:"gotonextpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gotonextpage","aria-hidden":"true"}},[e._v("#")]),e._v(" gotoNextPage")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")]),e._v(" "),a("em",[e._v("none")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[a("strong",[e._v("** API Mode Only **")])]),e._v(" "),a("p",[e._v("This method will automatically request the next page of data from the server.")])])]),e._v(" "),a("h2",{attrs:{id:"gotopage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gotopage","aria-hidden":"true"}},[e._v("#")]),e._v(" gotoPage")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("page: "),a("code",[e._v("Number")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[a("strong",[e._v("** API Mode Only **")])]),e._v(" "),a("p",[e._v("This method will automatically request the specified page of data from the server.")])])]),e._v(" "),a("h2",{attrs:{id:"changepage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changepage","aria-hidden":"true"}},[e._v("#")]),e._v(" changePage")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("page: "),a("code",[e._v("String")]),e._v(", "),a("code",[e._v("Number")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[a("strong",[e._v("** API Mode Only **")])]),e._v(" "),a("p",[e._v("This method will automatically request the specified page of data from the server. You can either pass in the page number, or 'prev' string for previous page, or 'next' string for next page.")])])]),e._v(" "),a("h2",{attrs:{id:"isvisibledetailrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isvisibledetailrow","aria-hidden":"true"}},[e._v("#")]),e._v(" isVisibleDetailRow")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("rowId: "),a("code",[e._v("RowIdentifier")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Determine if the detail row of the given row identifier is marked as visible.")]),e._v(" "),a("p",[e._v("See also: "),a("a",{attrs:{href:"Row-Identifier"}},[e._v("Row Identifier")])])])]),e._v(" "),a("h2",{attrs:{id:"showdetailrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showdetailrow","aria-hidden":"true"}},[e._v("#")]),e._v(" showDetailRow")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("rowId: "),a("code",[e._v("RowIdentifier")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Force displaying the detail row of the given row.")]),e._v(" "),a("p",[e._v("See also: "),a("a",{attrs:{href:"Row-Identifier"}},[e._v("Row Identifier")])])])]),e._v(" "),a("h2",{attrs:{id:"hidedetailrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidedetailrow","aria-hidden":"true"}},[e._v("#")]),e._v(" hideDetailRow")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("rowId: "),a("code",[e._v("RowIdentifier")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Force hiding the detail row of the given row.")]),e._v(" "),a("p",[e._v("See also: "),a("a",{attrs:{href:"Row-Identifier"}},[e._v("Row Identifier")])])])]),e._v(" "),a("h2",{attrs:{id:"toggledetailrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toggledetailrow","aria-hidden":"true"}},[e._v("#")]),e._v(" toggleDetailRow")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("rowId: "),a("code",[e._v("RowIdentifier")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Toggle the display of the detail row of the given row.")]),e._v(" "),a("p",[e._v("See also: "),a("a",{attrs:{href:"Row-Identifier"}},[e._v("Row Identifier")])])])]),e._v(" "),a("h2",{attrs:{id:"showfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showfield","aria-hidden":"true"}},[e._v("#")]),e._v(" showField")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("index: "),a("code",[e._v("Number")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Force displaying the specified field.")])])]),e._v(" "),a("h2",{attrs:{id:"hidefield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidefield","aria-hidden":"true"}},[e._v("#")]),e._v(" hideField")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("index: "),a("code",[e._v("Number")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Force hiding the specified field.")])])]),e._v(" "),a("h2",{attrs:{id:"togglefield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#togglefield","aria-hidden":"true"}},[e._v("#")]),e._v(" toggleField")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("params:")])]),e._v(" "),a("ul",[a("li",[e._v("index: "),a("code",[e._v("Number")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Toggle display of the specified field.")])])])])}],!1,null,null,null);i.options.__file="methods.md";t.default=i.exports}}]);