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
import type { EditHistoryDto } from './edit-history-dto';

/**
 * 
 * @export
 * @interface EditHistoryArrayWrapper
 */
export interface EditHistoryArrayWrapper {
    /**
     * 
     * @type {Array<EditHistoryDto>}
     * @memberof EditHistoryArrayWrapper
     */
    'response'?: Array<EditHistoryDto>;
    /**
     * 
     * @type {number}
     * @memberof EditHistoryArrayWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof EditHistoryArrayWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof EditHistoryArrayWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof EditHistoryArrayWrapper
     */
    'statusCode'?: number;
}

