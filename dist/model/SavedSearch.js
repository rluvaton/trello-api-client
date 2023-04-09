"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PosStringOrNumber = _interopRequireDefault(require("./PosStringOrNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SavedSearch model module.
 * @module model/SavedSearch
 * @version 0.0.1
 */
var SavedSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SavedSearch</code>.
   * @alias module:model/SavedSearch
   */
  function SavedSearch() {
    _classCallCheck(this, SavedSearch);

    SavedSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SavedSearch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SavedSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SavedSearch} obj Optional instance to populate.
     * @return {module:model/SavedSearch} The populated <code>SavedSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SavedSearch();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }

        if (data.hasOwnProperty('pos')) {
          obj['pos'] = _PosStringOrNumber["default"].constructFromObject(data['pos']);
        }
      }

      return obj;
    }
  }]);

  return SavedSearch;
}();
/**
 * @member {String} id
 */


SavedSearch.prototype['id'] = undefined;
/**
 * @member {String} name
 */

SavedSearch.prototype['name'] = undefined;
/**
 * @member {String} query
 */

SavedSearch.prototype['query'] = undefined;
/**
 * @member {module:model/PosStringOrNumber} pos
 */

SavedSearch.prototype['pos'] = undefined;
var _default = SavedSearch;
exports["default"] = _default;