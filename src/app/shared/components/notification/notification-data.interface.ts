import { NotificationTypeEnum } from "./notification-type.enum";

export interface NotificationData
{
    message: string;
    type: NotificationTypeEnum;
}