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
 * The EnterpriseIdp model module.
 * @module model/EnterpriseIdp
 * @version 0.0.1
 */
class EnterpriseIdp {
    /**
     * Constructs a new <code>EnterpriseIdp</code>.
     * @alias module:model/EnterpriseIdp
     */
    constructor() { 
        
        EnterpriseIdp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnterpriseIdp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnterpriseIdp} obj Optional instance to populate.
     * @return {module:model/EnterpriseIdp} The populated <code>EnterpriseIdp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnterpriseIdp();

            if (data.hasOwnProperty('requestSigned')) {
                obj['requestSigned'] = ApiClient.convertToType(data['requestSigned'], 'Boolean');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('loginUrl')) {
                obj['loginUrl'] = ApiClient.convertToType(data['loginUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} requestSigned
 */
EnterpriseIdp.prototype['requestSigned'] = undefined;

/**
 * @member {String} certificate
 */
EnterpriseIdp.prototype['certificate'] = undefined;

/**
 * @member {String} loginUrl
 */
EnterpriseIdp.prototype['loginUrl'] = undefined;






export default EnterpriseIdp;

