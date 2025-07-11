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
 * The plugins parameters.
 * @export
 * @interface PluginsDto
 */
export interface PluginsDto {
    /**
     * Specifies if the plugins are enabled or not.
     * @type {boolean}
     * @memberof PluginsDto
     */
    'enabled'?: boolean;
    /**
     * Specifies if the plugins can be uploaded or not.
     * @type {boolean}
     * @memberof PluginsDto
     */
    'upload'?: boolean;
    /**
     * Specifies if the plugins can be deleted or not.
     * @type {boolean}
     * @memberof PluginsDto
     */
    'delete'?: boolean;
}

