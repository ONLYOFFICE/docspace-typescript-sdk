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
import type { GroupArrayWrapper } from '../../models';
/**
 * GroupRoomsApi - axios parameter creator
 * @export
 */
export const GroupRoomsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns groups with their sharing settings.
         * @summary Get groups with sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupsWithShared: async (id: number, excludeShared?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroupsWithShared', 'id', id)
            const localVarPath = `/api/2.0/group/room/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }


    
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
 * GroupRoomsApi - functional programming interface
 * @export
 */
export const GroupRoomsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupRoomsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns groups with their sharing settings.
         * @summary Get groups with sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupsWithShared(id: number, excludeShared?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsWithShared(id, excludeShared, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupRoomsApi.getGroupsWithShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GroupRoomsApi - factory interface
 * @export
 */
export const GroupRoomsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupRoomsApiFp(configuration)
    return {
        /**
         * Returns groups with their sharing settings.
         * @summary Get groups with sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupsWithShared(id: number, excludeShared?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithShared(id, excludeShared, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupRoomsApi - object-oriented interface
 * @export
 * @class GroupRoomsApi
 * @extends {BaseAPI}
 */
export class GroupRoomsApi extends BaseAPI {
    /**
     * Returns groups with their sharing settings.
     * @summary Get groups with sharing settings
     * @param {number} id The group ID.
     * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupRoomsApi
     */
    public getGroupsWithShared(id: number, excludeShared?: boolean, options?: RawAxiosRequestConfig) {
        return GroupRoomsApiFp(this.configuration).getGroupsWithShared(id, excludeShared, options).then((request) => request(this.axios, this.basePath));
    }
}

