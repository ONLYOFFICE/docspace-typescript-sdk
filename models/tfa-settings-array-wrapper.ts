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
import type { TfaSettingsDto } from './tfa-settings-dto';

/**
 * 
 * @export
 * @interface TfaSettingsArrayWrapper
 */
export interface TfaSettingsArrayWrapper {
    /**
     * 
     * @type {Array<TfaSettingsDto>}
     * @memberof TfaSettingsArrayWrapper
     */
    'response'?: Array<TfaSettingsDto>;
    /**
     * 
     * @type {number}
     * @memberof TfaSettingsArrayWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof TfaSettingsArrayWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof TfaSettingsArrayWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof TfaSettingsArrayWrapper
     */
    'statusCode'?: number;
}

