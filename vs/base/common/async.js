/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};define(["require","exports","vs/base/common/errors","vs/base/common/platform","vs/base/common/winjs.base","vs/base/common/cancellation","vs/base/common/lifecycle"],function(t,e,n,o,i,r,u){"use strict";function s(t){return t&&"function"==typeof t.then}function c(t){return s(t)?t:i.TPromise.as(t)}function l(t){var e=new r.CancellationTokenSource;return new i.TPromise(function(n,o){var i=t(e.token);s(i)?i.then(n,o):n(i)},function(){e.cancel()})}function a(t,e){return t.onCancellationRequested(function(){return e.cancel()}),e}function h(t,e){return new i.TPromise(function(o,i,r){t.done(function(t){try{e(t)}catch(i){n.onUnexpectedError(i)}o(t)},function(t){try{e(t)}catch(o){n.onUnexpectedError(o)}i(t)},function(t){r(t)})},function(){t.cancel()})}function m(t){function e(){return t.length?t.pop()():null}function n(t){t&&o.push(t);var r=e();return r?r.then(n):i.TPromise.as(o)}var o=[];return t=t.reverse(),i.TPromise.as(null).then(n)}function f(t){var e,n=this,o=!1;return function(){return o?e:(o=!0,e=t.apply(n,arguments))}}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new i.Promise(function(n,o){return t.apply(void 0,e.concat([function(t,e){return t?o(t):n(e)}]))})}function d(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return new i.Promise(function(o,i){return e.call.apply(e,[t].concat(n,[function(t,e){return t?i(t):o(e)}]))})}e.toThenable=c,e.asWinJsPromise=l,e.wireCancellationToken=a;var v=function(){function t(){this.activePromise=null,this.queuedPromise=null,this.queuedPromiseFactory=null}return t.prototype.queue=function(t){var e=this;if(this.activePromise){if(this.queuedPromiseFactory=t,!this.queuedPromise){var n=function(){e.queuedPromise=null;var t=e.queue(e.queuedPromiseFactory);return e.queuedPromiseFactory=null,t};this.queuedPromise=new i.Promise(function(t,o,i){e.activePromise.then(n,n,i).done(t)},function(){e.activePromise.cancel()})}return new i.Promise(function(t,n,o){e.queuedPromise.then(t,n,o)},function(){})}return this.activePromise=t(),new i.Promise(function(t,n,o){e.activePromise.done(function(n){e.activePromise=null,t(n)},function(t){e.activePromise=null,n(t)},o)},function(){e.activePromise.cancel()})},t}();e.Throttler=v;var P=function(){function t(){this.current=i.TPromise.as(null)}return t.prototype.queue=function(t){return this.current=this.current.then(function(){return t()})},t}();e.SimpleThrottler=P;var y=function(){function t(t){this.defaultDelay=t,this.timeout=null,this.completionPromise=null,this.onSuccess=null,this.task=null}return t.prototype.trigger=function(t,e){var n=this;return void 0===e&&(e=this.defaultDelay),this.task=t,this.cancelTimeout(),this.completionPromise||(this.completionPromise=new i.Promise(function(t){n.onSuccess=t},function(){}).then(function(){n.completionPromise=null,n.onSuccess=null;var t=n.task;return n.task=null,t()})),this.timeout=setTimeout(function(){n.timeout=null,n.onSuccess(null)},e),this.completionPromise},t.prototype.isTriggered=function(){return null!==this.timeout},t.prototype.cancel=function(){this.cancelTimeout(),this.completionPromise&&(this.completionPromise.cancel(),this.completionPromise=null)},t.prototype.cancelTimeout=function(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},t}();e.Delayer=y;var T=function(t){function e(e){t.call(this,e),this.throttler=new v}return __extends(e,t),e.prototype.trigger=function(e,n){var o=this;return t.prototype.trigger.call(this,function(){return o.throttler.queue(e)},n)},e}(y);e.ThrottledDelayer=T;var _=function(t){function e(e,n){void 0===n&&(n=0),t.call(this,e),this.minimumPeriod=n,this.periodThrottler=new v}return __extends(e,t),e.prototype.trigger=function(e,n){var o=this;return t.prototype.trigger.call(this,function(){return o.periodThrottler.queue(function(){return i.Promise.join([i.TPromise.timeout(o.minimumPeriod),e()]).then(function(t){return t[1]})})},n)},e}(T);e.PeriodThrottledDelayer=_;var k=function(){function t(){var t=this;this._value=new i.TPromise(function(e,n){t._completeCallback=e,t._errorCallback=n})}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),t.prototype.complete=function(t){this._completeCallback(t)},t.prototype.error=function(t){this._errorCallback(t)},t}();e.PromiseSource=k;var g=function(t){function e(e){var o,i,r;t.call(this,function(t,e,n){o=t,i=e,r=n},function(){i(n.canceled())}),e.then(o,i,r)}return __extends(e,t),e}(i.TPromise);e.ShallowCancelThenPromise=g,e.always=h,e.sequence=m,e.once=f;var w=function(){function t(t){this.maxDegreeOfParalellism=t,this.outstandingPromises=[],this.runningPromises=0}return t.prototype.queue=function(t){var e=this;return new i.TPromise(function(n,o,i){e.outstandingPromises.push({factory:t,c:n,e:o,p:i}),e.consume()})},t.prototype.consume=function(){for(var t=this;this.outstandingPromises.length&&this.runningPromises<this.maxDegreeOfParalellism;){var e=this.outstandingPromises.shift();this.runningPromises++;var n=e.factory();n.done(e.c,e.e,e.p),n.done(function(){return t.consumed()},function(){return t.consumed()})}},t.prototype.consumed=function(){this.runningPromises--,this.consume()},t}();e.Limiter=w;var b=function(t){function e(){t.call(this),this._token=-1}return __extends(e,t),e.prototype.dispose=function(){this.cancel(),t.prototype.dispose.call(this)},e.prototype.cancel=function(){this._token!==-1&&(o.clearTimeout(this._token),this._token=-1)},e.prototype.cancelAndSet=function(t,e){var n=this;this.cancel(),this._token=o.setTimeout(function(){n._token=-1,t()},e)},e.prototype.setIfNotSet=function(t,e){var n=this;this._token===-1&&(this._token=o.setTimeout(function(){n._token=-1,t()},e))},e}(u.Disposable);e.TimeoutTimer=b;var q=function(t){function e(){t.call(this),this._token=-1}return __extends(e,t),e.prototype.dispose=function(){this.cancel(),t.prototype.dispose.call(this)},e.prototype.cancel=function(){this._token!==-1&&(o.clearInterval(this._token),this._token=-1)},e.prototype.cancelAndSet=function(t,e){this.cancel(),this._token=o.setInterval(function(){t()},e)},e}(u.Disposable);e.IntervalTimer=q;var S=function(){function t(t,e){this.timeoutToken=-1,this.runner=t,this.timeout=e,this.timeoutHandler=this.onTimeout.bind(this)}return t.prototype.dispose=function(){this.cancel(),this.runner=null},t.prototype.cancel=function(){this.isScheduled()&&(o.clearTimeout(this.timeoutToken),this.timeoutToken=-1)},t.prototype.setRunner=function(t){this.runner=t},t.prototype.schedule=function(t){void 0===t&&(t=this.timeout),this.cancel(),this.timeoutToken=o.setTimeout(this.timeoutHandler,t)},t.prototype.isScheduled=function(){return this.timeoutToken!==-1},t.prototype.onTimeout=function(){this.timeoutToken=-1,this.runner&&this.runner()},t}();e.RunOnceScheduler=S,e.nfcall=p,e.ninvoke=d});