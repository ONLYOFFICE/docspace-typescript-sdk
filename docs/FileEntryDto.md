# FileEntryDto

The file entry information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file entry title. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**shared** | **boolean** | Specifies if the file entry is shared or not. | [optional] [default to undefined]
**created** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**createdBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**updated** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**autoDelete** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**rootFolderType** | [**FolderType**](FolderType.md) |  | [optional] [default to undefined]
**parentRoomType** | [**FolderType**](FolderType.md) |  | [optional] [default to undefined]
**updatedBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**providerItem** | **boolean** | Specifies if the file entry provider is specified or not. | [optional] [default to undefined]
**providerKey** | **string** | The provider key of the file entry. | [optional] [default to undefined]
**providerId** | **number** | The provider ID of the file entry. | [optional] [default to undefined]
**order** | **string** | The order of the file entry. | [optional] [default to undefined]
**fileEntryType** | [**FileEntryType**](FileEntryType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FileEntryDto } from '@onlyoffice/docspace-api-typescript';

const instance: FileEntryDto = {
    title,
    access,
    shared,
    created,
    createdBy,
    updated,
    autoDelete,
    rootFolderType,
    parentRoomType,
    updatedBy,
    providerItem,
    providerKey,
    providerId,
    order,
    fileEntryType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
