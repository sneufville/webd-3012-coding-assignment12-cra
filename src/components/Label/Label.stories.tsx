/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type {Meta, StoryObj} from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label
}
export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    labelText: 'Default Label Text',
  }
}
