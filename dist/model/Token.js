"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TokenPermission = _interopRequireDefault(require("./TokenPermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Token model module.
 * @module model/Token
 * @version 0.0.1
 */
var Token = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Token</code>.
   * @alias module:model/Token
   */
  function Token() {
    _classCallCheck(this, Token);

    Token.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Token, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Token} obj Optional instance to populate.
     * @return {module:model/Token} The populated <code>Token</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Token();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('idMember')) {
          obj['idMember'] = _ApiClient["default"].convertToType(data['idMember'], 'String');
        }

        if (data.hasOwnProperty('dateCreated')) {
          obj['dateCreated'] = _ApiClient["default"].convertToType(data['dateCreated'], 'Date');
        }

        if (data.hasOwnProperty('dateExpires')) {
          obj['dateExpires'] = _ApiClient["default"].convertToType(data['dateExpires'], 'Date');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_TokenPermission["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Token;
}();
/**
 * @member {String} id
 */


Token.prototype['id'] = undefined;
/**
 * @member {String} identifier
 */

Token.prototype['identifier'] = undefined;
/**
 * @member {String} idMember
 */

Token.prototype['idMember'] = undefined;
/**
 * @member {Date} dateCreated
 */

Token.prototype['dateCreated'] = undefined;
/**
 * @member {Date} dateExpires
 */

Token.prototype['dateExpires'] = undefined;
/**
 * @member {Array.<module:model/TokenPermission>} permissions
 */

Token.prototype['permissions'] = undefined;
var _default = Token;
exports["default"] = _default;