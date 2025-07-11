# SettingsLoginSettingsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getLoginSettings**](#getloginsettings) | **GET** /api/2.0/settings/security/loginsettings | Get the login settings|
|[**setDefaultLoginSettings**](#setdefaultloginsettings) | **DELETE** /api/2.0/settings/security/loginsettings | Reset the login settings|
|[**updateLoginSettings**](#updateloginsettings) | **PUT** /api/2.0/settings/security/loginsettings | Update the login settings|

# **getLoginSettings**
> LoginSettingsWrapper getLoginSettings()

Returns the portal login settings.

### Example

```typescript
import {
    SettingsLoginSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsLoginSettingsApi(configuration);

const { status, data } = await apiInstance.getLoginSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LoginSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setDefaultLoginSettings**
> LoginSettingsWrapper setDefaultLoginSettings()

Resets the portal login settings to default.

### Example

```typescript
import {
    SettingsLoginSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsLoginSettingsApi(configuration);

const { status, data } = await apiInstance.setDefaultLoginSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LoginSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateLoginSettings**
> LoginSettingsWrapper updateLoginSettings()

Updates the login settings with the parameters specified in the request.

### Example

```typescript
import {
    SettingsLoginSettingsApi,
    Configuration,
    LoginSettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsLoginSettingsApi(configuration);

let loginSettingsRequestDto: LoginSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.updateLoginSettings(
    loginSettingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginSettingsRequestDto** | **LoginSettingsRequestDto**|  | |


### Return type

**LoginSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated login settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

