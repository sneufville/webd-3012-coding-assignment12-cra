/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: "Default Cell Content",
    disabled: false,
  },
  render: (args) => (
    <Table disabled={args.disabled}>
      <TableHeader disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell
            key={"table-cell-1"}
            disabled={args.disabled}
          >
            Column Heading 1
          </TableCell>
          <TableCell disabled={args.disabled}>Column Heading 2</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  ),
};
