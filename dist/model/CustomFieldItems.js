"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomFieldItemsValue = _interopRequireDefault(require("./CustomFieldItemsValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomFieldItems model module.
 * @module model/CustomFieldItems
 * @version 0.0.1
 */
var CustomFieldItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldItems</code>.
   * @alias module:model/CustomFieldItems
   */
  function CustomFieldItems() {
    _classCallCheck(this, CustomFieldItems);

    CustomFieldItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomFieldItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomFieldItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldItems} obj Optional instance to populate.
     * @return {module:model/CustomFieldItems} The populated <code>CustomFieldItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldItems();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _CustomFieldItemsValue["default"].constructFromObject(data['value']);
        }

        if (data.hasOwnProperty('idCustomField')) {
          obj['idCustomField'] = _ApiClient["default"].convertToType(data['idCustomField'], 'String');
        }

        if (data.hasOwnProperty('idModel')) {
          obj['idModel'] = _ApiClient["default"].convertToType(data['idModel'], 'String');
        }

        if (data.hasOwnProperty('modelType')) {
          obj['modelType'] = _ApiClient["default"].convertToType(data['modelType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomFieldItems;
}();
/**
 * @member {String} id
 */


CustomFieldItems.prototype['id'] = undefined;
/**
 * @member {module:model/CustomFieldItemsValue} value
 */

CustomFieldItems.prototype['value'] = undefined;
/**
 * @member {String} idCustomField
 */

CustomFieldItems.prototype['idCustomField'] = undefined;
/**
 * @member {String} idModel
 */

CustomFieldItems.prototype['idModel'] = undefined;
/**
 * @member {module:model/CustomFieldItems.ModelTypeEnum} modelType
 */

CustomFieldItems.prototype['modelType'] = undefined;
/**
 * Allowed values for the <code>modelType</code> property.
 * @enum {String}
 * @readonly
 */

CustomFieldItems['ModelTypeEnum'] = {
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
var _default = CustomFieldItems;
exports["default"] = _default;