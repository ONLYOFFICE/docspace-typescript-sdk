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
import type { AccountInfoArrayWrapper } from '../../models';
// @ts-ignore
import type { LinkAccountRequestDto } from '../../models';
// @ts-ignore
import type { SignupAccountRequestDto } from '../../models';
/**
 * PeopleThirdPartyAccountsApi - axios parameter creator
 * @export
 */
export const PeopleThirdPartyAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of the available third-party accounts.
         * @summary Get third-party accounts
         * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
         * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
         * @param {string} [clientCallback] The method that is called after authentication.
         * @param {string} [fromOnly] The provider name if a response is required only from this provider.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthProviders: async (inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/providers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (inviteView !== undefined) {
                localVarQueryParameter['inviteView'] = inviteView;
            }

            if (settingsView !== undefined) {
                localVarQueryParameter['settingsView'] = settingsView;
            }

            if (clientCallback !== undefined) {
                localVarQueryParameter['clientCallback'] = clientCallback;
            }

            if (fromOnly !== undefined) {
                localVarQueryParameter['fromOnly'] = fromOnly;
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
         * Links a third-party account specified in the request to the user profile.
         * @summary Link a third-pary account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        linkAccount: async (linkAccountRequestDto?: LinkAccountRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/linkaccount`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(linkAccountRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a third-party account with the parameters specified in the request.
         * @summary Create a third-pary account
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupAccount: async (signupAccountRequestDto?: SignupAccountRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signupAccountRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unlinks a third-party account specified in the request from the user profile.
         * @summary Unlink a third-pary account
         * @param {string} [provider] The provider name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlinkAccount: async (provider?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/unlinkaccount`;
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

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
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
 * PeopleThirdPartyAccountsApi - functional programming interface
 * @export
 */
export const PeopleThirdPartyAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleThirdPartyAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of the available third-party accounts.
         * @summary Get third-party accounts
         * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
         * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
         * @param {string} [clientCallback] The method that is called after authentication.
         * @param {string} [fromOnly] The provider name if a response is required only from this provider.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthProviders(inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountInfoArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthProviders(inviteView, settingsView, clientCallback, fromOnly, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.getAuthProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Links a third-party account specified in the request to the user profile.
         * @summary Link a third-pary account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async linkAccount(linkAccountRequestDto?: LinkAccountRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.linkAccount(linkAccountRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.linkAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a third-party account with the parameters specified in the request.
         * @summary Create a third-pary account
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signupAccount(signupAccountRequestDto?: SignupAccountRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signupAccount(signupAccountRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.signupAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unlinks a third-party account specified in the request from the user profile.
         * @summary Unlink a third-pary account
         * @param {string} [provider] The provider name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlinkAccount(provider?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkAccount(provider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.unlinkAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleThirdPartyAccountsApi - factory interface
 * @export
 */
export const PeopleThirdPartyAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleThirdPartyAccountsApiFp(configuration)
    return {
        /**
         * Returns a list of the available third-party accounts.
         * @summary Get third-party accounts
         * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
         * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
         * @param {string} [clientCallback] The method that is called after authentication.
         * @param {string} [fromOnly] The provider name if a response is required only from this provider.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthProviders(inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options?: RawAxiosRequestConfig): AxiosPromise<AccountInfoArrayWrapper> {
            return localVarFp.getAuthProviders(inviteView, settingsView, clientCallback, fromOnly, options).then((request) => request(axios, basePath));
        },
        /**
         * Links a third-party account specified in the request to the user profile.
         * @summary Link a third-pary account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        linkAccount(linkAccountRequestDto?: LinkAccountRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.linkAccount(linkAccountRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a third-party account with the parameters specified in the request.
         * @summary Create a third-pary account
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupAccount(signupAccountRequestDto?: SignupAccountRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.signupAccount(signupAccountRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Unlinks a third-party account specified in the request from the user profile.
         * @summary Unlink a third-pary account
         * @param {string} [provider] The provider name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlinkAccount(provider?: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unlinkAccount(provider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PeopleThirdPartyAccountsApi - object-oriented interface
 * @export
 * @class PeopleThirdPartyAccountsApi
 * @extends {BaseAPI}
 */
export class PeopleThirdPartyAccountsApi extends BaseAPI {
    /**
     * Returns a list of the available third-party accounts.
     * @summary Get third-party accounts
     * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
     * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
     * @param {string} [clientCallback] The method that is called after authentication.
     * @param {string} [fromOnly] The provider name if a response is required only from this provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public getAuthProviders(inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).getAuthProviders(inviteView, settingsView, clientCallback, fromOnly, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Links a third-party account specified in the request to the user profile.
     * @summary Link a third-pary account
     * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public linkAccount(linkAccountRequestDto?: LinkAccountRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).linkAccount(linkAccountRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a third-party account with the parameters specified in the request.
     * @summary Create a third-pary account
     * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public signupAccount(signupAccountRequestDto?: SignupAccountRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).signupAccount(signupAccountRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unlinks a third-party account specified in the request from the user profile.
     * @summary Unlink a third-pary account
     * @param {string} [provider] The provider name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public unlinkAccount(provider?: string, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).unlinkAccount(provider, options).then((request) => request(this.axios, this.basePath));
    }
}

