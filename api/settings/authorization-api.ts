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
import type { AuthServiceRequestsArrayWrapper } from '../../models';
// @ts-ignore
import type { AuthServiceRequestsDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
/**
 * SettingsAuthorizationApi - axios parameter creator
 * @export
 */
export const SettingsAuthorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the authorization services.
         * @summary Get the authorization services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthServices: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/authservice`;
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
         * Saves the authorization keys.
         * @summary Save the authorization keys
         * @param {AuthServiceRequestsDto} [authServiceRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveAuthKeys: async (authServiceRequestsDto?: AuthServiceRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/authservice`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authServiceRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsAuthorizationApi - functional programming interface
 * @export
 */
export const SettingsAuthorizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsAuthorizationApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the authorization services.
         * @summary Get the authorization services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthServices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthServiceRequestsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthServices(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsAuthorizationApi.getAuthServices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the authorization keys.
         * @summary Save the authorization keys
         * @param {AuthServiceRequestsDto} [authServiceRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveAuthKeys(authServiceRequestsDto?: AuthServiceRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveAuthKeys(authServiceRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsAuthorizationApi.saveAuthKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsAuthorizationApi - factory interface
 * @export
 */
export const SettingsAuthorizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsAuthorizationApiFp(configuration)
    return {
        /**
         * Returns the authorization services.
         * @summary Get the authorization services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthServices(options?: RawAxiosRequestConfig): AxiosPromise<AuthServiceRequestsArrayWrapper> {
            return localVarFp.getAuthServices(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the authorization keys.
         * @summary Save the authorization keys
         * @param {AuthServiceRequestsDto} [authServiceRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveAuthKeys(authServiceRequestsDto?: AuthServiceRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveAuthKeys(authServiceRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsAuthorizationApi - object-oriented interface
 * @export
 * @class SettingsAuthorizationApi
 * @extends {BaseAPI}
 */
export class SettingsAuthorizationApi extends BaseAPI {
    /**
     * Returns the authorization services.
     * @summary Get the authorization services
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsAuthorizationApi
     */
    public getAuthServices(options?: RawAxiosRequestConfig) {
        return SettingsAuthorizationApiFp(this.configuration).getAuthServices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the authorization keys.
     * @summary Save the authorization keys
     * @param {AuthServiceRequestsDto} [authServiceRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsAuthorizationApi
     */
    public saveAuthKeys(authServiceRequestsDto?: AuthServiceRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsAuthorizationApiFp(this.configuration).saveAuthKeys(authServiceRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

