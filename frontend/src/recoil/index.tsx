import { atom } from "recoil";

export const alertState = atom<{
  modalState: boolean;
  comment: string;
  bgColor: string;
}>({
  key: "alertState",
  default: {
    modalState: false,
    comment: "",
    bgColor: "",
  },
});

export const timeOutValueState = atom({
  key: "timeOutValueState",
  default: 0,
});
