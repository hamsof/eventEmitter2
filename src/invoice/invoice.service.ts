import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Invoice } from './types';

@Injectable()
export class InvoiceService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async createInvoice(): Promise<void> {
    this.eventEmitter.emit('invoice.created', { message: 'Invoice created' });
  }

  @OnEvent('invoice.getUnpaidInvoices')
  async OnGetUnpaidInvoices(payload: any): Promise<Invoice[]> {
    return [
      {
        id: 1,
        payment: 100,
      },
    ];
  }
}
