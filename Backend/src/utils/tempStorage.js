class TempStorage {
  constructor() {
    this.tempData = { type: "none", data: "" };
  }

  storeScrapData(data) {
    this.tempData = data;
  }

  getScrapData() {
    return this.tempData;
  }
}

export default new TempStorage();
