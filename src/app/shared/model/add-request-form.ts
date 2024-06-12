export interface AddRequestForm {
  name: string;
  modelName: string;
  manufacturer: string;
  type: string;
  errorDescription: string;
  statusDevice: string;
  statusRequest: string;
  timeStart: string;
  deviceId: string | null;
  collaboratorId: string;
  userId: string;
}
