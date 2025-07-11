# SecuritySMTPSettingsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSmtpOperationStatus**](#getsmtpoperationstatus) | **GET** /api/2.0/smtpsettings/smtp/test/status | Get the SMTP testing process status|
|[**getSmtpSettings**](#getsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp | Get the SMTP settings|
|[**resetSmtpSettings**](#resetsmtpsettings) | **DELETE** /api/2.0/smtpsettings/smtp | Reset the SMTP settings|
|[**saveSmtpSettings**](#savesmtpsettings) | **POST** /api/2.0/smtpsettings/smtp | Save the SMTP settings|
|[**testSmtpSettings**](#testsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp/test | Test the SMTP settings|

# **getSmtpOperationStatus**
> SmtpOperationStatusRequestsWrapper getSmtpOperationStatus()

Returns the status of the SMTP testing process.

### Example

```typescript
import {
    SecuritySMTPSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecuritySMTPSettingsApi(configuration);

const { status, data } = await apiInstance.getSmtpOperationStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SmtpOperationStatusRequestsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMTP operation status |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSmtpSettings**
> SmtpSettingsWrapper getSmtpSettings()

Returns the current portal SMTP settings.

### Example

```typescript
import {
    SecuritySMTPSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecuritySMTPSettingsApi(configuration);

const { status, data } = await apiInstance.getSmtpSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SmtpSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMTP settings |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetSmtpSettings**
> SmtpSettingsWrapper resetSmtpSettings()

Resets the SMTP settings of the current portal.

### Example

```typescript
import {
    SecuritySMTPSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecuritySMTPSettingsApi(configuration);

const { status, data } = await apiInstance.resetSmtpSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SmtpSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default SMTP settings |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveSmtpSettings**
> SmtpSettingsWrapper saveSmtpSettings()

Saves the SMTP settings for the current portal.

### Example

```typescript
import {
    SecuritySMTPSettingsApi,
    Configuration,
    SmtpSettingsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecuritySMTPSettingsApi(configuration);

let smtpSettingsDto: SmtpSettingsDto; // (optional)

const { status, data } = await apiInstance.saveSmtpSettings(
    smtpSettingsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smtpSettingsDto** | **SmtpSettingsDto**|  | |


### Return type

**SmtpSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMTP settings |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testSmtpSettings**
> SmtpOperationStatusRequestsWrapper testSmtpSettings()

Tests the SMTP settings for the current portal (sends test message to the user email).

### Example

```typescript
import {
    SecuritySMTPSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecuritySMTPSettingsApi(configuration);

const { status, data } = await apiInstance.testSmtpSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SmtpOperationStatusRequestsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMTP operation status |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

