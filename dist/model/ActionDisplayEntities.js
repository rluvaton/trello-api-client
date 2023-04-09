"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionDisplayEntitiesCard = _interopRequireDefault(require("./ActionDisplayEntitiesCard"));

var _ActionDisplayEntitiesComment = _interopRequireDefault(require("./ActionDisplayEntitiesComment"));

var _ActionDisplayEntitiesContextOn = _interopRequireDefault(require("./ActionDisplayEntitiesContextOn"));

var _ActionDisplayEntitiesMemberCreator = _interopRequireDefault(require("./ActionDisplayEntitiesMemberCreator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionDisplayEntities model module.
 * @module model/ActionDisplayEntities
 * @version 0.0.1
 */
var ActionDisplayEntities = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDisplayEntities</code>.
   * @alias module:model/ActionDisplayEntities
   */
  function ActionDisplayEntities() {
    _classCallCheck(this, ActionDisplayEntities);

    ActionDisplayEntities.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDisplayEntities, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDisplayEntities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDisplayEntities} obj Optional instance to populate.
     * @return {module:model/ActionDisplayEntities} The populated <code>ActionDisplayEntities</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDisplayEntities();

        if (data.hasOwnProperty('contextOn')) {
          obj['contextOn'] = _ActionDisplayEntitiesContextOn["default"].constructFromObject(data['contextOn']);
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _ActionDisplayEntitiesCard["default"].constructFromObject(data['card']);
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ActionDisplayEntitiesComment["default"].constructFromObject(data['comment']);
        }

        if (data.hasOwnProperty('memberCreator')) {
          obj['memberCreator'] = _ActionDisplayEntitiesMemberCreator["default"].constructFromObject(data['memberCreator']);
        }
      }

      return obj;
    }
  }]);

  return ActionDisplayEntities;
}();
/**
 * @member {module:model/ActionDisplayEntitiesContextOn} contextOn
 */


ActionDisplayEntities.prototype['contextOn'] = undefined;
/**
 * @member {module:model/ActionDisplayEntitiesCard} card
 */

ActionDisplayEntities.prototype['card'] = undefined;
/**
 * @member {module:model/ActionDisplayEntitiesComment} comment
 */

ActionDisplayEntities.prototype['comment'] = undefined;
/**
 * @member {module:model/ActionDisplayEntitiesMemberCreator} memberCreator
 */

ActionDisplayEntities.prototype['memberCreator'] = undefined;
var _default = ActionDisplayEntities;
exports["default"] = _default;