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
import type { DownloadRequestItemDtoKey } from './download-request-item-dto-key';

/**
 * The download request item with conversion parameters and security settings.
 * @export
 * @interface DownloadRequestItemDto
 */
export interface DownloadRequestItemDto {
    /**
     * 
     * @type {DownloadRequestItemDtoKey}
     * @memberof DownloadRequestItemDto
     */
    'key': DownloadRequestItemDtoKey;
    /**
     * The target format or conversion type for the file download.
     * @type {string}
     * @memberof DownloadRequestItemDto
     */
    'value': string | null;
    /**
     * The optional password for accessing protected files.
     * @type {string}
     * @memberof DownloadRequestItemDto
     */
    'password'?: string | null;
}

