"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExportStatus = _interopRequireDefault(require("./ExportStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModelExport model module.
 * @module model/ModelExport
 * @version 0.0.1
 */
var ModelExport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelExport</code>.
   * @alias module:model/ModelExport
   */
  function ModelExport() {
    _classCallCheck(this, ModelExport);

    ModelExport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelExport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelExport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelExport} obj Optional instance to populate.
     * @return {module:model/ModelExport} The populated <code>ModelExport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelExport();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ExportStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('startedAt')) {
          obj['startedAt'] = _ApiClient["default"].convertToType(data['startedAt'], 'Date');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'String');
        }

        if (data.hasOwnProperty('exportUrl')) {
          obj['exportUrl'] = _ApiClient["default"].convertToType(data['exportUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModelExport;
}();
/**
 * @member {String} id
 */


ModelExport.prototype['id'] = undefined;
/**
 * @member {module:model/ExportStatus} status
 */

ModelExport.prototype['status'] = undefined;
/**
 * @member {Date} startedAt
 */

ModelExport.prototype['startedAt'] = undefined;
/**
 * @member {String} size
 */

ModelExport.prototype['size'] = undefined;
/**
 * @member {String} exportUrl
 */

ModelExport.prototype['exportUrl'] = undefined;
var _default = ModelExport;
exports["default"] = _default;