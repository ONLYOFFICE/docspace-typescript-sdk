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
import type { FolderContentDtoInteger } from './folder-content-dto-integer';

/**
 * 
 * @export
 * @interface FolderContentIntegerWrapper
 */
export interface FolderContentIntegerWrapper {
    /**
     * 
     * @type {FolderContentDtoInteger}
     * @memberof FolderContentIntegerWrapper
     */
    'response'?: FolderContentDtoInteger;
    /**
     * 
     * @type {number}
     * @memberof FolderContentIntegerWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof FolderContentIntegerWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof FolderContentIntegerWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof FolderContentIntegerWrapper
     */
    'statusCode'?: number;
}

