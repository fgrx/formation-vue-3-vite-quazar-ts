//@vitest-environment jsdom

import Login from "../Login.vue";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import router from "../../router";
import authService from "../../services/authService";
import { useAuthStore } from "@/stores/auth";

describe(">>>>>>>>>Login.vue", () => {
  let wrapper: VueWrapper;

  //Mock la fonction push du router en ajoutant un espion.
  //Permet de savoir si la fonction est executée
  router.push = vi.fn();

  beforeEach(() => {
    wrapper = mount(Login, {
      global: {
        plugins: [ElementPlus, createPinia(), router],
      },
    });
  });

  it("should display an error to connect", async () => {
    const submitButton = wrapper.find("[data-test-id='button']");

    const mockAuthService = vi.fn();
    authService.signIn = mockAuthService.mockReturnValue(false);

    await submitButton.trigger("click");

    expect(authService.signIn).toBeCalled();

    const errorMessage = wrapper.find("[data-test-id='errorMessage']");
    expect(errorMessage.exists()).toBe(true);
  });

  it("should redirect", async () => {
    const loginField = wrapper.find("[data-test-id='email']");
    const passwordField = wrapper.find("[data-test-id='password']");
    const submitButton = wrapper.find("[data-test-id='button']");

    await loginField.setValue("admin@gmail.com");
    await passwordField.setValue("goodpassword");

    const mockAuthService = vi.fn();
    const mockCredentials = {
      user: {
        email: "admin@gmail.com",
      },
      accessToken: "123123",
    };

    authService.signIn = mockAuthService.mockReturnValue(mockCredentials);

    await submitButton.trigger("click");

    expect(authService.signIn).toBeCalled();

    const errorMessage = wrapper.find("[data-test-id='errorMessage']");
    expect(errorMessage.exists()).toBe(false);

    //Vérifie que la fonction de mock qui remplace le push a bien été appelée
    expect(router.push).toBeCalled();

    //Vérifie le store
    const authStore = useAuthStore();
    expect(authStore.user.email).toBe(mockCredentials.user.email);
  });
});
