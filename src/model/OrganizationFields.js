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
* Enum class OrganizationFields.
* @enum {}
* @readonly
*/
export default class OrganizationFields {
    
        /**
         * value: "id"
         * @const
         */
        "id" = "id";

    
        /**
         * value: "name"
         * @const
         */
        "name" = "name";

    

    /**
    * Returns a <code>OrganizationFields</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/OrganizationFields} The enum <code>OrganizationFields</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

