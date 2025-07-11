# FilesOperationsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bulkDownload**](#bulkdownload) | **PUT** /api/2.0/files/fileops/bulkdownload | Bulk download|
|[**checkConversion**](#checkconversion) | **GET** /api/2.0/files/file/{fileId}/checkconversion | Get conversion status|
|[**copyBatchItems**](#copybatchitems) | **PUT** /api/2.0/files/fileops/copy | Copy to the folder|
|[**createUploadSession**](#createuploadsession) | **POST** /api/2.0/files/{folderId}/upload/create_session | Chunked upload|
|[**deleteBatchItems**](#deletebatchitems) | **PUT** /api/2.0/files/fileops/delete | Delete files and folders|
|[**deleteFileVersions**](#deletefileversions) | **PUT** /api/2.0/files/fileops/deleteversion | Delete file versions|
|[**duplicateBatchItems**](#duplicatebatchitems) | **PUT** /api/2.0/files/fileops/duplicate | Duplicate files and folders|
|[**emptyTrash**](#emptytrash) | **PUT** /api/2.0/files/fileops/emptytrash | Empty the \&quot;Trash\&quot; folder|
|[**getOperationStatuses**](#getoperationstatuses) | **GET** /api/2.0/files/fileops | Get active file operations|
|[**getOperationStatusesByType**](#getoperationstatusesbytype) | **GET** /api/2.0/files/fileops/{operationType} | Get file operation statuses|
|[**markAsRead**](#markasread) | **PUT** /api/2.0/files/fileops/markasread | Mark as read|
|[**moveBatchItems**](#movebatchitems) | **PUT** /api/2.0/files/fileops/move | Move or copy to a folder|
|[**moveOrCopyBatchCheck**](#moveorcopybatchcheck) | **GET** /api/2.0/files/fileops/move | Check and move or copy to a folder|
|[**moveOrCopyDestFolderCheck**](#moveorcopydestfoldercheck) | **GET** /api/2.0/files/fileops/checkdestfolder | Check for moving or copying to a folder|
|[**startConversion**](#startconversion) | **PUT** /api/2.0/files/file/{fileId}/checkconversion | Start file conversion|
|[**terminateTasks**](#terminatetasks) | **PUT** /api/2.0/files/fileops/terminate/{id} | Finish active operations|
|[**updateComment**](#updatecomment) | **PUT** /api/2.0/files/file/{fileId}/comment | Update a comment|

# **bulkDownload**
> FileOperationArrayWrapper bulkDownload()

Starts the download process of files and folders with the IDs specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DownloadRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let downloadRequestDto: DownloadRequestDto; // (optional)

const { status, data } = await apiInstance.bulkDownload(
    downloadRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **downloadRequestDto** | **DownloadRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**403** | You don\&#39;t have enough permission to download |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkConversion**
> ConversationResultArrayWrapper checkConversion()

Checks the conversion status of a file with the ID specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let fileId: number; //The file ID to check conversion status. (default to undefined)
let start: boolean; //Specifies whether a conversion operation is started or not. (optional) (default to undefined)

const { status, data } = await apiInstance.checkConversion(
    fileId,
    start
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID to check conversion status. | defaults to undefined|
| **start** | [**boolean**] | Specifies whether a conversion operation is started or not. | (optional) defaults to undefined|


### Return type

**ConversationResultArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Conversion result |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyBatchItems**
> FileOperationArrayWrapper copyBatchItems()

Copies all the selected files and folders to the folder with the ID specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let batchRequestDto: BatchRequestDto; // (optional)

const { status, data } = await apiInstance.copyBatchItems(
    batchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchRequestDto** | **BatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to copy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUploadSession**
> ObjectWrapper createUploadSession()

Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.   **Note**: Each chunk can have different length but the length should be multiple of <b>512</b> and greater or equal to <b>10 mb</b>. Last chunk can have any size.  After the initial response to the request with the <b>200 OK</b> status, you must get the <em>location</em> field value from the response. Send all your chunks to this location.  Each chunk must be sent in the exact order the chunks appear in the file.  After receiving each chunk, the server will respond with the current information about the upload session if no errors occurred.  When the number of bytes uploaded is equal to the number of bytes you sent in the initial request, the server responds with the <b>201 Created</b> status and sends you information about the uploaded file.  Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    SessionRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let folderId: number; //The folder ID of the session. (default to undefined)
let sessionRequest: SessionRequest; //The session parameters. (optional)

const { status, data } = await apiInstance.createUploadSession(
    folderId,
    sessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionRequest** | **SessionRequest**| The session parameters. | |
| **folderId** | [**number**] | The folder ID of the session. | defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Information about created session |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBatchItems**
> FileOperationArrayWrapper deleteBatchItems()

Deletes the files and folders with the IDs specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DeleteBatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let deleteBatchRequestDto: DeleteBatchRequestDto; // (optional)

const { status, data } = await apiInstance.deleteBatchItems(
    deleteBatchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteBatchRequestDto** | **DeleteBatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFileVersions**
> FileOperationWrapper deleteFileVersions()

Deletes the file versions with the IDs specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DeleteVersionBatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let deleteVersionBatchRequestDto: DeleteVersionBatchRequestDto; // (optional)

const { status, data } = await apiInstance.deleteFileVersions(
    deleteVersionBatchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteVersionBatchRequestDto** | **DeleteVersionBatchRequestDto**|  | |


### Return type

**FileOperationWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **duplicateBatchItems**
> FileOperationArrayWrapper duplicateBatchItems()

Duplicates all the selected files and folders.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DuplicateRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let duplicateRequestDto: DuplicateRequestDto; // (optional)

const { status, data } = await apiInstance.duplicateBatchItems(
    duplicateRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **duplicateRequestDto** | **DuplicateRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to duplicate |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emptyTrash**
> FileOperationArrayWrapper emptyTrash()

Deletes all the files and folders from the \"Trash\" folder.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

const { status, data } = await apiInstance.emptyTrash();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOperationStatuses**
> FileOperationArrayWrapper getOperationStatuses()

Returns a list of all the active file operations.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

const { status, data } = await apiInstance.getOperationStatuses();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOperationStatusesByType**
> FileOperationArrayWrapper getOperationStatusesByType()

Retrieves the statuses of operations filtered by the specified operation type.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let operationType: FileOperationType; //Specifies the type of file operation to be retrieved. (default to undefined)

const { status, data } = await apiInstance.getOperationStatusesByType(
    operationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **operationType** | **FileOperationType** | Specifies the type of file operation to be retrieved. | defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markAsRead**
> FileOperationArrayWrapper markAsRead()

Marks the files and folders with the IDs specified in the request as read.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.markAsRead(
    baseBatchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moveBatchItems**
> FileOperationArrayWrapper moveBatchItems()

Moves or copies all the selected files and folders to the folder with the ID specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let batchRequestDto: BatchRequestDto; // (optional)

const { status, data } = await apiInstance.moveBatchItems(
    batchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchRequestDto** | **BatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to move |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moveOrCopyBatchCheck**
> FileEntryArrayWrapper moveOrCopyBatchCheck()

Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let inDto: BatchRequestDto; //The request parameters for copying/moving files. (optional) (default to undefined)

const { status, data } = await apiInstance.moveOrCopyBatchCheck(
    inDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inDto** | **BatchRequestDto** | The request parameters for copying/moving files. | (optional) defaults to undefined|


### Return type

**FileEntryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moveOrCopyDestFolderCheck**
> CheckDestFolderWrapper moveOrCopyDestFolderCheck()

Checks if files can be moved or copied to the specified folder.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let inDto: BatchRequestDto; //The request parameters for copying/moving files. (optional) (default to undefined)

const { status, data } = await apiInstance.moveOrCopyDestFolderCheck(
    inDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inDto** | **BatchRequestDto** | The request parameters for copying/moving files. | (optional) defaults to undefined|


### Return type

**CheckDestFolderWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Result |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startConversion**
> ConversationResultArrayWrapper startConversion()

Starts a conversion operation of a file with the ID specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    CheckConversionRequestDtoInteger
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let fileId: number; //The file ID to start conversion proccess. (default to undefined)
let checkConversionRequestDtoInteger: CheckConversionRequestDtoInteger; //The parameters for checking file conversion. (optional)

const { status, data } = await apiInstance.startConversion(
    fileId,
    checkConversionRequestDtoInteger
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkConversionRequestDtoInteger** | **CheckConversionRequestDtoInteger**| The parameters for checking file conversion. | |
| **fileId** | [**number**] | The file ID to start conversion proccess. | defaults to undefined|


### Return type

**ConversationResultArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Conversion result |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateTasks**
> FileOperationArrayWrapper terminateTasks()

Finishes an operation with the ID specified in the request or all the active operations.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let id: string; //The operation ID of the request. (default to undefined)

const { status, data } = await apiInstance.terminateTasks(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The operation ID of the request. | defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateComment**
> StringWrapper updateComment()

Updates a comment in a file with the ID specified in the request.

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    UpdateComment
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let fileId: number; //The file ID where the comment is located. (default to undefined)
let updateComment: UpdateComment; //The parameters for updating a comment. (optional)

const { status, data } = await apiInstance.updateComment(
    fileId,
    updateComment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateComment** | **UpdateComment**| The parameters for updating a comment. | |
| **fileId** | [**number**] | The file ID where the comment is located. | defaults to undefined|


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
|**200** | Updated comment |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

