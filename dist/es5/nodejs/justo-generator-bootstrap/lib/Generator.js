"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _get = function get(object, property, receiver) {if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {return get(parent, property, receiver);}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}};var _justoGenerator = require("justo-generator");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_Generator) {_inherits(_class, _Generator);









  function _class(opts, responses) {_classCallCheck(this, _class);return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, 
    opts, responses));}_createClass(_class, [{ key: "init", value: function init() 





















    {
      _get(Object.getPrototypeOf(_class.prototype), "init", this).call(this);} }, { key: "fin", value: function fin() 





    {
      _get(Object.getPrototypeOf(_class.prototype), "fin", this).call(this);} }, { key: "prompt", value: function prompt(





    answers) {
      this.input({ name: "title", title: "Title" });

      if (this.confirm({ name: "fontAwesome", title: "Would you like to use 'Font Awesome'?" })) {
        this.list({ name: "fontAwesome", title: "  How to link it?", choices: ["local", "CDN (MAXCDN)"] });}} }, { key: "generate", value: function generate(






    answers) {
      this.mkdir("app/fonts");
      this.mkdir("app/images");
      this.mkdir("app/scripts");
      this.mkdir("app/styles");
      this.template("app/index.html", { 
        title: answers.title, 
        bootstrapCss: "styles/bootstrap.min.css", 
        bootstrapThemeCss: "styles/bootstrap-theme.min.css", 
        bootstrapJs: "scripts/bootstrap.min.js", 
        jqueryJs: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js", 
        fontAwesome: 
        answers.fontAwesome == "local" ? 
        "fonts/font-awesome.min.css" : 

        answers.fontAwesome == "CDN (MAXCDN)" ? 
        "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" : 
        false });



      this.mkdir("test/unit");} }, { key: "help", get: function get() {return { desc: "Generate a Bootstrap project.", params: { title: "The index.html <title>.", fontAwesome: "Use 'Font Awesome': 'false', nope; 'local', locally; or 'CDN (MAXCDN)'." }, commands: { add: "Create a Bootstrap file." } };} }]);return _class;}(_justoGenerator.Generator);exports.default = _class;