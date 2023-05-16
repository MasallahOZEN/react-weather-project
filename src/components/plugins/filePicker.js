import * as XLSX from 'xlsx';
function filePicker() {
    const openThisFile = async () => {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [{
              description: 'Spreadsheets',
              accept: { 'application/vnd.ms-excel': ['.xlsx', '.xls', '.xlsb', /*...*/] }
            }],
            excludeAcceptAllOption: true,
            multiple: false
          }); // error: Property 'showOpenFilePicker' does not exist on type 'Window & typeof globalThis'
        console.log(fileHandle);
    };
    return (
        <div>
            <button onClick={openThisFile}>Open file</button>
        </div>
    );
  
}

export default filePicker