"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BoardLabelNames = _interopRequireDefault(require("./BoardLabelNames"));

var _Limits = _interopRequireDefault(require("./Limits"));

var _Prefs = _interopRequireDefault(require("./Prefs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Board model module.
 * @module model/Board
 * @version 0.0.1
 */
var Board = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Board</code>.
   * @alias module:model/Board
   * @param id {String} 
   */
  function Board(id) {
    _classCallCheck(this, Board);

    Board.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Board, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Board</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Board} obj Optional instance to populate.
     * @return {module:model/Board} The populated <code>Board</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Board();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('desc')) {
          obj['desc'] = _ApiClient["default"].convertToType(data['desc'], 'String');
        }

        if (data.hasOwnProperty('descData')) {
          obj['descData'] = _ApiClient["default"].convertToType(data['descData'], 'String');
        }

        if (data.hasOwnProperty('closed')) {
          obj['closed'] = _ApiClient["default"].convertToType(data['closed'], 'Boolean');
        }

        if (data.hasOwnProperty('idMemberCreator')) {
          obj['idMemberCreator'] = _ApiClient["default"].convertToType(data['idMemberCreator'], 'String');
        }

        if (data.hasOwnProperty('idOrganization')) {
          obj['idOrganization'] = _ApiClient["default"].convertToType(data['idOrganization'], 'String');
        }

        if (data.hasOwnProperty('pinned')) {
          obj['pinned'] = _ApiClient["default"].convertToType(data['pinned'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('shortUrl')) {
          obj['shortUrl'] = _ApiClient["default"].convertToType(data['shortUrl'], 'String');
        }

        if (data.hasOwnProperty('prefs')) {
          obj['prefs'] = _Prefs["default"].constructFromObject(data['prefs']);
        }

        if (data.hasOwnProperty('labelNames')) {
          obj['labelNames'] = _BoardLabelNames["default"].constructFromObject(data['labelNames']);
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _Limits["default"].constructFromObject(data['limits']);
        }

        if (data.hasOwnProperty('starred')) {
          obj['starred'] = _ApiClient["default"].convertToType(data['starred'], 'Boolean');
        }

        if (data.hasOwnProperty('memberships')) {
          obj['memberships'] = _ApiClient["default"].convertToType(data['memberships'], 'String');
        }

        if (data.hasOwnProperty('shortLink')) {
          obj['shortLink'] = _ApiClient["default"].convertToType(data['shortLink'], 'String');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('powerUps')) {
          obj['powerUps'] = _ApiClient["default"].convertToType(data['powerUps'], 'String');
        }

        if (data.hasOwnProperty('dateLastActivity')) {
          obj['dateLastActivity'] = _ApiClient["default"].convertToType(data['dateLastActivity'], 'Date');
        }

        if (data.hasOwnProperty('dateLastView')) {
          obj['dateLastView'] = _ApiClient["default"].convertToType(data['dateLastView'], 'Date');
        }

        if (data.hasOwnProperty('idTags')) {
          obj['idTags'] = _ApiClient["default"].convertToType(data['idTags'], 'String');
        }

        if (data.hasOwnProperty('datePluginDisable')) {
          obj['datePluginDisable'] = _ApiClient["default"].convertToType(data['datePluginDisable'], 'Date');
        }

        if (data.hasOwnProperty('creationMethod')) {
          obj['creationMethod'] = _ApiClient["default"].convertToType(data['creationMethod'], 'String');
        }

        if (data.hasOwnProperty('ixUpdate')) {
          obj['ixUpdate'] = _ApiClient["default"].convertToType(data['ixUpdate'], 'Number');
        }

        if (data.hasOwnProperty('templateGallery')) {
          obj['templateGallery'] = _ApiClient["default"].convertToType(data['templateGallery'], 'String');
        }

        if (data.hasOwnProperty('enterpriseOwned')) {
          obj['enterpriseOwned'] = _ApiClient["default"].convertToType(data['enterpriseOwned'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Board;
}();
/**
 * @member {String} id
 */


Board.prototype['id'] = undefined;
/**
 * @member {String} desc
 */

Board.prototype['desc'] = undefined;
/**
 * @member {String} descData
 */

Board.prototype['descData'] = undefined;
/**
 * @member {Boolean} closed
 */

Board.prototype['closed'] = undefined;
/**
 * @member {String} idMemberCreator
 */

Board.prototype['idMemberCreator'] = undefined;
/**
 * @member {String} idOrganization
 */

Board.prototype['idOrganization'] = undefined;
/**
 * @member {Boolean} pinned
 */

Board.prototype['pinned'] = undefined;
/**
 * @member {String} url
 */

Board.prototype['url'] = undefined;
/**
 * @member {String} shortUrl
 */

Board.prototype['shortUrl'] = undefined;
/**
 * @member {module:model/Prefs} prefs
 */

Board.prototype['prefs'] = undefined;
/**
 * @member {module:model/BoardLabelNames} labelNames
 */

Board.prototype['labelNames'] = undefined;
/**
 * @member {module:model/Limits} limits
 */

Board.prototype['limits'] = undefined;
/**
 * @member {Boolean} starred
 */

Board.prototype['starred'] = undefined;
/**
 * @member {String} memberships
 */

Board.prototype['memberships'] = undefined;
/**
 * @member {String} shortLink
 */

Board.prototype['shortLink'] = undefined;
/**
 * @member {Boolean} subscribed
 */

Board.prototype['subscribed'] = undefined;
/**
 * @member {String} powerUps
 */

Board.prototype['powerUps'] = undefined;
/**
 * @member {Date} dateLastActivity
 */

Board.prototype['dateLastActivity'] = undefined;
/**
 * @member {Date} dateLastView
 */

Board.prototype['dateLastView'] = undefined;
/**
 * @member {String} idTags
 */

Board.prototype['idTags'] = undefined;
/**
 * @member {Date} datePluginDisable
 */

Board.prototype['datePluginDisable'] = undefined;
/**
 * @member {String} creationMethod
 */

Board.prototype['creationMethod'] = undefined;
/**
 * @member {Number} ixUpdate
 */

Board.prototype['ixUpdate'] = undefined;
/**
 * @member {String} templateGallery
 */

Board.prototype['templateGallery'] = undefined;
/**
 * @member {Boolean} enterpriseOwned
 */

Board.prototype['enterpriseOwned'] = undefined;
var _default = Board;
exports["default"] = _default;