import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventService } from './app/event/event.service';

@Module({
  imports: [InvoiceModule, CustomerModule, EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, EventService],
})
export class AppModule {}
