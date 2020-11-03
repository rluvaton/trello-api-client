"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomFieldDisplayValue = _interopRequireDefault(require("./CustomFieldDisplayValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomFieldDisplayOptions model module.
 * @module model/CustomFieldDisplayOptions
 * @version 0.0.1
 */
var CustomFieldDisplayOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldDisplayOptions</code>.
   * @alias module:model/CustomFieldDisplayOptions
   */
  function CustomFieldDisplayOptions() {
    _classCallCheck(this, CustomFieldDisplayOptions);

    CustomFieldDisplayOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomFieldDisplayOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomFieldDisplayOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldDisplayOptions} obj Optional instance to populate.
     * @return {module:model/CustomFieldDisplayOptions} The populated <code>CustomFieldDisplayOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldDisplayOptions();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('idCustomField')) {
          obj['idCustomField'] = _ApiClient["default"].convertToType(data['idCustomField'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _CustomFieldDisplayValue["default"].constructFromObject(data['value']);
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('pos')) {
          obj['pos'] = _ApiClient["default"].convertToType(data['pos'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomFieldDisplayOptions;
}();
/**
 * @member {String} id
 */


CustomFieldDisplayOptions.prototype['id'] = undefined;
/**
 * @member {String} idCustomField
 */

CustomFieldDisplayOptions.prototype['idCustomField'] = undefined;
/**
 * @member {module:model/CustomFieldDisplayValue} value
 */

CustomFieldDisplayOptions.prototype['value'] = undefined;
/**
 * @member {String} color
 */

CustomFieldDisplayOptions.prototype['color'] = undefined;
/**
 * @member {Number} pos
 */

CustomFieldDisplayOptions.prototype['pos'] = undefined;
var _default = CustomFieldDisplayOptions;
exports["default"] = _default;