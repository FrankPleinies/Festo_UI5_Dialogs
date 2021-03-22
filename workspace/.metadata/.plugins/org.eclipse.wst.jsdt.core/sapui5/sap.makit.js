
// ---- sap.makit --------------------------------------------------------------------------


// ---- sap.makit.Axis --------------------------------------------------------------------------

/**
 * Constructor for a new Axis.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowLabel showLabel} : boolean (default: true)</li>
 * <li>{@link #getShowPrimaryLine showPrimaryLine} : boolean (default: true)</li>
 * <li>{@link #getShowGrid showGrid} : boolean (default: false)</li>
 * <li>{@link #getThickness thickness} : float (default: 1)</li>
 * <li>{@link #getColor color} : string (default: gray)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Base element for the Axis object for the Chart.
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Axis = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.Axis with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Axis.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * Color of the primary line. Accept the following format:
 * standard name format: gray, red, black, etc
 * hex format: #ff00ff
 * rgb format: rgb(256, 0, 256)
 * 
 * Default value is <code>gray</code>.
 * @returns {string} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.getColor = function() { return ""; };

/**
 * Returns a metadata object for class sap.makit.Axis.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Axis.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowGrid showGrid}.
 * 
 * Indicates whether to show grid of the Axis in the chart area
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showGrid</code>
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.getShowGrid = function() { return false; };

/**
 * Gets current value of property {@link #getShowLabel showLabel}.
 * 
 * Indicates whether to show label of the Axis by the primary line
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLabel</code>
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.getShowLabel = function() { return false; };

/**
 * Gets current value of property {@link #getShowPrimaryLine showPrimaryLine}.
 * 
 * Indicates whether to show the primary line of the Axis on the chart area
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showPrimaryLine</code>
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.getShowPrimaryLine = function() { return false; };

/**
 * Gets current value of property {@link #getThickness thickness}.
 * 
 * The line thickness of the primary line
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>thickness</code>
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.getThickness = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * Color of the primary line. Accept the following format:
 * standard name format: gray, red, black, etc
 * hex format: #ff00ff
 * rgb format: rgb(256, 0, 256)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>gray</code>.
 * @param {string} sColor New value for property <code>color</code>
 * @returns {sap.makit.Axis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.setColor = function(sColor) { return new sap.makit.Axis(); };

/**
 * Sets a new value for property {@link #getShowGrid showGrid}.
 * 
 * Indicates whether to show grid of the Axis in the chart area
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowGrid New value for property <code>showGrid</code>
 * @returns {sap.makit.Axis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.setShowGrid = function(bShowGrid) { return new sap.makit.Axis(); };

/**
 * Sets a new value for property {@link #getShowLabel showLabel}.
 * 
 * Indicates whether to show label of the Axis by the primary line
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLabel New value for property <code>showLabel</code>
 * @returns {sap.makit.Axis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.setShowLabel = function(bShowLabel) { return new sap.makit.Axis(); };

/**
 * Sets a new value for property {@link #getShowPrimaryLine showPrimaryLine}.
 * 
 * Indicates whether to show the primary line of the Axis on the chart area
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowPrimaryLine New value for property <code>showPrimaryLine</code>
 * @returns {sap.makit.Axis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.setShowPrimaryLine = function(bShowPrimaryLine) { return new sap.makit.Axis(); };

/**
 * Sets a new value for property {@link #getThickness thickness}.
 * 
 * The line thickness of the primary line
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fThickness New value for property <code>thickness</code>
 * @returns {sap.makit.Axis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Axis.prototype.setThickness = function(fThickness) { return new sap.makit.Axis(); };


// ---- sap.makit.Category --------------------------------------------------------------------------

/**
 * Constructor for a new Category.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumn column} : string</li>
 * <li>{@link #getDisplayName displayName} : string</li>
 * <li>{@link #getFormat format} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Represents the Category data region of the Chart.
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Category = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.Category with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Category.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColumn column}.
 * 
 * Specify the name of the column to be mapped to the Category Axis's value.
 * 
 * @returns {string} Value of property <code>column</code>
 * 
 * @public
 * 
 */
sap.makit.Category.prototype.getColumn = function() { return ""; };

/**
 * Gets current value of property {@link #getDisplayName displayName}.
 * 
 * The text label representing this Category(on value bubble or table's header)
 * 
 * @returns {string} Value of property <code>displayName</code>
 * 
 * @public
 * 
 */
sap.makit.Category.prototype.getDisplayName = function() { return ""; };

/**
 * Gets current value of property {@link #getFormat format}.
 * 
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * 
 * @returns {string} Value of property <code>format</code>
 * 
 * @public
 * 
 */
sap.makit.Category.prototype.getFormat = function() { return ""; };

