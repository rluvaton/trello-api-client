"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MemberPrefsPrivacy = _interopRequireDefault(require("./MemberPrefsPrivacy"));

var _MemberPrefsTimezoneInfo = _interopRequireDefault(require("./MemberPrefsTimezoneInfo"));

var _MemberPrefsTwoFactor = _interopRequireDefault(require("./MemberPrefsTwoFactor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MemberPrefs model module.
 * @module model/MemberPrefs
 * @version 0.0.1
 */
var MemberPrefs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MemberPrefs</code>.
   * @alias module:model/MemberPrefs
   */
  function MemberPrefs() {
    _classCallCheck(this, MemberPrefs);

    MemberPrefs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MemberPrefs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MemberPrefs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberPrefs} obj Optional instance to populate.
     * @return {module:model/MemberPrefs} The populated <code>MemberPrefs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MemberPrefs();

        if (data.hasOwnProperty('timezoneInfo')) {
          obj['timezoneInfo'] = _MemberPrefsTimezoneInfo["default"].constructFromObject(data['timezoneInfo']);
        }

        if (data.hasOwnProperty('privacy')) {
          obj['privacy'] = _MemberPrefsPrivacy["default"].constructFromObject(data['privacy']);
        }

        if (data.hasOwnProperty('sendSummaries')) {
          obj['sendSummaries'] = _ApiClient["default"].convertToType(data['sendSummaries'], 'Boolean');
        }

        if (data.hasOwnProperty('minutesBetweenSummaries')) {
          obj['minutesBetweenSummaries'] = _ApiClient["default"].convertToType(data['minutesBetweenSummaries'], 'Number');
        }

        if (data.hasOwnProperty('minutesBeforeDeadlineToNotify')) {
          obj['minutesBeforeDeadlineToNotify'] = _ApiClient["default"].convertToType(data['minutesBeforeDeadlineToNotify'], 'Number');
        }

        if (data.hasOwnProperty('colorBlind')) {
          obj['colorBlind'] = _ApiClient["default"].convertToType(data['colorBlind'], 'Boolean');
        }

        if (data.hasOwnProperty('locale')) {
          obj['locale'] = _ApiClient["default"].convertToType(data['locale'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('twoFactor')) {
          obj['twoFactor'] = _MemberPrefsTwoFactor["default"].constructFromObject(data['twoFactor']);
        }
      }

      return obj;
    }
  }]);

  return MemberPrefs;
}();
/**
 * @member {module:model/MemberPrefsTimezoneInfo} timezoneInfo
 */


MemberPrefs.prototype['timezoneInfo'] = undefined;
/**
 * @member {module:model/MemberPrefsPrivacy} privacy
 */

MemberPrefs.prototype['privacy'] = undefined;
/**
 * @member {Boolean} sendSummaries
 */

MemberPrefs.prototype['sendSummaries'] = undefined;
/**
 * @member {Number} minutesBetweenSummaries
 */

MemberPrefs.prototype['minutesBetweenSummaries'] = undefined;
/**
 * @member {Number} minutesBeforeDeadlineToNotify
 */

MemberPrefs.prototype['minutesBeforeDeadlineToNotify'] = undefined;
/**
 * @member {Boolean} colorBlind
 */

MemberPrefs.prototype['colorBlind'] = undefined;
/**
 * @member {String} locale
 */

MemberPrefs.prototype['locale'] = undefined;
/**
 * @member {String} timezone
 */

MemberPrefs.prototype['timezone'] = undefined;
/**
 * @member {module:model/MemberPrefsTwoFactor} twoFactor
 */

MemberPrefs.prototype['twoFactor'] = undefined;
var _default = MemberPrefs;
exports["default"] = _default;