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
 * The additional confirmation data required for authentication.
 * @export
 * @interface ConfirmData
 */
export interface ConfirmData {
    /**
     * The email address to confirm the user\'s identity.
     * @type {string}
     * @memberof ConfirmData
     */
    'email'?: string | null;
    /**
     * Specifies whether this is the first access to the user\'s account.
     * @type {boolean}
     * @memberof ConfirmData
     */
    'first'?: boolean | null;
    /**
     * The unique confirmation key for validating user identity.
     * @type {string}
     * @memberof ConfirmData
     */
    'key'?: string | null;
}

