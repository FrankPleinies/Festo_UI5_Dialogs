
// ---- sap.ui.table --------------------------------------------------------------------------


// ---- sap.ui.table.AnalyticalColumn --------------------------------------------------------------------------

/**
 * Constructor for a new AnalyticalColumn.
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
 * <li>{@link #getLeadingProperty leadingProperty} : string</li>
 * <li>{@link #getSummed summed} : boolean (default: false)</li>
 * <li>{@link #getInResult inResult} : boolean (default: false)</li>
 * <li>{@link #getShowIfGrouped showIfGrouped} : boolean (default: false)</li>
 * <li>{@link #getGroupHeaderFormatter groupHeaderFormatter} : any</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.Column#constructor sap.ui.table.Column}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This column adds additional properties to the table column which are needed for the analytical binding and table
 * @extends sap.ui.table.Column
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @experimental Since version 1.21.
 * The AnalyticalColumn will be productized soon. Some attributes will be added to Column.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalColumn = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.AnalyticalColumn with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Column.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumn.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
 * 
 * If the column is grouped, this formatter is used to format the value in the group header
 * 
 * @returns {any} Value of property <code>groupHeaderFormatter</code>
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getGroupHeaderFormatter = function() { return null; };

/**
 * Gets current value of property {@link #getInResult inResult}.
 * 
 * Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>inResult</code>
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getInResult = function() { return false; };

/**
 * Gets current value of property {@link #getLeadingProperty leadingProperty}.
 * 
 * Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.
 * 
 * @returns {string} Value of property <code>leadingProperty</code>
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getLeadingProperty = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.table.AnalyticalColumn.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumn.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowIfGrouped showIfGrouped}.
 * 
 * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showIfGrouped</code>
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getShowIfGrouped = function() { return false; };

/**
 * Gets current value of property {@link #getSummed summed}.
 * 
 * If defined a sum for this column is calculated
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>summed</code>
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.getSummed = function() { return false; };

/**
 * Returns the information whether the column is groupable.
 * 
 * The column is groupable only if the following conditions are fulfilled:
 * <ul>
 *   <li>The column must be child of an <code>AnalyticalTable</code>.</li>
 *   <li>The <code>rows</code> aggregation of the table must be bound.</li>
 *   <li>The metadata of the model must be loaded.</li>
 *   <li>The column's <code>leadingProperty</code> must be a sortable and filterable dimension.</li>
 * </ul>
 * 
 * @protected
 * @return {boolean} <code>true</code> if the column is groupable
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.isGroupable = function() { return false; };

/**
 * Sets a new value for property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
 * 
 * If the column is grouped, this formatter is used to format the value in the group header
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oGroupHeaderFormatter New value for property <code>groupHeaderFormatter</code>
 * @returns {sap.ui.table.AnalyticalColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setGroupHeaderFormatter = function(oGroupHeaderFormatter) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Sets a new value for property {@link #getInResult inResult}.
 * 
 * Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bInResult New value for property <code>inResult</code>
 * @returns {sap.ui.table.AnalyticalColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setInResult = function(bInResult) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Sets a new value for property {@link #getLeadingProperty leadingProperty}.
 * 
 * Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLeadingProperty New value for property <code>leadingProperty</code>
 * @returns {sap.ui.table.AnalyticalColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setLeadingProperty = function(sLeadingProperty) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Sets a new value for property {@link #getShowIfGrouped showIfGrouped}.
 * 
 * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowIfGrouped New value for property <code>showIfGrouped</code>
 * @returns {sap.ui.table.AnalyticalColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setShowIfGrouped = function(bShowIfGrouped) { return new sap.ui.table.AnalyticalColumn(); };

/**
 * Sets a new value for property {@link #getSummed summed}.
 * 
 * If defined a sum for this column is calculated
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSummed New value for property <code>summed</code>
 * @returns {sap.ui.table.AnalyticalColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalColumn.prototype.setSummed = function(bSummed) { return new sap.ui.table.AnalyticalColumn(); };


// ---- sap.ui.table.AnalyticalColumnMenu --------------------------------------------------------------------------

/**
 * Constructor for a new AnalyticalColumnMenu.
 * 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A column menu which is used by the analytical column
 * @extends sap.ui.table.ColumnMenu
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @experimental Since version 1.21.
 * The AnalyticalColumnMenu will be productized soon.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalColumnMenu = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.AnalyticalColumnMenu with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.ColumnMenu.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumnMenu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.table.AnalyticalColumnMenu.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalColumnMenu.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.table.AnalyticalTable --------------------------------------------------------------------------

/**
 * Constructor for a new AnalyticalTable.
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
 * <li>{@link #getSumOnTop sumOnTop} : boolean (default: false)</li>
 * <li>{@link #getNumberOfExpandedLevels numberOfExpandedLevels} : int (default: 0)</li>
 * <li>{@link #getAutoExpandMode autoExpandMode} : string (default: Bundled)</li>
 * <li>{@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter} : any</li>
 * <li>{@link #getCollapseRecursive collapseRecursive} : boolean (default: true)</li>
 * <li>{@link #getDirty dirty} : boolean</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.Table#constructor sap.ui.table.Table}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Table which handles analytical OData backends. The AnalyticalTable only works with an AnalyticalBinding and
 * correctly annotated OData services. Please check on the SAP Annotations for OData Version 2.0 documentation for further details.
 * @see http://scn.sap.com/docs/DOC-44986
 * 
 * @extends sap.ui.table.Table
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @see {@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
 * @see {@link fiori:/analytical-table-alv/ Analytical Table}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable = function(sId,mSettings) {};
/**
 * Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex.
 * The nodes are referenced via their absolute row index.
 * Please be aware that the absolute row index only applies to the tree which is visualized by the <code>AnalyticalTable</code> control.
 * Invisible nodes (collapsed child nodes) will not be taken into account.
 * 
 * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection.
 * To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".
 * 
 * @param {int} iFromIndex The starting index of the range which will be selected.
 * @param {int} iToIndex The starting index of the range which will be selected.
 * @returns {sap.ui.table.AnalyticalTable} a reference to the <code>AnalyticalTable</code> control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.addSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Collapses one or more rows.
 * 
 * @param {int|int[]} vRowIndex A single index, or an array of indices of the rows to be collapsed
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.collapse = function(vRowIndex) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Collapses all nodes (and their child nodes if collapseRecursive is activated).
 * 
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.collapseAll = function() { return new sap.ui.table.AnalyticalTable(); };

/**
 * Expands one or more rows.
 * 
 * @param {int|int[]} vRowIndex A single index or an array of indices of the rows to be expanded
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.expand = function(vRowIndex) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Expands all nodes. The current selection is removed, and the table scrolls back to the top.
 * If this method is called, not all groups might be loaded. If the user then scrolls to the bottom of the table,
 * additional groups are loaded, which increases the scroll range, and the scroll thumb moves up.
 * 
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @since 1.70
 * 
 */
sap.ui.table.AnalyticalTable.prototype.expandAll = function() { return new sap.ui.table.AnalyticalTable(); };

/**
 * Creates a new subclass of class sap.ui.table.AnalyticalTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the current analytical information of the given row or <code>null</code> if no information is available
 * (for example, if the table is not bound or the given row has no binding context).
 * 
 * The returned object provides the following information:
 * <ul>
 * <li><code>grandTotal</code> of type <code>boolean</code> Indicates whether the row is the grand total row</li>
 * <li><code>group</code> of type <code>boolean</code> Indicates whether the row is a group header</li>
 * <li><code>groupTotal</code> of type <code>boolean</code> Indicates whether the row is a totals row of a group</li>
 * <li><code>level</code> of type <code>integer</code> Level information (<code>-1</code> if no level information is available)</li>
 * <li><code>context</code> of type <code>sap.ui.model.Context</code> The binding context of the row</li>
 * <li><code>groupedColumns</code> of type <code>string[]</code> IDs of the grouped columns (only available for <code>group</code> and
 * <code>groupTotal</code>)</li>
 * </ul>
 * 
 * @param {sap.ui.table.Row} oRow The row for which the analytical information is returned
 * @returns {object | null} The analytical information of the given row
 * @private
 * @ui5-restricted sap.ui.comp
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getAnalyticalInfoOfRow = function(oRow) { return new Object(); };

/**
 * Gets current value of property {@link #getAutoExpandMode autoExpandMode}.
 * 
 * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ...
 * Must be a value of <code>sap.ui.table.TreeAutoExpandMode</code>.
 * 
 * The value of the property is only taken into account if no parameter is given in the binding information. Changes to this property
 * after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       autoExpandMode: "Bundled"
 *     }
 *   });
 * </pre>
 * 
 * Default value is <code>Bundled</code>.
 * @returns {string} Value of property <code>autoExpandMode</code>
 * 
 * @deprecated As of version 1.44.0, please use the corresponding binding parameter <code>autoExpandMode</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getAutoExpandMode = function() { return ""; };

/**
 * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
 * 
 * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.
 * 
 * Calling the setter of this property only has an effect when the tables <code>rows</code> aggregation is already bound and
 * the binding supports this feature.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>collapseRecursive</code>
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getCollapseRecursive = function() { return false; };

/**
 * Gets current value of property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
 * 
 * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0
 * greater }; Other values than functions will be ignored.
 * 
 * @returns {any} Value of property <code>columnVisibilityMenuSorter</code>
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getColumnVisibilityMenuSorter = function() { return null; };

/**
 * Returns the context of a row by its index.
 * 
 * @param {int} iIndex
 *         Index of the row to return the context from.
 * @returns {object} The context of a row by its index
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getContextByIndex = function(iIndex) { return new Object(); };

/**
 * Gets current value of property {@link #getDirty dirty}.
 * 
 * If dirty the content of the Table will be overlayed.
 * 
 * @returns {boolean} Value of property <code>dirty</code>
 * 
 * @deprecated As of version 1.21.2, replaced by {@link sap.ui.table.Table#setShowOverlay}
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getDirty = function() { return false; };

/**
 * The property <code>enableGrouping</code> is not supported by the <code>AnalyticalTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getEnableGrouping = function() {  };

/**
 * The <code>groupBy</code> association is not supported by the <code>AnalyticalTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getGroupBy = function() {  };

/**
 * Returns a metadata object for class sap.ui.table.AnalyticalTable.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.AnalyticalTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
 * 
 * Number of levels, which should be opened initially (on first load of data).
 * 
 * The value of the property is only taken into account if no parameter is given in the binding information. Changes to this property
 * after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       numberOfExpandedLevels: 1
 *     }
 *   });
 * </pre>
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>numberOfExpandedLevels</code>
 * 
 * @deprecated As of version 1.44.0, please use the corresponding binding parameter <code>numberOfExpandedLevels</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getNumberOfExpandedLevels = function() { return 0; };

/**
 * Retrieves the lead selection index. The lead selection index is, among other things, used to determine the
 * start/end of a selection range, when using Shift-Click to select multiple entries at once.
 * 
 * @returns {int[]} an array containing all selected indices (ascending ordered integers)
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getSelectedIndex = function() { return new Array(); };

/**
 * Returns an array containing the row indices of all selected tree nodes (in ascending order).
 * 
 * Please be aware of the following:
 * Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices
 * of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be
 * returned.
 * 
 * @returns {int[]} an array containing all selected indices
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSumOnTop sumOnTop}.
 * 
 * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does not affect the total sum.
 * 
 * The value of the property is only taken into account if no parameter is given in the binding information. Changes to this property
 * after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       sumOnTop: true
 *     }
 *   });
 * </pre>
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>sumOnTop</code>
 * 
 * @deprecated As of version 1.44.0, please use the corresponding binding parameter <code>sumOnTop</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getSumOnTop = function() { return false; };

/**
 * Returns the total size of the data entries.
 * 
 * @returns {int} The total size of the data entries
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.getTotalSize = function() { return 0; };

/**
 * Checks whether the row is expanded or collapsed.
 * 
 * @param {int} iRowIndex The index of the row to be checked
 * @returns {boolean} <code>true</code> if the row is expanded, <code>false</code> if it is collapsed
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.isExpanded = function(iRowIndex) { return false; };

/**
 * Checks if the row at the given index is selected.
 * 
 * @param {int} iRowIndex The row index for which the selection state should be retrieved
 * @returns {boolean} true if the index is selected, false otherwise
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.isIndexSelected = function(iRowIndex) { return false; };

/**
 * All rows/tree nodes inside the range (including boundaries) will be deselected.
 * The nodes are referenced with their absolute row index.
 * Please be aware that the absolute row index only applies to the tree which is visualized by the <code>AnalyticalTable</code> control.
 * Invisible nodes (collapsed child nodes) will not be taken into account.
 * 
 * @param {int} iFromIndex The starting index of the range which will be deselected.
 * @param {int} iToIndex The starting index of the range which will be deselected.
 * @returns {sap.ui.table.AnalyticalTable} a reference to the <code>AnalyticalTable</code> control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.removeSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.table.AnalyticalTable(); };

/**
 * This function is used by some composite controls to force updating the AnalyticalInfo
 * @param {boolean} bSuppressRefresh binding shall not refresh data
 * @param {boolean} bForceChange forces the binding to fire a change event
 * @protected
 * 
 */
sap.ui.table.AnalyticalTable.prototype.resumeUpdateAnalyticalInfo = function(bSuppressRefresh,bForceChange) {  };

/**
 * Selects all available nodes/rows.
 * 
 * Explanation of the SelectAll function and what to expect from its behavior:
 * All rows/nodes stored locally on the client are selected.
 * In addition all subsequent rows/tree nodes, which will be paged into view are also immediately selected.
 * However, due to obvious performance/network traffic reasons, the SelectAll function will NOT retrieve any data from the backend.
 * 
 * @returns {sap.ui.table.AnalyticalTable} a reference to the <code>AnalyticalTable</code> control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.selectAll = function() { return new sap.ui.table.AnalyticalTable(); };

/**
 * Sets a new value for property {@link #getAutoExpandMode autoExpandMode}.
 * 
 * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ...
 * Must be a value of <code>sap.ui.table.TreeAutoExpandMode</code>.
 * 
 * The value of the property is only taken into account if no parameter is given in the binding information. Changes to this property
 * after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       autoExpandMode: "Bundled"
 *     }
 *   });
 * </pre>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Bundled</code>.
 * @param {string} sAutoExpandMode New value for property <code>autoExpandMode</code>
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44.0, please use the corresponding binding parameter <code>autoExpandMode</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setAutoExpandMode = function(sAutoExpandMode) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
 * 
 * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.
 * 
 * Calling the setter of this property only has an effect when the tables <code>rows</code> aggregation is already bound and
 * the binding supports this feature.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bCollapseRecursive New value for property <code>collapseRecursive</code>
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setCollapseRecursive = function(bCollapseRecursive) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Sets a new value for property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
 * 
 * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0
 * greater }; Other values than functions will be ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oColumnVisibilityMenuSorter New value for property <code>columnVisibilityMenuSorter</code>
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setColumnVisibilityMenuSorter = function(oColumnVisibilityMenuSorter) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Sets a new value for property {@link #getDirty dirty}.
 * 
 * If dirty the content of the Table will be overlayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bDirty New value for property <code>dirty</code>
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.21.2, replaced by {@link sap.ui.table.Table#setShowOverlay}
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setDirty = function(bDirty) { return new sap.ui.table.AnalyticalTable(); };

/**
 * The property <code>enableGrouping</code> is not supported by the <code>AnalyticalTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setEnableGrouping = function() { return new sap.ui.table.AnalyticalTable(); };

/**
 * The <code>groupBy</code> association is not supported by the <code>AnalyticalTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setGroupBy = function() { return new sap.ui.table.AnalyticalTable(); };

/**
 * Sets a new value for property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
 * 
 * Number of levels, which should be opened initially (on first load of data).
 * 
 * The value of the property is only taken into account if no parameter is given in the binding information. Changes to this property
 * after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       numberOfExpandedLevels: 1
 *     }
 *   });
 * </pre>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iNumberOfExpandedLevels New value for property <code>numberOfExpandedLevels</code>
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44.0, please use the corresponding binding parameter <code>numberOfExpandedLevels</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setNumberOfExpandedLevels = function(iNumberOfExpandedLevels) { return new sap.ui.table.AnalyticalTable(); };

/**
 * In an <code>AnalyticalTable</code> control you can only select indices, which correspond to the currently visualized tree.
 * Invisible nodes (e.g. collapsed child nodes) cannot be selected via Index, because they do not
 * correspond to an <code>AnalyticalTable</code> row.
 * 
 * @param {int} iRowIndex The row index which will be selected (in case it exists)
 * @returns {sap.ui.table.AnalyticalTable} a reference to the <code>AnalyticalTable</code> control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setSelectedIndex = function(iRowIndex) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Sets the selection of the <code>AnalyticalTable</code> control to the given range (including boundaries).
 * 
 * <b>Note:</b> The previous selection will be lost/overridden. If this is not the required behavior,
 * please use <code>addSelectionInterval</code> and <code>removeSelectionInterval</code>.
 * 
 * @param {int} iFromIndex the start index of the selection range
 * @param {int} iToIndex the end index of the selection range
 * @returns {sap.ui.table.AnalyticalTable} a reference to the <code>AnalyticalTable</code> control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.table.AnalyticalTable(); };

/**
 * Sets a new value for property {@link #getSumOnTop sumOnTop}.
 * 
 * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does not affect the total sum.
 * 
 * The value of the property is only taken into account if no parameter is given in the binding information. Changes to this property
 * after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       sumOnTop: true
 *     }
 *   });
 * </pre>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSumOnTop New value for property <code>sumOnTop</code>
 * @returns {sap.ui.table.AnalyticalTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44.0, please use the corresponding binding parameter <code>sumOnTop</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.AnalyticalTable.prototype.setSumOnTop = function(bSumOnTop) { return new sap.ui.table.AnalyticalTable(); };

/**
 * This function is used by some composite controls to avoid updating the AnalyticalInfo when several column are added to the table.
 * In order to finally update the AnalyticalInfo and request data, resumeUpdateAnalyticalInfo must be called.
 * @protected
 * 
 */
