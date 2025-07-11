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
 * The request for updating client details.
 * @export
 * @interface UpdateClientRequest
 */
export interface UpdateClientRequest {
    /**
     * The client name.
     * @type {string}
     * @memberof UpdateClientRequest
     */
    'name'?: string;
    /**
     * The client description
     * @type {string}
     * @memberof UpdateClientRequest
     */
    'description'?: string;
    /**
     * The client logo in base64 format.
     * @type {string}
     * @memberof UpdateClientRequest
     */
    'logo'?: string;
    /**
     * Indicates whether PKCE is allowed for the client.
     * @type {boolean}
     * @memberof UpdateClientRequest
     */
    'allow_pkce'?: boolean;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     * @type {boolean}
     * @memberof UpdateClientRequest
     */
    'is_public'?: boolean;
    /**
     * The allowed origins for the client.
     * @type {Set<string>}
     * @memberof UpdateClientRequest
     */
    'allowed_origins'?: Set<string>;
}

