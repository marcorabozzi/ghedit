define(["require","exports","vs/base/common/types","vs/base/common/assert"],function(t,n,i,s){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";var e=function(){function t(){this.data={}}return t.prototype.add=function(t,n){s.ok(i.isString(t)),s.ok(i.isObject(n)),s.ok(!this.data.hasOwnProperty(t),"There is already an extension with this id"),this.data[t]=n},t.prototype.knows=function(t){return this.data.hasOwnProperty(t)},t.prototype.as=function(t){return this.data[t]||null},t}();n.Registry=new e;var a=function(){function t(){this.toBeInstantiated=[],this.instances=[]}return t.prototype.setInstantiationService=function(t){for(this.instantiationService=t;this.toBeInstantiated.length>0;){var n=this.toBeInstantiated.shift();this.instantiate(n)}},t.prototype.instantiate=function(t){var n=this.instantiationService.createInstance(t);this.instances.push(n)},t.prototype._register=function(t){this.instantiationService?this.instantiate(t):this.toBeInstantiated.push(t)},t.prototype._getInstances=function(){return this.instances.slice(0)},t.prototype._setInstances=function(t){this.instances=t},t}();n.BaseRegistry=a});