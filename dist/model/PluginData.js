"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PluginData model module.
 * @module model/PluginData
 * @version 0.0.1
 */
var PluginData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginData</code>.
   * @alias module:model/PluginData
   */
  function PluginData() {
    _classCallCheck(this, PluginData);

    PluginData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PluginData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginData} obj Optional instance to populate.
     * @return {module:model/PluginData} The populated <code>PluginData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginData();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('idPlugin')) {
          obj['idPlugin'] = _ApiClient["default"].convertToType(data['idPlugin'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('idModel')) {
          obj['idModel'] = _ApiClient["default"].convertToType(data['idModel'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('access')) {
          obj['access'] = _ApiClient["default"].convertToType(data['access'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PluginData;
}();
/**
 * @member {String} id
 */


PluginData.prototype['id'] = undefined;
/**
 * @member {String} idPlugin
 */

PluginData.prototype['idPlugin'] = undefined;
/**
 * @member {module:model/PluginData.ScopeEnum} scope
 */

PluginData.prototype['scope'] = undefined;
/**
 * @member {String} idModel
 */

PluginData.prototype['idModel'] = undefined;
/**
 * @member {String} value
 */

PluginData.prototype['value'] = undefined;
/**
 * @member {module:model/PluginData.AccessEnum} access
 */

PluginData.prototype['access'] = undefined;
/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */

PluginData['ScopeEnum'] = {
  /**
   * value: "member"
   * @const
   */
  "member": "member",

  /**
   * value: "board"
   * @const
   */
  "board": "board",

  /**
   * value: "organization"
   * @const
   */
  "organization": "organization",

  /**
   * value: "card"
   * @const
   */
  "card": "card"
};
/**
 * Allowed values for the <code>access</code> property.
 * @enum {String}
 * @readonly
 */

PluginData['AccessEnum'] = {
  /**
   * value: "private"
   * @const
   */
  "private": "private",

  /**
   * value: "shared"
   * @const
   */
  "shared": "shared"
};
var _default = PluginData;
exports["default"] = _default;