/**
 * Returns a metadata object for class sap.makit.Category.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Category.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getColumn column}.
 * 
 * Specify the name of the column to be mapped to the Category Axis's value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sColumn New value for property <code>column</code>
 * @returns {sap.makit.Category} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Category.prototype.setColumn = function(sColumn) { return new sap.makit.Category(); };

/**
 * Sets a new value for property {@link #getDisplayName displayName}.
 * 
 * The text label representing this Category(on value bubble or table's header)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayName New value for property <code>displayName</code>
 * @returns {sap.makit.Category} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Category.prototype.setDisplayName = function(sDisplayName) { return new sap.makit.Category(); };

/**
 * Sets a new value for property {@link #getFormat format}.
 * 
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFormat New value for property <code>format</code>
 * @returns {sap.makit.Category} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Category.prototype.setFormat = function(sFormat) { return new sap.makit.Category(); };


// ---- sap.makit.CategoryAxis --------------------------------------------------------------------------

/**
 * Constructor for a new CategoryAxis.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSortOrder sortOrder} : sap.makit.SortOrder (default: None)</li>
 * <li>{@link #getDisplayLastLabel displayLastLabel} : boolean (default: false)</li>
 * <li>{@link #getDisplayAll displayAll} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.makit.Axis#constructor sap.makit.Axis}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the properties of the Category's Axis.
 * @extends sap.makit.Axis
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.CategoryAxis = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.CategoryAxis with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.makit.Axis.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.CategoryAxis.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDisplayAll displayAll}.
 * 
 * Specify whether to display all the category values when there are multiple category data regions.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>displayAll</code>
 * 
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.getDisplayAll = function() { return false; };

/**
 * Gets current value of property {@link #getDisplayLastLabel displayLastLabel}.
 * 
 * Whether to always display the last label on the axis regardless of the automatic resize
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>displayLastLabel</code>
 * 
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.getDisplayLastLabel = function() { return false; };

/**
 * Returns a metadata object for class sap.makit.CategoryAxis.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.CategoryAxis.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSortOrder sortOrder}.
 * 
 * Sort order of the chart
 * 
 * Default value is <code>None</code>.
 * @returns {sap.makit.SortOrder} Value of property <code>sortOrder</code>
 * 
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.getSortOrder = function() { return new sap.makit.SortOrder(); };

/**
 * Sets a new value for property {@link #getDisplayAll displayAll}.
 * 
 * Specify whether to display all the category values when there are multiple category data regions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDisplayAll New value for property <code>displayAll</code>
 * @returns {sap.makit.CategoryAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.setDisplayAll = function(bDisplayAll) { return new sap.makit.CategoryAxis(); };

/**
 * Sets a new value for property {@link #getDisplayLastLabel displayLastLabel}.
 * 
 * Whether to always display the last label on the axis regardless of the automatic resize
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisplayLastLabel New value for property <code>displayLastLabel</code>
 * @returns {sap.makit.CategoryAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.setDisplayLastLabel = function(bDisplayLastLabel) { return new sap.makit.CategoryAxis(); };

/**
 * Sets a new value for property {@link #getSortOrder sortOrder}.
 * 
 * Sort order of the chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.makit.SortOrder} sSortOrder New value for property <code>sortOrder</code>
 * @returns {sap.makit.CategoryAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.setSortOrder = function(sSortOrder) { return new sap.makit.CategoryAxis(); };


// ---- sap.makit.Chart --------------------------------------------------------------------------

/**
 * Constructor for a new Chart.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getType type} : sap.makit.ChartType (default: Column)</li>
 * <li>{@link #getShowRangeSelector showRangeSelector} : boolean (default: true)</li>
 * <li>{@link #getShowTableView showTableView} : boolean (default: false)</li>
 * <li>{@link #getLegendPosition legendPosition} : sap.makit.LegendPosition</li>
 * <li>{@link #getLineThickness lineThickness} : float (default: 1)</li>
 * <li>{@link #getShowTableValue showTableValue} : boolean (default: true)</li>
 * <li>{@link #getMaxSliceCount maxSliceCount} : int (default: 12)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getShowTotalValue showTotalValue} : boolean (default: false)</li>
 * <li>{@link #getNumberOfVisibleCategories numberOfVisibleCategories} : int</li>
 * <li>{@link #getRangeSelectorStartPosition rangeSelectorStartPosition} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.makit.Row[]</li>
 * <li>{@link #getColumns columns} : sap.makit.Column[]</li>
 * <li>{@link #getSeries series} : sap.makit.Series</li>
 * <li>{@link #getValues values} : sap.makit.Value[]</li>
 * <li>{@link #getCategoryRegions categoryRegions} : sap.makit.Category[]</li>
 * <li>{@link #getCategory category} : sap.makit.Category</li>
 * <li>{@link #getCategoryAxis categoryAxis} : sap.makit.CategoryAxis</li>
 * <li>{@link #getValueAxis valueAxis} : sap.makit.ValueAxis</li>
 * <li>{@link #getValueBubble valueBubble} : sap.makit.ValueBubble</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:doubletap doubletap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:longpress longpress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The Chart control.
 * @extends sap.ui.core.Control
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Chart = function(sId,mSettings) {};
/**
 * Double tap event on the chart
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.makit.Chart.prototype.doubletap = function(oControlEvent) {  };

/**
 * Long press event on the chart
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.makit.Chart.prototype.longpress = function(oControlEvent) {  };

/**
 * Single tap event on the chart
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.makit.Chart.prototype.tap = function(oControlEvent) {  };

/**
 * Adds some column to the aggregation {@link #getColumns columns}.
 * @param {sap.makit.Column}
 *            oColumn The column to add; if empty, nothing is inserted
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.addColumn = function(oColumn) { return new sap.makit.Chart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:doubletap doubletap} event of this <code>sap.makit.Chart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.makit.Chart</code> itself.
 * 
 * Double tap event on the chart
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code> itself
 * 
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.attachDoubletap = function(oData,fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:longpress longpress} event of this <code>sap.makit.Chart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.makit.Chart</code> itself.
 * 
 * Long press event on the chart
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code> itself
 * 
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.attachLongpress = function(oData,fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:tap tap} event of this <code>sap.makit.Chart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.makit.Chart</code> itself.
 * 
 * Single tap event on the chart
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code> itself
 * 
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.attachTap = function(oData,fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * Binds aggregation {@link #getColumns columns} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.bindColumns = function(oBindingInfo) { return new sap.makit.Chart(); };

/**
 * Binds aggregation {@link #getRows rows} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.bindRows = function(oBindingInfo) { return new sap.makit.Chart(); };

/**
 * Destroys the categoryAxis in the aggregation {@link #getCategoryAxis categoryAxis}.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.destroyCategoryAxis = function() { return new sap.makit.Chart(); };

/**
 * Destroys all the categoryRegions in the aggregation {@link #getCategoryRegions categoryRegions}.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.destroyCategoryRegions = function() { return new sap.makit.Chart(); };

/**
 * Destroys all the columns in the aggregation {@link #getColumns columns}.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.destroyColumns = function() { return new sap.makit.Chart(); };

/**
 * Destroys the series in the aggregation {@link #getSeries series}.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.destroySeries = function() { return new sap.makit.Chart(); };

/**
 * Destroys the valueAxis in the aggregation {@link #getValueAxis valueAxis}.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.destroyValueAxis = function() { return new sap.makit.Chart(); };

/**
 * Destroys the valueBubble in the aggregation {@link #getValueBubble valueBubble}.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.destroyValueBubble = function() { return new sap.makit.Chart(); };

/**
 * Destroys all the values in the aggregation {@link #getValues values}.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.destroyValues = function() { return new sap.makit.Chart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:doubletap doubletap} event of this <code>sap.makit.Chart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.detachDoubletap = function(fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:longpress longpress} event of this <code>sap.makit.Chart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.detachLongpress = function(fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:tap tap} event of this <code>sap.makit.Chart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.detachTap = function(fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * Creates a new subclass of class sap.makit.Chart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Chart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:doubletap doubletap} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.makit.Chart.prototype.fireDoubletap = function(mParameters) { return new sap.makit.Chart(); };

/**
 * Fires event {@link #event:longpress longpress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.makit.Chart.prototype.fireLongpress = function(mParameters) { return new sap.makit.Chart(); };

/**
 * Fires event {@link #event:tap tap} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.makit.Chart.prototype.fireTap = function(mParameters) { return new sap.makit.Chart(); };

/**
 * Gets content of aggregation {@link #getCategoryAxis categoryAxis}.
 * 
 * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
 * 
 * @returns {sap.makit.CategoryAxis}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getCategoryAxis = function() { return new sap.makit.CategoryAxis(); };

/**
 * Gets content of aggregation {@link #getCategoryRegions categoryRegions}.
 * 
 * Data region property of the chart's Categories
 * 
 * @returns {sap.makit.Category[]}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getCategoryRegions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getColumns columns}.
 * 
 * The data column map of the chart.
 * 
 * @returns {sap.makit.Column[]}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getColumns = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the Chart
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getLegendPosition legendPosition}.
 * 
 * Legend position all chart types except Bar chart.
 * Default position for Pie/Donut chart is Left. All other chart's default position is None. Note: the default legend position is set when the chart type is set first time, subsequent change to the chart type will keep using initial legend position unless it is changed explicitly by user.
 * 
 * @returns {sap.makit.LegendPosition} Value of property <code>legendPosition</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getLegendPosition = function() { return new sap.makit.LegendPosition(); };

/**
 * Gets current value of property {@link #getLineThickness lineThickness}.
 * 
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>lineThickness</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getLineThickness = function() { return 0.0; };

/**
 * Gets current value of property {@link #getMaxSliceCount maxSliceCount}.
 * 
 * Set the maximum number of slices in a Pie/Donut chart. If exceeding the specified value, the rest will be categorised into a single slice. Only applies to Pie/Donut.
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>maxSliceCount</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getMaxSliceCount = function() { return 0; };

/**
 * Returns a metadata object for class sap.makit.Chart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Chart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Get the number of distinct category values
 * 
 * @type int
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Chart.prototype.getNumberOfCategories = function() { return 0; };

/**
 * Gets current value of property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
 * 
 * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not set, the number of visible categories will be automatically adjusted depending on the screen size
 * 
 * @returns {int} Value of property <code>numberOfVisibleCategories</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getNumberOfVisibleCategories = function() { return 0; };

/**
 * Gets current value of property {@link #getPrimaryColorPalette primaryColorPalette}.
 * 
 * Allow a chart’s color palette to be modified without affecting the other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * 
 * @returns {any} Value of property <code>primaryColorPalette</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getPrimaryColorPalette = function() { return null; };

/**
 * Gets current value of property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
 * 
 * Specify the range selector start position, default value is 0.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>rangeSelectorStartPosition</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getRangeSelectorStartPosition = function() { return 0; };

/**
 * Gets content of aggregation {@link #getRows rows}.
 * 
 * The data rows of the chart. User should bind these to their data source
 * 
 * @returns {sap.makit.Row[]}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getRows = function() { return new Array(); };

/**
 * Get the value of the currently highlighted category
 * 
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Chart.prototype.getSelectedCategory = function() { return ""; };

/**
 * Return an array of categories value that is currently selected.
 * 
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Chart.prototype.getSelectedCategoryGroup = function() { return new Object(); };

/**
 * Get the value of the currently highlighted series
 * 
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Chart.prototype.getSelectedSeries = function() { return ""; };

/**
 * Gets content of aggregation {@link #getSeries series}.
 * 
 * Data region property of the chart's Series
 * 
 * @returns {sap.makit.Series}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getSeries = function() { return new sap.makit.Series(); };

/**
 * Gets current value of property {@link #getShowRangeSelector showRangeSelector}.
 * 
 * Specify whether the range selector should be visible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showRangeSelector</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowRangeSelector = function() { return false; };

/**
 * Gets current value of property {@link #getShowTableValue showTableValue}.
 * 
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTableValue</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowTableValue = function() { return false; };

/**
 * Gets current value of property {@link #getShowTableView showTableView}.
 * 
 * Toggle to display table view
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showTableView</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowTableView = function() { return false; };

/**
 * Gets current value of property {@link #getShowTotalValue showTotalValue}.
 * 
 * Specify whether to show the sum of the value for Waterfall/Waterfall Bar chart. Only applies to Waterfall/WaterfallBar chart.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showTotalValue</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowTotalValue = function() { return false; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Chart type
 * 
 * Default value is <code>Column</code>.
 * @returns {sap.makit.ChartType} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getType = function() { return new sap.makit.ChartType(); };

/**
 * Gets content of aggregation {@link #getValueAxis valueAxis}.
 * 
 * Value Axis property of the Chart. Accept only an instance of ValueAxis element.
 * 
 * @returns {sap.makit.ValueAxis}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getValueAxis = function() { return new sap.makit.ValueAxis(); };

/**
 * Gets content of aggregation {@link #getValueBubble valueBubble}.
 * 
 * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
 * 
 * @returns {sap.makit.ValueBubble}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getValueBubble = function() { return new sap.makit.ValueBubble(); };

/**
 * Gets content of aggregation {@link #getValues values}.
 * 
 * Data region property of the chart's Values
 * 
 * @returns {sap.makit.Value[]}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getValues = function() { return new Array(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the Chart
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.makit.Category</code> in the aggregation {@link #getCategoryRegions categoryRegions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Category}
 *           oCategoryRegion The categoryRegion whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.indexOfCategoryRegion = function(oCategoryRegion) { return 0; };

/**
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation {@link #getColumns columns}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Column}
 *           oColumn The column whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Checks for the provided <code>sap.makit.Row</code> in the aggregation {@link #getRows rows}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Row}
 *           oRow The row whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * Checks for the provided <code>sap.makit.Value</code> in the aggregation {@link #getValues values}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Value}
 *           oValue The value whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.indexOfValue = function(oValue) { return 0; };

/**
 * Inserts a column into the aggregation {@link #getColumns columns}.
 * 
 * @param {sap.makit.Column}
 *            oColumn The column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.insertColumn = function(oColumn,iIndex) { return new sap.makit.Chart(); };

/**
 * Removes all the controls from the aggregation {@link #getColumns columns}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.makit.Column[]} An array of the removed elements (might be empty)
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes a column from the aggregation {@link #getColumns columns}.
 * 
 * @param {int | string | sap.makit.Column} vColumn The column to remove or its index or id
 * @returns {sap.makit.Column} The removed column or <code>null</code>
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.removeColumn = function(vColumn) { return new sap.makit.Column(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the Chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setHeight = function(sHeight) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getLegendPosition legendPosition}.
 * 
 * Legend position all chart types except Bar chart.
 * Default position for Pie/Donut chart is Left. All other chart's default position is None. Note: the default legend position is set when the chart type is set first time, subsequent change to the chart type will keep using initial legend position unless it is changed explicitly by user.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.makit.LegendPosition} sLegendPosition New value for property <code>legendPosition</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setLegendPosition = function(sLegendPosition) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getLineThickness lineThickness}.
 * 
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fLineThickness New value for property <code>lineThickness</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setLineThickness = function(fLineThickness) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getMaxSliceCount maxSliceCount}.
 * 
 * Set the maximum number of slices in a Pie/Donut chart. If exceeding the specified value, the rest will be categorised into a single slice. Only applies to Pie/Donut.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iMaxSliceCount New value for property <code>maxSliceCount</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setMaxSliceCount = function(iMaxSliceCount) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
 * 
 * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not set, the number of visible categories will be automatically adjusted depending on the screen size
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iNumberOfVisibleCategories New value for property <code>numberOfVisibleCategories</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setNumberOfVisibleCategories = function(iNumberOfVisibleCategories) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
 * 
 * Specify the range selector start position, default value is 0.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iRangeSelectorStartPosition New value for property <code>rangeSelectorStartPosition</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setRangeSelectorStartPosition = function(iRangeSelectorStartPosition) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getShowRangeSelector showRangeSelector}.
 * 
 * Specify whether the range selector should be visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowRangeSelector New value for property <code>showRangeSelector</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowRangeSelector = function(bShowRangeSelector) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getShowTableValue showTableValue}.
 * 
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTableValue New value for property <code>showTableValue</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowTableValue = function(bShowTableValue) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getShowTableView showTableView}.
 * 
 * Toggle to display table view
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowTableView New value for property <code>showTableView</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowTableView = function(bShowTableView) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getShowTotalValue showTotalValue}.
 * 
 * Specify whether to show the sum of the value for Waterfall/Waterfall Bar chart. Only applies to Waterfall/WaterfallBar chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowTotalValue New value for property <code>showTotalValue</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowTotalValue = function(bShowTotalValue) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Chart type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Column</code>.
 * @param {sap.makit.ChartType} sType New value for property <code>type</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setType = function(sType) { return new sap.makit.Chart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the Chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.setWidth = function(sWidth) { return new sap.makit.Chart(); };

/**
 * Unbinds aggregation {@link #getColumns columns} from model data.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.unbindColumns = function() { return new sap.makit.Chart(); };

/**
 * Unbinds aggregation {@link #getRows rows} from model data.
 * @returns {sap.makit.Chart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.Chart.prototype.unbindRows = function() { return new sap.makit.Chart(); };


// ---- sap.makit.ChartType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.ChartType.toString = function() { return ""; };

// ---- sap.makit.Column --------------------------------------------------------------------------

/**
 * Constructor for a new Column.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValue value} : any</li>
 * <li>{@link #getType type} : string (default: string)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The data column of the Chart's data table
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Column = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.Column with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Column.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.makit.Column.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Column.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getName name}.
 * 
 * The name representing the Column
 * 
 * @returns {string} Value of property <code>name</code>
 * 
 * @public
 * 
 */
