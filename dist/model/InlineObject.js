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
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 0.0.1
 */
var InlineObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject</code>.
   * @alias module:model/InlineObject
   */
  function InlineObject() {
    _classCallCheck(this, InlineObject);

    InlineObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject();

        if (data.hasOwnProperty('shortName')) {
          obj['shortName'] = _ApiClient["default"].convertToType(data['shortName'], 'String');
        }

        if (data.hasOwnProperty('skinVariation')) {
          obj['skinVariation'] = _ApiClient["default"].convertToType(data['skinVariation'], 'String');
        }

        if (data.hasOwnProperty('native')) {
          obj['native'] = _ApiClient["default"].convertToType(data['native'], 'String');
        }

        if (data.hasOwnProperty('unified')) {
          obj['unified'] = _ApiClient["default"].convertToType(data['unified'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject;
}();
/**
 * The primary `shortName` of the emoji to add. See [/emoji](#emoji)
 * @member {String} shortName
 */


InlineObject.prototype['shortName'] = undefined;
/**
 * The `skinVariation` of the emoji to add. See [/emoji](#emoji)
 * @member {String} skinVariation
 */

InlineObject.prototype['skinVariation'] = undefined;
/**
 * The emoji to add as a native unicode emoji. See [/emoji](#emoji)
 * @member {String} native
 */

InlineObject.prototype['native'] = undefined;
/**
 * The `unified` value of the emoji to add. See [/emoji](#emoji)
 * @member {String} unified
 */

InlineObject.prototype['unified'] = undefined;
var _default = InlineObject;
exports["default"] = _default;