export function exportValueToRubFunc(value: any) {
  return new Intl.NumberFormat("ru-RU",{style: "decimal",currency: "RUB",minimumFractionDigits: 2}).format(value.value)
}
