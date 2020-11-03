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
 * The EnterprisePrefsSignup model module.
 * @module model/EnterprisePrefsSignup
 * @version 0.0.1
 */
var EnterprisePrefsSignup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnterprisePrefsSignup</code>.
   * @alias module:model/EnterprisePrefsSignup
   */
  function EnterprisePrefsSignup() {
    _classCallCheck(this, EnterprisePrefsSignup);

    EnterprisePrefsSignup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnterprisePrefsSignup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnterprisePrefsSignup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnterprisePrefsSignup} obj Optional instance to populate.
     * @return {module:model/EnterprisePrefsSignup} The populated <code>EnterprisePrefsSignup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnterprisePrefsSignup();

        if (data.hasOwnProperty('banner')) {
          obj['banner'] = _ApiClient["default"].convertToType(data['banner'], 'String');
        }

        if (data.hasOwnProperty('bannerHtml')) {
          obj['bannerHtml'] = _ApiClient["default"].convertToType(data['bannerHtml'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EnterprisePrefsSignup;
}();
/**
 * @member {String} banner
 */


EnterprisePrefsSignup.prototype['banner'] = undefined;
/**
 * @member {String} bannerHtml
 */

EnterprisePrefsSignup.prototype['bannerHtml'] = undefined;
var _default = EnterprisePrefsSignup;
exports["default"] = _default;