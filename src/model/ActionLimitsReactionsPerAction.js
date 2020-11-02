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
 * The ActionLimitsReactionsPerAction model module.
 * @module model/ActionLimitsReactionsPerAction
 * @version 0.0.1
 */
class ActionLimitsReactionsPerAction {
    /**
     * Constructs a new <code>ActionLimitsReactionsPerAction</code>.
     * @alias module:model/ActionLimitsReactionsPerAction
     */
    constructor() { 
        
        ActionLimitsReactionsPerAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionLimitsReactionsPerAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionLimitsReactionsPerAction} obj Optional instance to populate.
     * @return {module:model/ActionLimitsReactionsPerAction} The populated <code>ActionLimitsReactionsPerAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionLimitsReactionsPerAction();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('disableAt')) {
                obj['disableAt'] = ApiClient.convertToType(data['disableAt'], 'Number');
            }
            if (data.hasOwnProperty('warnAt')) {
                obj['warnAt'] = ApiClient.convertToType(data['warnAt'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} status
 */
ActionLimitsReactionsPerAction.prototype['status'] = undefined;

/**
 * @member {Number} disableAt
 */
ActionLimitsReactionsPerAction.prototype['disableAt'] = undefined;

/**
 * @member {Number} warnAt
 */
ActionLimitsReactionsPerAction.prototype['warnAt'] = undefined;






export default ActionLimitsReactionsPerAction;

