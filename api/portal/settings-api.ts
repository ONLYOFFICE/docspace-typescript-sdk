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
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TenantWrapper } from '../../models';
/**
 * PortalSettingsApi - axios parameter creator
 * @export
 */
export const PortalSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Restores the current portal.
         * @summary Restore a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        continuePortal: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/continue`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
         * Deletes the current portal.
         * @summary Delete a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePortal: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/delete`;
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
         * Returns the current portal information.
         * @summary Get a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal`;
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
         * Returns the full absolute path to the current portal.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The virtual path for the portal resource access.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFullAbsolutePath: async (virtualPath?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/path`;
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

            if (virtualPath !== undefined) {
                localVarQueryParameter['virtualPath'] = virtualPath;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends the instructions to remove the current portal.
         * @summary Send removal instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendDeleteInstructions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/delete`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends the instructions to suspend the current portal.
         * @summary Send suspension instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSuspendInstructions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/suspend`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deactivates the current portal.
         * @summary Deactivate a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        suspendPortal: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/suspend`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
 * PortalSettingsApi - functional programming interface
 * @export
 */
export const PortalSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortalSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Restores the current portal.
         * @summary Restore a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async continuePortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.continuePortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.continuePortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the current portal.
         * @summary Delete a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.deletePortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal information.
         * @summary Get a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.get']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the full absolute path to the current portal.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The virtual path for the portal resource access.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFullAbsolutePath(virtualPath?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFullAbsolutePath(virtualPath, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.getFullAbsolutePath']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the instructions to remove the current portal.
         * @summary Send removal instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendDeleteInstructions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendDeleteInstructions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.sendDeleteInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the instructions to suspend the current portal.
         * @summary Send suspension instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendSuspendInstructions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSuspendInstructions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.sendSuspendInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deactivates the current portal.
         * @summary Deactivate a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async suspendPortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.suspendPortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.suspendPortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PortalSettingsApi - factory interface
 * @export
 */
export const PortalSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortalSettingsApiFp(configuration)
    return {
        /**
         * Restores the current portal.
         * @summary Restore a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        continuePortal(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.continuePortal(options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the current portal.
         * @summary Delete a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePortal(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.deletePortal(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current portal information.
         * @summary Get a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(options?: RawAxiosRequestConfig): AxiosPromise<TenantWrapper> {
            return localVarFp.get(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the full absolute path to the current portal.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The virtual path for the portal resource access.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFullAbsolutePath(virtualPath?: string, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getFullAbsolutePath(virtualPath, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the instructions to remove the current portal.
         * @summary Send removal instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendDeleteInstructions(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendDeleteInstructions(options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the instructions to suspend the current portal.
         * @summary Send suspension instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSuspendInstructions(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendSuspendInstructions(options).then((request) => request(axios, basePath));
        },
        /**
         * Deactivates the current portal.
         * @summary Deactivate a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        suspendPortal(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.suspendPortal(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PortalSettingsApi - object-oriented interface
 * @export
 * @class PortalSettingsApi
 * @extends {BaseAPI}
 */
export class PortalSettingsApi extends BaseAPI {
    /**
     * Restores the current portal.
     * @summary Restore a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public continuePortal(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).continuePortal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the current portal.
     * @summary Delete a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public deletePortal(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).deletePortal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal information.
     * @summary Get a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public get(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the full absolute path to the current portal.
     * @summary Get a path to the portal
     * @param {string} [virtualPath] The virtual path for the portal resource access.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public getFullAbsolutePath(virtualPath?: string, options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).getFullAbsolutePath(virtualPath, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the instructions to remove the current portal.
     * @summary Send removal instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public sendDeleteInstructions(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).sendDeleteInstructions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the instructions to suspend the current portal.
     * @summary Send suspension instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public sendSuspendInstructions(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).sendSuspendInstructions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deactivates the current portal.
     * @summary Deactivate a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public suspendPortal(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).suspendPortal(options).then((request) => request(this.axios, this.basePath));
    }
}

