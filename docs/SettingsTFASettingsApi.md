# SettingsTFASettingsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTfaSettings**](#gettfasettings) | **GET** /api/2.0/settings/tfaapp | Get the TFA settings|
|[**tfaAppGenerateSetupCode**](#tfaappgeneratesetupcode) | **GET** /api/2.0/settings/tfaapp/setup | Generate setup code|
|[**tfaAppGetCodes**](#tfaappgetcodes) | **GET** /api/2.0/settings/tfaappcodes | Get the TFA codes|
|[**tfaAppNewApp**](#tfaappnewapp) | **PUT** /api/2.0/settings/tfaappnewapp | Unlink the TFA application|
|[**tfaAppRequestNewCodes**](#tfaapprequestnewcodes) | **PUT** /api/2.0/settings/tfaappnewcodes | Update the TFA codes|
|[**tfaConfirmUrl**](#tfaconfirmurl) | **GET** /api/2.0/settings/tfaapp/confirm | Get confirmation email|
|[**tfaSettings**](#tfasettings) | **PUT** /api/2.0/settings/tfaapp | Update the TFA settings|
|[**tfaSettingsLink**](#tfasettingslink) | **PUT** /api/2.0/settings/tfaappwithlink | Get confirmation email for updating TFA settings|
|[**tfaValidateAuthCode**](#tfavalidateauthcode) | **POST** /api/2.0/settings/tfaapp/validate | Validate the TFA code|

# **getTfaSettings**
> TfaSettingsArrayWrapper getTfaSettings()

Returns the current two-factor authentication settings.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

const { status, data } = await apiInstance.getTfaSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TfaSettingsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | TFA settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaAppGenerateSetupCode**
> SetupCodeWrapper tfaAppGenerateSetupCode()

Generates the setup TFA code for the current user.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

const { status, data } = await apiInstance.tfaAppGenerateSetupCode();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SetupCodeWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Setup code |  -  |
|**401** | Unauthorized |  -  |
|**405** | TFA application settings are not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaAppGetCodes**
> ObjectArrayWrapper tfaAppGetCodes()

Returns the two-factor authentication application codes.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

const { status, data } = await apiInstance.tfaAppGetCodes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of TFA application codes |  -  |
|**401** | Unauthorized |  -  |
|**405** | TFA application settings are not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaAppNewApp**
> StringWrapper tfaAppNewApp()

Unlinks the current two-factor authentication application from the user account specified in the request.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration,
    TfaRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

let tfaRequestsDto: TfaRequestsDto; // (optional)

const { status, data } = await apiInstance.tfaAppNewApp(
    tfaRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tfaRequestsDto** | **TfaRequestsDto**|  | |


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
|**200** | Login URL |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**405** | TFA application settings are not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaAppRequestNewCodes**
> ObjectArrayWrapper tfaAppRequestNewCodes()

Requests the new backup codes for the two-factor authentication application.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

const { status, data } = await apiInstance.tfaAppRequestNewCodes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New backup codes |  -  |
|**401** | Unauthorized |  -  |
|**405** | TFA application settings are not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaConfirmUrl**
> StringWrapper tfaConfirmUrl()

Returns the confirmation email URL for authorization via SMS or TFA application.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

const { status, data } = await apiInstance.tfaConfirmUrl();
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
|**200** | Confirmation email URL |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaSettings**
> BooleanWrapper tfaSettings()

Updates the two-factor authentication settings with the parameters specified in the request.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration,
    TfaRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

let tfaRequestsDto: TfaRequestsDto; // (optional)

const { status, data } = await apiInstance.tfaSettings(
    tfaRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tfaRequestsDto** | **TfaRequestsDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | True if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**405** | SMS settings are not available/TFA application settings are not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaSettingsLink**
> StringWrapper tfaSettingsLink()

Returns the confirmation email URL for updating TFA settings.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration,
    TfaRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

let tfaRequestsDto: TfaRequestsDto; // (optional)

const { status, data } = await apiInstance.tfaSettingsLink(
    tfaRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tfaRequestsDto** | **TfaRequestsDto**|  | |


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
|**200** | Confirmation email URL |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tfaValidateAuthCode**
> BooleanWrapper tfaValidateAuthCode()

Validates the two-factor authentication code specified in the request.

### Example

```typescript
import {
    SettingsTFASettingsApi,
    Configuration,
    TfaValidateRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsTFASettingsApi(configuration);

let tfaValidateRequestsDto: TfaValidateRequestsDto; // (optional)

const { status, data } = await apiInstance.tfaValidateAuthCode(
    tfaValidateRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tfaValidateRequestsDto** | **TfaValidateRequestsDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | True if the code is valid |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

