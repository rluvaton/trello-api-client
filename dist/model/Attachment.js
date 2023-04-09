"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Color = _interopRequireDefault(require("./Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Attachment model module.
 * @module model/Attachment
 * @version 0.0.1
 */
var Attachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Attachment</code>.
   * @alias module:model/Attachment
   */
  function Attachment() {
    _classCallCheck(this, Attachment);

    Attachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Attachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attachment} obj Optional instance to populate.
     * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Attachment();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('bytes')) {
          obj['bytes'] = _ApiClient["default"].convertToType(data['bytes'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('edgeColor')) {
          obj['edgeColor'] = _Color["default"].constructFromObject(data['edgeColor']);
        }

        if (data.hasOwnProperty('idMember')) {
          obj['idMember'] = _ApiClient["default"].convertToType(data['idMember'], 'String');
        }

        if (data.hasOwnProperty('isUpload')) {
          obj['isUpload'] = _ApiClient["default"].convertToType(data['isUpload'], 'Boolean');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('previews')) {
          obj['previews'] = _ApiClient["default"].convertToType(data['previews'], ['String']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('pos')) {
          obj['pos'] = _ApiClient["default"].convertToType(data['pos'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Attachment;
}();
/**
 * @member {String} id
 */


Attachment.prototype['id'] = undefined;
/**
 * @member {String} bytes
 */

Attachment.prototype['bytes'] = undefined;
/**
 * @member {Date} date
 */

Attachment.prototype['date'] = undefined;
/**
 * @member {module:model/Color} edgeColor
 */

Attachment.prototype['edgeColor'] = undefined;
/**
 * @member {String} idMember
 */

Attachment.prototype['idMember'] = undefined;
/**
 * @member {Boolean} isUpload
 */

Attachment.prototype['isUpload'] = undefined;
/**
 * @member {String} mimeType
 */

Attachment.prototype['mimeType'] = undefined;
/**
 * @member {String} name
 */

Attachment.prototype['name'] = undefined;
/**
 * @member {Array.<String>} previews
 */

Attachment.prototype['previews'] = undefined;
/**
 * @member {String} url
 */

Attachment.prototype['url'] = undefined;
/**
 * @member {Number} pos
 */

Attachment.prototype['pos'] = undefined;
var _default = Attachment;
exports["default"] = _default;