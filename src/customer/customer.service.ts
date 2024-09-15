import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventService } from 'src/app/event/event.service';
import { LocalEvents } from 'src/types';

@Injectable()
export class CustomerService {
  constructor(private readonly eventService: EventService) {}

  @OnEvent('invoice.created', { async: true })
  handleInvoiceCreatedEvent(payload: any) {
    console.log('Invoice created event received', payload);
  }

  async receiveDebit(customerId: number, payment: number): Promise<void> {
    const payload = {
      customerId,
    };
    const [response] =
      await this.eventService.emitAsync<LocalEvents.GetUnpaidInvoices>(
        LocalEvents.GetUnpaidInvoices,
        payload,
      );
    // do stuff with response
  }
}
