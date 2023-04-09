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
 * The MemberPrefsTimezoneInfo model module.
 * @module model/MemberPrefsTimezoneInfo
 * @version 0.0.1
 */
var MemberPrefsTimezoneInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MemberPrefsTimezoneInfo</code>.
   * @alias module:model/MemberPrefsTimezoneInfo
   */
  function MemberPrefsTimezoneInfo() {
    _classCallCheck(this, MemberPrefsTimezoneInfo);

    MemberPrefsTimezoneInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MemberPrefsTimezoneInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MemberPrefsTimezoneInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberPrefsTimezoneInfo} obj Optional instance to populate.
     * @return {module:model/MemberPrefsTimezoneInfo} The populated <code>MemberPrefsTimezoneInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MemberPrefsTimezoneInfo();

        if (data.hasOwnProperty('offsetCurrent')) {
          obj['offsetCurrent'] = _ApiClient["default"].convertToType(data['offsetCurrent'], 'Number');
        }

        if (data.hasOwnProperty('timezoneCurrent')) {
          obj['timezoneCurrent'] = _ApiClient["default"].convertToType(data['timezoneCurrent'], 'String');
        }

        if (data.hasOwnProperty('offsetNext')) {
          obj['offsetNext'] = _ApiClient["default"].convertToType(data['offsetNext'], 'Number');
        }

        if (data.hasOwnProperty('dateNext')) {
          obj['dateNext'] = _ApiClient["default"].convertToType(data['dateNext'], 'Date');
        }

        if (data.hasOwnProperty('timezoneNext')) {
          obj['timezoneNext'] = _ApiClient["default"].convertToType(data['timezoneNext'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MemberPrefsTimezoneInfo;
}();
/**
 * @member {Number} offsetCurrent
 */


MemberPrefsTimezoneInfo.prototype['offsetCurrent'] = undefined;
/**
 * @member {String} timezoneCurrent
 */

MemberPrefsTimezoneInfo.prototype['timezoneCurrent'] = undefined;
/**
 * @member {Number} offsetNext
 */

MemberPrefsTimezoneInfo.prototype['offsetNext'] = undefined;
/**
 * @member {Date} dateNext
 */

MemberPrefsTimezoneInfo.prototype['dateNext'] = undefined;
/**
 * @member {String} timezoneNext
 */

MemberPrefsTimezoneInfo.prototype['timezoneNext'] = undefined;
var _default = MemberPrefsTimezoneInfo;
exports["default"] = _default;