"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CardDescData = _interopRequireDefault(require("./CardDescData"));

var _LimitsObject = _interopRequireDefault(require("./LimitsObject"));

var _MemberMarketingOptIn = _interopRequireDefault(require("./MemberMarketingOptIn"));

var _MemberMessagesDismissed = _interopRequireDefault(require("./MemberMessagesDismissed"));

var _MemberPrefs = _interopRequireDefault(require("./MemberPrefs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Member model module.
 * @module model/Member
 * @version 0.0.1
 */
var Member = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Member</code>.
   * @alias module:model/Member
   */
  function Member() {
    _classCallCheck(this, Member);

    Member.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Member, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Member} obj Optional instance to populate.
     * @return {module:model/Member} The populated <code>Member</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Member();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('activityBlocked')) {
          obj['activityBlocked'] = _ApiClient["default"].convertToType(data['activityBlocked'], 'Boolean');
        }

        if (data.hasOwnProperty('avatarHash')) {
          obj['avatarHash'] = _ApiClient["default"].convertToType(data['avatarHash'], 'String');
        }

        if (data.hasOwnProperty('avatarUrl')) {
          obj['avatarUrl'] = _ApiClient["default"].convertToType(data['avatarUrl'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('bioData')) {
          obj['bioData'] = _CardDescData["default"].constructFromObject(data['bioData']);
        }

        if (data.hasOwnProperty('confirmed')) {
          obj['confirmed'] = _ApiClient["default"].convertToType(data['confirmed'], 'Boolean');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('idEnterprise')) {
          obj['idEnterprise'] = _ApiClient["default"].convertToType(data['idEnterprise'], 'String');
        }

        if (data.hasOwnProperty('idEnterprisesDeactivated')) {
          obj['idEnterprisesDeactivated'] = _ApiClient["default"].convertToType(data['idEnterprisesDeactivated'], ['String']);
        }

        if (data.hasOwnProperty('idMemberReferrer')) {
          obj['idMemberReferrer'] = _ApiClient["default"].convertToType(data['idMemberReferrer'], 'String');
        }

        if (data.hasOwnProperty('idPremOrgsAdmin')) {
          obj['idPremOrgsAdmin'] = _ApiClient["default"].convertToType(data['idPremOrgsAdmin'], ['String']);
        }

        if (data.hasOwnProperty('initials')) {
          obj['initials'] = _ApiClient["default"].convertToType(data['initials'], 'String');
        }

        if (data.hasOwnProperty('memberType')) {
          obj['memberType'] = _ApiClient["default"].convertToType(data['memberType'], 'String');
        }

        if (data.hasOwnProperty('nonPublic')) {
          obj['nonPublic'] = _ApiClient["default"].convertToType(data['nonPublic'], Object);
        }

        if (data.hasOwnProperty('nonPublicAvailable')) {
          obj['nonPublicAvailable'] = _ApiClient["default"].convertToType(data['nonPublicAvailable'], 'Boolean');
        }

        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient["default"].convertToType(data['products'], ['Number']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('aaEmail')) {
          obj['aaEmail'] = _ApiClient["default"].convertToType(data['aaEmail'], 'String');
        }

        if (data.hasOwnProperty('aaEnrolledDate')) {
          obj['aaEnrolledDate'] = _ApiClient["default"].convertToType(data['aaEnrolledDate'], 'String');
        }

        if (data.hasOwnProperty('aaId')) {
          obj['aaId'] = _ApiClient["default"].convertToType(data['aaId'], 'String');
        }

        if (data.hasOwnProperty('avatarSource')) {
          obj['avatarSource'] = _ApiClient["default"].convertToType(data['avatarSource'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('gravatarHash')) {
          obj['gravatarHash'] = _ApiClient["default"].convertToType(data['gravatarHash'], 'String');
        }

        if (data.hasOwnProperty('idBoards')) {
          obj['idBoards'] = _ApiClient["default"].convertToType(data['idBoards'], ['String']);
        }

        if (data.hasOwnProperty('idOrganizations')) {
          obj['idOrganizations'] = _ApiClient["default"].convertToType(data['idOrganizations'], ['String']);
        }

        if (data.hasOwnProperty('idEnterprisesAdmin')) {
          obj['idEnterprisesAdmin'] = _ApiClient["default"].convertToType(data['idEnterprisesAdmin'], ['String']);
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _LimitsObject["default"].constructFromObject(data['limits']);
        }

        if (data.hasOwnProperty('loginTypes')) {
          obj['loginTypes'] = _ApiClient["default"].convertToType(data['loginTypes'], ['String']);
        }

        if (data.hasOwnProperty('marketingOptIn')) {
          obj['marketingOptIn'] = _MemberMarketingOptIn["default"].constructFromObject(data['marketingOptIn']);
        }

        if (data.hasOwnProperty('messagesDismissed')) {
          obj['messagesDismissed'] = _MemberMessagesDismissed["default"].constructFromObject(data['messagesDismissed']);
        }

        if (data.hasOwnProperty('oneTimeMessagesDismissed')) {
          obj['oneTimeMessagesDismissed'] = _ApiClient["default"].convertToType(data['oneTimeMessagesDismissed'], ['String']);
        }

        if (data.hasOwnProperty('prefs')) {
          obj['prefs'] = _MemberPrefs["default"].constructFromObject(data['prefs']);
        }

        if (data.hasOwnProperty('trophies')) {
          obj['trophies'] = _ApiClient["default"].convertToType(data['trophies'], ['String']);
        }

        if (data.hasOwnProperty('uploadedAvatarHash')) {
          obj['uploadedAvatarHash'] = _ApiClient["default"].convertToType(data['uploadedAvatarHash'], 'String');
        }

        if (data.hasOwnProperty('uploadedAvatarUrl')) {
          obj['uploadedAvatarUrl'] = _ApiClient["default"].convertToType(data['uploadedAvatarUrl'], 'String');
        }

        if (data.hasOwnProperty('premiumFeatures')) {
          obj['premiumFeatures'] = _ApiClient["default"].convertToType(data['premiumFeatures'], ['String']);
        }

        if (data.hasOwnProperty('isAaMastered')) {
          obj['isAaMastered'] = _ApiClient["default"].convertToType(data['isAaMastered'], 'Boolean');
        }

        if (data.hasOwnProperty('ixUpdate')) {
          obj['ixUpdate'] = _ApiClient["default"].convertToType(data['ixUpdate'], 'Number');
        }

        if (data.hasOwnProperty('idBoardsPinned')) {
          obj['idBoardsPinned'] = _ApiClient["default"].convertToType(data['idBoardsPinned'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Member;
}();
/**
 * @member {String} id
 */


Member.prototype['id'] = undefined;
/**
 * @member {Boolean} activityBlocked
 */

Member.prototype['activityBlocked'] = undefined;
/**
 * @member {String} avatarHash
 */

Member.prototype['avatarHash'] = undefined;
/**
 * @member {String} avatarUrl
 */

Member.prototype['avatarUrl'] = undefined;
/**
 * @member {String} bio
 */

Member.prototype['bio'] = undefined;
/**
 * @member {module:model/CardDescData} bioData
 */

Member.prototype['bioData'] = undefined;
/**
 * @member {Boolean} confirmed
 */

Member.prototype['confirmed'] = undefined;
/**
 * @member {String} fullName
 */

Member.prototype['fullName'] = undefined;
/**
 * @member {String} idEnterprise
 */

Member.prototype['idEnterprise'] = undefined;
/**
 * @member {Array.<String>} idEnterprisesDeactivated
 */

Member.prototype['idEnterprisesDeactivated'] = undefined;
/**
 * @member {String} idMemberReferrer
 */

Member.prototype['idMemberReferrer'] = undefined;
/**
 * @member {Array.<String>} idPremOrgsAdmin
 */

Member.prototype['idPremOrgsAdmin'] = undefined;
/**
 * @member {String} initials
 */

Member.prototype['initials'] = undefined;
/**
 * @member {module:model/Member.MemberTypeEnum} memberType
 */

Member.prototype['memberType'] = undefined;
/**
 * @member {Object} nonPublic
 */

Member.prototype['nonPublic'] = undefined;
/**
 * @member {Boolean} nonPublicAvailable
 */

Member.prototype['nonPublicAvailable'] = undefined;
/**
 * @member {Array.<Number>} products
 */

Member.prototype['products'] = undefined;
/**
 * @member {String} url
 */

Member.prototype['url'] = undefined;
/**
 * @member {String} username
 */

Member.prototype['username'] = undefined;
/**
 * @member {module:model/Member.StatusEnum} status
 */

Member.prototype['status'] = undefined;
/**
 * @member {String} aaEmail
 */

Member.prototype['aaEmail'] = undefined;
/**
 * @member {String} aaEnrolledDate
 */

Member.prototype['aaEnrolledDate'] = undefined;
/**
 * @member {String} aaId
 */

Member.prototype['aaId'] = undefined;
/**
 * @member {module:model/Member.AvatarSourceEnum} avatarSource
 */

Member.prototype['avatarSource'] = undefined;
/**
 * @member {String} email
 */

Member.prototype['email'] = undefined;
/**
 * @member {String} gravatarHash
 */

Member.prototype['gravatarHash'] = undefined;
/**
 * @member {Array.<String>} idBoards
 */

Member.prototype['idBoards'] = undefined;
/**
 * @member {Array.<String>} idOrganizations
 */

Member.prototype['idOrganizations'] = undefined;
/**
 * @member {Array.<String>} idEnterprisesAdmin
 */

Member.prototype['idEnterprisesAdmin'] = undefined;
/**
 * @member {module:model/LimitsObject} limits
 */

Member.prototype['limits'] = undefined;
/**
 * @member {Array.<module:model/Member.LoginTypesEnum>} loginTypes
 */

Member.prototype['loginTypes'] = undefined;
/**
 * @member {module:model/MemberMarketingOptIn} marketingOptIn
 */

Member.prototype['marketingOptIn'] = undefined;
/**
 * @member {module:model/MemberMessagesDismissed} messagesDismissed
 */

Member.prototype['messagesDismissed'] = undefined;
/**
 * @member {Array.<String>} oneTimeMessagesDismissed
 */

Member.prototype['oneTimeMessagesDismissed'] = undefined;
/**
 * @member {module:model/MemberPrefs} prefs
 */

Member.prototype['prefs'] = undefined;
/**
 * @member {Array.<String>} trophies
 */

Member.prototype['trophies'] = undefined;
/**
 * @member {String} uploadedAvatarHash
 */

Member.prototype['uploadedAvatarHash'] = undefined;
/**
 * @member {String} uploadedAvatarUrl
 */

Member.prototype['uploadedAvatarUrl'] = undefined;
/**
 * @member {Array.<String>} premiumFeatures
 */

Member.prototype['premiumFeatures'] = undefined;
/**
 * @member {Boolean} isAaMastered
 */

Member.prototype['isAaMastered'] = undefined;
/**
 * @member {Number} ixUpdate
 */

Member.prototype['ixUpdate'] = undefined;
/**
 * @member {Array.<String>} idBoardsPinned
 */

Member.prototype['idBoardsPinned'] = undefined;
/**
 * Allowed values for the <code>memberType</code> property.
 * @enum {String}
 * @readonly
 */

Member['MemberTypeEnum'] = {
  /**
   * value: "normal"
   * @const
   */
  "normal": "normal",

  /**
   * value: "ghost"
   * @const
   */
  "ghost": "ghost"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Member['StatusEnum'] = {
  /**
   * value: "disconnected"
   * @const
   */
  "disconnected": "disconnected"
};
/**
 * Allowed values for the <code>avatarSource</code> property.
 * @enum {String}
 * @readonly
 */

Member['AvatarSourceEnum'] = {
  /**
   * value: "gravatar"
   * @const
   */
  "gravatar": "gravatar",

  /**
   * value: "upload"
   * @const
   */
  "upload": "upload"
};
/**
 * Allowed values for the <code>loginTypes</code> property.
 * @enum {String}
 * @readonly
 */

Member['LoginTypesEnum'] = {
  /**
   * value: "password"
   * @const
   */
  "password": "password",

  /**
   * value: "saml"
   * @const
   */
  "saml": "saml"
};
var _default = Member;
exports["default"] = _default;