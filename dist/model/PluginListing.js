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
 * The PluginListing model module.
 * @module model/PluginListing
 * @version 0.0.1
 */
var PluginListing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginListing</code>.
   * @alias module:model/PluginListing
   */
  function PluginListing() {
    _classCallCheck(this, PluginListing);

    PluginListing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginListing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PluginListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginListing} obj Optional instance to populate.
     * @return {module:model/PluginListing} The populated <code>PluginListing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginListing();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('locale')) {
          obj['locale'] = _ApiClient["default"].convertToType(data['locale'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('overview')) {
          obj['overview'] = _ApiClient["default"].convertToType(data['overview'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PluginListing;
}();
/**
 * @member {String} id
 */


PluginListing.prototype['id'] = undefined;
/**
 * @member {String} name
 */

PluginListing.prototype['name'] = undefined;
/**
 * @member {String} locale
 */

PluginListing.prototype['locale'] = undefined;
/**
 * @member {String} description
 */

PluginListing.prototype['description'] = undefined;
/**
 * @member {String} overview
 */

PluginListing.prototype['overview'] = undefined;
var _default = PluginListing;
exports["default"] = _default;