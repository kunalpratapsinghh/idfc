import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CmsImage } from "./index";

const meta: Meta<typeof CmsImage> = {
  title: "Atoms/CmsImage",
  component: CmsImage,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text", description: "Image source" },
    alt: { control: "text", description: "Alt text" },
    width: { control: "number" },
    height: { control: "number" },
    showBlur: { control: "boolean" }
  },
  args: {
    src: "/images/sblogo.webp",
    alt: "SmartBuy logo",
    width: 200,
    height: 80,
    showBlur: false
  }
};

export default meta;

type Story = StoryObj<typeof CmsImage>;

export const Default: Story = {};
export const WithBlur: Story = {
  args: { showBlur: true }
};
