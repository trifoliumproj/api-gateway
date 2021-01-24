/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Int32Value } from '../google/protobuf/wrappers';

export const protobufPackage = 'konachan';

export interface GalleryRequest {
  tags: Tag[];
}

export interface GalleryResponse {
  posts: Post[];
}

export interface Tag {
  name: string;
}

export interface Post {
  id: number;
  tags: string;
  createdAt: number;
  creatorId: number;
  author: string;
  change: number;
  source: string;
  score: number;
  md5: string;
  fileSize: number;
  fileUrl: string;
  isShownInIndex: boolean;
  previewUrl: string;
  previewWidth: number;
  previewHeight: number;
  actualPreviewWidth: number;
  actualPreviewHeight: number;
  sampleUrl: string;
  sampleWidth: number;
  sampleHeight: number;
  sampleFileSize: number;
  jpegUrl: string;
  jpegWidth: number;
  jpegHeight: number;
  jpegFileSize: number;
  rating: string;
  hasChildren: boolean;
  parentId: number | undefined;
  status: string;
  width: number;
  height: number;
  /**
   * frames_pending_string = ""
   * frames_pending = []
   * frames_string = ""
   * frames = []
   */
  isHeld: boolean;
}

const baseGalleryRequest: object = {};

export const GalleryRequest = {
  encode(message: GalleryRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GalleryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGalleryRequest } as GalleryRequest;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(Tag.decode(reader, reader.uint32()));
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
    message.tags = [];
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Tag.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<GalleryRequest>): GalleryRequest {
    const message = { ...baseGalleryRequest } as GalleryRequest;
    message.tags = [];
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Tag.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: GalleryRequest): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Tag.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    return obj;
  },
};

const baseGalleryResponse: object = {};

export const GalleryResponse = {
  encode(message: GalleryResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GalleryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGalleryResponse } as GalleryResponse;
    message.posts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()));
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
    message.posts = [];
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(Post.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<GalleryResponse>): GalleryResponse {
    const message = { ...baseGalleryResponse } as GalleryResponse;
    message.posts = [];
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(Post.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: GalleryResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    return obj;
  },
};

const baseTag: object = { name: '' };

