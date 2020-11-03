"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CardBadges = _interopRequireDefault(require("./CardBadges"));

var _CardCover = _interopRequireDefault(require("./CardCover"));

var _CardDescData = _interopRequireDefault(require("./CardDescData"));

var _Limits = _interopRequireDefault(require("./Limits"));

var _OneOfCheckliststring = _interopRequireDefault(require("./OneOfCheckliststring"));

var _OneOfLabelstring = _interopRequireDefault(require("./OneOfLabelstring"));

var _OneOfstring = _interopRequireDefault(require("./OneOfstring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Card model module.
 * @module model/Card
 * @version 0.0.1
 */
var Card = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Card</code>.
   * @alias module:model/Card
   */
  function Card() {
    _classCallCheck(this, Card);

    Card.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Card, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Card} obj Optional instance to populate.
     * @return {module:model/Card} The populated <code>Card</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Card();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('badges')) {
          obj['badges'] = _CardBadges["default"].constructFromObject(data['badges']);
        }

        if (data.hasOwnProperty('checkItemStates')) {
          obj['checkItemStates'] = _ApiClient["default"].convertToType(data['checkItemStates'], [_OneOfstring["default"]]);
        }

        if (data.hasOwnProperty('closed')) {
          obj['closed'] = _ApiClient["default"].convertToType(data['closed'], 'Boolean');
        }

        if (data.hasOwnProperty('coordinates')) {
          obj['coordinates'] = _ApiClient["default"].convertToType(data['coordinates'], 'String');
        }

        if (data.hasOwnProperty('creationMethod')) {
          obj['creationMethod'] = _ApiClient["default"].convertToType(data['creationMethod'], 'String');
        }

        if (data.hasOwnProperty('dateLastActivity')) {
          obj['dateLastActivity'] = _ApiClient["default"].convertToType(data['dateLastActivity'], 'Date');
        }

        if (data.hasOwnProperty('desc')) {
          obj['desc'] = _ApiClient["default"].convertToType(data['desc'], 'String');
        }

        if (data.hasOwnProperty('descData')) {
          obj['descData'] = _CardDescData["default"].constructFromObject(data['descData']);
        }

        if (data.hasOwnProperty('due')) {
          obj['due'] = _ApiClient["default"].convertToType(data['due'], 'Date');
        }

        if (data.hasOwnProperty('dueReminder')) {
          obj['dueReminder'] = _ApiClient["default"].convertToType(data['dueReminder'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('idBoard')) {
          obj['idBoard'] = _ApiClient["default"].convertToType(data['idBoard'], 'String');
        }

        if (data.hasOwnProperty('idChecklists')) {
          obj['idChecklists'] = _ApiClient["default"].convertToType(data['idChecklists'], [_OneOfCheckliststring["default"]]);
        }

        if (data.hasOwnProperty('idLabels')) {
          obj['idLabels'] = _ApiClient["default"].convertToType(data['idLabels'], [_OneOfLabelstring["default"]]);
        }

        if (data.hasOwnProperty('idList')) {
          obj['idList'] = _ApiClient["default"].convertToType(data['idList'], 'String');
        }

        if (data.hasOwnProperty('idMembers')) {
          obj['idMembers'] = _ApiClient["default"].convertToType(data['idMembers'], [_OneOfstring["default"]]);
        }

        if (data.hasOwnProperty('idMembersVoted')) {
          obj['idMembersVoted'] = _ApiClient["default"].convertToType(data['idMembersVoted'], [_OneOfstring["default"]]);
        }

        if (data.hasOwnProperty('idShort')) {
          obj['idShort'] = _ApiClient["default"].convertToType(data['idShort'], 'Number');
        }

        if (data.hasOwnProperty('idAttachmentCover')) {
          obj['idAttachmentCover'] = _ApiClient["default"].convertToType(data['idAttachmentCover'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], [_OneOfstring["default"]]);
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _Limits["default"].constructFromObject(data['limits']);
        }

        if (data.hasOwnProperty('locationName')) {
          obj['locationName'] = _ApiClient["default"].convertToType(data['locationName'], 'String');
        }

        if (data.hasOwnProperty('manualCoverAttachment')) {
          obj['manualCoverAttachment'] = _ApiClient["default"].convertToType(data['manualCoverAttachment'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pos')) {
          obj['pos'] = _ApiClient["default"].convertToType(data['pos'], 'Number');
        }

        if (data.hasOwnProperty('shortLink')) {
          obj['shortLink'] = _ApiClient["default"].convertToType(data['shortLink'], 'String');
        }

        if (data.hasOwnProperty('shortUrl')) {
          obj['shortUrl'] = _ApiClient["default"].convertToType(data['shortUrl'], 'String');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('cover')) {
          obj['cover'] = _CardCover["default"].constructFromObject(data['cover']);
        }
      }

      return obj;
    }
  }]);

  return Card;
}();
/**
 * @member {String} id
 */


