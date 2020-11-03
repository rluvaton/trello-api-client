"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CardBadgesAttachmentsByTypeTrello = _interopRequireDefault(require("./CardBadgesAttachmentsByTypeTrello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CardBadgesAttachmentsByType model module.
 * @module model/CardBadgesAttachmentsByType
 * @version 0.0.1
 */
var CardBadgesAttachmentsByType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CardBadgesAttachmentsByType</code>.
   * @alias module:model/CardBadgesAttachmentsByType
   */
  function CardBadgesAttachmentsByType() {
    _classCallCheck(this, CardBadgesAttachmentsByType);

    CardBadgesAttachmentsByType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CardBadgesAttachmentsByType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CardBadgesAttachmentsByType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardBadgesAttachmentsByType} obj Optional instance to populate.
     * @return {module:model/CardBadgesAttachmentsByType} The populated <code>CardBadgesAttachmentsByType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CardBadgesAttachmentsByType();

        if (data.hasOwnProperty('trello')) {
          obj['trello'] = _CardBadgesAttachmentsByTypeTrello["default"].constructFromObject(data['trello']);
        }
      }

      return obj;
    }
  }]);

  return CardBadgesAttachmentsByType;
}();
/**
 * @member {module:model/CardBadgesAttachmentsByTypeTrello} trello
 */


CardBadgesAttachmentsByType.prototype['trello'] = undefined;
var _default = CardBadgesAttachmentsByType;
exports["default"] = _default;