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
 * The request parameters for tracking SMTP (Simple Mail Transfer Protocol) operation status.
 * @export
 * @interface SmtpOperationStatusRequestsDto
 */
export interface SmtpOperationStatusRequestsDto {
    /**
     * Specifies whether the SMTP operation has finished processing.
     * @type {boolean}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'completed'?: boolean;
    /**
     * The unique identifier for tracking the SMTP operation.
     * @type {string}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'id'?: string | null;
    /**
     * The error message if the SMTP operation encountered issues.
     * @type {string}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'error'?: string | null;
    /**
     * The current state of the SMTP operation.
     * @type {string}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'status'?: string | null;
    /**
     * The progress indicator showing completion percentage of the operation.
     * @type {number}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'percents'?: number;
}

