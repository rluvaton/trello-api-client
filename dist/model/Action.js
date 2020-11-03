"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionData = _interopRequireDefault(require("./ActionData"));

var _ActionDisplay = _interopRequireDefault(require("./ActionDisplay"));

var _ActionLimits = _interopRequireDefault(require("./ActionLimits"));

var _ActionMemberCreator = _interopRequireDefault(require("./ActionMemberCreator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Action model module.
 * @module model/Action
 * @version 0.0.1
 */
var Action = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Action</code>.
   * @alias module:model/Action
   */
  function Action() {
    _classCallCheck(this, Action);

    Action.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Action, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Action} obj Optional instance to populate.
     * @return {module:model/Action} The populated <code>Action</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Action();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('idMemberCreator')) {
          obj['idMemberCreator'] = _ApiClient["default"].convertToType(data['idMemberCreator'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ActionData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _ActionLimits["default"].constructFromObject(data['limits']);
        }

        if (data.hasOwnProperty('display')) {
          obj['display'] = _ActionDisplay["default"].constructFromObject(data['display']);
        }

        if (data.hasOwnProperty('memberCreator')) {
          obj['memberCreator'] = _ActionMemberCreator["default"].constructFromObject(data['memberCreator']);
        }
      }

      return obj;
    }
  }]);

  return Action;
}();
/**
 * @member {String} id
 */


Action.prototype['id'] = undefined;
/**
 * @member {String} idMemberCreator
 */

Action.prototype['idMemberCreator'] = undefined;
/**
 * @member {module:model/ActionData} data
 */

Action.prototype['data'] = undefined;
/**
 * @member {String} type
 */

Action.prototype['type'] = undefined;
/**
 * @member {Date} date
 */

Action.prototype['date'] = undefined;
/**
 * @member {module:model/ActionLimits} limits
 */

Action.prototype['limits'] = undefined;
/**
 * @member {module:model/ActionDisplay} display
 */

Action.prototype['display'] = undefined;
/**
 * @member {module:model/ActionMemberCreator} memberCreator
 */

Action.prototype['memberCreator'] = undefined;
var _default = Action;
exports["default"] = _default;