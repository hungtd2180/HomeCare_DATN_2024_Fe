export interface Request {
  requestId: string | null;
  name: string | null;
  modelName: string | null;
  manufacturer: string | null;
  type: string | null;
  errorDescription: string;
  fixDescription: string | null;
  statusDevice: string | null;
  statusRequest: string | null;
  timeAccept: string | null;
  timeEnd: string | null;
  timeStart: string | null;
  collaboratorId: string | null;
  userId: string | null;
  deviceId: string | null;
  employeeId: string | null;
}
