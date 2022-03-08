import type { IUser } from "@/interfaces/IUser";
import { defineStore } from "pinia";

type RootState = {
  user: IUser;
};

export const useAuthStore = defineStore({
  id: "auth",
  state: () =>
    ({
      user: {},
    } as RootState),
  actions: {
    setUser(user: IUser) {
      this.user = user;
    },
  },
});
