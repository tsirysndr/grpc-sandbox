import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import { IconSettings } from "@apollo/space-kit/icons/IconSettings";
import Modal from "./Modal";
import LogoPng from "../Images/logo.png";
import { ModalContext } from "../Providers/ModalProvider";

const Logo = styled.div`
  width: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: Gilroy;
  text-align: center;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b2240;
  height: 48px;
`;

const TextField = styled.input`
  color: #b4c3db;
  height: 28px;
  width: 226px;
  background-color: #1b2240;
  border: solid 1px #566992;
  border-radius: 4px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Source Sans Pro";
  &:focus {
    outline: none;
  }
`;

const Settings = styled.div`
  position: absolute;
  right: 5px;
  top: 4px;
  cursor: pointer;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: #1b2240;
  &:hover {
    background-color: rgb(56, 61, 91);
  }
`;

const UrlInput = styled.div`
  position: relative;
  display: flex;
`;

const Header = (props) => {
  const { showModal, setShowModal }= useContext(ModalContext);
  const handleOpenSettings = () => {
    setShowModal(true);
  };
  const handleSaveSettings = () => {
    setShowModal(false);
  };

  return (
    <TopBar>
      <Logo>
        <img src={LogoPng} />
      </Logo>
      <UrlInput>
        <TextField placeholder="Your endpoint, ex. localhost:3009" />
        <Settings onClick={handleOpenSettings}>
          <IconSettings color="#b4c3db" height={16} width={16} />
        </Settings>
      </UrlInput>
      {showModal && (
        <Modal
          handleClose={() => setShowModal(false)}
          handleSaveSettings={handleSaveSettings}
        />
      )}
    </TopBar>
  );
};

export default Header;
