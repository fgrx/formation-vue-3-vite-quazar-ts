//@vitest-environment jsdom

import RessourceItem from "../RessourceItem.vue";
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import router from "../../router";

describe(">>>>>>RessourceItem", () => {
  const testRessource = {
    id: "ogop123",
    media: "post",
    lang: "fr",
    title: "Sécuriser une API avec Node.js et JWT",
    image: "https://miro.medium.com/max/1400/0*5hShFb_fod5mdxvH",
    url: "https://medium.com/@sbesnier1901/s%C3%A9curiser-une-api-avec-node-js-et-jwt-15e14d9df109",
    description:
      "Création d’un système simple d’authentification et d’un middleware pour protéger les routes de notre API.",
    rating: 0,
    isTop: false,
    isValid: true,
    date: "2021-02-01 09:00:00",
  };

  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(RessourceItem, {
      props: { ressource: testRessource, isBookmark: false },
      global: {
        plugins: [ElementPlus, router, createPinia()],
      },
    });
  });

  it("should contain a card with a text", () => {
    const title = wrapper.find("[data-test-id='title']").text();
    expect(title).toBe(testRessource.title);
  });

  it("should contain a add to bookmarks button", () => {
    const button = wrapper.find("[data-test-id='addToBookmarks']");
    expect(button.exists()).toBe(true);
  });

  it("should emit an event when bookmark button is clicked", async () => {
    const addButton = wrapper.find("[data-test-id='addToBookmarks']");
    await addButton.trigger("click");
    const eventsEmitted = wrapper.emitted();
    expect(eventsEmitted["add-to-bookmarks"]).toBeTruthy();
  });
});
