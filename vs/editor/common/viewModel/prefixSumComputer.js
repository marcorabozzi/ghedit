define(["require","exports"],function(e,t){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";var i=function(){function e(e,t){this.index=e,this.remainder=t}return e}();t.PrefixSumIndexOfResult=i;var r=function(){function e(e){this.values=e,this.prefixSum=[];for(var t=0,i=this.values.length;t<i;t++)this.prefixSum[t]=0;this.prefixSumValidIndex=-1}return e.prototype.getCount=function(){return this.values.length},e.prototype.insertValue=function(e,t){e=Math.floor(e),t=Math.floor(t),this.values.splice(e,0,t),this.prefixSum.splice(e,0,0),e-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=e-1)},e.prototype.insertValues=function(t,i){t=Math.floor(t),0!==i.length&&(this.values=this.values.slice(0,t).concat(i).concat(this.values.slice(t)),this.prefixSum=this.prefixSum.slice(0,t).concat(e._zeroArray(i.length)).concat(this.prefixSum.slice(t)),t-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=t-1))},e._zeroArray=function(e){e=Math.floor(e);for(var t=[],i=0;i<e;i++)t[i]=0;return t},e.prototype.changeValue=function(e,t){e=Math.floor(e),t=Math.floor(t),this.values[e]!==t&&(this.values[e]=t,e-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=e-1))},e.prototype.removeValues=function(e,t){e=Math.floor(e),t=Math.floor(t),this.values.splice(e,t),this.prefixSum.splice(e,t),e-1<this.prefixSumValidIndex&&(this.prefixSumValidIndex=e-1)},e.prototype.getTotalValue=function(){return 0===this.values.length?0:this.getAccumulatedValue(this.values.length-1)},e.prototype.getAccumulatedValue=function(e){if(e=Math.floor(e),e<0)return 0;if(e<=this.prefixSumValidIndex)return this.prefixSum[e];var t=this.prefixSumValidIndex+1;0===t&&(this.prefixSum[0]=this.values[0],t++),e>=this.values.length&&(e=this.values.length-1);for(var i=t;i<=e;i++)this.prefixSum[i]=this.prefixSum[i-1]+this.values[i];return this.prefixSumValidIndex=Math.max(this.prefixSumValidIndex,e),this.prefixSum[e]},e.prototype.getIndexOf=function(e){e=Math.floor(e);for(var t,r,u,s=0,n=this.values.length-1;s<=n;)if(t=s+(n-s)/2|0,r=this.getAccumulatedValue(t),u=r-this.values[t],e<u)n=t-1;else{if(!(e>=r))break;s=t+1}return new i(t,e-u)},e}();t.PrefixSumComputer=r});