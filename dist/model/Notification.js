"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Board = _interopRequireDefault(require("./Board"));

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Notification model module.
 * @module model/Notification
 * @version 0.0.1
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notification</code>.
   * @alias module:model/Notification
   */
  function Notification() {
    _classCallCheck(this, Notification);

    Notification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notification();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('unread')) {
          obj['unread'] = _ApiClient["default"].convertToType(data['unread'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('dateRead')) {
          obj['dateRead'] = _ApiClient["default"].convertToType(data['dateRead'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _Card["default"].constructFromObject(data['card']);
        }

        if (data.hasOwnProperty('board')) {
          obj['board'] = _Board["default"].constructFromObject(data['board']);
        }

        if (data.hasOwnProperty('idMemberCreator')) {
          obj['idMemberCreator'] = _ApiClient["default"].convertToType(data['idMemberCreator'], 'String');
        }

        if (data.hasOwnProperty('idAction')) {
          obj['idAction'] = _ApiClient["default"].convertToType(data['idAction'], 'String');
        }

        if (data.hasOwnProperty('reactions')) {
          obj['reactions'] = _ApiClient["default"].convertToType(data['reactions'], Array);
        }
      }

      return obj;
    }
  }]);

  return Notification;
}();
/**
 * @member {String} id
 */


Notification.prototype['id'] = undefined;
/**
 * @member {Boolean} unread
 */

Notification.prototype['unread'] = undefined;
/**
 * @member {module:model/Notification.TypeEnum} type
 */

Notification.prototype['type'] = undefined;
/**
 * @member {String} date
 */

Notification.prototype['date'] = undefined;
/**
 * @member {String} dateRead
 */

Notification.prototype['dateRead'] = undefined;
/**
 * @member {String} data
 */

Notification.prototype['data'] = undefined;
/**
 * @member {module:model/Card} card
 */

Notification.prototype['card'] = undefined;
/**
 * @member {module:model/Board} board
 */

Notification.prototype['board'] = undefined;
/**
 * @member {String} idMemberCreator
 */

Notification.prototype['idMemberCreator'] = undefined;
/**
 * @member {String} idAction
 */

Notification.prototype['idAction'] = undefined;
/**
 * @member {Array} reactions
 */

Notification.prototype['reactions'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Notification['TypeEnum'] = {
  /**
   * value: "cardDueSoon"
   * @const
   */
  "cardDueSoon": "cardDueSoon"
};
var _default = Notification;
exports["default"] = _default;