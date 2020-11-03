"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomStickerScaled = _interopRequireDefault(require("./CustomStickerScaled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomSticker model module.
 * @module model/CustomSticker
 * @version 0.0.1
 */
var CustomSticker = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomSticker</code>.
   * @alias module:model/CustomSticker
   */
  function CustomSticker() {
    _classCallCheck(this, CustomSticker);

    CustomSticker.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomSticker, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomSticker</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomSticker} obj Optional instance to populate.
     * @return {module:model/CustomSticker} The populated <code>CustomSticker</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomSticker();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('scaled')) {
          obj['scaled'] = _ApiClient["default"].convertToType(data['scaled'], [_CustomStickerScaled["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CustomSticker;
}();
/**
 * @member {String} id
 */


CustomSticker.prototype['id'] = undefined;
/**
 * @member {String} url
 */

CustomSticker.prototype['url'] = undefined;
/**
 * @member {Array.<module:model/CustomStickerScaled>} scaled
 */

CustomSticker.prototype['scaled'] = undefined;
var _default = CustomSticker;
exports["default"] = _default;