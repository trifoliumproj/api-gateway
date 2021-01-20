import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { APIClient } from '../../api/generated/nhentai/nhentai_grpc_pb';
import {
  GalleryRequest,
  GalleryResponse,
} from '../../api/generated/nhentai/nhentai_pb';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, bindNodeCallback } from 'rxjs';
import { requestCallback } from 'grpc';

interface APIClientProxy extends APIClient {}

@Injectable()
export class NhService implements OnModuleInit {
  private apiService: APIClientProxy;

  constructor(@Inject('@trifoliumproj/nh') private client: ClientGrpc) {}

  onModuleInit() {
    this.apiService = this.client.getService<APIClientProxy>('API');
  }

  gallery(id: number): Observable<GalleryResponse> {
    let request = new GalleryRequest();
    request.setId(id);
    return bindNodeCallback((callback: requestCallback<GalleryResponse>) =>
      this.apiService.gallery(request, callback),
    )();
  }
}
