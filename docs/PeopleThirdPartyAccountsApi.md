# PeopleThirdPartyAccountsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuthProviders**](#getauthproviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party accounts|
|[**linkAccount**](#linkaccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-pary account|
|[**signupAccount**](#signupaccount) | **POST** /api/2.0/people/thirdparty/signup | Create a third-pary account|
|[**unlinkAccount**](#unlinkaccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-pary account|

# **getAuthProviders**
> AccountInfoArrayWrapper getAuthProviders()

Returns a list of the available third-party accounts.

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let inviteView: boolean; //Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers. (optional) (default to undefined)
let settingsView: boolean; //Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false). (optional) (default to undefined)
let clientCallback: string; //The method that is called after authentication. (optional) (default to undefined)
let fromOnly: string; //The provider name if a response is required only from this provider. (optional) (default to undefined)

const { status, data } = await apiInstance.getAuthProviders(
    inviteView,
    settingsView,
    clientCallback,
    fromOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteView** | [**boolean**] | Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers. | (optional) defaults to undefined|
| **settingsView** | [**boolean**] | Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false). | (optional) defaults to undefined|
| **clientCallback** | [**string**] | The method that is called after authentication. | (optional) defaults to undefined|
| **fromOnly** | [**string**] | The provider name if a response is required only from this provider. | (optional) defaults to undefined|


### Return type

**AccountInfoArrayWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of third-party accounts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **linkAccount**
> linkAccount()

Links a third-party account specified in the request to the user profile.

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration,
    LinkAccountRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let linkAccountRequestDto: LinkAccountRequestDto; // (optional)

const { status, data } = await apiInstance.linkAccount(
    linkAccountRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkAccountRequestDto** | **LinkAccountRequestDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**405** | Error not allowed option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signupAccount**
> signupAccount()

Creates a third-party account with the parameters specified in the request.

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration,
    SignupAccountRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let signupAccountRequestDto: SignupAccountRequestDto; // (optional)

const { status, data } = await apiInstance.signupAccount(
    signupAccountRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signupAccountRequestDto** | **SignupAccountRequestDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Incorrect email |  -  |
|**403** | The invitation link is invalid or its validity has expired |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlinkAccount**
> unlinkAccount()

Unlinks a third-party account specified in the request from the user profile.

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let provider: string; //The provider name. (optional) (default to undefined)

const { status, data } = await apiInstance.unlinkAccount(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | The provider name. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

