import styled from "@emotion/styled";
import Header from "../../Components/Header";
import { Button } from "@apollo/space-kit/Button";
import { colors } from "@apollo/space-kit/colors";
import { IconUpload } from "@apollo/space-kit/icons/IconUpload";
import { IconCode } from "@apollo/space-kit/icons/IconCode";
import { IconExplorer } from "@apollo/space-kit/icons/IconExplorer";
import { IconBack } from "@apollo/space-kit/icons/IconBack";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/stream-parser";
import { protobuf } from "@codemirror/legacy-modes/mode/protobuf";
import { Telescope } from "@apollo/space-kit/illustrations/Telescope";
import { css } from "@emotion/react";
import { useContext } from "react";
import { ModalContext } from '../../Providers/ModalProvider';

const SchemaContainer = styled.div(
  ({ showModal }) => css`
    background-color: #ffffff;
    border-radius: 8px;
    flex: 1;
    height: 97%;
    margin-left: 2rem;
    margin-right: 2rem;
   ${showModal ? 'z-index: -1' : '' };
  `
);

const Container = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  justify-content: center;
  align-items: center;
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

const Menu = styled.a(
  ({ active }) => css`
    background-color: ${active ? "#dee2e7" : "initial"};
    border-radius: ${active ? 4 : 0}px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

const Placehoder = styled.div`
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Preview = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  height: calc(100% - 50px);
`;

const code = `
package addressbook;

message Address {
   required string street = 1;
   required string postCode = 2;
}

message PhoneNumber {
   required string number = 1;
}

message Person {
   optional int32 id = 1;
   required string name = 2;
   required string surname = 3;
   optional Address address = 4;
   repeated PhoneNumber phoneNumbers = 5;
   optional uint32 age = 6;
   repeated uint32 favouriteNumbers = 7;
   optional string license = 8;
   enum Gender {
      MALE = 0;
      FEMALE = 1;
   }
   optional Gender gender = 9;
   optional fixed64 lastUpdate = 10;
   required bool deleted = 11 [default = false];
}

// The greeter service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}

`;

function Schema() {
  const { showModal } = useContext(ModalContext);
  return (
    <>
      <Header />
      <Container>
        <Sidebar>
          <Menu active href="/!#/schema">
            <IconCode height={20} width={20} color="#5a6270" />
          </Menu>
          <Menu href="/!#/explorer">
            <IconExplorer height={20} width={20} color="#5a6270" />
          </Menu>
        </Sidebar>
        <SchemaContainer showModal={showModal}>
          <Row>
            <Operations>
              <Operation>Protobuf definitions</Operation>
            </Operations>
            <input
              type="file"
              style={{ visibility: "hidden" }}
              name="my_file"
              id="my-file"
            ></input>
            {false && (
              <Button
                style={{ width: 70 }}
                icon={<IconUpload height={10} width={10} />}
                size="small"
                color={colors.blue.base}
              >
                Browse
              </Button>
            )}
          </Row>

          <Preview>
            {true && (
              <CodeMirror
                editable={false}
                value={code}
                height="calc(100vh - 150px)"
                extensions={[StreamLanguage.define(protobuf)]}
                onChange={(value, viewUpdate) => {
                  console.log("value:", value);
                }}
              />
            )}
            {false && (
              <Placehoder>
                <Telescope style={{ height: 300, width: "100%" }} />
              </Placehoder>
            )}
          </Preview>
        </SchemaContainer>
      </Container>
    </>
  );
}

export default Schema;