sap.ui.table.AnalyticalTable.prototype.suspendUpdateAnalyticalInfo = function() {  };


// ---- sap.ui.table.Column --------------------------------------------------------------------------

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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMinWidth minWidth} : int (default: 0)</li>
 * <li>{@link #getFlexible flexible} : boolean (default: true)</li>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.core.HorizontalAlign (default: Begin)</li>
 * <li>{@link #getSorted sorted} : boolean (default: false)</li>
 * <li>{@link #getSortOrder sortOrder} : sap.ui.table.SortOrder (default: Ascending)</li>
 * <li>{@link #getSortProperty sortProperty} : string</li>
 * <li>{@link #getFiltered filtered} : boolean (default: false)</li>
 * <li>{@link #getFilterProperty filterProperty} : string</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getFilterOperator filterOperator} : string</li>
 * <li>{@link #getDefaultFilterOperator defaultFilterOperator} : string</li>
 * <li>{@link #getFilterType filterType} : any</li>
 * <li>{@link #getGrouped grouped} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getShowFilterMenuEntry showFilterMenuEntry} : boolean (default: true)</li>
 * <li>{@link #getShowSortMenuEntry showSortMenuEntry} : boolean (default: true)</li>
 * <li>{@link #getHeaderSpan headerSpan} : any (default: 1)</li>
 * <li>{@link #getAutoResizable autoResizable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Control|string (default)</li>
 * <li>{@link #getMultiLabels multiLabels} : sap.ui.core.Control[]</li>
 * <li>{@link #getTemplate template} : sap.ui.core.Control|string</li>
 * <li>{@link #getMenu menu} : sap.ui.unified.Menu</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:columnMenuOpen columnMenuOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The column allows you to define column specific properties that will be applied when rendering the table.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Column = function(sId,mSettings) {};
/**
 * Fires before the column menu is opened.
 * @event
 * @since 1.33.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.unified.Menu} oControlEvent.getParameters.menu Refence to the selected <code>menu</code> instance to be opened.
 * @public
 * 
 */
sap.ui.table.Column.prototype.columnMenuOpen = function(oControlEvent) {  };

/**
 * Adds some multiLabel to the aggregation {@link #getMultiLabels multiLabels}.
 * @param {sap.ui.core.Control}
 *            oMultiLabel The multiLabel to add; if empty, nothing is inserted
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.addMultiLabel = function(oMultiLabel) { return new sap.ui.table.Column(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:columnMenuOpen columnMenuOpen} event of this <code>sap.ui.table.Column</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Column</code> itself.
 * 
 * Fires before the column menu is opened.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Column</code> itself
 * 
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.33.0
 * 
 */
sap.ui.table.Column.prototype.attachColumnMenuOpen = function(oData,fnFunction,oListener) { return new sap.ui.table.Column(); };

/**
 * Destroys the creation template.
 * 
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @private
 * @ui5-restricted sap.ui.mdc
 * 
 */
sap.ui.table.Column.prototype.destroyCreationTemplate = function() { return new sap.ui.table.Column(); };

/**
 * Destroys the label in the aggregation {@link #getLabel label}.
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyLabel = function() { return new sap.ui.table.Column(); };

/**
 * Destroys the menu in the aggregation {@link #getMenu menu}.
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyMenu = function() { return new sap.ui.table.Column(); };

/**
 * Destroys all the multiLabels in the aggregation {@link #getMultiLabels multiLabels}.
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyMultiLabels = function() { return new sap.ui.table.Column(); };

/**
 * Destroys the template in the aggregation {@link #getTemplate template}.
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyTemplate = function() { return new sap.ui.table.Column(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:columnMenuOpen columnMenuOpen} event of this <code>sap.ui.table.Column</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.33.0
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.detachColumnMenuOpen = function(fnFunction,oListener) { return new sap.ui.table.Column(); };

/**
 * Creates a new subclass of class sap.ui.table.Column with name <code>sClassName</code>
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
sap.ui.table.Column.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:columnMenuOpen columnMenuOpen} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.unified.Menu} [mParameters.menu] Refence to the selected <code>menu</code> instance to be opened.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * @since 1.33.0
 * 
 */
sap.ui.table.Column.prototype.fireColumnMenuOpen = function(mParameters) { return false; };

/**
 * Gets current value of property {@link #getAutoResizable autoResizable}.
 * 
 * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest
 * currently displayed content. It does not consider rows which are currently not scrolled into view.
 * Currently only implemented to work with the following controls:
 * <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input,
 * sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
 * sap.ui.commons.Checkbox, sap.m.CheckBox</code>
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>autoResizable</code>
 * @since 1.21.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getAutoResizable = function() { return false; };

/**
 * Gets the creation template.
 * 
 * @returns {sap.ui.core.Control} Instance of the creation template control
 * @private
 * @ui5-restricted sap.ui.mdc
 * 
 */
sap.ui.table.Column.prototype.getCreationTemplate = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDefaultFilterOperator defaultFilterOperator}.
 * 
 * If this property is set, the default filter operator of the column is overridden.
 * By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid
 * <code>sap.ui.model.FilterOperator</code> needs to be passed.
 * 
 * @returns {string} Value of property <code>defaultFilterOperator</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getDefaultFilterOperator = function() { return ""; };

/**
 * Gets current value of property {@link #getFiltered filtered}.
 * 
 * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the
 * column header - it does not trigger the filter function. The column can be filtered using {@link sap.ui.table.Table#filter}.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>filtered</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFiltered = function() { return false; };

/**
 * Gets current value of property {@link #getFilterOperator filterOperator}.
 * 
 * Filter operator to use when filtering this column.
 * 
 * @returns {string} Value of property <code>filterOperator</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterOperator = function() { return ""; };

/**
 * Gets current value of property {@link #getFilterProperty filterProperty}.
 * 
 * Specifies the binding property on which the column shall be filtered.
 * Since the column template may have composite bindings, it's not possible to figure out on which binding
 * property the filter shall be applied. Therefore the binding property for filtering must be specified.
 * For example, if the first name and last name are displayed in the same column, only one of the two can be defined as
 * <code>filterProperty</code>.
 * 
 * A column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The
 * default menu entry is a text input field.
 * 
 * @returns {string} Value of property <code>filterProperty</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterProperty = function() { return ""; };

/**
 * Gets current value of property {@link #getFilterType filterType}.
 * 
 * Type of filter. It is used to transform the search term into the specified type and should be the same as
 * defined in the binding for the column template.
 * Default value is <code>sap.ui.model.type.String</code>.
 * It can be set to the class name of the type,
 * e.g.: <code>sap.ui.model.type.Date</code>,
 * or an expression similar to the binding syntax,
 * e.g.: <code>"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"</code>.
 * Here the escaping is mandatory to avoid handling by the binding parser.
 * As an alternative, a function can be passed that takes over the conversion. This cannot be done in the
 * XMLView, use {@link #setFilterType} instead.
 * 
 * @returns {any} Value of property <code>filterType</code>
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterType = function() { return null; };

/**
 * Gets current value of property {@link #getFilterValue filterValue}.
 * 
 * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
 * to provide a filterOperator as string, as shown here:
 * <pre>
 * &gt; 50
 * &lt; 100
 * &gt;= 150
 * &lt;= 200
 * = 250
 * != 300
 * something    ends with
 * something*    starts with
 * something*   contains
 * some..thing   between
 * 50..100       between
 * </pre>
 * 
 * @returns {string} Value of property <code>filterValue</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterValue = function() { return ""; };

/**
 * Gets current value of property {@link #getFlexible flexible}.
 * 
 * If the table is wider than the sum of widths of the visible columns, the columns will be
 * resized proportionally to their widths that were set originally. If set to false, the column will be displayed in the
 * original width. If all columns are set to not be flexible, an extra "dummy" column will be
 * created at the end of the table.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>flexible</code>
 * 
 * @deprecated As of version 1.44 this property has no effect. Use the property <code>minWidth</code> in combination with the property
 * <code>width="auto"</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFlexible = function() { return false; };

/**
 * Gets current value of property {@link #getGrouped grouped}.
 * 
 * Indicates if the column is grouped.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>grouped</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getGrouped = function() { return false; };

/**
 * Gets current value of property {@link #getHAlign hAlign}.
 * 
 * Horizontal alignment of the column content. Controls with a text align do not inherit
 * the horizontal alignment. You have to set the text align directly on the template.
 * 
 * Default value is <code>Begin</code>.
 * @returns {sap.ui.core.HorizontalAlign} Value of property <code>hAlign</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getHAlign = function() { return new sap.ui.core.HorizontalAlign(); };

/**
 * Gets current value of property {@link #getHeaderSpan headerSpan}.
 * 
 * If this property is set, a span is applied for the header. When moving columns, all columns
 * which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of
 * integers (if you use the multi header feature of the table). If you only specify an integer, this span is
 * applied for all header rows, with multiple integers you can specify a separate span for each header row.
 * <b>Note:</b> Only columns with a span equal to 1 can have a column menu. When setting a column to fixed, all
 * columns which are part of the header with the greatest span will be set to fixed.
 * 
 * Default value is <code>1</code>.
 * @returns {any} Value of property <code>headerSpan</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getHeaderSpan = function() { return null; };

/**
 * Gets content of aggregation {@link #getLabel label}.
 * 
 * Label of the column which is displayed in the column header. This aggregation is for the standard behavior,
 * where you only want to display one single row header. If a string is supplied, a default label control will be
 * created. Which control this is depends on the loaded libraries.
 * 
 * @returns {sap.ui.core.Control|string}
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getLabel = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getMenu menu}.
 * 
 * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
 * 
 * <b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of
 * a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>.
 * To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of
 * <code>sap.ui.unified.Menu</code>.
 * 
 * @returns {sap.ui.unified.Menu}
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getMenu = function() { return new sap.ui.unified.Menu(); };

/**
 * Returns a metadata object for class sap.ui.table.Column.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.Column.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinWidth minWidth}.
 * 
 * Defines the minimum width of a column in pixels.
 * <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>.
 * <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become
 * smaller.
 * <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>minWidth</code>
 * @since 1.44.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getMinWidth = function() { return 0; };

/**
 * Gets content of aggregation {@link #getMultiLabels multiLabels}.
 * 
 * Labels of the column which are displayed in the column header. Define a control for
 * each header row in the table. Use this aggregation if you want to use multiple headers per column.
 * 
 * @returns {sap.ui.core.Control[]}
 * @since 1.13.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getMultiLabels = function() { return new Array(); };

/**
 * Gets current value of property {@link #getName name}.
 * 
 * The name of the column which is used in the column visibility menu item as text.
 * If not set as a fallback the column menu tries to get the text from the nested Label.
 * 
 * @returns {string} Value of property <code>name</code>
 * @since 1.11.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getName = function() { return ""; };

/**
 * Gets current value of property {@link #getResizable resizable}.
 * 
 * If set to true, the column can be resized either using the resize bar (by mouse) or using
 * the keyboard (SHIFT + Left/Right Arrow keys)
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>resizable</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getResizable = function() { return false; };

/**
 * Gets current value of property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
 * 
 * Defines if the filter menu entry is displayed
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFilterMenuEntry</code>
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getShowFilterMenuEntry = function() { return false; };

/**
 * Gets current value of property {@link #getShowSortMenuEntry showSortMenuEntry}.
 * 
 * Defines if the sort menu entries are displayed
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSortMenuEntry</code>
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getShowSortMenuEntry = function() { return false; };

/**
 * Gets current value of property {@link #getSorted sorted}.
 * 
 * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
 * column header - it does not trigger the sort function. The column can be sorted using {@link sap.ui.table.Table#sort}.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>sorted</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSorted = function() { return false; };

/**
 * Gets current value of property {@link #getSortOrder sortOrder}.
 * 
 * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
 * rendered if the property <code>sorted</code> is <code>true</code>
 * 
 * Default value is <code>Ascending</code>.
 * @returns {sap.ui.table.SortOrder} Value of property <code>sortOrder</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSortOrder = function() { return new sap.ui.table.SortOrder(); };

/**
 * Gets current value of property {@link #getSortProperty sortProperty}.
 * 
 * Specifies the binding property on which the column will sort.
 * Since the column template may have composite bindings, it's not possible to figure out on which binding
 * property the sort shall be applied. Therefore the binding property for sorting must be specified.
 * For example, if the first name and last name are displayed in the same column, only one of the two can be defined as
 * <code>sortProperty</code>.
 * 
 * A column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.
 * 
 * @returns {string} Value of property <code>sortProperty</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSortProperty = function() { return ""; };

/**
 * Gets content of aggregation {@link #getTemplate template}.
 * 
 * Template (cell renderer) of this column.
 * A template is decoupled from the column. Each time the template's properties or aggregations have been changed, the template has to be
 * applied again via <code>setTemplate</code> for the changes to take effect.
 * If a string is defined, a default text control will be created with its text property bound to the value of the string. The default
 * template depends on the libraries loaded.
 * If there is no template, the column will not be rendered in the table.
 * The set of supported controls is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I
 * Choose?}" in the documentation for more details. While it is technically possible to also use other controls, doing so might lead to
 * issues with regards to scrolling, alignment, condensed mode, screen reader support, and keyboard support.
 * 
 * @returns {sap.ui.core.Control|string}
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getTemplate = function() { return new sap.ui.core.Control(); };

/**
 * Returns a template clone. It either finds an unused clone or clones a new one from the template.
 * 
 * @param {int} iIndex Index of the column in the columns aggregation of the table
 * @returns {sap.ui.core.Control|null} Clone of the template, or <code>null</code> if no template is defined
 * @protected
 * 
 */
sap.ui.table.Column.prototype.getTemplateClone = function(iIndex) { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Invisible controls are not rendered.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the column in CSS units.
 * Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a>
 * <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.
 * <p>This property can be changed by the user or by the application configuration/personalization.
 * <p>If a user adjusts the column width manually, the resulting value is always set in pixels.
 * In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMultiLabels multiLabels}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMultiLabel The multiLabel whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.13.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.indexOfMultiLabel = function(oMultiLabel) { return 0; };

/**
 * Inserts a multiLabel into the aggregation {@link #getMultiLabels multiLabels}.
 * 
 * @param {sap.ui.core.Control}
 *            oMultiLabel The multiLabel to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the multiLabel should be inserted at; for
 *              a negative value of <code>iIndex</code>, the multiLabel is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the multiLabel is inserted at
 *              the last position
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.insertMultiLabel = function(oMultiLabel,iIndex) { return new sap.ui.table.Column(); };

/**
 * Removes all the controls from the aggregation {@link #getMultiLabels multiLabels}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.13.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.removeAllMultiLabels = function() { return new Array(); };

/**
 * Removes a multiLabel from the aggregation {@link #getMultiLabels multiLabels}.
 * 
 * @param {int | string | sap.ui.core.Control} vMultiLabel The multiLabel to remove or its index or id
 * @returns {sap.ui.core.Control} The removed multiLabel or <code>null</code>
 * @since 1.13.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.removeMultiLabel = function(vMultiLabel) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getAutoResizable autoResizable}.
 * 
 * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest
 * currently displayed content. It does not consider rows which are currently not scrolled into view.
 * Currently only implemented to work with the following controls:
 * <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input,
 * sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
 * sap.ui.commons.Checkbox, sap.m.CheckBox</code>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAutoResizable New value for property <code>autoResizable</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.21.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setAutoResizable = function(bAutoResizable) { return new sap.ui.table.Column(); };

/**
 * Sets the creation template.
 * 
 * @param {sap.ui.core.Control} oCreationTemplate Instance of the creation template control
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @private
 * @ui5-restricted sap.ui.mdc
 * 
 */
sap.ui.table.Column.prototype.setCreationTemplate = function(oCreationTemplate) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getDefaultFilterOperator defaultFilterOperator}.
 * 
 * If this property is set, the default filter operator of the column is overridden.
 * By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid
 * <code>sap.ui.model.FilterOperator</code> needs to be passed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDefaultFilterOperator New value for property <code>defaultFilterOperator</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setDefaultFilterOperator = function(sDefaultFilterOperator) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getFiltered filtered}.
 * 
 * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the
 * column header - it does not trigger the filter function. The column can be filtered using {@link sap.ui.table.Table#filter}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFiltered New value for property <code>filtered</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFiltered = function(bFiltered) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getFilterOperator filterOperator}.
 * 
 * Filter operator to use when filtering this column.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFilterOperator New value for property <code>filterOperator</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterOperator = function(sFilterOperator) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getFilterProperty filterProperty}.
 * 
 * Specifies the binding property on which the column shall be filtered.
 * Since the column template may have composite bindings, it's not possible to figure out on which binding
 * property the filter shall be applied. Therefore the binding property for filtering must be specified.
 * For example, if the first name and last name are displayed in the same column, only one of the two can be defined as
 * <code>filterProperty</code>.
 * 
 * A column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The
 * default menu entry is a text input field.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFilterProperty New value for property <code>filterProperty</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterProperty = function(sFilterProperty) { return new sap.ui.table.Column(); };

/**
 * The filter type can be the class name of a type, an expression similar to the binding syntax, or a function.
 * A function receives the entered filter value as a parameter and should return the appropriate value for the filter expression.
 * 
 * @param {any} vType The filter type
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 * @example <caption>Class name of a type.</caption>
 * oColumn.setFilterType("sap.ui.model.type.Date");
 * 
 * @example <caption>Binding expression similar to the binding syntax.</caption>
 * // The escaping is mandatory to avoid handling by the binding parser.
 * oColumn.setFilterType("\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}");
 * 
 * @example <caption>A function that takes over the conversion.</caption>
 * // Converts the entered filter value to type Boolean.
 * oColumn.setFilterType(function(oValue) {
 *   return oValue == 1
 * });
 * 
 */
sap.ui.table.Column.prototype.setFilterType = function(vType) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getFilterValue filterValue}.
 * 
 * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
 * to provide a filterOperator as string, as shown here:
 * <pre>
 * &gt; 50
 * &lt; 100
 * &gt;= 150
 * &lt;= 200
 * = 250
 * != 300
 * something    ends with
 * something*    starts with
 * something*   contains
 * some..thing   between
 * 50..100       between
 * </pre>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFilterValue New value for property <code>filterValue</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterValue = function(sFilterValue) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getFlexible flexible}.
 * 
 * If the table is wider than the sum of widths of the visible columns, the columns will be
 * resized proportionally to their widths that were set originally. If set to false, the column will be displayed in the
 * original width. If all columns are set to not be flexible, an extra "dummy" column will be
 * created at the end of the table.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFlexible New value for property <code>flexible</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44 this property has no effect. Use the property <code>minWidth</code> in combination with the property
 * <code>width="auto"</code> instead.
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFlexible = function(bFlexible) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getGrouped grouped}.
 * 
 * Indicates if the column is grouped.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bGrouped New value for property <code>grouped</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setGrouped = function(bGrouped) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getHAlign hAlign}.
 * 
 * Horizontal alignment of the column content. Controls with a text align do not inherit
 * the horizontal alignment. You have to set the text align directly on the template.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Begin</code>.
 * @param {sap.ui.core.HorizontalAlign} sHAlign New value for property <code>hAlign</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setHAlign = function(sHAlign) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getHeaderSpan headerSpan}.
 * 
 * If this property is set, a span is applied for the header. When moving columns, all columns
 * which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of
 * integers (if you use the multi header feature of the table). If you only specify an integer, this span is
 * applied for all header rows, with multiple integers you can specify a separate span for each header row.
 * <b>Note:</b> Only columns with a span equal to 1 can have a column menu. When setting a column to fixed, all
 * columns which are part of the header with the greatest span will be set to fixed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {any} oHeaderSpan New value for property <code>headerSpan</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setHeaderSpan = function(oHeaderSpan) { return new sap.ui.table.Column(); };

/**
 * Sets the aggregated {@link #getLabel label}.
 * @param {sap.ui.core.Control|string} vLabel The label to set
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setLabel = function(vLabel) { return new sap.ui.table.Column(); };

/**
 * Sets the aggregated {@link #getMenu menu}.
 * @param {sap.ui.unified.Menu} oMenu The menu to set
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setMenu = function(oMenu) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getMinWidth minWidth}.
 * 
 * Defines the minimum width of a column in pixels.
 * <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>.
 * <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become
 * smaller.
 * <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMinWidth New value for property <code>minWidth</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.44.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setMinWidth = function(iMinWidth) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getName name}.
 * 
 * The name of the column which is used in the column visibility menu item as text.
 * If not set as a fallback the column menu tries to get the text from the nested Label.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.11.1
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setName = function(sName) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getResizable resizable}.
 * 
 * If set to true, the column can be resized either using the resize bar (by mouse) or using
 * the keyboard (SHIFT + Left/Right Arrow keys)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResizable New value for property <code>resizable</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setResizable = function(bResizable) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
 * 
 * Defines if the filter menu entry is displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFilterMenuEntry New value for property <code>showFilterMenuEntry</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setShowFilterMenuEntry = function(bShowFilterMenuEntry) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getShowSortMenuEntry showSortMenuEntry}.
 * 
 * Defines if the sort menu entries are displayed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSortMenuEntry New value for property <code>showSortMenuEntry</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setShowSortMenuEntry = function(bShowSortMenuEntry) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getSorted sorted}.
 * 
 * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
 * column header - it does not trigger the sort function. The column can be sorted using {@link sap.ui.table.Table#sort}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSorted New value for property <code>sorted</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSorted = function(bSorted) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getSortOrder sortOrder}.
 * 
 * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
 * rendered if the property <code>sorted</code> is <code>true</code>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Ascending</code>.
 * @param {sap.ui.table.SortOrder} sSortOrder New value for property <code>sortOrder</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSortOrder = function(sSortOrder) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getSortProperty sortProperty}.
 * 
 * Specifies the binding property on which the column will sort.
 * Since the column template may have composite bindings, it's not possible to figure out on which binding
 * property the sort shall be applied. Therefore the binding property for sorting must be specified.
 * For example, if the first name and last name are displayed in the same column, only one of the two can be defined as
 * <code>sortProperty</code>.
 * 
 * A column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSortProperty New value for property <code>sortProperty</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSortProperty = function(sSortProperty) { return new sap.ui.table.Column(); };

/**
 * Sets the aggregated {@link #getTemplate template}.
 * @param {sap.ui.core.Control|string} vTemplate The template to set
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setTemplate = function(vTemplate) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Invisible controls are not rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setVisible = function(bVisible) { return new sap.ui.table.Column(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the column in CSS units.
 * Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a>
 * <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.
 * <p>This property can be changed by the user or by the application configuration/personalization.
 * <p>If a user adjusts the column width manually, the resulting value is always set in pixels.
 * In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Column.prototype.setWidth = function(sWidth) { return new sap.ui.table.Column(); };

/**
 * Returns whether the column should be rendered.
 * @returns {boolean} Returns <code>true</code>, if the column should be rendered
 * @protected
 * 
 */
sap.ui.table.Column.prototype.shouldRender = function() { return false; };

/**
 * Sorts the current column ascending or descending.
 * 
 * @param {boolean} bDescending Sort order of the column (if undefined the default will be ascending)
 * @returns {sap.ui.table.Column} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @deprecated Since version 1.5.1. Please use the function "sap.ui.Table.prototype.sort".
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Column.prototype.sort = function(bDescending) { return new sap.ui.table.Column(); };

/**
 * Toggles the sort order of the column.
 * 
 * @public
 * @deprecated Since version 1.5.1.
 * Please use the function "sap.ui.Table.prototype.sort".
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Column.prototype.toggleSort = function() {  };


// ---- sap.ui.table.ColumnMenu --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMenu.
 * 
 * <b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of
 * a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>.
 * To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of
 * <code>sap.ui.unified.Menu</code>.
 * 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The column menu provides all common actions that can be performed on a column.
 * @extends sap.ui.unified.Menu
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) design time metamodel
 * 
 */
sap.ui.table.ColumnMenu = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.ColumnMenu with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.Menu.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.ColumnMenu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.table.ColumnMenu.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.ColumnMenu.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.table.GroupEventType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.GroupEventType.toString = function() { return ""; };

// ---- sap.ui.table.NavigationMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.NavigationMode.toString = function() { return ""; };

// ---- sap.ui.table.plugins.MultiSelectionPlugin --------------------------------------------------------------------------

/**
 * Constructs an instance of sap.ui.table.plugins.MultiSelectionPlugin
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
 * <li>{@link #getLimit limit} : int (default: 200)</li>
 * <li>{@link #getEnableNotification enableNotification} : boolean (default: false)</li>
 * <li>{@link #getShowHeaderSelector showHeaderSelector} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.table.SelectionMode (default: MultiToggle)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChange selectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.plugins.SelectionPlugin#constructor sap.ui.table.plugins.SelectionPlugin}
 * can be used as well.
 * 
 * @class  Implements a plugin to enable a special multi-selection behavior:
 * <ul>
 * <li>No Select All checkbox, select all can only be done via range selection</li>
 * <li>Dedicated Deselect All button to clear the selection</li>
 * <li>The number of indices which can be selected in a range is defined by the <code>limit</code> property by the application.
 * If the user tries to select more indices, the selection is automatically limited, and the table scrolls to the last selected index.</li>
 * <li>The plugin makes sure that the corresponding binding contexts up to the given limit are available, by requesting them from the
 *     binding.</li>
 * <li>Multiple consecutive selections are possible</li>
 * </ul>
 * 
 * This plugin is intended for the multi-selection mode, but also supports single selection for ease of use.
 * When this plugin is applied to the table, the table's selection mode is automatically set to MultiToggle and cannot be changed.
 * 
 * @extends sap.ui.table.plugins.SelectionPlugin
 * @constructor
 * @public
 * @since 1.64
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin = function() {};
/**
 * This event is fired when the selection is changed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int[]} oControlEvent.getParameters.indices Array of indices whose selection has been changed (either selected or deselected).
 * @param {boolean} oControlEvent.getParameters.limitReached Indicates whether the selection limit has been reached.
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.selectionChange = function(oControlEvent) {  };

/**
 * Adds the given selection interval to the selection and requests the corresponding binding contexts.
 * In single-selection mode it requests the context and sets the selected index to <code>iIndexTo</code>.
 * 
 * If the number of indices in the range is greater than the value of the <code>limit</code> property, only n=limit
 * indices, starting from <code>iIndexFrom</code>, are selected. The table is scrolled to display the index last
 * selected.
 * 
 * @param {int} iIndexFrom Index from which the selection starts
 * @param {int} iIndexTo Index up to which to select
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.addSelectionInterval = function(iIndexFrom,iIndexTo) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChange selectionChange} event of this <code>sap.ui.table.plugins.MultiSelectionPlugin</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.plugins.MultiSelectionPlugin</code> itself.
 * 
 * This event is fired when the selection is changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.plugins.MultiSelectionPlugin</code> itself
 * 
 * @returns {sap.ui.table.plugins.MultiSelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.attachSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.table.plugins.MultiSelectionPlugin(); };

/**
 * Removes the complete selection.
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.clearSelection = function() {  };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChange selectionChange} event of this <code>sap.ui.table.plugins.MultiSelectionPlugin</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.plugins.MultiSelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.detachSelectionChange = function(fnFunction,oListener) { return new sap.ui.table.plugins.MultiSelectionPlugin(); };

/**
 * Creates a new subclass of class sap.ui.table.plugins.MultiSelectionPlugin with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.plugins.SelectionPlugin.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int[]} [mParameters.indices] Array of indices whose selection has been changed (either selected or deselected).
 * @param {boolean} [mParameters.limitReached] Indicates whether the selection limit has been reached.
 * 
 * @returns {sap.ui.table.plugins.MultiSelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.fireSelectionChange = function(mParameters) { return new sap.ui.table.plugins.MultiSelectionPlugin(); };

/**
 * Gets current value of property {@link #getEnableNotification enableNotification}.
 * 
 * Enables notifications that are displayed once a selection has been limited.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableNotification</code>
 * @since 1.71
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.getEnableNotification = function() { return false; };

/**
 * Gets current value of property {@link #getLimit limit}.
 * 
 * Number of indices which can be selected in a range.
 * Accepts positive integer values. If set to 0, the limit is disabled, and the Select All checkbox appears instead of the Deselect All
 * button.
 * <b>Note:</b> To avoid severe performance problems, the limit should only be set to 0 in the following cases:
 * <ul>
 * <li>With client-side models</li>
 * <li>With server-side models if they are used in client mode</li>
 * <li>If the entity set is small</li>
 * </ul>
 * 
 * Default value is <code>200</code>.
 * @returns {int} Value of property <code>limit</code>
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.getLimit = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.table.plugins.MultiSelectionPlugin.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Zero-based indices of selected indices, wrapped in an array. An empty array means nothing has been selected.
 * 
 * @returns {int[]} An array containing all selected indices
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSelectionMode selectionMode}.
 * 
 * Selection mode of the plugin. This property controls whether single or multiple rows can be selected. It also influences the visual
 * appearance. When the selection mode is changed, the current selection is removed.
 * 
 * Default value is <code>MultiToggle</code>.
 * @returns {sap.ui.table.SelectionMode} Value of property <code>selectionMode</code>
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.getSelectionMode = function() { return new sap.ui.table.SelectionMode(); };

/**
 * Gets current value of property {@link #getShowHeaderSelector showHeaderSelector}.
 * 
 * Show header selector
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showHeaderSelector</code>
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.getShowHeaderSelector = function() { return false; };

/**
 * Returns the information whether the given index is selected.
 * 
 * @param {int} iIndex The index for which the selection state is retrieved
 * @returns {boolean} <code>true</code> if the index is selected
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.isIndexSelected = function(iIndex) { return false; };

/**
 * Removes the given selection interval from the selection. In case of single selection, only <code>iIndexTo</code> is removed from the selection.
 * 
 * @param {int} iIndexFrom Index from which the deselection starts
 * @param {int} iIndexTo Index up to which to deselect
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.removeSelectionInterval = function(iIndexFrom,iIndexTo) {  };

/**
 * Requests the binding contexts and adds all indices to the selection if the limit is disabled.
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.selectAll = function() {  };

/**
 * Sets a new value for property {@link #getEnableNotification enableNotification}.
 * 
 * Enables notifications that are displayed once a selection has been limited.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableNotification New value for property <code>enableNotification</code>
 * @returns {sap.ui.table.plugins.MultiSelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * @since 1.71
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.setEnableNotification = function(bEnableNotification) { return new sap.ui.table.plugins.MultiSelectionPlugin(); };

/**
 * Sets a new value for property {@link #getLimit limit}.
 * 
 * Number of indices which can be selected in a range.
 * Accepts positive integer values. If set to 0, the limit is disabled, and the Select All checkbox appears instead of the Deselect All
 * button.
 * <b>Note:</b> To avoid severe performance problems, the limit should only be set to 0 in the following cases:
 * <ul>
 * <li>With client-side models</li>
 * <li>With server-side models if they are used in client mode</li>
 * <li>If the entity set is small</li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>200</code>.
 * @param {int} iLimit New value for property <code>limit</code>
 * @returns {sap.ui.table.plugins.MultiSelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.setLimit = function(iLimit) { return new sap.ui.table.plugins.MultiSelectionPlugin(); };

/**
 * Requests the context and sets the selected index to <code>iIndex</code>.
 * 
 * @param {int} iIndex The index to select
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.setSelectedIndex = function(iIndex) {  };

/**
 * Sets the given selection interval as the selection and requests the corresponding binding contexts.
 * In single-selection mode it requests the context and sets the selected index to <code>iIndexTo</code>.
 * 
 * If the number of indices in the range is greater than the value of the <code>limit</code> property, only n=limit
 * indices, starting from <code>iIndexFrom</code>, are selected. The table is scrolled to display the index last
 * selected.
 * 
 * @param {int} iIndexFrom Index from which the selection starts
 * @param {int} iIndexTo Index up to which to select
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.setSelectionInterval = function(iIndexFrom,iIndexTo) {  };

/**
 * Sets a new value for property {@link #getSelectionMode selectionMode}.
 * 
 * Selection mode of the plugin. This property controls whether single or multiple rows can be selected. It also influences the visual
 * appearance. When the selection mode is changed, the current selection is removed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>MultiToggle</code>.
 * @param {sap.ui.table.SelectionMode} sSelectionMode New value for property <code>selectionMode</code>
 * @returns {sap.ui.table.plugins.MultiSelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.setSelectionMode = function(sSelectionMode) { return new sap.ui.table.plugins.MultiSelectionPlugin(); };

/**
 * Sets a new value for property {@link #getShowHeaderSelector showHeaderSelector}.
 * 
 * Show header selector
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowHeaderSelector New value for property <code>showHeaderSelector</code>
 * @returns {sap.ui.table.plugins.MultiSelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.plugins.MultiSelectionPlugin.prototype.setShowHeaderSelector = function(bShowHeaderSelector) { return new sap.ui.table.plugins.MultiSelectionPlugin(); };


// ---- sap.ui.table.plugins.SelectionPlugin --------------------------------------------------------------------------

/**
 * Constructs an instance of sap.ui.table.plugins.SelectionPlugin
 * 
 * The following restrictions apply:
 * <ul>
 *  <li>Do not create subclasses of the SelectionPlugin. The API is subject to change.</li>
 * </ul>
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
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.table.SelectionMode (default: MultiToggle)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChange selectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @abstract
 * @class Implements the selection methods for a table.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * @public
 * @since 1.64
 * @experimental As of version 1.64
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.plugins.SelectionPlugin = function() {};
/**
 * This event is fired when the selection is changed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.table.plugins.SelectionPlugin.prototype.selectionChange = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChange selectionChange} event of this <code>sap.ui.table.plugins.SelectionPlugin</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.plugins.SelectionPlugin</code> itself.
 * 
 * This event is fired when the selection is changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.plugins.SelectionPlugin</code> itself
 * 
 * @returns {sap.ui.table.plugins.SelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.plugins.SelectionPlugin.prototype.attachSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.table.plugins.SelectionPlugin(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChange selectionChange} event of this <code>sap.ui.table.plugins.SelectionPlugin</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.plugins.SelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.plugins.SelectionPlugin.prototype.detachSelectionChange = function(fnFunction,oListener) { return new sap.ui.table.plugins.SelectionPlugin(); };

/**
 * Creates a new subclass of class sap.ui.table.plugins.SelectionPlugin with name <code>sClassName</code>
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
sap.ui.table.plugins.SelectionPlugin.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.table.plugins.SelectionPlugin} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.table.plugins.SelectionPlugin.prototype.fireSelectionChange = function(mParameters) { return new sap.ui.table.plugins.SelectionPlugin(); };

/**
 * Returns a metadata object for class sap.ui.table.plugins.SelectionPlugin.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.plugins.SelectionPlugin.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.table.Row --------------------------------------------------------------------------

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
 * <li>{@link #getCells cells} : sap.ui.core.Control[] (default)</li>
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
 * The row.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Row = function(sId,mSettings) {};
/**
 * Adds some cell to the aggregation {@link #getCells cells}.
 * @param {sap.ui.core.Control}
 *            oCell The cell to add; if empty, nothing is inserted
 * @returns {sap.ui.table.Row} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Row.prototype.addCell = function(oCell) { return new sap.ui.table.Row(); };

/**
 * Destroys all the cells in the aggregation {@link #getCells cells}.
 * @returns {sap.ui.table.Row} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Row.prototype.destroyCells = function() { return new sap.ui.table.Row(); };

/**
 * Creates a new subclass of class sap.ui.table.Row with name <code>sClassName</code>
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
sap.ui.table.Row.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getCells cells}.
 * 
 * The actual cells are a table-internal construct. The controls in this aggregation are the content of the cells.
 * This aggregation is managed by the table and must not be manipulated. Only read access is allowed.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.table.Row.prototype.getCells = function() { return new Array(); };

/**
 * Returns the index of the row in the table or -1 if not added to a table. This
 * function considers the scroll position of the table and also takes fixed rows and
 * fixed bottom rows into account.
 * 
 * @returns {int} index of the row (considers scroll position and fixed rows)
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Row.prototype.getIndex = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.table.Row.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.Row.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the related <code>RowAction</code> of the row.
 * 
 * This function must only be used for application testing purposes.
 * The <code>RowAction</code> is generated based on a template. Manipulations of the object or its items are not supported.
 * 
 * @return {sap.ui.table.RowAction} The related <code>RowAction</code> of the row.
 * @protected
 * 
 */
sap.ui.table.Row.prototype.getRowAction = function() { return new sap.ui.table.RowAction(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getCells cells}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCell The cell whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.table.Row.prototype.indexOfCell = function(oCell) { return 0; };

/**
 * Inserts a cell into the aggregation {@link #getCells cells}.
 * 
 * @param {sap.ui.core.Control}
 *            oCell The cell to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the cell should be inserted at; for
 *              a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the cell is inserted at
 *              the last position
 * @returns {sap.ui.table.Row} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Row.prototype.insertCell = function(oCell,iIndex) { return new sap.ui.table.Row(); };

/**
 * Removes all the controls from the aggregation {@link #getCells cells}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.table.Row.prototype.removeAllCells = function() { return new Array(); };

/**
 * Removes a cell from the aggregation {@link #getCells cells}.
 * 
 * @param {int | string | sap.ui.core.Control} vCell The cell to remove or its index or id
 * @returns {sap.ui.core.Control} The removed cell or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.table.Row.prototype.removeCell = function(vCell) { return new sap.ui.core.Control(); };


// ---- sap.ui.table.RowAction --------------------------------------------------------------------------

/**
 * Constructor for a new RowAction.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.table.RowActionItem[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>RowAction</code> control allows to display multiple action items which can be selected by the user.
 * If more action items are available as the available space allows to display an overflow mechanism is provided.
 * This control must only be used in the context of the <code>sap.ui.table.Table</code> control to define row actions.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.45.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.RowAction = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.table.RowActionItem}
 *            oItem The item to add; if empty, nothing is inserted
 * @returns {sap.ui.table.RowAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.addItem = function(oItem) { return new sap.ui.table.RowAction(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.ui.table.RowAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.destroyItems = function() { return new sap.ui.table.RowAction(); };

/**
 * Creates a new subclass of class sap.ui.table.RowAction with name <code>sClassName</code>
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
sap.ui.table.RowAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The action items which should be displayed.
 * 
 * @returns {sap.ui.table.RowActionItem[]}
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.table.RowAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.RowAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Whether the control should be visible on the screen. If set to <code>false</code>, the control is hidden.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.table.RowActionItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.RowActionItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.table.RowActionItem}
 *            oItem The item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.table.RowAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.table.RowAction(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.table.RowActionItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.table.RowActionItem} vItem The item to remove or its index or id
 * @returns {sap.ui.table.RowActionItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.removeItem = function(vItem) { return new sap.ui.table.RowActionItem(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Whether the control should be visible on the screen. If set to <code>false</code>, the control is hidden.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.table.RowAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowAction.prototype.setVisible = function(bVisible) { return new sap.ui.table.RowAction(); };


// ---- sap.ui.table.RowActionItem --------------------------------------------------------------------------

/**
 * Constructor for a new RowActionItem.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getText text} : string (default: )</li>
 * <li>{@link #getType type} : sap.ui.table.RowActionType (default: Custom)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * An action items to be displayed in a <code>RowAction</code> control.
 * This element must only be used in the context of the <code>sap.ui.table.Table</code> control to define row actions.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * @since 1.45.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.RowActionItem = function(sId,mSettings) {};
/**
 * The <code>press</code> is fired when the user triggers the corresponding action.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.ui.table.RowActionItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.RowActionItem</code> itself.
 * 
 * The <code>press</code> is fired when the user triggers the corresponding action.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.RowActionItem</code> itself
 * 
 * @returns {sap.ui.table.RowActionItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.table.RowActionItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.ui.table.RowActionItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.RowActionItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.table.RowActionItem(); };

/**
 * Creates a new subclass of class sap.ui.table.RowActionItem with name <code>sClassName</code>
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
sap.ui.table.RowActionItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.table.RowActionItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.table.RowActionItem.prototype.firePress = function(mParameters) { return new sap.ui.table.RowActionItem(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * The icon of the item.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.table.RowActionItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.RowActionItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * The text of the item. It is used as tooltip and for accessibility purposes.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * The type of the item.
 * Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>.
 * If an icon or text is set explicitly this setting is used.
 * 
 * Default value is <code>Custom</code>.
 * @returns {sap.ui.table.RowActionType} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.getType = function() { return new sap.ui.table.RowActionType(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Whether the item should be visible on the screen.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.getVisible = function() { return false; };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * The icon of the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.table.RowActionItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.setIcon = function(sIcon) { return new sap.ui.table.RowActionItem(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * The text of the item. It is used as tooltip and for accessibility purposes.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.table.RowActionItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.setText = function(sText) { return new sap.ui.table.RowActionItem(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * The type of the item.
 * Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>.
 * If an icon or text is set explicitly this setting is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Custom</code>.
 * @param {sap.ui.table.RowActionType} sType New value for property <code>type</code>
 * @returns {sap.ui.table.RowActionItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.setType = function(sType) { return new sap.ui.table.RowActionItem(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Whether the item should be visible on the screen.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.table.RowActionItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.RowActionItem.prototype.setVisible = function(bVisible) { return new sap.ui.table.RowActionItem(); };


// ---- sap.ui.table.RowActionType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.RowActionType.toString = function() { return ""; };

// ---- sap.ui.table.RowSettings --------------------------------------------------------------------------

/**
 * Constructor for new RowSettings.
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
 * <li>{@link #getHighlight highlight} : string (default: None)</li>
 * <li>{@link #getHighlightText highlightText} : string (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new element, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>RowSettings</code> control allows you to configure a row.
 * You can only use this control in the context of the <code>sap.ui.table.Table</code> control to define row settings.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.48.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.RowSettings = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.RowSettings with name <code>sClassName</code>
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
sap.ui.table.RowSettings.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getHighlight highlight}.
 * 
 * The highlight state of the rows.
 * 
 * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no highlights are visible.
 * Valid values for the <code>highlight</code> property are values of the enumerations {@link sap.ui.core.MessageType} or
 * {@link sap.ui.core.IndicationColor}.
 * 
 * Accessibility support is provided through the associated {@link sap.ui.table.RowSettings#setHighlightText highlightText} property.
 * If the <code>highlight</code> property is set to a value of {@link sap.ui.core.MessageType}, the <code>highlightText</code>
 * property does not need to be set because a default text is used. However, the default text can be overridden by setting the
 * <code>highlightText</code> property.
 * In all other cases the <code>highlightText</code> property must be set.
 * 
 * Default value is <code>None</code>.
 * @returns {string} Value of property <code>highlight</code>
 * @since 1.48.0
 * 
 * @public
 * 
 */
sap.ui.table.RowSettings.prototype.getHighlight = function() { return ""; };

/**
 * Gets current value of property {@link #getHighlightText highlightText}.
 * 
 * Defines the semantics of the {@link sap.ui.table.RowSettings#setHighlight highlight} property for accessibility purposes.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>highlightText</code>
 * @since 1.62
 * 
 * @public
 * 
 */
sap.ui.table.RowSettings.prototype.getHighlightText = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.table.RowSettings.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.RowSettings.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getHighlight highlight}.
 * 
 * The highlight state of the rows.
 * 
 * If the highlight is set to {@link sap.ui.core.MessageType sap.ui.core.MessageType.None} (default), no highlights are visible.
 * Valid values for the <code>highlight</code> property are values of the enumerations {@link sap.ui.core.MessageType} or
 * {@link sap.ui.core.IndicationColor}.
 * 
 * Accessibility support is provided through the associated {@link sap.ui.table.RowSettings#setHighlightText highlightText} property.
 * If the <code>highlight</code> property is set to a value of {@link sap.ui.core.MessageType}, the <code>highlightText</code>
 * property does not need to be set because a default text is used. However, the default text can be overridden by setting the
 * <code>highlightText</code> property.
 * In all other cases the <code>highlightText</code> property must be set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {string} sHighlight New value for property <code>highlight</code>
 * @returns {sap.ui.table.RowSettings} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48.0
 * 
 * @public
 * 
 */
sap.ui.table.RowSettings.prototype.setHighlight = function(sHighlight) { return new sap.ui.table.RowSettings(); };

/**
 * Sets a new value for property {@link #getHighlightText highlightText}.
 * 
 * Defines the semantics of the {@link sap.ui.table.RowSettings#setHighlight highlight} property for accessibility purposes.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sHighlightText New value for property <code>highlightText</code>
 * @returns {sap.ui.table.RowSettings} Reference to <code>this</code> in order to allow method chaining
 * @since 1.62
 * 
 * @public
 * 
 */
sap.ui.table.RowSettings.prototype.setHighlightText = function(sHighlightText) { return new sap.ui.table.RowSettings(); };


// ---- sap.ui.table.SelectionBehavior --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SelectionBehavior.toString = function() { return ""; };

// ---- sap.ui.table.SelectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SelectionMode.toString = function() { return ""; };

// ---- sap.ui.table.SharedDomRef --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SharedDomRef.toString = function() { return ""; };

// ---- sap.ui.table.SortOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SortOrder.toString = function() { return ""; };

// ---- sap.ui.table.Table --------------------------------------------------------------------------

/**
 * Constructor for a new Table.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getRowHeight rowHeight} : int</li>
 * <li>{@link #getColumnHeaderHeight columnHeaderHeight} : int</li>
 * <li>{@link #getColumnHeaderVisible columnHeaderVisible} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCount visibleRowCount} : int (default: 10)</li>
 * <li>{@link #getFirstVisibleRow firstVisibleRow} : int (default: 0)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.table.SelectionMode (default: MultiToggle)</li>
 * <li>{@link #getSelectionBehavior selectionBehavior} : sap.ui.table.SelectionBehavior (default: RowSelector)</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int (default: -1)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getNavigationMode navigationMode} : sap.ui.table.NavigationMode (default: Scrollbar)</li>
 * <li>{@link #getThreshold threshold} : int (default: 100)</li>
 * <li>{@link #getEnableColumnReordering enableColumnReordering} : boolean (default: true)</li>
 * <li>{@link #getEnableGrouping enableGrouping} : boolean (default: false)</li>
 * <li>{@link #getShowColumnVisibilityMenu showColumnVisibilityMenu} : boolean (default: false)</li>
 * <li>{@link #getShowNoData showNoData} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCountMode visibleRowCountMode} : sap.ui.table.VisibleRowCountMode (default: Fixed)</li>
 * <li>{@link #getMinAutoRowCount minAutoRowCount} : int (default: 5)</li>
 * <li>{@link #getFixedColumnCount fixedColumnCount} : int (default: 0)</li>
 * <li>{@link #getFixedRowCount fixedRowCount} : int (default: 0)</li>
 * <li>{@link #getFixedBottomRowCount fixedBottomRowCount} : int (default: 0)</li>
 * <li>{@link #getEnableColumnFreeze enableColumnFreeze} : boolean (default: false)</li>
 * <li>{@link #getEnableCellFilter enableCellFilter} : boolean (default: false)</li>
 * <li>{@link #getShowOverlay showOverlay} : boolean (default: false)</li>
 * <li>{@link #getEnableSelectAll enableSelectAll} : boolean (default: true)</li>
 * <li>{@link #getEnableCustomFilter enableCustomFilter} : boolean (default: false)</li>
 * <li>{@link #getEnableBusyIndicator enableBusyIndicator} : boolean (default: false)</li>
 * <li>{@link #getRowActionCount rowActionCount} : int (default: 0)</li>
 * <li>{@link #getAlternateRowColors alternateRowColors} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.ui.core.Control|string</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control|string</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * <li>{@link #getExtension extension} : sap.ui.core.Control[]</li>
 * <li>{@link #getColumns columns} : sap.ui.table.Column[] (default)</li>
 * <li>{@link #getRows rows} : sap.ui.table.Row[]</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control|string</li>
 * <li>{@link #getRowActionTemplate rowActionTemplate} : sap.ui.table.RowAction</li>
 * <li>{@link #getRowSettingsTemplate rowSettingsTemplate} : sap.ui.table.RowSettings</li>
 * <li>{@link #getContextMenu contextMenu} : sap.ui.core.IContextMenu</li>
 * <li>{@link #getPlugins plugins} : sap.ui.table.plugins.SelectionPlugin[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getGroupBy groupBy} : (sap.ui.core.ID | sap.ui.table.Column)</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:rowSelectionChange rowSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnSelect columnSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnResize columnResize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnMove columnMove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:sort sort} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filter filter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:group group} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnVisibility columnVisibility} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cellClick cellClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cellContextmenu cellContextmenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeOpenContextMenu beforeOpenContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:columnFreeze columnFreeze} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:customFilter customFilter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:firstVisibleRowChanged firstVisibleRowChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:busyStateChanged busyStateChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:paste paste} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * <p>
 *     Provides a comprehensive set of features for displaying and dealing with vast amounts of data. The Table control supports
 *     desktop PCs and tablet devices. On tablets, special consideration should be given to the number of visible columns
 *     and rows due to the limited performance of some devices.
 * </p>
 * <p>
 *     In order to keep the document DOM as lean as possible, the Table control reuses its DOM elements of the rows.
 *     When the user scrolls, only the row contexts are changed but the rendered controls remain the same. This allows
 *     the Table control to handle huge amounts of data. Nevertheless, restrictions apply regarding the number of displayed
 *     columns. Keep the number as low as possible to improve performance. Due to the nature of tables, the used
 *     control for column templates also has a big influence on the performance.
 * </p>
 * <p>
 *     The Table control relies completely on data binding, and its supported feature set is tightly coupled to
 *     the data model and binding being used.
 * </p>
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @see {@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
 * @see {@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
 * @see {@link fiori:/grid-table/ Grid Table}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table = function(sId,mSettings) {};
/**
 * Fired when the user requests the context menu for a table cell.
 * @event
 * @since 1.54
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex Row index where the context menu opens.
 * @param {int} oControlEvent.getParameters.columnIndex Column index where the context menu opens.
 * This is the index of the column in the <code>columns</code> aggregation.
 * @param {sap.ui.core.IContextMenu} oControlEvent.getParameters.contextMenu Context menu
 * @public
 * 
 */
sap.ui.table.Table.prototype.beforeOpenContextMenu = function(oControlEvent) {  };

/**
 * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
 * @event
 * @since 1.37.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.table.Table.prototype.busyStateChanged = function(oControlEvent) {  };

/**
 * fired when the user clicks a cell of the table (experimental!).
 * @event
 * @since 1.21.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.cellControl The control of the cell.
 * @param {Object} oControlEvent.getParameters.cellDomRef DOM reference of the clicked cell. Can be used to position the context menu.
 * @param {int} oControlEvent.getParameters.rowIndex Row index of the selected cell.
 * @param {int} oControlEvent.getParameters.columnIndex Column index of the selected cell. This is the index of visible columns and might differ from
 * the index maintained in the column aggregation.
 * @param {string} oControlEvent.getParameters.columnId Column ID of the selected cell.
 * @param {sap.ui.model.Context} oControlEvent.getParameters.rowBindingContext Row binding context of the selected cell.
 * @public
 * 
 */
sap.ui.table.Table.prototype.cellClick = function(oControlEvent) {  };

/**
 * fired when the user clicks a cell of the table.
 * @event
 * @since 1.21.0
 * @deprecated As of 1.54, replaced by <code>beforeOpenContextMenu</code>.
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.cellControl The control of the cell.
 * @param {Object} oControlEvent.getParameters.cellDomRef DOM reference of the clicked cell. Can be used to position the context menu.
 * @param {int} oControlEvent.getParameters.rowIndex Row index of the selected cell.
 * @param {int} oControlEvent.getParameters.columnIndex Column index of the selected cell. This is the index of visible columns and might differ from
 * the index maintained in the column aggregation.
 * @param {string} oControlEvent.getParameters.columnId Column ID of the selected cell.
 * @param {sap.ui.model.Context} oControlEvent.getParameters.rowBindingContext Row binding context of the selected cell.
 * @public
 * 
 */
sap.ui.table.Table.prototype.cellContextmenu = function(oControlEvent) {  };

/**
 * fired when a column of the table should be freezed
 * @event
 * @since 1.21.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the column to freeze
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnFreeze = function(oControlEvent) {  };

/**
 * fired when a table column is moved.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column moved column.
 * @param {int} oControlEvent.getParameters.newPos new position of the column.
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnMove = function(oControlEvent) {  };

/**
 * fired when a table column is resized.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column resized column.
 * @param {sap.ui.core.CSSSize} oControlEvent.getParameters.width new width of the table column as CSS Size definition.
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnResize = function(oControlEvent) {  };

/**
 * fired when a column of the table has been selected
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the selected column
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnSelect = function(oControlEvent) {  };

/**
 * fired when the visibility of a table column is changed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column affected column.
 * @param {boolean} oControlEvent.getParameters.newVisible new value of the visible property.
 * @public
 * 
 */
sap.ui.table.Table.prototype.columnVisibility = function(oControlEvent) {  };

/**
 * This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is
 * passed as parameter.
 * @event
 * @since 1.23.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.table.Table.prototype.customFilter = function(oControlEvent) {  };

/**
 * fired when the table is filtered.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column filtered column.
 * @param {string} oControlEvent.getParameters.value filter value.
 * @public
 * 
 */
sap.ui.table.Table.prototype.filter = function(oControlEvent) {  };

/**
 * This event gets fired when the first visible row is changed. It should only be used by composite controls.
 * The event even is fired when setFirstVisibleRow is called programmatically.
 * @event
 * @since 1.37.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.table.Table.prototype.firstVisibleRowChanged = function(oControlEvent) {  };

/**
 * fired when the table is grouped (experimental!).
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column grouped column.
 * @public
 * 
 */
sap.ui.table.Table.prototype.group = function(oControlEvent) {  };

/**
 * This event gets fired when the user pastes content from the clipboard to the table.
 * Pasting can be done via the context menu or the standard paste keyboard shortcut, if the focus is inside the table.
 * @event
 * @since 1.60
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string[][]} oControlEvent.getParameters.data 2D array of strings with data from the clipboard. The first dimension represents the rows, and the
 * second dimension represents the cells of the tabular data.
 * @public
 * 
 */
sap.ui.table.Table.prototype.paste = function(oControlEvent) {  };

/**
 * fired when the row selection of the table has been changed (the event parameters can be used to determine
 * selection changes - to find out the selected rows you should better use the table selection API)
 * 
 * <b>Note:</b> If a selection plugin is applied to the table, this event won't be fired.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex row index which has been clicked so that the selection has been changed (either selected or deselected)
 * @param {object} oControlEvent.getParameters.rowContext binding context of the row which has been clicked so that selection has been changed
 * @param {int[]} oControlEvent.getParameters.rowIndices array of row indices which selection has been changed (either selected or deselected)
 * @param {boolean} oControlEvent.getParameters.selectAll indicator if "select all" function is used to select rows
 * @param {boolean} oControlEvent.getParameters.userInteraction indicates that the event was fired due to an explicit user interaction like clicking the row header
 * or using the keyboard (SPACE or ENTER) to select a row or a range of rows.
 * @public
 * 
 */
sap.ui.table.Table.prototype.rowSelectionChange = function(oControlEvent) {  };

/**
 * fired when the table is sorted.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column sorted column.
 * @param {sap.ui.table.SortOrder} oControlEvent.getParameters.sortOrder Sort Order
 * @param {boolean} oControlEvent.getParameters.columnAdded If column was added to sorter this is true. If new sort is started this is set to false
 * @public
 * 
 */
sap.ui.table.Table.prototype.sort = function(oControlEvent) {  };

/**
 * Enables the legacy multi selection behavior for mouse interaction.
 * 
 * @throws {Error} If a selection plugin is applied
 * @private
 * @ui5-restricted sap.watt.hanaplugins.editor.plugin.hdbcalculationview
 * 
 */
sap.ui.table.Table.prototype._enableLegacyMultiSelection = function() {  };

/**
 * Enriches the table with synchronization capabilities exposed through an interface of the SyncExtension applied to the table.
 * <b>Do not call this method more than once on the same table!</b>
 * 
 * @see sap.ui.table.TableSyncExtension#getInterface
 * @returns {Promise} Returns a promise that resolves with the synchronization interface, and rejects with an error object.
 * @private
 * @ui5-restricted sap.gantt
 * 
 */
sap.ui.table.Table.prototype._enableSynchronization = function() { return null; };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.table.Table(); };

/**
 * Adds some column to the aggregation {@link #getColumns columns}.
 * @param {sap.ui.table.Column}
 *            oColumn The column to add; if empty, nothing is inserted
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.addColumn = function(oColumn) { return new sap.ui.table.Table(); };

/**
 * Adds some extension to the aggregation {@link #getExtension extension}.
 * @param {sap.ui.core.Control}
 *            oExtension The extension to add; if empty, nothing is inserted
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.addExtension = function(oExtension) { return new sap.ui.table.Table(); };

/**
 * Adds some plugin to the aggregation {@link #getPlugins plugins}.
 * @param {sap.ui.table.plugins.SelectionPlugin}
 *            oPlugin The plugin to add; if empty, nothing is inserted
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.64
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.addPlugin = function(oPlugin) { return new sap.ui.table.Table(); };

/**
 * Adds some row to the aggregation {@link #getRows rows}.
 * @param {sap.ui.table.Row}
 *            oRow The row to add; if empty, nothing is inserted
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.addRow = function(oRow) { return new sap.ui.table.Table(); };

/**
 * Adds the given selection interval to the selection. In case of a single selection, only <code>iIndexTo</code> is added to the selection.
 * 
 * @param {int} iIndexFrom Index from which the selection starts
 * @param {int} iIndexTo Index up to which to select
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @throws {Error} If a selection plugin is applied
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.addSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * Fired when the user requests the context menu for a table cell.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.54
 * 
 */
sap.ui.table.Table.prototype.attachBeforeOpenContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:busyStateChanged busyStateChanged} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.37.0
 * 
 */
sap.ui.table.Table.prototype.attachBusyStateChanged = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:cellClick cellClick} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when the user clicks a cell of the table (experimental!).
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.attachCellClick = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:cellContextmenu cellContextmenu} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when the user clicks a cell of the table.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.21.0
 * @deprecated As of 1.54, replaced by <code>beforeOpenContextMenu</code>.
 * 
 */
sap.ui.table.Table.prototype.attachCellContextmenu = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:columnFreeze columnFreeze} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when a column of the table should be freezed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.attachColumnFreeze = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:columnMove columnMove} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when a table column is moved.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnMove = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:columnResize columnResize} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when a table column is resized.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnResize = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:columnSelect columnSelect} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when a column of the table has been selected
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnSelect = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:columnVisibility columnVisibility} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when the visibility of a table column is changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnVisibility = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:customFilter customFilter} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is
 * passed as parameter.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.23.0
 * 
 */
