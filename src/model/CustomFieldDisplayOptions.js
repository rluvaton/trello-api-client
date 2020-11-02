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
import CustomFieldDisplayValue from './CustomFieldDisplayValue';

/**
 * The CustomFieldDisplayOptions model module.
 * @module model/CustomFieldDisplayOptions
 * @version 0.0.1
 */
class CustomFieldDisplayOptions {
    /**
     * Constructs a new <code>CustomFieldDisplayOptions</code>.
     * @alias module:model/CustomFieldDisplayOptions
     */
    constructor() { 
        
        CustomFieldDisplayOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldDisplayOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldDisplayOptions} obj Optional instance to populate.
     * @return {module:model/CustomFieldDisplayOptions} The populated <code>CustomFieldDisplayOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldDisplayOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('idCustomField')) {
                obj['idCustomField'] = ApiClient.convertToType(data['idCustomField'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = CustomFieldDisplayValue.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('pos')) {
                obj['pos'] = ApiClient.convertToType(data['pos'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CustomFieldDisplayOptions.prototype['id'] = undefined;

/**
 * @member {String} idCustomField
 */
CustomFieldDisplayOptions.prototype['idCustomField'] = undefined;

/**
 * @member {module:model/CustomFieldDisplayValue} value
 */
CustomFieldDisplayOptions.prototype['value'] = undefined;

/**
 * @member {String} color
 */
CustomFieldDisplayOptions.prototype['color'] = undefined;

/**
 * @member {Number} pos
 */
CustomFieldDisplayOptions.prototype['pos'] = undefined;






export default CustomFieldDisplayOptions;

