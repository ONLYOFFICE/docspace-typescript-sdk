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


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { SmtpOperationStatusRequestsWrapper } from '../../models';
// @ts-ignore
import type { SmtpSettingsDto } from '../../models';
// @ts-ignore
import type { SmtpSettingsWrapper } from '../../models';
/**
 * SecuritySMTPSettingsApi - axios parameter creator
 * @export
 */
export const SecuritySMTPSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the status of the SMTP testing process.
         * @summary Get the SMTP testing process status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmtpOperationStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp/test/status`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the current portal SMTP settings.
         * @summary Get the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmtpSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resets the SMTP settings of the current portal.
         * @summary Reset the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetSmtpSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the SMTP settings for the current portal.
         * @summary Save the SMTP settings
         * @param {SmtpSettingsDto} [smtpSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveSmtpSettings: async (smtpSettingsDto?: SmtpSettingsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(smtpSettingsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Tests the SMTP settings for the current portal (sends test message to the user email).
         * @summary Test the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testSmtpSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp/test`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecuritySMTPSettingsApi - functional programming interface
 * @export
 */
export const SecuritySMTPSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecuritySMTPSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the status of the SMTP testing process.
         * @summary Get the SMTP testing process status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSmtpOperationStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpOperationStatusRequestsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmtpOperationStatus(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecuritySMTPSettingsApi.getSmtpOperationStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal SMTP settings.
         * @summary Get the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSmtpSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmtpSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecuritySMTPSettingsApi.getSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the SMTP settings of the current portal.
         * @summary Reset the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetSmtpSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetSmtpSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecuritySMTPSettingsApi.resetSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the SMTP settings for the current portal.
         * @summary Save the SMTP settings
         * @param {SmtpSettingsDto} [smtpSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveSmtpSettings(smtpSettingsDto?: SmtpSettingsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveSmtpSettings(smtpSettingsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecuritySMTPSettingsApi.saveSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tests the SMTP settings for the current portal (sends test message to the user email).
         * @summary Test the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testSmtpSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpOperationStatusRequestsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testSmtpSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecuritySMTPSettingsApi.testSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecuritySMTPSettingsApi - factory interface
 * @export
 */
export const SecuritySMTPSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecuritySMTPSettingsApiFp(configuration)
    return {
        /**
         * Returns the status of the SMTP testing process.
         * @summary Get the SMTP testing process status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmtpOperationStatus(options?: RawAxiosRequestConfig): AxiosPromise<SmtpOperationStatusRequestsWrapper> {
            return localVarFp.getSmtpOperationStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current portal SMTP settings.
         * @summary Get the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmtpSettings(options?: RawAxiosRequestConfig): AxiosPromise<SmtpSettingsWrapper> {
            return localVarFp.getSmtpSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the SMTP settings of the current portal.
         * @summary Reset the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetSmtpSettings(options?: RawAxiosRequestConfig): AxiosPromise<SmtpSettingsWrapper> {
            return localVarFp.resetSmtpSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the SMTP settings for the current portal.
         * @summary Save the SMTP settings
         * @param {SmtpSettingsDto} [smtpSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveSmtpSettings(smtpSettingsDto?: SmtpSettingsDto, options?: RawAxiosRequestConfig): AxiosPromise<SmtpSettingsWrapper> {
            return localVarFp.saveSmtpSettings(smtpSettingsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Tests the SMTP settings for the current portal (sends test message to the user email).
         * @summary Test the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testSmtpSettings(options?: RawAxiosRequestConfig): AxiosPromise<SmtpOperationStatusRequestsWrapper> {
            return localVarFp.testSmtpSettings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecuritySMTPSettingsApi - object-oriented interface
 * @export
 * @class SecuritySMTPSettingsApi
 * @extends {BaseAPI}
 */
export class SecuritySMTPSettingsApi extends BaseAPI {
    /**
     * Returns the status of the SMTP testing process.
     * @summary Get the SMTP testing process status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecuritySMTPSettingsApi
     */
    public getSmtpOperationStatus(options?: RawAxiosRequestConfig) {
        return SecuritySMTPSettingsApiFp(this.configuration).getSmtpOperationStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal SMTP settings.
     * @summary Get the SMTP settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecuritySMTPSettingsApi
     */
    public getSmtpSettings(options?: RawAxiosRequestConfig) {
        return SecuritySMTPSettingsApiFp(this.configuration).getSmtpSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the SMTP settings of the current portal.
     * @summary Reset the SMTP settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecuritySMTPSettingsApi
     */
    public resetSmtpSettings(options?: RawAxiosRequestConfig) {
        return SecuritySMTPSettingsApiFp(this.configuration).resetSmtpSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the SMTP settings for the current portal.
     * @summary Save the SMTP settings
     * @param {SmtpSettingsDto} [smtpSettingsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecuritySMTPSettingsApi
     */
    public saveSmtpSettings(smtpSettingsDto?: SmtpSettingsDto, options?: RawAxiosRequestConfig) {
        return SecuritySMTPSettingsApiFp(this.configuration).saveSmtpSettings(smtpSettingsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tests the SMTP settings for the current portal (sends test message to the user email).
     * @summary Test the SMTP settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecuritySMTPSettingsApi
     */
    public testSmtpSettings(options?: RawAxiosRequestConfig) {
        return SecuritySMTPSettingsApiFp(this.configuration).testSmtpSettings(options).then((request) => request(this.axios, this.basePath));
    }
}

