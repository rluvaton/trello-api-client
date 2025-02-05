"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmojiTrello = _interopRequireDefault(require("./EmojiTrello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Emoji model module.
 * @module model/Emoji
 * @version 0.0.1
 */
var Emoji = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Emoji</code>.
   * @alias module:model/Emoji
   */
  function Emoji() {
    _classCallCheck(this, Emoji);

    Emoji.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Emoji, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Emoji</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Emoji} obj Optional instance to populate.
     * @return {module:model/Emoji} The populated <code>Emoji</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Emoji();

        if (data.hasOwnProperty('trello')) {
          obj['trello'] = _ApiClient["default"].convertToType(data['trello'], [_EmojiTrello["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Emoji;
}();
/**
 * @member {Array.<module:model/EmojiTrello>} trello
 */


Emoji.prototype['trello'] = undefined;
var _default = Emoji;
exports["default"] = _default;