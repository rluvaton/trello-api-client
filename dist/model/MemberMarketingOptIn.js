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
 * The MemberMarketingOptIn model module.
 * @module model/MemberMarketingOptIn
 * @version 0.0.1
 */
var MemberMarketingOptIn = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MemberMarketingOptIn</code>.
   * @alias module:model/MemberMarketingOptIn
   */
  function MemberMarketingOptIn() {
    _classCallCheck(this, MemberMarketingOptIn);

    MemberMarketingOptIn.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MemberMarketingOptIn, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MemberMarketingOptIn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberMarketingOptIn} obj Optional instance to populate.
     * @return {module:model/MemberMarketingOptIn} The populated <code>MemberMarketingOptIn</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MemberMarketingOptIn();

        if (data.hasOwnProperty('optedIn')) {
          obj['optedIn'] = _ApiClient["default"].convertToType(data['optedIn'], 'Boolean');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return MemberMarketingOptIn;
}();
/**
 * @member {Boolean} optedIn
 */


MemberMarketingOptIn.prototype['optedIn'] = undefined;
/**
 * @member {Date} date
 */

MemberMarketingOptIn.prototype['date'] = undefined;
var _default = MemberMarketingOptIn;
exports["default"] = _default;