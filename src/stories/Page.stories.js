import { within, userEvent } from "@storybook/testing-library";

import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const signupButton = await canvas.getByRole("button", {
      name: /Sign up/i,
    });
    await userEvent.click(signupButton);
    const logoutButton = await canvas.getByRole("button", {
      name: /Log out/i,
    });
    await userEvent.click(logoutButton);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn = {};
