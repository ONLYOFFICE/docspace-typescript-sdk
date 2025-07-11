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
 * [0 - Trial, 1 - Paid, 2 - Delay, 3 - Not paid]
 * @export
 * @enum {number}
 */

export const TariffState = {
    /**
    * Trial
    */
    Trial: 0,
    /**
    * Paid
    */
    Paid: 1,
    /**
    * Delay
    */
    Delay: 2,
    /**
    * Not paid
    */
    NotPaid: 3
} as const;

export type TariffState = typeof TariffState[keyof typeof TariffState];