sap.ui.table.Table.prototype.attachCustomFilter = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:filter filter} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when the table is filtered.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachFilter = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * This event gets fired when the first visible row is changed. It should only be used by composite controls.
 * The event even is fired when setFirstVisibleRow is called programmatically.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.37.0
 * 
 */
sap.ui.table.Table.prototype.attachFirstVisibleRowChanged = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:group group} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when the table is grouped (experimental!).
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachGroup = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:paste paste} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * This event gets fired when the user pastes content from the clipboard to the table.
 * Pasting can be done via the context menu or the standard paste keyboard shortcut, if the focus is inside the table.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.60
 * 
 */
sap.ui.table.Table.prototype.attachPaste = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:rowSelectionChange rowSelectionChange} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when the row selection of the table has been changed (the event parameters can be used to determine
 * selection changes - to find out the selected rows you should better use the table selection API)
 * 
 * <b>Note:</b> If a selection plugin is applied to the table, this event won't be fired.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachRowSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:sort sort} event of this <code>sap.ui.table.Table</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.
 * 
 * fired when the table is sorted.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachSort = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Triggers automatic resizing of a column to the widest content.
 * 
 * @experimental Experimental! Presently implemented to only work with a very limited set of controls (e.g. sap.m.Text).
 * @param {int} iColIndex The index of the column in the list of visible columns.
 * @public
 * 
 */
