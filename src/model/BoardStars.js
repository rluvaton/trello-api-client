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
 * The BoardStars model module.
 * @module model/BoardStars
 * @version 0.0.1
 */
class BoardStars {
    /**
     * Constructs a new <code>BoardStars</code>.
     * @alias module:model/BoardStars
     */
    constructor() { 
        
        BoardStars.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BoardStars</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BoardStars} obj Optional instance to populate.
     * @return {module:model/BoardStars} The populated <code>BoardStars</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BoardStars();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('idBoard')) {
                obj['idBoard'] = ApiClient.convertToType(data['idBoard'], 'String');
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
BoardStars.prototype['id'] = undefined;

/**
 * @member {String} idBoard
 */
BoardStars.prototype['idBoard'] = undefined;

/**
 * @member {Number} pos
 */
BoardStars.prototype['pos'] = undefined;






export default BoardStars;

