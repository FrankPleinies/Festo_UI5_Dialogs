
// ---- sap.f --------------------------------------------------------------------------


// ---- sap.f.Avatar --------------------------------------------------------------------------

/**
 * Constructor for a new <code>Avatar</code>.
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
 * <li>{@link #getSrc src} : sap.ui.core.URI</li>
 * <li>{@link #getInitials initials} : string</li>
 * <li>{@link #getDisplayShape displayShape} : sap.f.AvatarShape (default: Circle)</li>
 * <li>{@link #getDisplaySize displaySize} : sap.f.AvatarSize (default: S)</li>
 * <li>{@link #getCustomDisplaySize customDisplaySize} : sap.ui.core.CSSSize (default: 3rem)</li>
 * <li>{@link #getCustomFontSize customFontSize} : sap.ui.core.CSSSize (default: 1.125rem)</li>
 * <li>{@link #getImageFitType imageFitType} : sap.f.AvatarImageFitType (default: Cover)</li>
 * <li>{@link #getFallbackIcon fallbackIcon} : string</li>
 * <li>{@link #getBackgroundColor backgroundColor} : sap.f.AvatarColor (default: Accent6)</li>
 * <li>{@link #getShowBorder showBorder} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDetailBox detailBox} : sap.m.LightBox</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * An image-like control that has different display options for representing images, initials,
 * and icons.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>Avatar</code> control allows the usage of different content, shapes, and sizes
 * depending on the use case.
 * 
 * The content types that can be displayed are either images, icons, or initials. The shape
 * can be circular or square. There are several predefined sizes, as well as an option to
 * set a custom size.
 * 
 * <h3>Usage</h3>
 * 
 * Up to two Latin letters can be displayed as initials in an <code>Avatar</code>. If there
 * are more than two letters, or if there's a non-Latin character present, a default image
 * placeholder will be created.
 * 
 * There are two options for how the displayed image can fit inside the
 * available area:
 * <ul>
 * <li>Cover - the image is scaled to cover all of the available area</li>
 * <li>Contain - the image is scaled as large as possible while both
 * its height and width fit inside the avalable area</li>
 * </ul>
 * <b>Note:</b> To set a custom size for the <code>Avatar</code>, you have to choose the <code>Custom</code>
 * value for the <code>displaySize</code> property. Then, you have to set both the
 * <code>customDisplaySize</code> and <code>customFontSize</code> properties.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/avatar/ Avatar}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.Avatar = function(sId,mSettings) {};
/**
 * Fired when the user selects the control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.f.Avatar.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy The ariaDescribedBy to add; if empty, nothing is inserted
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.f.Avatar(); };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.f.Avatar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.Avatar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.Avatar</code> itself.
 * 
 * Fired when the user selects the control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.Avatar</code> itself
 * 
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.Avatar.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.f.Avatar(); };

/**
 * Binds aggregation {@link #getDetailBox detailBox} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.bindDetailBox = function(oBindingInfo) { return new sap.f.Avatar(); };

/**
 * Destroys the detailBox in the aggregation {@link #getDetailBox detailBox}.
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.destroyDetailBox = function() { return new sap.f.Avatar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.Avatar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.detachPress = function(fnFunction,oListener) { return new sap.f.Avatar(); };

/**
 * Creates a new subclass of class sap.f.Avatar with name <code>sClassName</code>
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
sap.f.Avatar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.Avatar.prototype.firePress = function(mParameters) { return new sap.f.Avatar(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getBackgroundColor backgroundColor}.
 * 
 * Determines the background color of the control.
 * 
 * <b>Note:</b> By using background colors from the predefined sets,
 * your colors can later be customized from the Theme Designer.
 * 
 * Default value is <code>Accent6</code>.
 * @returns {sap.f.AvatarColor} Value of property <code>backgroundColor</code>
 * @since 1.69
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getBackgroundColor = function() { return new sap.f.AvatarColor(); };

/**
 * Gets current value of property {@link #getCustomDisplaySize customDisplaySize}.
 * 
 * Specifies custom display size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * Default value is <code>3rem</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>customDisplaySize</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getCustomDisplaySize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getCustomFontSize customFontSize}.
 * 
 * Specifies custom font size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * Default value is <code>1.125rem</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>customFontSize</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getCustomFontSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation {@link #getDetailBox detailBox}.
 * 
 * A <code>sap.m.LightBox</code> instance, that will be opened automatically when the user interacts with the <code>Avatar</code> control.
 * 
 * The <code>press</code> event will still be fired.
 * 
 * @returns {sap.m.LightBox}
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getDetailBox = function() { return new sap.m.LightBox(); };

/**
 * Gets current value of property {@link #getDisplayShape displayShape}.
 * 
 * Defines the shape of the <code>Avatar</code>.
 * 
 * Default value is <code>Circle</code>.
 * @returns {sap.f.AvatarShape} Value of property <code>displayShape</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getDisplayShape = function() { return new sap.f.AvatarShape(); };

/**
 * Gets current value of property {@link #getDisplaySize displaySize}.
 * 
 * Sets a predefined display size of the <code>Avatar</code>.
 * 
 * Default value is <code>S</code>.
 * @returns {sap.f.AvatarSize} Value of property <code>displaySize</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getDisplaySize = function() { return new sap.f.AvatarSize(); };

/**
 * Gets current value of property {@link #getFallbackIcon fallbackIcon}.
 * 
 * Defines the fallback icon displayed in case of wrong image src and no initials set.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>If not set, a default fallback icon is displayed depending on the set <code>displayShape</code> property.</li>
 * <li>Accepted values are only icons from the SAP icon font.</li>
 * </ul>
 * 
 * @returns {string} Value of property <code>fallbackIcon</code>
 * @since 1.65
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getFallbackIcon = function() { return ""; };

/**
 * Gets current value of property {@link #getImageFitType imageFitType}.
 * 
 * Specifies how an image would fit in the <code>Avatar</code>.
 * 
 * Default value is <code>Cover</code>.
 * @returns {sap.f.AvatarImageFitType} Value of property <code>imageFitType</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getImageFitType = function() { return new sap.f.AvatarImageFitType(); };

/**
 * Gets current value of property {@link #getInitials initials}.
 * 
 * Defines the displayed initials.
 * 
 * @returns {string} Value of property <code>initials</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getInitials = function() { return ""; };

/**
 * Returns a metadata object for class sap.f.Avatar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.Avatar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowBorder showBorder}.
 * 
 * Determines whether the control is displayed with border.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showBorder</code>
 * @since 1.69
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getShowBorder = function() { return false; };

/**
 * Gets current value of property {@link #getSrc src}.
 * 
 * Determines the path to the desired image or icon.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>src</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getSrc = function() { return new sap.ui.core.URI(); };

/**
 * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaDescribedBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.ID(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Sets a new value for property {@link #getBackgroundColor backgroundColor}.
 * 
 * Determines the background color of the control.
 * 
 * <b>Note:</b> By using background colors from the predefined sets,
 * your colors can later be customized from the Theme Designer.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Accent6</code>.
 * @param {sap.f.AvatarColor} sBackgroundColor New value for property <code>backgroundColor</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.69
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setBackgroundColor = function(sBackgroundColor) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getCustomDisplaySize customDisplaySize}.
 * 
 * Specifies custom display size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3rem</code>.
 * @param {sap.ui.core.CSSSize} sCustomDisplaySize New value for property <code>customDisplaySize</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setCustomDisplaySize = function(sCustomDisplaySize) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getCustomFontSize customFontSize}.
 * 
 * Specifies custom font size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1.125rem</code>.
 * @param {sap.ui.core.CSSSize} sCustomFontSize New value for property <code>customFontSize</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setCustomFontSize = function(sCustomFontSize) { return new sap.f.Avatar(); };

/**
 * Sets the <code>detailBox</code> aggregation.
 * @param {sap.m.LightBox|undefined} oLightBox - Instance of the <code>LightBox</code> control or undefined
 * @returns {object} <code>this</code> for chaining
 * @since 1.48
 * @override
 * @public
 * 
 */
sap.f.Avatar.prototype.setDetailBox = function(oLightBox) { return new Object(); };

/**
 * Sets a new value for property {@link #getDisplayShape displayShape}.
 * 
 * Defines the shape of the <code>Avatar</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Circle</code>.
 * @param {sap.f.AvatarShape} sDisplayShape New value for property <code>displayShape</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setDisplayShape = function(sDisplayShape) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getDisplaySize displaySize}.
 * 
 * Sets a predefined display size of the <code>Avatar</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>S</code>.
 * @param {sap.f.AvatarSize} sDisplaySize New value for property <code>displaySize</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setDisplaySize = function(sDisplaySize) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getFallbackIcon fallbackIcon}.
 * 
 * Defines the fallback icon displayed in case of wrong image src and no initials set.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>If not set, a default fallback icon is displayed depending on the set <code>displayShape</code> property.</li>
 * <li>Accepted values are only icons from the SAP icon font.</li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFallbackIcon New value for property <code>fallbackIcon</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.65
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setFallbackIcon = function(sFallbackIcon) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getImageFitType imageFitType}.
 * 
 * Specifies how an image would fit in the <code>Avatar</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Cover</code>.
 * @param {sap.f.AvatarImageFitType} sImageFitType New value for property <code>imageFitType</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setImageFitType = function(sImageFitType) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getInitials initials}.
 * 
 * Defines the displayed initials.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sInitials New value for property <code>initials</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setInitials = function(sInitials) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getShowBorder showBorder}.
 * 
 * Determines whether the control is displayed with border.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowBorder New value for property <code>showBorder</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.69
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setShowBorder = function(bShowBorder) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getSrc src}.
 * 
 * Determines the path to the desired image or icon.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sSrc New value for property <code>src</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setSrc = function(sSrc) { return new sap.f.Avatar(); };

/**
 * Unbinds aggregation {@link #getDetailBox detailBox} from model data.
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.unbindDetailBox = function() { return new sap.f.Avatar(); };


// ---- sap.f.AvatarColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarColor.toString = function() { return ""; };

// ---- sap.f.AvatarImageFitType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarImageFitType.toString = function() { return ""; };

// ---- sap.f.AvatarShape --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarShape.toString = function() { return ""; };

// ---- sap.f.AvatarSize --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarSize.toString = function() { return ""; };

// ---- sap.f.AvatarType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarType.toString = function() { return ""; };

// ---- sap.f.Card --------------------------------------------------------------------------

/**
 * Constructor for a new <code>Card</code>.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getHeaderPosition headerPosition} : sap.f.cards.HeaderPosition (default: Top)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeader header} : sap.f.cards.IHeader</li>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
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
 * A control that represents a container with a predefined header and content.
 * 
 * <h3>Overview</h3>
 * The card is a container for grouping and displaying information.
 * 
 * <h3>Structure</h3>
 * You can control the width and height of the card, using properties.
 * The <code>Card</code> has the following aggregations:
 * <ul>
 * <li><code>header</code> - can be either a {@link sap.f.cards.Header Header} or a {@link sap.f.cards.NumericHeader NumericHeader}
 * <li><code>content</code> - can be any {@link sap.ui.core.Control Control}.</li>
 * </ul>
 * 
 * <h3>Guidelines:</h3>
 * <ul>
 * <li>A card should represent a task or visualize a specific set of information.</li>
 * <li>It is recommended to use cards on home page layouts.</li>
 * <li>The card shouldn't be large with a lot of content.</li>
 * </ul>
 * 
 * <h3>Usage</h3>
 * To show a KPI value or any numeric information, use {@link sap.f.cards.NumericHeader NumericHeader} as a card header.
 * For any other use cases, use the regular {@link sap.f.cards.Header Header}.
 * Recommended content:
 * - List
 * - Table
 * - Object information
 * - Charts
 * - Timelines
 * - Images
 * 
 * <i>When to use</i>
 * <ul>
 * <li>When you need multiple cards on a home page layout.</li>
 * <li>When you have to achieve simple card visualization.</li>
 * </ul>
 * 
 * <i>When not to use</i>
 * <ul>
 * <li>When you have to reuse the card between applications. For such cases, use: {@link sap.ui.integration.widgets.Card Integration Card}.</li>
 * <li>When you need nesting. For such cases, use: {@link sap.m.Panel Panel}.</li>
 * <li>When the card is not part of a card layout. For such cases, use: {@link sap.m.Panel Panel}.</li>
 * <li>When you need more header configuration flexibility.</li>
 * </ul>
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.64
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.Card = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.Card} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Card.prototype.destroyContent = function() { return new sap.f.Card(); };

/**
 * Destroys the header in the aggregation {@link #getHeader header}.
 * @returns {sap.f.Card} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Card.prototype.destroyHeader = function() { return new sap.f.Card(); };

/**
 * Creates a new subclass of class sap.f.Card with name <code>sClassName</code>
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
sap.f.Card.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Implements sap.f.ICard interface.
 * 
 * @returns {sap.ui.core.Control} The content of the card.
 * @protected
 * 
 */
sap.f.Card.prototype.getCardContent = function() { return new sap.ui.core.Control(); };

/**
 * Implements sap.f.ICard interface.
 * 
 * @returns {sap.f.cards.IHeader} The header of the card.
 * @protected
 * 
 */
sap.f.Card.prototype.getCardHeader = function() { return new sap.f.cards.IHeader(); };

/**
 * Implements sap.f.ICard interface.
 * 
 * @returns {sap.f.cards.HeaderPosition} The position of the header of the card.
 * @protected
 * @since 1.65
 * 
 */
