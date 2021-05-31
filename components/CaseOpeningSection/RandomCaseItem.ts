import { ItemChance } from "../../helpers/chance";
import { ItemType } from "../../helpers";

export const getRandomType = () => {
  const ran = Math.random();
  if (ran < ItemChance.BLUE) return ItemType.BLUE;
  else if (ran < ItemChance.PURPLE) return ItemType.PURPLE;
  // else if (ran < ItemChance.PINK) return ItemType.PINK;
  // else if (ran < ItemChance.RED) return ItemType.RED;
  // else if (ran < ItemChance.GOLD) return ItemType.GOLD;
  else return ItemType.BLUE;
};
