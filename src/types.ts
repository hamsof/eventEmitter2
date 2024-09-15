import { Invoice } from "./invoice/types";

export enum LocalEvents {
    InvoiceCreated = 'invoice.created',
    GetUnpaidInvoices = 'getUnpaidInvoices',
}

export interface LocalEventReturnTypes extends Record<LocalEvents, any> {
    [LocalEvents.GetUnpaidInvoices] : Invoice[];
}