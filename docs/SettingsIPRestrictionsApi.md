# SettingsIPRestrictionsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getIpRestrictions**](#getiprestrictions) | **GET** /api/2.0/settings/iprestrictions | Get the IP portal restrictions|
|[**readIpRestrictionsSettings**](#readiprestrictionssettings) | **GET** /api/2.0/settings/iprestrictions/settings | Get the IP restriction settings|
|[**saveIpRestrictions**](#saveiprestrictions) | **PUT** /api/2.0/settings/iprestrictions | Update the IP restrictions|
|[**updateIpRestrictionsSettings**](#updateiprestrictionssettings) | **PUT** /api/2.0/settings/iprestrictions/settings | Update the IP restriction settings|

# **getIpRestrictions**
> IPRestrictionArrayWrapper getIpRestrictions()

Returns the IP portal restrictions.

### Example

```typescript
import {
    SettingsIPRestrictionsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsIPRestrictionsApi(configuration);

const { status, data } = await apiInstance.getIpRestrictions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IPRestrictionArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of IP restrictions parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readIpRestrictionsSettings**
> IPRestrictionsSettingsWrapper readIpRestrictionsSettings()

Returns the IP restriction settings.

### Example

```typescript
import {
    SettingsIPRestrictionsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsIPRestrictionsApi(configuration);

const { status, data } = await apiInstance.readIpRestrictionsSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IPRestrictionsSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | IP restriction settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveIpRestrictions**
> IpRestrictionsWrapper saveIpRestrictions()

Updates the IP restrictions with the parameters specified in the request.

### Example

```typescript
import {
    SettingsIPRestrictionsApi,
    Configuration,
    IpRestrictionsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsIPRestrictionsApi(configuration);

let ipRestrictionsDto: IpRestrictionsDto; // (optional)

const { status, data } = await apiInstance.saveIpRestrictions(
    ipRestrictionsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ipRestrictionsDto** | **IpRestrictionsDto**|  | |


### Return type

**IpRestrictionsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated IP restriction settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIpRestrictionsSettings**
> IpRestrictionsWrapper updateIpRestrictionsSettings()

Updates the IP restriction settings with the parameters specified in the request.

### Example

```typescript
import {
    SettingsIPRestrictionsApi,
    Configuration,
    IpRestrictionsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsIPRestrictionsApi(configuration);

let ipRestrictionsDto: IpRestrictionsDto; // (optional)

const { status, data } = await apiInstance.updateIpRestrictionsSettings(
    ipRestrictionsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ipRestrictionsDto** | **IpRestrictionsDto**|  | |


### Return type

**IpRestrictionsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated IP restriction settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

