"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CrudEmpleados_CreateEmpleadosView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        name: '',
        cedula: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: []
    };
  },
  methods: {
    saveForm: function saveForm() {
      var _this = this;

      axios.post('/api/register', this.form).then(function () {
        console.log('saved');
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        console.log(error.response.data.error);
      });
      this.$router.push({
        name: "home"
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateEmpleadosView_vue_vue_type_template_id_64cc51de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateEmpleadosView.vue?vue&type=template&id=64cc51de& */ "./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=template&id=64cc51de&");
/* harmony import */ var _CreateEmpleadosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateEmpleadosView.vue?vue&type=script&lang=js& */ "./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateEmpleadosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateEmpleadosView_vue_vue_type_template_id_64cc51de___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateEmpleadosView_vue_vue_type_template_id_64cc51de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CrudEmpleados/CreateEmpleadosView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEmpleadosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateEmpleadosView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEmpleadosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=template&id=64cc51de&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=template&id=64cc51de& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEmpleadosView_vue_vue_type_template_id_64cc51de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEmpleadosView_vue_vue_type_template_id_64cc51de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEmpleadosView_vue_vue_type_template_id_64cc51de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateEmpleadosView.vue?vue&type=template&id=64cc51de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=template&id=64cc51de&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=template&id=64cc51de&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CrudEmpleados/CreateEmpleadosView.vue?vue&type=template&id=64cc51de& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-4" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card text-white bg-dark" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Ingrese")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("form", { attrs: { action: "" } }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Nombre Completo")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.name,
                    expression: "form.name",
                  },
                ],
                staticClass: "form-control mb-2",
                attrs: { type: "text", placeholder: "Nombre y Apellido" },
                domProps: { value: _vm.form.name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email",
                  },
                ],
                staticClass: "form-control mb-2",
                attrs: { type: "email", placeholder: "Email" },
                domProps: { value: _vm.form.email },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [_vm._v("Cedula")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.cedula,
                    expression: "form.cedula",
                  },
                ],
                staticClass: "form-control mb-2",
                attrs: { type: "text", placeholder: "Cedula" },
                domProps: { value: _vm.form.cedula },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "cedula", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [_vm._v("Crear password")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password,
                    expression: "form.password",
                  },
                ],
                staticClass: "form-control mb-2",
                attrs: { type: "password", placeholder: "********" },
                domProps: { value: _vm.form.password },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "password", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [
                _vm._v("Confirmar password"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password_confirmation,
                    expression: "form.password_confirmation",
                  },
                ],
                staticClass: "form-control mb-2",
                attrs: { type: "password", placeholder: "********" },
                domProps: { value: _vm.form.password_confirmation },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.form,
                      "password_confirmation",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.saveForm()
                    },
                  },
                },
                [_vm._v("Registrar")]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);