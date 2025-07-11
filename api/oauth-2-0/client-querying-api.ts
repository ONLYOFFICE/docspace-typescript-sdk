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
import type { ClientInfoResponse } from '../../models';
// @ts-ignore
import type { ClientResponse } from '../../models';
// @ts-ignore
import type { ErrorResponse } from '../../models';
// @ts-ignore
import type { PageableModificationResponse } from '../../models';
// @ts-ignore
import type { PageableResponse } from '../../models';
// @ts-ignore
import type { PageableResponseClientInfoResponse } from '../../models';
/**
 * OAuth20ClientQueryingApi - axios parameter creator
 * @export
 */
export const OAuth20ClientQueryingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
         * @summary Get client details
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClient: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getClient', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-signature required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the detailed information for a client with the ID specified in the request.
         * @summary Get detailed client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClientInfo: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getClientInfo', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}/info`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-signature required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
         * @summary Get clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The ID of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClients: async (limit: number, lastClientId?: string, lastCreatedOn?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getClients', 'limit', limit)
            const localVarPath = `/api/2.0/clients`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-signature required

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (lastClientId !== undefined) {
                localVarQueryParameter['last_client_id'] = lastClientId;
            }

            if (lastCreatedOn !== undefined) {
                localVarQueryParameter['last_created_on'] = (lastCreatedOn as any instanceof Date) ?
                    (lastCreatedOn as any).toISOString() :
                    lastCreatedOn;
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
         * Retrieves a paginated list of information for all clients.
         * @summary Get detailed information of clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The identifier of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClientsInfo: async (limit: number, lastClientId?: string, lastCreatedOn?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getClientsInfo', 'limit', limit)
            const localVarPath = `/api/2.0/clients/info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-signature required

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (lastClientId !== undefined) {
                localVarQueryParameter['last_client_id'] = lastClientId;
            }

            if (lastCreatedOn !== undefined) {
                localVarQueryParameter['last_created_on'] = (lastCreatedOn as any instanceof Date) ?
                    (lastCreatedOn as any).toISOString() :
                    lastCreatedOn;
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
         * Retrieves a paginated list of user consents.
         * @summary Get user consents
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastModifiedOn] The date when the user consent was last modified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsents: async (limit: number, lastModifiedOn?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getConsents', 'limit', limit)
            const localVarPath = `/api/2.0/clients/consents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-signature required

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (lastModifiedOn !== undefined) {
                localVarQueryParameter['last_modified_on'] = (lastModifiedOn as any instanceof Date) ?
                    (lastModifiedOn as any).toISOString() :
                    lastModifiedOn;
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
         * Returns the public information for a client with the ID secified din the request.
         * @summary Get public client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicClientInfo: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getPublicClientInfo', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}/public/info`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * OAuth20ClientQueryingApi - functional programming interface
 * @export
 */
export const OAuth20ClientQueryingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OAuth20ClientQueryingApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
         * @summary Get client details
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClient(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClient(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientQueryingApi.getClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the detailed information for a client with the ID specified in the request.
         * @summary Get detailed client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClientInfo(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClientInfo(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientQueryingApi.getClientInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
         * @summary Get clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The ID of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClients(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageableResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClients(limit, lastClientId, lastCreatedOn, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientQueryingApi.getClients']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a paginated list of information for all clients.
         * @summary Get detailed information of clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The identifier of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClientsInfo(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageableResponseClientInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClientsInfo(limit, lastClientId, lastCreatedOn, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientQueryingApi.getClientsInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a paginated list of user consents.
         * @summary Get user consents
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastModifiedOn] The date when the user consent was last modified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConsents(limit: number, lastModifiedOn?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageableModificationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsents(limit, lastModifiedOn, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientQueryingApi.getConsents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the public information for a client with the ID secified din the request.
         * @summary Get public client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPublicClientInfo(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPublicClientInfo(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientQueryingApi.getPublicClientInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OAuth20ClientQueryingApi - factory interface
 * @export
 */
export const OAuth20ClientQueryingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OAuth20ClientQueryingApiFp(configuration)
    return {
        /**
         * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
         * @summary Get client details
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClient(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<ClientResponse> {
            return localVarFp.getClient(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the detailed information for a client with the ID specified in the request.
         * @summary Get detailed client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClientInfo(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<ClientInfoResponse> {
            return localVarFp.getClientInfo(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
         * @summary Get clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The ID of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClients(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): AxiosPromise<PageableResponse> {
            return localVarFp.getClients(limit, lastClientId, lastCreatedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of information for all clients.
         * @summary Get detailed information of clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The identifier of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClientsInfo(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): AxiosPromise<PageableResponseClientInfoResponse> {
            return localVarFp.getClientsInfo(limit, lastClientId, lastCreatedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of user consents.
         * @summary Get user consents
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastModifiedOn] The date when the user consent was last modified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsents(limit: number, lastModifiedOn?: string, options?: RawAxiosRequestConfig): AxiosPromise<PageableModificationResponse> {
            return localVarFp.getConsents(limit, lastModifiedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the public information for a client with the ID secified din the request.
         * @summary Get public client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPublicClientInfo(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<ClientInfoResponse> {
            return localVarFp.getPublicClientInfo(clientId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OAuth20ClientQueryingApi - object-oriented interface
 * @export
 * @class OAuth20ClientQueryingApi
 * @extends {BaseAPI}
 */
export class OAuth20ClientQueryingApi extends BaseAPI {
    /**
     * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
     * @summary Get client details
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientQueryingApi
     */
    public getClient(clientId: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientQueryingApiFp(this.configuration).getClient(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the detailed information for a client with the ID specified in the request.
     * @summary Get detailed client information
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientQueryingApi
     */
    public getClientInfo(clientId: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientQueryingApiFp(this.configuration).getClientInfo(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
     * @summary Get clients
     * @param {number} limit The maximum number of results returned per page.
     * @param {string} [lastClientId] The ID of the last retrieved client.
     * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientQueryingApi
     */
    public getClients(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientQueryingApiFp(this.configuration).getClients(limit, lastClientId, lastCreatedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of information for all clients.
     * @summary Get detailed information of clients
     * @param {number} limit The maximum number of results returned per page.
     * @param {string} [lastClientId] The identifier of the last retrieved client.
     * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientQueryingApi
     */
    public getClientsInfo(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientQueryingApiFp(this.configuration).getClientsInfo(limit, lastClientId, lastCreatedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of user consents.
     * @summary Get user consents
     * @param {number} limit The maximum number of results returned per page.
     * @param {string} [lastModifiedOn] The date when the user consent was last modified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientQueryingApi
     */
    public getConsents(limit: number, lastModifiedOn?: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientQueryingApiFp(this.configuration).getConsents(limit, lastModifiedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the public information for a client with the ID secified din the request.
     * @summary Get public client information
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientQueryingApi
     */
    public getPublicClientInfo(clientId: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientQueryingApiFp(this.configuration).getPublicClientInfo(clientId, options).then((request) => request(this.axios, this.basePath));
    }
}

