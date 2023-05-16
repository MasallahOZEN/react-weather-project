import {createContext,useState,useEffect} from 'react'
import { read, utils } from 'xlsx';

function ReadExcelFile() {
    const [cityData,setCityData] = useState([]);
    
    async function handleFileAsync(e) {
        const file = e.target.files[0];
        const dataArray = await file.arrayBuffer();
        
        const wb = read(dataArray); // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
        const jsonCityData = utils.sheet_to_json(ws); // generate objects
        
        var byCountryCityData = jsonCityData.filter((f)=>{

            if (f.country === "Turkey") {
                return f;  
            }

        }).map(({name, lon, lat},index)=> ({name, lon, lat})); 

        setCityData(jsonCityData);
        console.log(byCountryCityData);
    }

    useEffect(()=>{
        const xlsFileCtrl = document.getElementById("upload_xls");
        xlsFileCtrl.addEventListener('change',handleFileAsync, false);
    },[]);

    const xyz= async() => {
        const f = await (await fetch("https://sheetjs.com/pres.xlsx")).arrayBuffer();
        const wb = read(f); // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
        const data = utils.sheet_to_html(ws); // generate HTML
        console.log(data); // update state
      };

     //xyz.apply();

  return (
    <>
        <div>ReadExcelFile</div>    
        <input id="upload_xls" type="file" accept=".xlsx, .xls"  name="files[]" />
    </>
  )
}

export default ReadExcelFile