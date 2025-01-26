

export interface DynamicFormExcelModel {
  name: string,
  type: 'text' | 'number' | 'select' | 'tel',
  label?: string,
  placeholder?: string,
  validators?: any[],
  options?: any[],
}


export interface FormConfig {
  fields: DynamicFormExcelModel[];
}
