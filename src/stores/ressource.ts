import type IRessource from "@/interfaces/iRessource";
import ressourceService from "@/services/ressourceService";
import { defineStore } from "pinia";

type RootState = {
  ressources: IRessource[];
};

export const useRessourceStore = defineStore({
  id: "ressource",
  state: () =>
    ({
      ressources: [],
    } as RootState),
  getters: {
    validRessources: (state) => {
      return state.ressources.filter((ressource) => ressource.isValid);
    },
    invalidRessources: (state) => {
      return state.ressources.filter((ressource) => !ressource.isValid);
    },
  },
  actions: {
    async loadRessources() {
      const ressources = await ressourceService.getRessources();
      this.ressources = ressources;
    },
    async addRessource(newRessource: IRessource) {
      const ressourceAdded = await ressourceService.addRessource(newRessource);
      if (ressourceAdded) {
        this.ressources.unshift(ressourceAdded);
      }
    },
    async deleteRessource(ressourceToDelete: IRessource) {
      const res = await ressourceService.delteRessource(ressourceToDelete);

      if (res) {
        this.ressources = this.ressources.filter(
          (ressource) => ressource.id !== ressourceToDelete.id
        );
      }
    },
    async updateRessource(ressourceUpdated: IRessource) {
      const res = await ressourceService.updateRessource(ressourceUpdated);

      if (res) {
        const index = this.ressources.indexOf(ressourceUpdated);
        this.ressources[index] = ressourceUpdated;
      }
    },
  },
});
