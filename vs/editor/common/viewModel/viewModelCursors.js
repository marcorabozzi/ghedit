define(["require","exports","vs/editor/common/core/range","vs/editor/common/core/selection","vs/editor/common/editorCommon"],function(e,n,o,t,i){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";var r=function(){function e(e,n){this.configuration=e,this.converter=n,this.lastCursorPositionChangedEvent=null,this.lastCursorSelectionChangedEvent=null}return e.prototype.getSelections=function(){if(this.lastCursorSelectionChangedEvent){var e=[];e.push(this.converter.convertModelSelectionToViewSelection(this.lastCursorSelectionChangedEvent.selection));for(var n=0,o=this.lastCursorSelectionChangedEvent.secondarySelections.length;n<o;n++)e.push(this.converter.convertModelSelectionToViewSelection(this.lastCursorSelectionChangedEvent.secondarySelections[n]));return e}return[new t.Selection(1,1,1,1)]},e.prototype.onCursorPositionChanged=function(e,n){this.lastCursorPositionChangedEvent=e;var o=this.converter.validateViewPosition(e.viewPosition.lineNumber,e.viewPosition.column,e.position),t=this.configuration.editor.viewInfo.stopRenderingLineAfter;t!==-1&&o.column>t&&(o=o.clone(),o.column=t);for(var r=[],s=0,a=e.secondaryPositions.length;s<a;s++)r[s]=this.converter.validateViewPosition(e.secondaryViewPositions[s].lineNumber,e.secondaryViewPositions[s].column,e.secondaryPositions[s]),t!==-1&&r[s].column>t&&(r[s]=r[s].clone(),r[s].column=t);var l={position:o,secondaryPositions:r,isInEditableRange:e.isInEditableRange};n(i.ViewEventNames.CursorPositionChangedEvent,l)},e.prototype.onCursorSelectionChanged=function(e,n){this.lastCursorSelectionChangedEvent=e;for(var o=this.converter.validateViewSelection(e.viewSelection,e.selection),t=[],r=0,s=e.secondarySelections.length;r<s;r++)t[r]=this.converter.validateViewSelection(e.secondaryViewSelections[r],e.secondarySelections[r]);var a={selection:o,secondarySelections:t};n(i.ViewEventNames.CursorSelectionChangedEvent,a)},e.prototype.onCursorRevealRange=function(e,n){var t=null;if(e.viewRange){var r=this.converter.validateViewPosition(e.viewRange.startLineNumber,e.viewRange.startColumn,e.range.getStartPosition()),s=this.converter.validateViewPosition(e.viewRange.endLineNumber,e.viewRange.endColumn,e.range.getEndPosition());t=new o.Range(r.lineNumber,r.column,s.lineNumber,s.column)}else t=this.converter.convertModelRangeToViewRange(e.range);var a={range:t,verticalType:e.verticalType,revealHorizontal:e.revealHorizontal};n(i.ViewEventNames.RevealRangeEvent,a)},e.prototype.onCursorScrollRequest=function(e,n){var o={deltaLines:e.deltaLines};n(i.ViewEventNames.ScrollRequestEvent,o)},e.prototype.onLineMappingChanged=function(e){this.lastCursorPositionChangedEvent&&this.onCursorPositionChanged(this.lastCursorPositionChangedEvent,e),this.lastCursorSelectionChangedEvent&&this.onCursorSelectionChanged(this.lastCursorSelectionChangedEvent,e)},e}();n.ViewModelCursors=r});