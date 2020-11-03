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
 * The Webhook model module.
 * @module model/Webhook
 * @version 0.0.1
 */
var Webhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Webhook</code>.
   * @alias module:model/Webhook
   */
  function Webhook() {
    _classCallCheck(this, Webhook);

    Webhook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Webhook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Webhook();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('idModel')) {
          obj['idModel'] = _ApiClient["default"].convertToType(data['idModel'], 'String');
        }

        if (data.hasOwnProperty('callbackURL')) {
          obj['callbackURL'] = _ApiClient["default"].convertToType(data['callbackURL'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('consecutiveFailures')) {
          obj['consecutiveFailures'] = _ApiClient["default"].convertToType(data['consecutiveFailures'], 'Number');
        }

        if (data.hasOwnProperty('firstConsecutiveFailDate')) {
          obj['firstConsecutiveFailDate'] = _ApiClient["default"].convertToType(data['firstConsecutiveFailDate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Webhook;
}();
/**
 * @member {String} id
 */


Webhook.prototype['id'] = undefined;
/**
 * @member {String} description
 */

Webhook.prototype['description'] = undefined;
/**
 * @member {String} idModel
 */

Webhook.prototype['idModel'] = undefined;
/**
 * @member {String} callbackURL
 */

Webhook.prototype['callbackURL'] = undefined;
/**
 * @member {Boolean} active
 */

Webhook.prototype['active'] = undefined;
/**
 * @member {Number} consecutiveFailures
 */

Webhook.prototype['consecutiveFailures'] = undefined;
/**
 * @member {Date} firstConsecutiveFailDate
 */

Webhook.prototype['firstConsecutiveFailDate'] = undefined;
var _default = Webhook;
exports["default"] = _default;