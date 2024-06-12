import {Collaborator} from "../../../../../model/collaborator";
import {Employee} from "../../../../../model/employee";
import {Request} from "../../../../../model/request";

export interface RequestDetail extends Request{
  collaborator: Collaborator | null;
  employee: Employee | null;
}
