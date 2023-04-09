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
 * The ActionDataCard model module.
 * @module model/ActionDataCard
 * @version 0.0.1
 */
var ActionDataCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDataCard</code>.
   * @alias module:model/ActionDataCard
   */
  function ActionDataCard() {
    _classCallCheck(this, ActionDataCard);

    ActionDataCard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDataCard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDataCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDataCard} obj Optional instance to populate.
     * @return {module:model/ActionDataCard} The populated <code>ActionDataCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDataCard();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('idShort')) {
          obj['idShort'] = _ApiClient["default"].convertToType(data['idShort'], 'Number');
        }

        if (data.hasOwnProperty('shortLink')) {
          obj['shortLink'] = _ApiClient["default"].convertToType(data['shortLink'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionDataCard;
}();
/**
 * @member {String} id
 */


ActionDataCard.prototype['id'] = undefined;
/**
 * @member {String} name
 */

ActionDataCard.prototype['name'] = undefined;
/**
 * @member {Number} idShort
 */

ActionDataCard.prototype['idShort'] = undefined;
/**
 * @member {String} shortLink
 */

ActionDataCard.prototype['shortLink'] = undefined;
var _default = ActionDataCard;
exports["default"] = _default;