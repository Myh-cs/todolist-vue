import Mock from "mockjs";
import mockData from "../mock";

Mock.setup({ timeout: 500 });

const SetMock = () => {
  mockData.forEach(element => {
    Mock.mock(`${element[0]}`,'get' ,element[1]);
  });
};

export default SetMock;
