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
 * [0 - Badges, 1 - Rooms activity, 2 - Daily feed, 3 - Usefull tips]
 * @export
 * @enum {number}
 */

export const NotificationType = {
    /**
    * Badges
    */
    Badges: 0,
    /**
    * Rooms activity
    */
    RoomsActivity: 1,
    /**
    * Daily feed
    */
    DailyFeed: 2,
    /**
    * Usefull tips
    */
    UsefullTips: 3
} as const;

export type NotificationType = typeof NotificationType[keyof typeof NotificationType];



