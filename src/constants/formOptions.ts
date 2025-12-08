/**
 * Form field options for the demo request form
 * These are whitelisted values for dropdowns and checkboxes
 */

export const WORK_TYPE_OPTIONS = ["Remote", "Hybrid", "In-office"] as const;

export const PRODUCTIVITY_TOOLS_OPTIONS = [
  "Asana",
  "Trello",
  "Monday.com",
  "Jira",
  "ClickUp",
  "Notion",
  "Other",
] as const;

export const COMMUNICATION_PLATFORM_OPTIONS = [
  "Slack",
  "Microsoft Teams",
  "Google Chat",
  "Zoom",
  "Discord",
  "Other",
] as const;

export const TRACK_PERFORMANCE_OPTIONS = [
  "Manual reports",
  "Spreadsheets",
  "Performance management software",
  "Project management tools",
  "We don't track it",
  "Other",
] as const;

export const DESIRED_OUTCOMES_OPTIONS = [
  "Increase team productivity",
  "Better task management",
  "Improved collaboration",
  "Data-driven insights",
  "Automate repetitive tasks",
  "Better employee engagement",
  "Other",
] as const;

export const ADOPTION_TIMELINE_OPTIONS = [
  "Immediately",
  "Within 1-3 months",
  "Within 3-6 months",
  "6+ months",
  "Just exploring",
] as const;

export const PREFERRED_DEMO_TYPE_OPTIONS = [
  "Live demo with Q&A",
  "Pre-recorded demo",
  "Hands-on trial",
] as const;

export const TEAM_MEMBERS_FOR_DEMO_OPTIONS = [
  "Just me",
  "2-5",
  "6-10",
  "10+",
] as const;

export const CUSTOMIZATION_INTEREST_OPTIONS = [
  "Yes, very interested",
  "Maybe, depending on cost",
  "No, prefer standard setup",
] as const;

export const HEAR_ABOUT_OPTIONS = [
  "Social media",
  "Search engine",
  "Referral",
  "Event or webinar",
  "Blog or article",
  "Other",
] as const;

export const FOLLOW_UP_PERMISSION_OPTIONS = [
  "Yes, keep me updated",
  "No, just the demo",
] as const;

/**
 * Map of field names to their allowed options
 * Used for validation and sanitization
 */
export const FIELD_OPTIONS_MAP = {
  workType: WORK_TYPE_OPTIONS,
  productivityTools: PRODUCTIVITY_TOOLS_OPTIONS,
  communicationPlatform: COMMUNICATION_PLATFORM_OPTIONS,
  trackPerformance: TRACK_PERFORMANCE_OPTIONS,
  desiredOutcomes: DESIRED_OUTCOMES_OPTIONS,
  adoptionTimeline: ADOPTION_TIMELINE_OPTIONS,
  preferredDemoType: PREFERRED_DEMO_TYPE_OPTIONS,
  teamMembersForDemo: TEAM_MEMBERS_FOR_DEMO_OPTIONS,
  customizationInterest: CUSTOMIZATION_INTEREST_OPTIONS,
  hearAbout: HEAR_ABOUT_OPTIONS,
  followUpPermission: FOLLOW_UP_PERMISSION_OPTIONS,
} as const;
