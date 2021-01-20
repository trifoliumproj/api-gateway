import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { APIClient } from '../../api/generated/nhentai/nhentai_grpc_pb';
import {
  GalleryRequest,
  GalleryResponse,
} from '../../api/generated/nhentai/nhentai_pb';
import { ClientGrpc } from '@nestjs/microservices';

interface APIClientProxy extends APIClient {}

@Injectable()
export class NhService implements OnModuleInit {
  private apiService: APIClientProxy;

  constructor(@Inject('@trifoliumproj/nh') private client: ClientGrpc) {}

  onModuleInit() {
    this.apiService = this.client.getService<APIClientProxy>('API');
  }

  gallery(id: number): Promise<GalleryResponse> {
    let request = new GalleryRequest();
    request.setId(id);
    return new Promise((resolve, reject) =>
      this.apiService.gallery(request, (error, value) => {
        if (error) return reject(error);
        return resolve(value);
      }),
    );
  }
}
