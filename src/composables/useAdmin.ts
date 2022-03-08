import { computed } from "vue";
import { useRessourceStore } from "@/stores/ressource";
import type IRessource from "@/interfaces/iRessource";

export default function () {
  const ressourceStore = useRessourceStore();

  const validRessources = computed(() => ressourceStore.validRessources);
  const invalidRessources = computed(() => ressourceStore.invalidRessources);

  const deleteRessourceAction = (ressource: IRessource) =>
    ressourceStore.deleteRessource(ressource);

  const validRessourceAction = (ressource: IRessource) => {
    const ressourceUpdated = ressource;
    ressourceUpdated.isValid = true;
    ressourceStore.updateRessource(ressourceUpdated);
  };

  return {
    validRessources,
    invalidRessources,
    deleteRessourceAction,
    validRessourceAction,
  };
}
