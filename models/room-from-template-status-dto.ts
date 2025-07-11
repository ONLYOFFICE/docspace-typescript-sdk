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
 * The progress parameters of creating a room from the template.
 * @export
 * @interface RoomFromTemplateStatusDto
 */
export interface RoomFromTemplateStatusDto {
    /**
     * The room ID.
     * @type {number}
     * @memberof RoomFromTemplateStatusDto
     */
    'roomId'?: number;
    /**
     * The progress of creating a room from the template.
     * @type {number}
     * @memberof RoomFromTemplateStatusDto
     */
    'progress'?: number;
    /**
     * The error message that is sent when a room is not created successfully from the template.
     * @type {string}
     * @memberof RoomFromTemplateStatusDto
     */
    'error'?: string | null;
    /**
     * Specifies whether the process of creating a room from the template is completed.
     * @type {boolean}
     * @memberof RoomFromTemplateStatusDto
     */
    'isCompleted'?: boolean;
}

