"use client";

import { useId, useState } from "react";
import CategoryDropdown from "@/components/contact/CategoryDropdown";
import { form, productCategoryOptions } from "@/data/contact";

const fieldClass =
  "w-full border border-brand-border bg-brand-cream px-4 py-3.5 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-gray focus:border-brand-navy";

const labelClass =
  "mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-dark";

const initialValues = {
  name: "",
  company: "",
  email: "",
  country: "",
  category: "",
  message: "",
};

export default function InquiryForm() {
  const id = useId();
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`${id}-name`} className={labelClass}>
          {form.fields.name}
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={updateField("name")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${id}-company`} className={labelClass}>
          {form.fields.company}
        </label>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          required
          value={values.company}
          onChange={updateField("company")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${id}-email`} className={labelClass}>
          {form.fields.email}
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={updateField("email")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${id}-country`} className={labelClass}>
          {form.fields.country}
        </label>
        <input
          id={`${id}-country`}
          name="country"
          type="text"
          autoComplete="country-name"
          required
          value={values.country}
          onChange={updateField("country")}
          className={fieldClass}
        />
      </div>

      <CategoryDropdown
        id={`${id}-category`}
        name="category"
        label={form.fields.category}
        value={values.category}
        options={productCategoryOptions}
        required
        onChange={(category) => setValues((current) => ({ ...current, category }))}
      />

      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          {form.fields.message}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={updateField("message")}
          className={`${fieldClass} min-h-[140px] resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-1 w-full border border-brand-navy bg-brand-navy px-6 py-3.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-cream transition-opacity hover:opacity-85"
      >
        {form.submitLabel}
      </button>

      {submitted ? (
        <p className="text-sm text-brand-navy" role="status">
          {form.successMessage}
        </p>
      ) : null}
    </form>
  );
}
