import { Button, Tooltip, Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DropzoneArea from './DropZone.tsx';
import UploadProgress from './UploadProgress.tsx';
import router from '../../../routes/organization.api';

/**
 * Component to handle uploading gift cards from CSV files.
 */
function CsvUpload() {
  const [files, setFiles] = useState([]);
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [uploadTriggered, setUploadTriggered] = useState(false);
  const [fileIndex, setFileIndex] = useState(1);
  const [uploadStatus, setUploadStatus] = useState('');

  useEffect(() => {
    // TODO: not sure what this is
    // api.application.getApplication(application.id).then((response: any) => {
    //   let application = response.data
    //   if (application.need_media) {
    //     let allNeedFiles = application.need_media.map(file => {
    //       const fileName = file.name + file.ext
    //       const newFile = new File([], fileName, { type: file.mime })
    //       return { id: file.id, file: newFile, uploaded: true }
    //     })
    //     setFiles(allNeedFiles)
    //     setFileIndex(allNeedFiles.length + 1)
    //   }
    // })
  }, []);

  const handleUpload = async () => {
    // TODO: validate extension
    setUploadTriggered(true);
    setUploadInProgress(true);
    // router.csv.uploadCardsCSV(files[0])
    // .then(res => { // then print response status
    //   setUploadStatus("success")
    //   console.log("Upload CSV response: " + res.statusText)
    // })
    // .catch(err => {
    //   setUploadStatus("error")
    //   console.log("Upload CSV failed: " + err)
    // })
    setUploadInProgress(false);
  };

  const updateDocuments = (fileList: any) => {
    let ids = fileList.map((file: any) => file.id);
    if (ids.length < files.length) {
      setUploadTriggered(false);
    }
    setFileIndex(ids.length + 1);
  };

  const showDynamicButton = () => {
    let filesToUpload = files.filter((file: any) => file.uploaded !== true);
    if (files.length === 0 || filesToUpload.length > 0) {
      return (
        <Tooltip disableHoverListener={files.length > 0} title={'Hello'} arrow>
          <div>
            <Button
              disabled={files.length === 0 || uploadInProgress}
              variant="outlined"
              className="application-button gcb-btn"
              onClick={handleUpload}
            >
              Upload
            </Button>
          </div>
        </Tooltip>
      );
    } else {
      return <Button onClick={handleUpload} />;
    }
  };

  const showStatusAlert = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={uploadStatus != ''}
        autoHideDuration={6000}
        message={'Upload status: ' + uploadStatus}
      />
    );
  };

  return (
    <div id="csv-upload">
      Import gift cards from CSV file
      <DropzoneArea
        propsLoaded={true}
        files={files}
        setFiles={setFiles}
        filesLimit={3}
        updateDocuments={updateDocuments}
        uploadInProgress={uploadInProgress}
        acceptedFiles={CsvMimeTypes()}
        dropzoneText={'Upload a CSV file (.csv)'}
      />
      {uploadTriggered && (
        <UploadProgress
          files={files}
          fileIndex={fileIndex}
          uploadInProgress={uploadInProgress}
        />
      )}
      {showDynamicButton()}
      {showStatusAlert()}
    </div>
  );
}

const CsvMimeTypes = () => {
  return ['text/csv', 'application/vnd.ms-excel'];
};

export default function App() {
  return <CsvUpload />;
}
