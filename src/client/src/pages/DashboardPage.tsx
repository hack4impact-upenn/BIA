import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import colors from '../common/Colors';
import api from '../api/index.js';

const styles = {
  control: ({ background, ...base }) => {
    return {
      ...base,
      boxShadow: 'none',
      color: colors.PURPLE,
      background: colors.GREY,
      width: `300px`,
    };
  },
  option: ({ background, ...base }, { isFocused, isSelected }) => {
    const isEmphasized = isFocused || isSelected;
    return {
      ...base,
      background: isEmphasized ? colors.GREY : background,
      color: colors.PURPLE,
    };
  },

  singleValue: (base) => {
    return {
      ...base,
      color: colors.PURPLE,
      width: `300px`,
    };
  },
};

const components = {
  IndicatorSeparator: () => null,
};

const DashboardPage: React.FC = () => {
  const [fileCSV, setFileCSV] = useState<any>(null);
  const [fileLogo, setFileLogo] = useState<any>(null);
  const [errorCSV, setErrorCSV] = useState<any>(null);
  const [errorLogo, setErrorLogo] = useState<any>(null);
  const [partners, setPartners] = useState<any>(null);
  const [options, setOptions] = useState<any>([]);
  const [targetOrg, setOrg] = useState<any>(null);

  const uploadCSV = () => {
    if (
      !fileCSV.type ||
      (fileCSV.type != 'text/csv' && fileCSV.type != 'application/vnd.ms-excel')
    ) {
      setErrorCSV({ message: 'invalid file type. Please upload a .csv file.' });
      return;
    }
    setErrorCSV(null);
    //console.log("Test 1");
    api.post('/api/org/csv', fileCSV);
  };

  const uploadLogo = () => {
    if (
      !fileLogo.type ||
      (fileLogo.type != 'image/png' &&
        fileLogo.type != 'image/jpg' &&
        fileLogo.type != 'image/jpeg')
    ) {
      setErrorLogo({
        message: 'invalid image format. Please upload a .png or .jpg image.',
      });
      return;
    }
    setErrorLogo(null);
    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
      var srcData: string = fileLoadedEvent.target.result as string; // <--- data: base64
      console.log(targetOrg);
      if (targetOrg) {
        api.post(`/api/org/addImage/${targetOrg}`, { logo: srcData });
      }
    };
    fileReader.readAsDataURL(fileLogo);
  };

  useEffect(() => {
    if (fileCSV) {
      uploadCSV();
    }
  }, [fileCSV]);

  useEffect(() => {
    if (fileLogo) {
      uploadLogo();
    }
  }, [fileLogo]);

  const fetchData = async () => {
    try {
      const { data } = await api.get('/api/org');
      setPartners(data.result);
      setOptions(
        data.result && data.result.length > 0
          ? data.result.map((partner) => {
              return {
                value: partner.organizationName,
                label: partner.organizationName,
              };
            })
          : []
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOrgChange = (e) => {
    if (e.label) {
      setOrg(e.label);
    }
  };

  return (
    <DashboardContainer>
      <Title>Partner Map Admin Portal</Title>
      <TableContainer>
        <div className="columns">
          <div className="column">
            <Subtitle>Upload CSV</Subtitle>
            <FileSelector
              onLoadFile={(files: FileList) => {
                alert('you uploaded partner data. good job');
                console.log(files[0]);
                setFileCSV(files[0]);
              }}
              file={fileCSV}
            />
            {errorCSV && <div>Cannot submit {errorCSV.message}</div>}
            <ExportButton>Export to CSV</ExportButton>
          </div>
          <Container>
            <div className="column">
              <Subtitle>Update Logo</Subtitle>
              <Select
                isClearable
                components={components}
                styles={styles}
                //todo: change variable to use in backend route for proper image
                //todo: clear current file upload name
                onChange={handleOrgChange}
                name="colors"
                options={options}
                placeholder="Search by Program Type"
                className="basic-multi-select"
                classNamePrefix="select"
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    //neutral50: colors.PURPLE,
                    //neutral150: colors.PURPLE,
                    //primary: colors.PURPLE,
                  },
                })}
              />
              <FileSelector
                onLoadFile={(files: FileList) => {
                  alert('you uploaded a logo. good job');
                  console.log(files[0]);
                  setFileLogo(files[0]);
                }}
                file={fileLogo}
              />
              {errorLogo && <div>Cannot upload {errorLogo.message}</div>}
            </div>
          </Container>
        </div>
      </TableContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  margin-left: 106px;
`;

const Container = styled.div`
  width: 400 px;
  margin-right: 406px;
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

const FileSelector = (props: {
  onLoadFile: (files: FileList) => void;
  file: any;
}) => {
  return (
    <div className="file has-name is-boxed">
      <label className="file-label">
        <input
          className="file-input"
          type="file"
          name="resume"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onLoadFile(e.target.files)
          }
        />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload"></i>
          </span>
          <span className="file-label">Choose a file…</span>
        </span>
        <span className="file-name">
          {props && props.file && props.file.name
            ? props.file.name
            : 'Upload file here ...'}
        </span>
      </label>
    </div>
  );
};

export default DashboardPage;
