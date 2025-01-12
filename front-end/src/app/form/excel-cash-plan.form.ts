import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormConfig} from "../model/dynamic-form-excel.model";
import {loadFiledToFormGroupFunc} from "../func/load-filed-to-form-group.func";


export const excelCashPlanFormConfig:  FormConfig = {
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
    {
      name: 'jobTitleChief',
      type: 'text',
      label: 'Должность руководителя',
      placeholder: 'Введите должность',
      validators: [Validators.required],
    },
    {
      name: 'jobTitleExecutor',
      type: 'text',
      label: 'Должность исполнителя',
      placeholder: 'Введите должность',
      validators: [Validators.required],
    },
    {
      name: 'chiefSignatureDecryption',
      type: 'text',
      label: 'Расшифровка подписи руководителя',
      placeholder: 'Введите расшифровку',
      validators: [Validators.required],
    },
    {
      name: 'fioExecutor',
      type: 'text',
      label: 'ФИО исполнителя',
      placeholder: 'Введите ФИО',
      validators: [Validators.required],
    },
    {
      name: 'phoneExecutor',
      type: 'tel',
      label: 'Телефон исполнителя',
      placeholder: 'Введите телефон',
      validators: [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)],
    },
  ]
}

export const excelCashPlanForm: FormGroup = loadFiledToFormGroupFunc(excelCashPlanFormConfig)


