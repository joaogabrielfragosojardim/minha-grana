import styled from "styled-components";
import sidebarData from "../data/sidebarData";
import { IoIosClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

import { Link } from "react-router-dom";

interface sideBarOpenAndClose {
  sideBarOpen: boolean;
}

export const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  function openAndCloseSidebar() {
    sideBarOpen ? setSideBarOpen(false) : setSideBarOpen(true);
  }

  return (
    <>
      <SidebarContainer sideBarOpen={sideBarOpen}>
        <UpIconsContainer>
          <LogoTextContainer>
            <LogoText sideBarOpen={sideBarOpen}>My Money</LogoText>
          </LogoTextContainer>
          <ButtonModal
            onClick={() => {
              openAndCloseSidebar();
            }}
          >
            {sideBarOpen ? <AiOutlineMenu /> : <IoIosClose />}
          </ButtonModal>
        </UpIconsContainer>
        <SidebarIcons>
          {sidebarData.map((item) => {
            return (
              <ContainerLi key={item.title}>
                <Link to={item.path}>
                  <Button>
                    <div>{item.icon}</div>
                    <Title sideBarOpen={sideBarOpen}>{item.title}</Title>
                  </Button>
                </Link>
              </ContainerLi>
            );
          })}
        </SidebarIcons>
      </SidebarContainer>
    </>
  );
};

export const SidebarContainer = styled.div<sideBarOpenAndClose>`
  background-color: #100f12;
  height: 100vh;
  color: white;
  padding: 10px;
  width: ${(props) => (props.sideBarOpen ? "62px" : "250px")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.sideBarOpen ? "center" : "")};
  transition: 1s;

  a {
    text-decoration: none;
  }
`;

export const UpIconsContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 32px;
  }
`;

export const LogoTextContainer = styled.div`
  white-space: nowrap;
`;

export const LogoText = styled.h1<sideBarOpenAndClose>`
  font-size: 22px;
  display: ${(props) => (props.sideBarOpen ? "none" : "inline")};
`;

export const ButtonModal = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  padding: 5px;
`;

export const SidebarIcons = styled.ul`
  list-style-type: none;
`;

export const ContainerLi = styled.li`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px 10px;
  border-radius: 15px;
  background-color: transparent;
  border: none;
  color: white;
  width: 100%;
  svg {
    font-size: 22px;
  }

  &:hover {
    color: black;
    background-color: white;
    cursor: pointer;
  }
`;

export const Title = styled.h3<sideBarOpenAndClose>`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 100;
  display: ${(props) => (props.sideBarOpen ? "none" : "inline")};
`;
