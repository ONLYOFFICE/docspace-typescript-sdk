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


// May contain unused imports in some cases
// @ts-ignore
import type { ActiveConnectionsWrapperLinksInner } from './active-connections-wrapper-links-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { ApiKeyResponseDto } from './api-key-response-dto';

/**
 * 
 * @export
 * @interface ApiKeyResponseWrapper
 */
export interface ApiKeyResponseWrapper {
    /**
     * 
     * @type {ApiKeyResponseDto}
     * @memberof ApiKeyResponseWrapper
     */
    'response'?: ApiKeyResponseDto;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyResponseWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof ApiKeyResponseWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyResponseWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyResponseWrapper
     */
    'statusCode'?: number;
}

