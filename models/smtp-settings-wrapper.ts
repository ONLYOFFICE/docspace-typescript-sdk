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
import type { SmtpSettingsDto } from './smtp-settings-dto';

/**
 * 
 * @export
 * @interface SmtpSettingsWrapper
 */
export interface SmtpSettingsWrapper {
    /**
     * 
     * @type {SmtpSettingsDto}
     * @memberof SmtpSettingsWrapper
     */
    'response'?: SmtpSettingsDto;
    /**
     * 
     * @type {number}
     * @memberof SmtpSettingsWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof SmtpSettingsWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof SmtpSettingsWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof SmtpSettingsWrapper
     */
    'statusCode'?: number;
}

