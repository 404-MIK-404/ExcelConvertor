import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormConfig} from "../model/dynamic-form-excel.model";
import {loadFiledToFormGroupFunc} from "../func/load-filed-to-form-group.func";


export const excelCollegeBaseFormConfig:  FormConfig = {
  fields: [
    {
      name: 'finYear',
      type: 'number',
      label: 'Финансовый год',
      placeholder: 'Введите год',
      validators: [Validators.required, Validators.min(2000), Validators.max(2100)],
    },
    {
      name: 'unitRub',
      type: 'number',
      label: 'Сумма в рублях',
      placeholder: 'Введите сумму',
      validators: [Validators.required, Validators.min(0)],
    },
  ]
}


export const excelCollegeBaseForm : FormGroup = loadFiledToFormGroupFunc(excelCollegeBaseFormConfig)
