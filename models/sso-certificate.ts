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
 * The SSO certificate parameters.
 * @export
 * @interface SsoCertificate
 */
export interface SsoCertificate {
    /**
     * Specifies if a certificate is self-signed or not.
     * @type {boolean}
     * @memberof SsoCertificate
     */
    'selfSigned'?: boolean;
    /**
     * The CRT certificate file.
     * @type {string}
     * @memberof SsoCertificate
     */
    'crt'?: string | null;
    /**
     * The certificate key.
     * @type {string}
     * @memberof SsoCertificate
     */
    'key'?: string | null;
    /**
     * The certificate action.
     * @type {string}
     * @memberof SsoCertificate
     */
    'action'?: string | null;
    /**
     * The certificate domain name.
     * @type {string}
     * @memberof SsoCertificate
     */
    'domainName'?: string | null;
    /**
     * The certificate start date.
     * @type {string}
     * @memberof SsoCertificate
     */
    'startDate'?: string;
    /**
     * The certificate expiration date.
     * @type {string}
     * @memberof SsoCertificate
     */
    'expiredDate'?: string;
}

