"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfstringstring = _interopRequireDefault(require("./OneOfstringstring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TokenPermission model module.
 * @module model/TokenPermission
 * @version 0.0.1
 */
var TokenPermission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenPermission</code>.
   * @alias module:model/TokenPermission
   */
  function TokenPermission() {
    _classCallCheck(this, TokenPermission);

    TokenPermission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenPermission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TokenPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenPermission} obj Optional instance to populate.
     * @return {module:model/TokenPermission} The populated <code>TokenPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenPermission();

        if (data.hasOwnProperty('idModel')) {
          obj['idModel'] = _ApiClient["default"].convertToType(data['idModel'], _OneOfstringstring["default"]);
        }

        if (data.hasOwnProperty('modelType')) {
          obj['modelType'] = _ApiClient["default"].convertToType(data['modelType'], 'String');
        }

        if (data.hasOwnProperty('read')) {
          obj['read'] = _ApiClient["default"].convertToType(data['read'], 'Boolean');
        }

        if (data.hasOwnProperty('write')) {
          obj['write'] = _ApiClient["default"].convertToType(data['write'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TokenPermission;
}();
/**
 * @member {module:model/OneOfstringstring} idModel
 */


TokenPermission.prototype['idModel'] = undefined;
/**
 * @member {module:model/TokenPermission.ModelTypeEnum} modelType
 */

TokenPermission.prototype['modelType'] = undefined;
/**
 * @member {Boolean} read
 */

TokenPermission.prototype['read'] = undefined;
/**
 * @member {Boolean} write
 */

TokenPermission.prototype['write'] = undefined;
/**
 * Allowed values for the <code>modelType</code> property.
 * @enum {String}
 * @readonly
 */

TokenPermission['ModelTypeEnum'] = {
  /**
   * value: "board"
   * @const
   */
  "board": "board",

  /**
   * value: "member"
   * @const
   */
  "member": "member",

  /**
   * value: "organization"
   * @const
   */
  "organization": "organization",

  /**
   * value: "enterprise"
   * @const
   */
  "enterprise": "enterprise"
};
var _default = TokenPermission;
exports["default"] = _default;