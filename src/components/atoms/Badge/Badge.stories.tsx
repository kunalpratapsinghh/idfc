import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BadgeWithNumber from "./Badge";

const meta: Meta<typeof BadgeWithNumber> = {
  title: "Atoms/Badge",
  component: BadgeWithNumber,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "Badge label (number or text)"
    },
    className: {
      control: "text",
      description: "Additional Tailwind classes applied to the wrapper"
    }
  },
  args: {
    value: "3"
  }
};

export default meta;

type Story = StoryObj<typeof BadgeWithNumber>;

export const Default: Story = {};
export const TwoDigits: Story = {
  args: { value: "12" }
};
export const CustomSize: Story = {
  args: { value: "7", className: "w-10 h-10" }
};