Card.prototype['id'] = undefined;
/**
 * @member {String} address
 */

Card.prototype['address'] = undefined;
/**
 * @member {module:model/CardBadges} badges
 */

Card.prototype['badges'] = undefined;
/**
 * @member {Array.<module:model/OneOfstring>} checkItemStates
 */

Card.prototype['checkItemStates'] = undefined;
/**
 * @member {Boolean} closed
 */

Card.prototype['closed'] = undefined;
/**
 * @member {String} coordinates
 */

Card.prototype['coordinates'] = undefined;
/**
 * @member {String} creationMethod
 */

Card.prototype['creationMethod'] = undefined;
/**
 * @member {Date} dateLastActivity
 */

Card.prototype['dateLastActivity'] = undefined;
/**
 * @member {String} desc
 */

Card.prototype['desc'] = undefined;
/**
 * @member {module:model/CardDescData} descData
 */

Card.prototype['descData'] = undefined;
/**
 * @member {Date} due
 */

Card.prototype['due'] = undefined;
/**
 * @member {String} dueReminder
 */

Card.prototype['dueReminder'] = undefined;
/**
 * @member {String} email
 */

Card.prototype['email'] = undefined;
/**
 * @member {String} idBoard
 */

Card.prototype['idBoard'] = undefined;
/**
 * @member {Array.<module:model/OneOfCheckliststring>} idChecklists
 */

Card.prototype['idChecklists'] = undefined;
/**
 * @member {Array.<module:model/OneOfLabelstring>} idLabels
 */

Card.prototype['idLabels'] = undefined;
/**
 * @member {String} idList
 */

Card.prototype['idList'] = undefined;
/**
 * @member {Array.<module:model/OneOfstring>} idMembers
 */

Card.prototype['idMembers'] = undefined;
/**
 * @member {Array.<module:model/OneOfstring>} idMembersVoted
 */

Card.prototype['idMembersVoted'] = undefined;
/**
 * @member {Number} idShort
 */

Card.prototype['idShort'] = undefined;
/**
 * @member {String} idAttachmentCover
 */

Card.prototype['idAttachmentCover'] = undefined;
/**
 * @member {Array.<module:model/OneOfstring>} labels
 */

Card.prototype['labels'] = undefined;
/**
 * @member {module:model/Limits} limits
 */

Card.prototype['limits'] = undefined;
/**
 * @member {String} locationName
 */

Card.prototype['locationName'] = undefined;
/**
 * @member {Boolean} manualCoverAttachment
 */

Card.prototype['manualCoverAttachment'] = undefined;
/**
 * @member {String} name
 */

Card.prototype['name'] = undefined;
/**
 * @member {Number} pos
 */

Card.prototype['pos'] = undefined;
/**
 * @member {String} shortLink
 */

Card.prototype['shortLink'] = undefined;
/**
 * @member {String} shortUrl
 */

Card.prototype['shortUrl'] = undefined;
/**
 * @member {Boolean} subscribed
 */

Card.prototype['subscribed'] = undefined;
/**
 * @member {String} url
 */

Card.prototype['url'] = undefined;
/**
 * @member {module:model/CardCover} cover
 */

Card.prototype['cover'] = undefined;
var _default = Card;
exports["default"] = _default;