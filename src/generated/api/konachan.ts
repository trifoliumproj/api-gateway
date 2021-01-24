/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

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

export const KONACHAN_PACKAGE_NAME = 'konachan';

export interface APIClient {
  gallery(request: GalleryRequest): Observable<GalleryResponse>;
}

export interface APIController {
  gallery(
    request: GalleryRequest,
  ): Promise<GalleryResponse> | Observable<GalleryResponse> | GalleryResponse;
}

export function APIControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods = ['gallery'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('API', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('API', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const A_PI_SERVICE_NAME = 'API';
