import { Injectable } from '@nestjs/common';

@Injectable()
export class PipedriveService {
  dealWon(dealPayload): void {
    console.log(dealPayload);
  }
}
