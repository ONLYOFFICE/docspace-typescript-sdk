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
import type { CdnStorageSettings } from './cdn-storage-settings';

/**
 * 
 * @export
 * @interface CdnStorageSettingsWrapper
 */
export interface CdnStorageSettingsWrapper {
    /**
     * 
     * @type {CdnStorageSettings}
     * @memberof CdnStorageSettingsWrapper
     */
    'response'?: CdnStorageSettings;
    /**
     * 
     * @type {number}
     * @memberof CdnStorageSettingsWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof CdnStorageSettingsWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof CdnStorageSettingsWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof CdnStorageSettingsWrapper
     */
    'statusCode'?: number;
}

