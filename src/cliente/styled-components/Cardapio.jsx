import styled from 'styled-components';

const MenuContainer = styled.div`
  margin-bottom: 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const MenuItem = styled.li`
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
  border: 0.7px solid #ccc;
  background-color: #33593778;
  border-radius: 30px;
  color: #ffffff;
  font-size: 24px;

  &:hover {
    background-color: #317e39e0;
  }
`;

const ActionsContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: left;
  margin-top: 100%;
`;

const ActionButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #33593778;
  color: #fff;
  font-size: 24px;
  transition: background-color 0.2s, transform 0.2s;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  &:hover {
    background-color: #186d3d;
    transform: scale(1.1);
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`;

const OrderContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
    z-index: 9999;
  background-color: #ccc;
  padding: 10px;
  border-radius: 50px;
  text-align: left;
  max-width: 300px;

  h4 {
    margin-bottom: 10px;
    color: #000;
    font-size: 32px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

const ConfirmButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background-color: #28a745;
  color: #fff;
  font-size: 20px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #218838;
    transform: scale(1.1);
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;

  &:after {
    flex-basis: calc(25% - 20px);
    margin-right: 20px;
  }
`;

const MenuRow = styled.div`
  flex: 0 0 calc(25% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
`;

export {
    MenuContainer,
    MenuList,
    MenuItem,
    ActionsContainer,
    ActionButton,
    OrderContainer,
    ConfirmButton,
    MenuContent,
    MenuRow
}