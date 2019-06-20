import {Workbook} from "exceljs"

export class dataBuilder{
    static async readExcel(filePath:string, sheet:string, testcaseID:string): Promise<Array<Map<string, string>>>{
        let wb = new Workbook();
        let dataArray: Array<Map<string, string>> = [];

        // read file xlsx
        wb.xlsx.readFile(filePath);
        
        // get the sheet in the xlsx file
        let worksheet = wb.getWorksheet(sheet);

        // get the number of rows 
        let rowCount = worksheet.rowCount;

        // get the number of columns
        let columnCount = worksheet.getRow(1).cellCount;

        // get the header of columns
        let columnHeaders = worksheet.getRow(1);

        // get test case value to specify in the test script
        let r: number;
        for (r=2; r<=rowCount; r++){
            let testcaseIDValue = String(worksheet.getRow(r).getCell(1).value)
            if (testcaseIDValue == testcaseID){
                let map = new Map<string, string>()
                for (let c=1; c<=columnCount; c++){
                    let headerValue = String(columnHeaders.getCell(c).value)
                    let cellValue = String (worksheet.getRow(r).getCell(c).value)
                    if (cellValue == 'null')
                        cellValue = ""
                    map.set(headerValue, cellValue)
                }
                dataArray.push(map)
            }
        }
        return dataArray
    }
}



