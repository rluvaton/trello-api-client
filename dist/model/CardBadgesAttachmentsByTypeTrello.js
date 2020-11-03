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
 * The CardBadgesAttachmentsByTypeTrello model module.
 * @module model/CardBadgesAttachmentsByTypeTrello
 * @version 0.0.1
 */
var CardBadgesAttachmentsByTypeTrello = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CardBadgesAttachmentsByTypeTrello</code>.
   * @alias module:model/CardBadgesAttachmentsByTypeTrello
   */
  function CardBadgesAttachmentsByTypeTrello() {
    _classCallCheck(this, CardBadgesAttachmentsByTypeTrello);

    CardBadgesAttachmentsByTypeTrello.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CardBadgesAttachmentsByTypeTrello, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CardBadgesAttachmentsByTypeTrello</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardBadgesAttachmentsByTypeTrello} obj Optional instance to populate.
     * @return {module:model/CardBadgesAttachmentsByTypeTrello} The populated <code>CardBadgesAttachmentsByTypeTrello</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CardBadgesAttachmentsByTypeTrello();

        if (data.hasOwnProperty('board')) {
          obj['board'] = _ApiClient["default"].convertToType(data['board'], 'Number');
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _ApiClient["default"].convertToType(data['card'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CardBadgesAttachmentsByTypeTrello;
}();
/**
 * @member {Number} board
 */


CardBadgesAttachmentsByTypeTrello.prototype['board'] = undefined;
/**
 * @member {Number} card
 */

CardBadgesAttachmentsByTypeTrello.prototype['card'] = undefined;
var _default = CardBadgesAttachmentsByTypeTrello;
exports["default"] = _default;