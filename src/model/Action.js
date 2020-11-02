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
import ActionData from './ActionData';
import ActionDisplay from './ActionDisplay';
import ActionLimits from './ActionLimits';
import ActionMemberCreator from './ActionMemberCreator';

/**
 * The Action model module.
 * @module model/Action
 * @version 0.0.1
 */
class Action {
    /**
     * Constructs a new <code>Action</code>.
     * @alias module:model/Action
     */
    constructor() { 
        
        Action.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Action} obj Optional instance to populate.
     * @return {module:model/Action} The populated <code>Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Action();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('idMemberCreator')) {
                obj['idMemberCreator'] = ApiClient.convertToType(data['idMemberCreator'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ActionData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ActionLimits.constructFromObject(data['limits']);
            }
            if (data.hasOwnProperty('display')) {
                obj['display'] = ActionDisplay.constructFromObject(data['display']);
            }
            if (data.hasOwnProperty('memberCreator')) {
                obj['memberCreator'] = ActionMemberCreator.constructFromObject(data['memberCreator']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Action.prototype['id'] = undefined;

/**
 * @member {String} idMemberCreator
 */
Action.prototype['idMemberCreator'] = undefined;

/**
 * @member {module:model/ActionData} data
 */
Action.prototype['data'] = undefined;

/**
 * @member {String} type
 */
Action.prototype['type'] = undefined;

/**
 * @member {Date} date
 */
Action.prototype['date'] = undefined;

/**
 * @member {module:model/ActionLimits} limits
 */
Action.prototype['limits'] = undefined;

/**
 * @member {module:model/ActionDisplay} display
 */
Action.prototype['display'] = undefined;

/**
 * @member {module:model/ActionMemberCreator} memberCreator
 */
Action.prototype['memberCreator'] = undefined;






export default Action;

