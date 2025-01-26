import DevExpress from "devextreme";
import {calculateGroupValue} from "../../presentation/func/calculate-group.func";
import {exportValueToRubFunc} from "../../presentation/func/export-value-to-rub.func";


export const cashPlanBpColumn: DevExpress.ui.dxDataGrid.Column[] = [
  {
    dataField: 'name',
    caption: 'Наименование бюджетополучателя',
    allowSorting: true,
    groupCellTemplate: 'nameBpLboGroupTemplate',
    calculateGroupValue: calculateGroupValue,
    groupIndex: 0,
  },{
    dataField: 'codePBS',
    caption: 'Бюджетополучатель',
    allowSorting: false,
  }, {
    dataField: 'codeDep',
    caption: 'Департамент',
    allowSorting: true,
    groupCellTemplate: 'nameBpLboGroupTemplate',
    groupIndex: 1,
  },{
    dataField: 'codeSection',
    caption: 'Раздел',
    allowSorting: true,
  },{
    dataField: 'subSection',
    caption: 'Подраздел',
    allowSorting: true,
  },{
    dataField: 'targetSection',
    caption: 'Целевая статья',
    allowSorting: true,
  },{
    dataField: 'expenseType',
    caption: 'Вид расхода',
    allowSorting: true
  },{
    dataField: 'sumBO',
    caption: 'Бюджетные обязательства, всего',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumJanBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (январь)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumFebBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (февраль)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumMarBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (март)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumAprBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (апрель)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumMayBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (май)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumJunBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (июнь)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumJulBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (июль)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumAugBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (август)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumSepBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (сентябрь)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumOctBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (октябрь)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumNovBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (ноябрь)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumDecBO',
    caption: 'Сумма принятых/ планируемых к принятию БО (декабрь)',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'differenceLboAndBo',
    caption: 'Отклонение БО от ЛБО',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  }
]
