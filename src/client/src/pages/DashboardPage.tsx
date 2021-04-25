import React from 'react';
import styled from 'styled-components';
import CsvUpload from '../components/csvUpload.tsx';

const DashboardPage: React.FC = () => {
  return (
    <DashboardContainer>
      <Title>Partner Map Admin Portal</Title>
      <TableContainer>
        <div className="columns">
          <div className="column">
            <Subtitle>Upload CSV</Subtitle>
            <CsvUpload></CsvUpload>
            <FileSelector
              onLoadFile={(files: FileList) => console.log(files)}
            />
            <div> Uploaded_File_Name </div>
            <ExportButton>Export to CSV</ExportButton>
          </div>
          <div className="column">
            <Subtitle>Partner</Subtitle>
          </div>
          <div className="column">
            <Subtitle>Update Logo</Subtitle>
          </div>
        </div>
      </TableContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  margin-left: 106px;
`;

const TableContainer = styled.div`
  margin-top: 206px;
`;

const Title = styled.p`
  position: absolute;
  width: 767px;
  height: 90px;
  left: 81px;
  top: 52px;

  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 90px;

  /* identical to box height */

  color: #1d1e68;
`;

const Subtitle = styled.p`
  width: 194px;
  height: 42px;
  left: 133px;
  top: 206px;

  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;

  color: #1d1e68;
`;

const ExportButton = styled.button`
  width: 188px;
  height: 39px;
  left: 133px;
  top: 258px;

  width: 112px !important;
  height: 42px !important;
  background-color: #c4c4c4 !important;
  font-size: 13px !important;
  border-radius: 30px !important;
  color: white !important;
  border: none !important;
  font-weight: 600;
  &:hover {
    box-shadow: 5px 5px 10px rgba(221, 225, 231, 1) !important;
    border: none !important;
  }
  &:focus {
    box-shadow: 5px 5px 10px rgba(221, 225, 231, 1) !important;
    border: none !important;
  }
`;

const FileSelector = (props: { onLoadFile: (files: FileList) => void }) => (
  <input
    type="file"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      props.onLoadFile(e.target.files)
    }
  />
);

export default DashboardPage;
