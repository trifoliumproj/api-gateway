/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';

export const protobufPackage = 'nhentai';

export interface GalleryRequest {
  id: number;
}

export interface GalleryResponse {
  id: number;
  mediaId: number;
  title: GalleryResponse_Title | undefined;
  images: GalleryResponse_Images | undefined;
  scanlator: string;
  uploadDate: string;
  tags: GalleryResponse_Tag[];
  numPages: number;
  numFavorites: number;
}

export interface GalleryResponse_Title {
  japanese: string;
  english: string;
  pretty: string;
}

export interface GalleryResponse_Images {
  pages: GalleryResponse_Images_Image[];
  cover: GalleryResponse_Images_Image | undefined;
  thumbnail: GalleryResponse_Images_Image | undefined;
}

export interface GalleryResponse_Images_Image {
  t: string;
  w: number;
  h: number;
}

export interface GalleryResponse_Tag {
  id: number;
  type: string;
  name: string;
  url: string;
  count: number;
}

const baseGalleryRequest: object = { id: 0 };

export const GalleryRequest = {
  encode(message: GalleryRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GalleryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGalleryRequest } as GalleryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GalleryRequest {
    const message = { ...baseGalleryRequest } as GalleryRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<GalleryRequest>): GalleryRequest {
    const message = { ...baseGalleryRequest } as GalleryRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: GalleryRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

const baseGalleryResponse: object = {
  id: 0,
  mediaId: 0,
  scanlator: '',
  uploadDate: '',
  numPages: 0,
  numFavorites: 0,
};

export const GalleryResponse = {
  encode(message: GalleryResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(16).int32(message.mediaId);
    if (message.title !== undefined && message.title !== undefined) {
      GalleryResponse_Title.encode(
        message.title,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.images !== undefined && message.images !== undefined) {
      GalleryResponse_Images.encode(
        message.images,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    writer.uint32(42).string(message.scanlator);
    writer.uint32(50).string(message.uploadDate);
    for (const v of message.tags) {
      GalleryResponse_Tag.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(64).int32(message.numPages);
    writer.uint32(72).int32(message.numFavorites);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GalleryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGalleryResponse } as GalleryResponse;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.mediaId = reader.int32();
          break;
        case 3:
          message.title = GalleryResponse_Title.decode(reader, reader.uint32());
          break;
        case 4:
          message.images = GalleryResponse_Images.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.scanlator = reader.string();
          break;
        case 6:
          message.uploadDate = reader.string();
          break;
        case 7:
          message.tags.push(
            GalleryResponse_Tag.decode(reader, reader.uint32()),
          );
          break;
        case 8:
          message.numPages = reader.int32();
          break;
        case 9:
          message.numFavorites = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GalleryResponse {
    const message = { ...baseGalleryResponse } as GalleryResponse;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.mediaId !== undefined && object.mediaId !== null) {
      message.mediaId = Number(object.mediaId);
    } else {
      message.mediaId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = GalleryResponse_Title.fromJSON(object.title);
    } else {
      message.title = undefined;
    }
    if (object.images !== undefined && object.images !== null) {
      message.images = GalleryResponse_Images.fromJSON(object.images);
    } else {
      message.images = undefined;
    }
    if (object.scanlator !== undefined && object.scanlator !== null) {
      message.scanlator = String(object.scanlator);
    } else {
      message.scanlator = '';
    }
    if (object.uploadDate !== undefined && object.uploadDate !== null) {
      message.uploadDate = String(object.uploadDate);
    } else {
      message.uploadDate = '';
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(GalleryResponse_Tag.fromJSON(e));
      }
    }
    if (object.numPages !== undefined && object.numPages !== null) {
      message.numPages = Number(object.numPages);
    } else {
      message.numPages = 0;
    }
    if (object.numFavorites !== undefined && object.numFavorites !== null) {
      message.numFavorites = Number(object.numFavorites);
    } else {
      message.numFavorites = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<GalleryResponse>): GalleryResponse {
    const message = { ...baseGalleryResponse } as GalleryResponse;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.mediaId !== undefined && object.mediaId !== null) {
      message.mediaId = object.mediaId;
    } else {
      message.mediaId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = GalleryResponse_Title.fromPartial(object.title);
    } else {
      message.title = undefined;
    }
    if (object.images !== undefined && object.images !== null) {
      message.images = GalleryResponse_Images.fromPartial(object.images);
    } else {
      message.images = undefined;
    }
    if (object.scanlator !== undefined && object.scanlator !== null) {
      message.scanlator = object.scanlator;
    } else {
      message.scanlator = '';
    }
    if (object.uploadDate !== undefined && object.uploadDate !== null) {
      message.uploadDate = object.uploadDate;
    } else {
      message.uploadDate = '';
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(GalleryResponse_Tag.fromPartial(e));
      }
    }
    if (object.numPages !== undefined && object.numPages !== null) {
      message.numPages = object.numPages;
    } else {
      message.numPages = 0;
    }
    if (object.numFavorites !== undefined && object.numFavorites !== null) {
      message.numFavorites = object.numFavorites;
    } else {
      message.numFavorites = 0;
    }
    return message;
  },

  toJSON(message: GalleryResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.mediaId !== undefined && (obj.mediaId = message.mediaId);
    message.title !== undefined &&
      (obj.title = message.title
        ? GalleryResponse_Title.toJSON(message.title)
        : undefined);
    message.images !== undefined &&
      (obj.images = message.images
        ? GalleryResponse_Images.toJSON(message.images)
        : undefined);
    message.scanlator !== undefined && (obj.scanlator = message.scanlator);
    message.uploadDate !== undefined && (obj.uploadDate = message.uploadDate);
    if (message.tags) {
      obj.tags = message.tags.map((e) =>
        e ? GalleryResponse_Tag.toJSON(e) : undefined,
      );
    } else {
      obj.tags = [];
    }
    message.numPages !== undefined && (obj.numPages = message.numPages);
    message.numFavorites !== undefined &&
      (obj.numFavorites = message.numFavorites);
    return obj;
  },
};

const baseGalleryResponse_Title: object = {
  japanese: '',
  english: '',
  pretty: '',
};

export const GalleryResponse_Title = {
  encode(
    message: GalleryResponse_Title,
    writer: Writer = Writer.create(),
  ): Writer {
    writer.uint32(10).string(message.japanese);
    writer.uint32(18).string(message.english);
    writer.uint32(26).string(message.pretty);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GalleryResponse_Title {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGalleryResponse_Title } as GalleryResponse_Title;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.japanese = reader.string();
          break;
        case 2:
          message.english = reader.string();
          break;
        case 3:
          message.pretty = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GalleryResponse_Title {
    const message = { ...baseGalleryResponse_Title } as GalleryResponse_Title;
    if (object.japanese !== undefined && object.japanese !== null) {
      message.japanese = String(object.japanese);
    } else {
      message.japanese = '';
    }
    if (object.english !== undefined && object.english !== null) {
      message.english = String(object.english);
    } else {
      message.english = '';
    }
    if (object.pretty !== undefined && object.pretty !== null) {
      message.pretty = String(object.pretty);
    } else {
      message.pretty = '';
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GalleryResponse_Title>,
  ): GalleryResponse_Title {
    const message = { ...baseGalleryResponse_Title } as GalleryResponse_Title;
    if (object.japanese !== undefined && object.japanese !== null) {
      message.japanese = object.japanese;
    } else {
      message.japanese = '';
    }
    if (object.english !== undefined && object.english !== null) {
      message.english = object.english;
    } else {
      message.english = '';
    }
    if (object.pretty !== undefined && object.pretty !== null) {
      message.pretty = object.pretty;
    } else {
      message.pretty = '';
    }
    return message;
  },

  toJSON(message: GalleryResponse_Title): unknown {
    const obj: any = {};
    message.japanese !== undefined && (obj.japanese = message.japanese);
    message.english !== undefined && (obj.english = message.english);
    message.pretty !== undefined && (obj.pretty = message.pretty);
    return obj;
  },
};

const baseGalleryResponse_Images: object = {};

export const GalleryResponse_Images = {
  encode(
    message: GalleryResponse_Images,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.pages) {
      GalleryResponse_Images_Image.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.cover !== undefined && message.cover !== undefined) {
      GalleryResponse_Images_Image.encode(
        message.cover,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.thumbnail !== undefined && message.thumbnail !== undefined) {
      GalleryResponse_Images_Image.encode(
        message.thumbnail,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GalleryResponse_Images {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGalleryResponse_Images } as GalleryResponse_Images;
    message.pages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pages.push(
            GalleryResponse_Images_Image.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.cover = GalleryResponse_Images_Image.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.thumbnail = GalleryResponse_Images_Image.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GalleryResponse_Images {
    const message = { ...baseGalleryResponse_Images } as GalleryResponse_Images;
    message.pages = [];
    if (object.pages !== undefined && object.pages !== null) {
      for (const e of object.pages) {
        message.pages.push(GalleryResponse_Images_Image.fromJSON(e));
      }
    }
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = GalleryResponse_Images_Image.fromJSON(object.cover);
    } else {
      message.cover = undefined;
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = GalleryResponse_Images_Image.fromJSON(
        object.thumbnail,
      );
    } else {
      message.thumbnail = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GalleryResponse_Images>,
  ): GalleryResponse_Images {
    const message = { ...baseGalleryResponse_Images } as GalleryResponse_Images;
    message.pages = [];
    if (object.pages !== undefined && object.pages !== null) {
      for (const e of object.pages) {
        message.pages.push(GalleryResponse_Images_Image.fromPartial(e));
      }
    }
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = GalleryResponse_Images_Image.fromPartial(object.cover);
    } else {
      message.cover = undefined;
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = GalleryResponse_Images_Image.fromPartial(
        object.thumbnail,
      );
    } else {
      message.thumbnail = undefined;
    }
    return message;
  },

  toJSON(message: GalleryResponse_Images): unknown {
    const obj: any = {};
    if (message.pages) {
      obj.pages = message.pages.map((e) =>
        e ? GalleryResponse_Images_Image.toJSON(e) : undefined,
      );
    } else {
      obj.pages = [];
    }
    message.cover !== undefined &&
      (obj.cover = message.cover
        ? GalleryResponse_Images_Image.toJSON(message.cover)
        : undefined);
    message.thumbnail !== undefined &&
      (obj.thumbnail = message.thumbnail
        ? GalleryResponse_Images_Image.toJSON(message.thumbnail)
        : undefined);
    return obj;
  },
};

const baseGalleryResponse_Images_Image: object = { t: '', w: 0, h: 0 };

export const GalleryResponse_Images_Image = {
  encode(
    message: GalleryResponse_Images_Image,
    writer: Writer = Writer.create(),
  ): Writer {
    writer.uint32(10).string(message.t);
    writer.uint32(16).int32(message.w);
    writer.uint32(24).int32(message.h);
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GalleryResponse_Images_Image {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGalleryResponse_Images_Image,
    } as GalleryResponse_Images_Image;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.t = reader.string();
          break;
        case 2:
          message.w = reader.int32();
          break;
        case 3:
          message.h = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GalleryResponse_Images_Image {
    const message = {
      ...baseGalleryResponse_Images_Image,
    } as GalleryResponse_Images_Image;
    if (object.t !== undefined && object.t !== null) {
      message.t = String(object.t);
    } else {
      message.t = '';
    }
    if (object.w !== undefined && object.w !== null) {
      message.w = Number(object.w);
    } else {
      message.w = 0;
    }
    if (object.h !== undefined && object.h !== null) {
      message.h = Number(object.h);
    } else {
      message.h = 0;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GalleryResponse_Images_Image>,
  ): GalleryResponse_Images_Image {
    const message = {
      ...baseGalleryResponse_Images_Image,
    } as GalleryResponse_Images_Image;
    if (object.t !== undefined && object.t !== null) {
      message.t = object.t;
    } else {
      message.t = '';
    }
    if (object.w !== undefined && object.w !== null) {
      message.w = object.w;
    } else {
      message.w = 0;
    }
    if (object.h !== undefined && object.h !== null) {
      message.h = object.h;
    } else {
      message.h = 0;
    }
    return message;
  },

  toJSON(message: GalleryResponse_Images_Image): unknown {
    const obj: any = {};
    message.t !== undefined && (obj.t = message.t);
    message.w !== undefined && (obj.w = message.w);
    message.h !== undefined && (obj.h = message.h);
    return obj;
  },
};

const baseGalleryResponse_Tag: object = {
  id: 0,
  type: '',
  name: '',
  url: '',
  count: 0,
};

export const GalleryResponse_Tag = {
  encode(
    message: GalleryResponse_Tag,
    writer: Writer = Writer.create(),
  ): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(18).string(message.type);
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.url);
    writer.uint32(40).int32(message.count);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GalleryResponse_Tag {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGalleryResponse_Tag } as GalleryResponse_Tag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GalleryResponse_Tag {
    const message = { ...baseGalleryResponse_Tag } as GalleryResponse_Tag;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = '';
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<GalleryResponse_Tag>): GalleryResponse_Tag {
    const message = { ...baseGalleryResponse_Tag } as GalleryResponse_Tag;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = '';
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: GalleryResponse_Tag): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },
};

export interface API {
  Gallery(request: GalleryRequest): Promise<GalleryResponse>;
}

export class APIClientImpl implements API {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Gallery(request: GalleryRequest): Promise<GalleryResponse> {
    const data = GalleryRequest.encode(request).finish();
    const promise = this.rpc.request('nhentai.API', 'methodDesc.name', data);
    return promise.then((data) => GalleryResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
