# SettingsGreetingSettingsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGreetingSettings**](#getgreetingsettings) | **GET** /api/2.0/settings/greetingsettings | Get greeting settings|
|[**isDefault**](#isdefault) | **GET** /api/2.0/settings/greetingsettings/isdefault | Check the default greeting settings|
|[**restoreGreetingSettings**](#restoregreetingsettings) | **POST** /api/2.0/settings/greetingsettings/restore | Restore the greeting settings|
|[**saveGreetingSettings**](#savegreetingsettings) | **POST** /api/2.0/settings/greetingsettings | Save the greeting settings|

# **getGreetingSettings**
> ObjectWrapper getGreetingSettings()

Returns the greeting settings for the current portal.

### Example

```typescript
import {
    SettingsGreetingSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsGreetingSettingsApi(configuration);

const { status, data } = await apiInstance.getGreetingSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Greeting settings: tenant name |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isDefault**
> BooleanWrapper isDefault()

Checks if the greeting settings of the current portal are set to default or not.

### Example

```typescript
import {
    SettingsGreetingSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsGreetingSettingsApi(configuration);

const { status, data } = await apiInstance.isDefault();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the greeting settings of the current portal are set to default |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreGreetingSettings**
> StringWrapper restoreGreetingSettings()

Restores the current portal greeting settings.

### Example

```typescript
import {
    SettingsGreetingSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsGreetingSettingsApi(configuration);

const { status, data } = await apiInstance.restoreGreetingSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Greeting settings: tenant name |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveGreetingSettings**
> StringWrapper saveGreetingSettings()

Saves the greeting settings specified in the request to the current portal.

### Example

```typescript
import {
    SettingsGreetingSettingsApi,
    Configuration,
    GreetingSettingsRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsGreetingSettingsApi(configuration);

let greetingSettingsRequestsDto: GreetingSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveGreetingSettings(
    greetingSettingsRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **greetingSettingsRequestsDto** | **GreetingSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about saving greeting settings successfully |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

