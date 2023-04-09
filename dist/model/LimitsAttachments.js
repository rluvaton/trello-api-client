"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LimitsObject = _interopRequireDefault(require("./LimitsObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LimitsAttachments model module.
 * @module model/LimitsAttachments
 * @version 0.0.1
 */
var LimitsAttachments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LimitsAttachments</code>.
   * @alias module:model/LimitsAttachments
   */
  function LimitsAttachments() {
    _classCallCheck(this, LimitsAttachments);

    LimitsAttachments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LimitsAttachments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LimitsAttachments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitsAttachments} obj Optional instance to populate.
     * @return {module:model/LimitsAttachments} The populated <code>LimitsAttachments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LimitsAttachments();

        if (data.hasOwnProperty('perBoard')) {
          obj['perBoard'] = _LimitsObject["default"].constructFromObject(data['perBoard']);
        }
      }

      return obj;
    }
  }]);

  return LimitsAttachments;
}();
/**
 * @member {module:model/LimitsObject} perBoard
 */


LimitsAttachments.prototype['perBoard'] = undefined;
var _default = LimitsAttachments;
exports["default"] = _default;