sap.ui.table.Table.prototype.autoResizeColumn = function(iColIndex) {  };

/**
 * Binds aggregation {@link #getColumns columns} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.bindColumns = function(oBindingInfo) { return new sap.ui.table.Table(); };

/**
 * Binds aggregation {@link #getRows rows} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.bindRows = function(oBindingInfo) { return new sap.ui.table.Table(); };

/**
 * Removes complete selection.
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @throws {Error} If a selection plugin is applied
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.clearSelection = function() { return new sap.ui.table.Table(); };

/**
 * Destroys all the columns in the aggregation {@link #getColumns columns}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyColumns = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the contextMenu in the aggregation {@link #getContextMenu contextMenu}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.54
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyContextMenu = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the creation row.
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @private
 * @ui5-restricted sap.ui.mdc
 * 
 */
sap.ui.table.Table.prototype.destroyCreationRow = function() { return new sap.ui.table.Table(); };

/**
 * Destroys all the extension in the aggregation {@link #getExtension extension}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyExtension = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the footer in the aggregation {@link #getFooter footer}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyFooter = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the noData in the aggregation {@link #getNoData noData}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyNoData = function() { return new sap.ui.table.Table(); };

/**
 * Destroys all the plugins in the aggregation {@link #getPlugins plugins}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.64
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyPlugins = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the rowActionTemplate in the aggregation {@link #getRowActionTemplate rowActionTemplate}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyRowActionTemplate = function() { return new sap.ui.table.Table(); };

/**
 * Destroys all the rows in the aggregation {@link #getRows rows}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyRows = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the rowSettingsTemplate in the aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyRowSettingsTemplate = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the title in the aggregation {@link #getTitle title}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyTitle = function() { return new sap.ui.table.Table(); };

/**
 * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38. This aggregation is deprecated, use the <code>extension</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyToolbar = function() { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:beforeOpenContextMenu beforeOpenContextMenu} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.54
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachBeforeOpenContextMenu = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:busyStateChanged busyStateChanged} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.37.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachBusyStateChanged = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:cellClick cellClick} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.21.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachCellClick = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:cellContextmenu cellContextmenu} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.21.0
 * @deprecated As of 1.54, replaced by <code>beforeOpenContextMenu</code>.
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachCellContextmenu = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:columnFreeze columnFreeze} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.21.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnFreeze = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:columnMove columnMove} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnMove = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:columnResize columnResize} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnResize = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:columnSelect columnSelect} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnSelect = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:columnVisibility columnVisibility} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnVisibility = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:customFilter customFilter} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.23.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachCustomFilter = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:filter filter} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachFilter = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:firstVisibleRowChanged firstVisibleRowChanged} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.37.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachFirstVisibleRowChanged = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:group group} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachGroup = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:paste paste} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachPaste = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:rowSelectionChange rowSelectionChange} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachRowSelectionChange = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:sort sort} event of this <code>sap.ui.table.Table</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachSort = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * Creates a new {@link sap.ui.core.util.Export} object and fills row/column information from the table if not provided. For the cell content,
 * the column's "sortProperty" will be used (experimental!)
 * 
 * <p><b>Please note: This method uses synchronous requests. Support and functioning ends with the support for synchronous requests in
 * browsers.</b></p>
 * 
 * @param {object} [mSettings] settings for the new Export, see {@link sap.ui.core.util.Export} <code>constructor</code>
 * @returns {sap.ui.core.util.Export} Export object
 * @experimental Experimental because the property for the column/cell definitions (sortProperty) could change in future.
 * @deprecated As of 1.56, replaced by the <code>sap.ui.export</code> library.
 * @public
 * 
 */
