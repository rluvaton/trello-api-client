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
 * The MemberPrefsPrivacy model module.
 * @module model/MemberPrefsPrivacy
 * @version 0.0.1
 */
var MemberPrefsPrivacy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MemberPrefsPrivacy</code>.
   * @alias module:model/MemberPrefsPrivacy
   */
  function MemberPrefsPrivacy() {
    _classCallCheck(this, MemberPrefsPrivacy);

    MemberPrefsPrivacy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MemberPrefsPrivacy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MemberPrefsPrivacy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberPrefsPrivacy} obj Optional instance to populate.
     * @return {module:model/MemberPrefsPrivacy} The populated <code>MemberPrefsPrivacy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MemberPrefsPrivacy();

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MemberPrefsPrivacy;
}();
/**
 * @member {module:model/MemberPrefsPrivacy.FullNameEnum} fullName
 */


MemberPrefsPrivacy.prototype['fullName'] = undefined;
/**
 * @member {module:model/MemberPrefsPrivacy.AvatarEnum} avatar
 */

MemberPrefsPrivacy.prototype['avatar'] = undefined;
/**
 * Allowed values for the <code>fullName</code> property.
 * @enum {String}
 * @readonly
 */

MemberPrefsPrivacy['FullNameEnum'] = {
  /**
   * value: "public"
   * @const
   */
  "public": "public",

  /**
   * value: "private"
   * @const
   */
  "private": "private",

  /**
   * value: "collaborator"
   * @const
   */
  "collaborator": "collaborator"
};
/**
 * Allowed values for the <code>avatar</code> property.
 * @enum {String}
 * @readonly
 */

MemberPrefsPrivacy['AvatarEnum'] = {
  /**
   * value: "public"
   * @const
   */
  "public": "public",

  /**
   * value: "private"
   * @const
   */
  "private": "private",

  /**
   * value: "collaborator"
   * @const
   */
  "collaborator": "collaborator"
};
var _default = MemberPrefsPrivacy;
exports["default"] = _default;