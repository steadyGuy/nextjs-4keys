import { FC } from "react";
import { getRandomInt, ItemType } from "../../helpers";

export interface IGameItem {
  title: string;
  key: string;
  skin: string,
  image: string,
  type: ItemType,
}

type getItemFromCaseByTypeSignature = (items: IGameItem[], specialItems: IGameItem[], type: ItemType) => IGameItem;

// export const getSouvenirItemByType = (items, type) => {
//   if (items == null || type == null) throw new Error();
//   const allGroupItems = [...items.filter((val) => val.type === type)];
//   const ran = getRandomInt(0, allGroupItems.length);
//   const item = allGroupItems[ran];
//   // const quality = this.getRandomQuality(item);
//   return {
//     ...item,
//     isStatrak: false,
//     isSouvenir: true,
//     // quality,
//   };
// };

export const getItemFromCaseByType: getItemFromCaseByTypeSignature = (items, specialItems, type) => {
  if (!items || !specialItems || !type) throw new Error();

  if (type === ItemType.GOLD) {
    const ran = getRandomInt(0, specialItems.length);
    const item = specialItems[ran];
    return {
      ...item,
    };
  } else {
    const allGroupItems = [...items.filter((val) => val.type === type)];
    const ran = getRandomInt(0, allGroupItems.length);
    const item = allGroupItems[ran];
    return {
      ...item,
    };
  }
};
