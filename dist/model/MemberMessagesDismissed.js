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
 * The MemberMessagesDismissed model module.
 * @module model/MemberMessagesDismissed
 * @version 0.0.1
 */
var MemberMessagesDismissed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MemberMessagesDismissed</code>.
   * @alias module:model/MemberMessagesDismissed
   */
  function MemberMessagesDismissed() {
    _classCallCheck(this, MemberMessagesDismissed);

    MemberMessagesDismissed.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MemberMessagesDismissed, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MemberMessagesDismissed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberMessagesDismissed} obj Optional instance to populate.
     * @return {module:model/MemberMessagesDismissed} The populated <code>MemberMessagesDismissed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MemberMessagesDismissed();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'String');
        }

        if (data.hasOwnProperty('lastDismissed')) {
          obj['lastDismissed'] = _ApiClient["default"].convertToType(data['lastDismissed'], 'Date');
        }

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient["default"].convertToType(data['_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MemberMessagesDismissed;
}();
/**
 * @member {String} name
 */


MemberMessagesDismissed.prototype['name'] = undefined;
/**
 * @member {String} count
 */

MemberMessagesDismissed.prototype['count'] = undefined;
/**
 * @member {Date} lastDismissed
 */

MemberMessagesDismissed.prototype['lastDismissed'] = undefined;
/**
 * @member {String} _id
 */

MemberMessagesDismissed.prototype['_id'] = undefined;
var _default = MemberMessagesDismissed;
exports["default"] = _default;