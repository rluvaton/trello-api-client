"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CardsIdValue = _interopRequireDefault(require("./CardsIdValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Cover model module.
 * @module model/Cover
 * @version 0.0.1
 */
var Cover = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Cover</code>.
   * @alias module:model/Cover
   */
  function Cover() {
    _classCallCheck(this, Cover);

    Cover.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Cover, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Cover</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cover} obj Optional instance to populate.
     * @return {module:model/Cover} The populated <code>Cover</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Cover();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _CardsIdValue["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return Cover;
}();
/**
 * @member {module:model/CardsIdValue} value
 */


Cover.prototype['value'] = undefined;
var _default = Cover;
exports["default"] = _default;