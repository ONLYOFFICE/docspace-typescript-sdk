# OAuth20AuthorizationApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**oauth2AuthorizeGet**](#oauth2authorizeget) | **GET** /oauth2/authorize | OAuth2 authorization endpoint|
|[**oauth2AuthorizePost**](#oauth2authorizepost) | **POST** /oauth2/authorize | OAuth2 consent endpoint|
|[**oauth2TokenPost**](#oauth2tokenpost) | **POST** /oauth2/token | OAuth2 token endpoint|

# **oauth2AuthorizeGet**
> oauth2AuthorizeGet()

Initiates the OAuth2 authorization flow.

### Example

```typescript
import {
    OAuth20AuthorizationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20AuthorizationApi(configuration);

let responseType: string; //The OAuth 2.0 response type, must be \'code\' for authorization code flow. (default to undefined)
let clientId: string; //The client identifier issued to the client during registration. (default to undefined)
let redirectUri: string; //The URL to redirect to after authorization is complete. (default to undefined)
let scope: string; //The space-separated list of requested scope permissions. (default to undefined)

const { status, data } = await apiInstance.oauth2AuthorizeGet(
    responseType,
    clientId,
    redirectUri,
    scope
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **responseType** | [**string**] | The OAuth 2.0 response type, must be \&#39;code\&#39; for authorization code flow. | defaults to undefined|
| **clientId** | [**string**] | The client identifier issued to the client during registration. | defaults to undefined|
| **redirectUri** | [**string**] | The URL to redirect to after authorization is complete. | defaults to undefined|
| **scope** | [**string**] | The space-separated list of requested scope permissions. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authorization page |  -  |
|**400** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2AuthorizePost**
> oauth2AuthorizePost()

Sends a consent request with the specified parameters.

### Example

```typescript
import {
    OAuth20AuthorizationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20AuthorizationApi(configuration);

let clientId: string; //The client identifier issued to the client during registration. (optional) (default to undefined)
let state: string; //The random string used to solve the CSRF vulnerability problem. (optional) (default to undefined)
let scope: string; //The space-separated list of requested scope permissions. (optional) (default to undefined)

const { status, data } = await apiInstance.oauth2AuthorizePost(
    clientId,
    state,
    scope
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client identifier issued to the client during registration. | (optional) defaults to undefined|
| **state** | [**string**] | The random string used to solve the CSRF vulnerability problem. | (optional) defaults to undefined|
| **scope** | [**string**] | The space-separated list of requested scope permissions. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Redirect to the client\&#39;s redirect URI with authorization code |  -  |
|**400** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2TokenPost**
> Oauth2TokenPost200Response oauth2TokenPost()

Exchanges an authorization code specified in the request for the access token.

### Example

```typescript
import {
    OAuth20AuthorizationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20AuthorizationApi(configuration);

let grantType: string; //The OAuth2 grant type, must be \\\'authorization_code\\\' for the authorization code flow. (optional) (default to undefined)
let code: string; //A temporary authorization code that is sent to the client to be exchanged for a token. (optional) (default to undefined)
let redirectUri: string; //The URL where the user will be redirected after successful or unsuccessful authentication. (optional) (default to undefined)
let clientId: string; //The client identifier issued to the client during registration. (optional) (default to undefined)
let clientSecret: string; //The client secret issued to the client during registration. (optional) (default to undefined)

const { status, data } = await apiInstance.oauth2TokenPost(
    grantType,
    code,
    redirectUri,
    clientId,
    clientSecret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **grantType** | [**string**] | The OAuth2 grant type, must be \\\&#39;authorization_code\\\&#39; for the authorization code flow. | (optional) defaults to undefined|
| **code** | [**string**] | A temporary authorization code that is sent to the client to be exchanged for a token. | (optional) defaults to undefined|
| **redirectUri** | [**string**] | The URL where the user will be redirected after successful or unsuccessful authentication. | (optional) defaults to undefined|
| **clientId** | [**string**] | The client identifier issued to the client during registration. | (optional) defaults to undefined|
| **clientSecret** | [**string**] | The client secret issued to the client during registration. | (optional) defaults to undefined|


### Return type

**Oauth2TokenPost200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The authorization code was successfully exchanged for the access token |  -  |
|**400** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

