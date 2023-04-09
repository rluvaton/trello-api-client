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
 * The ActionDisplayEntitiesCard model module.
 * @module model/ActionDisplayEntitiesCard
 * @version 0.0.1
 */
var ActionDisplayEntitiesCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDisplayEntitiesCard</code>.
   * @alias module:model/ActionDisplayEntitiesCard
   */
  function ActionDisplayEntitiesCard() {
    _classCallCheck(this, ActionDisplayEntitiesCard);

    ActionDisplayEntitiesCard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDisplayEntitiesCard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDisplayEntitiesCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDisplayEntitiesCard} obj Optional instance to populate.
     * @return {module:model/ActionDisplayEntitiesCard} The populated <code>ActionDisplayEntitiesCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDisplayEntitiesCard();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('hideIfContext')) {
          obj['hideIfContext'] = _ApiClient["default"].convertToType(data['hideIfContext'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('shortLink')) {
          obj['shortLink'] = _ApiClient["default"].convertToType(data['shortLink'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionDisplayEntitiesCard;
}();
/**
 * @member {String} type
 */


ActionDisplayEntitiesCard.prototype['type'] = undefined;
/**
 * @member {Boolean} hideIfContext
 */

ActionDisplayEntitiesCard.prototype['hideIfContext'] = undefined;
/**
 * @member {String} id
 */

ActionDisplayEntitiesCard.prototype['id'] = undefined;
/**
 * @member {String} shortLink
 */

ActionDisplayEntitiesCard.prototype['shortLink'] = undefined;
/**
 * @member {String} text
 */

ActionDisplayEntitiesCard.prototype['text'] = undefined;
var _default = ActionDisplayEntitiesCard;
exports["default"] = _default;