sap.ui.table.Table.prototype.exportData = function(mSettings) { return new sap.ui.core.util.Export(); };

/**
 * Creates a new subclass of class sap.ui.table.Table with name <code>sClassName</code>
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
sap.ui.table.Table.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Filter the given column by the given value.
 * 
 * @param {sap.ui.table.Column} oColumn Column to be filtered
 * @param {string} sValue Filter value as string (will be converted)
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.filter = function(oColumn,sValue) {  };

/**
 * Fires event {@link #event:beforeOpenContextMenu beforeOpenContextMenu} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.rowIndex] Row index where the context menu opens.
 * @param {int} [mParameters.columnIndex] Column index where the context menu opens.
 * This is the index of the column in the <code>columns</code> aggregation.
 * @param {sap.ui.core.IContextMenu} [mParameters.contextMenu] Context menu
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * @since 1.54
 * 
 */
sap.ui.table.Table.prototype.fireBeforeOpenContextMenu = function(mParameters) { return false; };

/**
 * Fires event {@link #event:busyStateChanged busyStateChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.37.0
 * 
 */
sap.ui.table.Table.prototype.fireBusyStateChanged = function(mParameters) { return new sap.ui.table.Table(); };

/**
 * Fires event {@link #event:cellClick cellClick} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.cellControl] The control of the cell.
 * @param {Object} [mParameters.cellDomRef] DOM reference of the clicked cell. Can be used to position the context menu.
 * @param {int} [mParameters.rowIndex] Row index of the selected cell.
 * @param {int} [mParameters.columnIndex] Column index of the selected cell. This is the index of visible columns and might differ from
 * the index maintained in the column aggregation.
 * @param {string} [mParameters.columnId] Column ID of the selected cell.
 * @param {sap.ui.model.Context} [mParameters.rowBindingContext] Row binding context of the selected cell.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.fireCellClick = function(mParameters) { return false; };

/**
 * Fires event {@link #event:cellContextmenu cellContextmenu} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.cellControl] The control of the cell.
 * @param {Object} [mParameters.cellDomRef] DOM reference of the clicked cell. Can be used to position the context menu.
 * @param {int} [mParameters.rowIndex] Row index of the selected cell.
 * @param {int} [mParameters.columnIndex] Column index of the selected cell. This is the index of visible columns and might differ from
 * the index maintained in the column aggregation.
 * @param {string} [mParameters.columnId] Column ID of the selected cell.
 * @param {sap.ui.model.Context} [mParameters.rowBindingContext] Row binding context of the selected cell.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * @since 1.21.0
 * @deprecated As of 1.54, replaced by <code>beforeOpenContextMenu</code>.
 * 
 */
sap.ui.table.Table.prototype.fireCellContextmenu = function(mParameters) { return false; };

/**
 * Fires event {@link #event:columnFreeze columnFreeze} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] reference to the column to freeze
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * @since 1.21.0
 * 
 */
sap.ui.table.Table.prototype.fireColumnFreeze = function(mParameters) { return false; };

/**
 * Fires event {@link #event:columnMove columnMove} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] moved column.
 * @param {int} [mParameters.newPos] new position of the column.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnMove = function(mParameters) { return false; };

/**
 * Fires event {@link #event:columnResize columnResize} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] resized column.
 * @param {sap.ui.core.CSSSize} [mParameters.width] new width of the table column as CSS Size definition.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnResize = function(mParameters) { return false; };

/**
 * Fires event {@link #event:columnSelect columnSelect} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] reference to the selected column
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnSelect = function(mParameters) { return false; };

/**
 * Fires event {@link #event:columnVisibility columnVisibility} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] affected column.
 * @param {boolean} [mParameters.newVisible] new value of the visible property.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnVisibility = function(mParameters) { return false; };

/**
 * Fires event {@link #event:customFilter customFilter} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.23.0
 * 
 */
sap.ui.table.Table.prototype.fireCustomFilter = function(mParameters) { return new sap.ui.table.Table(); };

/**
 * Fires event {@link #event:filter filter} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] filtered column.
 * @param {string} [mParameters.value] filter value.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireFilter = function(mParameters) { return false; };

/**
 * Fires event {@link #event:firstVisibleRowChanged firstVisibleRowChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.37.0
 * 
 */
sap.ui.table.Table.prototype.fireFirstVisibleRowChanged = function(mParameters) { return new sap.ui.table.Table(); };

/**
 * Fires event {@link #event:group group} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] grouped column.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireGroup = function(mParameters) { return false; };

/**
 * Fires event {@link #event:paste paste} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string[][]} [mParameters.data] 2D array of strings with data from the clipboard. The first dimension represents the rows, and the
 * second dimension represents the cells of the tabular data.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * @since 1.60
 * 
 */
sap.ui.table.Table.prototype.firePaste = function(mParameters) { return false; };

/**
 * Fires event {@link #event:rowSelectionChange rowSelectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.rowIndex] row index which has been clicked so that the selection has been changed (either selected or deselected)
 * @param {object} [mParameters.rowContext] binding context of the row which has been clicked so that selection has been changed
 * @param {int[]} [mParameters.rowIndices] array of row indices which selection has been changed (either selected or deselected)
 * @param {boolean} [mParameters.selectAll] indicator if "select all" function is used to select rows
 * @param {boolean} [mParameters.userInteraction] indicates that the event was fired due to an explicit user interaction like clicking the row header
 * or using the keyboard (SPACE or ENTER) to select a row or a range of rows.
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireRowSelectionChange = function(mParameters) { return new sap.ui.table.Table(); };

/**
 * Fires event {@link #event:sort sort} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.table.Column} [mParameters.column] sorted column.
 * @param {sap.ui.table.SortOrder} [mParameters.sortOrder] Sort Order
 * @param {boolean} [mParameters.columnAdded] If column was added to sorter this is true. If new sort is started this is set to false
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireSort = function(mParameters) { return false; };

/**
 * Gets current value of property {@link #getAlternateRowColors alternateRowColors}.
 * 
 * Enables alternating table row colors.
 * Alternate row coloring is not available for the tree mode.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>alternateRowColors</code>
 * @since 1.52
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getAlternateRowColors = function() { return false; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Returns the control inside the cell with the given row index (in the <code>rows</code> aggregation)
 * and column index (in the <code>columns</code> aggregation or in the list of visible columns only, depending on
 * parameter <code>bVisibleColumnIndex</code>).
 * 
 * The use of this method outside the sap.ui.table library is only allowed for test purposes!
 * 
 * @param {int} iRowIndex Index of row in the table's <code>rows</code> aggregation
 * @param {int} iColumnIndex Index of column in the list of visible columns or in the <code>columns</code> aggregation, as indicated with
 *                           <code>bVisibleColumnIndex</code>
 * @param {boolean} bVisibleColumnIndex If set to <code>true</code>, the given column index is interpreted as index in the list of visible
 *                                      columns, otherwise as index in the <code>columns</code> aggregation
 * @returns {sap.ui.core.Control} Control inside the cell with the given row and column index or <code>null</code> if no such control exists
 * @private
 * @ui5-restricted
 * 
 */
