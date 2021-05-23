export default class Storage {
  static identifier = "receivedItems";

  static saveReceivedItem = (item) => {
    const curValue =
      localStorage.getItem(Storage.identifier) != null
        ? JSON.parse(localStorage.getItem(Storage.identifier))
        : [];
    const valToStore = JSON.stringify(Array.of(item, ...curValue));
    localStorage.setItem(Storage.identifier, valToStore);
  };
}
