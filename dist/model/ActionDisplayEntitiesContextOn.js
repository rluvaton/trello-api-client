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
 * The ActionDisplayEntitiesContextOn model module.
 * @module model/ActionDisplayEntitiesContextOn
 * @version 0.0.1
 */
var ActionDisplayEntitiesContextOn = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDisplayEntitiesContextOn</code>.
   * @alias module:model/ActionDisplayEntitiesContextOn
   */
  function ActionDisplayEntitiesContextOn() {
    _classCallCheck(this, ActionDisplayEntitiesContextOn);

    ActionDisplayEntitiesContextOn.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDisplayEntitiesContextOn, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDisplayEntitiesContextOn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDisplayEntitiesContextOn} obj Optional instance to populate.
     * @return {module:model/ActionDisplayEntitiesContextOn} The populated <code>ActionDisplayEntitiesContextOn</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDisplayEntitiesContextOn();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('translationKey')) {
          obj['translationKey'] = _ApiClient["default"].convertToType(data['translationKey'], 'String');
        }

        if (data.hasOwnProperty('hideIfContext')) {
          obj['hideIfContext'] = _ApiClient["default"].convertToType(data['hideIfContext'], 'Boolean');
        }

        if (data.hasOwnProperty('idContext')) {
          obj['idContext'] = _ApiClient["default"].convertToType(data['idContext'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionDisplayEntitiesContextOn;
}();
/**
 * @member {String} type
 */


ActionDisplayEntitiesContextOn.prototype['type'] = undefined;
/**
 * @member {String} translationKey
 */

ActionDisplayEntitiesContextOn.prototype['translationKey'] = undefined;
/**
 * @member {Boolean} hideIfContext
 */

ActionDisplayEntitiesContextOn.prototype['hideIfContext'] = undefined;
/**
 * @member {String} idContext
 */

ActionDisplayEntitiesContextOn.prototype['idContext'] = undefined;
var _default = ActionDisplayEntitiesContextOn;
exports["default"] = _default;