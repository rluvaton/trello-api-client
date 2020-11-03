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
 * The CardsIdValue model module.
 * @module model/CardsIdValue
 * @version 0.0.1
 */
var CardsIdValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CardsIdValue</code>.
   * An object containing information regarding the card&#39;s cover   &#x60;brightness&#x60; can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an &#x60;idAttachment&#x60; at the same time.
   * @alias module:model/CardsIdValue
   */
  function CardsIdValue() {
    _classCallCheck(this, CardsIdValue);

    CardsIdValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CardsIdValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CardsIdValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardsIdValue} obj Optional instance to populate.
     * @return {module:model/CardsIdValue} The populated <code>CardsIdValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CardsIdValue();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('brightness')) {
          obj['brightness'] = _ApiClient["default"].convertToType(data['brightness'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CardsIdValue;
}();
/**
 * One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green`
 * @member {module:model/CardsIdValue.ColorEnum} color
 */


CardsIdValue.prototype['color'] = undefined;
/**
 * Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light
 * @member {module:model/CardsIdValue.BrightnessEnum} brightness
 */

CardsIdValue.prototype['brightness'] = undefined;
/**
 * Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work.
 * @member {String} url
 */

CardsIdValue.prototype['url'] = undefined;
/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */

CardsIdValue['ColorEnum'] = {
  /**
   * value: "pink"
   * @const
   */
  "pink": "pink",

  /**
   * value: "yellow"
   * @const
   */
  "yellow": "yellow",

  /**
   * value: "lime"
   * @const
   */
  "lime": "lime",

  /**
   * value: "blue"
   * @const
   */
  "blue": "blue",

  /**
   * value: "black"
   * @const
   */
  "black": "black",

  /**
   * value: "orange"
   * @const
   */
  "orange": "orange",

  /**
   * value: "red"
   * @const
   */
  "red": "red",

  /**
   * value: "purple"
   * @const
   */
  "purple": "purple",

  /**
   * value: "sky"
   * @const
   */
  "sky": "sky",

  /**
   * value: "green"
   * @const
   */
  "green": "green"
};
/**
 * Allowed values for the <code>brightness</code> property.
 * @enum {String}
 * @readonly
 */

CardsIdValue['BrightnessEnum'] = {
  /**
   * value: "dark"
   * @const
   */
  "dark": "dark",

  /**
   * value: "light"
   * @const
   */
  "light": "light"
};
var _default = CardsIdValue;
exports["default"] = _default;