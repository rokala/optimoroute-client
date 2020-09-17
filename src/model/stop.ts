export type Stop = {
    stopNumber: number,
    orderNo: string,
    locationNo: string,
    locationName: string,
    address: string,
    latitude: number,
    longitude: number,
    scheduledAt: string,
    scheduledAtDt: string,
    arrivalTimeDt: string,
    travelTime: bigint,
    distance: bigint,
    type: string
};