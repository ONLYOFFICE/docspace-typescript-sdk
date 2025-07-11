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
import type { CdnStorageSettingsWrapper } from '../../models';
// @ts-ignore
import type { DoubleWrapper } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { StorageArrayWrapper } from '../../models';
// @ts-ignore
import type { StorageRequestsDto } from '../../models';
// @ts-ignore
import type { StorageSettingsWrapper } from '../../models';
/**
 * SettingsStorageApi - axios parameter creator
 * @export
 */
export const SettingsStorageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of all the backup storages.
         * @summary Get the backup storages
         * @param {boolean} [dump] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllBackupStorages: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/backup`;
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

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Returns a list of all the CDN storages.
         * @summary Get the CDN storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCdnStorages: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/cdn`;
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
         * Returns a list of all the portal storages.
         * @summary Get storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllStorages: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage`;
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
         * Returns a list of all Amazon regions.
         * @summary Get Amazon regions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAmazonS3Regions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/s3/regions`;
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
         * Returns the storage progress.
         * @summary Get the storage progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageProgress: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/progress`;
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
         * Resets the CDN storage settings to the default parameters.
         * @summary Reset the CDN storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetCdnToDefault: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/cdn`;
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
         * Resets the storage settings to the default parameters.
         * @summary Reset the storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetStorageToDefault: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage`;
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
         * Updates the CDN storage with the parameters specified in the request.
         * @summary Update the CDN storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCdn: async (storageRequestsDto?: StorageRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/cdn`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(storageRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a storage with the parameters specified in the request.
         * @summary Update a storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStorage: async (storageRequestsDto?: StorageRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(storageRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsStorageApi - functional programming interface
 * @export
 */
export const SettingsStorageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsStorageApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of all the backup storages.
         * @summary Get the backup storages
         * @param {boolean} [dump] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllBackupStorages(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllBackupStorages(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.getAllBackupStorages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the CDN storages.
         * @summary Get the CDN storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCdnStorages(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCdnStorages(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.getAllCdnStorages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the portal storages.
         * @summary Get storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllStorages(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllStorages(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.getAllStorages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all Amazon regions.
         * @summary Get Amazon regions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAmazonS3Regions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAmazonS3Regions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.getAmazonS3Regions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the storage progress.
         * @summary Get the storage progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStorageProgress(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DoubleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageProgress(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.getStorageProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the CDN storage settings to the default parameters.
         * @summary Reset the CDN storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetCdnToDefault(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetCdnToDefault(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.resetCdnToDefault']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the storage settings to the default parameters.
         * @summary Reset the storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetStorageToDefault(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetStorageToDefault(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.resetStorageToDefault']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the CDN storage with the parameters specified in the request.
         * @summary Update the CDN storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCdn(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CdnStorageSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCdn(storageRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.updateCdn']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a storage with the parameters specified in the request.
         * @summary Update a storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStorage(storageRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsStorageApi.updateStorage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsStorageApi - factory interface
 * @export
 */
export const SettingsStorageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsStorageApiFp(configuration)
    return {
        /**
         * Returns a list of all the backup storages.
         * @summary Get the backup storages
         * @param {boolean} [dump] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllBackupStorages(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<StorageArrayWrapper> {
            return localVarFp.getAllBackupStorages(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the CDN storages.
         * @summary Get the CDN storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCdnStorages(options?: RawAxiosRequestConfig): AxiosPromise<StorageArrayWrapper> {
            return localVarFp.getAllCdnStorages(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the portal storages.
         * @summary Get storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllStorages(options?: RawAxiosRequestConfig): AxiosPromise<StorageArrayWrapper> {
            return localVarFp.getAllStorages(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all Amazon regions.
         * @summary Get Amazon regions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAmazonS3Regions(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getAmazonS3Regions(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the storage progress.
         * @summary Get the storage progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageProgress(options?: RawAxiosRequestConfig): AxiosPromise<DoubleWrapper> {
            return localVarFp.getStorageProgress(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the CDN storage settings to the default parameters.
         * @summary Reset the CDN storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetCdnToDefault(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resetCdnToDefault(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the storage settings to the default parameters.
         * @summary Reset the storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetStorageToDefault(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resetStorageToDefault(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the CDN storage with the parameters specified in the request.
         * @summary Update the CDN storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCdn(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<CdnStorageSettingsWrapper> {
            return localVarFp.updateCdn(storageRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a storage with the parameters specified in the request.
         * @summary Update a storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StorageSettingsWrapper> {
            return localVarFp.updateStorage(storageRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsStorageApi - object-oriented interface
 * @export
 * @class SettingsStorageApi
 * @extends {BaseAPI}
 */
export class SettingsStorageApi extends BaseAPI {
    /**
     * Returns a list of all the backup storages.
     * @summary Get the backup storages
     * @param {boolean} [dump] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public getAllBackupStorages(dump?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).getAllBackupStorages(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the CDN storages.
     * @summary Get the CDN storages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public getAllCdnStorages(options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).getAllCdnStorages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the portal storages.
     * @summary Get storages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public getAllStorages(options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).getAllStorages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all Amazon regions.
     * @summary Get Amazon regions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public getAmazonS3Regions(options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).getAmazonS3Regions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the storage progress.
     * @summary Get the storage progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public getStorageProgress(options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).getStorageProgress(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the CDN storage settings to the default parameters.
     * @summary Reset the CDN storage settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public resetCdnToDefault(options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).resetCdnToDefault(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the storage settings to the default parameters.
     * @summary Reset the storage settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public resetStorageToDefault(options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).resetStorageToDefault(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the CDN storage with the parameters specified in the request.
     * @summary Update the CDN storage
     * @param {StorageRequestsDto} [storageRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public updateCdn(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).updateCdn(storageRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a storage with the parameters specified in the request.
     * @summary Update a storage
     * @param {StorageRequestsDto} [storageRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsStorageApi
     */
    public updateStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsStorageApiFp(this.configuration).updateStorage(storageRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

