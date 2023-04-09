"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Color = _interopRequireDefault(require("./Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CardCover model module.
 * @module model/CardCover
 * @version 0.0.1
 */
var CardCover = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CardCover</code>.
   * @alias module:model/CardCover
   */
  function CardCover() {
    _classCallCheck(this, CardCover);

    CardCover.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CardCover, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CardCover</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardCover} obj Optional instance to populate.
     * @return {module:model/CardCover} The populated <code>CardCover</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CardCover();

        if (data.hasOwnProperty('idAttachment')) {
          obj['idAttachment'] = _ApiClient["default"].convertToType(data['idAttachment'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _Color["default"].constructFromObject(data['color']);
        }

        if (data.hasOwnProperty('idUploadedBackground')) {
          obj['idUploadedBackground'] = _ApiClient["default"].convertToType(data['idUploadedBackground'], 'Boolean');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'String');
        }

        if (data.hasOwnProperty('brightness')) {
          obj['brightness'] = _ApiClient["default"].convertToType(data['brightness'], 'String');
        }

        if (data.hasOwnProperty('isTemplate')) {
          obj['isTemplate'] = _ApiClient["default"].convertToType(data['isTemplate'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CardCover;
}();
/**
 * @member {String} idAttachment
 */


CardCover.prototype['idAttachment'] = undefined;
/**
 * @member {module:model/Color} color
 */

CardCover.prototype['color'] = undefined;
/**
 * @member {Boolean} idUploadedBackground
 */

CardCover.prototype['idUploadedBackground'] = undefined;
/**
 * @member {module:model/CardCover.SizeEnum} size
 */

CardCover.prototype['size'] = undefined;
/**
 * @member {module:model/CardCover.BrightnessEnum} brightness
 */

CardCover.prototype['brightness'] = undefined;
/**
 * @member {Boolean} isTemplate
 */

CardCover.prototype['isTemplate'] = undefined;
/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */

CardCover['SizeEnum'] = {
  /**
   * value: "normal"
   * @const
   */
  "normal": "normal"
};
/**
 * Allowed values for the <code>brightness</code> property.
 * @enum {String}
 * @readonly
 */

CardCover['BrightnessEnum'] = {
  /**
   * value: "light"
   * @const
   */
  "light": "light",

  /**
   * value: "dark"
   * @const
   */
  "dark": "dark"
};
var _default = CardCover;
exports["default"] = _default;