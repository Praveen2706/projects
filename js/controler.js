import view from "./View.js";
import * as model from "./model.js";

const init = () => {
  view.iyalLister();
  view.adhikaramLister();
};
init();

export const controlData = async function (range) {
  await model.loadData(range);
  view.renderResults(model.lst, range);
};
