import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { LocalEventReturnTypes, LocalEvents } from 'src/types';

@Injectable()
export class EventService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async emitAsync<T extends LocalEvents>(
    event: T,
    payload: any,
  ): Promise<LocalEventReturnTypes[T]> {
    const [response] = await this.eventEmitter.emitAsync(event, payload);
    return response;
  }
}
