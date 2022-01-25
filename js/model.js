export let lst = [];

export const loadData = async function (range) {
  if (lst.length > 0) {
    lst = [];
  }
  for (let i = range - 9; i <= range; i++) {
    const fetchData = async function () {
      const rawdata = await fetch(
        `https://api-thirukkural.vercel.app/api?num=${i}`
      );
      const data = await rawdata.json();
      lst.push(arrangeData(data));
      console.log(lst.length);
    };
    await fetchData();
  }
};

const arrangeData = function (data) {
  return {
    number: data.number,
    line1: data.line1,
    line2: data.line2,
    tam_exp: data.tam_exp,
    eng: data.eng,
    eng_exp: data.eng_exp,
  };
};
