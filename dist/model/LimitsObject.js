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
 * The LimitsObject model module.
 * @module model/LimitsObject
 * @version 0.0.1
 */
var LimitsObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LimitsObject</code>.
   * @alias module:model/LimitsObject
   */
  function LimitsObject() {
    _classCallCheck(this, LimitsObject);

    LimitsObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LimitsObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LimitsObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitsObject} obj Optional instance to populate.
     * @return {module:model/LimitsObject} The populated <code>LimitsObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LimitsObject();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('disableAt')) {
          obj['disableAt'] = _ApiClient["default"].convertToType(data['disableAt'], 'Number');
        }

        if (data.hasOwnProperty('warnAt')) {
          obj['warnAt'] = _ApiClient["default"].convertToType(data['warnAt'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LimitsObject;
}();
/**
 * @member {module:model/LimitsObject.StatusEnum} status
 */


LimitsObject.prototype['status'] = undefined;
/**
 * @member {Number} disableAt
 */

LimitsObject.prototype['disableAt'] = undefined;
/**
 * @member {Number} warnAt
 */

LimitsObject.prototype['warnAt'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

LimitsObject['StatusEnum'] = {
  /**
   * value: "ok"
   * @const
   */
  "ok": "ok",

  /**
   * value: "warning"
   * @const
   */
  "warning": "warning"
};
var _default = LimitsObject;
exports["default"] = _default;