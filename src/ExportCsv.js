import React from 'react'
import Button from '@material-ui/core/Button';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

 const ExportCsv = ({csvData, fileName}) => {

    // const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    // const fileExtension = '.xlsx';

    // const exportToCSV = (csvData, fileName) => {
    //     const ws = XLSX.utils.json_to_sheet(csvData);
    //     const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    //     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    //     const data = new Blob([excelBuffer], {type: fileType});
    //     FileSaver.saveAs(data, fileName + fileExtension);
    // }

    return (
        // <Button style={{color:"black",backgroundColor:"#45506B",width:"140px"}} onClick={(e) => exportToCSV(csvData,fileName)}>Export</Button>
        <Button style={{color:"black",backgroundColor:"#45506B",width:"140px"}} >Export</Button>

    )
} 
export default  ExportCsv