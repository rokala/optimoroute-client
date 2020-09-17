/**
 * on_duty – the driver went on duty
 * off_duty – the driver went off duty
 * start_service - the driver started the service
 * success – the specified order was completed successfully
 * failed – the driver failed to complete the order
 * rejected – the driver rejected the order
 */
type EventType = 'on_duty' | 'off_duty' | 'start_service' | 'success' | 'failed' | 'rejected';

export type MobileEvent = {
    event: EventType,
    unixTimestamp: string,
    utcTime: string,
    localTime: string,
    driverName?: string,
    driverSerial?: string,
    driverExternalId?: string,
    orderNo?: string
};