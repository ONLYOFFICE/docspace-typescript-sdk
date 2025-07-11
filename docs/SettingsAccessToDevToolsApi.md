# SettingsAccessToDevToolsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTenantAccessDevToolsSettings**](#gettenantaccessdevtoolssettings) | **GET** /api/2.0/settings/devtoolsaccess | Get the Developer Tools access settings|

# **getTenantAccessDevToolsSettings**
> TenantDevToolsAccessSettingsWrapper getTenantAccessDevToolsSettings()

Returns the Developer Tools access settings for the portal.

### Example

```typescript
import {
    SettingsAccessToDevToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsAccessToDevToolsApi(configuration);

const { status, data } = await apiInstance.getTenantAccessDevToolsSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantDevToolsAccessSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Developer Tools access settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