sap.makit.Column.prototype.getName = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * The data type of the Column:
 * number
 * string
 * datetime
 * 
 * Default value is <code>string</code>.
 * @returns {string} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.makit.Column.prototype.getType = function() { return ""; };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The value mapped to this Column (User should map this using data binding)
 * 
 * @returns {any} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.makit.Column.prototype.getValue = function() { return null; };

/**
 * Sets a new value for property {@link #getName name}.
 * 
 * The name representing the Column
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.makit.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Column.prototype.setName = function(sName) { return new sap.makit.Column(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * The data type of the Column:
 * number
 * string
 * datetime
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>string</code>.
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.makit.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Column.prototype.setType = function(sType) { return new sap.makit.Column(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The value mapped to this Column (User should map this using data binding)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oValue New value for property <code>value</code>
 * @returns {sap.makit.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Column.prototype.setValue = function(oValue) { return new sap.makit.Column(); };


// ---- sap.makit.CombinationChart --------------------------------------------------------------------------

/**
 * Constructor for a new CombinationChart.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getShowRangeSelector showRangeSelector} : boolean (default: true)</li>
 * <li>{@link #getLegendPosition legendPosition} : sap.makit.LegendPosition (default: Left)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getSecondaryColorPalette secondaryColorPalette} : any</li>
 * <li>{@link #getShowTableValue showTableValue} : boolean (default: true)</li>
 * <li>{@link #getNumberOfVisibleCategories numberOfVisibleCategories} : int</li>
 * <li>{@link #getRangeSelectorStartPosition rangeSelectorStartPosition} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCategoryRegions categoryRegions} : sap.makit.Category[]</li>
 * <li>{@link #getLayers layers} : sap.makit.Layer[]</li>
 * <li>{@link #getCategoryAxis categoryAxis} : sap.makit.CategoryAxis</li>
 * <li>{@link #getPrimaryValueAxis primaryValueAxis} : sap.makit.ValueAxis</li>
 * <li>{@link #getSecondaryValueAxis secondaryValueAxis} : sap.makit.ValueAxis</li>
 * <li>{@link #getValueBubble valueBubble} : sap.makit.ValueBubble</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:doubletap doubletap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:longpress longpress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The CombinationChart control.
 * @extends sap.ui.core.Control
 * 
 * @public
 * @since 1.12
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.CombinationChart = function(sId,mSettings) {};
/**
 * Double tap event on the chart
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.doubletap = function(oControlEvent) {  };

/**
 * Long press event on the chart
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.longpress = function(oControlEvent) {  };

/**
 * Single tap event on the chart
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.tap = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:doubletap doubletap} event of this <code>sap.makit.CombinationChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.makit.CombinationChart</code> itself.
 * 
 * Double tap event on the chart
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code> itself
 * 
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.attachDoubletap = function(oData,fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:longpress longpress} event of this <code>sap.makit.CombinationChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.makit.CombinationChart</code> itself.
 * 
 * Long press event on the chart
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code> itself
 * 
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.attachLongpress = function(oData,fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:tap tap} event of this <code>sap.makit.CombinationChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.makit.CombinationChart</code> itself.
 * 
 * Single tap event on the chart
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code> itself
 * 
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.attachTap = function(oData,fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * Destroys the categoryAxis in the aggregation {@link #getCategoryAxis categoryAxis}.
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.destroyCategoryAxis = function() { return new sap.makit.CombinationChart(); };

/**
 * Destroys all the categoryRegions in the aggregation {@link #getCategoryRegions categoryRegions}.
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.destroyCategoryRegions = function() { return new sap.makit.CombinationChart(); };

/**
 * Destroys all the layers in the aggregation {@link #getLayers layers}.
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.destroyLayers = function() { return new sap.makit.CombinationChart(); };

/**
 * Destroys the primaryValueAxis in the aggregation {@link #getPrimaryValueAxis primaryValueAxis}.
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.destroyPrimaryValueAxis = function() { return new sap.makit.CombinationChart(); };

/**
 * Destroys the secondaryValueAxis in the aggregation {@link #getSecondaryValueAxis secondaryValueAxis}.
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.destroySecondaryValueAxis = function() { return new sap.makit.CombinationChart(); };

/**
 * Destroys the valueBubble in the aggregation {@link #getValueBubble valueBubble}.
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.destroyValueBubble = function() { return new sap.makit.CombinationChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:doubletap doubletap} event of this <code>sap.makit.CombinationChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.detachDoubletap = function(fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:longpress longpress} event of this <code>sap.makit.CombinationChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.detachLongpress = function(fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:tap tap} event of this <code>sap.makit.CombinationChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.detachTap = function(fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * Creates a new subclass of class sap.makit.CombinationChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.CombinationChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:doubletap doubletap} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.makit.CombinationChart.prototype.fireDoubletap = function(mParameters) { return new sap.makit.CombinationChart(); };

/**
 * Fires event {@link #event:longpress longpress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.makit.CombinationChart.prototype.fireLongpress = function(mParameters) { return new sap.makit.CombinationChart(); };

/**
 * Fires event {@link #event:tap tap} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.makit.CombinationChart.prototype.fireTap = function(mParameters) { return new sap.makit.CombinationChart(); };

/**
 * Gets content of aggregation {@link #getCategoryAxis categoryAxis}.
 * 
 * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
 * 
 * @returns {sap.makit.CategoryAxis}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getCategoryAxis = function() { return new sap.makit.CategoryAxis(); };

/**
 * Gets content of aggregation {@link #getCategoryRegions categoryRegions}.
 * 
 * Data region property of the chart's Categories
 * 
 * @returns {sap.makit.Category[]}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getCategoryRegions = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the Chart
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation {@link #getLayers layers}.
 * 
 * The collection of charts
 * 
 * @returns {sap.makit.Layer[]}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getLayers = function() { return new Array(); };

/**
 * Gets current value of property {@link #getLegendPosition legendPosition}.
 * 
 * Legend position for Pie /Donut chart only.
 * 
 * Default value is <code>Left</code>.
 * @returns {sap.makit.LegendPosition} Value of property <code>legendPosition</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getLegendPosition = function() { return new sap.makit.LegendPosition(); };

/**
 * Returns a metadata object for class sap.makit.CombinationChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.CombinationChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Get the number of distinct category values
 * 
 * @type int
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.CombinationChart.prototype.getNumberOfCategories = function() { return 0; };

/**
 * Gets current value of property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
 * 
 * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not set, the number of visible categories will be automatically adjusted depending on the screen size
 * 
 * @returns {int} Value of property <code>numberOfVisibleCategories</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getNumberOfVisibleCategories = function() { return 0; };

/**
 * Gets current value of property {@link #getPrimaryColorPalette primaryColorPalette}.
 * 
 * Allow a combination chart’s primary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * 
 * @returns {any} Value of property <code>primaryColorPalette</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getPrimaryColorPalette = function() { return null; };

/**
 * Gets content of aggregation {@link #getPrimaryValueAxis primaryValueAxis}.
 * 
 * Property of the Combination Chart's primary Value Axis. Accept only an instance of ValueAxis element.
 * 
 * @returns {sap.makit.ValueAxis}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getPrimaryValueAxis = function() { return new sap.makit.ValueAxis(); };

/**
 * Gets current value of property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
 * 
 * Specify the range selector start position, default value is 0.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>rangeSelectorStartPosition</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getRangeSelectorStartPosition = function() { return 0; };

/**
 * Gets current value of property {@link #getSecondaryColorPalette secondaryColorPalette}.
 * 
 * Allow a combination chart’s secondary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * 
 * @returns {any} Value of property <code>secondaryColorPalette</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getSecondaryColorPalette = function() { return null; };

/**
 * Gets content of aggregation {@link #getSecondaryValueAxis secondaryValueAxis}.
 * 
 * Property of the Combination Chart's secondary Value Axis. Accept only an instance of ValueAxis element.
 * 
 * @returns {sap.makit.ValueAxis}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getSecondaryValueAxis = function() { return new sap.makit.ValueAxis(); };

/**
 * Get the value of the currently highlighted category
 * 
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.CombinationChart.prototype.getSelectedCategory = function() { return ""; };

/**
 * Return an array of categories value that is currently selected.
 * 
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.CombinationChart.prototype.getSelectedCategoryGroup = function() { return new Object(); };

/**
 * Gets current value of property {@link #getShowRangeSelector showRangeSelector}.
 * 
 * Specify whether the range selector should be visible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showRangeSelector</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getShowRangeSelector = function() { return false; };

/**
 * Gets current value of property {@link #getShowTableValue showTableValue}.
 * 
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTableValue</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getShowTableValue = function() { return false; };

/**
 * Gets content of aggregation {@link #getValueBubble valueBubble}.
 * 
 * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
 * 
 * @returns {sap.makit.ValueBubble}
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getValueBubble = function() { return new sap.makit.ValueBubble(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the Chart
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.makit.Category</code> in the aggregation {@link #getCategoryRegions categoryRegions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Category}
 *           oCategoryRegion The categoryRegion whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.indexOfCategoryRegion = function(oCategoryRegion) { return 0; };

/**
 * Checks for the provided <code>sap.makit.Layer</code> in the aggregation {@link #getLayers layers}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Layer}
 *           oLayer The layer whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.indexOfLayer = function(oLayer) { return 0; };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the Chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setHeight = function(sHeight) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getLegendPosition legendPosition}.
 * 
 * Legend position for Pie /Donut chart only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Left</code>.
 * @param {sap.makit.LegendPosition} sLegendPosition New value for property <code>legendPosition</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setLegendPosition = function(sLegendPosition) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getNumberOfVisibleCategories numberOfVisibleCategories}.
 * 
 * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not set, the number of visible categories will be automatically adjusted depending on the screen size
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iNumberOfVisibleCategories New value for property <code>numberOfVisibleCategories</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setNumberOfVisibleCategories = function(iNumberOfVisibleCategories) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getPrimaryColorPalette primaryColorPalette}.
 * 
 * Allow a combination chart’s primary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oPrimaryColorPalette New value for property <code>primaryColorPalette</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setPrimaryColorPalette = function(oPrimaryColorPalette) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getRangeSelectorStartPosition rangeSelectorStartPosition}.
 * 
 * Specify the range selector start position, default value is 0.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iRangeSelectorStartPosition New value for property <code>rangeSelectorStartPosition</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setRangeSelectorStartPosition = function(iRangeSelectorStartPosition) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getSecondaryColorPalette secondaryColorPalette}.
 * 
 * Allow a combination chart’s secondary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oSecondaryColorPalette New value for property <code>secondaryColorPalette</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setSecondaryColorPalette = function(oSecondaryColorPalette) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getShowRangeSelector showRangeSelector}.
 * 
 * Specify whether the range selector should be visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowRangeSelector New value for property <code>showRangeSelector</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setShowRangeSelector = function(bShowRangeSelector) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getShowTableValue showTableValue}.
 * 
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTableValue New value for property <code>showTableValue</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setShowTableValue = function(bShowTableValue) { return new sap.makit.CombinationChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the Chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.makit.CombinationChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setWidth = function(sWidth) { return new sap.makit.CombinationChart(); };


// ---- sap.makit.Layer --------------------------------------------------------------------------

/**
 * Constructor for a new Layer.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : sap.makit.ChartType (default: Column)</li>
 * <li>{@link #getLineThickness lineThickness} : float (default: 1)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getDrawOnSecondaryAxis drawOnSecondaryAxis} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.makit.Row[]</li>
 * <li>{@link #getColumns columns} : sap.makit.Column[]</li>
 * <li>{@link #getSeries series} : sap.makit.Series</li>
 * <li>{@link #getValues values} : sap.makit.Value[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Layer represent a chart in the CombinationChart
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.12
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Layer = function(sId,mSettings) {};
/**
 * Adds some column to the aggregation {@link #getColumns columns}.
 * @param {sap.makit.Column}
 *            oColumn The column to add; if empty, nothing is inserted
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.addColumn = function(oColumn) { return new sap.makit.Layer(); };

/**
 * Binds aggregation {@link #getColumns columns} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.bindColumns = function(oBindingInfo) { return new sap.makit.Layer(); };

/**
 * Binds aggregation {@link #getRows rows} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.bindRows = function(oBindingInfo) { return new sap.makit.Layer(); };

/**
 * Destroys all the columns in the aggregation {@link #getColumns columns}.
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.destroyColumns = function() { return new sap.makit.Layer(); };

/**
 * Destroys the series in the aggregation {@link #getSeries series}.
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.destroySeries = function() { return new sap.makit.Layer(); };

/**
 * Destroys all the values in the aggregation {@link #getValues values}.
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.destroyValues = function() { return new sap.makit.Layer(); };

/**
 * Creates a new subclass of class sap.makit.Layer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Layer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getColumns columns}.
 * 
 * The data column map of the chart.
 * 
 * @returns {sap.makit.Column[]}
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getColumns = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDrawOnSecondaryAxis drawOnSecondaryAxis}.
 * 
 * Specifiy whether this layer should be drawn on the secondary axis.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>drawOnSecondaryAxis</code>
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getDrawOnSecondaryAxis = function() { return false; };

/**
 * Gets current value of property {@link #getLineThickness lineThickness}.
 * 
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>lineThickness</code>
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getLineThickness = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.makit.Layer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Layer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPrimaryColorPalette primaryColorPalette}.
 * 
 * Allow a layer’s primary axis color palette to be modified without affecting other charts in the same screen. If not set, the chart will use the default color palette defined in the theme. This property will take precedence over other CombinationChart's color palette properties.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * 
 * @returns {any} Value of property <code>primaryColorPalette</code>
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getPrimaryColorPalette = function() { return null; };

/**
 * Gets content of aggregation {@link #getRows rows}.
 * 
 * The data rows of the chart. User should bind these to their data source
 * 
 * @returns {sap.makit.Row[]}
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getRows = function() { return new Array(); };

/**
 * Get the value of the currently highlighted series
 * 
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Layer.prototype.getSelectedSeries = function() { return ""; };

/**
 * Gets content of aggregation {@link #getSeries series}.
 * 
 * Data region property of the chart's Series
 * 
 * @returns {sap.makit.Series}
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getSeries = function() { return new sap.makit.Series(); };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Chart type
 * 
 * Default value is <code>Column</code>.
 * @returns {sap.makit.ChartType} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getType = function() { return new sap.makit.ChartType(); };

/**
 * Gets content of aggregation {@link #getValues values}.
 * 
 * Data region property of the chart's Values
 * 
 * @returns {sap.makit.Value[]}
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.getValues = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation {@link #getColumns columns}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Column}
 *           oColumn The column whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Checks for the provided <code>sap.makit.Row</code> in the aggregation {@link #getRows rows}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Row}
 *           oRow The row whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * Checks for the provided <code>sap.makit.Value</code> in the aggregation {@link #getValues values}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Value}
 *           oValue The value whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.indexOfValue = function(oValue) { return 0; };

/**
 * Inserts a column into the aggregation {@link #getColumns columns}.
 * 
 * @param {sap.makit.Column}
 *            oColumn The column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.insertColumn = function(oColumn,iIndex) { return new sap.makit.Layer(); };

/**
 * Inserts a value into the aggregation {@link #getValues values}.
 * 
 * @param {sap.makit.Value}
 *            oValue The value to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the value should be inserted at; for
 *              a negative value of <code>iIndex</code>, the value is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the value is inserted at
 *              the last position
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.insertValue = function(oValue,iIndex) { return new sap.makit.Layer(); };

/**
 * Removes all the controls from the aggregation {@link #getColumns columns}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.makit.Column[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getValues values}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.makit.Value[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.removeAllValues = function() { return new Array(); };

/**
 * Removes a column from the aggregation {@link #getColumns columns}.
 * 
 * @param {int | string | sap.makit.Column} vColumn The column to remove or its index or id
 * @returns {sap.makit.Column} The removed column or <code>null</code>
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.removeColumn = function(vColumn) { return new sap.makit.Column(); };

/**
 * Removes a value from the aggregation {@link #getValues values}.
 * 
 * @param {int | string | sap.makit.Value} vValue The value to remove or its index or id
 * @returns {sap.makit.Value} The removed value or <code>null</code>
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.removeValue = function(vValue) { return new sap.makit.Value(); };

/**
 * Sets a new value for property {@link #getDrawOnSecondaryAxis drawOnSecondaryAxis}.
 * 
 * Specifiy whether this layer should be drawn on the secondary axis.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDrawOnSecondaryAxis New value for property <code>drawOnSecondaryAxis</code>
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.setDrawOnSecondaryAxis = function(bDrawOnSecondaryAxis) { return new sap.makit.Layer(); };

/**
 * Sets a new value for property {@link #getLineThickness lineThickness}.
 * 
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fLineThickness New value for property <code>lineThickness</code>
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.setLineThickness = function(fLineThickness) { return new sap.makit.Layer(); };

/**
 * Sets a new value for property {@link #getPrimaryColorPalette primaryColorPalette}.
 * 
 * Allow a layer’s primary axis color palette to be modified without affecting other charts in the same screen. If not set, the chart will use the default color palette defined in the theme. This property will take precedence over other CombinationChart's color palette properties.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oPrimaryColorPalette New value for property <code>primaryColorPalette</code>
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.setPrimaryColorPalette = function(oPrimaryColorPalette) { return new sap.makit.Layer(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Chart type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Column</code>.
 * @param {sap.makit.ChartType} sType New value for property <code>type</code>
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.setType = function(sType) { return new sap.makit.Layer(); };

/**
 * Unbinds aggregation {@link #getColumns columns} from model data.
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.unbindColumns = function() { return new sap.makit.Layer(); };

/**
 * Unbinds aggregation {@link #getRows rows} from model data.
 * @returns {sap.makit.Layer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Layer.prototype.unbindRows = function() { return new sap.makit.Layer(); };


// ---- sap.makit.LegendPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.LegendPosition.toString = function() { return ""; };

// ---- sap.makit.MakitLib --------------------------------------------------------------------------

/**
 * Constructor for a new MakitLib.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * This class does not have its own settings, but all settings applicable to the base type
 * {@link sap.ui.core.Element#constructor sap.ui.core.Element} can be used.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Wrapper for MAKit Chart Library. Only to be used used internally.
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.12
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.MakitLib = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.MakitLib with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.MakitLib.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.makit.MakitLib.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.MakitLib.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.makit.Row --------------------------------------------------------------------------

/**
 * Constructor for a new Row.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCells cells} : sap.makit.Column[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The data row of the Chart's data table
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Row = function(sId,mSettings) {};
/**
 * Adds some cell to the aggregation {@link #getCells cells}.
 * @param {sap.makit.Column}
 *            oCell The cell to add; if empty, nothing is inserted
 * @returns {sap.makit.Row} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Row.prototype.addCell = function(oCell) { return new sap.makit.Row(); };

/**
 * Destroys all the cells in the aggregation {@link #getCells cells}.
 * @returns {sap.makit.Row} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Row.prototype.destroyCells = function() { return new sap.makit.Row(); };

/**
 * Creates a new subclass of class sap.makit.Row with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Row.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getCells cells}.
 * 
 * Representing the cells of the row. User should not add individual cells. The cells will be added automatically via Column mapping.
 * 
 * @returns {sap.makit.Column[]}
 * 
 * @public
 * 
 */
