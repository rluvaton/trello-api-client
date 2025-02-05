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
 * The ActionDisplayEntitiesComment model module.
 * @module model/ActionDisplayEntitiesComment
 * @version 0.0.1
 */
var ActionDisplayEntitiesComment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDisplayEntitiesComment</code>.
   * @alias module:model/ActionDisplayEntitiesComment
   */
  function ActionDisplayEntitiesComment() {
    _classCallCheck(this, ActionDisplayEntitiesComment);

    ActionDisplayEntitiesComment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDisplayEntitiesComment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDisplayEntitiesComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDisplayEntitiesComment} obj Optional instance to populate.
     * @return {module:model/ActionDisplayEntitiesComment} The populated <code>ActionDisplayEntitiesComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDisplayEntitiesComment();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionDisplayEntitiesComment;
}();
/**
 * @member {String} type
 */


ActionDisplayEntitiesComment.prototype['type'] = undefined;
/**
 * @member {String} text
 */

ActionDisplayEntitiesComment.prototype['text'] = undefined;
var _default = ActionDisplayEntitiesComment;
exports["default"] = _default;