import { Location } from './location';
import { TimeWindow } from './time_window';
import { DateRange } from './date_range';

type DateTimeWindow = {
    from: string,
    to: string
};

type AssignedTo = {
    serial?: string,
    externalId?: string
};

/**
 * D (delivery),
 * P (pickup)
 * T (task)
 */
type OrderType = 'D' | 'P' | 'T'

type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

type NotificationPreference = 'dont_notify' | 'email' | 'sms' | 'both'

export type Order = {
    orderNo: string,
    relatedOrderNo?: string,
    date: string,
    location: Location,
    type: OrderType,
    duration: bigint,
    timeWindows: TimeWindow[],
    allowedWeekdays: Set<Weekday>,
    allowedDates?: DateRange,
    allowedDateTimes?: DateTimeWindow[],
    assignedTo: AssignedTo | null,
    priority: string,
    load1: bigint,
    load2: bigint,
    load3: bigint,
    load4: bigint,
    vehicleFeatures: string[],
    skills: string[],
    notes: string,
    customField1: string,
    customField2: string,
    customField3: string,
    customField4: string,
    customField5: string,
    email: string,
    phone: string,
    notificationPreference: NotificationPreference
};