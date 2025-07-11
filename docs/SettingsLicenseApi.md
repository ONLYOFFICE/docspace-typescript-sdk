# SettingsLicenseApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptLicense**](#acceptlicense) | **POST** /api/2.0/settings/license/accept | Activate a license|
|[**refreshLicense**](#refreshlicense) | **GET** /api/2.0/settings/license/refresh | Refresh the license|
|[**requestLicense**](#requestlicense) | **GET** /api/2.0/settings/license/required | Request a license|
|[**uploadLicense**](#uploadlicense) | **POST** /api/2.0/settings/license | Upload a license|

# **acceptLicense**
> StringWrapper acceptLicense()

Activates a license for the portal.

### Example

```typescript
import {
    SettingsLicenseApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsLicenseApi(configuration);

const { status, data } = await apiInstance.acceptLicense();
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
|**200** | Message about the result of activating license |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshLicense**
> BooleanWrapper refreshLicense()

Refreshes the portal license.

### Example

```typescript
import {
    SettingsLicenseApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsLicenseApi(configuration);

const { status, data } = await apiInstance.refreshLicense();
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
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestLicense**
> BooleanWrapper requestLicense()

Requests a portal license if necessary.

### Example

```typescript
import {
    SettingsLicenseApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsLicenseApi(configuration);

const { status, data } = await apiInstance.requestLicense();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the license is required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadLicense**
> StringWrapper uploadLicense()

Uploads a portal license specified in the request.

### Example

```typescript
import {
    SettingsLicenseApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsLicenseApi(configuration);

let files: Array<File>; //The list of license files to be uploaded. (default to undefined)

const { status, data } = await apiInstance.uploadLicense(
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** | The list of license files to be uploaded. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | License |  -  |
|**400** | The uploaded file could not be found |  -  |
|**401** | Unauthorized |  -  |
|**403** | Portal Access |  -  |
|**405** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

