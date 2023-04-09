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
 * The ActionDisplayEntitiesMemberCreator model module.
 * @module model/ActionDisplayEntitiesMemberCreator
 * @version 0.0.1
 */
var ActionDisplayEntitiesMemberCreator = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDisplayEntitiesMemberCreator</code>.
   * @alias module:model/ActionDisplayEntitiesMemberCreator
   */
  function ActionDisplayEntitiesMemberCreator() {
    _classCallCheck(this, ActionDisplayEntitiesMemberCreator);

    ActionDisplayEntitiesMemberCreator.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDisplayEntitiesMemberCreator, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDisplayEntitiesMemberCreator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDisplayEntitiesMemberCreator} obj Optional instance to populate.
     * @return {module:model/ActionDisplayEntitiesMemberCreator} The populated <code>ActionDisplayEntitiesMemberCreator</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDisplayEntitiesMemberCreator();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionDisplayEntitiesMemberCreator;
}();
/**
 * @member {String} type
 */


ActionDisplayEntitiesMemberCreator.prototype['type'] = undefined;
/**
 * @member {String} id
 */

ActionDisplayEntitiesMemberCreator.prototype['id'] = undefined;
/**
 * @member {String} username
 */

ActionDisplayEntitiesMemberCreator.prototype['username'] = undefined;
/**
 * @member {String} text
 */

ActionDisplayEntitiesMemberCreator.prototype['text'] = undefined;
var _default = ActionDisplayEntitiesMemberCreator;
exports["default"] = _default;