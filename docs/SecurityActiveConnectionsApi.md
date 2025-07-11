# SecurityActiveConnectionsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllActiveConnections**](#getallactiveconnections) | **GET** /api/2.0/security/activeconnections | Get active connections|
|[**logOutActiveConnection**](#logoutactiveconnection) | **PUT** /api/2.0/security/activeconnections/logout/{loginEventId} | Log out from the connection|
|[**logOutAllActiveConnectionsChangePassword**](#logoutallactiveconnectionschangepassword) | **PUT** /api/2.0/security/activeconnections/logoutallchangepassword | Log out and change password|
|[**logOutAllActiveConnectionsForUser**](#logoutallactiveconnectionsforuser) | **PUT** /api/2.0/security/activeconnections/logoutall/{userId} | Log out for the user by ID|
|[**logOutAllExceptThisConnection**](#logoutallexceptthisconnection) | **PUT** /api/2.0/security/activeconnections/logoutallexceptthis | Log out from all connections except the current one|

# **getAllActiveConnections**
> ActiveConnectionsWrapper getAllActiveConnections()

Returns all the active connections to the portal.

### Example

```typescript
import {
    SecurityActiveConnectionsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityActiveConnectionsApi(configuration);

const { status, data } = await apiInstance.getAllActiveConnections();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ActiveConnectionsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Active portal connections |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logOutActiveConnection**
> BooleanWrapper logOutActiveConnection()

Logs out from the connection with the ID specified in the request.

### Example

```typescript
import {
    SecurityActiveConnectionsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityActiveConnectionsApi(configuration);

let loginEventId: number; //The ID of the specific login event. (default to undefined)

const { status, data } = await apiInstance.logOutActiveConnection(
    loginEventId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginEventId** | [**number**] | The ID of the specific login event. | defaults to undefined|


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
|**403** | Method not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logOutAllActiveConnectionsChangePassword**
> StringWrapper logOutAllActiveConnectionsChangePassword()

Logs out from all the active connections for the current user and changes their password.

### Example

```typescript
import {
    SecurityActiveConnectionsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityActiveConnectionsApi(configuration);

const { status, data } = await apiInstance.logOutAllActiveConnectionsChangePassword();
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
|**200** | URL to the confirmation message for changing a password |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logOutAllActiveConnectionsForUser**
> logOutAllActiveConnectionsForUser()

Logs out from all the active connections for the user with the ID specified in the request.

### Example

```typescript
import {
    SecurityActiveConnectionsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityActiveConnectionsApi(configuration);

let userId: string; //The user ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.logOutAllActiveConnectionsForUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | The user ID extracted from the route parameters. | defaults to undefined|


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
|**403** | Method not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logOutAllExceptThisConnection**
> StringWrapper logOutAllExceptThisConnection()

Logs out from all the active connections except the current connection.

### Example

```typescript
import {
    SecurityActiveConnectionsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityActiveConnectionsApi(configuration);

const { status, data } = await apiInstance.logOutAllExceptThisConnection();
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
|**200** | Current user name |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

