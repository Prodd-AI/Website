import z from "zod";

// Zod validation schema
export const formSchema = z.object({
  email: z.email("Please enter a valid email address"),
  companyName: z.string().min(1, "Company name is required"),
  teamSize: z.string().min(1, "Team size is required"),
  workType: z.string().min(1, "Work type is required"),
  productivityTools: z
    .array(z.string())
    .min(1, "Please select at least one productivity tool"),
  communicationPlatform: z
    .array(z.string())
    .min(1, "Please select at least one communication platform"),
  biggestChallenge: z.string().min(1, "Please describe your biggest challenge"),
  trackPerformance: z
    .array(z.string())
    .min(1, "Please select at least one option"),
  desiredOutcomes: z
    .array(z.string())
    .min(1, "Please select at least one desired outcome"),
  adoptionTimeline: z.string().min(1, "Please select an adoption timeline"),
  aiFeatures: z.string().optional(),
  preferredDemoType: z.string().min(1, "Please select a preferred demo type"),
  teamMembersForDemo: z.string().optional(),
  customizationInterest: z
    .string()
    .min(1, "Please select your customization interest"),
  hearAbout: z.string().min(1, "Please let us know how you heard about us"),
  followUpPermission: z
    .string()
    .min(1, "Please select your preference for follow-up"),
});
