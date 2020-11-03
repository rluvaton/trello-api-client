"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PosStringOrNumber = _interopRequireDefault(require("./PosStringOrNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 0.0.1
 */
var InlineObject2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:model/InlineObject2
   * @param idModel {String} 
   * @param modelType {module:model/InlineObject2.ModelTypeEnum} The type of model that the Custom Field is being defined on. This should always be `board`.
   * @param name {String} The name of the Custom Field
   * @param type {module:model/InlineObject2.TypeEnum} The type of Custom Field to create.
   * @param pos {module:model/PosStringOrNumber} 
   */
  function InlineObject2(idModel, modelType, name, type, pos) {
    _classCallCheck(this, InlineObject2);

    InlineObject2.initialize(this, idModel, modelType, name, type, pos);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject2, null, [{
    key: "initialize",
    value: function initialize(obj, idModel, modelType, name, type, pos) {
      obj['idModel'] = idModel;
      obj['modelType'] = modelType;
      obj['name'] = name;
      obj['type'] = type;
      obj['pos'] = pos;
    }
    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject2();

        if (data.hasOwnProperty('idModel')) {
          obj['idModel'] = _ApiClient["default"].convertToType(data['idModel'], 'String');
        }

        if (data.hasOwnProperty('modelType')) {
          obj['modelType'] = _ApiClient["default"].convertToType(data['modelType'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], 'String');
        }

        if (data.hasOwnProperty('pos')) {
          obj['pos'] = _PosStringOrNumber["default"].constructFromObject(data['pos']);
        }

        if (data.hasOwnProperty('display_cardFront')) {
          obj['display_cardFront'] = _ApiClient["default"].convertToType(data['display_cardFront'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject2;
}();
/**
 * @member {String} idModel
 */


InlineObject2.prototype['idModel'] = undefined;
/**
 * The type of model that the Custom Field is being defined on. This should always be `board`.
 * @member {module:model/InlineObject2.ModelTypeEnum} modelType
 */

InlineObject2.prototype['modelType'] = undefined;
/**
 * The name of the Custom Field
 * @member {String} name
 */

InlineObject2.prototype['name'] = undefined;
/**
 * The type of Custom Field to create.
 * @member {module:model/InlineObject2.TypeEnum} type
 */

InlineObject2.prototype['type'] = undefined;
/**
 * If the type is `checkbox` 
 * @member {String} options
 */

InlineObject2.prototype['options'] = undefined;
/**
 * @member {module:model/PosStringOrNumber} pos
 */

InlineObject2.prototype['pos'] = undefined;
/**
 * Whether this Custom Field should be shown on the front of Cards
 * @member {Boolean} display_cardFront
 * @default true
 */

InlineObject2.prototype['display_cardFront'] = true;
/**
 * Allowed values for the <code>modelType</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject2['ModelTypeEnum'] = {
  /**
   * value: "board"
   * @const
   */
  "board": "board"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject2['TypeEnum'] = {
  /**
   * value: "checkbox"
   * @const
   */
  "checkbox": "checkbox",

  /**
   * value: "list"
   * @const
   */
  "list": "list",

  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "date"
   * @const
   */
  "date": "date"
};
var _default = InlineObject2;
exports["default"] = _default;