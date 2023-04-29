// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary
export const Default: Story = {
  args: {
    color: "default",
    text: "Default",
    //👇 The args you need here will depend on your component
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    text: "Default",
    //👇 The args you need here will depend on your component
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    text: "Default",
    //👇 The args you need here will depend on your component
  },
};
export const Danger: Story = {
  args: {
    color: "danger",
    text: "Default",
    //👇 The args you need here will depend on your component
  },
};
export const WithStartIcon: Story = {
  args: {
    color: "danger",
    text: "Check Out",
    startIcon: "local_grocery_store",
  },
  //👇 The args you need here will depend on your component
};
export const WithEndIcon: Story = {
  args: {
    color: "primary",
    text: "Login",
    endIcon: "login",
  },
};
