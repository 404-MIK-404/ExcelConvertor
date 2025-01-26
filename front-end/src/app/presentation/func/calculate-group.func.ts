export function calculateGroupValue(rowData: any) {
  // Группировка по комбинации name и codePBS
  return `${rowData.codePBS} - ${rowData.name}`;
}
