import { enableES5, produce } from "immer";

export default (...args) => {
  //immer가 익스플로어에서도 작동할수 있게 하는방법
  enableES5();
  return produce(...args);
};
