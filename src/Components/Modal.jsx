import { Button } from "@apollo/space-kit/Button";
import { colors } from "@apollo/space-kit/colors";
import { Modal as DefaultModal } from "@apollo/space-kit/Modal";
import { TextField as DefaultTexfield } from "@apollo/space-kit/TextField";
import { IconLink } from "@apollo/space-kit/icons/IconLink";
import styled from "@emotion/styled";
import { useEffect } from "react";

const Title = styled.div`
  color: rgb(25, 28, 35);
  margin-bottom: 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
`;

const Description = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  line-height: 1.53;
  color: rgb(25, 28, 35);
  margin-bottom: 24px;
`;

const Label = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const TextField = styled(DefaultTexfield)`
  width: calc(100% - 32px);
`;


const CustomModal = styled(DefaultModal)`
  z-index: 10;
`;
const Modal = ({ handleSaveSettings, handleClose }) => {
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", this.escFunction, false);
    };
  });

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  return (
    <CustomModal
      size="medium"
      secondaryAction={<Button onClick={handleClose}>Cancel</Button>}
      primaryAction={
        <Button onClick={handleSaveSettings} color={colors.blue.base}>
          Save
        </Button>
      }
    >
      <Title>Connection settings</Title>
      <Description>Update the connection settings for your Sandbox</Description>
      <Label>Endpoint</Label>
      <TextField
        icon={<IconLink color="rgb(149,157,170)" height={16} width={16} />}
        placeholder="ex. localhost:3009"
      />
    </CustomModal>
  );
};

export default Modal;
