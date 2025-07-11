# SettingsMessagesApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**enableAdminMessageSettings**](#enableadminmessagesettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings|
|[**sendAdmMail**](#sendadmmail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator|
|[**sendJoinInviteMail**](#sendjoininvitemail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email|

# **enableAdminMessageSettings**
> StringWrapper enableAdminMessageSettings()

Displays the contact form on the \"Sign In\" page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.

### Example

```typescript
import {
    SettingsMessagesApi,
    Configuration,
    TurnOnAdminMessageSettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsMessagesApi(configuration);

let turnOnAdminMessageSettingsRequestDto: TurnOnAdminMessageSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.enableAdminMessageSettings(
    turnOnAdminMessageSettingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **turnOnAdminMessageSettingsRequestDto** | **TurnOnAdminMessageSettingsRequestDto**|  | |


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
|**200** | Message about the result of saving new settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendAdmMail**
> StringWrapper sendAdmMail()

Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.

### Example

```typescript
import {
    SettingsMessagesApi,
    Configuration,
    AdminMessageSettingsRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsMessagesApi(configuration);

let adminMessageSettingsRequestsDto: AdminMessageSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.sendAdmMail(
    adminMessageSettingsRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminMessageSettingsRequestsDto** | **AdminMessageSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about the result of sending a message |  -  |
|**400** | Incorrect email or message text is empty |  -  |
|**429** | Request limit is exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendJoinInviteMail**
> StringWrapper sendJoinInviteMail()

Sends an invitation email with a link to the DocSpace.

### Example

```typescript
import {
    SettingsMessagesApi,
    Configuration,
    AdminMessageBaseSettingsRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsMessagesApi(configuration);

let adminMessageBaseSettingsRequestsDto: AdminMessageBaseSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.sendJoinInviteMail(
    adminMessageBaseSettingsRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminMessageBaseSettingsRequestsDto** | **AdminMessageBaseSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about sending a link to confirm joining the DocSpace |  -  |
|**400** | Incorrect email or email already exists |  -  |
|**403** | No permissions to perform this action |  -  |
|**429** | Request limit is exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

