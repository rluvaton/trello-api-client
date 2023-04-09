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
 * The ExportStatus model module.
 * @module model/ExportStatus
 * @version 0.0.1
 */
var ExportStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExportStatus</code>.
   * @alias module:model/ExportStatus
   */
  function ExportStatus() {
    _classCallCheck(this, ExportStatus);

    ExportStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportStatus} obj Optional instance to populate.
     * @return {module:model/ExportStatus} The populated <code>ExportStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportStatus();

        if (data.hasOwnProperty('attempts')) {
          obj['attempts'] = _ApiClient["default"].convertToType(data['attempts'], 'Number');
        }

        if (data.hasOwnProperty('finished')) {
          obj['finished'] = _ApiClient["default"].convertToType(data['finished'], 'Boolean');
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportStatus;
}();
/**
 * @member {Number} attempts
 */


ExportStatus.prototype['attempts'] = undefined;
/**
 * @member {Boolean} finished
 */

ExportStatus.prototype['finished'] = undefined;
/**
 * @member {String} stage
 */

ExportStatus.prototype['stage'] = undefined;
var _default = ExportStatus;
exports["default"] = _default;