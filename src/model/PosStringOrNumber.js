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
 * The PosStringOrNumber model module.
 * @module model/PosStringOrNumber
 * @version 0.0.1
 */
class PosStringOrNumber {
    /**
     * Constructs a new <code>PosStringOrNumber</code>.
     * @alias module:model/PosStringOrNumber
     */
    constructor() { 
        
        PosStringOrNumber.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PosStringOrNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PosStringOrNumber} obj Optional instance to populate.
     * @return {module:model/PosStringOrNumber} The populated <code>PosStringOrNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PosStringOrNumber();

        }
        return obj;
    }


}






export default PosStringOrNumber;

