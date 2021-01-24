/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

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

export const NHENTAI_PACKAGE_NAME = 'nhentai';

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
