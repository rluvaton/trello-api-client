"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionLimitsReactionsPerAction = _interopRequireDefault(require("./ActionLimitsReactionsPerAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionLimitsReactions model module.
 * @module model/ActionLimitsReactions
 * @version 0.0.1
 */
var ActionLimitsReactions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionLimitsReactions</code>.
   * @alias module:model/ActionLimitsReactions
   */
  function ActionLimitsReactions() {
    _classCallCheck(this, ActionLimitsReactions);

    ActionLimitsReactions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionLimitsReactions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionLimitsReactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionLimitsReactions} obj Optional instance to populate.
     * @return {module:model/ActionLimitsReactions} The populated <code>ActionLimitsReactions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionLimitsReactions();

        if (data.hasOwnProperty('perAction')) {
          obj['perAction'] = _ActionLimitsReactionsPerAction["default"].constructFromObject(data['perAction']);
        }

        if (data.hasOwnProperty('uniquePerAction')) {
          obj['uniquePerAction'] = _ActionLimitsReactionsPerAction["default"].constructFromObject(data['uniquePerAction']);
        }
      }

      return obj;
    }
  }]);

  return ActionLimitsReactions;
}();
/**
 * @member {module:model/ActionLimitsReactionsPerAction} perAction
 */


ActionLimitsReactions.prototype['perAction'] = undefined;
/**
 * @member {module:model/ActionLimitsReactionsPerAction} uniquePerAction
 */

ActionLimitsReactions.prototype['uniquePerAction'] = undefined;
var _default = ActionLimitsReactions;
exports["default"] = _default;