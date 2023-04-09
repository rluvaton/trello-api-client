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
 * The Label model module.
 * @module model/Label
 * @version 0.0.1
 */
var Label = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Label</code>.
   * @alias module:model/Label
   */
  function Label() {
    _classCallCheck(this, Label);

    Label.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Label, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Label</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Label} obj Optional instance to populate.
     * @return {module:model/Label} The populated <code>Label</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Label();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('idBoard')) {
          obj['idBoard'] = _ApiClient["default"].convertToType(data['idBoard'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _Color["default"].constructFromObject(data['color']);
        }
      }

      return obj;
    }
  }]);

  return Label;
}();
/**
 * @member {String} id
 */


Label.prototype['id'] = undefined;
/**
 * @member {String} idBoard
 */

Label.prototype['idBoard'] = undefined;
/**
 * The name displayed for the label.
 * @member {String} name
 */

Label.prototype['name'] = undefined;
/**
 * @member {module:model/Color} color
 */

Label.prototype['color'] = undefined;
var _default = Label;
exports["default"] = _default;