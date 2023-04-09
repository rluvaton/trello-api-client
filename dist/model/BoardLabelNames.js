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
 * The BoardLabelNames model module.
 * @module model/BoardLabelNames
 * @version 0.0.1
 */
var BoardLabelNames = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoardLabelNames</code>.
   * @alias module:model/BoardLabelNames
   */
  function BoardLabelNames() {
    _classCallCheck(this, BoardLabelNames);

    BoardLabelNames.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BoardLabelNames, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BoardLabelNames</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BoardLabelNames} obj Optional instance to populate.
     * @return {module:model/BoardLabelNames} The populated <code>BoardLabelNames</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoardLabelNames();

        if (data.hasOwnProperty('green')) {
          obj['green'] = _ApiClient["default"].convertToType(data['green'], 'String');
        }

        if (data.hasOwnProperty('yellow')) {
          obj['yellow'] = _ApiClient["default"].convertToType(data['yellow'], 'String');
        }

        if (data.hasOwnProperty('orange')) {
          obj['orange'] = _ApiClient["default"].convertToType(data['orange'], 'String');
        }

        if (data.hasOwnProperty('red')) {
          obj['red'] = _ApiClient["default"].convertToType(data['red'], 'String');
        }

        if (data.hasOwnProperty('purple')) {
          obj['purple'] = _ApiClient["default"].convertToType(data['purple'], 'String');
        }

        if (data.hasOwnProperty('blue')) {
          obj['blue'] = _ApiClient["default"].convertToType(data['blue'], 'String');
        }

        if (data.hasOwnProperty('sky')) {
          obj['sky'] = _ApiClient["default"].convertToType(data['sky'], 'String');
        }

        if (data.hasOwnProperty('lime')) {
          obj['lime'] = _ApiClient["default"].convertToType(data['lime'], 'String');
        }

        if (data.hasOwnProperty('pink')) {
          obj['pink'] = _ApiClient["default"].convertToType(data['pink'], 'String');
        }

        if (data.hasOwnProperty('black')) {
          obj['black'] = _ApiClient["default"].convertToType(data['black'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BoardLabelNames;
}();
/**
 * @member {String} green
 */


BoardLabelNames.prototype['green'] = undefined;
/**
 * @member {String} yellow
 */

BoardLabelNames.prototype['yellow'] = undefined;
/**
 * @member {String} orange
 */

BoardLabelNames.prototype['orange'] = undefined;
/**
 * @member {String} red
 */

BoardLabelNames.prototype['red'] = undefined;
/**
 * @member {String} purple
 */

BoardLabelNames.prototype['purple'] = undefined;
/**
 * @member {String} blue
 */

BoardLabelNames.prototype['blue'] = undefined;
/**
 * @member {String} sky
 */

BoardLabelNames.prototype['sky'] = undefined;
/**
 * @member {String} lime
 */

BoardLabelNames.prototype['lime'] = undefined;
/**
 * @member {String} pink
 */

BoardLabelNames.prototype['pink'] = undefined;
/**
 * @member {String} black
 */

BoardLabelNames.prototype['black'] = undefined;
var _default = BoardLabelNames;
exports["default"] = _default;