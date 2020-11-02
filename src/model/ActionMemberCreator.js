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

/**
 * The ActionMemberCreator model module.
 * @module model/ActionMemberCreator
 * @version 0.0.1
 */
class ActionMemberCreator {
    /**
     * Constructs a new <code>ActionMemberCreator</code>.
     * @alias module:model/ActionMemberCreator
     */
    constructor() { 
        
        ActionMemberCreator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionMemberCreator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionMemberCreator} obj Optional instance to populate.
     * @return {module:model/ActionMemberCreator} The populated <code>ActionMemberCreator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionMemberCreator();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('activityBlocked')) {
                obj['activityBlocked'] = ApiClient.convertToType(data['activityBlocked'], 'Boolean');
            }
            if (data.hasOwnProperty('avatarHash')) {
                obj['avatarHash'] = ApiClient.convertToType(data['avatarHash'], 'String');
            }
            if (data.hasOwnProperty('avatarUrl')) {
                obj['avatarUrl'] = ApiClient.convertToType(data['avatarUrl'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('idMemberReferrer')) {
                obj['idMemberReferrer'] = ApiClient.convertToType(data['idMemberReferrer'], 'String');
            }
            if (data.hasOwnProperty('initials')) {
                obj['initials'] = ApiClient.convertToType(data['initials'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ActionMemberCreator.prototype['id'] = undefined;

/**
 * @member {Boolean} activityBlocked
 */
ActionMemberCreator.prototype['activityBlocked'] = undefined;

/**
 * @member {String} avatarHash
 */
ActionMemberCreator.prototype['avatarHash'] = undefined;

/**
 * @member {String} avatarUrl
 */
ActionMemberCreator.prototype['avatarUrl'] = undefined;

/**
 * @member {String} fullName
 */
ActionMemberCreator.prototype['fullName'] = undefined;

/**
 * @member {String} idMemberReferrer
 */
ActionMemberCreator.prototype['idMemberReferrer'] = undefined;

/**
 * @member {String} initials
 */
ActionMemberCreator.prototype['initials'] = undefined;

/**
 * @member {String} username
 */
ActionMemberCreator.prototype['username'] = undefined;






export default ActionMemberCreator;

