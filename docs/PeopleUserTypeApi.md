# PeopleUserTypeApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getChangeTypeProgress**](#getchangetypeprogress) | **GET** /api/2.0/people/type/progress/{userid} | Get the progress of updating user type|
|[**startUpdateUserType**](#startupdateusertype) | **POST** /api/2.0/people/type | Update user type|
|[**terminateChangeType**](#terminatechangetype) | **PUT** /api/2.0/people/type/terminate | Terminate update user type|
|[**updateUserType**](#updateusertype) | **PUT** /api/2.0/people/type/{type} | Change a user type|

# **getChangeTypeProgress**
> TaskProgressResponseWrapper getChangeTypeProgress()

Returns the progress of updating the user type.

### Example

```typescript
import {
    PeopleUserTypeApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserTypeApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.getChangeTypeProgress(
    userid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**TaskProgressResponseWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update type progress |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startUpdateUserType**
> TaskProgressResponseWrapper startUpdateUserType()

Starts updating the type of the user or guest when reassigning rooms and shared files.

### Example

```typescript
import {
    PeopleUserTypeApi,
    Configuration,
    StartUpdateUserTypeDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserTypeApi(configuration);

let startUpdateUserTypeDto: StartUpdateUserTypeDto; // (optional)

const { status, data } = await apiInstance.startUpdateUserType(
    startUpdateUserTypeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startUpdateUserTypeDto** | **StartUpdateUserTypeDto**|  | |


### Return type

**TaskProgressResponseWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update type progress |  -  |
|**400** | Can not update user type |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateChangeType**
> TaskProgressResponseWrapper terminateChangeType()

Terminates the process of updating the type of the user or guest.

### Example

```typescript
import {
    PeopleUserTypeApi,
    Configuration,
    TerminateRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserTypeApi(configuration);

let terminateRequestDto: TerminateRequestDto; // (optional)

const { status, data } = await apiInstance.terminateChangeType(
    terminateRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminateRequestDto** | **TerminateRequestDto**|  | |


### Return type

**TaskProgressResponseWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update type progress |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserType**
> EmployeeFullArrayWrapper updateUserType()

Changes a type of the users with the IDs specified in the request.

### Example

```typescript
import {
    PeopleUserTypeApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserTypeApi(configuration);

let type: EmployeeType; //The new user type. (default to undefined)
let updateMembersRequestDto: UpdateMembersRequestDto; //The request parameters for updating the user information. (optional)

const { status, data } = await apiInstance.updateUserType(
    type,
    updateMembersRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**| The request parameters for updating the user information. | |
| **type** | **EmployeeType** | The new user type. | defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