sap.makit.Row.prototype.getCells = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.makit.Row.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Row.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation {@link #getCells cells}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Column}
 *           oCell The cell whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.makit.Row.prototype.indexOfCell = function(oCell) { return 0; };

/**
 * Inserts a cell into the aggregation {@link #getCells cells}.
 * 
 * @param {sap.makit.Column}
 *            oCell The cell to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the cell should be inserted at; for
 *              a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the cell is inserted at
 *              the last position
 * @returns {sap.makit.Row} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Row.prototype.insertCell = function(oCell,iIndex) { return new sap.makit.Row(); };

/**
 * Removes all the controls from the aggregation {@link #getCells cells}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.makit.Column[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.makit.Row.prototype.removeAllCells = function() { return new Array(); };

/**
 * Removes a cell from the aggregation {@link #getCells cells}.
 * 
 * @param {int | string | sap.makit.Column} vCell The cell to remove or its index or id
 * @returns {sap.makit.Column} The removed cell or <code>null</code>
 * 
 * @public
 * 
 */
sap.makit.Row.prototype.removeCell = function(vCell) { return new sap.makit.Column(); };


// ---- sap.makit.Series --------------------------------------------------------------------------

/**
 * Constructor for a new Series.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumn column} : string</li>
 * <li>{@link #getDisplayName displayName} : string</li>
 * <li>{@link #getFormat format} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Represents the Series data region of the Chart.
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Series = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.Series with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Series.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColumn column}.
 * 
 * The name of the column that will be mapped to the chart's Series value
 * 
 * @returns {string} Value of property <code>column</code>
 * 
 * @public
 * 
 */
sap.makit.Series.prototype.getColumn = function() { return ""; };

/**
 * Gets current value of property {@link #getDisplayName displayName}.
 * 
 * The displayed name of the Series
 * 
 * @returns {string} Value of property <code>displayName</code>
 * 
 * @public
 * 
 */
sap.makit.Series.prototype.getDisplayName = function() { return ""; };

/**
 * Gets current value of property {@link #getFormat format}.
 * 
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * 
 * @returns {string} Value of property <code>format</code>
 * 
 * @public
 * 
 */
sap.makit.Series.prototype.getFormat = function() { return ""; };

/**
 * Returns a metadata object for class sap.makit.Series.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Series.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getColumn column}.
 * 
 * The name of the column that will be mapped to the chart's Series value
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sColumn New value for property <code>column</code>
 * @returns {sap.makit.Series} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Series.prototype.setColumn = function(sColumn) { return new sap.makit.Series(); };

/**
 * Sets a new value for property {@link #getDisplayName displayName}.
 * 
 * The displayed name of the Series
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayName New value for property <code>displayName</code>
 * @returns {sap.makit.Series} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Series.prototype.setDisplayName = function(sDisplayName) { return new sap.makit.Series(); };

/**
 * Sets a new value for property {@link #getFormat format}.
 * 
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFormat New value for property <code>format</code>
 * @returns {sap.makit.Series} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Series.prototype.setFormat = function(sFormat) { return new sap.makit.Series(); };


// ---- sap.makit.SortOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.SortOrder.toString = function() { return ""; };

// ---- sap.makit.Value --------------------------------------------------------------------------

/**
 * Constructor for a new Value.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getExpression expression} : string</li>
 * <li>{@link #getDisplayName displayName} : string</li>
 * <li>{@link #getFormat format} : string</li>
 * <li>{@link #getLocale locale} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Represents the Value data region of the Chart.
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.Value = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.Value with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Value.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDisplayName displayName}.
 * 
 * The text label representing this Value (on value bubble or table's header)
 * 
 * @returns {string} Value of property <code>displayName</code>
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.getDisplayName = function() { return ""; };

/**
 * Gets current value of property {@link #getExpression expression}.
 * 
 * The user should map the column on this property. The expression allows more advanced column mapping. Instead of just specifying the column name (e.g. revenueValue), the user can use SAP expression language e.g. Assuming the user has a revenueValue column and an operatingCost column, the user can specify the following expression:
 * "revenueValue - operatingCost"
 * the resulting value displayed in the chart will be the arithmatic operation result on these two columns.
 * 
 * @returns {string} Value of property <code>expression</code>
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.getExpression = function() { return ""; };

/**
 * Gets current value of property {@link #getFormat format}.
 * 
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * 
 * @returns {string} Value of property <code>format</code>
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.getFormat = function() { return ""; };

/**
 * Gets current value of property {@link #getLocale locale}.
 * 
 * Comma separated locales for specifiying values in different locale. The locale will be mapped in the same order as the series data.
 * e.g. zh-CH, en-US, de-DE
 * The first zh-CH will be applied to the value of the first series, en-US will be applied to the second series.
 * Currently will only work with 'currency' format.
 * Supported locales:
 * en, zh, de, fr, es, ru, ja, pt and their more specific variations such as en-CA, es-AR, zh-HK, etc.
 * 
 * @returns {string} Value of property <code>locale</code>
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.getLocale = function() { return ""; };

/**
 * Returns a metadata object for class sap.makit.Value.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.Value.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getDisplayName displayName}.
 * 
 * The text label representing this Value (on value bubble or table's header)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayName New value for property <code>displayName</code>
 * @returns {sap.makit.Value} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.setDisplayName = function(sDisplayName) { return new sap.makit.Value(); };

/**
 * Sets a new value for property {@link #getExpression expression}.
 * 
 * The user should map the column on this property. The expression allows more advanced column mapping. Instead of just specifying the column name (e.g. revenueValue), the user can use SAP expression language e.g. Assuming the user has a revenueValue column and an operatingCost column, the user can specify the following expression:
 * "revenueValue - operatingCost"
 * the resulting value displayed in the chart will be the arithmatic operation result on these two columns.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sExpression New value for property <code>expression</code>
 * @returns {sap.makit.Value} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.setExpression = function(sExpression) { return new sap.makit.Value(); };

/**
 * Sets a new value for property {@link #getFormat format}.
 * 
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFormat New value for property <code>format</code>
 * @returns {sap.makit.Value} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.setFormat = function(sFormat) { return new sap.makit.Value(); };

/**
 * Sets a new value for property {@link #getLocale locale}.
 * 
 * Comma separated locales for specifiying values in different locale. The locale will be mapped in the same order as the series data.
 * e.g. zh-CH, en-US, de-DE
 * The first zh-CH will be applied to the value of the first series, en-US will be applied to the second series.
 * Currently will only work with 'currency' format.
 * Supported locales:
 * en, zh, de, fr, es, ru, ja, pt and their more specific variations such as en-CA, es-AR, zh-HK, etc.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLocale New value for property <code>locale</code>
 * @returns {sap.makit.Value} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.Value.prototype.setLocale = function(sLocale) { return new sap.makit.Value(); };


// ---- sap.makit.ValueAxis --------------------------------------------------------------------------

/**
 * Constructor for a new ValueAxis.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMin min} : string</li>
 * <li>{@link #getMax max} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.makit.Axis#constructor sap.makit.Axis}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the properties of the Value's Axis.
 * @extends sap.makit.Axis
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.ValueAxis = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.ValueAxis with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.makit.Axis.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.ValueAxis.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getMax max}.
 * 
 * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major tick value depending on the value's range)
 * 
 * @returns {string} Value of property <code>max</code>
 * 
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.getMax = function() { return ""; };

/**
 * Returns a metadata object for class sap.makit.ValueAxis.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.ValueAxis.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMin min}.
 * 
 * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major tick value depending on the value's range). Set to empty string to switch back to automatic calculation.
 * 
 * @returns {string} Value of property <code>min</code>
 * 
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.getMin = function() { return ""; };

/**
 * Sets a new value for property {@link #getMax max}.
 * 
 * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major tick value depending on the value's range)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sMax New value for property <code>max</code>
 * @returns {sap.makit.ValueAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.setMax = function(sMax) { return new sap.makit.ValueAxis(); };

/**
 * Sets a new value for property {@link #getMin min}.
 * 
 * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major tick value depending on the value's range). Set to empty string to switch back to automatic calculation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sMin New value for property <code>min</code>
 * @returns {sap.makit.ValueAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.setMin = function(sMin) { return new sap.makit.ValueAxis(); };


// ---- sap.makit.ValueBubble --------------------------------------------------------------------------

/**
 * Constructor for a new ValueBubble.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowCategoryText showCategoryText} : boolean (default: true)</li>
 * <li>{@link #getShowCategoryDisplayName showCategoryDisplayName} : boolean (default: true)</li>
 * <li>{@link #getShowValueDisplayName showValueDisplayName} : boolean (default: true)</li>
 * <li>{@link #getShowValueOnPieChart showValueOnPieChart} : boolean (default: false)</li>
 * <li>{@link #getShowLegendLabel showLegendLabel} : boolean (default: true)</li>
 * <li>{@link #getShowNullValue showNullValue} : boolean (default: true)</li>
 * <li>{@link #getPosition position} : sap.makit.ValueBubblePosition (default: Top)</li>
 * <li>{@link #getStyle style} : sap.makit.ValueBubbleStyle (default: Top)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The properties of the Chart's Value Bubble.
 * @extends sap.ui.core.Element
 * 
 * @public
 * @since 1.8
 * @deprecated Since version 1.38.
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.makit.ValueBubble = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.makit.ValueBubble with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.ValueBubble.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.makit.ValueBubble.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.makit.ValueBubble.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPosition position}.
 * 
 * The position of the Value Bubble (Pie or Donut chart only)
 * 
 * Default value is <code>Top</code>.
 * @returns {sap.makit.ValueBubblePosition} Value of property <code>position</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getPosition = function() { return new sap.makit.ValueBubblePosition(); };

/**
 * Gets current value of property {@link #getShowCategoryDisplayName showCategoryDisplayName}.
 * 
 * Whether to display category's display name on the Value Bubble
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showCategoryDisplayName</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowCategoryDisplayName = function() { return false; };

/**
 * Gets current value of property {@link #getShowCategoryText showCategoryText}.
 * 
 * Whether to display category's text on the Value Bubble
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showCategoryText</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowCategoryText = function() { return false; };

/**
 * Gets current value of property {@link #getShowLegendLabel showLegendLabel}.
 * 
 * Whether to display legend's label (Pie or Donut chart only)
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLegendLabel</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowLegendLabel = function() { return false; };

/**
 * Gets current value of property {@link #getShowNullValue showNullValue}.
 * 
 * Whether to render null item on the Value Bubble
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showNullValue</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowNullValue = function() { return false; };

/**
 * Gets current value of property {@link #getShowValueDisplayName showValueDisplayName}.
 * 
 * Whether to display value's display name on the Value Bubble
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showValueDisplayName</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowValueDisplayName = function() { return false; };

/**
 * Gets current value of property {@link #getShowValueOnPieChart showValueOnPieChart}.
 * 
 * Whether to display value on Pie or Donut chart
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showValueOnPieChart</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowValueOnPieChart = function() { return false; };

/**
 * Gets current value of property {@link #getStyle style}.
 * 
 * Value Bubble positioning style (All the chart types except: Pie/Donut/HBar chart)
 * 
 * Default value is <code>Top</code>.
 * @returns {sap.makit.ValueBubbleStyle} Value of property <code>style</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getStyle = function() { return new sap.makit.ValueBubbleStyle(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Whether the Value Bubble is visible
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getVisible = function() { return false; };

/**
 * Sets a new value for property {@link #getPosition position}.
 * 
 * The position of the Value Bubble (Pie or Donut chart only)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Top</code>.
 * @param {sap.makit.ValueBubblePosition} sPosition New value for property <code>position</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setPosition = function(sPosition) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getShowCategoryDisplayName showCategoryDisplayName}.
 * 
 * Whether to display category's display name on the Value Bubble
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowCategoryDisplayName New value for property <code>showCategoryDisplayName</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowCategoryDisplayName = function(bShowCategoryDisplayName) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getShowCategoryText showCategoryText}.
 * 
 * Whether to display category's text on the Value Bubble
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowCategoryText New value for property <code>showCategoryText</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowCategoryText = function(bShowCategoryText) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getShowLegendLabel showLegendLabel}.
 * 
 * Whether to display legend's label (Pie or Donut chart only)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLegendLabel New value for property <code>showLegendLabel</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowLegendLabel = function(bShowLegendLabel) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getShowNullValue showNullValue}.
 * 
 * Whether to render null item on the Value Bubble
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowNullValue New value for property <code>showNullValue</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowNullValue = function(bShowNullValue) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getShowValueDisplayName showValueDisplayName}.
 * 
 * Whether to display value's display name on the Value Bubble
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowValueDisplayName New value for property <code>showValueDisplayName</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowValueDisplayName = function(bShowValueDisplayName) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getShowValueOnPieChart showValueOnPieChart}.
 * 
 * Whether to display value on Pie or Donut chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowValueOnPieChart New value for property <code>showValueOnPieChart</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowValueOnPieChart = function(bShowValueOnPieChart) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getStyle style}.
 * 
 * Value Bubble positioning style (All the chart types except: Pie/Donut/HBar chart)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Top</code>.
 * @param {sap.makit.ValueBubbleStyle} sStyle New value for property <code>style</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setStyle = function(sStyle) { return new sap.makit.ValueBubble(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Whether the Value Bubble is visible
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.makit.ValueBubble} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setVisible = function(bVisible) { return new sap.makit.ValueBubble(); };


// ---- sap.makit.ValueBubblePosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.ValueBubblePosition.toString = function() { return ""; };

// ---- sap.makit.ValueBubbleStyle --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.ValueBubbleStyle.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.makit.ChartType --------------------------------------------------------------------------

/**
 * Horizontal table bar chart
 * @public
 * 
 */
sap.makit.ChartType.Bar = "";

/**
 * Bubble chart
 * @public
 * 
 */
sap.makit.ChartType.Bubble = "";

/**
 * Column chart
 * @public
 * 
 */
sap.makit.ChartType.Column = "";

/**
 * Donut chart
 * @public
 * 
 */
sap.makit.ChartType.Donut = "";

/**
 * 100% stacked column chart
 * @public
 * 
 */
sap.makit.ChartType.HundredPercentStackedColumn = "";

/**
 * Line chart
 * @public
 * 
 */
sap.makit.ChartType.Line = "";

/**
 * Pie chart
 * @public
 * 
 */
sap.makit.ChartType.Pie = "";

/**
 * Stacked column chart
 * @public
 * 
 */
sap.makit.ChartType.StackedColumn = "";

/**
 * Waterfall Bar chart
 * @public
 * 
 */
sap.makit.ChartType.WaterfallBar = "";

/**
 * Waterfall Column chart
 * @public
 * 
 */
sap.makit.ChartType.WaterfallColumn = "";


// ---- sap.makit.LegendPosition --------------------------------------------------------------------------

/**
 * Legend location is on the bottom of the chart
 * @public
 * 
 */
sap.makit.LegendPosition.Bottom = "";

/**
 * Legend location is on the left of the chart
 * @public
 * 
 */
sap.makit.LegendPosition.Left = "";

/**
 * Hide the legend
 * @public
 * 
 */
sap.makit.LegendPosition.None = "";

/**
 * Legend location is on the right of the chart
 * @public
 * 
 */
sap.makit.LegendPosition.Right = "";

/**
 * Legend location is on the top of the chart
 * @public
 * 
 */
sap.makit.LegendPosition.Top = "";


// ---- sap.makit.SortOrder --------------------------------------------------------------------------

/**
 * Ascending sort
 * @public
 * 
 */
sap.makit.SortOrder.Ascending = "";

/**
 * Descending sort
 * @public
 * 
 */
sap.makit.SortOrder.Descending = "";

/**
 * No sorting
 * @public
 * 
 */
sap.makit.SortOrder.None = "";

/**
 * Partially sort
 * @public
 * 
 */
sap.makit.SortOrder.Partial = "";


// ---- sap.makit.ValueBubblePosition --------------------------------------------------------------------------

/**
 * Value Bubble position set to beside the chart
 * @public
 * 
 */
sap.makit.ValueBubblePosition.Side = "";

/**
 * Value Bubble position set to above the chart
 * @public
 * 
 */
sap.makit.ValueBubblePosition.Top = "";


// ---- sap.makit.ValueBubbleStyle --------------------------------------------------------------------------

/**
 * The Value Bubble floats on the touch point, chart's size will not change.
 * @public
 * 
 */
sap.makit.ValueBubbleStyle.Float = "";

/**
 * The Value Bubble floats and snaps above of the chart, chart's size will not change.
 * @public
 * 
 */
sap.makit.ValueBubbleStyle.FloatTop = "";

/**
 * The Value Bubble snaps above of the chart, the chart height will adjust accordingly.
 * @public
 * 
 */
sap.makit.ValueBubbleStyle.Top = "";