sap.ui.table.Table.prototype.getCellControl = function(iRowIndex,iColumnIndex,bVisibleColumnIndex) { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getColumnHeaderHeight columnHeaderHeight}.
 * 
 * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property
 * for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the
 * content density configuration. The actual height can increase based on the content.
 * 
 * <b>Note</b>: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied to each individual row of the
 * table's header.
 * 
 * @returns {int} Value of property <code>columnHeaderHeight</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumnHeaderHeight = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnHeaderVisible columnHeaderVisible}.
 * 
 * Flag whether the column header is visible or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>columnHeaderVisible</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumnHeaderVisible = function() { return false; };

/**
 * Gets content of aggregation {@link #getColumns columns}.
 * 
 * Columns of the Table
 * 
 * @returns {sap.ui.table.Column[]}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumns = function() { return new Array(); };

/**
 * In contrast to the function <code>getFixedColumnCount</code> which returns the value of the property <code>fixedColumnCount</code>, this
 * function returns the actual fixed column count computed based on the table width.
 * 
 * <b>Note:</b> The computed column count is only available after the table is fully rendered.
 * 
 * @returns {int} The actual fixed column count computed based on the table width.
 * @protected
 * 
 */
sap.ui.table.Table.prototype.getComputedFixedColumnCount = function() { return 0; };

/**
 * Returns the context of a row by its index. Please note that for server-based models like OData,
 * the supplied index might not have been loaded yet. If the context is not available at the client,
 * the binding will trigger a backend request and request this single context. Although this API
 * looks synchronous it may not return a context but load it and fire a change event on the binding.
 * 
 * For server-based models you should consider to only make this API call when the index is within
 * the currently visible scroll area.
 * 
 * @param {int} iIndex Index of the row to return the context from.
 * @returns {sap.ui.model.Context | null} The context at this index or null
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.getContextByIndex = function(iIndex) { return new sap.ui.model.Context(); };

/**
 * Gets content of aggregation {@link #getContextMenu contextMenu}.
 * 
 * Defines the context menu for the table.
 * 
 * <b>Note:</b> The context menu will also be available for the row selectors as well as in the row actions cell of the table control.
 * 
 * The custom context menu will not be shown in the group header rows and the sum row of the <code>AnalyticalTable</code> control.
 * 
 * If this aggregation is set, then the <code>enableCellFilter</code> property will have no effect.
 * 
 * @returns {sap.ui.core.IContextMenu}
 * @since 1.54
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getContextMenu = function() { return new sap.ui.core.IContextMenu(); };

/**
 * Gets the creation row.
 * 
 * @returns {sap.ui.table.CreationRow} oCreationRow Instance of the creation row
 * @private
 * @ui5-restricted sap.ui.mdc
 * 
 */
sap.ui.table.Table.prototype.getCreationRow = function() { return new sap.ui.table.CreationRow(); };

/**
 * Gets content of aggregation <code>dragDropConfig</code> which defines the drag-and-drop configuration.
 * 
 * The following restrictions apply:
 * <ul>
 *   <li>Columns cannot be configured to be draggable.</li>
 *   <li>The following rows are not draggable:
 *     <ul>
 *       <li>Empty rows</li>
 *       <li>Group header rows</li>
 *       <li>Sum rows</li>
 *     </ul>
 *   </li>
 *   <li>Columns cannot be configured to be droppable.</li>
 *   <li>The following rows are not droppable:
 *     <ul>
 *       <li>The dragged row itself</li>
 *       <li>Empty rows</li>
 *       <li>Group header rows</li>
 *       <li>Sum rows</li>
 *     </ul>
 *   </li>
 * </ul>
 * @returns sap.ui.core.dnd.DragDropBase[]
 * @public
 * @since 1.52
 * 
 */
sap.ui.table.Table.prototype.getDragDropConfig = function() {  };

/**
 * Gets current value of property {@link #getEditable editable}.
 * 
 * Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property {@link #getEnableBusyIndicator enableBusyIndicator}.
 * 
 * If set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator.
 * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens,
 * for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy.
 * The busy state of the table can still be set manually by calling {@link sap.ui.core.Control#setBusy}.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableBusyIndicator</code>
 * @since 1.27.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableBusyIndicator = function() { return false; };

/**
 * Gets current value of property {@link #getEnableCellFilter enableCellFilter}.
 * 
 * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableCellFilter</code>
 * @since 1.21.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableCellFilter = function() { return false; };

/**
 * Gets current value of property {@link #getEnableColumnFreeze enableColumnFreeze}.
 * 
 * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableColumnFreeze</code>
 * @since 1.21.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableColumnFreeze = function() { return false; };

/**
 * Gets current value of property {@link #getEnableColumnReordering enableColumnReordering}.
 * 
 * Flag to enable or disable column reordering
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableColumnReordering</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableColumnReordering = function() { return false; };

/**
 * Gets current value of property {@link #getEnableCustomFilter enableCustomFilter}.
 * 
 * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button
 * will be rendered for which' press event (customFilter) you can register an event handler.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableCustomFilter</code>
 * @since 1.23.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableCustomFilter = function() { return false; };

/**
 * Gets current value of property {@link #getEnableGrouping enableGrouping}.
 * 
 * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
 * in the <code>groupBy</code> association.
 * 
 * The following restrictions apply:
 * <ul>
 *  <li>Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models.</li>
 *  <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li>
 *  <li>For the grouping to work correctly, {@link sap.ui.table.Column#getSortProperty sortProperty} must be set for the grouped
 *      column.</li>
 *  <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply.
 *      The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li>
 *  <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another
 *      column or grouping is disabled.</li>
 * </ul>
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableGrouping</code>
 * 
 * @experimental As of 1.28. This feature has a limited functionality.
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableGrouping = function() { return false; };

/**
 * Gets current value of property {@link #getEnableSelectAll enableSelectAll}.
 * 
 * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
 * if the row selector is visible and the selection mode is set to any kind of multi selection.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableSelectAll</code>
 * @since 1.23.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableSelectAll = function() { return false; };

/**
 * Gets content of aggregation {@link #getExtension extension}.
 * 
 * Extension section of the Table.
 * If not set, no extension area will be rendered.
 * Note: In case a <code>sap.m.Toolbar</code> is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getExtension = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFirstVisibleRow firstVisibleRow}.
 * 
 * First visible row.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>firstVisibleRow</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFirstVisibleRow = function() { return 0; };

/**
 * Gets current value of property {@link #getFixedBottomRowCount fixedBottomRowCount}.
 * 
 * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>fixedBottomRowCount</code>
 * @since 1.18.7
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedBottomRowCount = function() { return 0; };

/**
 * Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.
 * 
 * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
 * 
 * <b>Note</b>
 * <ul>
 *  <li>Fixed columns need a defined width for the feature to work.</li>
 *  <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the
 *  property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li>
 * </ul>
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>fixedColumnCount</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedColumnCount = function() { return 0; };

/**
 * Gets current value of property {@link #getFixedRowCount fixedRowCount}.
 * 
 * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>fixedRowCount</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedRowCount = function() { return 0; };

/**
 * Gets content of aggregation {@link #getFooter footer}.
 * 
 * Control or text of footer section of the Table (if not set it will be hidden)
 * 
 * @returns {sap.ui.core.Control|string}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFooter = function() { return new sap.ui.core.Control(); };

/**
 * ID of the element which is the current target of the association {@link #getGroupBy groupBy}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @experimental Since 1.28. This feature has a limited functionality.
 * @public
 * 
 */
sap.ui.table.Table.prototype.getGroupBy = function() { return new sap.ui.core.ID(); };

/**
 * Returns a metadata object for class sap.ui.table.Table.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.Table.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinAutoRowCount minAutoRowCount}.
 * 
 * This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive.
 * For any other visibleRowCountMode, it is ignored.
 * 
 * Default value is <code>5</code>.
 * @returns {int} Value of property <code>minAutoRowCount</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getMinAutoRowCount = function() { return 0; };

/**
 * Gets current value of property {@link #getNavigationMode navigationMode}.
 * 
 * This property has been deprecated and must not be used anymore, since <code>Scrollbar</code> is the only supported option.
 * 
 * Default value is <code>Scrollbar</code>.
 * @returns {sap.ui.table.NavigationMode} Value of property <code>navigationMode</code>
 * 
 * @deprecated As of version 1.38
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getNavigationMode = function() { return new sap.ui.table.NavigationMode(); };

/**
 * Gets content of aggregation {@link #getNoData noData}.
 * 
 * The value for the noData aggregation can be either a string value or a control instance.
 * The control is shown, in case there is no data for the Table available. In case of a string
 * value this will simply replace the no data text.
 * 
 * @returns {sap.ui.core.Control|string}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getNoData = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getPlugins plugins}.
 * 
 * Plugin section of the table. Multiple plugins are possible, but always only <b>one</b> of a certain type.
 * 
 * The following restrictions apply:
 * <ul>
 *  <li>If a selection plugin is applied to the table, the table's selection API must not be used. Instead, use the API of the
 *      plugin.</li>
 *  <li>Only one MultiSelectionPlugin can be applied. No other plugins can be applied.</li>
 * </ul>
 * 
 * @returns {sap.ui.table.plugins.SelectionPlugin[]}
 * @since 1.64
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getPlugins = function() { return new Array(); };

/**
 * Gets current value of property {@link #getRowActionCount rowActionCount}.
 * 
 * Number of row actions made visible which determines the width of the row action column.
 * The values <code>0</code>, <code>1</code> and <code>2</code> are possible.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>rowActionCount</code>
 * @since 1.45.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRowActionCount = function() { return 0; };

/**
 * Gets content of aggregation {@link #getRowActionTemplate rowActionTemplate}.
 * 
 * Template for row actions. A template is decoupled from the row or table. Each time
 * the template's properties or aggregations are changed, the template has to be applied again via
 * <code>setRowActionTemplate</code> for the changes to take effect.
 * 
 * @returns {sap.ui.table.RowAction}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRowActionTemplate = function() { return new sap.ui.table.RowAction(); };

/**
 * Gets current value of property {@link #getRowHeight rowHeight}.
 * 
 * Row height in pixel.
 * 
 * In the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the
 * content density configuration. The actual height can increase based on the content.
 * 
 * In the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as
 * the border width. If the <code>visibleRowCountMode</code> property is set to {@link sap.ui.table.VisibleRowCountMode Fixed} or
 * {@link sap.ui.table.VisibleRowCountMode Interactive}, the value defines the minimum height, and the actual height can
 * increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode Auto}, the value defines the actual
 * height, and any content that doesn't fit is cut off.
 * 
 * If no value is set (includes 0), a default height is applied based on the content density configuration. In any
 * <code>visibleRowCountMode</code>, the actual height can increase based on the content.
 * 
 * @returns {int} Value of property <code>rowHeight</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRowHeight = function() { return 0; };

/**
 * Gets content of aggregation {@link #getRows rows}.
 * 
 * Rows of the Table
 * 
 * @returns {sap.ui.table.Row[]}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRows = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
 * 
 * Template for row settings. A template is decoupled from the row or table. Each time
 * the template's properties or aggregations are changed, the template has to be applied again via
 * <code>setRowSettingsTemplate</code> for the changes to take effect.
 * 
 * @returns {sap.ui.table.RowSettings}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRowSettingsTemplate = function() { return new sap.ui.table.RowSettings(); };

/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * 
 * @returns {int[]} Selected indices
 * @throws {Error} If a selection plugin is applied
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSelectionBehavior selectionBehavior}.
 * 
 * Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or
 * both can be clicked to select a row.
 * <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping
 * functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.
 * 
 * Default value is <code>RowSelector</code>.
 * @returns {sap.ui.table.SelectionBehavior} Value of property <code>selectionBehavior</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectionBehavior = function() { return new sap.ui.table.SelectionBehavior(); };

/**
 * Gets current value of property {@link #getSelectionMode selectionMode}.
 * 
 * Selection mode of the Table. This property controls whether single or multiple rows can be selected and
 * how the selection can be extended. It may also influence the visual appearance.
 * When the selection mode is changed, the current selection is removed.
 * <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping
 * functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionMode.None</code> is set.
 * <b>Note:</b> If a selection plugin is applied to the table, the selection mode is controlled by the plugin.
 * 
 * Default value is <code>MultiToggle</code>.
 * @returns {sap.ui.table.SelectionMode} Value of property <code>selectionMode</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectionMode = function() { return new sap.ui.table.SelectionMode(); };

/**
 * Gets current value of property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
 * 
 * Flag to show or hide the column visibility menu. This menu will get displayed in each
 * generated column header menu. It allows to show or hide columns
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showColumnVisibilityMenu</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowColumnVisibilityMenu = function() { return false; };

/**
 * Gets current value of property {@link #getShowNoData showNoData}.
 * 
 * Flag whether to show the no data overlay or not once the table is empty. If set to false
 * the table will just show a grid of empty cells
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showNoData</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowNoData = function() { return false; };

/**
 * Gets current value of property {@link #getShowOverlay showOverlay}.
 * 
 * Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showOverlay</code>
 * @since 1.21.2
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowOverlay = function() { return false; };

/**
 * Gets the sorted columns in the order in which sorting was performed through the {@link sap.ui.table.Table#sort} method and menus.
 * Does not reflect sorting at binding level or the columns sort visualization set with {@link sap.ui.table.Column#setSorted} and
 * {@link sap.ui.table.Column#setSortOrder}.
 * 
 * @see sap.ui.table.Table#sort
 * @returns {sap.ui.table.Column[]} Array of sorted columns
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.getSortedColumns = function() { return new Array(); };

/**
 * Gets current value of property {@link #getThreshold threshold}.
 * 
 * The <code>threshold</code> defines how many additional (not yet visible records) shall be pre-fetched to enable smooth
 * scrolling. The threshold is always added to the <code>visibleRowCount</code>. If the <code>visibleRowCount</code> is 10 and the
 * <code>threshold</code> is 100, there will be 110 records fetched with the initial load.
 * If the <code>threshold</code> is lower than the <code>visibleRowCount</code>, the <code>visibleRowCount</code> will be used as
 * the <code>threshold</code>. If the value is 0 then the thresholding is disabled.
 * 
 * Default value is <code>100</code>.
 * @returns {int} Value of property <code>threshold</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getThreshold = function() { return 0; };

/**
 * Gets content of aggregation {@link #getTitle title}.
 * 
 * Control or text of title section of the Table (if not set it will be hidden)
 * 
 * @returns {sap.ui.core.Control|string}
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getTitle = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getToolbar toolbar}.
 * 
 * Toolbar of the Table
 * If not set, no toolbar area will be rendered.
 * Note: The CSS class sapMTBHeader-CTX is applied on the given toolbar.
 * 
 * @returns {sap.ui.core.Toolbar}
 * 
 * @deprecated Since version 1.38. This aggregation is deprecated, use the <code>extension</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Gets current value of property {@link #getVisibleRowCount visibleRowCount}.
 * 
 * Number of visible rows of the table.
 * 
 * Default value is <code>10</code>.
 * @returns {int} Value of property <code>visibleRowCount</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getVisibleRowCount = function() { return 0; };

/**
 * Gets current value of property {@link #getVisibleRowCountMode visibleRowCountMode}.
 * 
 * Defines how the table handles the visible rows in the table.
 * 
 * In the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.
 * 
 * In the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then
 * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than
 * defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually.
 * <h3>Limitations</h3>
 * <ul>
 *   <li>All rows need to have the same height.</li>
 *   <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex
 *       container, and the table is a CSS flex item allowed to grow and shrink.</li>
 * </ul>
 * 
 * In the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after
 * rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.
 * 
 * Default value is <code>Fixed</code>.
 * @returns {sap.ui.table.VisibleRowCountMode} Value of property <code>visibleRowCountMode</code>
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getVisibleRowCountMode = function() { return new sap.ui.table.VisibleRowCountMode(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the Table.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation {@link #getColumns columns}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.Column}
 *           oColumn The column whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getExtension extension}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oExtension The extension whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfExtension = function(oExtension) { return 0; };

/**
 * Checks for the provided <code>sap.ui.table.plugins.SelectionPlugin</code> in the aggregation {@link #getPlugins plugins}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.plugins.SelectionPlugin}
 *           oPlugin The plugin whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.64
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfPlugin = function(oPlugin) { return 0; };

/**
 * Checks for the provided <code>sap.ui.table.Row</code> in the aggregation {@link #getRows rows}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.Row}
 *           oRow The row whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * Inserts a column into the aggregation {@link #getColumns columns}.
 * 
 * @param {sap.ui.table.Column}
 *            oColumn The column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertColumn = function(oColumn,iIndex) { return new sap.ui.table.Table(); };

/**
 * Inserts a extension into the aggregation {@link #getExtension extension}.
 * 
 * @param {sap.ui.core.Control}
 *            oExtension The extension to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the extension should be inserted at; for
 *              a negative value of <code>iIndex</code>, the extension is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the extension is inserted at
 *              the last position
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertExtension = function(oExtension,iIndex) { return new sap.ui.table.Table(); };

/**
 * Inserts a plugin into the aggregation {@link #getPlugins plugins}.
 * 
 * @param {sap.ui.table.plugins.SelectionPlugin}
 *            oPlugin The plugin to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the plugin should be inserted at; for
 *              a negative value of <code>iIndex</code>, the plugin is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the plugin is inserted at
 *              the last position
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.64
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertPlugin = function(oPlugin,iIndex) { return new sap.ui.table.Table(); };

/**
 * Inserts a row into the aggregation {@link #getRows rows}.
 * 
 * @param {sap.ui.table.Row}
 *            oRow The row to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the row should be inserted at; for
 *              a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the row is inserted at
 *              the last position
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertRow = function(oRow,iIndex) { return new sap.ui.table.Table(); };

/**
 * Checks whether an index is selected.
 * 
 * @param {int} iIndex Index to check for selection
 * @returns {boolean} Whether the index is selected
 * @throws {Error} If a selection plugin is applied
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.isIndexSelected = function(iIndex) { return false; };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getColumns columns}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.table.Column[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getExtension extension}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllExtension = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getPlugins plugins}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.table.plugins.SelectionPlugin[]} An array of the removed elements (might be empty)
 * @since 1.64
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllPlugins = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getRows rows}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.table.Row[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllRows = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a column from the aggregation {@link #getColumns columns}.
 * 
 * @param {int | string | sap.ui.table.Column} vColumn The column to remove or its index or id
 * @returns {sap.ui.table.Column} The removed column or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeColumn = function(vColumn) { return new sap.ui.table.Column(); };

/**
 * Removes a extension from the aggregation {@link #getExtension extension}.
 * 
 * @param {int | string | sap.ui.core.Control} vExtension The extension to remove or its index or id
 * @returns {sap.ui.core.Control} The removed extension or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeExtension = function(vExtension) { return new sap.ui.core.Control(); };

/**
 * Removes a plugin from the aggregation {@link #getPlugins plugins}.
 * 
 * @param {int | string | sap.ui.table.plugins.SelectionPlugin} vPlugin The plugin to remove or its index or id
 * @returns {sap.ui.table.plugins.SelectionPlugin} The removed plugin or <code>null</code>
 * @since 1.64
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removePlugin = function(vPlugin) { return new sap.ui.table.plugins.SelectionPlugin(); };

/**
 * Removes a row from the aggregation {@link #getRows rows}.
 * 
 * @param {int | string | sap.ui.table.Row} vRow The row to remove or its index or id
 * @returns {sap.ui.table.Row} The removed row or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeRow = function(vRow) { return new sap.ui.table.Row(); };

/**
 * Removes the given selection interval from the selection. In case of single selection, only <code>iIndexTo</code> is removed from the selection.
 * 
 * @param {int} iIndexFrom Index from which the deselection should start
 * @param {int} iIndexTo Index up to which to deselect
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @throws {Error} If a selection plugin is applied
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.removeSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Adds all rows to the selection.
 * Please note that for server based models like OData the indices which are considered to be selected might not
 * be available at the client yet. Calling getContextByIndex might not return a result but trigger a roundtrip
 * to request this single entity.
 * 
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @throws {Error} If a selection plugin is applied
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.selectAll = function() { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getAlternateRowColors alternateRowColors}.
 * 
 * Enables alternating table row colors.
 * Alternate row coloring is not available for the tree mode.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAlternateRowColors New value for property <code>alternateRowColors</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setAlternateRowColors = function(bAlternateRowColors) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getColumnHeaderHeight columnHeaderHeight}.
 * 
 * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property
 * for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the
 * content density configuration. The actual height can increase based on the content.
 * 
 * <b>Note</b>: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied to each individual row of the
 * table's header.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iColumnHeaderHeight New value for property <code>columnHeaderHeight</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setColumnHeaderHeight = function(iColumnHeaderHeight) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getColumnHeaderVisible columnHeaderVisible}.
 * 
 * Flag whether the column header is visible or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bColumnHeaderVisible New value for property <code>columnHeaderVisible</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setColumnHeaderVisible = function(bColumnHeaderVisible) { return new sap.ui.table.Table(); };

/**
 * Sets the aggregated {@link #getContextMenu contextMenu}.
 * @param {sap.ui.core.IContextMenu} oContextMenu The contextMenu to set
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.54
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setContextMenu = function(oContextMenu) { return new sap.ui.table.Table(); };

/**
 * Sets the creation row.
 * 
 * @param {sap.ui.table.CreationRow} oCreationRow Instance of the creation row
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @private
 * @ui5-restricted sap.ui.mdc
 * 
 */
