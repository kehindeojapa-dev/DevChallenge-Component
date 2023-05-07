// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Input",
  tags: ["autodocs"],
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

// Primary
export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const WithHelperText: Story = {
  args: {
    helperText: "some interesting text",
  },
};
export const WithHelperTextAndError: Story = {
  args: {
    helperText: "some interesting text",
    error: true,
  },
};
export const StartIcon: Story = {
  args: {
    startIcon: "phone",
  },
};
export const EndIcon: Story = {
  args: {
    endIcon: "lock",
  },
};
export const ValueText: Story = {
  args: {
    value: "text",
  },
};
export const SmallSize: Story = {
  args: {
    size: "sm",
  },
};
export const MediumSize: Story = {
  args: {
    size: "md",
  },
};
export const FullWidth: Story = {
  args: {
    fullwidth: true,
  },
};
export const Multiline: Story = {
  args: {
    multiline: true,
    row: 4,
  },
};
