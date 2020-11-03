"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomFieldDisplay = _interopRequireDefault(require("./CustomFieldDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomField model module.
 * @module model/CustomField
 * @version 0.0.1
 */
var CustomField = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomField</code>.
   * @alias module:model/CustomField
   */
  function CustomField() {
    _classCallCheck(this, CustomField);

    CustomField.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomField, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomField} obj Optional instance to populate.
     * @return {module:model/CustomField} The populated <code>CustomField</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomField();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('idModel')) {
          obj['idModel'] = _ApiClient["default"].convertToType(data['idModel'], 'String');
        }

        if (data.hasOwnProperty('modelType')) {
          obj['modelType'] = _ApiClient["default"].convertToType(data['modelType'], 'String');
        }

        if (data.hasOwnProperty('fieldGroup')) {
          obj['fieldGroup'] = _ApiClient["default"].convertToType(data['fieldGroup'], 'String');
        }

        if (data.hasOwnProperty('display')) {
          obj['display'] = _CustomFieldDisplay["default"].constructFromObject(data['display']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomField;
}();
/**
 * @member {String} id
 */


CustomField.prototype['id'] = undefined;
/**
 * @member {String} idModel
 */

CustomField.prototype['idModel'] = undefined;
/**
 * @member {module:model/CustomField.ModelTypeEnum} modelType
 */

CustomField.prototype['modelType'] = undefined;
/**
 * @member {String} fieldGroup
 */

CustomField.prototype['fieldGroup'] = undefined;
/**
 * @member {module:model/CustomFieldDisplay} display
 */

CustomField.prototype['display'] = undefined;
/**
 * @member {String} type
 */

CustomField.prototype['type'] = undefined;
/**
 * Allowed values for the <code>modelType</code> property.
 * @enum {String}
 * @readonly
 */

CustomField['ModelTypeEnum'] = {
  /**
   * value: "card"
   * @const
   */
  "card": "card",

  /**
   * value: "board"
   * @const
   */
  "board": "board",

  /**
   * value: "member"
   * @const
   */
  "member": "member"
};
var _default = CustomField;
exports["default"] = _default;