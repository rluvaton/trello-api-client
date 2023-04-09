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
 * The ActionDataBoard model module.
 * @module model/ActionDataBoard
 * @version 0.0.1
 */
var ActionDataBoard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDataBoard</code>.
   * @alias module:model/ActionDataBoard
   */
  function ActionDataBoard() {
    _classCallCheck(this, ActionDataBoard);

    ActionDataBoard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDataBoard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDataBoard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDataBoard} obj Optional instance to populate.
     * @return {module:model/ActionDataBoard} The populated <code>ActionDataBoard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDataBoard();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('shortLink')) {
          obj['shortLink'] = _ApiClient["default"].convertToType(data['shortLink'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionDataBoard;
}();
/**
 * @member {String} id
 */


ActionDataBoard.prototype['id'] = undefined;
/**
 * @member {String} name
 */

ActionDataBoard.prototype['name'] = undefined;
/**
 * @member {String} shortLink
 */

ActionDataBoard.prototype['shortLink'] = undefined;
var _default = ActionDataBoard;
exports["default"] = _default;