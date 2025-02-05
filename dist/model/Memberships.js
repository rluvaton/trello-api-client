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
 * The Memberships model module.
 * @module model/Memberships
 * @version 0.0.1
 */
var Memberships = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Memberships</code>.
   * @alias module:model/Memberships
   */
  function Memberships() {
    _classCallCheck(this, Memberships);

    Memberships.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Memberships, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Memberships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Memberships} obj Optional instance to populate.
     * @return {module:model/Memberships} The populated <code>Memberships</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Memberships();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Memberships;
}();
/**
 * @member {String} id
 */


Memberships.prototype['id'] = undefined;
var _default = Memberships;
exports["default"] = _default;