import styled from "styled-components";
import sidebarData from "../data/sidebarData";

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <SidebarIcons>
          {sidebarData.map((item) => {
            return (
              <ContainerLi key={item.title}>
                <Button>
                  {item.icon}
                  <Title>{item.title}</Title>
                </Button>
              </ContainerLi>
            );
          })}
        </SidebarIcons>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;

export const SidebarContainer = styled.div`
  height: 100vh;
  background-color: #100f12;
  padding: 20px;
`;

export const SidebarIcons = styled.ul`
  list-style-type: none;
`;

export const ContainerLi = styled.li`
  margin-bottom: 10px;
`;

export const Button = styled.li`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 10px;
  border-radius: 15px;

  svg {
    font-size: 22px;
  }

  &:hover {
    color: black;
    background-color: white;
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 100;
`;
