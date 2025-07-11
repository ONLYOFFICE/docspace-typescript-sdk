# SettingsWebpluginsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addWebPluginFromFile**](#addwebpluginfromfile) | **POST** /api/2.0/settings/webplugins | Add a web plugin|
|[**deleteWebPlugin**](#deletewebplugin) | **DELETE** /api/2.0/settings/webplugins/{name} | Delete a web plugin|
|[**getWebPlugin**](#getwebplugin) | **GET** /api/2.0/settings/webplugins/{name} | Get a web plugin by name|
|[**getWebPlugins**](#getwebplugins) | **GET** /api/2.0/settings/webplugins | Get web plugins|
|[**updateWebPlugin**](#updatewebplugin) | **PUT** /api/2.0/settings/webplugins/{name} | Update a web plugin|

# **addWebPluginFromFile**
> WebPluginWrapper addWebPluginFromFile()

Adds a web plugin from a file to the current portal.

### Example

```typescript
import {
    SettingsWebpluginsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebpluginsApi(configuration);

let system: boolean; //Specifies whether to load the system plugins or not. (optional) (default to undefined)

const { status, data } = await apiInstance.addWebPluginFromFile(
    system
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **system** | [**boolean**] | Specifies whether to load the system plugins or not. | (optional) defaults to undefined|


### Return type

**WebPluginWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web plugin |  -  |
|**400** | bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Plugins disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebPlugin**
> deleteWebPlugin()

Deletes a web plugin by the name specified in the request.

### Example

```typescript
import {
    SettingsWebpluginsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebpluginsApi(configuration);

let name: string; //The web plugin name. (default to undefined)

const { status, data } = await apiInstance.deleteWebPlugin(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | The web plugin name. | defaults to undefined|


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
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | Plugins disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebPlugin**
> WebPluginWrapper getWebPlugin()

Returns a web plugin by the name specified in the request.

### Example

```typescript
import {
    SettingsWebpluginsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebpluginsApi(configuration);

let name: string; //The web plugin name. (default to undefined)

const { status, data } = await apiInstance.getWebPlugin(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | The web plugin name. | defaults to undefined|


### Return type

**WebPluginWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web plugin |  -  |
|**401** | Unauthorized |  -  |
|**403** | Plugins disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebPlugins**
> WebPluginArrayWrapper getWebPlugins()

Returns the portal web plugins.

### Example

```typescript
import {
    SettingsWebpluginsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebpluginsApi(configuration);

let enabled: boolean; //The optional filter for the plugin enabled state. (optional) (default to undefined)

const { status, data } = await apiInstance.getWebPlugins(
    enabled
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enabled** | [**boolean**] | The optional filter for the plugin enabled state. | (optional) defaults to undefined|


### Return type

**WebPluginArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web plugin |  -  |
|**401** | Unauthorized |  -  |
|**403** | Plugins disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebPlugin**
> updateWebPlugin()

Updates a web plugin with the parameters specified in the request.

### Example

```typescript
import {
    SettingsWebpluginsApi,
    Configuration,
    WebPluginRequests
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebpluginsApi(configuration);

let name: string; //The web plugin name. (default to undefined)
let webPluginRequests: WebPluginRequests; //The configuration settings for the web plugin instance. (optional)

const { status, data } = await apiInstance.updateWebPlugin(
    name,
    webPluginRequests
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webPluginRequests** | **WebPluginRequests**| The configuration settings for the web plugin instance. | |
| **name** | [**string**] | The web plugin name. | defaults to undefined|


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
|**403** | Plugins disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

