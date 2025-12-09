import { useState } from "react";
import { z } from "zod";
import { formSchema } from "../../schemas/waitlist";
import { FormField } from "../molecules/FormField";
import { SelectField } from "../molecules/SelectField";
import { CheckboxGroup } from "../molecules/CheckboxGroup";
import { Button } from "../atoms/Button";
import { sanitizeFormData } from "../../utils/sanitize";
import {
  WORK_TYPE_OPTIONS,
  PRODUCTIVITY_TOOLS_OPTIONS,
  COMMUNICATION_PLATFORM_OPTIONS,
  TRACK_PERFORMANCE_OPTIONS,
  DESIRED_OUTCOMES_OPTIONS,
  ADOPTION_TIMELINE_OPTIONS,
  PREFERRED_DEMO_TYPE_OPTIONS,
  TEAM_MEMBERS_FOR_DEMO_OPTIONS,
  CUSTOMIZATION_INTEREST_OPTIONS,
  HEAR_ABOUT_OPTIONS,
  FOLLOW_UP_PERMISSION_OPTIONS,
  FIELD_OPTIONS_MAP,
} from "../../constants/formOptions";

type FormData = z.infer<typeof formSchema>;

function Form() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    companyName: "",
    teamSize: "",
    workType: "",
    productivityTools: [],
    communicationPlatform: [],
    biggestChallenge: "",
    trackPerformance: [],
    desiredOutcomes: [],
    adoptionTimeline: "",
    aiFeatures: "",
    preferredDemoType: "",
    teamMembersForDemo: "",
    customizationInterest: "",
    hearAbout: "",
    followUpPermission: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // Don't sanitize during typing - only sanitize before submission
    // This allows users to type spaces and other characters normally
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[name] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [name]: newValues };
    });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("idle");

    // Sanitize all form data before validation
    const sanitizedData = sanitizeFormData(formData, FIELD_OPTIONS_MAP);

    const result = formSchema.safeParse(sanitizedData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const googleFormData = new FormData();
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_EMAIL}`,
        sanitizedData.email
      );
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_COMPANY_NAME}`,
        sanitizedData.companyName
      );
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_TEAM_SIZE}`,
        sanitizedData.teamSize
      );
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_WORK_TYPE}`,
        sanitizedData.workType
      );
      sanitizedData.productivityTools.forEach((tool) => {
        googleFormData.append(
          `entry.${import.meta.env.VITE_ENTRY_PRODUCTIVITY_TOOLS}`,
          tool
        );
      });
      sanitizedData.communicationPlatform.forEach((platform) => {
        googleFormData.append(
          `entry.${import.meta.env.VITE_ENTRY_COMMUNICATION_PLATFORM}`,
          platform
        );
      });
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_BIGGEST_CHALLENGE}`,
        sanitizedData.biggestChallenge
      );
      sanitizedData.trackPerformance.forEach((method) => {
        googleFormData.append(
          `entry.${import.meta.env.VITE_ENTRY_TRACK_PERFORMANCE}`,
          method
        );
      });
      sanitizedData.desiredOutcomes.forEach((outcome) => {
        googleFormData.append(
          `entry.${import.meta.env.VITE_ENTRY_DESIRED_OUTCOMES}`,
          outcome
        );
      });
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_ADOPTION_TIMELINE}`,
        sanitizedData.adoptionTimeline
      );
      if (sanitizedData.aiFeatures)
        googleFormData.append(
          `entry.${import.meta.env.VITE_ENTRY_AI_FEATURES}`,
          sanitizedData.aiFeatures
        );
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_PREFERRED_DEMO_TYPE}`,
        sanitizedData.preferredDemoType
      );
      if (sanitizedData.teamMembersForDemo)
        googleFormData.append(
          `entry.${import.meta.env.VITE_ENTRY_TEAM_MEMBERS_FOR_DEMO}`,
          sanitizedData.teamMembersForDemo
        );
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_CUSTOMIZATION_INTEREST}`,
        sanitizedData.customizationInterest
      );
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_HEAR_ABOUT}`,
        sanitizedData.hearAbout
      );
      googleFormData.append(
        `entry.${import.meta.env.VITE_ENTRY_FOLLOW_UP_PERMISSION}`,
        sanitizedData.followUpPermission
      );

      await fetch(
        `https://docs.google.com/forms/d/e/${
          import.meta.env.VITE_GOOGLE_FORM_ID
        }/formResponse`,
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors",
        }
      );

      setSubmitStatus("success");
      setFormData({
        email: "",
        companyName: "",
        teamSize: "",
        workType: "",
        productivityTools: [],
        communicationPlatform: [],
        biggestChallenge: "",
        trackPerformance: [],
        desiredOutcomes: [],
        adoptionTimeline: "",
        aiFeatures: "",
        preferredDemoType: "",
        teamMembersForDemo: "",
        customizationInterest: "",
        hearAbout: "",
        followUpPermission: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <img
          src="/logo.svg"
          alt="logo"
          className="size-[28px] md:size-[35.2px]"
        />
        <h3 className="text-black text-[28px] md:text-[35.2px] font-medium">
          Prodily
        </h3>
      </div>
      <div className="mt-6 md:mt-[40px]">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50.72px] font-bold leading-tight">
          Secure Your Spot for Prodily
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[22px] font-normal text-[#3A404D] mt-3 md:mt-4">
          Be among the first to experience Prod AI and get special launch
          benefits. We'll only use your email to notify you when we go live.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#FFFFFF] max-h-[500px] sm:max-h-[550px] md:max-h-[579px] overflow-auto rounded-xl p-4 sm:p-6 md:p-[24px] flex flex-col gap-4 md:gap-5 mt-6 md:mt-[40px]"
      >
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="your.email@company.com"
        />

        <FormField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          error={errors.companyName}
          required
          placeholder="Your company name"
        />

        <FormField
          label="Team Size"
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
          error={errors.teamSize}
          required
          placeholder="e.g., 10-50"
        />

        <SelectField
          label="Work Type"
          name="workType"
          value={formData.workType}
          onChange={handleChange}
          options={WORK_TYPE_OPTIONS}
          error={errors.workType}
          required
          placeholder="Select work type"
        />

        <CheckboxGroup
          label="Current Productivity Tools"
          name="productivityTools"
          options={PRODUCTIVITY_TOOLS_OPTIONS}
          selectedValues={formData.productivityTools}
          onChange={(value) => handleCheckboxChange("productivityTools", value)}
          error={errors.productivityTools}
          required
        />

        <CheckboxGroup
          label="Current Communication Platform"
          name="communicationPlatform"
          options={COMMUNICATION_PLATFORM_OPTIONS}
          selectedValues={formData.communicationPlatform}
          onChange={(value) =>
            handleCheckboxChange("communicationPlatform", value)
          }
          error={errors.communicationPlatform}
          required
        />

        <FormField
          label="What is your biggest challenge in managing team productivity and growth?"
          name="biggestChallenge"
          value={formData.biggestChallenge}
          onChange={handleChange}
          error={errors.biggestChallenge}
          required
          multiline
          rows={4}
          placeholder="Describe your biggest challenge..."
        />

        <CheckboxGroup
          label="How do you currently track team performance and growth?"
          name="trackPerformance"
          options={TRACK_PERFORMANCE_OPTIONS}
          selectedValues={formData.trackPerformance}
          onChange={(value) => handleCheckboxChange("trackPerformance", value)}
          error={errors.trackPerformance}
          required
        />

        <CheckboxGroup
          label="What outcomes are you hoping to achieve with an AI productivity platform like Prodily?"
          name="desiredOutcomes"
          options={DESIRED_OUTCOMES_OPTIONS}
          selectedValues={formData.desiredOutcomes}
          onChange={(value) => handleCheckboxChange("desiredOutcomes", value)}
          error={errors.desiredOutcomes}
          required
        />

        <SelectField
          label="How soon are you looking to adopt an AI-powered productivity solution?"
          name="adoptionTimeline"
          value={formData.adoptionTimeline}
          onChange={handleChange}
          options={ADOPTION_TIMELINE_OPTIONS}
          error={errors.adoptionTimeline}
          required
          placeholder="Select timeline"
        />

        <FormField
          label="Any specific AI-driven features you are interested in?"
          name="aiFeatures"
          value={formData.aiFeatures}
          onChange={handleChange}
          placeholder="e.g., Predictive analytics, Smart scheduling"
        />

        <SelectField
          label="Preferred demo type"
          name="preferredDemoType"
          value={formData.preferredDemoType}
          onChange={handleChange}
          options={PREFERRED_DEMO_TYPE_OPTIONS}
          error={errors.preferredDemoType}
          required
          placeholder="Select demo type"
        />

        <SelectField
          label="How many team members would join the demo?"
          name="teamMembersForDemo"
          value={formData.teamMembersForDemo}
          onChange={handleChange}
          options={TEAM_MEMBERS_FOR_DEMO_OPTIONS}
          placeholder="Select number"
        />

        <SelectField
          label="Are you interested in customizing Prodily for your team or IT environment?"
          name="customizationInterest"
          value={formData.customizationInterest}
          onChange={handleChange}
          options={CUSTOMIZATION_INTEREST_OPTIONS}
          error={errors.customizationInterest}
          required
          placeholder="Select option"
        />

        <SelectField
          label="How did you hear about Prodily?"
          name="hearAbout"
          value={formData.hearAbout}
          onChange={handleChange}
          options={HEAR_ABOUT_OPTIONS}
          error={errors.hearAbout}
          required
          placeholder="Select option"
        />

        <SelectField
          label="Can we follow up with updates and early access info?"
          name="followUpPermission"
          value={formData.followUpPermission}
          onChange={handleChange}
          options={FOLLOW_UP_PERMISSION_OPTIONS}
          error={errors.followUpPermission}
          required
          placeholder="Select option"
        />

        {/* Submit Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-[10px]">
            🎉 Thank you! Your demo request has been submitted. We'll be in
            touch soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-[10px]">
            ❌ Something went wrong. Please try again or contact us directly.
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Submitting..."
        >
          Request Demo
        </Button>
      </form>
    </div>
  );
}

export default Form;
