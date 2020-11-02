/**
 * Trello REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MemberPrefsPrivacy from './MemberPrefsPrivacy';
import MemberPrefsTimezoneInfo from './MemberPrefsTimezoneInfo';
import MemberPrefsTwoFactor from './MemberPrefsTwoFactor';

/**
 * The MemberPrefs model module.
 * @module model/MemberPrefs
 * @version 0.0.1
 */
class MemberPrefs {
    /**
     * Constructs a new <code>MemberPrefs</code>.
     * @alias module:model/MemberPrefs
     */
    constructor() { 
        
        MemberPrefs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MemberPrefs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberPrefs} obj Optional instance to populate.
     * @return {module:model/MemberPrefs} The populated <code>MemberPrefs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberPrefs();

            if (data.hasOwnProperty('timezoneInfo')) {
                obj['timezoneInfo'] = MemberPrefsTimezoneInfo.constructFromObject(data['timezoneInfo']);
            }
            if (data.hasOwnProperty('privacy')) {
                obj['privacy'] = MemberPrefsPrivacy.constructFromObject(data['privacy']);
            }
            if (data.hasOwnProperty('sendSummaries')) {
                obj['sendSummaries'] = ApiClient.convertToType(data['sendSummaries'], 'Boolean');
            }
            if (data.hasOwnProperty('minutesBetweenSummaries')) {
                obj['minutesBetweenSummaries'] = ApiClient.convertToType(data['minutesBetweenSummaries'], 'Number');
            }
            if (data.hasOwnProperty('minutesBeforeDeadlineToNotify')) {
                obj['minutesBeforeDeadlineToNotify'] = ApiClient.convertToType(data['minutesBeforeDeadlineToNotify'], 'Number');
            }
            if (data.hasOwnProperty('colorBlind')) {
                obj['colorBlind'] = ApiClient.convertToType(data['colorBlind'], 'Boolean');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('twoFactor')) {
                obj['twoFactor'] = MemberPrefsTwoFactor.constructFromObject(data['twoFactor']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MemberPrefsTimezoneInfo} timezoneInfo
 */
MemberPrefs.prototype['timezoneInfo'] = undefined;

/**
 * @member {module:model/MemberPrefsPrivacy} privacy
 */
MemberPrefs.prototype['privacy'] = undefined;

/**
 * @member {Boolean} sendSummaries
 */
MemberPrefs.prototype['sendSummaries'] = undefined;

/**
 * @member {Number} minutesBetweenSummaries
 */
MemberPrefs.prototype['minutesBetweenSummaries'] = undefined;

/**
 * @member {Number} minutesBeforeDeadlineToNotify
 */
MemberPrefs.prototype['minutesBeforeDeadlineToNotify'] = undefined;

/**
 * @member {Boolean} colorBlind
 */
MemberPrefs.prototype['colorBlind'] = undefined;

/**
 * @member {String} locale
 */
MemberPrefs.prototype['locale'] = undefined;

/**
 * @member {String} timezone
 */
MemberPrefs.prototype['timezone'] = undefined;

/**
 * @member {module:model/MemberPrefsTwoFactor} twoFactor
 */
MemberPrefs.prototype['twoFactor'] = undefined;






export default MemberPrefs;

