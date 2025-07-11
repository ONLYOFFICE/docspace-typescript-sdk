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
import type { CustomColorThemesSettingsColorItem } from './custom-color-themes-settings-color-item';

/**
 * The custom color theme settings.
 * @export
 * @interface CustomColorThemesSettingsItem
 */
export interface CustomColorThemesSettingsItem {
    /**
     * The custom color theme ID.
     * @type {number}
     * @memberof CustomColorThemesSettingsItem
     */
    'id'?: number;
    /**
     * The custom color theme name.
     * @type {string}
     * @memberof CustomColorThemesSettingsItem
     */
    'name'?: string | null;
    /**
     * 
     * @type {CustomColorThemesSettingsColorItem}
     * @memberof CustomColorThemesSettingsItem
     */
    'main'?: CustomColorThemesSettingsColorItem;
    /**
     * 
     * @type {CustomColorThemesSettingsColorItem}
     * @memberof CustomColorThemesSettingsItem
     */
    'text'?: CustomColorThemesSettingsColorItem;
}

