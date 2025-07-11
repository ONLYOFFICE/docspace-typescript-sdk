# PeoplePasswordApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeUserPassword**](#changeuserpassword) | **PUT** /api/2.0/people/{userid}/password | Change a user password|
|[**sendUserPassword**](#senduserpassword) | **POST** /api/2.0/people/password | Remind a user password|

# **changeUserPassword**
> EmployeeFullWrapper changeUserPassword()

Sets a new password to the user with the ID specified in the request.

### Example

```typescript
import {
    PeoplePasswordApi,
    Configuration,
    MemberBaseRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeoplePasswordApi(configuration);

let userid: string; //The user ID. (default to undefined)
let memberBaseRequestDto: MemberBaseRequestDto; //The request parameters for the user generic information. (optional)

const { status, data } = await apiInstance.changeUserPassword(
    userid,
    memberBaseRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberBaseRequestDto** | **MemberBaseRequestDto**| The request parameters for the user generic information. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed user information |  -  |
|**400** | Incorrect email |  -  |
|**401** | Unauthorized |  -  |
|**403** | The invitation link is invalid or its validity has expired |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendUserPassword**
> StringWrapper sendUserPassword()

Reminds a password to the user using the email address specified in the request.

### Example

```typescript
import {
    PeoplePasswordApi,
    Configuration,
    EmailMemberRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeoplePasswordApi(configuration);

let emailMemberRequestDto: EmailMemberRequestDto; // (optional)

const { status, data } = await apiInstance.sendUserPassword(
    emailMemberRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailMemberRequestDto** | **EmailMemberRequestDto**|  | |


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
|**200** | Email with the password |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

