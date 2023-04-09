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
 * The EmojiTrello model module.
 * @module model/EmojiTrello
 * @version 0.0.1
 */
var EmojiTrello = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmojiTrello</code>.
   * @alias module:model/EmojiTrello
   */
  function EmojiTrello() {
    _classCallCheck(this, EmojiTrello);

    EmojiTrello.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmojiTrello, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmojiTrello</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmojiTrello} obj Optional instance to populate.
     * @return {module:model/EmojiTrello} The populated <code>EmojiTrello</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmojiTrello();

        if (data.hasOwnProperty('unified')) {
          obj['unified'] = _ApiClient["default"].convertToType(data['unified'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('native')) {
          obj['native'] = _ApiClient["default"].convertToType(data['native'], 'String');
        }

        if (data.hasOwnProperty('shortName')) {
          obj['shortName'] = _ApiClient["default"].convertToType(data['shortName'], 'String');
        }

        if (data.hasOwnProperty('shortNames')) {
          obj['shortNames'] = _ApiClient["default"].convertToType(data['shortNames'], ['String']);
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('texts')) {
          obj['texts'] = _ApiClient["default"].convertToType(data['texts'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('sheetX')) {
          obj['sheetX'] = _ApiClient["default"].convertToType(data['sheetX'], 'Number');
        }

        if (data.hasOwnProperty('sheetY')) {
          obj['sheetY'] = _ApiClient["default"].convertToType(data['sheetY'], 'Number');
        }

        if (data.hasOwnProperty('tts')) {
          obj['tts'] = _ApiClient["default"].convertToType(data['tts'], 'String');
        }

        if (data.hasOwnProperty('keywords')) {
          obj['keywords'] = _ApiClient["default"].convertToType(data['keywords'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return EmojiTrello;
}();
/**
 * @member {String} unified
 */


EmojiTrello.prototype['unified'] = undefined;
/**
 * @member {String} name
 */

EmojiTrello.prototype['name'] = undefined;
/**
 * @member {String} native
 */

EmojiTrello.prototype['native'] = undefined;
/**
 * @member {String} shortName
 */

EmojiTrello.prototype['shortName'] = undefined;
/**
 * @member {Array.<String>} shortNames
 */

EmojiTrello.prototype['shortNames'] = undefined;
/**
 * @member {String} text
 */

EmojiTrello.prototype['text'] = undefined;
/**
 * @member {String} texts
 */

EmojiTrello.prototype['texts'] = undefined;
/**
 * @member {String} category
 */

EmojiTrello.prototype['category'] = undefined;
/**
 * @member {Number} sheetX
 */

EmojiTrello.prototype['sheetX'] = undefined;
/**
 * @member {Number} sheetY
 */

EmojiTrello.prototype['sheetY'] = undefined;
/**
 * @member {String} tts
 */

EmojiTrello.prototype['tts'] = undefined;
/**
 * @member {Array.<String>} keywords
 */

EmojiTrello.prototype['keywords'] = undefined;
var _default = EmojiTrello;
exports["default"] = _default;