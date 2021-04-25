import React, { useState } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

interface UploadProgressProps {
  files: any;
  fileIndex: number;
  uploadInProgress: boolean;
}

const UploadProgress = ({
  files,
  fileIndex,
  uploadInProgress,
}: UploadProgressProps) => {
  const showUploadMessage = () => {
    if (uploadInProgress) {
      return (
        <p className="body-text">
          Uploading {fileIndex} out of {files.length}
          <LinearProgress />
        </p>
      );
    } else if (fileIndex > files.length) {
      return (
        <p className="body-text">
          Uploading Complete! Successfully uploaded {files.length} file(s).
        </p>
      );
    } else {
      return '';
    }
  };

  return (
    <div className="document-uploader">
      <div id="upload-progress">{showUploadMessage()}</div>
    </div>
  );
};

export default UploadProgress;
