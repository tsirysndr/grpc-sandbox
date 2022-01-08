import styled from "@emotion/styled";
import Header from "../../Components/Header";
import { Button } from "@apollo/space-kit/Button";
import { colors } from "@apollo/space-kit/colors";
import { IconRun } from "@apollo/space-kit/icons/IconRun";
import { IconCode } from "@apollo/space-kit/icons/IconCode";
import { IconExplorer } from "@apollo/space-kit/icons/IconExplorer";
import { IconBack } from '@apollo/space-kit/icons/IconBack';
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { Telescope } from '@apollo/space-kit/illustrations/Telescope';
import { css } from "@emotion/react";
import { useContext } from "react";
import { ModalContext } from "../../Providers/ModalProvider";

const RequestEditor = styled.div(({ showModal }) => css`
  background-color: #ffffff;
  border-radius: 8px;
  flex: 1;
  height: 97%;
  ${showModal ? 'z-index: -1' : '' };
`);

const ResponseContainer = styled.div(({ showModal }) => css`
  flex: 1;
  height: 97%;
  ${showModal ? 'z-index: -1' : '' };
`);

const Container = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  justify-content: center;
  align-items: center;
`;

const Explorer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: column;
`;

const Operation = styled.div`
  font-family: "Source Sans Pro";
  font-weight: 600;
  font-size: 15px;
  color: #191c23;
  height: 48px;
  display: flex;
  align-items: center;
`;

const Operations = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #dee2e7;
  margin-left: 24px;
  margin-right: 24px;
`;

const Title = styled.div`
  font-family: "Source Sans Pro";
  font-size: 18px;
  font-weight: 600;
  color: #191c23;
  height: 52px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  border-bottom: solid 1px #cad0d8;
`;

const Navigator = styled.div`
  padding: 8px;
  margin-top: 20px;
`;

const Sidebar = styled.div`
  width: 64px;
  height: calc(100% - 23px);
  border-right: solid 1px #cad0d8;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackButton = styled.div`
  cursor: pointer;
  width: 36px; 
  height: 36px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  margin-right: 15px;
  &:hover {
    background-color: #fff;
  }
`

function ExplorerPage() {
  const { showModal } = useContext(ModalContext);
  const code = `
  {
    "test": 123
  }`;
  return (
    <div>
      <Header />
      <Container>
        <Sidebar>
          <a
            href="/!#/schema"
            style={{
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconCode height={20} width={20} color="#5a6270" />
          </a>
          <a
            href="/!#/explorer"
            style={{
              backgroundColor: "#dee2e7",
              borderRadius: 4,
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconExplorer height={20} width={20} color="#5a6270" />
          </a>
        </Sidebar>
        <Explorer>
          <Title>Documentation</Title>
          <Navigator>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                marginBottom: "0.5rem",
                borderBottom: "solid 1px #cad0d8",
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <BackButton>
               <IconBack height={14} width={14} color="#777f8e"/>
              </BackButton>
              Artist
            </div>
            <div
              style={{
                padding: "0.5rem",
                fontFamily: "Source Code Pro",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Find
            </div>
            <div
              style={{
                padding: "0.5rem",
                fontFamily: "Source Code Pro",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              FindAll
            </div>
            <div
              style={{
                padding: "0.5rem",
                fontFamily: "Source Code Pro",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Edit
            </div>
          </Navigator>
        </Explorer>
        <RequestEditor showModal={showModal}>
          <Row>
            <Operations>
              <Operation>Request</Operation>
            </Operations>
            <Button
              style={{ width: 70 }}
              icon={<IconRun height={10} width={10} />}
              size="small"
              color={colors.blue.base}
            >
              Send
            </Button>
          </Row>

          <div style={{ marginLeft: 24, marginRight: 24 }}>
            <CodeMirror
              value={code}
              height="calc(100vh - 150px)"
              extensions={json()}
              onChange={(value, viewUpdate) => {
                console.log("value:", value);
              }}
            />
          </div>
        </RequestEditor>
        <ResponseContainer showModal={showModal}>
          <Row>
            <Operations>
              <Operation>Response</Operation>
            </Operations>
          </Row>
          <div style={{ marginLeft: 24, marginRight: 24 }}>
            <CodeMirror
              editable={false}
              value={code}
              height="calc(100vh - 150px)"
              extensions={json()}
              onChange={(value, viewUpdate) => {
                console.log("value:", value);
              }}
            />
          </div>
        </ResponseContainer>
      </Container>
    </div>
  );
}

export default ExplorerPage;
