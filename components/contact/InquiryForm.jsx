"use client";

import { useId, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CategoryDropdown from "@/components/contact/CategoryDropdown";
import { form, productCategoryOptions } from "@/data/contact";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STRING_REGEX = /^[a-zA-Z\s]*$/;

const fieldClass =
  "w-full border border-brand-border bg-brand-cream px-4 py-3.5 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-gray focus:border-brand-navy";

const fieldErrorClass =
  "w-full border border-brand-gold bg-brand-cream px-4 py-3.5 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-gray focus:border-brand-gold";

const labelClass =
  "mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-dark";

const validationStyle = {
  position: "absolute",
  bottom: "-32px",
  left: 0,
  color: "#2b2b29", // brand-dark
  backgroundColor: "#caa96e", // brand-gold
  padding: "6px 12px",
  fontSize: "12px",
  fontWeight: 600,
  borderRadius: "6px",
  whiteSpace: "nowrap",
  zIndex: 50,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  pointerEvents: "none",
};

const arrowStyle = {
  position: "absolute",
  top: "-4px",
  left: "12px",
  width: 0,
  height: 0,
  borderLeft: "4px solid transparent",
  borderRight: "4px solid transparent",
  borderBottom: "4px solid #caa96e", // brand-gold
};

function ValidationTooltip({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={validationStyle}
    >
      <span style={arrowStyle} />
      {children}
    </motion.div>
  );
}

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
  const [loading, setLoading] = useState(false);

  const [validations, setValidations] = useState({
    name: false,
    company: false,
    email: false,
    country: false,
    category: false,
    message: false,
  });

  const refs = {
    name: useRef(null),
    company: useRef(null),
    email: useRef(null),
    country: useRef(null),
    category: useRef(null),
    message: useRef(null),
  };

  const updateField = (field) => (event) => {
    // CategoryDropdown might pass value directly or event
    const val = event?.target !== undefined ? event.target.value : event;

    // Only allow strings for name and country
    if ((field === "name" || field === "country") && val && !STRING_REGEX.test(val)) {
      return;
    }

    setValues((current) => ({ ...current, [field]: val }));
    setValidations((prev) => ({ ...prev, [field]: false }));
  };

  const checkValidation = (event) => {
    event.preventDefault();

    if (!values.name) {
      setValidations((prev) => ({ ...prev, name: true }));
      refs.name.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!values.company) {
      setValidations((prev) => ({ ...prev, company: true }));
      refs.company.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!values.email || !EMAIL_REGEX.test(values.email)) {
      setValidations((prev) => ({ ...prev, email: true }));
      refs.email.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!values.country) {
      setValidations((prev) => ({ ...prev, country: true }));
      refs.country.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!values.category) {
      setValidations((prev) => ({ ...prev, category: true }));
      refs.category.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!values.message) {
      setValidations((prev) => ({ ...prev, message: true }));
      refs.message.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    submitForm();
  };

  const submitForm = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setSubmitted(true);
        setValues(initialValues);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="flex w-full flex-col gap-5" onSubmit={checkValidation} noValidate>
        <div className="relative" ref={refs.name}>
          <label htmlFor={`${id}-name`} className={labelClass}>
            {form.fields.name} <span className="text-brand-gold">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={updateField("name")}
            className={validations.name ? fieldErrorClass : fieldClass}
          />
          <AnimatePresence>
            {validations.name && (
              <ValidationTooltip>Please enter your name</ValidationTooltip>
            )}
          </AnimatePresence>
        </div>

        <div className="relative" ref={refs.company}>
          <label htmlFor={`${id}-company`} className={labelClass}>
            {form.fields.company} <span className="text-brand-gold">*</span>
          </label>
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={updateField("company")}
            className={validations.company ? fieldErrorClass : fieldClass}
          />
          <AnimatePresence>
            {validations.company && (
              <ValidationTooltip>Please enter your company name</ValidationTooltip>
            )}
          </AnimatePresence>
        </div>

        <div className="relative" ref={refs.email}>
          <label htmlFor={`${id}-email`} className={labelClass}>
            {form.fields.email} <span className="text-brand-gold">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField("email")}
            className={validations.email ? fieldErrorClass : fieldClass}
          />
          <AnimatePresence>
            {validations.email && (
              <ValidationTooltip>
                {values.email ? 'Please enter a valid email address' : 'Please enter your email'}
              </ValidationTooltip>
            )}
          </AnimatePresence>
        </div>

        <div className="relative" ref={refs.country}>
          <label htmlFor={`${id}-country`} className={labelClass}>
            {form.fields.country} <span className="text-brand-gold">*</span>
          </label>
          <input
            id={`${id}-country`}
            name="country"
            type="text"
            autoComplete="country-name"
            value={values.country}
            onChange={updateField("country")}
            className={validations.country ? fieldErrorClass : fieldClass}
          />
          <AnimatePresence>
            {validations.country && (
              <ValidationTooltip>Please enter your country</ValidationTooltip>
            )}
          </AnimatePresence>
        </div>

        <div className="relative" ref={refs.category}>
          <CategoryDropdown
            id={`${id}-category`}
            name="category"
            label={`${form.fields.category} *`}
            value={values.category}
            options={productCategoryOptions}
            onChange={updateField("category")}
          />
          <AnimatePresence>
            {validations.category && (
              <ValidationTooltip>Please select a category</ValidationTooltip>
            )}
          </AnimatePresence>
        </div>

        <div className="relative" ref={refs.message}>
          <label htmlFor={`${id}-message`} className={labelClass}>
            {form.fields.message} <span className="text-brand-gold">*</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={6}
            value={values.message}
            onChange={updateField("message")}
            className={`${validations.message ? fieldErrorClass : fieldClass} min-h-[140px] resize-y`}
          />
          <AnimatePresence>
            {validations.message && (
              <ValidationTooltip>Please enter your message</ValidationTooltip>
            )}
          </AnimatePresence>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-1 w-full border border-brand-navy bg-brand-navy px-6 py-3.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-cream transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : form.submitLabel}
        </button>
      </form>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center bg-black/60 backdrop-blur-sm p-5"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="flex w-full max-w-[420px] flex-col items-center justify-center gap-6 border border-brand-border bg-brand-cream p-10 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-2 h-auto w-32">
                <Image
                  src="/images/stc-logo.png"
                  alt="STC International Logo"
                  width={200}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="mb-3 text-xl font-medium leading-tight text-brand-dark">
                  Thank you!
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray">
                  {form.successMessage || "We have received your inquiry. Our team will get back to you shortly."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 w-full border border-brand-navy bg-brand-navy px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-cream transition-opacity hover:opacity-85"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