sap.f.Card.prototype.getCardHeaderPosition = function() { return new sap.f.cards.HeaderPosition(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Defines the content of the card.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.Card.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getHeader header}.
 * 
 * Defines the header of the card.
 * 
 * @returns {sap.f.cards.IHeader}
 * 
 * @public
 * 
 */
sap.f.Card.prototype.getHeader = function() { return new sap.f.cards.IHeader(); };

/**
 * Gets current value of property {@link #getHeaderPosition headerPosition}.
 * 
 * Defines the position of the Card Header.
 * 
 * Default value is <code>Top</code>.
 * @returns {sap.f.cards.HeaderPosition} Value of property <code>headerPosition</code>
 * @since 1.65
 * 
 * @public
 * 
 */
sap.f.Card.prototype.getHeaderPosition = function() { return new sap.f.cards.HeaderPosition(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Defines the height of the card.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.f.Card.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.f.Card.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.Card.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Defines the width of the card.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.f.Card.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.f.Card} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Card.prototype.setContent = function(oContent) { return new sap.f.Card(); };

/**
 * Sets the aggregated {@link #getHeader header}.
 * @param {sap.f.cards.IHeader} oHeader The header to set
 * @returns {sap.f.Card} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Card.prototype.setHeader = function(oHeader) { return new sap.f.Card(); };

/**
 * Sets a new value for property {@link #getHeaderPosition headerPosition}.
 * 
 * Defines the position of the Card Header.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Top</code>.
 * @param {sap.f.cards.HeaderPosition} sHeaderPosition New value for property <code>headerPosition</code>
 * @returns {sap.f.Card} Reference to <code>this</code> in order to allow method chaining
 * @since 1.65
 * 
 * @public
 * 
 */
sap.f.Card.prototype.setHeaderPosition = function(sHeaderPosition) { return new sap.f.Card(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Defines the height of the card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.f.Card} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Card.prototype.setHeight = function(sHeight) { return new sap.f.Card(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Defines the width of the card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.f.Card} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Card.prototype.setWidth = function(sWidth) { return new sap.f.Card(); };


// ---- sap.f.cards.Header --------------------------------------------------------------------------

/**
 * Constructor for a new <code>Header</code>.
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
 * <li>{@link #getTitle title} : string (default: )</li>
 * <li>{@link #getSubtitle subtitle} : string (default: )</li>
 * <li>{@link #getStatusText statusText} : string (default: )</li>
 * <li>{@link #getIconDisplayShape iconDisplayShape} : sap.f.AvatarShape (default: Circle)</li>
 * <li>{@link #getIconSrc iconSrc} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getIconInitials iconInitials} : string (default: )</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Displays general information in the header of the {@link sap.f.Card}.
 * 
 * You can configure the title, subtitle, status text and icon, using the provided properties.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>You should always set a title.</li>
 * <li>To show a KPI or any numeric information, use {@link sap.f.cards.NumericHeader} instead.</li>
 * <ul>
 * 
 * @extends sap.ui.core.Control
 * @implements sap.f.cards.IHeader
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.64
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.cards.Header = function(sId,mSettings) {};
/**
 * Fires when the user presses the control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.f.cards.Header.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.cards.Header</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.cards.Header</code> itself.
 * 
 * Fires when the user presses the control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.cards.Header</code> itself
 * 
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.cards.Header.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.f.cards.Header(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.cards.Header</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.detachPress = function(fnFunction,oListener) { return new sap.f.cards.Header(); };

/**
 * Creates a new subclass of class sap.f.cards.Header with name <code>sClassName</code>
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
sap.f.cards.Header.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.cards.Header.prototype.firePress = function(mParameters) { return new sap.f.cards.Header(); };

/**
 * Gets current value of property {@link #getIconDisplayShape iconDisplayShape}.
 * 
 * Defines the shape of the icon.
 * 
 * Default value is <code>Circle</code>.
 * @returns {sap.f.AvatarShape} Value of property <code>iconDisplayShape</code>
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.getIconDisplayShape = function() { return new sap.f.AvatarShape(); };

/**
 * Gets current value of property {@link #getIconInitials iconInitials}.
 * 
 * Defines the initials of the icon.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>iconInitials</code>
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.getIconInitials = function() { return ""; };

/**
 * Gets current value of property {@link #getIconSrc iconSrc}.
 * 
 * Defines the icon source.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.URI} Value of property <code>iconSrc</code>
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.getIconSrc = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.f.cards.Header.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.cards.Header.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getStatusText statusText}.
 * 
 * Defines the status text.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>statusText</code>
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.getStatusText = function() { return ""; };

/**
 * Gets current value of property {@link #getSubtitle subtitle}.
 * 
 * Defines the subtitle.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>subtitle</code>
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.getSubtitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Defines the title.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.getTitle = function() { return ""; };

/**
 * @public
 * @returns {boolean} If the header is ready or not.
 * 
 */
sap.f.cards.Header.prototype.isReady = function() { return false; };

/**
 * Sets a new value for property {@link #getIconDisplayShape iconDisplayShape}.
 * 
 * Defines the shape of the icon.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Circle</code>.
 * @param {sap.f.AvatarShape} sIconDisplayShape New value for property <code>iconDisplayShape</code>
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.setIconDisplayShape = function(sIconDisplayShape) { return new sap.f.cards.Header(); };

/**
 * Sets a new value for property {@link #getIconInitials iconInitials}.
 * 
 * Defines the initials of the icon.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sIconInitials New value for property <code>iconInitials</code>
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.setIconInitials = function(sIconInitials) { return new sap.f.cards.Header(); };

/**
 * Sets a new value for property {@link #getIconSrc iconSrc}.
 * 
 * Defines the icon source.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.URI} sIconSrc New value for property <code>iconSrc</code>
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.setIconSrc = function(sIconSrc) { return new sap.f.cards.Header(); };

/**
 * Sets a new value for property {@link #getStatusText statusText}.
 * 
 * Defines the status text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sStatusText New value for property <code>statusText</code>
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.setStatusText = function(sStatusText) { return new sap.f.cards.Header(); };

/**
 * Sets a new value for property {@link #getSubtitle subtitle}.
 * 
 * Defines the subtitle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sSubtitle New value for property <code>subtitle</code>
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.setSubtitle = function(sSubtitle) { return new sap.f.cards.Header(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Defines the title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.f.cards.Header} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.Header.prototype.setTitle = function(sTitle) { return new sap.f.cards.Header(); };


// ---- sap.f.cards.HeaderPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.cards.HeaderPosition.toString = function() { return ""; };

// ---- sap.f.cards.IHeader --------------------------------------------------------------------------


// ---- sap.f.cards.NumericHeader --------------------------------------------------------------------------

/**
 * Constructor for a new <code>NumericHeader</code>.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSubtitle subtitle} : string</li>
 * <li>{@link #getStatusText statusText} : string (default: )</li>
 * <li>{@link #getUnitOfMeasurement unitOfMeasurement} : string</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getTrend trend} : sap.m.DeviationIndicator (default: None)</li>
 * <li>{@link #getState state} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getDetails details} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSideIndicators sideIndicators} : sap.f.cards.NumericSideIndicator[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Displays general information in the header of the {@link sap.f.Card} and allows the
 * configuration of a numeric value visualization..
 * 
 * You can configure the title, subtitle, status text and icon, using the provided properties.
 * To add more side number indicators, use the <code>sideIndicators</code> aggregation.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>You should always set a title.</li>
 * <li>You should always have a maximum of two side indicators.</li>
 * <li>To show only basic information, use {@link sap.f.cards.Header Header} instead.</li>
 * </ul>
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.64
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.cards.NumericHeader = function(sId,mSettings) {};
/**
 * Fires when the user presses the control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.press = function(oControlEvent) {  };

/**
 * Adds some sideIndicator to the aggregation {@link #getSideIndicators sideIndicators}.
 * @param {sap.f.cards.NumericSideIndicator}
 *            oSideIndicator The sideIndicator to add; if empty, nothing is inserted
 * @returns {sap.f.cards.NumericHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.addSideIndicator = function(oSideIndicator) { return new sap.f.cards.NumericHeader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.cards.NumericHeader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.cards.NumericHeader</code> itself.
 * 
 * Fires when the user presses the control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.cards.NumericHeader</code> itself
 * 
 * @returns {sap.f.cards.NumericHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.f.cards.NumericHeader(); };

/**
 * Destroys all the sideIndicators in the aggregation {@link #getSideIndicators sideIndicators}.
 * @returns {sap.f.cards.NumericHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.destroySideIndicators = function() { return new sap.f.cards.NumericHeader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.cards.NumericHeader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.cards.NumericHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.detachPress = function(fnFunction,oListener) { return new sap.f.cards.NumericHeader(); };

/**
 * Creates a new subclass of class sap.f.cards.NumericHeader with name <code>sClassName</code>
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
sap.f.cards.NumericHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.f.cards.NumericHeader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.cards.NumericHeader.prototype.firePress = function(mParameters) { return new sap.f.cards.NumericHeader(); };

/**
 * Gets current value of property {@link #getDetails details}.
 * 
 * Additional text which adds more details to what is shown in the numeric header.
 * 
 * @returns {string} Value of property <code>details</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getDetails = function() { return ""; };

/**
 * Returns a metadata object for class sap.f.cards.NumericHeader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.cards.NumericHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNumber number}.
 * 
 * The numeric value of the main number indicator.
 * If the value contains more than five characters, only the first five are displayed. Without rounding the number.
 * 
 * @returns {string} Value of property <code>number</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getNumber = function() { return ""; };

/**
 * Gets current value of property {@link #getScale scale}.
 * 
 * Defines the unit of measurement (scaling prefix) for the main indicator.
 * Financial characters can be used for currencies and counters. The International System of Units (SI) prefixes can be used.
 * If the unit contains more than three characters, only the first three characters are displayed.
 * 
 * @returns {string} Value of property <code>scale</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getScale = function() { return ""; };

/**
 * Gets content of aggregation {@link #getSideIndicators sideIndicators}.
 * 
 * Additional side number indicators. For example "Deviation" and "Target". Not more than two side indicators should be used.
 * 
 * @returns {sap.f.cards.NumericSideIndicator[]}
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getSideIndicators = function() { return new Array(); };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * The semantic color which represents the state of the main number indicator.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>state</code>
 * 
 * @experimental since 1.64
 * Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getState = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property {@link #getStatusText statusText}.
 * 
 * Defines the status text.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>statusText</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getStatusText = function() { return ""; };

/**
 * Gets current value of property {@link #getSubtitle subtitle}.
 * 
 * The subtitle of the card
 * 
 * @returns {string} Value of property <code>subtitle</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getSubtitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the card
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTrend trend}.
 * 
 * The direction of the trend arrow. Shows deviation for the value of the main number indicator.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.m.DeviationIndicator} Value of property <code>trend</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getTrend = function() { return new sap.m.DeviationIndicator(); };

/**
 * Gets current value of property {@link #getUnitOfMeasurement unitOfMeasurement}.
 * 
 * General unit of measurement for the header. Displayed as side information to the subtitle.
 * 
 * @returns {string} Value of property <code>unitOfMeasurement</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.getUnitOfMeasurement = function() { return ""; };

/**
 * Checks for the provided <code>sap.f.cards.NumericSideIndicator</code> in the aggregation {@link #getSideIndicators sideIndicators}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.f.cards.NumericSideIndicator}
 *           oSideIndicator The sideIndicator whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.indexOfSideIndicator = function(oSideIndicator) { return 0; };

/**
 * Inserts a sideIndicator into the aggregation {@link #getSideIndicators sideIndicators}.
 * 
 * @param {sap.f.cards.NumericSideIndicator}
 *            oSideIndicator The sideIndicator to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the sideIndicator should be inserted at; for
 *              a negative value of <code>iIndex</code>, the sideIndicator is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the sideIndicator is inserted at
 *              the last position
 * @returns {sap.f.cards.NumericHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.insertSideIndicator = function(oSideIndicator,iIndex) { return new sap.f.cards.NumericHeader(); };

/**
 * @public
 * @returns {boolean} If the header is ready or not.
 * 
 */
sap.f.cards.NumericHeader.prototype.isReady = function() { return false; };

/**
 * Removes all the controls from the aggregation {@link #getSideIndicators sideIndicators}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.f.cards.NumericSideIndicator[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.removeAllSideIndicators = function() { return new Array(); };

/**
 * Removes a sideIndicator from the aggregation {@link #getSideIndicators sideIndicators}.
 * 
 * @param {int | string | sap.f.cards.NumericSideIndicator} vSideIndicator The sideIndicator to remove or its index or id
 * @returns {sap.f.cards.NumericSideIndicator} The removed sideIndicator or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.removeSideIndicator = function(vSideIndicator) { return new sap.f.cards.NumericSideIndicator(); };

/**
 * Sets additional text which adds more details to what is shown in the numeric header.
 * 
 * @public
 * @param {string} sValue The text of the details
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setDetails = function(sValue) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets the value of the main number indicator.
 * 
 * @public
 * @param {string} sValue A string representation of the number
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setNumber = function(sValue) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets the unit of measurement (scaling prefix) for the main indicator.
 * 
 * @public
 * @param {string} sValue The text of the title
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setScale = function(sValue) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets the semantic color which represents the state of the main number indicator.
 * 
 * @public
 * @param {sap.m.ValueColor} sValue The semantic color which represents the state
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setState = function(sValue) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets a new value for property {@link #getStatusText statusText}.
 * 
 * Defines the status text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sStatusText New value for property <code>statusText</code>
 * @returns {sap.f.cards.NumericHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.cards.NumericHeader.prototype.setStatusText = function(sStatusText) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets the subtitle.
 * 
 * @public
 * @param {string} sValue The text of the subtitle
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setSubtitle = function(sValue) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets the title.
 * 
 * @public
 * @param {string} sValue The text of the title
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setTitle = function(sValue) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets the direction of the trend arrow.
 * 
 * @public
 * @param {sap.m.DeviationIndicator} sValue The direction of the trend arrow
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setTrend = function(sValue) { return new sap.f.cards.NumericHeader(); };

/**
 * Sets the general unit of measurement for the header. Displayed as side information to the subtitle.
 * 
 * @public
 * @param {string} sValue The value of the unit of measurement
 * @return {sap.f.cards.NumericHeader} <code>this</code> pointer for chaining
 * 
 */
sap.f.cards.NumericHeader.prototype.setUnitOfMeasurement = function(sValue) { return new sap.f.cards.NumericHeader(); };


// ---- sap.f.cards.NumericSideIndicator --------------------------------------------------------------------------

/**
 * Constructor for a new <code>NumericSideIndicator</code>.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getUnit unit} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
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
 * Holds a set of side indicator attributes used in the {@link sap.f.cards.NumericHeader} control.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.64
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.cards.NumericSideIndicator = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.cards.NumericSideIndicator with name <code>sClassName</code>
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
sap.f.cards.NumericSideIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.cards.NumericSideIndicator.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.cards.NumericSideIndicator.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNumber number}.
 * 
 * The numeric value
 * 
 * @returns {string} Value of property <code>number</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericSideIndicator.prototype.getNumber = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the indicator
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericSideIndicator.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getUnit unit}.
 * 
 * Defines the unit of measurement (scaling prefix) for the numeric value
 * 
 * @returns {string} Value of property <code>unit</code>
 * 
 * @public
 * 
 */
sap.f.cards.NumericSideIndicator.prototype.getUnit = function() { return ""; };

/**
 * Sets the numeric value.
 * 
 * @public
 * @param {string} sValue The text of the title
 * @return {sap.f.cards.NumericSideIndicator} this pointer for chaining
 * 
 */
sap.f.cards.NumericSideIndicator.prototype.setNumber = function(sValue) { return new sap.f.cards.NumericSideIndicator(); };

/**
 * Sets the title.
 * 
 * @public
 * @param {string} sValue The text of the title
 * @return {sap.f.cards.NumericSideIndicator} this pointer for chaining
 * 
 */
sap.f.cards.NumericSideIndicator.prototype.setTitle = function(sValue) { return new sap.f.cards.NumericSideIndicator(); };

/**
 * Sets the unit of measurement.
 * 
 * @public
 * @param {string} sValue The text of the title
 * @return {sap.f.cards.NumericSideIndicator} this pointer for chaining
 * 
 */
sap.f.cards.NumericSideIndicator.prototype.setUnit = function(sValue) { return new sap.f.cards.NumericSideIndicator(); };


// ---- sap.f.dnd.GridDropInfo --------------------------------------------------------------------------

/**
 * Constructor for a new GridDropInfo.
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
 * <li>{@link #getDropIndicatorSize dropIndicatorSize} : function</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.dnd.DropInfo#constructor sap.ui.core.dnd.DropInfo}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new DropInfo, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the GridDropInfo
 * 
 * @class
 * Provides enhanced configuration for drop operations inside grid-based controls.
 * 
 * If drop position is <code>Between</code> and drop layout is <code>Horizontal</code>, this drop configuration will provide enhanced visualization and interaction, better suited for grid items.
 * It will show a drop indicator which mimics the size of the dragged item and shows the potential drop position inside the grid.
 * The indicator will push away other grid items, showing the correct arrangement calculated by the grid’s auto-placement algorithm.
 * 
 * When position is different than <code>Between</code> or layout is not <code>Horizontal</code>, the drag and drop will look and behave like the general <code>{@link sap.ui.core.dnd.DropInfo}</code>.
 * 
 * <b>Note:</b> This configuration might be ignored due to control {@link sap.ui.core.Element.extend metadata} restrictions.
 * 
 * @extends sap.ui.core.dnd.DropInfo
 * @version 1.71.0
 * 
 * @public
 * @experimental Since 1.68 This class is experimental. The API may change.
 * @since 1.68
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.dnd.GridDropInfo = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.dnd.GridDropInfo with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.dnd.DropInfo.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.dnd.GridDropInfo.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDropIndicatorSize dropIndicatorSize}.
 * 
 * A function which will define the desired drop indicator size. The drop indicator shows the user how the grid will rearrange after drop.
 * 
 * Use when custom size needs to be defined. For example when an item is dragged from outside a grid and is dropped over the grid.
 * 
 * If not specified or if the function returns <code>null</code>, the indicator size will be calculated automatically.
 * 
 * This callback will be called when the indicator is displayed, that happens during the drag over movement.
 * 
 * The callback receives <code>draggedControl</code> as parameter and must return an object of type <code>{rows: <int>, columns: <int>}</code> or <code>null</code>.
 * 
 * @returns {function} Value of property <code>dropIndicatorSize</code>
 * 
 * @public
 * 
 */
sap.f.dnd.GridDropInfo.prototype.getDropIndicatorSize = function() { return function() {}; };

/**
 * Returns a metadata object for class sap.f.dnd.GridDropInfo.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.dnd.GridDropInfo.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getDropIndicatorSize dropIndicatorSize}.
 * 
 * A function which will define the desired drop indicator size. The drop indicator shows the user how the grid will rearrange after drop.
 * 
 * Use when custom size needs to be defined. For example when an item is dragged from outside a grid and is dropped over the grid.
 * 
 * If not specified or if the function returns <code>null</code>, the indicator size will be calculated automatically.
 * 
 * This callback will be called when the indicator is displayed, that happens during the drag over movement.
 * 
 * The callback receives <code>draggedControl</code> as parameter and must return an object of type <code>{rows: <int>, columns: <int>}</code> or <code>null</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {function} fnDropIndicatorSize New value for property <code>dropIndicatorSize</code>
 * @returns {sap.f.dnd.GridDropInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.dnd.GridDropInfo.prototype.setDropIndicatorSize = function(fnDropIndicatorSize) { return new sap.f.dnd.GridDropInfo(); };


// ---- sap.f.dnd.IGridDroppable --------------------------------------------------------------------------


// ---- sap.f.DynamicPage --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPage</code>.
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
 * <li>{@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll} : boolean (default: false)</li>
 * <li>{@link #getHeaderExpanded headerExpanded} : boolean (default: true)</li>
 * <li>{@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick} : boolean (default: true)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: false)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.PageBackgroundDesign (default: Standard)</li>
 * <li>{@link #getFitContent fitContent} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.f.DynamicPageTitle</li>
 * <li>{@link #getHeader header} : sap.f.DynamicPageHeader</li>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.m.IBar</li>
 * <li>{@link #getLandmarkInfo landmarkInfo} : sap.f.DynamicPageAccessibleLandmarkInfo</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getStickySubheaderProvider stickySubheaderProvider} : (sap.ui.core.ID | sap.f.IDynamicPageStickyContent)</li>
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
 * A layout control, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.
 * 
 * <h3>Overview</h3>
 * 
 * The control consist of several components:
 * 
 * <ul><li>{@link sap.f.DynamicPageTitle DynamicPageTitle} - consists of a heading
 * on the left side, content in the middle, and actions on the right. The displayed
 * content changes based on the current mode of the {@link sap.f.DynamicPageHeader
 * DynamicPageHeader}.</li>
 * <li>{@link sap.f.DynamicPageHeader DynamicPageHeader} - a generic container, which
 * can contain a single layout control and does not care about the content alignment
 * and responsiveness. The header works in two modes - expanded and snapped and its
 * behavior can be adjusted with the help of different properties.</li>
 * <li>Content area - a generic container, which can have a single UI5 layout control
 * and does not care about the content alignment and responsiveness.</li>
 * <li>Footer - positioned at the bottom with a small offset and used for additional
 * actions, the footer floats above the content. It can be any {@link sap.m.IBar}
 * control.</li></ul>
 * 
 * <h3>Usage</h3>
 * 
 * Use the <code>DynamicPage</code> if you need to have a title, that is always visible
 * and a header, that has configurable Expanding/Snapping functionality.
 * If you don't need the Expanding/Snapping functionality it is better to use the
 * {@link sap.m.Page} as a lighter control.
 * 
 * <ul><b>Notes:</b>
 * <li>If you're displaying a {@link sap.m.FlexBox} with non-adaptive content
 * (doesn't stretch to fill the available space), it is recommended to set the
 * <code>fitContainer</code> property of the {@link sap.m.FlexBox FlexBox} to
 * <code>false</code>.</li>
 * <li>If you are displaying a {@link sap.ui.table.Table}, keep in mind that it is
 * non-adaptive and may cause unpredicted behavior for the <code>DynamicPage</code>
 * on smaller screen sizes, such as mobile.</li>
 * <li>Snapping of the {@link sap.f.DynamicPageTitle DynamicPageTitle} is not supported in the following case:
 * When the <code>DynamicPage</code> has a scroll bar, the control usually scrolls to the snapping point - the point,
 * where the {@link sap.f.DynamicPageHeader DynamicPageHeader} is scrolled out completely.
 * However, when there is a scroll bar, but not enough content to reach the snapping point,
 * the snapping is not possible using scrolling.</li>
 * <li>When using {@link sap.ui.layout.form.Form},
 * {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} controls in the content of
 * <code>DynamicPage</code>, you need to adjust their left text offset if you want to achieve vertical alignment
 * between the <code>sap.f.DynamicPageHeader</code>`s  content and <code>DynamicPage</code>`s content.
 * For more information, see the documentation for the <code>content</code> aggregation.</li></ul>
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The responsive behavior of the <code>DynamicPage</code> depends on the behavior of
 * the content that is displayed. To adjust the <code>DynamicPage</code> content
 * padding, the <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code>,
 * and <code>sapUiResponsiveContentPadding</code> CSS classes can be used.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.42
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/dynamic-page-layout/ Dynamic Page}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPage = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyContent = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the footer in the aggregation {@link #getFooter footer}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyFooter = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the header in the aggregation {@link #getHeader header}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyHeader = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.61
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyLandmarkInfo = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the title in the aggregation {@link #getTitle title}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyTitle = function() { return new sap.f.DynamicPage(); };

/**
 * Creates a new subclass of class sap.f.DynamicPage with name <code>sClassName</code>
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
sap.f.DynamicPage.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Determines the background color of <code>DynamicPage</code>.
 * 
 * Default value is <code>Standard</code>.
 * @returns {sap.m.PageBackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.68
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getBackgroundDesign = function() { return new sap.m.PageBackgroundDesign(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * <code>DynamicPage</code> content.
 * 
 * <b>Note: </b> You can change the default paddings by adding the following CSS classes:
 * <ul>
 * <li><code>sapUiContentPadding</code></li>
 * <li><code>sapUiNoContentPadding</code></li>
 * <li><code>sapUiResponsiveContentPadding</code></li>
 * </ul>
 * For more information, see
 * {@link topic:c71f6df62dae47ca8284310a6f5fc80a Using Container Content Padding CSS Classes}.
 * 
 * <b>Note:</b> The SAP Fiori Design guidelines require that the
 * <code>DynamicPageHeader</code>'s content and the <code>DynamicPage</code>'s content
 * are aligned vertically. When using {@link sap.ui.layout.form.Form},
 * {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the content area of
 * <code>DynamicPage</code>, if the content is not already aligned, you need to adjust
 * their left text offset to achieve the vertical alignment. To do this, apply the
 * <code>sapFDynamicPageAlignContent</code> CSS class to them and set their <code>width</code>
 * property to <code>auto</code> (if not set by default).
 * 
 * Example:
 * 
 * <pre>
 * <code> &lt;Panel class=“sapFDynamicPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>
 * </pre>
 * 
 * Please keep in mind that the alignment is not possible in the following cases:
 * <ul>
 * <li> When the controls are placed in an {@link sap.ui.layout.Grid} or other layout
 * controls that use <code>overflow:hidden</code> CSS property</li>
 * <li> In case any of the following CSS classes is applied to
 * <code>DynamicPage</code>: <code>sapUiContentPadding</code>,
 * <code>sapUiNoContentPadding</code> or <code>sapUiResponsiveContentPadding</code></li>
 * </ul>
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getFitContent fitContent}.
 * 
 * Optimizes <code>DynamicPage</code> responsiveness on small screens and behavior
 * when expanding/collapsing the <code>DynamicPageHeader</code>.
 * 
 * <b>Note:</b> It is recommended to use this property when displaying content
 * of adaptive controls that stretch to fill the available space. Such controls may be
 * {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable} depending on their settings.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>fitContent</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getFitContent = function() { return false; };

/**
 * Gets content of aggregation {@link #getFooter footer}.
 * 
 * <code>DynamicPage</code> floating footer.
 * 
 * @returns {sap.m.IBar}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getFooter = function() { return new sap.m.IBar(); };

/**
 * Gets content of aggregation {@link #getHeader header}.
 * 
 * <code>DynamicPage</code> header.
 * 
 * @returns {sap.f.DynamicPageHeader}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getHeader = function() { return new sap.f.DynamicPageHeader(); };

/**
 * Gets current value of property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerExpanded</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getHeaderExpanded = function() { return false; };

/**
 * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
 * 
 * Accessible landmark settings to be applied on the containers of the <code>sap.f.DynamicPage</code> control.
 * 
 * If not set, no landmarks will be written.
 * 
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo}
 * @since 1.61
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getLandmarkInfo = function() { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Returns a metadata object for class sap.f.DynamicPage.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPage.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>preserveHeaderStateOnScroll</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getPreserveHeaderStateOnScroll = function() { return false; };

/**
 * Gets current value of property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showFooter</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getShowFooter = function() { return false; };

/**
 * ID of the element which is the current target of the association {@link #getStickySubheaderProvider stickySubheaderProvider}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * @since 1.65
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getStickySubheaderProvider = function() { return new sap.ui.core.ID(); };

/**
 * Gets content of aggregation {@link #getTitle title}.
 * 
 * <code>DynamicPage</code> title.
 * 
 * @returns {sap.f.DynamicPageTitle}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getTitle = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the user can switch between the expanded/collapsed states of the
 * <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code>
 * or by using the expand/collapse visual indicators,
 * positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>.
 * If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable,
 * the visual indicators are not available and the application
 * must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * <b>Note: </b> This property is taken into account only if a non-empty <code>header</code> aggregation is provided.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>toggleHeaderOnTitleClick</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getToggleHeaderOnTitleClick = function() { return false; };

/**
 * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Determines the background color of <code>DynamicPage</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Standard</code>.
 * @param {sap.m.PageBackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.68
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setContent = function(oContent) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getFitContent fitContent}.
 * 
 * Optimizes <code>DynamicPage</code> responsiveness on small screens and behavior
 * when expanding/collapsing the <code>DynamicPageHeader</code>.
 * 
 * <b>Note:</b> It is recommended to use this property when displaying content
 * of adaptive controls that stretch to fill the available space. Such controls may be
 * {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable} depending on their settings.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFitContent New value for property <code>fitContent</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setFitContent = function(bFitContent) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getFooter footer}.
 * @param {sap.m.IBar} oFooter The footer to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setFooter = function(oFooter) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getHeader header}.
 * @param {sap.f.DynamicPageHeader} oHeader The header to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setHeader = function(oHeader) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderExpanded New value for property <code>headerExpanded</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setHeaderExpanded = function(bHeaderExpanded) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getLandmarkInfo landmarkInfo}.
 * @param {sap.f.DynamicPageAccessibleLandmarkInfo} oLandmarkInfo The landmarkInfo to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.61
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setLandmarkInfo = function(oLandmarkInfo) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPreserveHeaderStateOnScroll New value for property <code>preserveHeaderStateOnScroll</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setPreserveHeaderStateOnScroll = function(bPreserveHeaderStateOnScroll) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowFooter New value for property <code>showFooter</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setShowFooter = function(bShowFooter) { return new sap.f.DynamicPage(); };

/**
 * Sets the associated {@link #getStickySubheaderProvider stickySubheaderProvider}.
 * @param {sap.ui.core.ID | sap.f.IDynamicPageStickyContent} oStickySubheaderProvider ID of an element which becomes the new target of this stickySubheaderProvider association; alternatively, an element instance may be given
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.65
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setStickySubheaderProvider = function(oStickySubheaderProvider) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getTitle title}.
 * @param {sap.f.DynamicPageTitle} oTitle The title to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setTitle = function(oTitle) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the user can switch between the expanded/collapsed states of the
 * <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code>
 * or by using the expand/collapse visual indicators,
 * positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>.
 * If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable,
 * the visual indicators are not available and the application
 * must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * <b>Note: </b> This property is taken into account only if a non-empty <code>header</code> aggregation is provided.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bToggleHeaderOnTitleClick New value for property <code>toggleHeaderOnTitleClick</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setToggleHeaderOnTitleClick = function(bToggleHeaderOnTitleClick) { return new sap.f.DynamicPage(); };


// ---- sap.f.DynamicPageAccessibleLandmarkInfo --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.f.DynamicPageAccessibleLandmarkInfo</code> element.
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
 * <li>{@link #getRootRole rootRole} : sap.ui.core.AccessibleLandmarkRole (default: None)</li>
 * <li>{@link #getRootLabel rootLabel} : string</li>
 * <li>{@link #getContentRole contentRole} : sap.ui.core.AccessibleLandmarkRole (default: None)</li>
 * <li>{@link #getContentLabel contentLabel} : string</li>
 * <li>{@link #getHeaderRole headerRole} : sap.ui.core.AccessibleLandmarkRole (default: None)</li>
 * <li>{@link #getHeaderLabel headerLabel} : string</li>
 * <li>{@link #getFooterRole footerRole} : sap.ui.core.AccessibleLandmarkRole (default: None)</li>
 * <li>{@link #getFooterLabel footerLabel} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new element, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new element
 * 
 * @class
 * Settings for accessible landmarks which can be applied to the container elements of a <code>sap.f.DynamicPage</code> control.
 * 
 * These landmarks are used by assistive technologies (such as screen readers) to provide a meaningful page overview.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.61
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.DynamicPageAccessibleLandmarkInfo with name <code>sClassName</code>
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
sap.f.DynamicPageAccessibleLandmarkInfo.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getContentLabel contentLabel}.
 * 
 * Texts which describe the landmark of the content container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>contentLabel</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getContentLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getContentRole contentRole}.
 * 
 * Landmark role of the content container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>contentRole</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getContentRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Gets current value of property {@link #getFooterLabel footerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>footerLabel</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getFooterLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getFooterRole footerRole}.
 * 
 * Landmark role of the footer container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>footerRole</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getFooterRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Gets current value of property {@link #getHeaderLabel headerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>headerLabel</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getHeaderLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getHeaderRole headerRole}.
 * 
 * Landmark role of the header container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>headerRole</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getHeaderRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Returns a metadata object for class sap.f.DynamicPageAccessibleLandmarkInfo.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getRootLabel rootLabel}.
 * 
 * Texts which describe the landmark of the root container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>rootLabel</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getRootLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getRootRole rootRole}.
 * 
 * Landmark role of the root container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>rootRole</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.getRootRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Sets a new value for property {@link #getContentLabel contentLabel}.
 * 
 * Texts which describe the landmark of the content container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sContentLabel New value for property <code>contentLabel</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setContentLabel = function(sContentLabel) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getContentRole contentRole}.
 * 
 * Landmark role of the content container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sContentRole New value for property <code>contentRole</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setContentRole = function(sContentRole) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getFooterLabel footerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFooterLabel New value for property <code>footerLabel</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setFooterLabel = function(sFooterLabel) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getFooterRole footerRole}.
 * 
 * Landmark role of the footer container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sFooterRole New value for property <code>footerRole</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setFooterRole = function(sFooterRole) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getHeaderLabel headerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sHeaderLabel New value for property <code>headerLabel</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setHeaderLabel = function(sHeaderLabel) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getHeaderRole headerRole}.
 * 
 * Landmark role of the header container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sHeaderRole New value for property <code>headerRole</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setHeaderRole = function(sHeaderRole) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getRootLabel rootLabel}.
 * 
 * Texts which describe the landmark of the root container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sRootLabel New value for property <code>rootLabel</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setRootLabel = function(sRootLabel) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getRootRole rootRole}.
 * 
 * Landmark role of the root container of the corresponding <code>sap.f.DynamicPage</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sRootRole New value for property <code>rootRole</code>
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageAccessibleLandmarkInfo.prototype.setRootRole = function(sRootRole) { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };


// ---- sap.f.DynamicPageHeader --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPageHeader</code>.
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
 * <li>{@link #getPinnable pinnable} : boolean (default: true)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
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
 * Header of the {@link sap.f.DynamicPage}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>DynamicPageHeader</code> control is part of the {@link sap.f.DynamicPage} family
 * and is used to serve as header of the {@link sap.f.DynamicPage DynamicPage}.
 * 
 * <h3>Usage</h3>
 * 
 * The <code>DynamicPageHeader</code> can hold any layout control and has  two states - expanded
 * and collapsed (snapped). The switching between these states happens when:
 * 
 * <ul><li>the user scrolls below its bottom margin</li>
 * <li>the user clicks on the {@link sap.f.DynamicPageTitle DynamicPageTitle}</li>
 * <li>through the {@link sap.f.DynamicPage DynamicPage} property <code>headerExpanded</code></li></ul>
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The responsive behavior of the <code>DynamicPageHeader</code> depends on the behavior of the
 * content that is displayed.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPageHeader = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.addContent = function(oContent) { return new sap.f.DynamicPageHeader(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.destroyContent = function() { return new sap.f.DynamicPageHeader(); };

/**
 * Creates a new subclass of class sap.f.DynamicPageHeader with name <code>sClassName</code>
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
sap.f.DynamicPageHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Determines the background color of the <code>DynamicPageHeader</code>.
 * 
 * <b>Note:</b> The default value of <code>backgroundDesign</code> property is null.
 * If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>,
 * which depends on the specific theme.
 * 
 * @returns {sap.m.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.getBackgroundDesign = function() { return new sap.m.BackgroundDesign(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content of the header.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.f.DynamicPageHeader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPageHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPinnable pinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>pinnable</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.getPinnable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.insertContent = function(oContent,iIndex) { return new sap.f.DynamicPageHeader(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Determines the background color of the <code>DynamicPageHeader</code>.
 * 
 * <b>Note:</b> The default value of <code>backgroundDesign</code> property is null.
 * If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>,
 * which depends on the specific theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.m.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.f.DynamicPageHeader(); };

/**
 * Sets a new value for property {@link #getPinnable pinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPinnable New value for property <code>pinnable</code>
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.setPinnable = function(bPinnable) { return new sap.f.DynamicPageHeader(); };


// ---- sap.f.DynamicPageTitle --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPageTitle</code>.
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
 * <li>{@link #getPrimaryArea primaryArea} : sap.f.DynamicPageTitleArea (default: Begin)</li>
 * <li>{@link #getAreaShrinkRatio areaShrinkRatio} : sap.f.DynamicPageTitleShrinkRatio (default: 1:1.6:1.6)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeading heading} : sap.ui.core.Control</li>
 * <li>{@link #getSnappedHeading snappedHeading} : sap.ui.core.Control</li>
 * <li>{@link #getExpandedHeading expandedHeading} : sap.ui.core.Control</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li>
 * <li>{@link #getNavigationActions navigationActions} : sap.m.Button[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getSnappedContent snappedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getExpandedContent expandedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getSnappedTitleOnMobile snappedTitleOnMobile} : sap.m.Title</li>
 * <li>{@link #getBreadcrumbs breadcrumbs} : sap.m.IBreadcrumbs</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:stateChange stateChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Title of the {@link sap.f.DynamicPage}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>DynamicPageTitle</code> control is part of the {@link sap.f.DynamicPage}
 * family and is used to serve as title of the {@link sap.f.DynamicPage DynamicPage}.
 * 
 * <h3>Usage</h3>
 * 
 * The <code>DynamicPageTitle</code> can hold any control and displays the most important
 * information regarding the object that will always remain visible while scrolling.
 * 
 * <b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s
 * recommended to use controls, suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
 * 
 * If the <code>toggleHeaderOnTitleClick</code> property of the {@link sap.f.DynamicPage DynamicPage}
 * is set to <code>true</code>, the user can switch between the expanded/collapsed states of the
 * {@link sap.f.DynamicPageHeader DynamicPageHeader} by clicking on the <code>DynamicPageTitle</code>
 * or by using the expand/collapse visual indicators, positioned at the bottom of the
 * <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>.
 * 
 * If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable,
 * the visual indicators are not available, and the app must provide other means for
 * expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The responsive behavior of the <code>DynamicPageTitle</code> depends on the behavior of the
 * content that is displayed.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPageTitle = function(sId,mSettings) {};
/**
 * Fired when the title state (expanded/collapsed) is toggled by user interaction.
 * For example, scrolling, title clicking/tapping, using expand/collapse button.
 * 
 * Also fired when the developer toggles the title state by programmatically
 * changing the scroll position of the scrollbar of <code>DynamicPage</code>.
 * @event
 * @since 1.54
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.isExpanded Whether the title was expanded (true) or collapsed (false).
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.stateChange = function(oControlEvent) {  };

/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.ui.core.Control}
 *            oAction The action to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addAction = function(oAction) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addContent = function(oContent) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some expandedContent to the aggregation {@link #getExpandedContent expandedContent}.
 * @param {sap.ui.core.Control}
 *            oExpandedContent The expandedContent to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addExpandedContent = function(oExpandedContent) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some navigationAction to the aggregation {@link #getNavigationActions navigationActions}.
 * @param {sap.m.Button}
 *            oNavigationAction The navigationAction to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addNavigationAction = function(oNavigationAction) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some snappedContent to the aggregation {@link #getSnappedContent snappedContent}.
 * @param {sap.ui.core.Control}
 *            oSnappedContent The snappedContent to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addSnappedContent = function(oSnappedContent) { return new sap.f.DynamicPageTitle(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:stateChange stateChange} event of this <code>sap.f.DynamicPageTitle</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.DynamicPageTitle</code> itself.
 * 
 * Fired when the title state (expanded/collapsed) is toggled by user interaction.
 * For example, scrolling, title clicking/tapping, using expand/collapse button.
 * 
 * Also fired when the developer toggles the title state by programmatically
 * changing the scroll position of the scrollbar of <code>DynamicPage</code>.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.DynamicPageTitle</code> itself
 * 
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.54
 * 
 */
sap.f.DynamicPageTitle.prototype.attachStateChange = function(oData,fnFunction,oListener) { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyActions = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyBreadcrumbs = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyContent = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the expandedContent in the aggregation {@link #getExpandedContent expandedContent}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyExpandedContent = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys the expandedHeading in the aggregation {@link #getExpandedHeading expandedHeading}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyExpandedHeading = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys the heading in the aggregation {@link #getHeading heading}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyHeading = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the navigationActions in the aggregation {@link #getNavigationActions navigationActions}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyNavigationActions = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the snappedContent in the aggregation {@link #getSnappedContent snappedContent}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroySnappedContent = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys the snappedHeading in the aggregation {@link #getSnappedHeading snappedHeading}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroySnappedHeading = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys the snappedTitleOnMobile in the aggregation {@link #getSnappedTitleOnMobile snappedTitleOnMobile}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.63
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroySnappedTitleOnMobile = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:stateChange stateChange} event of this <code>sap.f.DynamicPageTitle</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.54
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.detachStateChange = function(fnFunction,oListener) { return new sap.f.DynamicPageTitle(); };

/**
 * Creates a new subclass of class sap.f.DynamicPageTitle with name <code>sClassName</code>
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
sap.f.DynamicPageTitle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:stateChange stateChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.isExpanded] Whether the title was expanded (true) or collapsed (false).
 * 
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.54
 * 
 */
sap.f.DynamicPageTitle.prototype.fireStateChange = function(mParameters) { return new sap.f.DynamicPageTitle(); };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * The <code>DynamicPageTitle</code> actions.
 * <br><b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls,
 * suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
 * 
 * <b>Note:</b> If the <code>snappedTitleOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getActions = function() { return new Array(); };

/**
 * Gets current value of property {@link #getAreaShrinkRatio areaShrinkRatio}.
 * 
 * Assigns shrinking ratio to the <code>DynamicPageTitle</code> areas (Heading, Content, Actions).
 * The greater value a section has the faster it shrinks when the screen size is being reduced.
 * 
 * The value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions
 * are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.
 * 
 * For example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than
 * the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px
 * the Title area will reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
 * 
 * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them
 * is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.
 * 
 * <Note:> When this property is set the <code>primaryArea</code> property has no effect.
 * 
 * Default value is <code>1:1.6:1.6</code>.
 * @returns {sap.f.DynamicPageTitleShrinkRatio} Value of property <code>areaShrinkRatio</code>
 * @since 1.54
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getAreaShrinkRatio = function() { return new sap.f.DynamicPageTitleShrinkRatio(); };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Determines the background color of the <code>DynamicPageTitle</code>.
 * 
 * <b>Note:</b> The default value of <code>backgroundDesign</code> property is null.
 * If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>,
 * which depends on the specific theme.
 * 
 * @returns {sap.m.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getBackgroundDesign = function() { return new sap.m.BackgroundDesign(); };

/**
 * Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.
 * 
 * The breadcrumbs displayed in the <code>DynamicPageTitle</code> top-left area.
 * 
 * @returns {sap.m.IBreadcrumbs}
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getBreadcrumbs = function() { return new sap.m.IBreadcrumbs(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content is positioned in the <code>DynamicPageTitle</code> middle area
 * and displayed in both expanded and collapsed (snapped) states.
 * 
 * <b>Note:</b> If the <code>snappedTitleOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.
 * 
 * @returns {sap.ui.core.Control[]}
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getExpandedContent expandedContent}.
 * 
 * The content that is displayed in the <code>DynamicPageTitle</code> in expanded state.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getExpandedContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getExpandedHeading expandedHeading}.
 * 
 * The <code>expandedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area
 * and is displayed when the header is in expanded state only.
 * Use this aggregation to display a title (or any other UI5 control that serves
 * as a heading) that has to be present in expanded state only.
 * 
 * <b>Note:</b> In order for <code>expandedHeading</code> to be taken into account,
 * <code>heading</code> has to be empty. Combine <code>expandedHeading</code> with
 * <code>snappedHeading</code> to switch content when the header switches state.
 * 
 * @returns {sap.ui.core.Control}
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getExpandedHeading = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getHeading heading}.
 * 
 * The <code>heading</code> is positioned in the <code>DynamicPageTitle</code> left area
 * and is displayed in both expanded and collapsed (snapped) states of the header.
 * Use this aggregation to display a title (or any other UI5 control that serves
 * as a heading) that has to be present in both expanded and collapsed states of the header.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li><code>heading</code> is mutually exclusive with <code>snappedHeading</code>
 * and <code>expandedHeading</code>. If <code>heading</code> is provided, both
 * <code>snappedHeading</code> and <code>expandedHeading</code> are ignored.
 * <code>heading</code> is useful when the content of <code>snappedHeading</code> and
 * <code>expandedHeading</code> needs to be the same as it replaces them both.</li>
 * <li>If the <code>snappedTitleOnMobile</code> aggregation is set, its content
 * overrides this aggregation when the control is viewed on a phone mobile device and
 * the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getHeading = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.f.DynamicPageTitle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPageTitle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getNavigationActions navigationActions}.
 * 
 * The <code>DynamicPageTitle</code> navigation actions.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>The <code>navigationActions</code> position depends on the control size.
 * If the control size is 1280px or bigger, they are rendered right next to the
 * <code>actions</code>. Otherwise, they are rendered in the top-right area, above the
 * <code>actions</code>. If a large number of elements(buttons) are used, there could
 * be visual degradations as the space for the <code>navigationActions</code> is
 * limited.</li>
 * <li>If the <code>snappedTitleOnMobile</code> aggregation is set, its content
 * overrides this aggregation when the control is viewed on a phone mobile device and
 * the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.m.Button[]}
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getNavigationActions = function() { return new Array(); };

/**
 * Gets current value of property {@link #getPrimaryArea primaryArea}.
 * 
 * Determines which of the <code>DynamicPageTitle</code> areas (Begin, Middle) is primary.
 * 
 * <b>Note:</b> The primary area is shrinking at lower rate, remaining visible as much as it can.
 * 
 * Default value is <code>Begin</code>.
 * @returns {sap.f.DynamicPageTitleArea} Value of property <code>primaryArea</code>
 * @since 1.50
 * @deprecated Since version 1.54. Please use the <code>areaShrinkRatio</code> property instead.
 * The value of <code>areaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format
 * where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a
 * section has the faster it shrinks when the screen size is being reduced.
 * 
 * <code>primaryArea=Begin</code> can be achieved by setting a low number for the Heading area to
 * <code>areaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.
 * 
 * <code>primaryArea=Middle</code> can be achieved by setting a low number for the Content area to
 * <code>areaShrinkRatio</code>, for example <code>1.6:1:1.6</code>.
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getPrimaryArea = function() { return new sap.f.DynamicPageTitleArea(); };

/**
 * Gets content of aggregation {@link #getSnappedContent snappedContent}.
 * 
 * The content that is displayed in the <code>DynamicPageTitle</code> in collapsed (snapped) state.
 * 
 * <b>Note:</b> If the <code>snappedTitleOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getSnappedContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getSnappedHeading snappedHeading}.
 * 
 * The <code>snappedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area
 * and is displayed when the header is in collapsed (snapped) state only.
 * Use this aggregation to display a title (or any other UI5 control that serves
 * as a heading) that has to be present in collapsed state only.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>In order for <code>snappedHeading</code> to be taken into account,
 * <code>heading</code> has to be empty. Combine <code>snappedHeading</code> with
 * <code>expandedHeading</code> to switch content when the header switches state.</li>
 * <li>If the <code>snappedTitleOnMobile</code> aggregation is set, its content
 * overrides this aggregation when the control is viewed on a phone mobile device and
 * the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.ui.core.Control}
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getSnappedHeading = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getSnappedTitleOnMobile snappedTitleOnMobile}.
 * 
 * The only content that is displayed in the <code>DynamicPageTitle</code>
 * when it is viewed on a phone mobile device and the <code>DynamicPageHeader</code>
 * is in collapsed (snapped) state.
 * 
 * Using this aggregation enables you to provide a simple, single-line title that
 * takes less space on the smaller phone screens when the
 * <code>DynamicPageHeader</code> is in its collapsed (snapped) state.
 * 
 * <b>Note:</b> The content set in this aggregation overrides all the other
 * <code>DynamicPageTitle</code> aggregations and is only visible on phone mobile
 * devices in collapsed (snapped) state of the <code>DynamicPageHeader</code>.
 * 
 * @returns {sap.m.Title}
 * @since 1.63
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getSnappedTitleOnMobile = function() { return new sap.m.Title(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getExpandedContent expandedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oExpandedContent The expandedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfExpandedContent = function(oExpandedContent) { return 0; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getNavigationActions navigationActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oNavigationAction The navigationAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfNavigationAction = function(oNavigationAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getSnappedContent snappedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSnappedContent The snappedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfSnappedContent = function(oSnappedContent) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.ui.core.Control}
 *            oAction The action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertAction = function(oAction,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertContent = function(oContent,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a expandedContent into the aggregation {@link #getExpandedContent expandedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oExpandedContent The expandedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the expandedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the expandedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the expandedContent is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertExpandedContent = function(oExpandedContent,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a navigationAction into the aggregation {@link #getNavigationActions navigationActions}.
 * 
 * @param {sap.m.Button}
 *            oNavigationAction The navigationAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the navigationAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the navigationAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the navigationAction is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertNavigationAction = function(oNavigationAction,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a snappedContent into the aggregation {@link #getSnappedContent snappedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oSnappedContent The snappedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the snappedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the snappedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the snappedContent is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertSnappedContent = function(oSnappedContent,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.ui.core.Control} vAction The action to remove or its index or id
 * @returns {sap.ui.core.Control} The removed action or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getExpandedContent expandedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllExpandedContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getNavigationActions navigationActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllNavigationActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getSnappedContent snappedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllSnappedContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes a expandedContent from the aggregation {@link #getExpandedContent expandedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vExpandedContent The expandedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed expandedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeExpandedContent = function(vExpandedContent) { return new sap.ui.core.Control(); };

/**
 * Removes a navigationAction from the aggregation {@link #getNavigationActions navigationActions}.
 * 
 * @param {int | string | sap.m.Button} vNavigationAction The navigationAction to remove or its index or id
 * @returns {sap.m.Button} The removed navigationAction or <code>null</code>
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeNavigationAction = function(vNavigationAction) { return new sap.m.Button(); };

/**
 * Removes a snappedContent from the aggregation {@link #getSnappedContent snappedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vSnappedContent The snappedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed snappedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeSnappedContent = function(vSnappedContent) { return new sap.ui.core.Control(); };

/**
 * Sets the value of the <code>areaShrinkRatio</code> property.
 * 
 * @param {sap.f.DynamicPageTitleShrinkRatio} sAreaShrinkRatio - new value of the <code>areaShrinkRatio</code>
 * @return {sap.f.DynamicPageTitle} <code>this</code> to allow method chaining
 * @public
 * @since 1.54
 * 
 */
sap.f.DynamicPageTitle.prototype.setAreaShrinkRatio = function(sAreaShrinkRatio) { return new sap.f.DynamicPageTitle(); };

/**
 * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Determines the background color of the <code>DynamicPageTitle</code>.
 * 
 * <b>Note:</b> The default value of <code>backgroundDesign</code> property is null.
 * If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>,
 * which depends on the specific theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.m.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.f.DynamicPageTitle(); };

/**
 * Sets the aggregated {@link #getBreadcrumbs breadcrumbs}.
 * @param {sap.m.IBreadcrumbs} oBreadcrumbs The breadcrumbs to set
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setBreadcrumbs = function(oBreadcrumbs) { return new sap.f.DynamicPageTitle(); };

/**
 * Sets the aggregated {@link #getExpandedHeading expandedHeading}.
 * @param {sap.ui.core.Control} oExpandedHeading The expandedHeading to set
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setExpandedHeading = function(oExpandedHeading) { return new sap.f.DynamicPageTitle(); };

/**
 * Sets the aggregated {@link #getHeading heading}.
 * @param {sap.ui.core.Control} oHeading The heading to set
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setHeading = function(oHeading) { return new sap.f.DynamicPageTitle(); };

/**
 * Sets a new value for property {@link #getPrimaryArea primaryArea}.
 * 
 * Determines which of the <code>DynamicPageTitle</code> areas (Begin, Middle) is primary.
 * 
 * <b>Note:</b> The primary area is shrinking at lower rate, remaining visible as much as it can.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Begin</code>.
 * @param {sap.f.DynamicPageTitleArea} sPrimaryArea New value for property <code>primaryArea</code>
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * @deprecated Since version 1.54. Please use the <code>areaShrinkRatio</code> property instead.
 * The value of <code>areaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format
 * where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a
 * section has the faster it shrinks when the screen size is being reduced.
 * 
 * <code>primaryArea=Begin</code> can be achieved by setting a low number for the Heading area to
 * <code>areaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.
 * 
 * <code>primaryArea=Middle</code> can be achieved by setting a low number for the Content area to
 * <code>areaShrinkRatio</code>, for example <code>1.6:1:1.6</code>.
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setPrimaryArea = function(sPrimaryArea) { return new sap.f.DynamicPageTitle(); };

/**
 * Sets the aggregated {@link #getSnappedHeading snappedHeading}.
 * @param {sap.ui.core.Control} oSnappedHeading The snappedHeading to set
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setSnappedHeading = function(oSnappedHeading) { return new sap.f.DynamicPageTitle(); };

/**
 * Sets the aggregated {@link #getSnappedTitleOnMobile snappedTitleOnMobile}.
 * @param {sap.m.Title} oSnappedTitleOnMobile The snappedTitleOnMobile to set
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @since 1.63
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setSnappedTitleOnMobile = function(oSnappedTitleOnMobile) { return new sap.f.DynamicPageTitle(); };


// ---- sap.f.DynamicPageTitleArea --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.DynamicPageTitleArea.toString = function() { return ""; };

// ---- sap.f.DynamicPageTitleShrinkRatio --------------------------------------------------------------------------


// ---- sap.f.FlexibleColumnLayout --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.f.FlexibleColumnLayout</code>.
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
 * <li>{@link #getLayout layout} : sap.f.LayoutType (default: OneColumn)</li>
 * <li>{@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn} : string (default: slide)</li>
 * <li>{@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn} : string (default: slide)</li>
 * <li>{@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn} : string (default: slide)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign (default: Transparent)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBeginColumnPages beginColumnPages} : sap.ui.core.Control[]</li>
 * <li>{@link #getMidColumnPages midColumnPages} : sap.ui.core.Control[]</li>
 * <li>{@link #getEndColumnPages endColumnPages} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialBeginColumnPage initialBeginColumnPage} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * <li>{@link #getInitialMidColumnPage initialMidColumnPage} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * <li>{@link #getInitialEndColumnPage initialEndColumnPage} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:stateChange stateChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beginColumnNavigate beginColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:midColumnNavigate midColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterMidColumnNavigate afterMidColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:endColumnNavigate endColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterEndColumnNavigate afterEndColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Implements the master-detail-detail paradigm by displaying up to three pages in separate columns.
 * 
 * <h3>Overview</h3>
 * 
 * The control is logically similar to {@link sap.m.SplitContainer} with the difference that it capable of handling
 * three columns (referred to as <code>Begin</code>, <code>Mid</code> and <code>End</code>) rather than two
 * (<code>Master</code>, <code>Detail</code>). The width of the three columns is variable.
 * 
 * There are several possible layouts that can be changed either with the control's API, or by the user with the help of layout arrows.
 * 
 * Internally the control makes use of three instances of {@link sap.m.NavContainer}, thus forming the three columns.
 * 
 * <h3>Usage</h3>
 * 
 * Use this control for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
 * The control is flexible in a sense that the application can focus the user's attention on one particular column by making it larger or even fullscreen.
 * 
 * The columns are accessible with the <code>beginColumnPages</code>, <code>midColumnPages</code> and <code>endColumnPages</code> aggregations.
 * 
 * The relative sizes and the visibility of the three columns are determined based on the value of the {@link sap.f.LayoutType layout} property.
 * 
 * Changes to the layout due to user interaction are communicated to the app with the <code>stateChange</code> event.
 * 
 * <ul><b>Notes:</b>
 * <li>To easily implement the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app,
 * you can use the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class.</li>
 * <li>To facilitate the navigation and view loading, you can use the {@link sap.f.routing.Router} </li></ul>
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The control automatically displays the maximum possible number of columns based on the device size and current <code>layout</code>.
 * The app does not need to take into consideration the current device/screen size, but only to add content to the
 * columns and change the value of the <code>layout</code> property.
 * 
 * For detailed information, see {@link sap.f.LayoutType LayoutType} enumeration.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46
 * @see {@link topic:59a0e11712e84a648bb990a1dba76bc7 Flexible Column Layout}
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/flexible-column-layout/ Flexible Column Layout}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout = function(sId,mSettings) {};
/**
 * Fires when navigation between two pages in the <code>Begin</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which had been displayed before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which is now displayed after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which is now displayed after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether was a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this was a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.afterBeginColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>End</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which had been displayed before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which is now displayed after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which is now displayed after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether was a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this was a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.afterEndColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>Mid</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which had been displayed before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which is now displayed after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which is now displayed after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether was a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this was a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.afterMidColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which was displayed before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which will be displayed after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this is a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.beginColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which was displayed before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which will be displayed after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this is a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.endColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which was displayed before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which will be displayed after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this is a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.midColumnNavigate = function(oControlEvent) {  };

/**
 * Fired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once.
 * <br/></br>
 * <ul>The interactions that may lead to a state change are:
 *  <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li>
 *  <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul>
 * <br/><br/>
 * <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.f.LayoutType} oControlEvent.getParameters.layout The value of the <code>layout</code> property
 * @param {int} oControlEvent.getParameters.maxColumnsCount The maximum number of columns that can be displayed at once based on the available screen size and control settings.
 * 
 * <ul>Possible values are:
 * <li>3 for browser size of 1280px or more</li>
 * <li>2 for browser size between 960px and 1280px</li>
 * <li>1 for browser size less than 960px</li></ul>
 * @param {boolean} oControlEvent.getParameters.isNavigationArrow Indicates whether the layout changed as a result of the user clicking a layout arrow
 * @param {boolean} oControlEvent.getParameters.isResize Indicates whether the maximum number of columns that can be displayed at once changed
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.stateChange = function(oControlEvent) {  };

/**
 * Returns a string, representing the relative percentage sizes of the columns for the given layout in the format "begin/mid/end" (f.e. "33/67/0")
 * @param {string} sLayout - the layout
 * @param {boolean} bAsArray - return an array in the format [33, 67, 0] instead of a string "33/67/0"
 * @returns {string|array}
 * @private
 * @ui5-restricted sap.f.FlexibleColumnLayoutSemanticHelper
 * 
 */
sap.f.FlexibleColumnLayout.prototype._getColumnWidthDistributionForLayout = function(sLayout,bAsArray) { return ""; };

/**
 * Returns the layout history object
 * @returns {LayoutHistory}
 * @private
 * @ui5-restricted sap.f.FlexibleColumnLayoutSemanticHelper
 * 
 */
sap.f.FlexibleColumnLayout.prototype._getLayoutHistory = function() { return null; };

/**
 * Adds some beginColumnPage to the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * @param {sap.ui.core.Control}
 *            oBeginColumnPage The beginColumnPage to add; if empty, nothing is inserted
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.addBeginColumnPage = function(oBeginColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Adds some endColumnPage to the aggregation {@link #getEndColumnPages endColumnPages}.
 * @param {sap.ui.core.Control}
 *            oEndColumnPage The endColumnPage to add; if empty, nothing is inserted
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.addEndColumnPage = function(oEndColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Adds some midColumnPage to the aggregation {@link #getMidColumnPages midColumnPages}.
 * @param {sap.ui.core.Control}
 *            oMidColumnPage The midColumnPage to add; if empty, nothing is inserted
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.addMidColumnPage = function(oMidColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Begin</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachAfterBeginColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterEndColumnNavigate afterEndColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>End</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachAfterEndColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterMidColumnNavigate afterMidColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Mid</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachAfterMidColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:beginColumnNavigate beginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachBeginColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:endColumnNavigate endColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachEndColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:midColumnNavigate midColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachMidColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:stateChange stateChange} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once.
 * <br/></br>
 * <ul>The interactions that may lead to a state change are:
 *  <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li>
 *  <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul>
 * <br/><br/>
 * <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachStateChange = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates back to a page in the <code>FlexibleColumnLayout</code>.
 * Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>.
 * 
 * Calling this navigation method, first triggers the (cancelable) navigate event on the SplitContainer,
 * then the beforeHide pseudo event on the source page, beforeFirstShow (if applicable),
 * and beforeShow on the target page. Later, after the transition has completed,
 * the afterShow pseudo event is triggered on the target page and afterHide - on the page, which has been left.
 * The given backData object is available in the beforeFirstShow, beforeShow, and afterShow event objects as data
 * property. The original "data" object from the "to" navigation is also available in these event objects.
 * 
 * @param {string} sPageId
 *         The screen to which is being navigated to. The ID or the control itself can be given.
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation.
 *         The event on the target page will contain this data object as backData property. (the original data from the to() navigation will still be available as data property).
 * 
 *         In scenarios, where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used, for example, when returning from a detail page to transfer any settings done there.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToPage = function(sPageId,oBackData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates back to the initial/top level of Begin column (this is the element aggregated as "initialPage", or the first added element).
 * NOTE: If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToTopBeginColumn = function(oBackData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates back to the initial/top level of End column (this is the element aggregated as "initialPage", or the first added element).
 * NOTE: If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToTopEndColumn = function(oBackData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates back to the initial/top level of Mid column (this is the element aggregated as "initialPage", or the first added element).
 * NOTE: If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToTopMidColumn = function(oBackData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Destroys all the beginColumnPages in the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.destroyBeginColumnPages = function() { return new sap.f.FlexibleColumnLayout(); };

/**
 * Destroys all the endColumnPages in the aggregation {@link #getEndColumnPages endColumnPages}.
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.destroyEndColumnPages = function() { return new sap.f.FlexibleColumnLayout(); };

/**
 * Destroys all the midColumnPages in the aggregation {@link #getMidColumnPages midColumnPages}.
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.destroyMidColumnPages = function() { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachAfterBeginColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterEndColumnNavigate afterEndColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachAfterEndColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterMidColumnNavigate afterMidColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachAfterMidColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:beginColumnNavigate beginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachBeginColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:endColumnNavigate endColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachEndColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:midColumnNavigate midColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachMidColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:stateChange stateChange} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachStateChange = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Creates a new subclass of class sap.f.FlexibleColumnLayout with name <code>sClassName</code>
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
sap.f.FlexibleColumnLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which had been displayed before navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which is now displayed after navigation.
 * @param {string} [mParameters.toId] The ID of the page, which is now displayed after navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether was a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this was a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireAfterBeginColumnNavigate = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Fires event {@link #event:afterEndColumnNavigate afterEndColumnNavigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which had been displayed before navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which is now displayed after navigation.
 * @param {string} [mParameters.toId] The ID of the page, which is now displayed after navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether was a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this was a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireAfterEndColumnNavigate = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Fires event {@link #event:afterMidColumnNavigate afterMidColumnNavigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which had been displayed before navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which is now displayed after navigation.
 * @param {string} [mParameters.toId] The ID of the page, which is now displayed after navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether was a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this was a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireAfterMidColumnNavigate = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Fires event {@link #event:beginColumnNavigate beginColumnNavigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which was displayed before the current navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which will be displayed after the current navigation.
 * @param {string} [mParameters.toId] The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} [mParameters.firstTime] Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this is a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireBeginColumnNavigate = function(mParameters) { return false; };

/**
 * Fires event {@link #event:endColumnNavigate endColumnNavigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which was displayed before the current navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which will be displayed after the current navigation.
 * @param {string} [mParameters.toId] The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} [mParameters.firstTime] Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this is a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireEndColumnNavigate = function(mParameters) { return false; };

/**
 * Fires event {@link #event:midColumnNavigate midColumnNavigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which was displayed before the current navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which will be displayed after the current navigation.
 * @param {string} [mParameters.toId] The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} [mParameters.firstTime] Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this is a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireMidColumnNavigate = function(mParameters) { return false; };

/**
 * Fires event {@link #event:stateChange stateChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.f.LayoutType} [mParameters.layout] The value of the <code>layout</code> property
 * @param {int} [mParameters.maxColumnsCount] The maximum number of columns that can be displayed at once based on the available screen size and control settings.
 * 
 * <ul>Possible values are:
 * <li>3 for browser size of 1280px or more</li>
 * <li>2 for browser size between 960px and 1280px</li>
 * <li>1 for browser size less than 960px</li></ul>
 * @param {boolean} [mParameters.isNavigationArrow] Indicates whether the layout changed as a result of the user clicking a layout arrow
 * @param {boolean} [mParameters.isResize] Indicates whether the maximum number of columns that can be displayed at once changed
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireStateChange = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the content. The visualization of the different options depends on the used theme.
 * 
 * Default value is <code>Transparent</code>.
 * @returns {sap.m.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.54
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getBackgroundDesign = function() { return new sap.m.BackgroundDesign(); };

/**
 * Gets content of aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Begin</code> column.
 * 
 * These should be any control with page semantics.
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#event:beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getBeginColumnPages = function() { return new Array(); };

/**
 * Returns the currently displayed Begin column page.
 * 
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.ui.core.Control} The UI5 control in the Begin column
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getCurrentBeginColumnPage = function() { return new sap.ui.core.Control(); };

/**
 * Returns the currently displayed End column page.
 * 
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.ui.core.Control} The UI5 control in the End column
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getCurrentEndColumnPage = function() { return new sap.ui.core.Control(); };

/**
 * Returns the currently displayed Mid column page.
 * 
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.ui.core.Control} The UI5 control in the Mid column
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getCurrentMidColumnPage = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * Default value is <code>slide</code>.
 * @returns {string} Value of property <code>defaultTransitionNameBeginColumn</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getDefaultTransitionNameBeginColumn = function() { return ""; };

/**
 * Gets current value of property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * Default value is <code>slide</code>.
 * @returns {string} Value of property <code>defaultTransitionNameEndColumn</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getDefaultTransitionNameEndColumn = function() { return ""; };

/**
 * Gets current value of property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * Default value is <code>slide</code>.
 * @returns {string} Value of property <code>defaultTransitionNameMidColumn</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getDefaultTransitionNameMidColumn = function() { return ""; };

/**
 * Gets content of aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>End</code> column.
 * 
 * These should be any control with page semantics.
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#event:beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getEndColumnPages = function() { return new Array(); };

/**
 * ID of the element which is the current target of the association {@link #getInitialBeginColumnPage initialBeginColumnPage}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getInitialBeginColumnPage = function() { return new sap.ui.core.ID(); };

/**
 * ID of the element which is the current target of the association {@link #getInitialEndColumnPage initialEndColumnPage}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getInitialEndColumnPage = function() { return new sap.ui.core.ID(); };

/**
 * ID of the element which is the current target of the association {@link #getInitialMidColumnPage initialMidColumnPage}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getInitialMidColumnPage = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getLayout layout}.
 * 
 * Determines the layout of the control - number of visible columns and their relative sizes.
 * 
 * For more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.
 * 
 * Default value is <code>OneColumn</code>.
 * @returns {sap.f.LayoutType} Value of property <code>layout</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getLayout = function() { return new sap.f.LayoutType(); };

/**
 * Returns the maximum number of columns that can be displayed at once based on the control width
 * @returns {number} The maximum number of columns
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getMaxColumnsCount = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.f.FlexibleColumnLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.FlexibleColumnLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Mid</code> column.
 * 
 * These should be any control with page semantics.
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#event:beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getMidColumnPages = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oBeginColumnPage The beginColumnPage whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.indexOfBeginColumnPage = function(oBeginColumnPage) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getEndColumnPages endColumnPages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oEndColumnPage The endColumnPage whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.indexOfEndColumnPage = function(oEndColumnPage) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMidColumnPages midColumnPages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMidColumnPage The midColumnPage whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.indexOfMidColumnPage = function(oMidColumnPage) { return 0; };

/**
 * Inserts a beginColumnPage into the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * @param {sap.ui.core.Control}
 *            oBeginColumnPage The beginColumnPage to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the beginColumnPage should be inserted at; for
 *              a negative value of <code>iIndex</code>, the beginColumnPage is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the beginColumnPage is inserted at
 *              the last position
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.insertBeginColumnPage = function(oBeginColumnPage,iIndex) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Inserts a endColumnPage into the aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * @param {sap.ui.core.Control}
 *            oEndColumnPage The endColumnPage to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the endColumnPage should be inserted at; for
 *              a negative value of <code>iIndex</code>, the endColumnPage is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the endColumnPage is inserted at
 *              the last position
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.insertEndColumnPage = function(oEndColumnPage,iIndex) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Inserts a midColumnPage into the aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * @param {sap.ui.core.Control}
 *            oMidColumnPage The midColumnPage to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the midColumnPage should be inserted at; for
 *              a negative value of <code>iIndex</code>, the midColumnPage is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the midColumnPage is inserted at
 *              the last position
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.insertMidColumnPage = function(oMidColumnPage,iIndex) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Removes all the controls from the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeAllBeginColumnPages = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeAllEndColumnPages = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeAllMidColumnPages = function() { return new Array(); };

/**
 * Removes a beginColumnPage from the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * @param {int | string | sap.ui.core.Control} vBeginColumnPage The beginColumnPage to remove or its index or id
 * @returns {sap.ui.core.Control} The removed beginColumnPage or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeBeginColumnPage = function(vBeginColumnPage) { return new sap.ui.core.Control(); };

/**
 * Removes a endColumnPage from the aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * @param {int | string | sap.ui.core.Control} vEndColumnPage The endColumnPage to remove or its index or id
 * @returns {sap.ui.core.Control} The removed endColumnPage or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeEndColumnPage = function(vEndColumnPage) { return new sap.ui.core.Control(); };

/**
 * Removes a midColumnPage from the aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * @param {int | string | sap.ui.core.Control} vMidColumnPage The midColumnPage to remove or its index or id
 * @returns {sap.ui.core.Control} The removed midColumnPage or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeMidColumnPage = function(vMidColumnPage) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the content. The visualization of the different options depends on the used theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Transparent</code>.
 * @param {sap.m.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.54
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets a new value for property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>slide</code>.
 * @param {string} sDefaultTransitionNameBeginColumn New value for property <code>defaultTransitionNameBeginColumn</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setDefaultTransitionNameBeginColumn = function(sDefaultTransitionNameBeginColumn) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets a new value for property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>slide</code>.
 * @param {string} sDefaultTransitionNameEndColumn New value for property <code>defaultTransitionNameEndColumn</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setDefaultTransitionNameEndColumn = function(sDefaultTransitionNameEndColumn) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets a new value for property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>slide</code>.
 * @param {string} sDefaultTransitionNameMidColumn New value for property <code>defaultTransitionNameMidColumn</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setDefaultTransitionNameMidColumn = function(sDefaultTransitionNameMidColumn) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets the associated {@link #getInitialBeginColumnPage initialBeginColumnPage}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialBeginColumnPage ID of an element which becomes the new target of this initialBeginColumnPage association; alternatively, an element instance may be given
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setInitialBeginColumnPage = function(oInitialBeginColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets the associated {@link #getInitialEndColumnPage initialEndColumnPage}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialEndColumnPage ID of an element which becomes the new target of this initialEndColumnPage association; alternatively, an element instance may be given
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setInitialEndColumnPage = function(oInitialEndColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets the associated {@link #getInitialMidColumnPage initialMidColumnPage}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialMidColumnPage ID of an element which becomes the new target of this initialMidColumnPage association; alternatively, an element instance may be given
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setInitialMidColumnPage = function(oInitialMidColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets a new value for property {@link #getLayout layout}.
 * 
 * Determines the layout of the control - number of visible columns and their relative sizes.
 * 
 * For more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>OneColumn</code>.
 * @param {sap.f.LayoutType} sLayout New value for property <code>layout</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setLayout = function(sLayout) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to the given page inside the FlexibleColumnLayout.
 * Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>.
 * 
 * @param {string} sPageId
 *         The screen to which we are navigating to. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the "data" parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: It depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.to = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to a given Begin column page.
 * 
 * @param {string} sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.toBeginColumnPage = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to a given End column page.
 * 
 * @param {string} sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.toEndColumnPage = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to a given Mid column page.
 * 
 * @param {string} sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.f.FlexibleColumnLayout} The <code>sap.f.FlexibleColumnLayout</code> instance
 * 
 */
sap.f.FlexibleColumnLayout.prototype.toMidColumnPage = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };


// ---- sap.f.FlexibleColumnLayoutSemanticHelper --------------------------------------------------------------------------

/**
 * Constructor for an sap.f.FlexibleColumnLayoutSemanticHelper.
 * 
 * @class
 * Helper class, facilitating the implementation of the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app.
 * 
 * <b>Note:</b> Using this class is not mandatory in order to build an app with <code>sap.f.FlexibleColumnLayout</code>, but exists for convenience only.
 * 
 * <ul>The usage of <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> revolves around two main methods:
 * <li><code>getCurrentUIState</code>Suggests which action buttons to show in each <code>sap.f.FlexibleColumnLayout</code> column,
 * based on the current control state (number and visibility of columns, layout, etc..)</li>
 * <li><code>getNextUIState</code>Suggests which <code>layout</code> to use when navigating to another view level (e.g. from one view to two views).</li></ul>
 * 
 * Sample usage of the class:
 * 
 * <pre>
 * <code>
 *  var helper = sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor(myFlexibleColumnLayout);
 *  helper.getCurrentUIState();
 *  helper.getNextUIState(2);
 *  helper.getNextUIState(0);
 * </code>
 * </pre>
 * 
 * Calling <code>getCurrentUIState()</code> will return information which action buttons (Close, FullScreen, ExitFullScreen)
 * must be currently shown in which column, according to UX guidelines, as well as to what layout clicking them should lead.
 * 
 * Calling <code>getNextUIState(2)</code> will return information about the expected layout and action buttons if the
 * application should display three views (master-detail-detail), based on the current state.
 * 
 * Similarly, calling <code>getNextUIState(0)</code> will return information about the expected layout and action buttons
 * if the application should display the initial view only (master), based on the current state.
 * 
 * For more information, see {@link sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState} and {@link sap.f.FlexibleColumnLayoutSemanticHelper#getNextUIState}
 * 
 * @version 1.71.0
 * @param {sap.f.FlexibleColumnLayout} oFlexibleColumnLayout
 * The <code>sap.f.FlexibleColumnLayout</code> object whose state will be manipulated.
 * 
 * @param {object} oSettings Determines the rules that will be used by the helper.
 * 
 * @param {sap.f.LayoutType} oSettings.defaultTwoColumnLayoutType
 * Determines what two-column layout type will be suggested by default:
 * <code>sap.f.LayoutType.TwoColumnsBeginExpanded</code> (default) or <code>sap.f.LayoutType.TwoColumnsMidExpanded</code>.
 * 
 * @param {sap.f.LayoutType} oSettings.defaultThreeColumnLayoutType
 * Determines what three-column layout type will be suggested by default:
 * <code>sap.f.LayoutType.ThreeColumnsMidExpanded</code> (default) or <code>sap.f.LayoutType.ThreeColumnsEndExpanded</code>.
 * 
 * @param {int} oSettings.maxColumnsCount
 * Determines the maximum number of columns that will be displayed side by side.
 * 
 * <ul>Possible values:
 * 
 * <li>Value of <code>1</code> only single-column layouts will be suggested.</li>
 * 
 * <li>Value of <code>2</code> Up to 2-column layouts will be suggested.</li>
 * 
 * <li>Value of <code>3</code> (default) - Up to 3-column layouts will be suggested.</li></ul>
 * 
 * @param {int} oSettings.initialColumnsCount
 * Determines whether a single-column or a 2-column layout will be suggested
 * for logical level 0.
 * 
 * <ul>Possible values:
 * 
 * <li>Value of <code>1</code> (default) - A single-column layout will be suggested
 * for logical level 0.</li>
 * 
 * <li>Value of <code>2</code> - A 2-column layout will be suggested for logical level 0.</li></ul>
 * 
 * @param {string} oSettings.mode
 * <b>Deprecated as of version 1.50</b>, use <code>maxColumnsCount</code> param
 * instead.
 * 
 * Determines the suggested layout types: <code>Normal</code> (3-column layouts),
 * <code>MasterDetail</code> (2-column layouts for the first two pages, all other
 * pages will open in fullscreen), and <code>SingleColumn</code> (one page at a
 * time only).
 * 
 * @public
 * @since 1.46.0
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper = function(oFlexibleColumnLayout,oSettings) {};
/**
 *  Returns an object, describing the current state of the control and the expected action buttons for each column.
 * 
 *  <ul>The returned object has the following structure:
 * 	<li>layout - the value of the <code>layout</code> property</li>
 * 	<li>maxColumnsCount - the maximum number of columns that can be displayed at once based on the control width. See {@link sap.f.FlexibleColumnLayout#getMaxColumnsCount}</li>
 * 	<li>columnsSizes -  an object with fields <code>beginColumn, midColumn, endColumn</code>, representing the relative percentage sizes of the three columns as integers</li>
 * 	<li>columnsVisibility -  an object with fields <code>beginColumn, midColumn, endColumn</code>, representing the visibility of the three columns</li>
 * 	<li>isFullScreen - <code>true</code> if only one column is visible at the moment, <code>false</code> otherwise
 * 	<b>Note:</b> This may be due to small screen size (phone) or due to a layout, for which a single column takes up the whole width</li>
 * 	<li>isLogicallyFullScreen - <code>true</code> if the current <code>layout</code> is one of the following: <code>sap.f.LayoutType.OneColumn, sap.f.LayoutType.MidColumnFullScreen, sap.f.LayoutType.EndColumnFullScreen</code>, <code>false</code> otherwise
 * 	<b>Note:</b> While <code>isFullScreen</code> can be <code>true</code> for any layout, due to small screen size, <code>isLogicallyFullScreen</code> will only be <code>true</code> for the layout values, listed above.</li>
 * 	<li>actionButtonsInfo - an object with fields <code>midColumn, endColumn</code>, each containing an object, telling whether action buttons should be shown in the <code>mid</code> and <code>end</code> columns, and what value of the <code>layout</code> property should be set upon clicking these buttons.
 * 	Each of these objects has the following fields: <code>closeColumn, fullScreen, exitFullScreen</code>. If <code>null</code>, then the respective action button should not be shown, otherwise provides the value of <code>layout</code> property for the action button.</li></ul>
 * 
 * 	Example value:
 * 
 *  <pre>
 *  <code>
 *  {
 * 	   "layout":"ThreeColumnsMidExpanded",
 * 	   "maxColumnsCount":3,
 * 	   "columnsSizes":{
 * 		  "beginColumn":25,
 * 		  "midColumn":50,
 * 		  "endColumn":25
 * 	   },
 * 	   "columnsVisibility":{
 * 		  "beginColumn":true,
 * 		  "midColumn":true,
 * 		  "endColumn":true
 * 	   },
 * 	   "isFullScreen":false,
 * 	   "isLogicallyFullScreen":false,
 * 	   "actionButtonsInfo":{
 * 		  "midColumn":{
 * 			 "fullScreen":null,
 * 			 "exitFullScreen":null,
 * 			 "closeColumn":null
 * 		  },
 * 		  "endColumn":{
 * 			 "fullScreen":"EndColumnFullScreen",
 * 			 "exitFullScreen":null,
 * 			 "closeColumn":"TwoColumnsBeginExpanded"
 * 		  }
 * 	   }
 * 	}
 *  </code>
 *  </pre>
 * @public
 * @returns {Object} The object describing the current UI state
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.prototype.getCurrentUIState = function() { return null; };

/**
 * Returns the default layout types for the different numbers of columns.
 * 
 * <ul>The returned object has the following fields:
 * <li>defaultLayoutType - the layout that will be suggested by default when only 1 column needs to be shown</li>
 * <li>defaultTwoColumnLayoutType - the layout that will be suggested by default when 2 columns have to be shown side by side</li>
 * <li>defaultThreeColumnLayoutType - the layout that will be suggested by default when 3 columns have to be shown side by side</li></ul>
 * 
 * @public
 * @returns {Object} The object describing the default layout types for the different numbers of columns
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.prototype.getDefaultLayouts = function() { return null; };

/**
 * Returns an instance of the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class for a given <code>sap.f.FlexibleColumnLayout</code> object.
 * 
 * @param {sap.f.FlexibleColumnLayout} oFlexibleColumnLayout The <code>sap.f.FlexibleColumnLayout</code> object to get a semantic helper instance for
 * @param {object} [oSettings] An optional settings object to be used when creating the instance.
 * <b>Note:</b> will be considered only for the first <code>getInstanceFor</code> call for the given <code>sap.f.FlexibleColumnLayout</code> object.
 * 
 * @public
 * @static
 * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} The <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> instance
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor = function(oFlexibleColumnLayout,oSettings) { return new sap.f.FlexibleColumnLayoutSemanticHelper(); };

/**
 * Returns an object, describing the state that the control will have after navigating to a different view level.
 * 
 * About the format of return value, see: {@link sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState}
 * 
 * @param {int} iNextLevel - the view level that should be represented. 0 means initial (master only), 1 - master-detail,
 * 2 - master-detail-detail, 3 and above - subsequent views
 * 
 * @public
 * @returns {Object} The object describing the next UI state
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.prototype.getNextUIState = function(iNextLevel) { return null; };


// ---- sap.f.GridContainer --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.f.GridContainer</code>.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li>
 * <li>{@link #getSnapToRow snapToRow} : boolean (default: false)</li>
 * <li>{@link #getAllowDenseFill allowDenseFill} : boolean (default: false)</li>
 * <li>{@link #getInlineBlockLayout inlineBlockLayout} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getLayout layout} : sap.f.GridContainerSettings</li>
 * <li>{@link #getLayoutXS layoutXS} : sap.f.GridContainerSettings</li>
 * <li>{@link #getLayoutS layoutS} : sap.f.GridContainerSettings</li>
 * <li>{@link #getLayoutM layoutM} : sap.f.GridContainerSettings</li>
 * <li>{@link #getLayoutL layoutL} : sap.f.GridContainerSettings</li>
 * <li>{@link #getLayoutXL layoutXL} : sap.f.GridContainerSettings</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:layoutChange layoutChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * A layout container control used for aligning items with various sizes in a simple grid.
 * 
 * <h3>Overview</h3>
 * 
 * The control is used to align tiles, cards and other controls in configuration, such as a home page or a dashboard.
 * It represents a grid layout with specific row and column sizes, in which the items can take any number of rows and columns.
 * 
 * The number of columns and rows each item takes can be configured with the use of the <code>{@link sap.f.GridContainerItemLayoutData}</code>.
 * 
 * All rows have the same height and all columns have the same width. Their sizes can be configured with the use of the <code>layout</code> aggregation and <code>{@link sap.f.GridContainerSettings}</code>.
 * 
 * <h3>Usage</h3>
 * 
 * <i>When to use</i>
 * <ul>
 * <li>For aligning home page and dashboard items like Tiles and Cards in a simple grid system with equally sized rows and columns.</li>
 * </ul>
 * 
 * <i>When not to use</i>
 * <ul>
 * <li>If a more complex layout grid system, where columns and rows may vary in size, is needed.</li>
 * </ul>
 * 
 * <h3>Example:</h3>
 * <pre>
 * &lt;f:GridContainer&gt;
 * 	&lt;f:layout&gt;
 * 		&lt;f:GridContainerSettings rowSize=&quot;5rem&quot; columnSize=&quot;5rem&quot; gap=&quot;1rem&quot; /&gt;
 * 	&lt;/f:layout&gt;
 * 	&lt;f:layoutS&gt;
 * 		&lt;f:GridContainerSettings rowSize=&quot;4rem&quot; columnSize=&quot;4rem&quot; gap=&quot;0.5rem&quot; /&gt;
 * 	&lt;/f:layoutS&gt;
 * 	&lt;f:items&gt;
 * 		&lt;GenericTile header=&quot;Sales Fulfillment&quot;&gt;
 * 			&lt;layoutData&gt;
 * 				&lt;f:GridContainerItemLayoutData rows=&quot;2&quot; columns=&quot;2&quot; /&gt;
 * 			&lt;/layoutData&gt;
 * 		&lt;/GenericTile&gt;
 * 		&lt;w:Card manifest=&quot;url-to-manifest&quot;&gt;
 * 			&lt;w:layoutData&gt;
 * 				&lt;f:GridContainerItemLayoutData rows=&quot;6&quot; columns=&quot;3&quot; /&gt;
 * 			&lt;/w:layoutData&gt;
 * 		&lt;/w:Card&gt;
 * 		&lt;Panel&gt;
 * 			&lt;layoutData&gt;
 * 				&lt;f:GridContainerItemLayoutData columns=&quot;4&quot; /&gt;
 * 			&lt;/layoutData&gt;
 * 			&lt;Text text=&quot;Sales information&quot; /&gt;
 * 		&lt;/Panel&gt;
 * 	&lt;/f:items&gt;
 * &lt;/f:GridContainer&gt;
 * </pre>
 * 
 * <h3>Drag and drop:</h3>
 * Drag and drop is enabled for the <code>GridContainer</code> with enhanced visualization and interaction, better suited for grid items. This is configured by using the <code>{@link sap.f.dnd.GridDropInfo}</code>.
 * 
 * Similar to the <code>{@link sap.ui.core.dnd.DropInfo}</code>, <code>{@link sap.f.dnd.GridDropInfo}</code> has to be added to the <code>dragDropConfig</code> aggregation, by using <code>{@link sap.ui.core.Element#addDragDropConfig}</code>.
 * 
 * Both <code>{@link sap.ui.core.dnd.DropInfo}</code> and <code>{@link sap.f.dnd.GridDropInfo}</code> can be used to configure drag and drop.
 * The difference is that the <code>{@link sap.f.dnd.GridDropInfo}</code> will provide a drop indicator, which mimics the size of the dragged item and shows the potential drop position inside the grid.
 * 
 * @see {@link topic:cca5ee5d63ca44c89318f8496a58f9f2 Grid Container}
 * @see {@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
 * @see {@link topic:5b46b03f024542ba802d99d67bc1a3f4 Cards}
 * @see {@link sap.f.dnd.GridDropInfo}
 * @version 1.71.0
 * 
 * @extends sap.ui.core.Control
 * 
 * @since 1.65
 * @public
 * @constructor
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.GridContainer = function(sId,mSettings) {};
/**
 * Fired when the currently active GridSettings change.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.layout The name of the newly active layout.
 * @public
 * 
 */
sap.f.GridContainer.prototype.layoutChange = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.core.Control}
 *            oItem The item to add; if empty, nothing is inserted
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.addItem = function(oItem) { return new sap.f.GridContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:layoutChange layoutChange} event of this <code>sap.f.GridContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.GridContainer</code> itself.
 * 
 * Fired when the currently active GridSettings change.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.GridContainer</code> itself
 * 
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.GridContainer.prototype.attachLayoutChange = function(oData,fnFunction,oListener) { return new sap.f.GridContainer(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.destroyItems = function() { return new sap.f.GridContainer(); };

/**
 * Destroys the layout in the aggregation {@link #getLayout layout}.
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.destroyLayout = function() { return new sap.f.GridContainer(); };

/**
 * Destroys the layoutL in the aggregation {@link #getLayoutL layoutL}.
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.destroyLayoutL = function() { return new sap.f.GridContainer(); };

/**
 * Destroys the layoutM in the aggregation {@link #getLayoutM layoutM}.
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.destroyLayoutM = function() { return new sap.f.GridContainer(); };

/**
 * Destroys the layoutS in the aggregation {@link #getLayoutS layoutS}.
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.destroyLayoutS = function() { return new sap.f.GridContainer(); };

/**
 * Destroys the layoutXL in the aggregation {@link #getLayoutXL layoutXL}.
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.destroyLayoutXL = function() { return new sap.f.GridContainer(); };

/**
 * Destroys the layoutXS in the aggregation {@link #getLayoutXS layoutXS}.
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @experimental As of version 1.71 Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.GridContainer.prototype.destroyLayoutXS = function() { return new sap.f.GridContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:layoutChange layoutChange} event of this <code>sap.f.GridContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.detachLayoutChange = function(fnFunction,oListener) { return new sap.f.GridContainer(); };

/**
 * Creates a new subclass of class sap.f.GridContainer with name <code>sClassName</code>
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
sap.f.GridContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:layoutChange layoutChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.layout] The name of the newly active layout.
 * 
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.GridContainer.prototype.fireLayoutChange = function(mParameters) { return new sap.f.GridContainer(); };

/**
 * Gets the <code>GridContainerSettings</code> for the current layout breakpoint.
 * @public
 * @returns {sap.f.GridContainerSettings} The settings for the current layout
 * 
 */
sap.f.GridContainer.prototype.getActiveLayoutSettings = function() { return new sap.f.GridContainerSettings(); };

/**
 * Gets current value of property {@link #getAllowDenseFill allowDenseFill}.
 * 
 * Increases the density when arranging the items. Smaller items will take up all of the available space, ignoring their order.
 * 
 * <b>Note:</b> The order of the items is ignored. An item which is normally at the bottom, can appear on top.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>allowDenseFill</code>
 * 
 * @experimental As of version 1.66 Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.GridContainer.prototype.getAllowDenseFill = function() { return false; };

/**
 * Gets current value of property {@link #getContainerQuery containerQuery}.
 * 
 * If set to <code>true</code> the current range (large, medium or small) is defined by the size of the
 * container surrounding the <code>GridContainer</code>, instead of the device screen size (media Query).
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>containerQuery</code>
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getContainerQuery = function() { return false; };

/**
 * Gets current value of property {@link #getInlineBlockLayout inlineBlockLayout}.
 * 
 * Makes the grid items act like an inline-block elements. They will be arranged in rows with height equal to the highest item in the row.
 * 
 * <b>Note:</b> If set to <code>true</code> the properties <code>rowSize</code> for grid layout, and <code>minRows</code> and <code>rows</code> per item will be ignored.
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>inlineBlockLayout</code>
 * 
 * @experimental As of version 1.66 Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.GridContainer.prototype.getInlineBlockLayout = function() { return false; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The items contained by the control.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getItems = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getLayout layout}.
 * 
 * The sap.f.GridContainerSettings applied if no settings are provided for a specific size.
 * 
 * If no layout is given, a default layout will be used. See the default values for <code>sap.f.GridContainerSettings</code>.
 * 
 * <b>Note:</b> It is not possible to reuse the same instance of <code>GridContainerSettings</code> for several layouts. New instance has to be created for each of them. This is caused by the fact that one object can exist in only a single aggregation.
 * 
 * @returns {sap.f.GridContainerSettings}
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getLayout = function() { return new sap.f.GridContainerSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutL layoutL}.
 * 
 * The sap.f.GridContainerSettings applied for size "L". Range: 1023px - 1439px.
 * 
 * @returns {sap.f.GridContainerSettings}
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getLayoutL = function() { return new sap.f.GridContainerSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutM layoutM}.
 * 
 * The sap.f.GridContainerSettings applied for size "M". Range: 600px - 1023px.
 * 
 * @returns {sap.f.GridContainerSettings}
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getLayoutM = function() { return new sap.f.GridContainerSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutS layoutS}.
 * 
 * The sap.f.GridContainerSettings applied for size "S". Range: 375px - 599px.
 * 
 * @returns {sap.f.GridContainerSettings}
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getLayoutS = function() { return new sap.f.GridContainerSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutXL layoutXL}.
 * 
 * The sap.f.GridContainerSettings applied for size "XL". Range: from 1440px.
 * 
 * @returns {sap.f.GridContainerSettings}
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getLayoutXL = function() { return new sap.f.GridContainerSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutXS layoutXS}.
 * 
 * The sap.f.GridContainerSettings applied for size "XS". Range: up to 374px.
 * 
 * @returns {sap.f.GridContainerSettings}
 * 
 * @experimental As of version 1.71 Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.GridContainer.prototype.getLayoutXS = function() { return new sap.f.GridContainerSettings(); };

/**
 * Returns a metadata object for class sap.f.GridContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.GridContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSnapToRow snapToRow}.
 * 
 * Should the items stretch to fill the rows that they occupy, or not.
 * 
 * If set to <code>true</code> the items will stretch.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>snapToRow</code>
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getSnapToRow = function() { return false; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Defines the width of the control.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts an item into the aggregation named <code>items</code>.
 * 
 * @param {sap.ui.core.Item} oItem The item to be inserted; if empty, nothing is inserted.
 * @param {int} iIndex The <code>0</code>-based index the item should be inserted at; for
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the item is inserted at the last position.
 * @returns {sap.f.GridContainer} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.f.GridContainer.prototype.insertItem = function(oItem,iIndex) { return new sap.f.GridContainer(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * 
 * @param {int | string | sap.ui.core.Item} vItem The item to remove or its index or ID.
 * @returns {sap.ui.core.Control} The removed item or null.
 * @public
 * 
 */
sap.f.GridContainer.prototype.removeItem = function(vItem) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getAllowDenseFill allowDenseFill}.
 * 
 * Increases the density when arranging the items. Smaller items will take up all of the available space, ignoring their order.
 * 
 * <b>Note:</b> The order of the items is ignored. An item which is normally at the bottom, can appear on top.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAllowDenseFill New value for property <code>allowDenseFill</code>
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @experimental As of version 1.66 Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.GridContainer.prototype.setAllowDenseFill = function(bAllowDenseFill) { return new sap.f.GridContainer(); };

/**
 * Sets a new value for property {@link #getContainerQuery containerQuery}.
 * 
 * If set to <code>true</code> the current range (large, medium or small) is defined by the size of the
 * container surrounding the <code>GridContainer</code>, instead of the device screen size (media Query).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bContainerQuery New value for property <code>containerQuery</code>
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setContainerQuery = function(bContainerQuery) { return new sap.f.GridContainer(); };

/**
 * Sets a new value for property {@link #getInlineBlockLayout inlineBlockLayout}.
 * 
 * Makes the grid items act like an inline-block elements. They will be arranged in rows with height equal to the highest item in the row.
 * 
 * <b>Note:</b> If set to <code>true</code> the properties <code>rowSize</code> for grid layout, and <code>minRows</code> and <code>rows</code> per item will be ignored.
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bInlineBlockLayout New value for property <code>inlineBlockLayout</code>
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @experimental As of version 1.66 Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.GridContainer.prototype.setInlineBlockLayout = function(bInlineBlockLayout) { return new sap.f.GridContainer(); };

/**
 * Sets the aggregated {@link #getLayout layout}.
 * @param {sap.f.GridContainerSettings} oLayout The layout to set
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setLayout = function(oLayout) { return new sap.f.GridContainer(); };

/**
 * Sets the aggregated {@link #getLayoutL layoutL}.
 * @param {sap.f.GridContainerSettings} oLayoutL The layoutL to set
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setLayoutL = function(oLayoutL) { return new sap.f.GridContainer(); };

/**
 * Sets the aggregated {@link #getLayoutM layoutM}.
 * @param {sap.f.GridContainerSettings} oLayoutM The layoutM to set
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setLayoutM = function(oLayoutM) { return new sap.f.GridContainer(); };

/**
 * Sets the aggregated {@link #getLayoutS layoutS}.
 * @param {sap.f.GridContainerSettings} oLayoutS The layoutS to set
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setLayoutS = function(oLayoutS) { return new sap.f.GridContainer(); };

/**
 * Sets the aggregated {@link #getLayoutXL layoutXL}.
 * @param {sap.f.GridContainerSettings} oLayoutXL The layoutXL to set
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setLayoutXL = function(oLayoutXL) { return new sap.f.GridContainer(); };

/**
 * Sets the aggregated {@link #getLayoutXS layoutXS}.
 * @param {sap.f.GridContainerSettings} oLayoutXS The layoutXS to set
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @experimental As of version 1.71 Disclaimer: this property is in a beta state - incompatible API changes may be done before its official public release. Use at your own discretion.
 * @public
 * 
 */
sap.f.GridContainer.prototype.setLayoutXS = function(oLayoutXS) { return new sap.f.GridContainer(); };

/**
 * Sets a new value for property {@link #getSnapToRow snapToRow}.
 * 
 * Should the items stretch to fill the rows that they occupy, or not.
 * 
 * If set to <code>true</code> the items will stretch.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSnapToRow New value for property <code>snapToRow</code>
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setSnapToRow = function(bSnapToRow) { return new sap.f.GridContainer(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Defines the width of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.f.GridContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainer.prototype.setWidth = function(sWidth) { return new sap.f.GridContainer(); };


// ---- sap.f.GridContainerItemLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.f.GridContainerItemLayoutData</code>.
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
 * <li>{@link #getColumns columns} : int (default: 1)</li>
 * <li>{@link #getMinRows minRows} : int</li>
 * <li>{@link #getRows rows} : int</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new element, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new element.
 * 
 * @class
 * Holds layout data for an item inside a <code>sap.f.GridContainer</code>.
 * 
 * @see {@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
 * @version 1.71.0
 * 
 * @extends sap.ui.core.LayoutData
 * 
 * @experimental Since 1.65 This class is experimental. The API may change.
 * @since 1.65
 * @public
 * @constructor
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.GridContainerItemLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.GridContainerItemLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.GridContainerItemLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColumns columns}.
 * 
 * Specifies the number of columns, which the item should take
 * 
 * <b>Note:</b> Make sure that the item does not have more columns than the total columns in the grid.
 * Use {@link sap.f.GridContainer#attachLayoutChange} or a resize listener to handle when columns count is changed for the grid.
 * If item has more columns at some point, they will be automatically reduced to the total grid columns. This is done to prevent broken layout (grid blowout) that affects all items.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>columns</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerItemLayoutData.prototype.getColumns = function() { return 0; };

/**
 * Returns a metadata object for class sap.f.GridContainerItemLayoutData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.GridContainerItemLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinRows minRows}.
 * 
 * Specifies the minimum number of rows, which the item should take.
 * 
 * @returns {int} Value of property <code>minRows</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerItemLayoutData.prototype.getMinRows = function() { return 0; };

/**
 * Gets current value of property {@link #getRows rows}.
 * 
 * Specifies the number of rows, which the item should take.
 * 
 * @returns {int} Value of property <code>rows</code>
 * 
 * @experimental Since 1.65 this property may soon be removed, use minRows instead
 * @public
 * 
 */
sap.f.GridContainerItemLayoutData.prototype.getRows = function() { return 0; };

/**
 * Sets a new value for property {@link #getColumns columns}.
 * 
 * Specifies the number of columns, which the item should take
 * 
 * <b>Note:</b> Make sure that the item does not have more columns than the total columns in the grid.
 * Use {@link sap.f.GridContainer#attachLayoutChange} or a resize listener to handle when columns count is changed for the grid.
 * If item has more columns at some point, they will be automatically reduced to the total grid columns. This is done to prevent broken layout (grid blowout) that affects all items.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iColumns New value for property <code>columns</code>
 * @returns {sap.f.GridContainerItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerItemLayoutData.prototype.setColumns = function(iColumns) { return new sap.f.GridContainerItemLayoutData(); };

/**
 * Sets a new value for property {@link #getMinRows minRows}.
 * 
 * Specifies the minimum number of rows, which the item should take.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iMinRows New value for property <code>minRows</code>
 * @returns {sap.f.GridContainerItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerItemLayoutData.prototype.setMinRows = function(iMinRows) { return new sap.f.GridContainerItemLayoutData(); };

/**
 * Sets a new value for property {@link #getRows rows}.
 * 
 * Specifies the number of rows, which the item should take.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iRows New value for property <code>rows</code>
 * @returns {sap.f.GridContainerItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @experimental Since 1.65 this property may soon be removed, use minRows instead
 * @public
 * 
 */
sap.f.GridContainerItemLayoutData.prototype.setRows = function(iRows) { return new sap.f.GridContainerItemLayoutData(); };


// ---- sap.f.GridContainerSettings --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.f.GridContainerSettings</code>.
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
 * <li>{@link #getColumns columns} : int</li>
 * <li>{@link #getColumnSize columnSize} : sap.ui.core.CSSSize (default: 80px)</li>
 * <li>{@link #getMinColumnSize minColumnSize} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxColumnSize maxColumnSize} : sap.ui.core.CSSSize</li>
 * <li>{@link #getRowSize rowSize} : sap.ui.core.CSSSize (default: 80px)</li>
 * <li>{@link #getGap gap} : sap.ui.core.CSSSize (default: 16px)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Holds a set of settings that define the dimensions of <code>sap.f.GridContainer</code>.
 * 
 * Can be used to define the sizes of columns and rows for different screen sizes, by using the <code>layout</code> aggregations of <code>sap.f.GridContainer</code>.
 * @version 1.71.0
 * 
 * @extends sap.ui.base.ManagedObject
 * 
 * @see {@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
 * @version 1.71.0
 * 
 * @experimental Since 1.65 This class is experimental. The API may change.
 * @since 1.65
 * @public
 * @constructor
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.GridContainerSettings = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.GridContainerSettings with name <code>sClassName</code>
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
sap.f.GridContainerSettings.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColumns columns}.
 * 
 * How many columns to have on a row.
 * 
 * If not defined, <code>sap.f.GridContainer</code> will position as many columns as they can fit in the container.
 * 
 * @returns {int} Value of property <code>columns</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.getColumns = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnSize columnSize}.
 * 
 * The width of the columns.
 * 
 * <b>Note:</b> Values different than single size in 'px' or 'rem' are not supported for the polyfill for IE.
 * 
 * Default value is <code>80px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>columnSize</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.getColumnSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getGap gap}.
 * 
 * The size of the gap between columns and rows.
 * 
 * <b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.
 * 
 * Default value is <code>16px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>gap</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.getGap = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getMaxColumnSize maxColumnSize}.
 * 
 * Sets the maximum width of the columns. Setting this together with <code>minColumnSize</code> will allow the columns to breath between those two values.
 * 
 * <b>Note:</b> Will not work in combination with <code>columnSize</code>.
 * 
 * <b>Note:</b> Not supported for the polyfill for IE.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>maxColumnSize</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.getMaxColumnSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.f.GridContainerSettings.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.GridContainerSettings.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinColumnSize minColumnSize}.
 * 
 * Sets the minimum width of the columns. Setting this together with <code>maxColumnSize</code> will allow the columns to breath between those two values.
 * 
 * <b>Note:</b> Will not work in combination with <code>columnSize</code>.
 * 
 * <b>Note:</b> Not supported for the polyfill for IE.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>minColumnSize</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.getMinColumnSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getRowSize rowSize}.
 * 
 * The height of the rows.
 * 
 * <b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.
 * 
 * Default value is <code>80px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>rowSize</code>
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.getRowSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getColumns columns}.
 * 
 * How many columns to have on a row.
 * 
 * If not defined, <code>sap.f.GridContainer</code> will position as many columns as they can fit in the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iColumns New value for property <code>columns</code>
 * @returns {sap.f.GridContainerSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.setColumns = function(iColumns) { return new sap.f.GridContainerSettings(); };

/**
 * Sets a new value for property {@link #getColumnSize columnSize}.
 * 
 * The width of the columns.
 * 
 * <b>Note:</b> Values different than single size in 'px' or 'rem' are not supported for the polyfill for IE.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>80px</code>.
 * @param {sap.ui.core.CSSSize} sColumnSize New value for property <code>columnSize</code>
 * @returns {sap.f.GridContainerSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.setColumnSize = function(sColumnSize) { return new sap.f.GridContainerSettings(); };

/**
 * Sets a new value for property {@link #getGap gap}.
 * 
 * The size of the gap between columns and rows.
 * 
 * <b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>16px</code>.
 * @param {sap.ui.core.CSSSize} sGap New value for property <code>gap</code>
 * @returns {sap.f.GridContainerSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.setGap = function(sGap) { return new sap.f.GridContainerSettings(); };

/**
 * Sets a new value for property {@link #getMaxColumnSize maxColumnSize}.
 * 
 * Sets the maximum width of the columns. Setting this together with <code>minColumnSize</code> will allow the columns to breath between those two values.
 * 
 * <b>Note:</b> Will not work in combination with <code>columnSize</code>.
 * 
 * <b>Note:</b> Not supported for the polyfill for IE.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sMaxColumnSize New value for property <code>maxColumnSize</code>
 * @returns {sap.f.GridContainerSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.setMaxColumnSize = function(sMaxColumnSize) { return new sap.f.GridContainerSettings(); };

/**
 * Sets a new value for property {@link #getMinColumnSize minColumnSize}.
 * 
 * Sets the minimum width of the columns. Setting this together with <code>maxColumnSize</code> will allow the columns to breath between those two values.
 * 
 * <b>Note:</b> Will not work in combination with <code>columnSize</code>.
 * 
 * <b>Note:</b> Not supported for the polyfill for IE.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sMinColumnSize New value for property <code>minColumnSize</code>
 * @returns {sap.f.GridContainerSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.setMinColumnSize = function(sMinColumnSize) { return new sap.f.GridContainerSettings(); };

/**
 * Sets a new value for property {@link #getRowSize rowSize}.
 * 
 * The height of the rows.
 * 
 * <b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>80px</code>.
 * @param {sap.ui.core.CSSSize} sRowSize New value for property <code>rowSize</code>
 * @returns {sap.f.GridContainerSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridContainerSettings.prototype.setRowSize = function(sRowSize) { return new sap.f.GridContainerSettings(); };


// ---- sap.f.GridList --------------------------------------------------------------------------

/**
 * Constructor for a new GridList.
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
 * <li>{@link #getCustomLayout customLayout} : sap.ui.layout.cssgrid.GridLayoutBase</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListBase#constructor sap.m.ListBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A list-based control with grid layout capabilities.
 * 
 * <h3>Overview</h3>
 * 
 * The control is based on {@link sap.m.ListBase} and adds the flexibility to configure different grid layouts. The layout used is based
 * on the CSS display grid and the control has a default configuration.
 * 
 * With <code>customLayout</code> aggregation it is possible to use:
 * <ul>
 * <li>Predefined simple grid layouts such as {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout}</li>
 * <li>Flexible grid layouts, such as {@link sap.ui.layout.cssgrid.GridBasicLayout GridBasicLayout} or {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} which reveal the native-browser CSS display grid APIs. For more information, see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}</li>
 * </ul>
 * 
 * Every item can override its size by specifying the number of columns and/or rows it will take in the grid.
 * This is done using {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}.
 * 
 * For best visualization, items of type {@link sap.f.GridListItem sap.f.GridListItem} should be used inside the <code>items</code> aggregation.
 * 
 * <h3>Usage</h3>
 * 
 * For general cases, use the default grid configuration of the <code>GridList</code>.
 * For Box case (equal sized items), use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout}
 * For Grids which need different configurations based on available width, use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout}
 * To set a specific position to an item or define its dimensions in the grid, pass <code>layoutData</code> of type {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}
 * 
 * <i>When to use</i>
 * <ul>
 * <li>If {@link sap.m.ListBase} features are required and the items must be positioned in a grid layout</li>
 * </ul>
 * 
 * <i>When not to use</i>
 * <ul>
 * <li>If a list layout is required, use {@link sap.m.List} instead.
 * <li>If only the layout is required, use {@link sap.ui.layout.cssgrid.CSSGrid} instead.
 * </ul>
 * 
 * <h3>Drag and drop:</h3>
 * Drag and drop is enabled for the <code>GridList</code> with enhanced visualization and interaction, better suited for grid items. This is configured by using the <code>{@link sap.f.dnd.GridDropInfo}</code>.
 * 
 * Similar to the <code>{@link sap.ui.core.dnd.DropInfo}</code>, <code>{@link sap.f.dnd.GridDropInfo}</code> has to be added to the <code>dragDropConfig</code> aggregation, by using <code>{@link sap.ui.core.Element#addDragDropConfig}</code>.
 * 
 * Both <code>{@link sap.ui.core.dnd.DropInfo}</code> and <code>{@link sap.f.dnd.GridDropInfo}</code> can be used to configure drag and drop.
 * The difference is that the <code>{@link sap.f.dnd.GridDropInfo}</code> will provide a drop indicator, which mimics the size of the dragged item and shows the potential drop position inside the grid.
 * 
 * <h3>Current Limitations</h3>
 * <ul>
 * <li>For Microsoft Internet Explorer some layouts are not supported, due to browser specifics.</li>
 * <li>For Microsoft Edge 15 and older versions some layouts are not supported, due to browser specifics.</li>
 * </ul>
 * 
 * @see {@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}
 * @version 1.71.0
 * 
 * @extends sap.m.ListBase
 * @implements sap.ui.layout.cssgrid.IGridConfigurable
 * 
 * @since 1.60
 * @constructor
 * @public
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.GridList = function(sId,mSettings) {};
/**
 * Implements IGridConfigurable interface.
 * 
 * @returns {sap.ui.layout.cssgrid.GridLayoutBase} The grid layout
 * @protected
 * 
 */
sap.f.GridList.prototype.getGridLayoutConfiguration = undefined

/**
 * Destroys the customLayout in the aggregation {@link #getCustomLayout customLayout}.
 * @returns {sap.f.GridList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridList.prototype.destroyCustomLayout = function() { return new sap.f.GridList(); };

/**
 * Creates a new subclass of class sap.f.GridList with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.GridList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getCustomLayout customLayout}.
 * 
 * Defines a custom grid layout
 * 
 * @returns {sap.ui.layout.cssgrid.GridLayoutBase}
 * 
 * @public
 * 
 */
sap.f.GridList.prototype.getCustomLayout = function() { return new sap.ui.layout.cssgrid.GridLayoutBase(); };

/**
 * Implements IGridConfigurable interface.
 * 
 * @returns {HTMLElement[]} An array with the DOM elements
 * @protected
 * 
 */
sap.f.GridList.prototype.getGridDomRefs = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.f.GridList.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.GridList.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets the aggregated {@link #getCustomLayout customLayout}.
 * @param {sap.ui.layout.cssgrid.GridLayoutBase} oCustomLayout The customLayout to set
 * @returns {sap.f.GridList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridList.prototype.setCustomLayout = function(oCustomLayout) { return new sap.f.GridList(); };


// ---- sap.f.GridListItem --------------------------------------------------------------------------

/**
 * Constructor for a new GridListItem.
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
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * 
 * The <code>GridListItem</code> with a content aggregation can be used to display all kind of information. It is used in {@link sap.f.GridList sap.f.GridList}.
 * <b>Note:</b> Even though the content aggregation can be used for any control, complex responsive layout controls, such as <code>Table, Form</code>, etc, should not be aggregated as content.
 * 
 * @extends sap.m.ListItemBase
 * @version 1.71.0
 * 
 * @since 1.70
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.GridListItem = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.f.GridListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.addContent = function(oContent) { return new sap.f.GridListItem(); };

/**
 * Binds aggregation {@link #getContent content} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.f.GridListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.bindContent = function(oBindingInfo) { return new sap.f.GridListItem(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.GridListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.destroyContent = function() { return new sap.f.GridListItem(); };

/**
 * Creates a new subclass of class sap.f.GridListItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.GridListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content of this list item
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.f.GridListItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.GridListItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.f.GridListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.insertContent = function(oContent,iIndex) { return new sap.f.GridListItem(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Unbinds aggregation {@link #getContent content} from model data.
 * @returns {sap.f.GridListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.GridListItem.prototype.unbindContent = function() { return new sap.f.GridListItem(); };


// ---- sap.f.ICard --------------------------------------------------------------------------

/**
 * The function is used to allow for a common content renderer between different implementations of the {@link sap.f.ICard} interface.
 * 
 * @returns {sap.ui.core.Control} The content of the card
 * @since 1.62
 * @public
 * 
 */
sap.f.ICard.getCardContent = function() { return new sap.ui.core.Control(); };

/**
 * The function is used to allow for a common header renderer between different implementations of the {@link sap.f.ICard} interface.
 * 
 * @returns {sap.f.cards.IHeader} The header of the card
 * @since 1.62
 * @public
 * 
 */
sap.f.ICard.getCardHeader = function() { return new sap.f.cards.IHeader(); };

/**
 * Allows for a common header renderer between different implementations of the {@link sap.f.ICard} interface.
 * 
 * @returns {sap.f.cards.HeaderPosition} The position of the header of the card
 * @since 1.65
 * @public
 * 
 */
sap.f.ICard.getCardHeaderPosition = function() { return new sap.f.cards.HeaderPosition(); };


// ---- sap.f.IDynamicPageStickyContent --------------------------------------------------------------------------


// ---- sap.f.IShellBar --------------------------------------------------------------------------


// ---- sap.f.LayoutType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.LayoutType.toString = function() { return ""; };

// ---- sap.f.routing.Router --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.f.routing.Router</code>.
 * 
 * 
 * @class
 * The <code>sap.f.routing.Router</code> class is intended to be used with
 * <code>{@link sap.f.FlexibleColumnLayout}</code> as a root control.
 * 
 * The difference to the <code>{@link sap.ui.core.routing.Router}</code> are the
 * <code>viewLevel</code>, <code>transition</code>, and <code>transitionParameters</code>
 * properties that you can specify in every Route or Target created by this router.
 * 
 * Additionally, the <code>layout</code> property can be specified in every Route,
 * in which case it is applied to the root control.
 * 
 * See <code>{@link sap.ui.core.routing.Router}</code> for the constructor arguments.
 * 
 * @extends sap.ui.core.routing.Router
 * 
 * @param {object|object[]} [oRoutes] may contain many Route configurations as {@link sap.ui.core.routing.Route#constructor}.
 * @param {string|string[]} [oConfig.bypassed.target] One or multiple names of targets that will be displayed, if no route of the router is matched.
 * 
 * @param {sap.ui.core.UIComponent} [oOwner] the Component of all the views that will be created by this Router,
 * will get forwarded to the {@link sap.ui.core.routing.Views#constructor}.
 * If you are using the componentMetadata to define your routes you should skip this parameter.
 * 
 * @param {object} [oTargetsConfig]
 * the target configuration, see {@link sap.f.routing.Targets#constructor} documentation (the options object).
 * 
 * @public
 * @since 1.46
 * 
 */
sap.f.routing.Router = function(oRoutes,oOwner,oTargetsConfig) {};
/**
 * Creates a new subclass of class sap.f.routing.Router with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.routing.Router.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.routing.Router.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.routing.Router.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.routing.Router.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the <code>TargetHandler</code> instance.
 * 
 * @return {sap.f.routing.TargetHandler} The <code>TargetHandler</code> instance
 * @public
 * 
 */
sap.f.routing.Router.prototype.getTargetHandler = function() { return new sap.f.routing.TargetHandler(); };


// ---- sap.f.routing.TargetHandler --------------------------------------------------------------------------

/**
 * Constructor for a new <code>TargetHandler</code>.
 * 
 * 
 * @class
 * Used for closing dialogs and showing transitions in <code>NavContainers</code> when
 * targets are displayed.
 * 
 * <b>Note:</b> You should not create an own instance of this class. It is created
 * when using <code>{@link sap.f.routing.Router}</code> or <code>{@link sap.f.routing.Targets}</code>.
 * You may use the <code>{@link #setCloseDialogs}</code> function to specify if dialogs should be
 * closed on displaying other views.
 * 
 * @param {boolean} bCloseDialogs Closes all open dialogs before navigating, if set to <code>true</code> (default).
 * If set to <code>false</code>, it just navigates without closing dialogs.
 * @public
 * @since 1.46
 * 
 */
sap.f.routing.TargetHandler = function(bCloseDialogs) {};
/**
 * Creates a new subclass of class sap.f.routing.TargetHandler with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.routing.TargetHandler.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets if a navigation should close dialogs.
 * 
 * @public
 * @returns {boolean} A flag indication if dialogs will be closed
 * 
 */
sap.f.routing.TargetHandler.prototype.getCloseDialogs = function() { return false; };

/**
 * Returns a metadata object for class sap.f.routing.TargetHandler.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.routing.TargetHandler.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets if a navigation should close dialogs.
 * 
 * @param {boolean} bCloseDialogs Close dialogs if <code>true</code>
 * @public
 * @returns {sap.f.routing.TargetHandler} For chaining
 * 
 */
sap.f.routing.TargetHandler.prototype.setCloseDialogs = function(bCloseDialogs) { return new sap.f.routing.TargetHandler(); };


// ---- sap.f.routing.Targets --------------------------------------------------------------------------

/**
 * Constructor for a new <code>Targets</code> class.
 * 
 * 
 * @class
 * Provides a convenient way for placing views into the correct containers of your app.
 * 
 * The <code>sap.f</code> extension of <code>Targets</code> also handles the triggering
 * of page navigation when the target control is an <code>{@link sap.f.FlexibleColumnLayout}</code>.
 * Other controls are also allowed, but the extra parameters <code>viewLevel</code>,
 * <code>transition</code>, and <code>transitionParameters</code> are ignored and it behaves as
 * <code>{@link sap.ui.core.routing.Targets}</code>.
 * 
 * When a target is displayed, dialogs are being closed. To change this, use
 * <code>{@link #getTargetHandler}</code> and {@link sap.f.routing.TargetHandler#setCloseDialogs}.
 * 
 * @extends sap.ui.core.routing.Targets
 * @param {object} oOptions
 * @param {sap.ui.core.routing.Views} oOptions.views The views instance will create the
 * views of all the targets defined, so if 2 targets have the same viewName, the same
 * instance of the view will be displayed.
 * @param {object} [oOptions.config] This config allows all the values oOptions.targets.anyName allows,
 * these will be the default values for properties used in the target.
 * 
 * For example, if you are only using xmlViews in your app you can specify viewType="XML"
 * so you don't have to repeat this in every target.
 * 
 * If a target specifies viewType="JS", the JS will be stronger than the XML here is an example.
 * 
 * <pre>
 * <code>
 * {
 *     config: {
 *         viewType : "XML"
 *     }
 *     targets : {
 *         xmlTarget : {
 *             ...
 *         },
 *         jsTarget : {
 *             viewType : "JS"
 *             ...
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * Then the effective config that will be used looks like this:
 * <pre>
 * <code>
 * {
 *     xmlTarget : {
 *         // coming from the defaults
 *         viewType : "XML"
 *         ...
 *     },
 *     jsTarget : {
 *        // XML is overwritten by the "JS" of the targets property
 *        viewType : "JS"
 *       ...
 *     }
 * }
 * </code>
 * </pre>
 * 
 * @param {string} [oOptions.config.rootView]
 * The ID of the <code>rootView</code>.
 * 
 * This should be the ID of the view that contains the control with the <code>controlId</code>
 * since the control will be retrieved by calling the {@link sap.ui.core.mvc.View#byId}
 * function of the rootView.
 * 
 * If you are using a component and add the routing.targets, <b>do not set this parameter</b>,
 * since the component will set the rootView to the view created by the
 * {@link sap.ui.core.UIComponent#createContent} function.
 * 
 * If you specify the "parent" property of a target, the control will not be searched
 * in the root view but in the view created by the parent (see parent documentation).
 * 
 * @param {boolean} [oOptions.config.async=false] Whether the views which are created through
 * this <code>Targets</code> are loaded asynchronously. This option can be set only when the
 * <code>Targets</code> is used standalone without the involvement of a Router.
 * Otherwise, the async option is inherited from the Router.
 * @param {object} oOptions.targets One or multiple targets in a map.
 * @param {object} oOptions.targets.anyName A new target, the key severs as a name.
 * 
 * Example:
 * <pre>
 * <code>
 * {
 *     targets: {
 *         welcome: {
 *             viewName: "Welcome",
 *             viewType: "XML",
 *             ....
 *             // Other target parameters
 *         },
 *         goodbye: {
 *             viewName: "Bye",
 *             viewType: "JS",
 *             ....
 *             // Other target parameters
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * 
 * This creates two targets named 'welcome' and 'goodbye'. You can display both of them
 * or one of them using the <code>{@link #display}</code> function.
 * 
 * @param {string} oOptions.targets.anyName.viewName The name of a view that will be created.
 * To place the view into a Control use the <code>controlAggregation</code> and
 * <code>controlId</code>. Views are only created once per <code>viewName</code>.
 * <pre>
 * <code>
 * {
 *     targets: {
 *         // If display("masterWelcome") is called, the master view will be placed in the 'MasterPages' of a control with the id splitContainter
 *         masterWelcome: {
 *             viewName: "Welcome",
 *             controlId: "splitContainer",
 *             controlAggregation: "masterPages"
 *         },
 *         // If display("detailWelcome") is called after the masterWelcome, the view will be removed from the master pages and added to the detail pages, since the same instance is used. Also the controls inside of the view will have the same state.
 *         detailWelcome: {
 *             // same view here, that's why the same instance is used
 *             viewName: "Welcome",
 *             controlId: "splitContainer",
 *             controlAggregation: "detailPages"
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * 
 * If you want to have a second instance of the welcome view you can use the following:
 * 
 * <pre>
 * <code>
 * // Some code you execute before you display the target named 'detailWelcome':
 * var oView = sap.ui.view(({ viewName : "Welcome", type : sap.ui.core.mvc.ViewType.XML});
 * oTargets.getViews().setView("WelcomeWithAlias", oView)
 * 
 * {
 *     targets: {
 *         // If display("masterWelcome") is called, the master viewName will be placed in the 'MasterPages' of a control with the id splitContainter
 *         masterWelcome: {
 *             viewName: "Welcome",
 *             controlId: "splitContainer",
 *             controlAggregation: "masterPages"
 *         },
 *         // If display("detailWelcome") is called after the masterWelcome, a second instance with an own controller instance will be added in the detail pages.
 *         detailWelcome: {
 *             // same viewName here, that's why the same instance is used
 *             viewName: "WelcomeWithAlias",
 *             controlId: "splitContainer",
 *             controlAggregation: "detailPages"
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * 
 * 
 * @param {string} [oOptions.targets.anyName.viewType]
 * The type of the view that is going to be created. These are the supported types: <code>{@link sap.ui.core.mvc.ViewType}</code>.
 * 
 * You always have to provide a <code>viewType</code> except if you are using <code>{@link sap.ui.core.routing.Views#setView}</code>.
 * 
 * @param {string} [oOptions.targets.anyName.viewPath]
 * A prefix that is prepended in front of the <code>viewName</code>.
 * 
 * <b>Example:</b> <code>viewName</code> is set to "myView" and <code>viewPath</code> is set to "myApp" - the created viewName will be "myApp.myView".
 * 
 * @param {string} [oOptions.targets.anyName.viewId] The ID of the created view.
 * This is is prefixed with the ID of the component set to the views instance provided in <code>oOptions.views</code>.
 * For details, see <code>{@link sap.ui.core.routing.Views#getView}</code>.
 * 
 * @param {string} [oOptions.targets.anyName.targetParent]
 * The ID of the parent of the <code>controlId</code>.
 * 
 * This should be the ID of the view that contains your <code>controlId</code>
 * since the target control is retrieved by calling the <code>{@link sap.ui.core.mvc.View#byId}</code>
 * function of the <code>targetParent</code>. By default, this is the view created by a component,
 * so you do not have to provide this parameter.
 * If you are using children, the view created by the parent of the child is taken.
 * You only need to specify this, if you are not using a <code>Targets</code> instance created by a component
 * and you should give the ID of root view of your app to this property.
 * 
 * @param {string} [oOptions.targets.anyName.controlId] The ID of the control where you want to place the view created by this target.
 * The view of the target will be put into this container Control, using the controlAggregation property. You have to specify both properties or the target will not be able to place itself.
 * An example for containers are {@link sap.ui.ux3.Shell} with the aggregation 'content' or a {@link sap.m.NavContainer} with the aggregation 'pages'.
 * 
 * @param {string} [oOptions.targets.anyName.controlAggregation] The name of an aggregation of the <code>controlId</code>, that contains views.
 * For example, an <code>{@link sap.m.NavContainer}</code> has a <code>pages</code> aggregation and an <code>{@link sap.ui.ux3.Shell}</code> it has a <code>content</code> aggregation.
 * 
 * @param {boolean} [oOptions.targets.anyName.clearControlAggregation] Defines a boolean that can be passed to specify if the aggregation should be cleared
 * - all items will be removed - before adding the View to it.
 * When using a {@link sap.ui.ux3.Shell} this should be true. For a {@link sap.m.NavContainer} it should be false. When you use the {@link sap.f.routing.Router} the default will be false.
 * 
 * @param {string} [oOptions.targets.anyName.parent] A reference to another target, using the name of the target.
 * If you display a target that has a parent, the parent will also be displayed.
 * Also the control you specify with the controlId parameter, will be searched inside of the view of the parent not in the rootView, provided in the config.
 * The control will be searched using the byId function of a view. When it is not found, the global id is checked.
 * 
 * The main usecase for the parent property is placing a view inside a smaller container of a view, which is also created by targets.
 * This is useful for lazy loading views, only if the user really navigates to this part of your application.
 * 
 * <b>Example:</b>
 * Our aim is to lazy load a tab of an IconTabBar (a control that displays a view initially and when a user clicks on it the view changes).
 * It's a perfect candidate to lazy load something inside of it.
 * 
 * <b>Example app structure:</b>
 * 
 * We have a <code>rootView</code> that is returned by the <code>createContent</code> function of our <code>UIComponent</code>.
 * This view contains an <code>sap.m.App</code> control with the ID 'myApp'
 * <pre>
 * <code>
 * &lt;View xmlns="sap.m"&gt;
 *     &lt;App id="myApp"/&gt;
 * &lt;/View&gt;
 * </code>
 * </pre>
 * an xml view called 'Detail'
 * <pre>
 * <code>
 * &lt;View xmlns="sap.m"&gt;
 *     &lt;IconTabBar&gt;
 *         &lt;items&gt;
 *             &lt;IconTabFilter&gt;
 *                 &lt;!-- content of our first tab --&gt;
 *             &lt;IconTabFilter&gt;
 *             &lt;IconTabFilter id="mySecondTab"&gt;
 *                 &lt;!-- nothing here, since we will lazy load this one with a target --&gt;
 *             &lt;IconTabFilter&gt;
 *         &lt;/items&gt;
 *     &lt;/IconTabBar&gt;
 * &lt;/View&gt;
 * </code>
 * </pre>
 * and a view called 'SecondTabContent', this one contains our content we want to have lazy loaded.
 * Now we need to create our <code>Targets</code> instance with a config matching our app:
 * <pre>
 * <code>
 *     new Targets({
 *         //Creates our views except for root, we created this one before - when using a component you
 *         views: new Views(),
 *         config: {
 *             // all of our views have that type
 *             viewType: 'XML',
 *             // a reference to the app control in the rootView created by our UIComponent
 *             controlId: 'myApp',
 *             // An app has a pages aggregation where the views need to be put into
 *             controlAggregation: 'pages'
 *         },
 *         targets: {
 *             detail: {
 *                 viewName: 'Detail'
 *             },
 *             secondTabContent: {
 *                 // A reference to the detail target defined above
 *                 parent: 'detail',
 *                 // A reference to the second Tab container in the Detail view. Here the target does not look in the rootView, it looks in the Parent view (Detail).
 *                 controlId: 'mySecondTab',
 *                 // An IconTabFilter has an aggregation called content so we need to overwrite the pages set in the config as default.
 *                 controlAggregation: 'content',
 *                 // A view containing the content
 *                 viewName: 'SecondTabContent'
 *             }
 *         }
 *     });
 * </code>
 * </pre>
 * 
 * Now, if we call <code> oTargets.display("secondTabContent") </code>, 2 views will be created: Detail and SecondTabContent.
 * The 'Detail' view will be put into the pages aggregation of the App. And afterwards the 'SecondTabContent' view will be put into the content Aggregation of the second IconTabFilter.
 * So a parent will always be created before the target referencing it.
 * 
 * @param {int} [oOptions.targets.anyName.viewLevel]
 * If you are having an application that has a logical order of views (eg: a create account process, first provide user data, then review and confirm them).
 * You always want to show a backwards transition if a navigation from the confirm to the userData page takes place.
 * Therefore you may use the viewLevel. The viewLevel has to be an integer. The user data page should have a lower number than the confirm page.
 * These levels should represent the user process of your application and they do not have to match the container structure of your Targets.
 * If the user navigates between views with the same viewLevel, a forward transition is taken. If you pass a direction into the display function, the viewLevel will be ignored.
 * 
 * <b>Example:</b>
 * 
 * <pre>
 * <code>
 *     {
 *         targets: {
 *             startPage: {
 *                 viewLevel: 0
 *                 // more properties
 *             },
 *             userData: {
 *                 viewLevel: 1
 *                 // more properties
 *             },
 *             confirmRegistration: {
 *                 viewLevel: 2
 *                 // more properties
 *             },
 *             settings: {
 *                 //no view level here
 *             }
 *         }
 *     }
 * </code>
 * </pre>
 * 
 * Currently the 'userData' target is displayed.
 * <ul>
 *     <li>
 *         If we navigate to 'startPage' the navContainer will show a backwards navigation, since the viewLevel is lower.
 *     </li>
 *     <li>
 *         If we navigate to 'userData' the navContainer will show a forwards navigation, since the viewLevel is higher.
 *     </li>
 *     <li>
 *         If we navigate to 'settings' the navContainer will show a forwards navigation, since the viewLevel is not defined and cannot be compared.
 *     </li>
 * </ul>
 * 
 * @param {string} [oOptions.targets.anyName.transition] Defines which transition of the {@link sap.m.NavContainer} is applied when navigating. If it is not defined, the <code>NavContainer</code> take its default transition.
 * @param {string} [oOptions.targets.anyName.transitionParameters] Defines the <code>transitionParameters</code> of the <code>{@link sap.m.NavContainer}</code>
 * 
 * @since 1.46
 * @public
 * 
 */
sap.f.routing.Targets = function(oOptions) {};
/**
 * Creates a new subclass of class sap.f.routing.Targets with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.routing.Targets.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.routing.Targets.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.routing.Targets.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.routing.Targets.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the <code>TargetHandler</code> instance.
 * 
 * @return {sap.f.routing.TargetHandler} The <code>TargetHandler</code> instance
 * @public
 * 
 */
sap.f.routing.Targets.prototype.getTargetHandler = function() { return new sap.f.routing.TargetHandler(); };


// ---- sap.f.SearchManager --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SearchManager</code>.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEnableSuggestions enableSuggestions} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSuggestionItems suggestionItems} : sap.m.SuggestionItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Defines specific properties of the search that are applied to <code>sap.f.ShellBar</code>.
 * 
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.67
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.SearchManager = function(sId,mSettings) {};
/**
 * Fired when the value of the search field is changed by the user, for example
 * at each key press.
 * 
 * <b>Note:</b> Do not invalidate or re-render a focused search field, especially
 * during the <code>liveChange</code> event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue Current search string.
 * @public
 * 
 */
sap.f.SearchManager.prototype.liveChange = function(oControlEvent) {  };

/**
 * Fired when the user triggers a search.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query string.
 * @param {boolean} oControlEvent.getParameters.clearButtonPressed Indicates if the user pressed the clear icon.
 * @public
 * 
 */
sap.f.SearchManager.prototype.search = function(oControlEvent) {  };

/**
 * Fired when the search field is initially focused or its value is changed by the user.
 * This event means that suggestion data should be updated, in case if suggestions are used.
 * Use the value parameter to create new suggestions for it.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.suggestValue Current search string of the search field.
 * @public
 * 
 */
sap.f.SearchManager.prototype.suggest = function(oControlEvent) {  };

/**
 * Adds some suggestionItem to the aggregation {@link #getSuggestionItems suggestionItems}.
 * @param {sap.m.SuggestionItem}
 *            oSuggestionItem The suggestionItem to add; if empty, nothing is inserted
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.addSuggestionItem = function(oSuggestionItem) { return new sap.f.SearchManager(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:liveChange liveChange} event of this <code>sap.f.SearchManager</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.SearchManager</code> itself.
 * 
 * Fired when the value of the search field is changed by the user, for example
 * at each key press.
 * 
 * <b>Note:</b> Do not invalidate or re-render a focused search field, especially
 * during the <code>liveChange</code> event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.SearchManager</code> itself
 * 
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.SearchManager.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.f.SearchManager(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.f.SearchManager</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.SearchManager</code> itself.
 * 
 * Fired when the user triggers a search.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.SearchManager</code> itself
 * 
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.SearchManager.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.f.SearchManager(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:suggest suggest} event of this <code>sap.f.SearchManager</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.SearchManager</code> itself.
 * 
 * Fired when the search field is initially focused or its value is changed by the user.
 * This event means that suggestion data should be updated, in case if suggestions are used.
 * Use the value parameter to create new suggestions for it.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.SearchManager</code> itself
 * 
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.SearchManager.prototype.attachSuggest = function(oData,fnFunction,oListener) { return new sap.f.SearchManager(); };

/**
 * Binds property {@link #getValue value} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.bindValue = function(oBindingInfo) { return new sap.f.SearchManager(); };

/**
 * Destroys all the suggestionItems in the aggregation {@link #getSuggestionItems suggestionItems}.
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.destroySuggestionItems = function() { return new sap.f.SearchManager(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:liveChange liveChange} event of this <code>sap.f.SearchManager</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.f.SearchManager(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.f.SearchManager</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.detachSearch = function(fnFunction,oListener) { return new sap.f.SearchManager(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:suggest suggest} event of this <code>sap.f.SearchManager</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.detachSuggest = function(fnFunction,oListener) { return new sap.f.SearchManager(); };

/**
 * Creates a new subclass of class sap.f.SearchManager with name <code>sClassName</code>
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
sap.f.SearchManager.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:liveChange liveChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.newValue] Current search string.
 * 
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.SearchManager.prototype.fireLiveChange = function(mParameters) { return new sap.f.SearchManager(); };

/**
 * Fires event {@link #event:search search} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.query] The search query string.
 * @param {boolean} [mParameters.clearButtonPressed] Indicates if the user pressed the clear icon.
 * 
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.SearchManager.prototype.fireSearch = function(mParameters) { return new sap.f.SearchManager(); };

/**
 * Fires event {@link #event:suggest suggest} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.suggestValue] Current search string of the search field.
 * 
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.SearchManager.prototype.fireSuggest = function(mParameters) { return new sap.f.SearchManager(); };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * Determines whether the control is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.getEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getEnableSuggestions enableSuggestions}.
 * 
 * If true, a <code>suggest</code> event is fired when user types in the input and when the input is focused.
 * On a phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableSuggestions</code>
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.getEnableSuggestions = function() { return false; };

/**
 * Gets current value of property {@link #getMaxLength maxLength}.
 * 
 * Determines the maximum number of characters. Value '0' means the feature is switched off.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>maxLength</code>
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.getMaxLength = function() { return 0; };

/**
 * Returns a metadata object for class sap.f.SearchManager.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.SearchManager.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPlaceholder placeholder}.
 * 
 * Defines the text that is displayed when no value is available.
 * The default placeholder text is the word "Search" in the current local
 * language (if supported) or in English.
 * 
 * @returns {string} Value of property <code>placeholder</code>
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.getPlaceholder = function() { return ""; };

/**
 * Gets content of aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * <code>SuggestionItems</code> are the items which are displayed in the suggestions list.
 * The following properties can be used:
 * <ul>
 * <li><code>key</code> - it is not displayed and may be used as internal technical field</li>
 * <li><code>text</code> - it is displayed as normal suggestion text</li>
 * <li><code>icon</code></li>
 * <li><code>description</code> - additional text that may be used to visually display search item type or category</li>
 * </ul>
 * 
 * @returns {sap.m.SuggestionItem[]}
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.getSuggestionItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * Defines the input value.
 * 
 * @returns {string} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.getValue = function() { return ""; };

/**
 * Checks for the provided <code>sap.m.SuggestionItem</code> in the aggregation {@link #getSuggestionItems suggestionItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.SuggestionItem}
 *           oSuggestionItem The suggestionItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.indexOfSuggestionItem = function(oSuggestionItem) { return 0; };

/**
 * Inserts a suggestionItem into the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * @param {sap.m.SuggestionItem}
 *            oSuggestionItem The suggestionItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the suggestionItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the suggestionItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the suggestionItem is inserted at
 *              the last position
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.insertSuggestionItem = function(oSuggestionItem,iIndex) { return new sap.f.SearchManager(); };

/**
 * Removes all the controls from the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.SuggestionItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.removeAllSuggestionItems = function() { return new Array(); };

/**
 * Removes a suggestionItem from the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * @param {int | string | sap.m.SuggestionItem} vSuggestionItem The suggestionItem to remove or its index or id
 * @returns {sap.m.SuggestionItem} The removed suggestionItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.removeSuggestionItem = function(vSuggestionItem) { return new sap.m.SuggestionItem(); };

/**
 * Sets a new value for property {@link #getEnabled enabled}.
 * 
 * Determines whether the control is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.setEnabled = function(bEnabled) { return new sap.f.SearchManager(); };

/**
 * Sets a new value for property {@link #getEnableSuggestions enableSuggestions}.
 * 
 * If true, a <code>suggest</code> event is fired when user types in the input and when the input is focused.
 * On a phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableSuggestions New value for property <code>enableSuggestions</code>
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.setEnableSuggestions = function(bEnableSuggestions) { return new sap.f.SearchManager(); };

/**
 * Sets a new value for property {@link #getMaxLength maxLength}.
 * 
 * Determines the maximum number of characters. Value '0' means the feature is switched off.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxLength New value for property <code>maxLength</code>
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.setMaxLength = function(iMaxLength) { return new sap.f.SearchManager(); };

/**
 * Sets a new value for property {@link #getPlaceholder placeholder}.
 * 
 * Defines the text that is displayed when no value is available.
 * The default placeholder text is the word "Search" in the current local
 * language (if supported) or in English.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPlaceholder New value for property <code>placeholder</code>
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.setPlaceholder = function(sPlaceholder) { return new sap.f.SearchManager(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * Defines the input value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.setValue = function(sValue) { return new sap.f.SearchManager(); };

/**
 * Unbinds property {@link #getValue value} from model data.
 * @returns {sap.f.SearchManager} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.SearchManager.prototype.unbindValue = function() { return new sap.f.SearchManager(); };


// ---- sap.f.semantic.AddAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>AddAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>addAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.AddAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.AddAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.AddAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.AddAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.AddAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.CloseAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>CloseAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>closeAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.CloseAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.CloseAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.CloseAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.CloseAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.CloseAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.CopyAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>CopyAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>copyAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.CopyAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.CopyAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.CopyAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.CopyAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.CopyAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.DeleteAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DeleteAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>deleteAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.DeleteAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.DeleteAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.DeleteAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.DeleteAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.DeleteAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.DiscussInJamAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DiscussInJamAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>discussInJamAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.DiscussInJamAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.DiscussInJamAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.DiscussInJamAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.DiscussInJamAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.DiscussInJamAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.EditAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>EditAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>editAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.50
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.EditAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.EditAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.EditAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.EditAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.EditAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.ExitFullScreenAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ExitFullScreenAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>exitFullScreenAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.ExitFullScreenAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.ExitFullScreenAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.ExitFullScreenAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.ExitFullScreenAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.ExitFullScreenAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FavoriteAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FavoriteAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>favoriteAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticToggleButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FavoriteAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FavoriteAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticToggleButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FavoriteAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FavoriteAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FavoriteAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FlagAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FlagAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>flagAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticToggleButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FlagAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FlagAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticToggleButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FlagAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FlagAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FlagAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FooterMainAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FooterMainAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>footerMainAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends sap.f.semantic.MainAction
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FooterMainAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FooterMainAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.MainAction.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FooterMainAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FooterMainAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FooterMainAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FullScreenAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FullScreenAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>fullScreenAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FullScreenAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FullScreenAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FullScreenAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FullScreenAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FullScreenAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.MainAction --------------------------------------------------------------------------

/**
 * Constructor for a new MainAction.
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
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor sap.f.semantic.SemanticButton}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * Serves as a base class for the {@link sap.f.semantic.TitleMainAction} and {@link sap.f.semantic.FooterMainAction} controls.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.MainAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.MainAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.MainAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.MainAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.MainAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Defines <code>MainAction</code> text
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.f.semantic.MainAction.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Defines <code>MainAction</code> text
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.f.semantic.MainAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.MainAction.prototype.setText = function(sText) { return new sap.f.semantic.MainAction(); };


// ---- sap.f.semantic.MessagesIndicator --------------------------------------------------------------------------

/**
 * Constructor for a new <code>MessagesIndicator</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>messagesIndicator</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.MessagesIndicator = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.MessagesIndicator with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.MessagesIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.MessagesIndicator.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.MessagesIndicator.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.NegativeAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>NegativeAction</code>.
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
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor sap.f.semantic.SemanticButton}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>negativeAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.NegativeAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.NegativeAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.NegativeAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.NegativeAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.NegativeAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Defines <code>NegativeAction</code> text.
 * <b>Note:</b> the default text is "Reject"
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.f.semantic.NegativeAction.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Defines <code>NegativeAction</code> text.
 * <b>Note:</b> the default text is "Reject"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.f.semantic.NegativeAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.NegativeAction.prototype.setText = function(sText) { return new sap.f.semantic.NegativeAction(); };


// ---- sap.f.semantic.PositiveAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>PositiveAction</code>.
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
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor sap.f.semantic.SemanticButton}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>positiveAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.PositiveAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.PositiveAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.PositiveAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.PositiveAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.PositiveAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Defines <code>PositiveAction</code> text.
 * <b>Note:</b> the default text is "Accept"
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.f.semantic.PositiveAction.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Defines <code>PositiveAction</code> text.
 * <b>Note:</b> the default text is "Accept"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.f.semantic.PositiveAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.PositiveAction.prototype.setText = function(sText) { return new sap.f.semantic.PositiveAction(); };


// ---- sap.f.semantic.PrintAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>PrintAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>printAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.PrintAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.PrintAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.PrintAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.PrintAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.PrintAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.SemanticButton --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticButton</code>.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.f.semantic.SemanticControl#constructor sap.f.semantic.SemanticControl}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A base class for the available semantic actions, such as {@link sap.f.semantic.AddAction AddAction},
 * {@link sap.f.semantic.CloseAction CloseAction}, etc.
 * 
 * @extends sap.f.semantic.SemanticControl
 * @abstract
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticButton = function(sId,mSettings) {};
/**
 * Fired when the user selects the <code>SemanticButton</code>.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.semantic.SemanticButton</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.semantic.SemanticButton</code> itself.
 * 
 * Fired when the user selects the <code>SemanticButton</code>.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.semantic.SemanticButton</code> itself
 * 
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.f.semantic.SemanticButton(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.semantic.SemanticButton</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.detachPress = function(fnFunction,oListener) { return new sap.f.semantic.SemanticButton(); };

/**
 * Creates a new subclass of class sap.f.semantic.SemanticButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticControl.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.semantic.SemanticButton.prototype.firePress = function(mParameters) { return new sap.f.semantic.SemanticButton(); };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * Determines whether the <code>SemanticButton</code> is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getEnabled enabled}.
 * 
 * Determines whether the <code>SemanticButton</code> is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.setEnabled = function(bEnabled) { return new sap.f.semantic.SemanticButton(); };


// ---- sap.f.semantic.SemanticControl --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticControl</code>.
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
 * The base class for the {@link sap.f.semantic.SemanticButton}.
 * 
 * @extends sap.ui.core.Element
 * @abstract
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticControl = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SemanticControl with name <code>sClassName</code>
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
sap.f.semantic.SemanticControl.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticControl.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticControl.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Determines whether the <code>SemanticControl</code> is visible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticControl.prototype.getVisible = function() { return false; };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Determines whether the <code>SemanticControl</code> is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.f.semantic.SemanticControl} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticControl.prototype.setVisible = function(bVisible) { return new sap.f.semantic.SemanticControl(); };


// ---- sap.f.semantic.SemanticPage --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticPage</code>.
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
 * <li>{@link #getHeaderExpanded headerExpanded} : boolean (default: true)</li>
 * <li>{@link #getHeaderPinnable headerPinnable} : boolean (default: true)</li>
 * <li>{@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll} : boolean (default: false)</li>
 * <li>{@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick} : boolean (default: true)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: false)</li>
 * <li>{@link #getTitlePrimaryArea titlePrimaryArea} : sap.f.DynamicPageTitleArea (default: Begin)</li>
 * <li>{@link #getTitleAreaShrinkRatio titleAreaShrinkRatio} : sap.f.DynamicPageTitleShrinkRatio (default: 1:1.6:1.6)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitleHeading titleHeading} : sap.ui.core.Control</li>
 * <li>{@link #getTitleExpandedHeading titleExpandedHeading} : sap.ui.core.Control</li>
 * <li>{@link #getTitleSnappedHeading titleSnappedHeading} : sap.ui.core.Control</li>
 * <li>{@link #getTitleBreadcrumbs titleBreadcrumbs} : sap.m.IBreadcrumbs</li>
 * <li>{@link #getTitleSnappedOnMobile titleSnappedOnMobile} : sap.m.Title</li>
 * <li>{@link #getTitleSnappedContent titleSnappedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getTitleExpandedContent titleExpandedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getTitleContent titleContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getTitleMainAction titleMainAction} : sap.f.semantic.TitleMainAction</li>
 * <li>{@link #getEditAction editAction} : sap.f.semantic.EditAction</li>
 * <li>{@link #getDeleteAction deleteAction} : sap.f.semantic.DeleteAction</li>
 * <li>{@link #getCopyAction copyAction} : sap.f.semantic.CopyAction</li>
 * <li>{@link #getAddAction addAction} : sap.f.semantic.AddAction</li>
 * <li>{@link #getFlagAction flagAction} : sap.f.semantic.FlagAction</li>
 * <li>{@link #getFavoriteAction favoriteAction} : sap.f.semantic.FavoriteAction</li>
 * <li>{@link #getFullScreenAction fullScreenAction} : sap.f.semantic.FullScreenAction</li>
 * <li>{@link #getExitFullScreenAction exitFullScreenAction} : sap.f.semantic.ExitFullScreenAction</li>
 * <li>{@link #getCloseAction closeAction} : sap.f.semantic.CloseAction</li>
 * <li>{@link #getTitleCustomTextActions titleCustomTextActions} : sap.m.Button[]</li>
 * <li>{@link #getTitleCustomIconActions titleCustomIconActions} : sap.m.OverflowToolbarButton[]</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control (default)</li>
 * <li>{@link #getFooterMainAction footerMainAction} : sap.f.semantic.FooterMainAction</li>
 * <li>{@link #getMessagesIndicator messagesIndicator} : sap.f.semantic.MessagesIndicator</li>
 * <li>{@link #getDraftIndicator draftIndicator} : sap.m.DraftIndicator</li>
 * <li>{@link #getPositiveAction positiveAction} : sap.f.semantic.PositiveAction</li>
 * <li>{@link #getNegativeAction negativeAction} : sap.f.semantic.NegativeAction</li>
 * <li>{@link #getFooterCustomActions footerCustomActions} : sap.m.Button[]</li>
 * <li>{@link #getDiscussInJamAction discussInJamAction} : sap.f.semantic.DiscussInJamAction</li>
 * <li>{@link #getSaveAsTileAction saveAsTileAction} : sap.m.Button</li>
 * <li>{@link #getShareInJamAction shareInJamAction} : sap.f.semantic.ShareInJamAction</li>
 * <li>{@link #getSendMessageAction sendMessageAction} : sap.f.semantic.SendMessageAction</li>
 * <li>{@link #getSendEmailAction sendEmailAction} : sap.f.semantic.SendEmailAction</li>
 * <li>{@link #getPrintAction printAction} : sap.f.semantic.PrintAction</li>
 * <li>{@link #getCustomShareActions customShareActions} : sap.m.Button[]</li>
 * <li>{@link #getLandmarkInfo landmarkInfo} : sap.f.DynamicPageAccessibleLandmarkInfo</li>
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
 * An enhanced {@link sap.f.DynamicPage}, that contains controls with semantic-specific meaning.
 * 
 * <h3>Overview</h3>
 * 
 * Content specified in the <code>sap.f.semantic.SemanticPage</code> aggregations is automatically
 * positioned in dedicated sections of the title or the footer of the page, depending on
 * the control's semantics.
 * 
 * The actions in the <code>SemanticPage</code> title are grouped to text actions or icon actions.
 * When an aggregation is set, the actions appear in the following predefined order (from left to right):
 * 
 * <ul>Text actions:
 * <li>The main semantic text action - <code>titleMainAction</code></li>
 * <li>Any custom text actions - <code>titleCustomTextActions</code></li>
 * <li>The semantic text actions - <code>editAction</code>, <code>deleteAction</code>, <code>copyAction</code> and <code>addAction</code></li></ul>
 * 
 * <ul>Icon actions:
 * <li>Any custom icon actions - <code>titleCustomIconActions</code></li>
 * <li>The simple semantic icon actions - <code>favoriteAction</code> and <code>flagAction</code></li>
 * <li>The share menu semantic icon actions as a drop-down list with the following order:
 * 	<ul><li><code>sendEmailAction</code></li>
 * 	<li><code>discussInJamAction</code></li>
 * 	<li><code>shareInJamAction</code></li>
 * 	<li><code>sendMessageAction</code></li>
 * 	<li><code>printAction</code></li>
 * 	<li>Any <code>customShareActions</code></li></ul></li>
 * <li>The navigation semantic actions - <code>fullScreenAction</code>, <code>exitFullScreenAction</code>,
 * and <code>closeAction</code></li></ul>
 * 
 * The actions in the <code>SemanticPage</code> footer are positioned either on its left or right area and have the following predefined order:
 * 
 * <ul>Footer left area:
 * <li>The semantic text action - <code>messagesIndicator</code></li>
 * <li>The semantic label - <code>draftIndicator</code></li></ul>
 * 
 * <ul>Footer right area:
 * <li>The main semantic text action - <code>footerMainAction</code></li>
 * <li>The semantic text actions - <code>positiveAction</code> and <code>negativeAction</code></li>
 * <li>Any custom text actions - <code>footerCustomActions</code></li></ul>
 * 
 * <h3>Usage</h3>
 * 
 * Using the <code>SemanticPage</code> facilitates the implementation of the SAP Fiori 2.0 design guidelines.
 * 
 * <h3>Responsive behavior</h3>
 * 
 * The responsive behavior of the <code>SemanticPage</code> depends on the behavior of the content that is displayed.
 * To adjust the <code>SemanticPage</code> content padding, the <code>sapUiContentPadding</code>,
 * <code>sapUiNoContentPadding</code>, and <code>sapUiResponsiveContentPadding</code> CSS classes can be used.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @see {@link topic:47dc86847f7a426a8e557167cf523bda Semantic Page}
 * @see {@link topic:84f3d52f492648d5b594e4f45dca7727 Semantic Pages}
 * @see {@link topic:4a97a07ec8f5441d901994d82eaab1f5 Semantic Page (sap.m)}
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/semantic-page/ Semantic Page}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticPage = function(sId,mSettings) {};
/**
 * Adds some customShareAction to the aggregation {@link #getCustomShareActions customShareActions}.
 * @param {sap.m.Button}
 *            oCustomShareAction The customShareAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addCustomShareAction = function(oCustomShareAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some footerCustomAction to the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * @param {sap.m.Button}
 *            oFooterCustomAction The footerCustomAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addFooterCustomAction = function(oFooterCustomAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
 * @param {sap.ui.core.Control}
 *            oHeaderContent The headerContent to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addHeaderContent = function(oHeaderContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleContent to the aggregation {@link #getTitleContent titleContent}.
 * @param {sap.ui.core.Control}
 *            oTitleContent The titleContent to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleContent = function(oTitleContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleCustomIconAction to the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * @param {sap.m.OverflowToolbarButton}
 *            oTitleCustomIconAction The titleCustomIconAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleCustomIconAction = function(oTitleCustomIconAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleCustomTextAction to the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * @param {sap.m.Button}
 *            oTitleCustomTextAction The titleCustomTextAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleCustomTextAction = function(oTitleCustomTextAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleExpandedContent to the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * @param {sap.ui.core.Control}
 *            oTitleExpandedContent The titleExpandedContent to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleExpandedContent = function(oTitleExpandedContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleSnappedContent to the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * @param {sap.ui.core.Control}
 *            oTitleSnappedContent The titleSnappedContent to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleSnappedContent = function(oTitleSnappedContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the addAction in the aggregation {@link #getAddAction addAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyAddAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the closeAction in the aggregation {@link #getCloseAction closeAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyCloseAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the copyAction in the aggregation {@link #getCopyAction copyAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyCopyAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the customShareActions in the aggregation {@link #getCustomShareActions customShareActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyCustomShareActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the deleteAction in the aggregation {@link #getDeleteAction deleteAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyDeleteAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the discussInJamAction in the aggregation {@link #getDiscussInJamAction discussInJamAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyDiscussInJamAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the draftIndicator in the aggregation {@link #getDraftIndicator draftIndicator}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyDraftIndicator = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the editAction in the aggregation {@link #getEditAction editAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyEditAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the exitFullScreenAction in the aggregation {@link #getExitFullScreenAction exitFullScreenAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyExitFullScreenAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the favoriteAction in the aggregation {@link #getFavoriteAction favoriteAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFavoriteAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the flagAction in the aggregation {@link #getFlagAction flagAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFlagAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the footerCustomActions in the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFooterCustomActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the footerMainAction in the aggregation {@link #getFooterMainAction footerMainAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFooterMainAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the fullScreenAction in the aggregation {@link #getFullScreenAction fullScreenAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFullScreenAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyHeaderContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.61
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyLandmarkInfo = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the messagesIndicator in the aggregation {@link #getMessagesIndicator messagesIndicator}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyMessagesIndicator = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the negativeAction in the aggregation {@link #getNegativeAction negativeAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyNegativeAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the positiveAction in the aggregation {@link #getPositiveAction positiveAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyPositiveAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the printAction in the aggregation {@link #getPrintAction printAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyPrintAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the saveAsTileAction in the aggregation {@link #getSaveAsTileAction saveAsTileAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroySaveAsTileAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the sendEmailAction in the aggregation {@link #getSendEmailAction sendEmailAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroySendEmailAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the sendMessageAction in the aggregation {@link #getSendMessageAction sendMessageAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroySendMessageAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the shareInJamAction in the aggregation {@link #getShareInJamAction shareInJamAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyShareInJamAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleBreadcrumbs in the aggregation {@link #getTitleBreadcrumbs titleBreadcrumbs}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleBreadcrumbs = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleContent in the aggregation {@link #getTitleContent titleContent}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleCustomIconActions in the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleCustomIconActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleCustomTextActions in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleCustomTextActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleExpandedContent in the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleExpandedContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleExpandedHeading in the aggregation {@link #getTitleExpandedHeading titleExpandedHeading}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleExpandedHeading = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleHeading in the aggregation {@link #getTitleHeading titleHeading}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleHeading = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleMainAction in the aggregation {@link #getTitleMainAction titleMainAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleMainAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleSnappedContent in the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleSnappedContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleSnappedHeading in the aggregation {@link #getTitleSnappedHeading titleSnappedHeading}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleSnappedHeading = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleSnappedOnMobile in the aggregation {@link #getTitleSnappedOnMobile titleSnappedOnMobile}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.63
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleSnappedOnMobile = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Creates a new subclass of class sap.f.semantic.SemanticPage with name <code>sClassName</code>
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
sap.f.semantic.SemanticPage.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getAddAction addAction}.
 * 
 * A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.AddAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getAddAction = function() { return new sap.f.semantic.AddAction(); };

/**
 * Gets content of aggregation {@link #getCloseAction closeAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.CloseAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getCloseAction = function() { return new sap.f.semantic.CloseAction(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The <code>SemanticPage</code> content.
 * 
 * <b>Note:</b> The SAP Fiori Design guidelines require that the
 * <code>SemanticPage</code>'s header content and the <code>SemanticPage</code>'s content
 * are aligned vertically. When using {@link sap.ui.layout.form.Form},
 *  {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the content area of
 * <code>SemanticPage</code>, if the content is not already aligned, you need to adjust
 * their left text offset to achieve the vertical alignment. To do this, apply the
 * <code>sapFSemanticPageAlignContent</code> CSS class to them and set their <code>width</code>
 * property to <code>auto</code> (if not set by default).
 * 
 * Example:
 * 
 * <pre>
 * <code> &lt;Panel class=“sapFSemanticPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>
 * </pre>
 * 
 * Please keep in mind that the alignment is not possible when the controls are placed in
 * a {@link sap.ui.layout.Grid} or in other layout controls that use
 * <code>overflow:hidden</code> CSS property.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getCopyAction copyAction}.
 * 
 * A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.CopyAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getCopyAction = function() { return new sap.f.semantic.CopyAction(); };

/**
 * Gets content of aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * The <code>customShareActions</code> are placed in the <code>ShareMenu</code> area of the
 * <code>SemanticPage</code> title, right after the semantic actions.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.m.Button[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getCustomShareActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getDeleteAction deleteAction}.
 * 
 * A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.DeleteAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getDeleteAction = function() { return new sap.f.semantic.DeleteAction(); };

/**
 * Gets content of aggregation {@link #getDiscussInJamAction discussInJamAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.DiscussInJamAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getDiscussInJamAction = function() { return new sap.f.semantic.DiscussInJamAction(); };

/**
 * Gets content of aggregation {@link #getDraftIndicator draftIndicator}.
 * 
 * A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code>
 * footer as a second action.
 * 
 * @returns {sap.m.DraftIndicator}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getDraftIndicator = function() { return new sap.m.DraftIndicator(); };

/**
 * Gets content of aggregation {@link #getEditAction editAction}.
 * 
 * A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.EditAction}
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getEditAction = function() { return new sap.f.semantic.EditAction(); };

/**
 * Gets content of aggregation {@link #getExitFullScreenAction exitFullScreenAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.ExitFullScreenAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getExitFullScreenAction = function() { return new sap.f.semantic.ExitFullScreenAction(); };

/**
 * Gets content of aggregation {@link #getFavoriteAction favoriteAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.FavoriteAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFavoriteAction = function() { return new sap.f.semantic.FavoriteAction(); };

/**
 * Gets content of aggregation {@link #getFlagAction flagAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.FlagAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFlagAction = function() { return new sap.f.semantic.FlagAction(); };

/**
 * Gets content of aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * The <code>footerCustomActions</code> are placed in the <code>FooterRight</code> area of the
 * <code>SemanticPage</code> footer, right after the semantic footer actions.
 * 
 * <b>Note:</b> Buttons that are part of this aggregation will always have their <code>type</code>
 * property set to <code>Transparent</code> by design.
 * 
 * @returns {sap.m.Button[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFooterCustomActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getFooterMainAction footerMainAction}.
 * 
 * A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code>
 * footer with default text value set to <code>Save</code>.
 * 
 * @returns {sap.f.semantic.FooterMainAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFooterMainAction = function() { return new sap.f.semantic.FooterMainAction(); };

/**
 * Gets content of aggregation {@link #getFullScreenAction fullScreenAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.FullScreenAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFullScreenAction = function() { return new sap.f.semantic.FullScreenAction(); };

/**
 * Gets content of aggregation {@link #getHeaderContent headerContent}.
 * 
 * The header content.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getHeaderContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> Please be aware, that initially collapsed header state is not supported,
 * so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerExpanded</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getHeaderExpanded = function() { return false; };

/**
 * Gets current value of property {@link #getHeaderPinnable headerPinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerPinnable</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getHeaderPinnable = function() { return false; };

/**
 * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
 * 
 * Accessible landmark settings to be applied to the containers of the <code>sap.f.SemanticPage</code> control.
 * 
 * If not set, no landmarks will be written.
 * 
 * @returns {sap.f.DynamicPageAccessibleLandmarkInfo}
 * @since 1.61
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getLandmarkInfo = function() { return new sap.f.DynamicPageAccessibleLandmarkInfo(); };

/**
 * Gets content of aggregation {@link #getMessagesIndicator messagesIndicator}.
 * 
 * A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code>
 * footer as a first action.
 * 
 * @returns {sap.f.semantic.MessagesIndicator}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getMessagesIndicator = function() { return new sap.f.semantic.MessagesIndicator(); };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticPage.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticPage.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getNegativeAction negativeAction}.
 * 
 * A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code>
 * footer with default text value set to <code>Reject</code>.
 * 
 * @returns {sap.f.semantic.NegativeAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getNegativeAction = function() { return new sap.f.semantic.NegativeAction(); };

/**
 * Gets content of aggregation {@link #getPositiveAction positiveAction}.
 * 
 * A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code>
 * footer with default text value set to <code>Accept</code>.
 * 
 * @returns {sap.f.semantic.PositiveAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getPositiveAction = function() { return new sap.f.semantic.PositiveAction(); };

/**
 * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * 
 * For example, if the user expands the header by clicking on the title
 * and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the title and the header
 * are with height larger than a given threshold.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>preserveHeaderStateOnScroll</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getPreserveHeaderStateOnScroll = function() { return false; };

/**
 * Gets content of aggregation {@link #getPrintAction printAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.PrintAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getPrintAction = function() { return new sap.f.semantic.PrintAction(); };

/**
 * Gets content of aggregation {@link #getSaveAsTileAction saveAsTileAction}.
 * 
 * A button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.m.Button}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getSaveAsTileAction = function() { return new sap.m.Button(); };

/**
 * Gets content of aggregation {@link #getSendEmailAction sendEmailAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.SendEmailAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getSendEmailAction = function() { return new sap.f.semantic.SendEmailAction(); };

/**
 * Gets content of aggregation {@link #getSendMessageAction sendMessageAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.SendMessageAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getSendMessageAction = function() { return new sap.f.semantic.SendMessageAction(); };

/**
 * Gets content of aggregation {@link #getShareInJamAction shareInJamAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.ShareInJamAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getShareInJamAction = function() { return new sap.f.semantic.ShareInJamAction(); };

/**
 * Gets current value of property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showFooter</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getShowFooter = function() { return false; };

/**
 * Gets current value of property {@link #getTitleAreaShrinkRatio titleAreaShrinkRatio}.
 * 
 * Assigns shrinking ratio to the <code>SemanticPage</code> title areas (Heading, Content, Actions).
 * The greater value a section has the faster it shrinks when the screen size is being reduced.
 * 
 * The value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions
 * are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.
 * 
 * For example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than
 * the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px
 * the Title area will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
 * 
 * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them
 * is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.
 * 
 * <Note:> When this property is set the <code>titlePrimaryArea</code> property has no effect.
 * 
 * Default value is <code>1:1.6:1.6</code>.
 * @returns {sap.f.DynamicPageTitleShrinkRatio} Value of property <code>titleAreaShrinkRatio</code>
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleAreaShrinkRatio = function() { return new sap.f.DynamicPageTitleShrinkRatio(); };

/**
 * Gets content of aggregation {@link #getTitleBreadcrumbs titleBreadcrumbs}.
 * 
 * The <code>SemanticPage</code> breadcrumbs.
 * 
 * A typical usage is the <code>sap.m.Breadcrumbs</code> control or any other UI5 control,
 * that implements the <code>sap.m.IBreadcrumbs</code> interface.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>The control will be placed in the title`s top-left area.</li>
 * <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content
 * overrides this aggregation when the control is viewed on a phone mobile device and
 * the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.m.IBreadcrumbs}
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleBreadcrumbs = function() { return new sap.m.IBreadcrumbs(); };

/**
 * Gets content of aggregation {@link #getTitleContent titleContent}.
 * 
 * The content, displayed in the title.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>The controls will be placed in the middle area.</li>
 * <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.ui.core.Control[]}
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * The <code>titleCustomIconActions</code> are placed in the <code>IconActions</code> area of the
 * <code>SemanticPage</code> title, right before the semantic icon action.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.m.OverflowToolbarButton[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleCustomIconActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * The <code>titleCustomTextActions</code> are placed in the <code>TextActions</code> area of the
 * <code>SemanticPage</code> title, right before the semantic text action.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li>
 * <li>Buttons that are part of this aggregation will always have their <code>type</code>
 * property set to <code>Transparent</code> by design.</li>
 * </ul>
 * 
 * @returns {sap.m.Button[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleCustomTextActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * The content,displayed in the title, when the header is in expanded state.
 * 
 * <b>Note:</b> The controls will be placed in the title`s left area,
 * under the <code>titleHeading</code> aggregation.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleExpandedContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleExpandedHeading titleExpandedHeading}.
 * 
 * The <code>titleExpandedHeading</code> is positioned in the <code>SemanticPage</code> title left area
 * and is displayed when the header is in expanded state only.
 * Use this aggregation to display a title (or any other UI5 control that serves
 * as a heading) that has to be present in expanded state only.
 * 
 * <b>Note:</b> In order for <code>titleExpandedHeading</code> to be taken into account,
 * <code>titleHeading</code> has to be empty. Combine <code>titleExpandedHeading</code> with
 * <code>titleSnappedHeading</code> to switch content when the header switches state.
 * 
 * @returns {sap.ui.core.Control}
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleExpandedHeading = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getTitleHeading titleHeading}.
 * 
 * The <code>SemanticPage</code> heading.
 * 
 * A typical usage is the <code>sap.m.Title</code> or any other UI5 control,
 * that serves as a heading for an object.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>The control will be placed in the title`s leftmost area.</li>
 * <li><code>titleHeading</code> is mutually exclusive with <code>titleSnappedHeading</code>
 * and <code>titleExpandedHeading</code>. If <code>titleHeading</code> is provided, both
 * <code>titleSnappedHeading</code> and <code>titleExpandedHeading</code> are ignored.
 * <code>titleHeading</code> is useful when the content of <code>titleSnappedHeading</code> and
 * <code>titleExpandedHeading</code> needs to be the same as it replaces them both.</li>
 * <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content
 * overrides this aggregation when the control is viewed on a phone mobile device and
 * the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleHeading = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getTitleMainAction titleMainAction}.
 * 
 * A semantic-specific button which is placed in the <code>SemanticPage</code> title as first action.
 * 
 * <b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * @returns {sap.f.semantic.TitleMainAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleMainAction = function() { return new sap.f.semantic.TitleMainAction(); };

/**
 * Gets current value of property {@link #getTitlePrimaryArea titlePrimaryArea}.
 * 
 * Determines which of the title areas (Begin, Middle) is primary.
 * 
 * <b>Note:</b> The primary area is shrinking at a lower rate, remaining visible as long as it can.
 * 
 * Default value is <code>Begin</code>.
 * @returns {sap.f.DynamicPageTitleArea} Value of property <code>titlePrimaryArea</code>
 * @since 1.52
 * @deprecated as of version 1.58. Please use the <code>titleAreaShrinkRatio</code> property instead.
 * The value of <code>titleAreaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format
 * where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a
 * section has the faster it shrinks when the screen size is being reduced.
 * 
 * <code>titlePrimaryArea=Begin</code> can be achieved by setting a low number for the Heading area to
 * <code>titleAreaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.
 * 
 * <code>titlePrimaryArea=Middle</code> can be achieved by setting a low number for the Content area to
 * <code>titleAreaShrinkRatio</code>, for example <code>1.6:1:1.6</code>.
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitlePrimaryArea = function() { return new sap.f.DynamicPageTitleArea(); };

/**
 * Gets content of aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * The content, displayed in the title, when the header is in collapsed state.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>The controls will be placed in the title`s left area,
 * under the <code>titleHeading</code> aggregation.</li>
 * <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its
 * content overrides this aggregation when the control is viewed on a phone mobile
 * device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleSnappedContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleSnappedHeading titleSnappedHeading}.
 * 
 * The <code>titleSnappedHeading</code> is positioned in the <code>SemanticPage</code> title left area
 * and is displayed when the header is in collapsed (snapped) state only.
 * Use this aggregation to display a title (or any other UI5 control that serves
 * as a heading) that has to be present in collapsed state only.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>In order for <code>titleSnappedHeading</code> to be taken into account,
 * <code>titleHeading</code> has to be empty. Combine <code>titleSnappedHeading</code> with
 * <code>titleExpandedHeading</code> to switch content when the header switches state.</li>
 * <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content
 * overrides this aggregation when the control is viewed on a phone mobile device and
 * the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li>
 * </ul>
 * 
 * @returns {sap.ui.core.Control}
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleSnappedHeading = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getTitleSnappedOnMobile titleSnappedOnMobile}.
 * 
 * The only content that is displayed in the <code>SemanticPage</code> title
 * when it is viewed on a phone mobile device and the <code>SemanticPage</code> header
 * is in collapsed (snapped) state.
 * 
 * Using this aggregation enables you to provide a simple, single-line title that
 * takes less space on the smaller phone screens when the
 * <code>SemanticPage</code> header is in its collapsed (snapped) state.
 * 
 * <b>Note:</b> The content set in this aggregation overrides all the other
 * <code>SemanticPage</code> aggregations displayed in the title and is only visible
 * on phone mobile devices in collapsed (snapped) state of the
 * <code>SemanticPage</code> header.
 * 
 * @returns {sap.m.Title}
 * @since 1.63
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleSnappedOnMobile = function() { return new sap.m.Title(); };

/**
 * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the user can switch between the expanded/collapsed states of the
 * header by clicking on the title.
 * 
 * If set to <code>false</code>, the title is not clickable and the application
 * must provide other means for expanding/collapsing the header, if necessary.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>toggleHeaderOnTitleClick</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getToggleHeaderOnTitleClick = function() { return false; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getCustomShareActions customShareActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oCustomShareAction The customShareAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfCustomShareAction = function(oCustomShareAction) { return 0; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oFooterCustomAction The footerCustomAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfFooterCustomAction = function(oFooterCustomAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getHeaderContent headerContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oHeaderContent The headerContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleContent titleContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oTitleContent The titleContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleContent = function(oTitleContent) { return 0; };

/**
 * Checks for the provided <code>sap.m.OverflowToolbarButton</code> in the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.OverflowToolbarButton}
 *           oTitleCustomIconAction The titleCustomIconAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleCustomIconAction = function(oTitleCustomIconAction) { return 0; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oTitleCustomTextAction The titleCustomTextAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleCustomTextAction = function(oTitleCustomTextAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oTitleExpandedContent The titleExpandedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleExpandedContent = function(oTitleExpandedContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oTitleSnappedContent The titleSnappedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleSnappedContent = function(oTitleSnappedContent) { return 0; };

/**
 * Inserts a customShareAction into the aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * @param {sap.m.Button}
 *            oCustomShareAction The customShareAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the customShareAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the customShareAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the customShareAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertCustomShareAction = function(oCustomShareAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a footerCustomAction into the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * @param {sap.m.Button}
 *            oFooterCustomAction The footerCustomAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the footerCustomAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the footerCustomAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the footerCustomAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertFooterCustomAction = function(oFooterCustomAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oHeaderContent The headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the headerContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerContent is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleContent into the aggregation {@link #getTitleContent titleContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oTitleContent The titleContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the titleContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleContent is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleContent = function(oTitleContent,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleCustomIconAction into the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * @param {sap.m.OverflowToolbarButton}
 *            oTitleCustomIconAction The titleCustomIconAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the titleCustomIconAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleCustomIconAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleCustomIconAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleCustomIconAction = function(oTitleCustomIconAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleCustomTextAction into the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * @param {sap.m.Button}
 *            oTitleCustomTextAction The titleCustomTextAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the titleCustomTextAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleCustomTextAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleCustomTextAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleCustomTextAction = function(oTitleCustomTextAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleExpandedContent into the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oTitleExpandedContent The titleExpandedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the titleExpandedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleExpandedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleExpandedContent is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleExpandedContent = function(oTitleExpandedContent,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleSnappedContent into the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oTitleSnappedContent The titleSnappedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the titleSnappedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleSnappedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleSnappedContent is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleSnappedContent = function(oTitleSnappedContent,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Removes all the controls from the aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllCustomShareActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllFooterCustomActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleContent titleContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.OverflowToolbarButton[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleCustomIconActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleCustomTextActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleExpandedContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleSnappedContent = function() { return new Array(); };

/**
 * Removes a customShareAction from the aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * @param {int | string | sap.m.Button} vCustomShareAction The customShareAction to remove or its index or id
 * @returns {sap.m.Button} The removed customShareAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeCustomShareAction = function(vCustomShareAction) { return new sap.m.Button(); };

/**
 * Removes a footerCustomAction from the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * @param {int | string | sap.m.Button} vFooterCustomAction The footerCustomAction to remove or its index or id
 * @returns {sap.m.Button} The removed footerCustomAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeFooterCustomAction = function(vFooterCustomAction) { return new sap.m.Button(); };

/**
 * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vHeaderContent The headerContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed headerContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.core.Control(); };

/**
 * Removes a titleContent from the aggregation {@link #getTitleContent titleContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vTitleContent The titleContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed titleContent or <code>null</code>
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleContent = function(vTitleContent) { return new sap.ui.core.Control(); };

/**
 * Removes a titleCustomIconAction from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * @param {int | string | sap.m.OverflowToolbarButton} vTitleCustomIconAction The titleCustomIconAction to remove or its index or id
 * @returns {sap.m.OverflowToolbarButton} The removed titleCustomIconAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleCustomIconAction = function(vTitleCustomIconAction) { return new sap.m.OverflowToolbarButton(); };

/**
 * Removes a titleCustomTextAction from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * @param {int | string | sap.m.Button} vTitleCustomTextAction The titleCustomTextAction to remove or its index or id
 * @returns {sap.m.Button} The removed titleCustomTextAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleCustomTextAction = function(vTitleCustomTextAction) { return new sap.m.Button(); };

/**
 * Removes a titleExpandedContent from the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vTitleExpandedContent The titleExpandedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed titleExpandedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleExpandedContent = function(vTitleExpandedContent) { return new sap.ui.core.Control(); };

/**
 * Removes a titleSnappedContent from the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vTitleSnappedContent The titleSnappedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed titleSnappedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleSnappedContent = function(vTitleSnappedContent) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated {@link #getAddAction addAction}.
 * @param {sap.f.semantic.AddAction} oAddAction The addAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setAddAction = function(oAddAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getCloseAction closeAction}.
 * @param {sap.f.semantic.CloseAction} oCloseAction The closeAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setCloseAction = function(oCloseAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setContent = function(oContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getCopyAction copyAction}.
 * @param {sap.f.semantic.CopyAction} oCopyAction The copyAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setCopyAction = function(oCopyAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getDeleteAction deleteAction}.
 * @param {sap.f.semantic.DeleteAction} oDeleteAction The deleteAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setDeleteAction = function(oDeleteAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getDiscussInJamAction discussInJamAction}.
 * @param {sap.f.semantic.DiscussInJamAction} oDiscussInJamAction The discussInJamAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setDiscussInJamAction = function(oDiscussInJamAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getDraftIndicator draftIndicator}.
 * @param {sap.m.DraftIndicator} oDraftIndicator The draftIndicator to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setDraftIndicator = function(oDraftIndicator) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getEditAction editAction}.
 * @param {sap.f.semantic.EditAction} oEditAction The editAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setEditAction = function(oEditAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getExitFullScreenAction exitFullScreenAction}.
 * @param {sap.f.semantic.ExitFullScreenAction} oExitFullScreenAction The exitFullScreenAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setExitFullScreenAction = function(oExitFullScreenAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFavoriteAction favoriteAction}.
 * @param {sap.f.semantic.FavoriteAction} oFavoriteAction The favoriteAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFavoriteAction = function(oFavoriteAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFlagAction flagAction}.
 * @param {sap.f.semantic.FlagAction} oFlagAction The flagAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFlagAction = function(oFlagAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFooterMainAction footerMainAction}.
 * @param {sap.f.semantic.FooterMainAction} oFooterMainAction The footerMainAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFooterMainAction = function(oFooterMainAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFullScreenAction fullScreenAction}.
 * @param {sap.f.semantic.FullScreenAction} oFullScreenAction The fullScreenAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFullScreenAction = function(oFullScreenAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> Please be aware, that initially collapsed header state is not supported,
 * so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderExpanded New value for property <code>headerExpanded</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setHeaderExpanded = function(bHeaderExpanded) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getHeaderPinnable headerPinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderPinnable New value for property <code>headerPinnable</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setHeaderPinnable = function(bHeaderPinnable) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getLandmarkInfo landmarkInfo}.
 * @param {sap.f.DynamicPageAccessibleLandmarkInfo} oLandmarkInfo The landmarkInfo to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.61
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setLandmarkInfo = function(oLandmarkInfo) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getMessagesIndicator messagesIndicator}.
 * @param {sap.f.semantic.MessagesIndicator} oMessagesIndicator The messagesIndicator to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setMessagesIndicator = function(oMessagesIndicator) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getNegativeAction negativeAction}.
 * @param {sap.f.semantic.NegativeAction} oNegativeAction The negativeAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setNegativeAction = function(oNegativeAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getPositiveAction positiveAction}.
 * @param {sap.f.semantic.PositiveAction} oPositiveAction The positiveAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setPositiveAction = function(oPositiveAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * 
 * For example, if the user expands the header by clicking on the title
 * and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the title and the header
 * are with height larger than a given threshold.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPreserveHeaderStateOnScroll New value for property <code>preserveHeaderStateOnScroll</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setPreserveHeaderStateOnScroll = function(bPreserveHeaderStateOnScroll) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getPrintAction printAction}.
 * @param {sap.f.semantic.PrintAction} oPrintAction The printAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setPrintAction = function(oPrintAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getSaveAsTileAction saveAsTileAction}.
 * @param {sap.m.Button} oSaveAsTileAction The saveAsTileAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setSaveAsTileAction = function(oSaveAsTileAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getSendEmailAction sendEmailAction}.
 * @param {sap.f.semantic.SendEmailAction} oSendEmailAction The sendEmailAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setSendEmailAction = function(oSendEmailAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getSendMessageAction sendMessageAction}.
 * @param {sap.f.semantic.SendMessageAction} oSendMessageAction The sendMessageAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setSendMessageAction = function(oSendMessageAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getShareInJamAction shareInJamAction}.
 * @param {sap.f.semantic.ShareInJamAction} oShareInJamAction The shareInJamAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setShareInJamAction = function(oShareInJamAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowFooter New value for property <code>showFooter</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setShowFooter = function(bShowFooter) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getTitleAreaShrinkRatio titleAreaShrinkRatio}.
 * 
 * Assigns shrinking ratio to the <code>SemanticPage</code> title areas (Heading, Content, Actions).
 * The greater value a section has the faster it shrinks when the screen size is being reduced.
 * 
 * The value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions
 * are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.
 * 
 * For example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than
 * the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px
 * the Title area will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.
 * 
 * If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them
 * is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.
 * 
 * <Note:> When this property is set the <code>titlePrimaryArea</code> property has no effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1:1.6:1.6</code>.
 * @param {sap.f.DynamicPageTitleShrinkRatio} sTitleAreaShrinkRatio New value for property <code>titleAreaShrinkRatio</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleAreaShrinkRatio = function(sTitleAreaShrinkRatio) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleBreadcrumbs titleBreadcrumbs}.
 * @param {sap.m.IBreadcrumbs} oTitleBreadcrumbs The titleBreadcrumbs to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleBreadcrumbs = function(oTitleBreadcrumbs) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleExpandedHeading titleExpandedHeading}.
 * @param {sap.ui.core.Control} oTitleExpandedHeading The titleExpandedHeading to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleExpandedHeading = function(oTitleExpandedHeading) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleHeading titleHeading}.
 * @param {sap.ui.core.Control} oTitleHeading The titleHeading to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleHeading = function(oTitleHeading) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleMainAction titleMainAction}.
 * @param {sap.f.semantic.TitleMainAction} oTitleMainAction The titleMainAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleMainAction = function(oTitleMainAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getTitlePrimaryArea titlePrimaryArea}.
 * 
 * Determines which of the title areas (Begin, Middle) is primary.
 * 
 * <b>Note:</b> The primary area is shrinking at a lower rate, remaining visible as long as it can.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Begin</code>.
 * @param {sap.f.DynamicPageTitleArea} sTitlePrimaryArea New value for property <code>titlePrimaryArea</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * @deprecated as of version 1.58. Please use the <code>titleAreaShrinkRatio</code> property instead.
 * The value of <code>titleAreaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format
 * where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a
 * section has the faster it shrinks when the screen size is being reduced.
 * 
 * <code>titlePrimaryArea=Begin</code> can be achieved by setting a low number for the Heading area to
 * <code>titleAreaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.
 * 
 * <code>titlePrimaryArea=Middle</code> can be achieved by setting a low number for the Content area to
 * <code>titleAreaShrinkRatio</code>, for example <code>1.6:1:1.6</code>.
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitlePrimaryArea = function(sTitlePrimaryArea) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleSnappedHeading titleSnappedHeading}.
 * @param {sap.ui.core.Control} oTitleSnappedHeading The titleSnappedHeading to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.58
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleSnappedHeading = function(oTitleSnappedHeading) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleSnappedOnMobile titleSnappedOnMobile}.
 * @param {sap.m.Title} oTitleSnappedOnMobile The titleSnappedOnMobile to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * @since 1.63
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleSnappedOnMobile = function(oTitleSnappedOnMobile) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the user can switch between the expanded/collapsed states of the
 * header by clicking on the title.
 * 
 * If set to <code>false</code>, the title is not clickable and the application
 * must provide other means for expanding/collapsing the header, if necessary.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bToggleHeaderOnTitleClick New value for property <code>toggleHeaderOnTitleClick</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setToggleHeaderOnTitleClick = function(bToggleHeaderOnTitleClick) { return new sap.f.semantic.SemanticPage(); };


// ---- sap.f.semantic.SemanticToggleButton --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticToggleButton</code>.
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
 * <li>{@link #getPressed pressed} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.f.semantic.SemanticButton#constructor sap.f.semantic.SemanticButton}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A base class for the {@link sap.f.semantic.FavoriteAction} and {@link sap.f.semantic.FlagAction}.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @abstract
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticToggleButton = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SemanticToggleButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticToggleButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticToggleButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticToggleButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPressed pressed}.
 * 
 * Defines the <code>SemanticToggleButton</code> pressed state.
 * 
 * The property is set to <code>true</code> when the control is toggled (default is <code>false</code>).
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>pressed</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticToggleButton.prototype.getPressed = function() { return false; };

/**
 * Sets a new value for property {@link #getPressed pressed}.
 * 
 * Defines the <code>SemanticToggleButton</code> pressed state.
 * 
 * The property is set to <code>true</code> when the control is toggled (default is <code>false</code>).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPressed New value for property <code>pressed</code>
 * @returns {sap.f.semantic.SemanticToggleButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticToggleButton.prototype.setPressed = function(bPressed) { return new sap.f.semantic.SemanticToggleButton(); };


// ---- sap.f.semantic.SendEmailAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SendEmailAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>sendEmailAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SendEmailAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SendEmailAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SendEmailAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SendEmailAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SendEmailAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.SendMessageAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SendMessageAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>sendMessageAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SendMessageAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SendMessageAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SendMessageAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SendMessageAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SendMessageAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.ShareInJamAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ShareInJamAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>shareInJamAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends sap.f.semantic.SemanticButton
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.ShareInJamAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.ShareInJamAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.ShareInJamAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.ShareInJamAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.ShareInJamAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.TitleMainAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>TitleMainAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>titleMainAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends sap.f.semantic.MainAction
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.TitleMainAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.TitleMainAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.MainAction.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.TitleMainAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.TitleMainAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.TitleMainAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.ShellBar --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ShellBar</code>.
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
 * <li>{@link #getTitle title} : string (default: )</li>
 * <li>{@link #getSecondTitle secondTitle} : string (default: )</li>
 * <li>{@link #getHomeIcon homeIcon} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getHomeIconTooltip homeIconTooltip} : string (default: )</li>
 * <li>{@link #getShowMenuButton showMenuButton} : boolean (default: false)</li>
 * <li>{@link #getShowNavButton showNavButton} : boolean (default: false)</li>
 * <li>{@link #getShowCopilot showCopilot} : boolean (default: false)</li>
 * <li>{@link #getShowSearch showSearch} : boolean (default: false)</li>
 * <li>{@link #getShowNotifications showNotifications} : boolean (default: false)</li>
 * <li>{@link #getShowProductSwitcher showProductSwitcher} : boolean (default: false)</li>
 * <li>{@link #getNotificationsNumber notificationsNumber} : string (default: )</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenu menu} : sap.m.Menu</li>
 * <li>{@link #getSearchManager searchManager} : sap.f.SearchManager</li>
 * <li>{@link #getProfile profile} : sap.f.Avatar</li>
 * <li>{@link #getAdditionalContent additionalContent} : sap.f.IShellBar[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:homeIconPressed homeIconPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:menuButtonPressed menuButtonPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navButtonPressed navButtonPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:copilotPressed copilotPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:searchButtonPressed searchButtonPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:notificationsPressed notificationsPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:productSwitcherPressed productSwitcherPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:avatarPressed avatarPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * A horizontal bar control holding multiple child controls used as application shell header.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>ShellBar</code> is used as the uppermost section (shell) of the app. It is fully
 * responsive and adaptive, and corresponds to the SAP Fiori Design Guidelines.
 * 
 * <h3>Usage</h3>
 * 
 * Content specified in the <code>ShellBar</code> properties and aggregations is automatically
 * positioned in dedicated places of the control.
 * 
 * @extends sap.ui.core.Control
 * @implements sap.f.IShellBar, sap.m.IBar, sap.tnt.IToolHeader
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.63
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.ShellBar = function(sId,mSettings) {};
/**
 * Gets the available Bar contexts.
 * 
 * @returns {Object} with all available contexts
 * @protected
 * @since 1.65
 * 
 */
sap.f.ShellBar.prototype.getContext = undefined

/**
 * Fired when the profile avatar is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.f.Avatar} oControlEvent.getParameters.avatar Reference to the button that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.avatarPressed = function(oControlEvent) {  };

/**
 * Fired when the SAP CoPilot icon is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Image} oControlEvent.getParameters.image Reference to the button that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.copilotPressed = function(oControlEvent) {  };

/**
 * Fired when the <code>homeIcon</code> is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Image} oControlEvent.getParameters.icon Reference to the image that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.homeIconPressed = function(oControlEvent) {  };

/**
 * Fired when the alternative menu button is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.button Reference to the button that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.menuButtonPressed = function(oControlEvent) {  };

/**
 * Fired when the navigation/back button is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.button Reference to the button that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.navButtonPressed = function(oControlEvent) {  };

/**
 * Fired when the notifications button is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.button Reference to the button that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.notificationsPressed = function(oControlEvent) {  };

/**
 * Fired when the product switcher button is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.button Reference to the button that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.productSwitcherPressed = function(oControlEvent) {  };

/**
 * Fired when the search button is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.button Reference to the button that has been pressed
 * @public
 * 
 */
sap.f.ShellBar.prototype.searchButtonPressed = function(oControlEvent) {  };

/**
 * Sets classes according to the context of the page. Possible contexts are header, footer, and subheader.
 * @returns {sap.m.IBar} <code>this</code> for chaining
 * @protected
 * @since 1.65
 * 
 */
sap.f.ShellBar.prototype._applyContextClassFor = function() { return new sap.m.IBar(); };

/**
 * Sets the HTML tag according to the context of the page. Possible contexts are header, footer, and subheader.
 * @returns {sap.m.IBar} <code>this</code> for chaining
 * @protected
 * @since 1.65
 * 
 */
sap.f.ShellBar.prototype._applyTag = function() { return new sap.m.IBar(); };

/**
 * Adds some additionalContent to the aggregation {@link #getAdditionalContent additionalContent}.
 * @param {sap.f.IShellBar}
 *            oAdditionalContent The additionalContent to add; if empty, nothing is inserted
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.addAdditionalContent = function(oAdditionalContent) { return new sap.f.ShellBar(); };

/**
 * Sets classes and HTML tag according to the context of the page. Possible contexts are header, footer, and subheader
 * @returns {sap.m.IBar} <code>this</code> for chaining
 * @protected
 * @since 1.65
 * 
 */
sap.f.ShellBar.prototype.applyTagAndContextClassFor = function() { return new sap.m.IBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:avatarPressed avatarPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the profile avatar is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachAvatarPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:copilotPressed copilotPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the SAP CoPilot icon is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachCopilotPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:homeIconPressed homeIconPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the <code>homeIcon</code> is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachHomeIconPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:menuButtonPressed menuButtonPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the alternative menu button is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachMenuButtonPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:navButtonPressed navButtonPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the navigation/back button is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachNavButtonPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:notificationsPressed notificationsPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the notifications button is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachNotificationsPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:productSwitcherPressed productSwitcherPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the product switcher button is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachProductSwitcherPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:searchButtonPressed searchButtonPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.
 * 
 * Fired when the search button is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.ShellBar.prototype.attachSearchButtonPressed = function(oData,fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Destroys all the additionalContent in the aggregation {@link #getAdditionalContent additionalContent}.
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.destroyAdditionalContent = function() { return new sap.f.ShellBar(); };

/**
 * Destroys the menu in the aggregation {@link #getMenu menu}.
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.destroyMenu = function() { return new sap.f.ShellBar(); };

/**
 * Destroys the profile in the aggregation {@link #getProfile profile}.
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.destroyProfile = function() { return new sap.f.ShellBar(); };

/**
 * Destroys the searchManager in the aggregation {@link #getSearchManager searchManager}.
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.67
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.destroySearchManager = function() { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:avatarPressed avatarPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachAvatarPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:copilotPressed copilotPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachCopilotPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:homeIconPressed homeIconPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachHomeIconPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:menuButtonPressed menuButtonPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachMenuButtonPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:navButtonPressed navButtonPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachNavButtonPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:notificationsPressed notificationsPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachNotificationsPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:productSwitcherPressed productSwitcherPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachProductSwitcherPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:searchButtonPressed searchButtonPressed} event of this <code>sap.f.ShellBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.detachSearchButtonPressed = function(fnFunction,oListener) { return new sap.f.ShellBar(); };

/**
 * Creates a new subclass of class sap.f.ShellBar with name <code>sClassName</code>
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
sap.f.ShellBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:avatarPressed avatarPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.f.Avatar} [mParameters.avatar] Reference to the button that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireAvatarPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Fires event {@link #event:copilotPressed copilotPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.m.Image} [mParameters.image] Reference to the button that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireCopilotPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Fires event {@link #event:homeIconPressed homeIconPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.m.Image} [mParameters.icon] Reference to the image that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireHomeIconPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Fires event {@link #event:menuButtonPressed menuButtonPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.m.Button} [mParameters.button] Reference to the button that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireMenuButtonPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Fires event {@link #event:navButtonPressed navButtonPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.m.Button} [mParameters.button] Reference to the button that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireNavButtonPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Fires event {@link #event:notificationsPressed notificationsPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.m.Button} [mParameters.button] Reference to the button that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireNotificationsPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Fires event {@link #event:productSwitcherPressed productSwitcherPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.m.Button} [mParameters.button] Reference to the button that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireProductSwitcherPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Fires event {@link #event:searchButtonPressed searchButtonPressed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.m.Button} [mParameters.button] Reference to the button that has been pressed
 * 
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.ShellBar.prototype.fireSearchButtonPressed = function(mParameters) { return new sap.f.ShellBar(); };

/**
 * Gets content of aggregation {@link #getAdditionalContent additionalContent}.
 * 
 * Additional content to be displayed in the control.
 * 
 * <b>Note:</b> Only controls implementing the <code>{@link sap.f.IShellBar}</code> interface are allowed.
 * 
 * @returns {sap.f.IShellBar[]}
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getAdditionalContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHomeIcon homeIcon}.
 * 
 * Defines the URI to the home icon, such as company or product logo.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.URI} Value of property <code>homeIcon</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getHomeIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getHomeIconTooltip homeIconTooltip}.
 * 
 * Defines a custom tooltip for the home icon. If not set, a default tooltip is used.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>homeIconTooltip</code>
 * @since 1.67
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getHomeIconTooltip = function() { return ""; };

/**
 * Gets the HTML tag of the root DOM Reference.
 * @returns {string} the HTML-tag
 * @protected
 * @since 1.65
 * 
 */
sap.f.ShellBar.prototype.getHTMLTag = function() { return ""; };

/**
 * Gets content of aggregation {@link #getMenu menu}.
 * 
 * The menu attached to the main title.
 * 
 * @returns {sap.m.Menu}
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getMenu = function() { return new sap.m.Menu(); };

/**
 * Returns a metadata object for class sap.f.ShellBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.ShellBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNotificationsNumber notificationsNumber}.
 * 
 * Defines the displayed number of upcoming notifications.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>notificationsNumber</code>
 * @since 1.64
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getNotificationsNumber = function() { return ""; };

/**
 * Gets content of aggregation {@link #getProfile profile}.
 * 
 * The profile avatar.
 * 
 * @returns {sap.f.Avatar}
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getProfile = function() { return new sap.f.Avatar(); };

/**
 * Gets content of aggregation {@link #getSearchManager searchManager}.
 * 
 * Configurable search.
 * 
 * <b>Note:</b> If <code>showSearch</code> is set to <code>true</code>, two search buttons appear.
 * 
 * @returns {sap.f.SearchManager}
 * @since 1.67
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getSearchManager = function() { return new sap.f.SearchManager(); };

/**
 * Gets current value of property {@link #getSecondTitle secondTitle}.
 * 
 * Defines the secondary title of the control.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>secondTitle</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getSecondTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getShowCopilot showCopilot}.
 * 
 * Determines whether the SAP CoPilot icon is displayed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showCopilot</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getShowCopilot = function() { return false; };

/**
 * Gets current value of property {@link #getShowMenuButton showMenuButton}.
 * 
 * Determines whether a hamburger menu button is displayed (as an alternative
 * if the <code>menu</code> aggregation is not used).
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showMenuButton</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getShowMenuButton = function() { return false; };

/**
 * Gets current value of property {@link #getShowNavButton showNavButton}.
 * 
 * Determines whether a back navigation button is displayed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showNavButton</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getShowNavButton = function() { return false; };

/**
 * Gets current value of property {@link #getShowNotifications showNotifications}.
 * 
 * Determines whether the notifications button is displayed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showNotifications</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getShowNotifications = function() { return false; };

/**
 * Gets current value of property {@link #getShowProductSwitcher showProductSwitcher}.
 * 
 * Determines whether the product switcher button is displayed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showProductSwitcher</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getShowProductSwitcher = function() { return false; };

/**
 * Gets current value of property {@link #getShowSearch showSearch}.
 * 
 * Determines whether the search button is displayed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showSearch</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getShowSearch = function() { return false; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Defines the main title of the control.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.f.IShellBar</code> in the aggregation {@link #getAdditionalContent additionalContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.f.IShellBar}
 *           oAdditionalContent The additionalContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.indexOfAdditionalContent = function(oAdditionalContent) { return 0; };

/**
 * Inserts a additionalContent into the aggregation {@link #getAdditionalContent additionalContent}.
 * 
 * @param {sap.f.IShellBar}
 *            oAdditionalContent The additionalContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the additionalContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the additionalContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the additionalContent is inserted at
 *              the last position
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.insertAdditionalContent = function(oAdditionalContent,iIndex) { return new sap.f.ShellBar(); };

/**
 * Returns if the bar is sensitive to the container context. Implementation of the IBar interface
 * @returns {boolean} isContextSensitive
 * @protected
 * @since 1.65
 * 
 */
sap.f.ShellBar.prototype.isContextSensitive = function() { return false; };

/**
 * Removes a additionalContent from the aggregation {@link #getAdditionalContent additionalContent}.
 * 
 * @param {int | string | sap.f.IShellBar} vAdditionalContent The additionalContent to remove or its index or id
 * @returns {sap.f.IShellBar} The removed additionalContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.removeAdditionalContent = function(vAdditionalContent) { return new sap.f.IShellBar(); };

/**
 * Removes all the controls from the aggregation {@link #getAdditionalContent additionalContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.f.IShellBar[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.removeAllAdditionalContent = function() { return new Array(); };

/**
 * Sets a new value for property {@link #getHomeIcon homeIcon}.
 * 
 * Defines the URI to the home icon, such as company or product logo.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.URI} sHomeIcon New value for property <code>homeIcon</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setHomeIcon = function(sHomeIcon) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getHomeIconTooltip homeIconTooltip}.
 * 
 * Defines a custom tooltip for the home icon. If not set, a default tooltip is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sHomeIconTooltip New value for property <code>homeIconTooltip</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.67
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setHomeIconTooltip = function(sHomeIconTooltip) { return new sap.f.ShellBar(); };

/**
 * Sets the HTML tag of the root DOM Reference.
 * @param {string} sTag
 * @returns {sap.m.IBar} this for chaining
 * @protected
 * @since 1.65
 * 
 */
sap.f.ShellBar.prototype.setHTMLTag = function(sTag) { return new sap.m.IBar(); };

/**
 * Sets the aggregated {@link #getMenu menu}.
 * @param {sap.m.Menu} oMenu The menu to set
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setMenu = function(oMenu) { return new sap.f.ShellBar(); };

/**
 * Sets the aggregated {@link #getProfile profile}.
 * @param {sap.f.Avatar} oProfile The profile to set
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setProfile = function(oProfile) { return new sap.f.ShellBar(); };

/**
 * Sets the aggregated {@link #getSearchManager searchManager}.
 * @param {sap.f.SearchManager} oSearchManager The searchManager to set
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.67
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setSearchManager = function(oSearchManager) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getSecondTitle secondTitle}.
 * 
 * Defines the secondary title of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sSecondTitle New value for property <code>secondTitle</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setSecondTitle = function(sSecondTitle) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getShowCopilot showCopilot}.
 * 
 * Determines whether the SAP CoPilot icon is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowCopilot New value for property <code>showCopilot</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setShowCopilot = function(bShowCopilot) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getShowMenuButton showMenuButton}.
 * 
 * Determines whether a hamburger menu button is displayed (as an alternative
 * if the <code>menu</code> aggregation is not used).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowMenuButton New value for property <code>showMenuButton</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setShowMenuButton = function(bShowMenuButton) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getShowNavButton showNavButton}.
 * 
 * Determines whether a back navigation button is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowNavButton New value for property <code>showNavButton</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setShowNavButton = function(bShowNavButton) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getShowNotifications showNotifications}.
 * 
 * Determines whether the notifications button is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowNotifications New value for property <code>showNotifications</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setShowNotifications = function(bShowNotifications) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getShowProductSwitcher showProductSwitcher}.
 * 
 * Determines whether the product switcher button is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowProductSwitcher New value for property <code>showProductSwitcher</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setShowProductSwitcher = function(bShowProductSwitcher) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getShowSearch showSearch}.
 * 
 * Determines whether the search button is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowSearch New value for property <code>showSearch</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setShowSearch = function(bShowSearch) { return new sap.f.ShellBar(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Defines the main title of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.f.ShellBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.ShellBar.prototype.setTitle = function(sTitle) { return new sap.f.ShellBar(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.f.AvatarColor --------------------------------------------------------------------------

/**
 * Accent 1
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent1 = "";

/**
 * Accent 10
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent10 = "";

/**
 * Accent 2
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent2 = "";

/**
 * Accent 3
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent3 = "";

/**
 * Accent 4
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent4 = "";

/**
 * Accent 5
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent5 = "";

/**
 * Accent 6
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent6 = "";

/**
 * Accent 7
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent7 = "";

/**
 * Accent 8
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent8 = "";

/**
 * Accent 9
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Accent9 = "";

/**
 * Random color, chosen from the other options (Accent1 to Accent10)
 * 
 * @public
 * 
 */
sap.f.AvatarColor.Random = "";


// ---- sap.f.AvatarImageFitType --------------------------------------------------------------------------

/**
 * The image is scaled to the largest size so that both its width and height can fit in the control area.
 * @public
 * 
 */
sap.f.AvatarImageFitType.Contain = "";

/**
 * The image is scaled to be large enough so that the control area is completely covered.
 * @public
 * 
 */
sap.f.AvatarImageFitType.Cover = "";


// ---- sap.f.AvatarShape --------------------------------------------------------------------------

/**
 * Circular shape.
 * @public
 * 
 */
sap.f.AvatarShape.Circle = "";

/**
 * Square shape.
 * @public
 * 
 */
sap.f.AvatarShape.Square = "";


// ---- sap.f.AvatarSize --------------------------------------------------------------------------

/**
 * Custom size
 * @public
 * 
 */
sap.f.AvatarSize.Custom = "";

/**
 * Control size - 5rem
 * Font size - 2rem
 * @public
 * 
 */
sap.f.AvatarSize.L = "";

/**
 * Control size - 4rem
 * Font size - 1.625rem
 * @public
 * 
 */
sap.f.AvatarSize.M = "";

/**
 * Control size - 3rem
 * Font size - 1.125rem
 * @public
 * 
 */
sap.f.AvatarSize.S = "";

/**
 * Control size - 7rem
 * Font size - 2.75rem
 * @public
 * 
 */
sap.f.AvatarSize.XL = "";

/**
 * Control size - 2rem
 * Font size - 0.75rem
 * @public
 * 
 */
sap.f.AvatarSize.XS = "";


// ---- sap.f.AvatarType --------------------------------------------------------------------------

/**
 * The displayed content is an icon.
 * @public
 * 
 */
sap.f.AvatarType.Icon = "";

/**
 * The displayed content is an image.
 * @public
 * 
 */
sap.f.AvatarType.Image = "";

/**
 * The displayed content is initials.
 * @public
 * 
 */
sap.f.AvatarType.Initials = "";


// ---- sap.f.cards.HeaderPosition --------------------------------------------------------------------------

/**
 * The Header is under the content.
 * 
 * @public
 * 
 */
sap.f.cards.HeaderPosition.Bottom = "";

/**
 * The Header is over the content.
 * 
 * @public
 * 
 */
sap.f.cards.HeaderPosition.Top = "";


// ---- sap.f.DynamicPageTitleArea --------------------------------------------------------------------------

/**
 * The area includes the <code>heading</code>, <code>expandedContent</code> and <code>snappedContent</code> aggregations,
 * positioned in the beginning area of the {@link sap.f.DynamicPageTitle}.
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitleArea.Begin = "";

/**
 * The area includes the <code>content</code> aggregation,
 * positioned in the middle part of the {@link sap.f.DynamicPageTitle}.
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitleArea.Middle = "";


// ---- sap.f.LayoutType --------------------------------------------------------------------------

/**
 * Desktop: -/-/100  only the End column is displayed
 * 
 * Tablet:  -/-/100  only the End column is displayed
 * 
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display a detail-detail page only, when the user should focus entirely on it.
 * 
 * @public
 * 
 */
sap.f.LayoutType.EndColumnFullScreen = "";

/**
 * Desktop: -/100/-  only the Mid column is displayed
 * 
 * Tablet:  -/100/-  only the Mid column is displayed
 * 
 * Phone:   -/100/-  only the Mid column is displayed
 * 
 * Use to display a detail page only, when the user should focus entirely on it.
 * 
 * @public
 * 
 */
sap.f.LayoutType.MidColumnFullScreen = "";

/**
 * Desktop: 100/-/-  only the Begin column is displayed
 * 
 * Tablet:  100/-/-  only the Begin column is displayed
 * 
 * Phone:   100/-/-  only the Begin column is displayed
 * 
 * Use to start with a master page.
 * 
 * @public
 * 
 */
sap.f.LayoutType.OneColumn = "";

/**
 * Desktop: 67/33/0  Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows
 * 
 * Tablet:  67/33/0  Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows
 * 
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display the master and detail pages when the user should focus on the master.
 * The detail-detail is still loaded and easily accessible with layout arrows.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsBeginExpandedEndHidden = "";

/**
 * Desktop: 25/25/50 Begin, Mid and End (expanded) columns are displayed
 * 
 * Tablet:  0/33/67  Mid and End (expanded) columns are displayed, Begin is accessible by layout arrows
 * 
 * Phone:   -/-/100  (only the End column is displayed)
 * 
 * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail-detail.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsEndExpanded = "";

/**
 * Desktop: 25/50/25 Begin, Mid (expanded) and End columns are displayed
 * 
 * Tablet:  0/67/33  Mid (expanded) and End columns are displayed, Begin is accessible by a layout arrow
 * 
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsMidExpanded = "";

/**
 * Desktop: 33/67/0  Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow
 * 
 * Tablet:  33/67/0  Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow
 * 
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display the master and detail pages when the user should focus on the detail.
 * The detail-detail is still loaded and easily accessible with a layout arrow.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsMidExpandedEndHidden = "";

/**
 * Desktop: 67/33/-  Begin (expanded) and Mid columns are displayed
 * 
 * Tablet:  67/33/-  Begin (expanded) and Mid columns are displayed
 * 
 * Phone:   -/100/-  only the Mid column is displayed
 * 
 * Use to display both a master and a detail page when the user should focus on the master page.
 * 
 * @public
 * 
 */
sap.f.LayoutType.TwoColumnsBeginExpanded = "";

/**
 * Desktop: 33/67/-  Begin and Mid (expanded) columns are displayed
 * 
 * Tablet:  33/67/-  Begin and Mid (expanded) columns are displayed
 * 
 * Phone:   -/100/-  only the Mid column is displayed
 * 
 * Use to display both a master and a detail page when the user should focus on the detail page.
 * 
 * @public
 * 
 */
sap.f.LayoutType.TwoColumnsMidExpanded = "";