export const Tag = {
  encode(message: Tag, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Tag {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTag } as Tag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tag {
    const message = { ...baseTag } as Tag;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    return message;
  },

  fromPartial(object: DeepPartial<Tag>): Tag {
    const message = { ...baseTag } as Tag;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    return message;
  },

  toJSON(message: Tag): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

const basePost: object = {
  id: 0,
  tags: '',
  createdAt: 0,
  creatorId: 0,
  author: '',
  change: 0,
  source: '',
  score: 0,
  md5: '',
  fileSize: 0,
  fileUrl: '',
  isShownInIndex: false,
  previewUrl: '',
  previewWidth: 0,
  previewHeight: 0,
  actualPreviewWidth: 0,
  actualPreviewHeight: 0,
  sampleUrl: '',
  sampleWidth: 0,
  sampleHeight: 0,
  sampleFileSize: 0,
  jpegUrl: '',
  jpegWidth: 0,
  jpegHeight: 0,
  jpegFileSize: 0,
  rating: '',
  hasChildren: false,
  status: '',
  width: 0,
  height: 0,
  isHeld: false,
};

export const Post = {
  encode(message: Post, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(18).string(message.tags);
    writer.uint32(24).int32(message.createdAt);
    writer.uint32(32).int32(message.creatorId);
    writer.uint32(42).string(message.author);
    writer.uint32(48).int32(message.change);
    writer.uint32(58).string(message.source);
    writer.uint32(64).int32(message.score);
    writer.uint32(74).string(message.md5);
    writer.uint32(80).int32(message.fileSize);
    writer.uint32(90).string(message.fileUrl);
    writer.uint32(96).bool(message.isShownInIndex);
    writer.uint32(106).string(message.previewUrl);
    writer.uint32(112).int32(message.previewWidth);
    writer.uint32(120).int32(message.previewHeight);
    writer.uint32(128).int32(message.actualPreviewWidth);
    writer.uint32(136).int32(message.actualPreviewHeight);
    writer.uint32(146).string(message.sampleUrl);
    writer.uint32(152).int32(message.sampleWidth);
    writer.uint32(160).int32(message.sampleHeight);
    writer.uint32(168).int32(message.sampleFileSize);
    writer.uint32(178).string(message.jpegUrl);
    writer.uint32(184).int32(message.jpegWidth);
    writer.uint32(192).int32(message.jpegHeight);
    writer.uint32(200).int32(message.jpegFileSize);
    writer.uint32(210).string(message.rating);
    writer.uint32(216).bool(message.hasChildren);
    if (message.parentId !== undefined && message.parentId !== undefined) {
      Int32Value.encode(
        { value: message.parentId! },
        writer.uint32(226).fork(),
      ).ldelim();
    }
    writer.uint32(234).string(message.status);
    writer.uint32(240).int32(message.width);
    writer.uint32(248).int32(message.height);
    writer.uint32(256).bool(message.isHeld);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePost } as Post;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.tags = reader.string();
          break;
        case 3:
          message.createdAt = reader.int32();
          break;
        case 4:
          message.creatorId = reader.int32();
          break;
        case 5:
          message.author = reader.string();
          break;
        case 6:
          message.change = reader.int32();
          break;
        case 7:
          message.source = reader.string();
          break;
        case 8:
          message.score = reader.int32();
          break;
        case 9:
          message.md5 = reader.string();
          break;
        case 10:
          message.fileSize = reader.int32();
          break;
        case 11:
          message.fileUrl = reader.string();
          break;
        case 12:
          message.isShownInIndex = reader.bool();
          break;
        case 13:
          message.previewUrl = reader.string();
          break;
        case 14:
          message.previewWidth = reader.int32();
          break;
        case 15:
          message.previewHeight = reader.int32();
          break;
        case 16:
          message.actualPreviewWidth = reader.int32();
          break;
        case 17:
          message.actualPreviewHeight = reader.int32();
          break;
        case 18:
          message.sampleUrl = reader.string();
          break;
        case 19:
          message.sampleWidth = reader.int32();
          break;
        case 20:
          message.sampleHeight = reader.int32();
          break;
        case 21:
          message.sampleFileSize = reader.int32();
          break;
        case 22:
          message.jpegUrl = reader.string();
          break;
        case 23:
          message.jpegWidth = reader.int32();
          break;
        case 24:
          message.jpegHeight = reader.int32();
          break;
        case 25:
          message.jpegFileSize = reader.int32();
          break;
        case 26:
          message.rating = reader.string();
          break;
        case 27:
          message.hasChildren = reader.bool();
          break;
        case 28:
          message.parentId = Int32Value.decode(reader, reader.uint32()).value;
          break;
        case 29:
          message.status = reader.string();
          break;
        case 30:
          message.width = reader.int32();
          break;
        case 31:
          message.height = reader.int32();
          break;
        case 32:
          message.isHeld = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Post {
    const message = { ...basePost } as Post;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = String(object.tags);
    } else {
      message.tags = '';
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.creatorId !== undefined && object.creatorId !== null) {
      message.creatorId = Number(object.creatorId);
    } else {
      message.creatorId = 0;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = String(object.author);
    } else {
      message.author = '';
    }
    if (object.change !== undefined && object.change !== null) {
      message.change = Number(object.change);
    } else {
      message.change = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = '';
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = 0;
    }
    if (object.md5 !== undefined && object.md5 !== null) {
      message.md5 = String(object.md5);
    } else {
      message.md5 = '';
    }
    if (object.fileSize !== undefined && object.fileSize !== null) {
      message.fileSize = Number(object.fileSize);
    } else {
      message.fileSize = 0;
    }
    if (object.fileUrl !== undefined && object.fileUrl !== null) {
      message.fileUrl = String(object.fileUrl);
    } else {
      message.fileUrl = '';
    }
    if (object.isShownInIndex !== undefined && object.isShownInIndex !== null) {
      message.isShownInIndex = Boolean(object.isShownInIndex);
    } else {
      message.isShownInIndex = false;
    }
    if (object.previewUrl !== undefined && object.previewUrl !== null) {
      message.previewUrl = String(object.previewUrl);
    } else {
      message.previewUrl = '';
    }
    if (object.previewWidth !== undefined && object.previewWidth !== null) {
      message.previewWidth = Number(object.previewWidth);
    } else {
      message.previewWidth = 0;
    }
    if (object.previewHeight !== undefined && object.previewHeight !== null) {
      message.previewHeight = Number(object.previewHeight);
    } else {
      message.previewHeight = 0;
    }
    if (
      object.actualPreviewWidth !== undefined &&
      object.actualPreviewWidth !== null
    ) {
      message.actualPreviewWidth = Number(object.actualPreviewWidth);
    } else {
      message.actualPreviewWidth = 0;
    }
    if (
      object.actualPreviewHeight !== undefined &&
      object.actualPreviewHeight !== null
    ) {
      message.actualPreviewHeight = Number(object.actualPreviewHeight);
    } else {
      message.actualPreviewHeight = 0;
    }
    if (object.sampleUrl !== undefined && object.sampleUrl !== null) {
      message.sampleUrl = String(object.sampleUrl);
    } else {
      message.sampleUrl = '';
    }
    if (object.sampleWidth !== undefined && object.sampleWidth !== null) {
      message.sampleWidth = Number(object.sampleWidth);
    } else {
      message.sampleWidth = 0;
    }
    if (object.sampleHeight !== undefined && object.sampleHeight !== null) {
      message.sampleHeight = Number(object.sampleHeight);
    } else {
      message.sampleHeight = 0;
    }
    if (object.sampleFileSize !== undefined && object.sampleFileSize !== null) {
      message.sampleFileSize = Number(object.sampleFileSize);
    } else {
      message.sampleFileSize = 0;
    }
    if (object.jpegUrl !== undefined && object.jpegUrl !== null) {
      message.jpegUrl = String(object.jpegUrl);
    } else {
      message.jpegUrl = '';
    }
    if (object.jpegWidth !== undefined && object.jpegWidth !== null) {
      message.jpegWidth = Number(object.jpegWidth);
    } else {
      message.jpegWidth = 0;
    }
    if (object.jpegHeight !== undefined && object.jpegHeight !== null) {
      message.jpegHeight = Number(object.jpegHeight);
    } else {
      message.jpegHeight = 0;
    }
    if (object.jpegFileSize !== undefined && object.jpegFileSize !== null) {
      message.jpegFileSize = Number(object.jpegFileSize);
    } else {
      message.jpegFileSize = 0;
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = String(object.rating);
    } else {
      message.rating = '';
    }
    if (object.hasChildren !== undefined && object.hasChildren !== null) {
      message.hasChildren = Boolean(object.hasChildren);
    } else {
      message.hasChildren = false;
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = Number(object.parentId);
    } else {
      message.parentId = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = '';
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.isHeld !== undefined && object.isHeld !== null) {
      message.isHeld = Boolean(object.isHeld);
    } else {
      message.isHeld = false;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Post>): Post {
    const message = { ...basePost } as Post;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = object.tags;
    } else {
      message.tags = '';
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.creatorId !== undefined && object.creatorId !== null) {
      message.creatorId = object.creatorId;
    } else {
      message.creatorId = 0;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    } else {
      message.author = '';
    }
    if (object.change !== undefined && object.change !== null) {
      message.change = object.change;
    } else {
      message.change = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = '';
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = 0;
    }
    if (object.md5 !== undefined && object.md5 !== null) {
      message.md5 = object.md5;
    } else {
      message.md5 = '';
    }
    if (object.fileSize !== undefined && object.fileSize !== null) {
      message.fileSize = object.fileSize;
    } else {
      message.fileSize = 0;
    }
    if (object.fileUrl !== undefined && object.fileUrl !== null) {
      message.fileUrl = object.fileUrl;
    } else {
      message.fileUrl = '';
    }
    if (object.isShownInIndex !== undefined && object.isShownInIndex !== null) {
      message.isShownInIndex = object.isShownInIndex;
    } else {
      message.isShownInIndex = false;
    }
    if (object.previewUrl !== undefined && object.previewUrl !== null) {
      message.previewUrl = object.previewUrl;
    } else {
      message.previewUrl = '';
    }
    if (object.previewWidth !== undefined && object.previewWidth !== null) {
      message.previewWidth = object.previewWidth;
    } else {
      message.previewWidth = 0;
    }
    if (object.previewHeight !== undefined && object.previewHeight !== null) {
      message.previewHeight = object.previewHeight;
    } else {
      message.previewHeight = 0;
    }
    if (
      object.actualPreviewWidth !== undefined &&
      object.actualPreviewWidth !== null
    ) {
      message.actualPreviewWidth = object.actualPreviewWidth;
    } else {
      message.actualPreviewWidth = 0;
    }
    if (
      object.actualPreviewHeight !== undefined &&
      object.actualPreviewHeight !== null
    ) {
      message.actualPreviewHeight = object.actualPreviewHeight;
    } else {
      message.actualPreviewHeight = 0;
    }
    if (object.sampleUrl !== undefined && object.sampleUrl !== null) {
      message.sampleUrl = object.sampleUrl;
    } else {
      message.sampleUrl = '';
    }
    if (object.sampleWidth !== undefined && object.sampleWidth !== null) {
      message.sampleWidth = object.sampleWidth;
    } else {
      message.sampleWidth = 0;
    }
    if (object.sampleHeight !== undefined && object.sampleHeight !== null) {
      message.sampleHeight = object.sampleHeight;
    } else {
      message.sampleHeight = 0;
    }
    if (object.sampleFileSize !== undefined && object.sampleFileSize !== null) {
      message.sampleFileSize = object.sampleFileSize;
    } else {
      message.sampleFileSize = 0;
    }
    if (object.jpegUrl !== undefined && object.jpegUrl !== null) {
      message.jpegUrl = object.jpegUrl;
    } else {
      message.jpegUrl = '';
    }
    if (object.jpegWidth !== undefined && object.jpegWidth !== null) {
      message.jpegWidth = object.jpegWidth;
    } else {
      message.jpegWidth = 0;
    }
    if (object.jpegHeight !== undefined && object.jpegHeight !== null) {
      message.jpegHeight = object.jpegHeight;
    } else {
      message.jpegHeight = 0;
    }
    if (object.jpegFileSize !== undefined && object.jpegFileSize !== null) {
      message.jpegFileSize = object.jpegFileSize;
    } else {
      message.jpegFileSize = 0;
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = object.rating;
    } else {
      message.rating = '';
    }
    if (object.hasChildren !== undefined && object.hasChildren !== null) {
      message.hasChildren = object.hasChildren;
    } else {
      message.hasChildren = false;
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId;
    } else {
      message.parentId = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = '';
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.isHeld !== undefined && object.isHeld !== null) {
      message.isHeld = object.isHeld;
    } else {
      message.isHeld = false;
    }
    return message;
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tags !== undefined && (obj.tags = message.tags);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.creatorId !== undefined && (obj.creatorId = message.creatorId);
    message.author !== undefined && (obj.author = message.author);
    message.change !== undefined && (obj.change = message.change);
    message.source !== undefined && (obj.source = message.source);
    message.score !== undefined && (obj.score = message.score);
    message.md5 !== undefined && (obj.md5 = message.md5);
    message.fileSize !== undefined && (obj.fileSize = message.fileSize);
    message.fileUrl !== undefined && (obj.fileUrl = message.fileUrl);
    message.isShownInIndex !== undefined &&
      (obj.isShownInIndex = message.isShownInIndex);
    message.previewUrl !== undefined && (obj.previewUrl = message.previewUrl);
    message.previewWidth !== undefined &&
      (obj.previewWidth = message.previewWidth);
    message.previewHeight !== undefined &&
      (obj.previewHeight = message.previewHeight);
    message.actualPreviewWidth !== undefined &&
      (obj.actualPreviewWidth = message.actualPreviewWidth);
    message.actualPreviewHeight !== undefined &&
      (obj.actualPreviewHeight = message.actualPreviewHeight);
    message.sampleUrl !== undefined && (obj.sampleUrl = message.sampleUrl);
    message.sampleWidth !== undefined &&
      (obj.sampleWidth = message.sampleWidth);
    message.sampleHeight !== undefined &&
      (obj.sampleHeight = message.sampleHeight);
    message.sampleFileSize !== undefined &&
      (obj.sampleFileSize = message.sampleFileSize);
    message.jpegUrl !== undefined && (obj.jpegUrl = message.jpegUrl);
    message.jpegWidth !== undefined && (obj.jpegWidth = message.jpegWidth);
    message.jpegHeight !== undefined && (obj.jpegHeight = message.jpegHeight);
    message.jpegFileSize !== undefined &&
      (obj.jpegFileSize = message.jpegFileSize);
    message.rating !== undefined && (obj.rating = message.rating);
    message.hasChildren !== undefined &&
      (obj.hasChildren = message.hasChildren);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.status !== undefined && (obj.status = message.status);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.isHeld !== undefined && (obj.isHeld = message.isHeld);
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
    const promise = this.rpc.request('konachan.API', 'methodDesc.name', data);
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
