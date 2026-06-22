import { z } from "zod";

export const ImageSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  url: z.string()
});
export const DisclaimerSchema = z
  .object({
    id: z.number(),
    documentId: z.string(),
    slug: z.string()
  })
  .optional()
  .nullable();
export const LayoutSpacingSchema = z
  .object({
    id: z.number(),
    top: z.enum(["sm", "md", "lg", "xl", "none"]).nullable().optional(),
    bottom: z.enum(["sm", "md", "lg", "xl", "none"]).nullable().optional()
  })
  .optional()
  .nullable();
export const savingsBannerSchema = z.object({
  // title: z.string(),

  preText: z.string().default("Get Up to"),

  valueLabel: z.string().optional(),

  benefitType: z.string().default("Reward Points"),

  savingsValue: z.string({
    error: "Savings value is required"
  }),

  savingsSuffix: z.string().default("Savings"),
  fromColors: z.string().default("#B1ECFF"),
  toColors: z.string().default("#B1ECFF00")
});

const LayoutbackgroundSchema = z.object({
  id: z.number(),
  backgroundType: z.string().nullable().optional(),
  customBg: z.string().nullable().optional(),
  bgColor: z.string().nullable().optional(), // e.g., "#eaeff6"
  bgImage: ImageSchema.nullable().optional()
});

export const layoutSchema = z.object({
  id: z.number(),
  title: z.string().nullable(),
  subtitle: z.string().nullable(),
  viewAllLink: z.string().nullable(),
  viewAllLinkText: z.string().nullable(),
  hasRoundedBorder: z.boolean().nullable(),
  loginRequired: z.union([
    z.literal("none"),
    z.literal("optional"),
    z.literal("required"),
    z.null(),
    z.undefined()
  ]),

  openRedirectUrlInNewTab: z.boolean().nullable(),
  disclaimer_popup: DisclaimerSchema,
  spacing: LayoutSpacingSchema.nullable().optional(),
  savingsBanner: savingsBannerSchema.nullable().optional(),
  background: LayoutbackgroundSchema.nullable().optional(),
  titleGraphic: ImageSchema.nullable().optional()
});
export type SectionLayoutProps = z.infer<typeof layoutSchema>;
export type SavingsBannerProps = z.infer<typeof savingsBannerSchema>;
export type DisclaimerSchemaProps = z.infer<typeof DisclaimerSchema>;
export type LayoutBackgroundProps = z.infer<typeof LayoutbackgroundSchema>;
