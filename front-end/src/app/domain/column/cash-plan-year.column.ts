import DevExpress from "devextreme";
import {exportValueToRubFunc} from "../../presentation/func/export-value-to-rub.func";


export const cashPlanYearColumn : DevExpress.ui.dxDataGrid.Column[] = [
  {
    dataField: 'snameVid',
    caption: 'Наименование',
    allowSorting: true,
    width: "200px",
  },
  {
    dataField: 'codeStroki',
    caption: 'Код строки',
    allowSorting: true,
    width: "100px",
  },
  {
    dataField: 'codeVid',
    caption: 'Код группы вида расхода',
    allowSorting: true,
    width: "100px",
  },{
    dataField: 'budgetAllocations',
    caption: 'Бюджетные ассигнования по расходам',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'sumBO',
    caption: 'Бюджетные обязательства, всего',
    allowSorting: true,
    customizeText: exportValueToRubFunc
  },{
    dataField: 'deviationBO',
    caption: 'Отклонение БО',
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
  },
]
