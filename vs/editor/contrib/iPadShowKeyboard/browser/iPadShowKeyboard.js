/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(["require","exports","vs/base/common/lifecycle","vs/base/browser/browser","vs/base/browser/dom","vs/editor/browser/editorBrowser","vs/editor/browser/editorBrowserExtensions","vs/css!./iPadShowKeyboard"],function(t,e,o,i,s,r,d){"use strict";var n=function(){function t(t){var e=this;this.editor=t,this.toDispose=[],i.isIPad&&(this.toDispose.push(t.onDidChangeConfiguration(function(){return e.update()})),this.update())}return t.prototype.update=function(){var t=!!this.widget,e=!this.editor.getConfiguration().readOnly;!t&&e?this.widget=new h(this.editor):t&&!e&&(this.widget.dispose(),this.widget=null)},t.prototype.getId=function(){return t.ID},t.prototype.dispose=function(){this.toDispose=o.dispose(this.toDispose),this.widget&&(this.widget.dispose(),this.widget=null)},t.ID="editor.contrib.iPadShowKeyboard",t}();e.IPadShowKeyboard=n;var h=function(){function t(t){var e=this;this.editor=t,this._domNode=document.createElement("textarea"),this._domNode.className="iPadShowKeyboard",this._toDispose=[],this._toDispose.push(s.addDisposableListener(this._domNode,"touchstart",function(t){e.editor.focus()})),this._toDispose.push(s.addDisposableListener(this._domNode,"focus",function(t){e.editor.focus()})),this.editor.addOverlayWidget(this)}return t.prototype.dispose=function(){this.editor.removeOverlayWidget(this),this._toDispose=o.dispose(this._toDispose)},t.prototype.getId=function(){return t.ID},t.prototype.getDomNode=function(){return this._domNode},t.prototype.getPosition=function(){return{preference:r.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER}},t.ID="editor.contrib.ShowKeyboardWidget",t}();d.EditorBrowserRegistry.registerEditorContribution(n)});