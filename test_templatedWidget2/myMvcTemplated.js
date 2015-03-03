define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"dojo/text!./test_mvc_widget_template.html",
	"dojox/mvc/at",
	'dojox/mvc/EditModelRefController',
	'dijit/form/TextBox',
	'dijit/form/ValidationTextBox',
	'dijit/form/Button',
	'dojox/mvc/Group',
	'dojox/mvc/Output'
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, registry, template, at){
	return declare("dojox.mvc.tests.test_templatedWidget2.myMvcTemplated", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
		// summary:
		//		A sample templated widget for dojox.mvc
		// description:
		//		This template is used to show how to use exprchar to avoid instance of _TemplatedMixin error in dojo.mvc data binding.
		//		If the templateString contains ${xxx}, it will throw an template error, use #{xxx} with exprchar :"#" instead.
		//		See how it works in test_mvc_widget.html and test_mvc_widget_template.html

		// ctrl: dojox.mvc.ModelRefController
		//		The controller that the form widgets in the template refer to.
		ctrl: null,

		templateString: template,

		setRef: function(field, attr) { // toggle the setting
			ctrl.get(field).set(attr,!ctrl.get(field).get(attr));
		},

		toggleField1Required: function() { // toggle the setting
			this.setRef('field1','required');
		},
		toggleField1Disabled: function() { // toggle the setting
			this.setRef('field1','disabled');
		},
		toggleField1ReadOnly: function() { // toggle the setting
			this.setRef('field1','readOnly');
		},


		buildRendering: function(){
			console.log("call myMvcTemplated buildRendering");
			window.at = at;			
			this.inherited(arguments);
		},

		getParent: function(){
			console.log("Call myMvcTemplated getParent");
			return null;
		}
	});
});
