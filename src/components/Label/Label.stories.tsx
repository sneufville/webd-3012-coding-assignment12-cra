/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    labelText: "Default Label Text",
    disabled: true,
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },
};

export const Disabled: Story = {
  args: {
    labelText: "Default Disabled Label",
    disabled: true,
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },
};
