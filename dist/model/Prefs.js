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
 * The Prefs model module.
 * @module model/Prefs
 * @version 0.0.1
 */
var Prefs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Prefs</code>.
   * @alias module:model/Prefs
   */
  function Prefs() {
    _classCallCheck(this, Prefs);

    Prefs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Prefs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Prefs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Prefs} obj Optional instance to populate.
     * @return {module:model/Prefs} The populated <code>Prefs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Prefs();

        if (data.hasOwnProperty('permissionLevel')) {
          obj['permissionLevel'] = _ApiClient["default"].convertToType(data['permissionLevel'], 'String');
        }

        if (data.hasOwnProperty('hideVotes')) {
          obj['hideVotes'] = _ApiClient["default"].convertToType(data['hideVotes'], 'Boolean');
        }

        if (data.hasOwnProperty('voting')) {
          obj['voting'] = _ApiClient["default"].convertToType(data['voting'], 'String');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }

        if (data.hasOwnProperty('invitations')) {
          obj['invitations'] = _ApiClient["default"].convertToType(data['invitations'], 'String');
        }

        if (data.hasOwnProperty('selfJoin')) {
          obj['selfJoin'] = _ApiClient["default"].convertToType(data['selfJoin'], 'Boolean');
        }

        if (data.hasOwnProperty('cardCovers')) {
          obj['cardCovers'] = _ApiClient["default"].convertToType(data['cardCovers'], 'Boolean');
        }

        if (data.hasOwnProperty('isTemplate')) {
          obj['isTemplate'] = _ApiClient["default"].convertToType(data['isTemplate'], 'Boolean');
        }

        if (data.hasOwnProperty('cardAging')) {
          obj['cardAging'] = _ApiClient["default"].convertToType(data['cardAging'], 'String');
        }

        if (data.hasOwnProperty('calendarFeedEnabled')) {
          obj['calendarFeedEnabled'] = _ApiClient["default"].convertToType(data['calendarFeedEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('background')) {
          obj['background'] = _ApiClient["default"].convertToType(data['background'], 'String');
        }

        if (data.hasOwnProperty('backgroundImage')) {
          obj['backgroundImage'] = _ApiClient["default"].convertToType(data['backgroundImage'], 'String');
        }

        if (data.hasOwnProperty('backgroundImageScaled')) {
          obj['backgroundImageScaled'] = _ApiClient["default"].convertToType(data['backgroundImageScaled'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Prefs;
}();
/**
 * @member {module:model/Prefs.PermissionLevelEnum} permissionLevel
 */


Prefs.prototype['permissionLevel'] = undefined;
/**
 * @member {Boolean} hideVotes
 */

Prefs.prototype['hideVotes'] = undefined;
/**
 * @member {module:model/Prefs.VotingEnum} voting
 */

Prefs.prototype['voting'] = undefined;
/**
 * @member {String} comments
 */

Prefs.prototype['comments'] = undefined;
/**
 * @member {module:model/Prefs.InvitationsEnum} invitations
 */

Prefs.prototype['invitations'] = undefined;
/**
 * @member {Boolean} selfJoin
 */

Prefs.prototype['selfJoin'] = undefined;
/**
 * @member {Boolean} cardCovers
 */

Prefs.prototype['cardCovers'] = undefined;
/**
 * @member {Boolean} isTemplate
 */

Prefs.prototype['isTemplate'] = undefined;
/**
 * @member {module:model/Prefs.CardAgingEnum} cardAging
 */

Prefs.prototype['cardAging'] = undefined;
/**
 * @member {Boolean} calendarFeedEnabled
 */

Prefs.prototype['calendarFeedEnabled'] = undefined;
/**
 * @member {String} background
 */

Prefs.prototype['background'] = undefined;
/**
 * @member {String} backgroundImage
 */

Prefs.prototype['backgroundImage'] = undefined;
/**
 * @member {String} backgroundImageScaled
 */

Prefs.prototype['backgroundImageScaled'] = undefined;
/**
 * Allowed values for the <code>permissionLevel</code> property.
 * @enum {String}
 * @readonly
 */

Prefs['PermissionLevelEnum'] = {
  /**
   * value: "org"
   * @const
   */
  "org": "org",

  /**
   * value: "board"
   * @const
   */
  "board": "board"
};
/**
 * Allowed values for the <code>voting</code> property.
 * @enum {String}
 * @readonly
 */

Prefs['VotingEnum'] = {
  /**
   * value: "disabled"
   * @const
   */
  "disabled": "disabled",

  /**
   * value: "enabled"
   * @const
   */
  "enabled": "enabled"
};
/**
 * Allowed values for the <code>invitations</code> property.
 * @enum {String}
 * @readonly
 */

Prefs['InvitationsEnum'] = {
  /**
   * value: "admins"
   * @const
   */
  "admins": "admins",

  /**
   * value: "members"
   * @const
   */
  "members": "members"
};
/**
 * Allowed values for the <code>cardAging</code> property.
 * @enum {String}
 * @readonly
 */

Prefs['CardAgingEnum'] = {
  /**
   * value: "pirate"
   * @const
   */
  "pirate": "pirate",

  /**
   * value: "normal"
   * @const
   */
  "normal": "normal"
};
var _default = Prefs;
exports["default"] = _default;