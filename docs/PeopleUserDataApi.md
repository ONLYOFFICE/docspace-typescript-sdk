# PeopleUserDataApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDeletePersonalFolderProgress**](#getdeletepersonalfolderprogress) | **GET** /api/2.0/people/delete/personal/progress | Get the progress of deleting the personal folder|
|[**getReassignProgress**](#getreassignprogress) | **GET** /api/2.0/people/reassign/progress/{userid} | Get the reassignment progress|
|[**getRemoveProgress**](#getremoveprogress) | **GET** /api/2.0/people/remove/progress/{userid} | Get the deletion progress|
|[**necessaryReassign**](#necessaryreassign) | **GET** /api/2.0/people/reassign/necessary | Check the data reassignment need|
|[**sendInstructionsToDelete**](#sendinstructionstodelete) | **PUT** /api/2.0/people/self/delete | Send the deletion instructions|
|[**startDeletePersonalFolder**](#startdeletepersonalfolder) | **POST** /api/2.0/people/delete/personal/start | Delete the personal folder|
|[**startReassign**](#startreassign) | **POST** /api/2.0/people/reassign/start | Start the data reassignment|
|[**startRemove**](#startremove) | **POST** /api/2.0/people/remove/start | Start the data deletion|
|[**terminateReassign**](#terminatereassign) | **PUT** /api/2.0/people/reassign/terminate | Terminate the data reassignment|
|[**terminateRemove**](#terminateremove) | **PUT** /api/2.0/people/remove/terminate | Terminate the data deletion|

# **getDeletePersonalFolderProgress**
> TaskProgressResponseWrapper getDeletePersonalFolderProgress()

Returns the progress of deleting the personal folder.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

const { status, data } = await apiInstance.getDeletePersonalFolderProgress();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Deletion progress |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReassignProgress**
> TaskProgressResponseWrapper getReassignProgress()

Returns the progress of the started data reassignment for the user with the ID specified in the request.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.getReassignProgress(
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
|**200** | Reassignment progress |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRemoveProgress**
> TaskProgressResponseWrapper getRemoveProgress()

Returns the progress of the started data deletion for the user with the ID specified in the request.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.getRemoveProgress(
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
|**200** | Deletion progress |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **necessaryReassign**
> BooleanWrapper necessaryReassign()

Checks if the reassignment of rooms and shared files is necessary or not.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

let userId: string; //The user ID. (optional) (default to undefined)
let type: EmployeeType; //The expected user type. (optional) (default to undefined)

const { status, data } = await apiInstance.necessaryReassign(
    userId,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | The user ID. | (optional) defaults to undefined|
| **type** | **EmployeeType** | The expected user type. | (optional) defaults to undefined|


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
|**200** | Boolean value: true if neccessary reassign |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendInstructionsToDelete**
> StringWrapper sendInstructionsToDelete()

Sends the instructions for deleting a user profile.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

const { status, data } = await apiInstance.sendInstructionsToDelete();
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
|**200** | Information message |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startDeletePersonalFolder**
> TaskProgressResponseWrapper startDeletePersonalFolder()

Starts deleting the personal folder.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

const { status, data } = await apiInstance.startDeletePersonalFolder();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | delete personal progress |  -  |
|**400** | Access denied |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startReassign**
> TaskProgressResponseWrapper startReassign()

Starts the data reassignment for the user with the ID specified in the request.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration,
    StartReassignRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

let startReassignRequestDto: StartReassignRequestDto; // (optional)

const { status, data } = await apiInstance.startReassign(
    startReassignRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startReassignRequestDto** | **StartReassignRequestDto**|  | |


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
|**200** | Reassignment progress |  -  |
|**400** | Can not reassign data to user or from user |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startRemove**
> TaskProgressResponseWrapper startRemove()

Starts the data deletion for the user with the ID specified in the request.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration,
    TerminateRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

let terminateRequestDto: TerminateRequestDto; // (optional)

const { status, data } = await apiInstance.startRemove(
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
|**200** | Deletion progress |  -  |
|**400** | User exception |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateReassign**
> TaskProgressResponseWrapper terminateReassign()

Terminates the data reassignment for the user with the ID specified in the request.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration,
    TerminateRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

let terminateRequestDto: TerminateRequestDto; // (optional)

const { status, data } = await apiInstance.terminateReassign(
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
|**200** | Reassignment progress |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateRemove**
> terminateRemove()

Terminates the data deletion for the user with the ID specified in the request.

### Example

```typescript
import {
    PeopleUserDataApi,
    Configuration,
    TerminateRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserDataApi(configuration);

let terminateRequestDto: TerminateRequestDto; // (optional)

const { status, data } = await apiInstance.terminateRemove(
    terminateRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminateRequestDto** | **TerminateRequestDto**|  | |


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
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

