import {PickType,OmitType, PartialType} from "@nestjs/mapped-types";
import {BasePhotoMetaData} from "./index"
// 从基础DTO中排除掉id即可
// export class CreatePhotoMetadataDto extends PartialType(BasePhotoMetaData){}
export class CreatePhotoMetadataDto extends OmitType(BasePhotoMetaData, ["id", "photoId"]){}