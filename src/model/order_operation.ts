/**
 * MERGE (default) – used to only update specific fields and leave all the other fields unchanged (for example if some fields were manually edited in OptimoRoute and should not be updated). If this is a new order, we will create it. If there is an existing order in the system, it will be updated.
 * SYNC – recommended when the end goal is to make sure orders are reflected in OptimoRoute. If this is a new order, we will create it. If there is an existing order in the system, it will be updated. SYNC makes a clean sync-up of order data. Whatever we have on this order will be replaced by the data you send us on SYNC.
 * CREATE – creates a new order in the system. If the orderNo exists the system will return an error.
 * UPDATE – updates an existing order in the system. If the orderNo does not exist the system will return an error.
 */
export type OrderOperation = 'MERGE' | 'SYNC' | 'CREATE' | 'UPDATE';
