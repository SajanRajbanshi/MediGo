import data from "./jsonData.js"

let mainData;

function fetchMainData() {
    try {
      const fetchedData = data;
      mainData = {};
      fetchedData.sort((a, b) => { return a["NAME"] > b["NAME"] ? 1 : -1; });
      for (const i of fetchedData) {
        if (!mainData[i.NAME]) {
          mainData[i.NAME] = i;
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

fetchMainData();

export default {mainData};