sap.ui.table.Table.prototype.setCreationRow = function(oCreationRow) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEditable editable}.
 * 
 * Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEditable = function(bEditable) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEnableBusyIndicator enableBusyIndicator}.
 * 
 * If set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator.
 * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens,
 * for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy.
 * The busy state of the table can still be set manually by calling {@link sap.ui.core.Control#setBusy}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableBusyIndicator New value for property <code>enableBusyIndicator</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.27.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableBusyIndicator = function(bEnableBusyIndicator) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEnableCellFilter enableCellFilter}.
 * 
 * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableCellFilter New value for property <code>enableCellFilter</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.21.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableCellFilter = function(bEnableCellFilter) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEnableColumnFreeze enableColumnFreeze}.
 * 
 * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableColumnFreeze New value for property <code>enableColumnFreeze</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.21.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableColumnFreeze = function(bEnableColumnFreeze) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEnableColumnReordering enableColumnReordering}.
 * 
 * Flag to enable or disable column reordering
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableColumnReordering New value for property <code>enableColumnReordering</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableColumnReordering = function(bEnableColumnReordering) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEnableCustomFilter enableCustomFilter}.
 * 
 * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button
 * will be rendered for which' press event (customFilter) you can register an event handler.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableCustomFilter New value for property <code>enableCustomFilter</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.23.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableCustomFilter = function(bEnableCustomFilter) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEnableGrouping enableGrouping}.
 * 
 * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
 * in the <code>groupBy</code> association.
 * 
 * The following restrictions apply:
 * <ul>
 *  <li>Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models.</li>
 *  <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li>
 *  <li>For the grouping to work correctly, {@link sap.ui.table.Column#getSortProperty sortProperty} must be set for the grouped
 *      column.</li>
 *  <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply.
 *      The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li>
 *  <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another
 *      column or grouping is disabled.</li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableGrouping New value for property <code>enableGrouping</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @experimental As of 1.28. This feature has a limited functionality.
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableGrouping = function(bEnableGrouping) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getEnableSelectAll enableSelectAll}.
 * 
 * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
 * if the row selector is visible and the selection mode is set to any kind of multi selection.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableSelectAll New value for property <code>enableSelectAll</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.23.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableSelectAll = function(bEnableSelectAll) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getFirstVisibleRow firstVisibleRow}.
 * 
 * First visible row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFirstVisibleRow New value for property <code>firstVisibleRow</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFirstVisibleRow = function(iFirstVisibleRow) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getFixedBottomRowCount fixedBottomRowCount}.
 * 
 * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFixedBottomRowCount New value for property <code>fixedBottomRowCount</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.18.7
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedBottomRowCount = function(iFixedBottomRowCount) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.
 * 
 * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
 * 
 * <b>Note</b>
 * <ul>
 *  <li>Fixed columns need a defined width for the feature to work.</li>
 *  <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the
 *  property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFixedColumnCount New value for property <code>fixedColumnCount</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedColumnCount = function(iFixedColumnCount) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getFixedRowCount fixedRowCount}.
 * 
 * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFixedRowCount New value for property <code>fixedRowCount</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedRowCount = function(iFixedRowCount) { return new sap.ui.table.Table(); };

/**
 * Sets the aggregated {@link #getFooter footer}.
 * @param {sap.ui.core.Control|string} vFooter The footer to set
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFooter = function(vFooter) { return new sap.ui.table.Table(); };

/**
 * Sets the associated {@link #getGroupBy groupBy}.
 * @param {sap.ui.core.ID | sap.ui.table.Column} oGroupBy ID of an element which becomes the new target of this groupBy association; alternatively, an element instance may be given
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @experimental Since 1.28. This feature has a limited functionality.
 * @public
 * 
 */
sap.ui.table.Table.prototype.setGroupBy = function(oGroupBy) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getMinAutoRowCount minAutoRowCount}.
 * 
 * This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive.
 * For any other visibleRowCountMode, it is ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {int} iMinAutoRowCount New value for property <code>minAutoRowCount</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setMinAutoRowCount = function(iMinAutoRowCount) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getNavigationMode navigationMode}.
 * 
 * This property has been deprecated and must not be used anymore, since <code>Scrollbar</code> is the only supported option.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Scrollbar</code>.
 * @param {sap.ui.table.NavigationMode} sNavigationMode New value for property <code>navigationMode</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.38
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setNavigationMode = function(sNavigationMode) { return new sap.ui.table.Table(); };

/**
 * Sets the aggregated {@link #getNoData noData}.
 * @param {sap.ui.core.Control|string} vNoData The noData to set
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setNoData = function(vNoData) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getRowActionCount rowActionCount}.
 * 
 * Number of row actions made visible which determines the width of the row action column.
 * The values <code>0</code>, <code>1</code> and <code>2</code> are possible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iRowActionCount New value for property <code>rowActionCount</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.45.0
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setRowActionCount = function(iRowActionCount) { return new sap.ui.table.Table(); };

/**
 * Sets the aggregated {@link #getRowActionTemplate rowActionTemplate}.
 * @param {sap.ui.table.RowAction} oRowActionTemplate The rowActionTemplate to set
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setRowActionTemplate = function(oRowActionTemplate) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getRowHeight rowHeight}.
 * 
 * Row height in pixel.
 * 
 * In the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the
 * content density configuration. The actual height can increase based on the content.
 * 
 * In the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as
 * the border width. If the <code>visibleRowCountMode</code> property is set to {@link sap.ui.table.VisibleRowCountMode Fixed} or
 * {@link sap.ui.table.VisibleRowCountMode Interactive}, the value defines the minimum height, and the actual height can
 * increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode Auto}, the value defines the actual
 * height, and any content that doesn't fit is cut off.
 * 
 * If no value is set (includes 0), a default height is applied based on the content density configuration. In any
 * <code>visibleRowCountMode</code>, the actual height can increase based on the content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iRowHeight New value for property <code>rowHeight</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setRowHeight = function(iRowHeight) { return new sap.ui.table.Table(); };

/**
 * Sets the aggregated {@link #getRowSettingsTemplate rowSettingsTemplate}.
 * @param {sap.ui.table.RowSettings} oRowSettingsTemplate The rowSettingsTemplate to set
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setRowSettingsTemplate = function(oRowSettingsTemplate) { return new sap.ui.table.Table(); };

/**
 * Sets the selected index. The previous selection is removed.
 * 
 * @param {int} iIndex The index to select
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @throws {Error} If a selection plugin is applied
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectedIndex = function(iIndex) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getSelectionBehavior selectionBehavior}.
 * 
 * Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or
 * both can be clicked to select a row.
 * <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping
 * functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RowSelector</code>.
 * @param {sap.ui.table.SelectionBehavior} sSelectionBehavior New value for property <code>selectionBehavior</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectionBehavior = function(sSelectionBehavior) { return new sap.ui.table.Table(); };

/**
 * Sets the given selection interval as selection. In case of a single selection, only <code>iIndexTo</code> is selected.
 * 
 * @param {int} iIndexFrom Index from which the selection starts
 * @param {int} iIndexTo Index up to which to select
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @throws {Error} If a selection plugin is applied
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.setSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Sets the selection mode. The current selection is lost.
 * 
 * @param {sap.ui.table.SelectionMode} sSelectionMode the selection mode, see sap.ui.table.SelectionMode
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectionMode = function(sSelectionMode) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
 * 
 * Flag to show or hide the column visibility menu. This menu will get displayed in each
 * generated column header menu. It allows to show or hide columns
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowColumnVisibilityMenu New value for property <code>showColumnVisibilityMenu</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowColumnVisibilityMenu = function(bShowColumnVisibilityMenu) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getShowNoData showNoData}.
 * 
 * Flag whether to show the no data overlay or not once the table is empty. If set to false
 * the table will just show a grid of empty cells
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowNoData New value for property <code>showNoData</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowNoData = function(bShowNoData) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getShowOverlay showOverlay}.
 * 
 * Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowOverlay New value for property <code>showOverlay</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.21.2
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowOverlay = function(bShowOverlay) { return new sap.ui.table.Table(); };

/**
 * Sets the threshold value, which will be added to all data requests in case the Table is bound against an OData service.
 * 
 * @param {int} iThreshold The threshold
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setThreshold = function(iThreshold) { return new sap.ui.table.Table(); };

/**
 * Sets the aggregated {@link #getTitle title}.
 * @param {sap.ui.core.Control|string} vTitle The title to set
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setTitle = function(vTitle) { return new sap.ui.table.Table(); };

/**
 * Sets the aggregated {@link #getToolbar toolbar}.
 * @param {sap.ui.core.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.38. This aggregation is deprecated, use the <code>extension</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setToolbar = function(oToolbar) { return new sap.ui.table.Table(); };

/**
 * Sets a new tooltip for this object. The tooltip can either be a simple string
 * (which in most cases will be rendered as the <code>title</code> attribute of this
 * Element) or an instance of {@link sap.ui.core.TooltipBase}.
 * 
 * If a new tooltip is set, any previously set tooltip is deactivated.
 * 
 * Please note that tooltips are not rendered for the table. The tooltip property will be set
 * but it won't effect the DOM.
 * 
 * @param {string|sap.ui.core.TooltipBase} vTooltip The tooltip
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @override
 * 
 */
