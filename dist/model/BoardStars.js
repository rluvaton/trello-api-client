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
 * The BoardStars model module.
 * @module model/BoardStars
 * @version 0.0.1
 */
var BoardStars = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoardStars</code>.
   * @alias module:model/BoardStars
   */
  function BoardStars() {
    _classCallCheck(this, BoardStars);

    BoardStars.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BoardStars, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BoardStars</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BoardStars} obj Optional instance to populate.
     * @return {module:model/BoardStars} The populated <code>BoardStars</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoardStars();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('idBoard')) {
          obj['idBoard'] = _ApiClient["default"].convertToType(data['idBoard'], 'String');
        }

        if (data.hasOwnProperty('pos')) {
          obj['pos'] = _ApiClient["default"].convertToType(data['pos'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BoardStars;
}();
/**
 * @member {String} id
 */


BoardStars.prototype['id'] = undefined;
/**
 * @member {String} idBoard
 */

BoardStars.prototype['idBoard'] = undefined;
/**
 * @member {Number} pos
 */

BoardStars.prototype['pos'] = undefined;
var _default = BoardStars;
exports["default"] = _default;