export interface Collaborator {
  collaboratorId: string;
  image: string;
  username: string;
  email: string | null;
  phone: string;
  name: string;
  address: string;
  description: string | null;
  timeStart: string;
  field: string;
  password: string;
  timeEnd: string;
  status: number;
}
