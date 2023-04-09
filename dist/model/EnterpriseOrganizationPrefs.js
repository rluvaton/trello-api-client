"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfstring = _interopRequireDefault(require("./AnyOfstring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnterpriseOrganizationPrefs model module.
 * @module model/EnterpriseOrganizationPrefs
 * @version 0.0.1
 */
var EnterpriseOrganizationPrefs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnterpriseOrganizationPrefs</code>.
   * @alias module:model/EnterpriseOrganizationPrefs
   */
  function EnterpriseOrganizationPrefs() {
    _classCallCheck(this, EnterpriseOrganizationPrefs);

    EnterpriseOrganizationPrefs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnterpriseOrganizationPrefs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnterpriseOrganizationPrefs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnterpriseOrganizationPrefs} obj Optional instance to populate.
     * @return {module:model/EnterpriseOrganizationPrefs} The populated <code>EnterpriseOrganizationPrefs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnterpriseOrganizationPrefs();

        if (data.hasOwnProperty('boardVisibilityRestrict')) {
          obj['boardVisibilityRestrict'] = _ApiClient["default"].convertToType(data['boardVisibilityRestrict'], Object);
        }

        if (data.hasOwnProperty('boardDeleteRestrict')) {
          obj['boardDeleteRestrict'] = _ApiClient["default"].convertToType(data['boardDeleteRestrict'], Object);
        }

        if (data.hasOwnProperty('attachmentRestrictions')) {
          obj['attachmentRestrictions'] = _ApiClient["default"].convertToType(data['attachmentRestrictions'], [_AnyOfstring["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EnterpriseOrganizationPrefs;
}();
/**
 * @member {Object} boardVisibilityRestrict
 */


EnterpriseOrganizationPrefs.prototype['boardVisibilityRestrict'] = undefined;
/**
 * @member {Object} boardDeleteRestrict
 */

EnterpriseOrganizationPrefs.prototype['boardDeleteRestrict'] = undefined;
/**
 * @member {Array.<module:model/AnyOfstring>} attachmentRestrictions
 */

EnterpriseOrganizationPrefs.prototype['attachmentRestrictions'] = undefined;
var _default = EnterpriseOrganizationPrefs;
exports["default"] = _default;