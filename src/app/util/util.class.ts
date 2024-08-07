import {FormControl, FormGroup} from "@angular/forms";
import {HttpHeaders} from "@angular/common/http";


export class Util {
  public static createHeader(): HttpHeaders {
    return new HttpHeaders({'Content-Type': 'application/json'});
  }
  static convertDateToTimeStamp(date: Date): number {
    return date.getTime();
  }
  static convertTimeStampToDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  public static createFormGroup(formControlModel: any): FormGroup {
    const group: any = {};
    Object.keys(formControlModel).forEach(key => {
      group[formControlModel[key].NAME] = new FormControl({
        value: formControlModel[key].VALUE || '',
        disabled: formControlModel[key].DISABLED
      }, formControlModel[key].VALIDATORS || []);
    });
    return new FormGroup(group);
  }

  public static resetFormGroup(form: FormGroup, data?:  { [key: string]: any }, ignore?: string[]) {
    Object.keys(form.controls).forEach(key => {
      if (!ignore || !ignore.includes(key)) {
        const ctr = form.controls[key];
        if (Array.isArray(ctr.value)) {
          if (data && data[key]) {
            ctr.reset(data[key]);
          } else {
            ctr.reset([]);
          }
        } else {
          if (data && data[key] != null) {
            ctr.reset(data[key]);
          } else {
            ctr.reset('');
          }
        }
      }
    });
  }

  public static getDataFormSearch(group: FormGroup): any {
    const result: { [key: string]: any } = {}; // Specify the type of result object
    Object.keys(group.controls).forEach(key => {
      const val = group.controls[key].value;
      if (!(val == null || val === '' || val.length === 0)) {
        if (key === 'area') {
          const areaSelect = group.controls[key].value;
          result[key] = JSON.stringify(areaSelect.map((ard: any) => ard.id));
        } else if (val instanceof Date) {
          result[key] = this.convertDateToTimeStamp(group.controls[key].value);
        } else if (Array.isArray(val)) {
          result[key] = JSON.stringify(val);
        } else {
          result[key] = val;
        }
      }
    });
    return result;
  }
  public static getCurrentTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  public static createId(id : string){
    return id + new Date().getTime();
  }
}
