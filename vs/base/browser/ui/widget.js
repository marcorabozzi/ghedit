/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)};define(["require","exports","vs/base/common/lifecycle","vs/base/browser/mouseEvent","vs/base/browser/keyboardEvent","vs/base/browser/dom"],function(e,t,n,o,r,s){"use strict";var i=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.onclick=function(e,t){this._register(s.addDisposableListener(e,s.EventType.CLICK,function(e){return t(new o.StandardMouseEvent(e))}))},t.prototype.onmousedown=function(e,t){this._register(s.addDisposableListener(e,s.EventType.MOUSE_DOWN,function(e){return t(new o.StandardMouseEvent(e))}))},t.prototype.onmouseover=function(e,t){this._register(s.addDisposableListener(e,s.EventType.MOUSE_OVER,function(e){return t(new o.StandardMouseEvent(e))}))},t.prototype.onnonbubblingmouseout=function(e,t){this._register(s.addDisposableNonBubblingMouseOutListener(e,function(e){return t(new o.StandardMouseEvent(e))}))},t.prototype.onkeydown=function(e,t){this._register(s.addDisposableListener(e,s.EventType.KEY_DOWN,function(e){return t(new r.StandardKeyboardEvent(e))}))},t.prototype.onkeyup=function(e,t){this._register(s.addDisposableListener(e,s.EventType.KEY_UP,function(e){return t(new r.StandardKeyboardEvent(e))}))},t.prototype.oninput=function(e,t){this._register(s.addDisposableListener(e,s.EventType.INPUT,t))},t.prototype.onblur=function(e,t){this._register(s.addDisposableListener(e,s.EventType.BLUR,t))},t.prototype.onfocus=function(e,t){this._register(s.addDisposableListener(e,s.EventType.FOCUS,t))},t.prototype.onchange=function(e,t){this._register(s.addDisposableListener(e,s.EventType.CHANGE,t))},t}(n.Disposable);t.Widget=i});