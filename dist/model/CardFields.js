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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class CardFields.
* @enum {}
* @readonly
*/
var CardFields = /*#__PURE__*/function () {
  function CardFields() {
    _classCallCheck(this, CardFields);

    _defineProperty(this, "id", "id");

    _defineProperty(this, "address", "address");

    _defineProperty(this, "badges", "badges");

    _defineProperty(this, "checkItemStates", "checkItemStates");

    _defineProperty(this, "closed", "closed");

    _defineProperty(this, "coordinates", "coordinates");

    _defineProperty(this, "creationMethod", "creationMethod");

    _defineProperty(this, "dueComplete", "dueComplete");

    _defineProperty(this, "dateLastActivity", "dateLastActivity");

    _defineProperty(this, "desc", "desc");

    _defineProperty(this, "descData", "descData");

    _defineProperty(this, "due", "due");

    _defineProperty(this, "dueReminder", "dueReminder");

    _defineProperty(this, "email", "email");

    _defineProperty(this, "idBoard", "idBoard");

    _defineProperty(this, "idChecklists", "idChecklists");

    _defineProperty(this, "idLabels", "idLabels");

    _defineProperty(this, "idList", "idList");

    _defineProperty(this, "idMembers", "idMembers");

    _defineProperty(this, "idMembersVoted", "idMembersVoted");

    _defineProperty(this, "idShort", "idShort");

    _defineProperty(this, "idAttachmentCover", "idAttachmentCover");

    _defineProperty(this, "labels", "labels");

    _defineProperty(this, "limits", "limits");

    _defineProperty(this, "locationName", "locationName");

    _defineProperty(this, "manualCoverAttachment", "manualCoverAttachment");

    _defineProperty(this, "name", "name");

    _defineProperty(this, "pos", "pos");

    _defineProperty(this, "shortLink", "shortLink");

    _defineProperty(this, "shortUrl", "shortUrl");

    _defineProperty(this, "subscribed", "subscribed");

    _defineProperty(this, "url", "url");

    _defineProperty(this, "cover", "cover");

    _defineProperty(this, "isTemplate", "isTemplate");
  }

  _createClass(CardFields, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>CardFields</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CardFields} The enum <code>CardFields</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return CardFields;
}();

exports["default"] = CardFields;