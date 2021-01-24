import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  NHENTAI_PACKAGE_NAME,
  A_PI_SERVICE_NAME,
  APIClient,
  GalleryResponse,
  GalleryRequest,
} from '../generated/api/nhentai';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class NhService implements OnModuleInit {
  private apiService: APIClient;

  constructor(@Inject(NHENTAI_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.apiService = this.client.getService<APIClient>(A_PI_SERVICE_NAME);
  }

  gallery(id: number): Observable<GalleryResponse> {
    this.apiService.gallery({ id });
  }
}
