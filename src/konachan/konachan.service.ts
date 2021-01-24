import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  KONACHAN_PACKAGE_NAME,
  A_PI_SERVICE_NAME,
  APIClient,
  GalleryResponse,
  GalleryRequest,
} from '../generated/api/konachan';

@Injectable()
export class KonachanService implements OnModuleInit {
  private apiService: APIClient;

  constructor(@Inject(KONACHAN_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.apiService = this.client.getService<APIClient>(A_PI_SERVICE_NAME);
  }

  gallery(tags: string[]): Observable<GalleryResponse> {
    let request: GalleryRequest = {
      tags: tags.map((tag) => {
        name: tag;
      }),
    };

    return this.apiService.gallery(request);
  }
}
