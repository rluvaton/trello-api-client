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
 * The ActionMemberCreator model module.
 * @module model/ActionMemberCreator
 * @version 0.0.1
 */
var ActionMemberCreator = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionMemberCreator</code>.
   * @alias module:model/ActionMemberCreator
   */
  function ActionMemberCreator() {
    _classCallCheck(this, ActionMemberCreator);

    ActionMemberCreator.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionMemberCreator, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionMemberCreator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionMemberCreator} obj Optional instance to populate.
     * @return {module:model/ActionMemberCreator} The populated <code>ActionMemberCreator</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionMemberCreator();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('activityBlocked')) {
          obj['activityBlocked'] = _ApiClient["default"].convertToType(data['activityBlocked'], 'Boolean');
        }

        if (data.hasOwnProperty('avatarHash')) {
          obj['avatarHash'] = _ApiClient["default"].convertToType(data['avatarHash'], 'String');
        }

        if (data.hasOwnProperty('avatarUrl')) {
          obj['avatarUrl'] = _ApiClient["default"].convertToType(data['avatarUrl'], 'String');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('idMemberReferrer')) {
          obj['idMemberReferrer'] = _ApiClient["default"].convertToType(data['idMemberReferrer'], 'String');
        }

        if (data.hasOwnProperty('initials')) {
          obj['initials'] = _ApiClient["default"].convertToType(data['initials'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionMemberCreator;
}();
/**
 * @member {String} id
 */


ActionMemberCreator.prototype['id'] = undefined;
/**
 * @member {Boolean} activityBlocked
 */

ActionMemberCreator.prototype['activityBlocked'] = undefined;
/**
 * @member {String} avatarHash
 */

ActionMemberCreator.prototype['avatarHash'] = undefined;
/**
 * @member {String} avatarUrl
 */

ActionMemberCreator.prototype['avatarUrl'] = undefined;
/**
 * @member {String} fullName
 */

ActionMemberCreator.prototype['fullName'] = undefined;
/**
 * @member {String} idMemberReferrer
 */

ActionMemberCreator.prototype['idMemberReferrer'] = undefined;
/**
 * @member {String} initials
 */

ActionMemberCreator.prototype['initials'] = undefined;
/**
 * @member {String} username
 */

ActionMemberCreator.prototype['username'] = undefined;
var _default = ActionMemberCreator;
exports["default"] = _default;