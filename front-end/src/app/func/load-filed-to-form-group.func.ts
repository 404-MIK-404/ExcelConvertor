import { FormConfig} from "../model/dynamic-form-excel.model";
import {FormControl, FormGroup} from "@angular/forms";


export function loadFiledToFormGroupFunc(config: FormConfig): FormGroup {
  const group: { [key: string]: FormControl } = {};

  config.fields.forEach((field) => {
    const validators: any[] = field.validators || [];
    const initialValue = field.type === 'number' ? 0 : ''; // Пример для разных типов
    group[field.name] = new FormControl(initialValue, validators);
  });

  return new FormGroup(group);
}
