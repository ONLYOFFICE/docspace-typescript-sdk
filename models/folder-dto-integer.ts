/* tslint:disable */
/* eslint-disable */
/**
 * Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDtoIntegerSecurity } from './file-dto-integer-security';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryType } from './file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderType } from './folder-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Logo } from './logo';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomDataLifetimeDto } from './room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomType } from './room-type';
// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkDto } from './watermark-dto';

/**
 * The folder parameters.
 * @export
 * @interface FolderDtoInteger
 */
export interface FolderDtoInteger {
    /**
     * The file entry title.
     * @type {string}
     * @memberof FolderDtoInteger
     */
    'title'?: string | null;
    /**
     * 
     * @type {FileShare}
     * @memberof FolderDtoInteger
     */
    'access'?: FileShare;
    /**
     * Specifies if the file entry is shared or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'shared'?: boolean;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FolderDtoInteger
     */
    'created'?: ApiDateTime;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FolderDtoInteger
     */
    'createdBy'?: EmployeeDto;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FolderDtoInteger
     */
    'updated'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FolderDtoInteger
     */
    'autoDelete'?: ApiDateTime;
    /**
     * 
     * @type {FolderType}
     * @memberof FolderDtoInteger
     */
    'rootFolderType'?: FolderType;
    /**
     * 
     * @type {FolderType}
     * @memberof FolderDtoInteger
     */
    'parentRoomType'?: FolderType;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FolderDtoInteger
     */
    'updatedBy'?: EmployeeDto;
    /**
     * Specifies if the file entry provider is specified or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'providerItem'?: boolean | null;
    /**
     * The provider key of the file entry.
     * @type {string}
     * @memberof FolderDtoInteger
     */
    'providerKey'?: string | null;
    /**
     * The provider ID of the file entry.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'providerId'?: number | null;
    /**
     * The order of the file entry.
     * @type {string}
     * @memberof FolderDtoInteger
     */
    'order'?: string | null;
    /**
     * The file entry ID.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'id'?: number;
    /**
     * The root folder ID of the file entry.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'rootFolderId'?: number;
    /**
     * The origin ID of the file entry.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'originId'?: number;
    /**
     * The origin room ID of the file entry.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'originRoomId'?: number;
    /**
     * The origin title of the file entry.
     * @type {string}
     * @memberof FolderDtoInteger
     */
    'originTitle'?: string | null;
    /**
     * The origin room title of the file entry.
     * @type {string}
     * @memberof FolderDtoInteger
     */
    'originRoomTitle'?: string | null;
    /**
     * Specifies if the file entry can be shared or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'canShare'?: boolean;
    /**
     * 
     * @type {FileDtoIntegerSecurity}
     * @memberof FolderDtoInteger
     */
    'security'?: FileDtoIntegerSecurity | null;
    /**
     * The request token of the file entry.
     * @type {string}
     * @memberof FolderDtoInteger
     */
    'requestToken'?: string | null;
    /**
     * The parent folder ID of the folder.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'parentId'?: number;
    /**
     * The number of files that the folder contains.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'filesCount'?: number;
    /**
     * The number of folders that the folder contains.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'foldersCount'?: number;
    /**
     * Specifies if the folder can be shared or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'isShareable'?: boolean | null;
    /**
     * Specifies if the folder is favorite or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'isFavorite'?: boolean | null;
    /**
     * The new element index in the folder.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'new'?: number;
    /**
     * Specifies if the folder notifications are enabled or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'mute'?: boolean;
    /**
     * The list of tags of the folder.
     * @type {Array<string>}
     * @memberof FolderDtoInteger
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {Logo}
     * @memberof FolderDtoInteger
     */
    'logo'?: Logo;
    /**
     * Specifies if the folder is pinned or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'pinned'?: boolean;
    /**
     * 
     * @type {RoomType}
     * @memberof FolderDtoInteger
     */
    'roomType'?: RoomType;
    /**
     * Specifies if the folder is private or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'private'?: boolean;
    /**
     * Specifies if the folder is indexed or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'indexing'?: boolean;
    /**
     * Specifies if the folder can be downloaded or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'denyDownload'?: boolean;
    /**
     * 
     * @type {RoomDataLifetimeDto}
     * @memberof FolderDtoInteger
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * 
     * @type {WatermarkDto}
     * @memberof FolderDtoInteger
     */
    'watermark'?: WatermarkDto;
    /**
     * 
     * @type {FolderType}
     * @memberof FolderDtoInteger
     */
    'type'?: FolderType;
    /**
     * Specifies if the folder is placed in the room or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'inRoom'?: boolean | null;
    /**
     * The folder quota limit.
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'quotaLimit'?: number | null;
    /**
     * Specifies if the folder room has a custom quota or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'isCustomQuota'?: boolean | null;
    /**
     * How much folder space is used (counter).
     * @type {number}
     * @memberof FolderDtoInteger
     */
    'usedSpace'?: number | null;
    /**
     * Specifies if the folder can be accessed via an external link or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'external'?: boolean | null;
    /**
     * Specifies if the folder is password protected or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'passwordProtected'?: boolean | null;
    /**
     * Specifies if an external link to the folder is expired or not.
     * @type {boolean}
     * @memberof FolderDtoInteger
     */
    'expired'?: boolean | null;
    /**
     * 
     * @type {FileEntryType}
     * @memberof FolderDtoInteger
     */
    'fileEntryType'?: FileEntryType;
}



