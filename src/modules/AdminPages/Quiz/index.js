// import "./App.css";
import {useState} from 'react';
import Papa from 'papaparse';
import TopHeading from '../TopHeading';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import UploadModern from './UploadModern';
import {AppList} from '@crema';
import FileRow from './FileRow';
import {useDropzone} from 'react-dropzone';
import {TiFolderOpen} from 'react-icons/ti';
import {useThemeContext} from '@crema/utility/AppContextProvider/ThemeContextProvider';
import {Checkbox} from '@mui/material';
import {useDispatch} from 'react-redux';
import {onUploadQuizCSVFile} from 'redux/actions';
import {QuizSubjectList} from 'modules/Constant/CommanConst';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFilesData, setUploadedFilesData] = useState({});
  const onDeleteUploadFile = (file) => {
    // dropzone.acceptedFiles.splice(dropzone.acceptedFiles.indexOf(file), 1);
    setUploadedFiles([]);
    // setTableRows([]);
    // setValues([]);
    setUploadedFilesData({});
  };

  return (
    <>
      <TopHeading title='Add Quiz Questions' />
      <Container container display='flex' sx={{width: '100%'}}>
        <Box sx={{position: 'relative'}}>
          <Stack
            direction={{xs: 'column', md: 'row'}}
            justifyContent='space-around'
            alignItems='center'
            spacing={2}
          >
            <a download href='/data/template.csv'>
              <Button variant='outlined'>Download Template</Button>
            </a>
            <UploadModern
              uploadText='Drag n drop some files here, or click to select files'
              // dropzone={dropzone}
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
              setUploadedFilesData={setUploadedFilesData}
            />
            <Stack direction='column'>
              {QuizSubjectList.map((item, i) => (
                <a key={i} download href={`/data/QuizData-${item.text}.csv`}>
                  <Button variant='outlined'>
                    Download {item.text} Quiz Data
                  </Button>
                </a>
              ))}
            </Stack>
          </Stack>

          <aside>
            <AppList
              data={uploadedFiles}
              renderRow={(file, index) => (
                <FileRow
                  key={index}
                  file={file}
                  onDeleteUploadFile={onDeleteUploadFile}
                />
              )}
            />
          </aside>
        </Box>
      </Container>

      <br />
      <br />
      {/* Table */}

      <table>
        <thead>
          <tr>
            {uploadedFilesData?.tableRows?.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {uploadedFilesData?.RowValues?.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