sap.ui.table.Table.prototype.setTooltip = function(vTooltip) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getVisibleRowCount visibleRowCount}.
 * 
 * Number of visible rows of the table.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {int} iVisibleRowCount New value for property <code>visibleRowCount</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setVisibleRowCount = function(iVisibleRowCount) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getVisibleRowCountMode visibleRowCountMode}.
 * 
 * Defines how the table handles the visible rows in the table.
 * 
 * In the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.
 * 
 * In the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then
 * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than
 * defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually.
 * <h3>Limitations</h3>
 * <ul>
 *   <li>All rows need to have the same height.</li>
 *   <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex
 *       container, and the table is a CSS flex item allowed to grow and shrink.</li>
 * </ul>
 * 
 * In the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after
 * rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Fixed</code>.
 * @param {sap.ui.table.VisibleRowCountMode} sVisibleRowCountMode New value for property <code>visibleRowCountMode</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setVisibleRowCountMode = function(sVisibleRowCountMode) { return new sap.ui.table.Table(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the Table.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.setWidth = function(sWidth) { return new sap.ui.table.Table(); };

/**
 * Sorts the given column ascending or descending.
 * 
 * @param {sap.ui.table.Column | undefined} oColumn Column to be sorted or undefined to clear sorting
 * @param {sap.ui.table.SortOrder} oSortOrder Sort order of the column (if undefined the default will be ascending)
 * @param {Boolean} bAdd Set to true to add the new sort criterion to the existing sort criteria
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.Table.prototype.sort = function(oColumn,oSortOrder,bAdd) {  };

/**
 * Unbinds aggregation {@link #getColumns columns} from model data.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.unbindColumns = function() { return new sap.ui.table.Table(); };

/**
 * Unbinds aggregation {@link #getRows rows} from model data.
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.Table.prototype.unbindRows = function() { return new sap.ui.table.Table(); };


// ---- sap.ui.table.TablePersoController --------------------------------------------------------------------------

/**
 * Constructor for a new TablePersoController.
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
 * <li>{@link #getAutoSave autoSave} : boolean (default: true)</li>
 * <li>{@link #getPersoService persoService} : any</li>
 * <li>{@link #getCustomDataKey customDataKey} : string (default: persoKey)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getTable table} : (sap.ui.core.ID | sap.ui.table.Table)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The TablePersoController can be used to connect a table with a persistence service.
 * @extends sap.ui.base.ManagedObject
 * @version 1.71.0
 * @since 1.21.1
 * 
 * @constructor
 * @public
 * 
 */
sap.ui.table.TablePersoController = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.table.TablePersoController with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.TablePersoController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAutoSave autoSave}.
 * 
 * Auto save state
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>autoSave</code>
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getAutoSave = function() { return false; };

/**
 * Gets current value of property {@link #getCustomDataKey customDataKey}.
 * 
 * By defining a custom data key the <code>TablePersoController</code>
 * will try to get the key for saving the perso data from the custom
 * data of the Table and Column instead of creating it by concatenating
 * the ID of the Table and the Column. Basically this will be more stable
 * than using the auto IDs.
 * 
 * Default value is <code>persoKey</code>.
 * @returns {string} Value of property <code>customDataKey</code>
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getCustomDataKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.table.TablePersoController.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.TablePersoController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPersoService persoService}.
 * 
 * Personalization Service object. Needs to have the following methods:
 * <ul>
 * <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * </ul>
 * 
 * @returns {any} Value of property <code>persoService</code>
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getPersoService = function() { return null; };

/**
 * ID of the element which is the current target of the association {@link #getTable table}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.getTable = function() { return new sap.ui.core.ID(); };

/**
 * Opens the personalization dialog for the Table to modify the visibility and
 * the order of the columns.
 * 
 * <i>Using this functionality will require to load the sap.m library because the
 * personalization dialog is only available in this library for now.</i>
 * 
 * @param {object} mSettings
 * @public
 * @experimental since 1.21.2 - API might change / feature requires the sap.m library!
 * 
 */
sap.ui.table.TablePersoController.prototype.openDialog = function(mSettings) {  };

/**
 * Refresh the personalizations (reloads data from service).
 * 
 * @returns {jQuery.Promise} <code>jQuery Promise</code> which is resolved once the refresh is finished
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.refresh = function() { return new jQuery.Promise(); };

/**
 * Saves the current personalization state.
 * 
 * @returns {jQuery.Promise} <code>jQuery Promise</code> which is resolved once the save is finished
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.savePersonalizations = function() { return new jQuery.Promise(); };

/**
 * Sets a new value for property {@link #getAutoSave autoSave}.
 * 
 * Auto save state
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAutoSave New value for property <code>autoSave</code>
 * @returns {sap.ui.table.TablePersoController} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setAutoSave = function(bAutoSave) { return new sap.ui.table.TablePersoController(); };

/**
 * Sets a new value for property {@link #getCustomDataKey customDataKey}.
 * 
 * By defining a custom data key the <code>TablePersoController</code>
 * will try to get the key for saving the perso data from the custom
 * data of the Table and Column instead of creating it by concatenating
 * the ID of the Table and the Column. Basically this will be more stable
 * than using the auto IDs.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>persoKey</code>.
 * @param {string} sCustomDataKey New value for property <code>customDataKey</code>
 * @returns {sap.ui.table.TablePersoController} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setCustomDataKey = function(sCustomDataKey) { return new sap.ui.table.TablePersoController(); };

/**
 * Sets a new value for property {@link #getPersoService persoService}.
 * 
 * Personalization Service object. Needs to have the following methods:
 * <ul>
 * <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oPersoService New value for property <code>persoService</code>
 * @returns {sap.ui.table.TablePersoController} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setPersoService = function(oPersoService) { return new sap.ui.table.TablePersoController(); };

/**
 * Sets the associated {@link #getTable table}.
 * @param {sap.ui.core.ID | sap.ui.table.Table} oTable ID of an element which becomes the new target of this table association; alternatively, an element instance may be given
 * @returns {sap.ui.table.TablePersoController} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TablePersoController.prototype.setTable = function(oTable) { return new sap.ui.table.TablePersoController(); };


// ---- sap.ui.table.TreeAutoExpandMode --------------------------------------------------------------------------


// ---- sap.ui.table.TreeTable --------------------------------------------------------------------------

/**
 * Constructor for a new TreeTable.
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
 * <li>{@link #getExpandFirstLevel expandFirstLevel} : boolean (default: false)</li>
 * <li>{@link #getUseGroupMode useGroupMode} : boolean (default: false)</li>
 * <li>{@link #getGroupHeaderProperty groupHeaderProperty} : string</li>
 * <li>{@link #getCollapseRecursive collapseRecursive} : boolean (default: true)</li>
 * <li>{@link #getRootLevel rootLevel} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:toggleOpenState toggleOpenState} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.Table#constructor sap.ui.table.Table}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The TreeTable control provides a comprehensive set of features to display hierarchical data.
 * @extends sap.ui.table.Table
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @see {@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
 * @see {@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
 * @see {@link fiori:/tree-table/ Tree Table}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable = function(sId,mSettings) {};
/**
 * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex Index of the expanded/collapsed row
 * @param {object} oControlEvent.getParameters.rowContext Binding context of the expanded/collapsed row
 * @param {boolean} oControlEvent.getParameters.expanded Flag that indicates whether the row has been expanded or collapsed
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.toggleOpenState = function(oControlEvent) {  };

/**
 * Adds the given selection interval to the selection. In case of single selection, only <code>iIndexTo</code> is added to the selection.
 * Invisible nodes (collapsed child nodes) will not be regarded.
 * 
 * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection.
 * To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".
 * 
 * @param {int} iIndexFrom Index from which the selection should start
 * @param {int} iIndexTo Index up to which to select
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.addSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:toggleOpenState toggleOpenState} event of this <code>sap.ui.table.TreeTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.table.TreeTable</code> itself.
 * 
 * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.TreeTable</code> itself
 * 
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.attachToggleOpenState = function(oData,fnFunction,oListener) { return new sap.ui.table.TreeTable(); };

/**
 * Collapses one or more rows.
 * 
 * @param {int|int[]} vRowIndex A single index or an array of indices of the rows to be collapsed
 * @returns {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.collapse = function(vRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Collapses all nodes (and lower if collapseRecursive is activated)
 * 
 * @returns {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.collapseAll = function() { return new sap.ui.table.TreeTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:toggleOpenState toggleOpenState} event of this <code>sap.ui.table.TreeTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.detachToggleOpenState = function(fnFunction,oListener) { return new sap.ui.table.TreeTable(); };

/**
 * Expands one or more rows.
 * 
 * @param {int|int[]} vRowIndex A single index or an array of indices of the rows to be expanded
 * @returns {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.expand = function(vRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Expands all nodes starting from the root level to the given level 'iLevel'.
 * 
 * Only supported with ODataModel v2, when running in OperationMode.Client or OperationMode.Auto.
 * Fully supported for <code>sap.ui.model.ClientTreeBinding</code>, e.g. if you are using a <code>sap.ui.model.json.JSONModel</code>.
 * 
 * Please also see <code>sap.ui.model.odata.OperationMode</code>.
 * 
 * @param {int} iLevel the level to which the trees shall be expanded
 * @returns {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.expandToLevel = function(iLevel) { return new sap.ui.table.TreeTable(); };

/**
 * Creates a new subclass of class sap.ui.table.TreeTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.table.TreeTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.rowIndex] Index of the expanded/collapsed row
 * @param {object} [mParameters.rowContext] Binding context of the expanded/collapsed row
 * @param {boolean} [mParameters.expanded] Flag that indicates whether the row has been expanded or collapsed
 * 
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.table.TreeTable.prototype.fireToggleOpenState = function(mParameters) { return new sap.ui.table.TreeTable(); };

/**
 * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
 * 
 * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.
 * This property is only supported with sap.ui.model.odata.v2.ODataModel.
 * <b>Note:</b> collapseRecursive is currently <b>not</b> supported if your OData service exposes the hierarchy annotation <code>hierarchy-descendant-count-for</code>.
 * In this case the value of the collapseRecursive property is ignored.
 * For more information about the OData hierarchy annotations, please see the <b>SAP Annotations for OData Version 2.0</b> specification.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>collapseRecursive</code>
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getCollapseRecursive = function() { return false; };

/**
 * The property <code>enableGrouping</code> is not supported by the <code>TreeTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getEnableGrouping = function() {  };

/**
 * Gets current value of property {@link #getExpandFirstLevel expandFirstLevel}.
 * 
 * Specifies whether the first level is expanded.
 * 
 * The value of the property is only taken into account if no parameter <code>numberOfExpandedLevels</code> is given in the binding information.
 * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       numberOfExpandedLevels: 1
 *     }
 *   });
 * </pre>
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>expandFirstLevel</code>
 * 
 * @deprecated As of version 1.46.3, replaced by the corresponding binding parameter <code>numberOfExpandedLevels</code>.
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getExpandFirstLevel = function() { return false; };

/**
 * The <code>groupBy</code> association is not supported by the <code>TreeTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getGroupBy = function() {  };

/**
 * Gets current value of property {@link #getGroupHeaderProperty groupHeaderProperty}.
 * 
 * The property name of the rows data which will be displayed as a group header if the group mode is enabled
 * 
 * @returns {string} Value of property <code>groupHeaderProperty</code>
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getGroupHeaderProperty = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.table.TreeTable.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.table.TreeTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getRootLevel rootLevel}.
 * 
 * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services.
 * This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations.
 * This property is only supported with sap.ui.model.odata.v2.ODataModel
 * The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>rootLevel</code>
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getRootLevel = function() { return 0; };

/**
 * Returns an array containing the row indices of all selected tree nodes (ordered ascending).
 * 
 * Please be aware of the following:
 * Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices
 * of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be
 * returned.
 * 
 * @returns {int[]} an array containing all selected indices
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * Gets current value of property {@link #getUseGroupMode useGroupMode}.
 * 
 * If group mode is enabled nodes with subitems are rendered as if they were group headers.
 * This can be used to do the grouping for an OData service on the backend and visualize this in a table.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>useGroupMode</code>
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getUseGroupMode = function() { return false; };

/**
 * Checks whether the row is expanded or collapsed.
 * 
 * @param {int} iRowIndex The index of the row to be checked
 * @returns {boolean} <code>true</code> if the row is expanded, <code>false</code> if it is collapsed
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.isExpanded = function(iRowIndex) { return false; };

/**
 * Removes the given selection interval from the selection. In case of single selection, only <code>iIndexTo</code> is removed from the selection.
 * Invisible nodes (collapsed child nodes) will not be regarded.
 * 
 * @param {int} iIndexFrom Index from which the deselection should start
 * @param {int} iIndexTo Index up to which to deselect
 * @returns {sap.ui.table.Table} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.removeSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * Selects all available nodes/rows.
 * 
 * All rows/tree nodes that are locally stored on the client and that are part of the currently visible tree are selected.
 * Additional rows or tree nodes that come into view through scrolling or paging are also selected immediately as soon as they get visible.
 * However, <code>SelectAll</code> does not retrieve any data from the back end in order to improve performance and reduce the network traffic.
 * 
 * @returns {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.selectAll = function() { return new sap.ui.table.TreeTable(); };

/**
 * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
 * 
 * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.
 * This property is only supported with sap.ui.model.odata.v2.ODataModel.
 * <b>Note:</b> collapseRecursive is currently <b>not</b> supported if your OData service exposes the hierarchy annotation <code>hierarchy-descendant-count-for</code>.
 * In this case the value of the collapseRecursive property is ignored.
 * For more information about the OData hierarchy annotations, please see the <b>SAP Annotations for OData Version 2.0</b> specification.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bCollapseRecursive New value for property <code>collapseRecursive</code>
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setCollapseRecursive = function(bCollapseRecursive) { return new sap.ui.table.TreeTable(); };

/**
 * The property <code>enableGrouping</code> is not supported by the <code>TreeTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * To get a group-like visualization the <code>useGroupMode</code> property can be used.
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * @see sap.ui.table.TreeTable#setUseGroupMode
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setEnableGrouping = function() { return new sap.ui.table.TreeTable(); };

/**
 * Sets a new value for property {@link #getExpandFirstLevel expandFirstLevel}.
 * 
 * Specifies whether the first level is expanded.
 * 
 * The value of the property is only taken into account if no parameter <code>numberOfExpandedLevels</code> is given in the binding information.
 * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.
 * 
 * Example:
 * <pre>
 *   oTable.bindRows({
 *     path: "...",
 *     parameters: {
 *       numberOfExpandedLevels: 1
 *     }
 *   });
 * </pre>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandFirstLevel New value for property <code>expandFirstLevel</code>
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.46.3, replaced by the corresponding binding parameter <code>numberOfExpandedLevels</code>.
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setExpandFirstLevel = function(bExpandFirstLevel) { return new sap.ui.table.TreeTable(); };

/**
 * Setter for property <code>fixedRowCount</code>.
 * 
 * <b>This property is not supportd for the TreeTable and will be ignored!</b>
 * 
 * Default value is <code>0</code>
 * 
 * @param {int} iRowCount New value for property <code>fixedRowCount</code>
 * @returns {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setFixedRowCount = function(iRowCount) { return new sap.ui.table.TreeTable(); };

/**
 * The <code>groupBy</code> association is not supported by the <code>TreeTable</code> control.
 * 
 * @deprecated Since version 1.28.
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setGroupBy = function() { return new sap.ui.table.TreeTable(); };

/**
 * Sets a new value for property {@link #getGroupHeaderProperty groupHeaderProperty}.
 * 
 * The property name of the rows data which will be displayed as a group header if the group mode is enabled
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sGroupHeaderProperty New value for property <code>groupHeaderProperty</code>
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setGroupHeaderProperty = function(sGroupHeaderProperty) { return new sap.ui.table.TreeTable(); };

/**
 * Sets a new value for property {@link #getRootLevel rootLevel}.
 * 
 * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services.
 * This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations.
 * This property is only supported with sap.ui.model.odata.v2.ODataModel
 * The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iRootLevel New value for property <code>rootLevel</code>
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setRootLevel = function(iRootLevel) { return new sap.ui.table.TreeTable(); };

/**
 * Sets the selected index
 * In a TreeTable you can only select indices, which correspond to the currently visualized tree.
 * Invisible tree nodes (e.g. collapsed child nodes) can not be selected via Index, because they do not
 * correspond to a TreeTable row.
 * 
 * @param {int} iRowIndex The row index which will be selected (if existing)
 * @returns {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setSelectedIndex = function(iRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Sets the selection of the TreeTable to the given range (including boundaries).
 * Beware: The previous selection will be lost/overridden. If this is not wanted, please use "addSelectionInterval"
 * and "removeSelectionInterval".
 * Please be aware, that the absolute row index only applies to the tree which is visualized by the TreeTable.
 * 
 * @param {int} iFromIndex the start index of the selection range
 * @param {int} iToIndex the end index of the selection range
 * @returns {sap.ui.table.TreeTable} a reference on the TreeTable control, can be used for chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.table.TreeTable.prototype.setSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.table.TreeTable(); };

/**
 * Allows to hide the tree structure (tree icons, indentation) in tree mode (property <code>useGroupMode</code> is set to <code>false</code>).
 * 
 * This option might be useful in some scenarios when actually a tree table must be used but under certain conditions the data
 * is not hierarchical, because it contains leafs only.
 * 
 * <b>Note:</b> In flat mode the user of the table cannot expand or collapse certain nodes and the hierarchy is not
 * visible to the user. The caller of this function has to ensure to use this option only with non-hierarchical data.
 * 
 * @param {boolean} bFlat If set to <code>true</code>, the flat mode is enabled
 * 
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.table.TreeTable.prototype.setUseFlatMode = function(bFlat) { return new sap.ui.table.TreeTable(); };

/**
 * Sets a new value for property {@link #getUseGroupMode useGroupMode}.
 * 
 * If group mode is enabled nodes with subitems are rendered as if they were group headers.
 * This can be used to do the grouping for an OData service on the backend and visualize this in a table.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUseGroupMode New value for property <code>useGroupMode</code>
 * @returns {sap.ui.table.TreeTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setUseGroupMode = function(bUseGroupMode) { return new sap.ui.table.TreeTable(); };


// ---- sap.ui.table.VisibleRowCountMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.VisibleRowCountMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.table.GroupEventType --------------------------------------------------------------------------

/**
 * Group Column
 * @public
 * 
 */
sap.ui.table.GroupEventType.group = "";

/**
 * Show grouped column only as group header
 * @public
 * 
 */
sap.ui.table.GroupEventType.hideGroupedColumn = "";

/**
 * Change the group order of the columns. Move column one position down in the group sequence
 * @public
 * 
 */
sap.ui.table.GroupEventType.moveDown = "";

/**
 * Change the group order of the columns. Move column one position up in the group sequence
 * @public
 * 
 */
sap.ui.table.GroupEventType.moveUp = "";

/**
 * Show grouped column also as a column, not just as group header
 * @public
 * 
 */
sap.ui.table.GroupEventType.showGroupedColumn = "";

/**
 * Ungroup Column
 * @public
 * 
 */
sap.ui.table.GroupEventType.ungroup = "";

/**
 * Ungroup All Columns
 * @public
 * 
 */
sap.ui.table.GroupEventType.ungroupAll = "";


// ---- sap.ui.table.NavigationMode --------------------------------------------------------------------------

/**
 * Uses the paginator control.
 * This option must no longer be used. Using a scrollbar is the only navigation mode which is supported by
 * the <code>sap.ui.table</code> library. The <code>navigationMode</code> property has always been a visual representation. No matter which navigation mode
 * is used, data fetched from an OData service is loaded page-wise.
 * @public
 * @deprecated As of version 1.38, replaced by {@link sap.ui.table.NavigationMode.Scrollbar}
 * 
 */
sap.ui.table.NavigationMode.Paginator = "";

/**
 * Uses the scrollbar control.
 * @public
 * 
 */
sap.ui.table.NavigationMode.Scrollbar = "";


// ---- sap.ui.table.RowActionType --------------------------------------------------------------------------

/**
 * Custom defined Row Action.
 * @public
 * 
 */
sap.ui.table.RowActionType.Custom = "";

/**
 * Delete Row Action.
 * @public
 * 
 */
sap.ui.table.RowActionType.Delete = "";

/**
 * Navigation Row Action.
 * @public
 * 
 */
sap.ui.table.RowActionType.Navigation = "";


// ---- sap.ui.table.SelectionBehavior --------------------------------------------------------------------------

/**
 * Rows can be selected on the complete row.
 * @public
 * 
 */
sap.ui.table.SelectionBehavior.Row = "";

/**
 * Rows can only be selected on the row (and the selector is hidden).
 * @public
 * 
 */
sap.ui.table.SelectionBehavior.RowOnly = "";

/**
 * Rows can only be selected on the row selector.
 * @public
 * 
 */
sap.ui.table.SelectionBehavior.RowSelector = "";


// ---- sap.ui.table.SelectionMode --------------------------------------------------------------------------

/**
 * Select multiple rows at a time.
 * @public
 * @deprecated As of version 1.38, replaced by {@link sap.ui.table.SelectionMode.MultiToggle}
 * 
 */
sap.ui.table.SelectionMode.Multi = "";

/**
 * Select multiple rows at a time (toggle behavior).
 * @public
 * 
 */
sap.ui.table.SelectionMode.MultiToggle = "";

/**
 * No rows can be selected.
 * @public
 * 
 */
sap.ui.table.SelectionMode.None = "";

/**
 * Select one row at a time.
 * @public
 * 
 */
sap.ui.table.SelectionMode.Single = "";


// ---- sap.ui.table.SharedDomRef --------------------------------------------------------------------------

/**
 * The element id of the Horizontal Scroll Bar of the sap.ui.table.Table.
 * @public
 * 
 */
sap.ui.table.SharedDomRef.HorizontalScrollBar = "";

/**
 * The element id of the Vertical Scroll Bar of the sap.ui.table.Table.
 * @public
 * 
 */
sap.ui.table.SharedDomRef.VerticalScrollBar = "";


// ---- sap.ui.table.SortOrder --------------------------------------------------------------------------

/**
 * Sort Order: ascending.
 * @public
 * 
 */
sap.ui.table.SortOrder.Ascending = "";

/**
 * Sort Order: descending.
 * @public
 * 
 */
sap.ui.table.SortOrder.Descending = "";


// ---- sap.ui.table.VisibleRowCountMode --------------------------------------------------------------------------

/**
 * The table automatically fills the height of the surrounding container.
 * @public
 * 
 */
sap.ui.table.VisibleRowCountMode.Auto = "";

/**
 * The table always has as many rows as defined in the <code>visibleRowCount</code> property.
 * @public
 * 
 */
sap.ui.table.VisibleRowCountMode.Fixed = "";

/**
 * The user can change the <code>visibleRowCount</code> by dragging a resizer.
 * @public
 * 
 */
sap.ui.table.VisibleRowCountMode.Interactive = "";

