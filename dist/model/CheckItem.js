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
 * The CheckItem model module.
 * @module model/CheckItem
 * @version 0.0.1
 */
var CheckItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckItem</code>.
   * @alias module:model/CheckItem
   */
  function CheckItem() {
    _classCallCheck(this, CheckItem);

    CheckItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CheckItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckItem} obj Optional instance to populate.
     * @return {module:model/CheckItem} The populated <code>CheckItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckItem();

        if (data.hasOwnProperty('idChecklist')) {
          obj['idChecklist'] = _ApiClient["default"].convertToType(data['idChecklist'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('nameData')) {
          obj['nameData'] = _ApiClient["default"].convertToType(data['nameData'], 'String');
        }

        if (data.hasOwnProperty('pos')) {
          obj['pos'] = _ApiClient["default"].convertToType(data['pos'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CheckItem;
}();
/**
 * @member {String} idChecklist
 */


CheckItem.prototype['idChecklist'] = undefined;
/**
 * @member {module:model/CheckItem.StateEnum} state
 */

CheckItem.prototype['state'] = undefined;
/**
 * @member {String} id
 */

CheckItem.prototype['id'] = undefined;
/**
 * @member {String} name
 */

CheckItem.prototype['name'] = undefined;
/**
 * @member {String} nameData
 */

CheckItem.prototype['nameData'] = undefined;
/**
 * @member {String} pos
 */

CheckItem.prototype['pos'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

CheckItem['StateEnum'] = {
  /**
   * value: "complete"
   * @const
   */
  "complete": "complete",

  /**
   * value: "incomplete"
   * @const
   */
  "incomplete": "incomplete"
};
var _default = CheckItem;
exports["default"] = _default;