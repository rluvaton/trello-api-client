"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnterprisePrefsSignup = _interopRequireDefault(require("./EnterprisePrefsSignup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnterprisePrefs model module.
 * @module model/EnterprisePrefs
 * @version 0.0.1
 */
var EnterprisePrefs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnterprisePrefs</code>.
   * @alias module:model/EnterprisePrefs
   */
  function EnterprisePrefs() {
    _classCallCheck(this, EnterprisePrefs);

    EnterprisePrefs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnterprisePrefs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnterprisePrefs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnterprisePrefs} obj Optional instance to populate.
     * @return {module:model/EnterprisePrefs} The populated <code>EnterprisePrefs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnterprisePrefs();

        if (data.hasOwnProperty('ssoOnly')) {
          obj['ssoOnly'] = _ApiClient["default"].convertToType(data['ssoOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('signup')) {
          obj['signup'] = _EnterprisePrefsSignup["default"].constructFromObject(data['signup']);
        }

        if (data.hasOwnProperty('mandatoryTransferDate')) {
          obj['mandatoryTransferDate'] = _ApiClient["default"].convertToType(data['mandatoryTransferDate'], 'Date');
        }

        if (data.hasOwnProperty('brandingColor')) {
          obj['brandingColor'] = _ApiClient["default"].convertToType(data['brandingColor'], 'String');
        }

        if (data.hasOwnProperty('autoJoinOrganizations')) {
          obj['autoJoinOrganizations'] = _ApiClient["default"].convertToType(data['autoJoinOrganizations'], 'Boolean');
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _ApiClient["default"].convertToType(data['notifications'], Object);
        }

        if (data.hasOwnProperty('maxMembers')) {
          obj['maxMembers'] = _ApiClient["default"].convertToType(data['maxMembers'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EnterprisePrefs;
}();
/**
 * @member {Boolean} ssoOnly
 */


EnterprisePrefs.prototype['ssoOnly'] = undefined;
/**
 * @member {module:model/EnterprisePrefsSignup} signup
 */

EnterprisePrefs.prototype['signup'] = undefined;
/**
 * @member {Date} mandatoryTransferDate
 */

EnterprisePrefs.prototype['mandatoryTransferDate'] = undefined;
/**
 * @member {String} brandingColor
 */

EnterprisePrefs.prototype['brandingColor'] = undefined;
/**
 * @member {Boolean} autoJoinOrganizations
 */

EnterprisePrefs.prototype['autoJoinOrganizations'] = undefined;
/**
 * @member {Object} notifications
 */

EnterprisePrefs.prototype['notifications'] = undefined;
/**
 * @member {Number} maxMembers
 */

EnterprisePrefs.prototype['maxMembers'] = undefined;
var _default = EnterprisePrefs;
exports["default"] = _default;