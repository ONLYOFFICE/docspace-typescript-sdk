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
 * [0 - Desktop, 1 - Mobile, 2 - Embedded]
 * @export
 * @enum {number}
 */

export const EditorType = {
    /**
    * Desktop
    */
    Desktop: 0,
    /**
    * Mobile
    */
    Mobile: 1,
    /**
    * Embedded
    */
    Embedded: 2
} as const;

export type EditorType = typeof EditorType[keyof typeof EditorType];



