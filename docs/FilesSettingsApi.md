# FilesSettingsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeAccessToThirdparty**](#changeaccesstothirdparty) | **PUT** /api/2.0/files/thirdparty | Change the third-party settings access|
|[**changeAutomaticallyCleanUp**](#changeautomaticallycleanup) | **PUT** /api/2.0/files/settings/autocleanup | Update the trash bin auto-clearing setting|
|[**changeDefaultAccessRights**](#changedefaultaccessrights) | **PUT** /api/2.0/files/settings/dafaultaccessrights | Change the default access rights|
|[**changeDeleteConfirm**](#changedeleteconfirm) | **PUT** /api/2.0/files/changedeleteconfrim | Confirm the file deletion|
|[**changeDownloadZipFromBody**](#changedownloadzipfrombody) | **PUT** /api/2.0/files/settings/downloadtargz | Change the archive format (using body parameters)|
|[**checkDocServiceUrl**](#checkdocserviceurl) | **PUT** /api/2.0/files/docservice | Check the document service URL|
|[**displayFileExtension**](#displayfileextension) | **PUT** /api/2.0/files/displayfileextension | Display a file extension|
|[**externalShare**](#externalshare) | **PUT** /api/2.0/files/settings/external | Change the external sharing ability|
|[**externalShareSocialMedia**](#externalsharesocialmedia) | **PUT** /api/2.0/files/settings/externalsocialmedia | Change the external sharing ability on social networks|
|[**forcesave**](#forcesave) | **PUT** /api/2.0/files/forcesave | Change the forcesaving ability|
|[**getAutomaticallyCleanUp**](#getautomaticallycleanup) | **GET** /api/2.0/files/settings/autocleanup | Get the trash bin auto-clearing setting|
|[**getDocServiceUrl**](#getdocserviceurl) | **GET** /api/2.0/files/docservice | Get the document service URL|
|[**getFilesModule**](#getfilesmodule) | **GET** /api/2.0/files/info | Get the \&quot;Documents\&quot; information|
|[**getFilesSettings**](#getfilessettings) | **GET** /api/2.0/files/settings | Get file settings|
|[**hideConfirmCancelOperation**](#hideconfirmcanceloperation) | **PUT** /api/2.0/files/hideconfirmcanceloperation | Hide confirmation dialog when canceling operations|
|[**hideConfirmConvert**](#hideconfirmconvert) | **PUT** /api/2.0/files/hideconfirmconvert | Hide the confirmation dialog when converting|
|[**hideConfirmRoomLifetime**](#hideconfirmroomlifetime) | **PUT** /api/2.0/files/hideconfirmroomlifetime | Hide confirmation dialog when changing room lifetime settings|
|[**isAvailablePrivacyRoomSettings**](#isavailableprivacyroomsettings) | **GET** /api/2.0/files/@privacy/available | Check the \&quot;Private Room\&quot; availability|
|[**keepNewFileName**](#keepnewfilename) | **PUT** /api/2.0/files/keepnewfilename | Ask a new file name|
|[**setOpenEditorInSameTab**](#setopeneditorinsametab) | **PUT** /api/2.0/files/settings/openeditorinsametab | Open document in the same browser tab|
|[**storeForcesave**](#storeforcesave) | **PUT** /api/2.0/files/storeforcesave | Change the ability to store the forcesaved files|
|[**storeOriginal**](#storeoriginal) | **PUT** /api/2.0/files/storeoriginal | Change the ability to upload original formats|
|[**updateIfExist**](#updateifexist) | **PUT** /api/2.0/files/updateifexist | Update a file version if it exists|

# **changeAccessToThirdparty**
> BooleanWrapper changeAccessToThirdparty()

Changes the access to the third-party settings.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.changeAccessToThirdparty(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeAutomaticallyCleanUp**
> AutoCleanUpDataWrapper changeAutomaticallyCleanUp()

Updates the trash bin auto-clearing setting.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    AutoCleanupRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let autoCleanupRequestDto: AutoCleanupRequestDto; // (optional)

const { status, data } = await apiInstance.changeAutomaticallyCleanUp(
    autoCleanupRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **autoCleanupRequestDto** | **AutoCleanupRequestDto**|  | |


### Return type

**AutoCleanUpDataWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The auto-clearing setting properties: auto-clearing or not, a time interval when the auto-clearing will be performed |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeDefaultAccessRights**
> FileShareArrayWrapper changeDefaultAccessRights()

Changes the default access rights in the sharing settings.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let requestBody: Array<number>; //Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator). (optional)

const { status, data } = await apiInstance.changeDefaultAccessRights(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<number>**| Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator). | |


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator) |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeDeleteConfirm**
> BooleanWrapper changeDeleteConfirm()

Specifies whether to confirm the file deletion or not.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.changeDeleteConfirm(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeDownloadZipFromBody**
> ICompressWrapper changeDownloadZipFromBody()

Changes the format of the downloaded archive from .zip to .tar.gz. This method uses the body parameters.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    DisplayRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let displayRequestDto: DisplayRequestDto; // (optional)

const { status, data } = await apiInstance.changeDownloadZipFromBody(
    displayRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayRequestDto** | **DisplayRequestDto**|  | |


### Return type

**ICompressWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archive |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkDocServiceUrl**
> DocServiceUrlWrapper checkDocServiceUrl()

Checks the document service location URL.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    CheckDocServiceUrlRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let checkDocServiceUrlRequestDto: CheckDocServiceUrlRequestDto; // (optional)

const { status, data } = await apiInstance.checkDocServiceUrl(
    checkDocServiceUrlRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkDocServiceUrlRequestDto** | **CheckDocServiceUrlRequestDto**|  | |


### Return type

**DocServiceUrlWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Document service information: the Document Server address, the Document Server address in the local private network, the Community Server address |  -  |
|**400** | Invalid input urls/Mixed Active Content is not allowed. HTTPS address for Document Server is required |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayFileExtension**
> BooleanWrapper displayFileExtension()

Specifies whether to display a file extension or not.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.displayFileExtension(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **externalShare**
> BooleanWrapper externalShare()

Changes the ability to share a file externally.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    DisplayRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let displayRequestDto: DisplayRequestDto; // (optional)

const { status, data } = await apiInstance.externalShare(
    displayRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayRequestDto** | **DisplayRequestDto**|  | |


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
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **externalShareSocialMedia**
> BooleanWrapper externalShareSocialMedia()

Changes the ability to share a file externally on social networks.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    DisplayRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let displayRequestDto: DisplayRequestDto; // (optional)

const { status, data } = await apiInstance.externalShareSocialMedia(
    displayRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayRequestDto** | **DisplayRequestDto**|  | |


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
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forcesave**
> BooleanWrapper forcesave()

Specifies if the file forcesaving is enabled or not.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.forcesave();
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
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAutomaticallyCleanUp**
> AutoCleanUpDataWrapper getAutomaticallyCleanUp()

Returns the trash bin auto-clearing setting.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.getAutomaticallyCleanUp();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AutoCleanUpDataWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The auto-clearing setting properties: auto-clearing or not, a time interval when the auto-clearing will be performed |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocServiceUrl**
> DocServiceUrlWrapper getDocServiceUrl()

Returns the URL address of the connected editors.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let version: boolean; //Specifies whether to return the editor version or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getDocServiceUrl(
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **version** | [**boolean**] | Specifies whether to return the editor version or not. | (optional) defaults to undefined|


### Return type

**DocServiceUrlWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The document service URL with the editor version specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilesModule**
> ModuleWrapper getFilesModule()

Returns the information about the \"Documents\" module.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.getFilesModule();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ModuleWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Module information: ID, product class name, title, description, icon URL, large icon URL, start URL, primary or nor, help URL |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilesSettings**
> FilesSettingsWrapper getFilesSettings()

Returns all the file settings.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.getFilesSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FilesSettingsWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hideConfirmCancelOperation**
> BooleanWrapper hideConfirmCancelOperation()

Hides the confirmation dialog when canceling operations.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.hideConfirmCancelOperation(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hideConfirmConvert**
> ModuleWrapper hideConfirmConvert()

Hides the confirmation dialog for saving the file copy in the original format when converting a file.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    HideConfirmConvertRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let hideConfirmConvertRequestDto: HideConfirmConvertRequestDto; // (optional)

const { status, data } = await apiInstance.hideConfirmConvert(
    hideConfirmConvertRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hideConfirmConvertRequestDto** | **HideConfirmConvertRequestDto**|  | |


### Return type

**ModuleWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hideConfirmRoomLifetime**
> BooleanWrapper hideConfirmRoomLifetime()

Hides the confirmation dialog when changing the room lifetime settings.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.hideConfirmRoomLifetime(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isAvailablePrivacyRoomSettings**
> BooleanWrapper isAvailablePrivacyRoomSettings()

Checks if the \"Private Room\" settings are available or not.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.isAvailablePrivacyRoomSettings();
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
|**200** | Boolean value: true if the Private Room settings are available |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keepNewFileName**
> BooleanWrapper keepNewFileName()

Specifies whether to ask a user for a file name on creation or not.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.keepNewFileName(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOpenEditorInSameTab**
> BooleanWrapper setOpenEditorInSameTab()

Changes the ability to open the document in the same browser tab.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.setOpenEditorInSameTab(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storeForcesave**
> BooleanWrapper storeForcesave()

Changes the ability to store the forcesaved file versions.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.storeForcesave();
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

# **storeOriginal**
> BooleanWrapper storeOriginal()

Changes the ability to upload documents in the original formats as well.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.storeOriginal(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIfExist**
> BooleanWrapper updateIfExist()

Updates a file version if a file with such a name already exists.

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.updateIfExist(
    settingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


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
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

