"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfstring = _interopRequireDefault(require("./AnyOfstring"));

var _EnterpriseIdp = _interopRequireDefault(require("./EnterpriseIdp"));

var _EnterpriseLicenses = _interopRequireDefault(require("./EnterpriseLicenses"));

var _EnterpriseOrganizationPrefs = _interopRequireDefault(require("./EnterpriseOrganizationPrefs"));

var _EnterprisePrefs = _interopRequireDefault(require("./EnterprisePrefs"));

var _OneOfnumber = _interopRequireDefault(require("./OneOfnumber"));

var _OneOfstring = _interopRequireDefault(require("./OneOfstring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Enterprise model module.
 * @module model/Enterprise
 * @version 0.0.1
 */
var Enterprise = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Enterprise</code>.
   * @alias module:model/Enterprise
   */
  function Enterprise() {
    _classCallCheck(this, Enterprise);

    Enterprise.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Enterprise, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Enterprise</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Enterprise} obj Optional instance to populate.
     * @return {module:model/Enterprise} The populated <code>Enterprise</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Enterprise();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('logoHash')) {
          obj['logoHash'] = _ApiClient["default"].convertToType(data['logoHash'], 'String');
        }

        if (data.hasOwnProperty('logoUrl')) {
          obj['logoUrl'] = _ApiClient["default"].convertToType(data['logoUrl'], 'String');
        }

        if (data.hasOwnProperty('prefs')) {
          obj['prefs'] = _EnterprisePrefs["default"].constructFromObject(data['prefs']);
        }

        if (data.hasOwnProperty('organizationPrefs')) {
          obj['organizationPrefs'] = _EnterpriseOrganizationPrefs["default"].constructFromObject(data['organizationPrefs']);
        }

        if (data.hasOwnProperty('ssoActivationFailed')) {
          obj['ssoActivationFailed'] = _ApiClient["default"].convertToType(data['ssoActivationFailed'], 'Boolean');
        }

        if (data.hasOwnProperty('idAdmins')) {
          obj['idAdmins'] = _ApiClient["default"].convertToType(data['idAdmins'], [_AnyOfstring["default"]]);
        }

        if (data.hasOwnProperty('enterpriseDomains')) {
          obj['enterpriseDomains'] = _ApiClient["default"].convertToType(data['enterpriseDomains'], [_AnyOfstring["default"]]);
        }

        if (data.hasOwnProperty('isRealEnterprise')) {
          obj['isRealEnterprise'] = _ApiClient["default"].convertToType(data['isRealEnterprise'], 'Boolean');
        }

        if (data.hasOwnProperty('pluginWhitelistingEnabled')) {
          obj['pluginWhitelistingEnabled'] = _ApiClient["default"].convertToType(data['pluginWhitelistingEnabled'], [_AnyOfstring["default"]]);
        }

        if (data.hasOwnProperty('idOrganizations')) {
          obj['idOrganizations'] = _ApiClient["default"].convertToType(data['idOrganizations'], [_OneOfstring["default"]]);
        }

        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient["default"].convertToType(data['products'], [_OneOfnumber["default"]]);
        }

        if (data.hasOwnProperty('licenses')) {
          obj['licenses'] = _EnterpriseLicenses["default"].constructFromObject(data['licenses']);
        }

        if (data.hasOwnProperty('domains')) {
          obj['domains'] = _ApiClient["default"].convertToType(data['domains'], [_AnyOfstring["default"]]);
        }

        if (data.hasOwnProperty('dateOrganizationPrefsLastUpdated')) {
          obj['dateOrganizationPrefsLastUpdated'] = _ApiClient["default"].convertToType(data['dateOrganizationPrefsLastUpdated'], 'Date');
        }

        if (data.hasOwnProperty('idp')) {
          obj['idp'] = _EnterpriseIdp["default"].constructFromObject(data['idp']);
        }
      }

      return obj;
    }
  }]);

  return Enterprise;
}();
/**
 * @member {String} id
 */


Enterprise.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Enterprise.prototype['name'] = undefined;
/**
 * @member {String} displayName
 */

Enterprise.prototype['displayName'] = undefined;
/**
 * @member {String} logoHash
 */

Enterprise.prototype['logoHash'] = undefined;
/**
 * @member {String} logoUrl
 */

Enterprise.prototype['logoUrl'] = undefined;
/**
 * @member {module:model/EnterprisePrefs} prefs
 */

Enterprise.prototype['prefs'] = undefined;
/**
 * @member {module:model/EnterpriseOrganizationPrefs} organizationPrefs
 */

Enterprise.prototype['organizationPrefs'] = undefined;
/**
 * @member {Boolean} ssoActivationFailed
 */

Enterprise.prototype['ssoActivationFailed'] = undefined;
/**
 * @member {Array.<module:model/AnyOfstring>} idAdmins
 */

Enterprise.prototype['idAdmins'] = undefined;
/**
 * @member {Array.<module:model/AnyOfstring>} enterpriseDomains
 */

Enterprise.prototype['enterpriseDomains'] = undefined;
/**
 * @member {Boolean} isRealEnterprise
 */

Enterprise.prototype['isRealEnterprise'] = undefined;
/**
 * @member {Array.<module:model/AnyOfstring>} pluginWhitelistingEnabled
 */

Enterprise.prototype['pluginWhitelistingEnabled'] = undefined;
/**
 * @member {Array.<module:model/OneOfstring>} idOrganizations
 */

Enterprise.prototype['idOrganizations'] = undefined;
/**
 * @member {Array.<module:model/OneOfnumber>} products
 */

Enterprise.prototype['products'] = undefined;
/**
 * @member {module:model/EnterpriseLicenses} licenses
 */

Enterprise.prototype['licenses'] = undefined;
/**
 * @member {Array.<module:model/AnyOfstring>} domains
 */

Enterprise.prototype['domains'] = undefined;
/**
 * @member {Date} dateOrganizationPrefsLastUpdated
 */

Enterprise.prototype['dateOrganizationPrefsLastUpdated'] = undefined;
/**
 * @member {module:model/EnterpriseIdp} idp
 */

Enterprise.prototype['idp'] = undefined;
var _default = Enterprise;
exports["default"] = _default;