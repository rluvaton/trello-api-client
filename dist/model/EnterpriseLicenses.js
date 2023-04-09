"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfobject = _interopRequireDefault(require("./OneOfobject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnterpriseLicenses model module.
 * @module model/EnterpriseLicenses
 * @version 0.0.1
 */
var EnterpriseLicenses = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnterpriseLicenses</code>.
   * @alias module:model/EnterpriseLicenses
   */
  function EnterpriseLicenses() {
    _classCallCheck(this, EnterpriseLicenses);

    EnterpriseLicenses.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnterpriseLicenses, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnterpriseLicenses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnterpriseLicenses} obj Optional instance to populate.
     * @return {module:model/EnterpriseLicenses} The populated <code>EnterpriseLicenses</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnterpriseLicenses();

        if (data.hasOwnProperty('maxMembers')) {
          obj['maxMembers'] = _ApiClient["default"].convertToType(data['maxMembers'], 'Number');
        }

        if (data.hasOwnProperty('totalMembers')) {
          obj['totalMembers'] = _ApiClient["default"].convertToType(data['totalMembers'], 'Number');
        }

        if (data.hasOwnProperty('relatedEnterprises')) {
          obj['relatedEnterprises'] = _ApiClient["default"].convertToType(data['relatedEnterprises'], [_OneOfobject["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EnterpriseLicenses;
}();
/**
 * @member {Number} maxMembers
 */


EnterpriseLicenses.prototype['maxMembers'] = undefined;
/**
 * @member {Number} totalMembers
 */

EnterpriseLicenses.prototype['totalMembers'] = undefined;
/**
 * @member {Array.<module:model/OneOfobject>} relatedEnterprises
 */

EnterpriseLicenses.prototype['relatedEnterprises'] = undefined;
var _default = EnterpriseLicenses;
exports["default"] = _default;