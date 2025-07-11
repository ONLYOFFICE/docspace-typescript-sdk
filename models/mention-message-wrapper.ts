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
import type { ActionLinkConfig } from './action-link-config';

/**
 * The mention message parameters.
 * @export
 * @interface MentionMessageWrapper
 */
export interface MentionMessageWrapper {
    /**
     * 
     * @type {ActionLinkConfig}
     * @memberof MentionMessageWrapper
     */
    'actionLink'?: ActionLinkConfig;
    /**
     * A list of emails which will receive the mention message.
     * @type {Array<string>}
     * @memberof MentionMessageWrapper
     */
    'emails'?: Array<string> | null;
    /**
     * The comment message.
     * @type {string}
     * @memberof MentionMessageWrapper
     */
    'message'?: string | null;
}

