"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CardBadgesAttachmentsByType = _interopRequireDefault(require("./CardBadgesAttachmentsByType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CardBadges model module.
 * @module model/CardBadges
 * @version 0.0.1
 */
var CardBadges = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CardBadges</code>.
   * @alias module:model/CardBadges
   */
  function CardBadges() {
    _classCallCheck(this, CardBadges);

    CardBadges.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CardBadges, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CardBadges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardBadges} obj Optional instance to populate.
     * @return {module:model/CardBadges} The populated <code>CardBadges</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CardBadges();

        if (data.hasOwnProperty('attachmentsByType')) {
          obj['attachmentsByType'] = _CardBadgesAttachmentsByType["default"].constructFromObject(data['attachmentsByType']);
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'Boolean');
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'Number');
        }

        if (data.hasOwnProperty('viewingMemberVoted')) {
          obj['viewingMemberVoted'] = _ApiClient["default"].convertToType(data['viewingMemberVoted'], 'Boolean');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('fogbugz')) {
          obj['fogbugz'] = _ApiClient["default"].convertToType(data['fogbugz'], 'String');
        }

        if (data.hasOwnProperty('checkItems')) {
          obj['checkItems'] = _ApiClient["default"].convertToType(data['checkItems'], 'Number');
        }

        if (data.hasOwnProperty('checkItemsChecked')) {
          obj['checkItemsChecked'] = _ApiClient["default"].convertToType(data['checkItemsChecked'], 'Number');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient["default"].convertToType(data['attachments'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'Boolean');
        }

        if (data.hasOwnProperty('due')) {
          obj['due'] = _ApiClient["default"].convertToType(data['due'], 'Date');
        }

        if (data.hasOwnProperty('dueComplete')) {
          obj['dueComplete'] = _ApiClient["default"].convertToType(data['dueComplete'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CardBadges;
}();
/**
 * @member {module:model/CardBadgesAttachmentsByType} attachmentsByType
 */


CardBadges.prototype['attachmentsByType'] = undefined;
/**
 * @member {Boolean} location
 */

CardBadges.prototype['location'] = undefined;
/**
 * @member {Number} votes
 */

CardBadges.prototype['votes'] = undefined;
/**
 * @member {Boolean} viewingMemberVoted
 */

CardBadges.prototype['viewingMemberVoted'] = undefined;
/**
 * @member {Boolean} subscribed
 */

CardBadges.prototype['subscribed'] = undefined;
/**
 * @member {String} fogbugz
 */

CardBadges.prototype['fogbugz'] = undefined;
/**
 * @member {Number} checkItems
 */

CardBadges.prototype['checkItems'] = undefined;
/**
 * @member {Number} checkItemsChecked
 */

CardBadges.prototype['checkItemsChecked'] = undefined;
/**
 * @member {Number} comments
 */

CardBadges.prototype['comments'] = undefined;
/**
 * @member {Number} attachments
 */

CardBadges.prototype['attachments'] = undefined;
/**
 * @member {Boolean} description
 */

CardBadges.prototype['description'] = undefined;
/**
 * @member {Date} due
 */

CardBadges.prototype['due'] = undefined;
/**
 * @member {Boolean} dueComplete
 */

CardBadges.prototype['dueComplete'] = undefined;
var _default = CardBadges;
exports["default"] = _default;