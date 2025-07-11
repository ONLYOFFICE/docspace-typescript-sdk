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
 * The authentication token parameters.
 * @export
 * @interface AuthenticationTokenDto
 */
export interface AuthenticationTokenDto {
    /**
     * The authentication token.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'token'?: string | null;
    /**
     * The token expiration time.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'expires'?: string;
    /**
     * Specifies if the authentication code is sent by SMS or not.
     * @type {boolean}
     * @memberof AuthenticationTokenDto
     */
    'sms'?: boolean;
    /**
     * The phone number.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'phoneNoise'?: string | null;
    /**
     * Specifies if the two-factor application is used or not.
     * @type {boolean}
     * @memberof AuthenticationTokenDto
     */
    'tfa'?: boolean;
    /**
     * The two-factor authentication key.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'tfaKey'?: string | null;
    /**
     * The confirmation email URL.
     * @type {string}
     * @memberof AuthenticationTokenDto
     */
    'confirmUrl'?: string | null;
}

