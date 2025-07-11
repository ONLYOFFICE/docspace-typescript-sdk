# StorageDto

The storage information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The storage ID. | [optional] [default to undefined]
**title** | **string** | The storage title. | [optional] [default to undefined]
**properties** | [**Array&lt;AuthKey&gt;**](AuthKey.md) | The list of storage authentication keys. | [optional] [default to undefined]
**current** | **boolean** | Specifies if this is the current portal storage or not. | [optional] [default to undefined]
**isSet** | **boolean** | Specifies if this storage can be set or not. | [optional] [default to undefined]

## Example

```typescript
import { StorageDto } from '@onlyoffice/docspace-api-typescript';

const instance: StorageDto = {
    id,
    title,
    properties,
    current,
    isSet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
