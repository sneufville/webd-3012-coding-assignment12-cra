/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cardTitle: "Default Card",
    cardContent: "This is some card content",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    cardTitle: "Default Disabled Card",
    cardContent: "This is some card content for a card disabled by default",
    disabled: true,
  },
};
