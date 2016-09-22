define(["require","exports","vs/editor/common/core/selection"],function(n,o,t){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";function e(n,o,t){var e=n.getLineContent(o).charCodeAt(t-1);return 55296<=e&&e<=56319}function i(n,o,t){var e=n.getLineContent(o).charCodeAt(t-1);return 56320<=e&&e<=57343}var u=function(){function n(n){this.configuration=n}return n.prototype.getLeftOfPosition=function(n,o,t){return t>n.getLineMinColumn(o)?t-=i(n,o,t-1)?2:1:o>1&&(o-=1,t=n.getLineMaxColumn(o)),{lineNumber:o,column:t}},n.prototype.getRightOfPosition=function(n,o,t){return t<n.getLineMaxColumn(o)?t+=e(n,o,t)?2:1:o<n.getLineCount()&&(o+=1,t=n.getLineMinColumn(o)),{lineNumber:o,column:t}},n.prototype.getPositionUp=function(n,o,t,e,i,u){var r=this.visibleColumnFromColumn(n,o,t)+e;return o-=i,o<1?(o=1,t=u?n.getLineMinColumn(o):Math.min(n.getLineMaxColumn(o),t)):t=this.columnFromVisibleColumn(n,o,r),e=r-this.visibleColumnFromColumn(n,o,t),{lineNumber:o,column:t,leftoverVisibleColumns:e}},n.prototype.getPositionDown=function(n,o,t,e,i,u){var r=this.visibleColumnFromColumn(n,o,t)+e;o+=i;var l=n.getLineCount();return o>l?(o=l,t=u?n.getLineMaxColumn(o):Math.min(n.getLineMaxColumn(o),t)):t=this.columnFromVisibleColumn(n,o,r),e=r-this.visibleColumnFromColumn(n,o,t),{lineNumber:o,column:t,leftoverVisibleColumns:e}},n.prototype.columnSelect=function(n,o,e,i,u){for(var r=Math.abs(i-o)+1,l=o>i,m=e>u,C=e<u,s=[],c=0;c<r;c++){var a=o+(l?-c:c),f=this.columnFromVisibleColumn(n,a,e),g=this.columnFromVisibleColumn(n,a,u),v=this.visibleColumnFromColumn(n,a,f),b=this.visibleColumnFromColumn(n,a,g);if(C){if(v>u)continue;if(b<e)continue}if(m){if(b>e)continue;if(v<u)continue}s.push(new t.Selection(a,f,a,g))}return{viewSelections:s,reversed:l}},n.prototype.getColumnAtBeginningOfLine=function(n,o,t){var e=n.getLineFirstNonWhitespaceColumn(o)||1,i=n.getLineMinColumn(o);return t=t!==i&&t<=e?i:e},n.prototype.getColumnAtEndOfLine=function(n,o,t){var e=n.getLineMaxColumn(o),i=n.getLineLastNonWhitespaceColumn(o)||e;return t=t!==e&&t>=i?e:i},n.prototype.visibleColumnFromColumn=function(o,t,e){return n.visibleColumnFromColumn(o,t,e,this.configuration.getIndentationOptions().tabSize)},n.visibleColumnFromColumn=function(o,t,e,i){return n.visibleColumnFromColumn2(o.getLineContent(t),e,i)},n.visibleColumnFromColumn2=function(o,t,e){for(var i=0,u=0;u<t-1;u++)i="\t"===o.charAt(u)?n.nextTabColumn(i,e):i+1;return i},n.prototype.columnFromVisibleColumn=function(o,t,e){for(var i=o.getLineContent(t),u=-1,r=0,l=0;l<i.length&&r<=e;l++)u=r,r="\t"===i.charAt(l)?n.nextTabColumn(r,this.configuration.getIndentationOptions().tabSize):r+1;r=Math.abs(e-r),u=Math.abs(e-u);var m;m=r<u?l+1:l;var C=o.getLineMinColumn(t);return m<C&&(m=C),m},n.nextTabColumn=function(n,o){return n+o-n%o},n.prevTabColumn=function(n,o){return n-1-(n-1)%o},n}();o.CursorMoveHelper=u});