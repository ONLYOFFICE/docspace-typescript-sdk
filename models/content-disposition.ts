/* tslint:disable */
/* eslint-disable */
/**
 * Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ContentDisposition
 */
export interface ContentDisposition {
    /**
     * 
     * @type {string}
     * @memberof ContentDisposition
     */
    'dispositionType'?: string | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ContentDisposition
     */
    'parameters'?: Array<any> | null;
    /**
     * 
     * @type {string}
     * @memberof ContentDisposition
     */
    'fileName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentDisposition
     */
    'creationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentDisposition
     */
    'modificationDate'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ContentDisposition
     */
    'inline'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContentDisposition
     */
    'readDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentDisposition
     */
    'size'?: number;
}

