import {Collaborator} from "../../../../model/collaborator";
import {Employee} from "../../../../model/employee";
import {Customer} from "../../../../model/customer";
import {Request} from "../../../../model/request";

export interface RequestManager extends Request{
  collaborator: Collaborator;
  employee: Employee;
  user: Customer;
}
