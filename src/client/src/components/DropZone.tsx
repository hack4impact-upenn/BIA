import { DropzoneAreaBase } from 'material-ui-dropzone';
import React from 'react';

interface Props {
  propsLoaded: boolean;
  files: any;
  setFiles: Function;
  updateDocuments: Function;
  uploadInProgress: boolean;
  filesLimit: number;
  acceptedFiles: any;
  dropzoneText: any;
}

const DropzoneArea = ({
  files,
  setFiles,
  updateDocuments,
  uploadInProgress,
  filesLimit,
  acceptedFiles,
  dropzoneText,
}: Props) => {
  const MAX_FILE_SIZE = 1024 * 1024 * 5;

  const handleAddFiles = async (filesAdded: any) => {
    if (filesAdded && filesAdded.length > 0) {
      const existingFiles = files.map((file: any) => file.file.name);
      filesAdded = filesAdded.filter(
        (file: any) => !existingFiles.includes(file.file.name)
      );
      setFiles(
        files.concat(
          filesAdded.map((addedFile: any) => {
            console.log(addedFile);
            return {
              id: 0,
              file: addedFile.file,
              data: addedFile.data,
              uploaded: false,
            };
          })
        )
      );
    }
  };

  const handleFileRemove = async (removedFile: any) => {
    const fileName = removedFile.file.name;
    if (!uploadInProgress) {
      let newFileList = files.filter(
        (file: any) => file.file.name !== fileName
      );
      setFiles(newFileList);
      updateDocuments(newFileList);
    }
  };

  return (
    <div
      className={
        !uploadInProgress ? 'document-uploader' : 'document-uploader-disabled'
      }
    >
      <DropzoneAreaBase
        dropzoneClass="drag-drop-zone"
        dropzoneText="Drag and drop a file here or click this box"
        acceptedFiles={acceptedFiles}
        fileObjects={files}
        filesLimit={filesLimit}
        showPreviews={true}
        showPreviewsInDropzone={false}
        useChipsForPreview={true}
        previewText="Selected files"
        previewGridProps={{
          container: {
            spacing: 3,
            direction: 'row',
            justify: 'center',
          },
        }}
        disableRejectionFeedback={true}
        maxFileSize={MAX_FILE_SIZE}
        onAdd={handleAddFiles}
        onDelete={handleFileRemove}
      />
      <p id="drag-drop-zone-text">{dropzoneText}</p>
    </div>
  );
};

const DocumentMimeTypes = () => {
  return [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/pdf',
  ];
};

export default DropzoneArea;
