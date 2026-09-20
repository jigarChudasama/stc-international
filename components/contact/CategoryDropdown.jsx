"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CategoryDropdown({
  id,
  name,
  label,
  value,
  options,
  placeholder = "Select a category",
  required = false,
  onChange,
}) {
  const listId = `${id}-list`;
  const labelId = `${id}-label`;
  const reactId = useId();
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedIndex = options.indexOf(value);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      listRef.current?.focus();
    }
  }, [open]);

  const selectOption = (option) => {
    onChange(option);
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen((current) => {
      const next = !current;
      if (next) setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
      return next;
    });
  };

  const handleTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
      setOpen(true);
    }
  };

  const handleListKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? options.length - 1 : current - 1));
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectOption(options[activeIndex] ?? options[0]);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={`relative ${open ? "z-30" : "z-0"}`}>
      <span
        id={labelId}
        className="mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-dark"
      >
        {label}
      </span>

      <select
        id={`${id}-native`}
        name={name}
        required={required}
        value={value}
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={`${reactId}-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${labelId} ${id}`}
        onClick={toggleOpen}
        onKeyDown={handleTriggerKeyDown}
        className={`flex w-full cursor-pointer items-center justify-between gap-4 border bg-brand-cream px-4 py-3.5 text-left text-sm outline-none transition-colors ${
          open ? "border-brand-navy" : "border-brand-border hover:border-brand-navy/50 focus-visible:border-brand-navy"
        }`}
      >
        <span className={value ? "text-brand-dark" : "text-brand-gray"}>{value || placeholder}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center border text-brand-gold transition-colors duration-300 ${
            open ? "border-brand-gold bg-brand-header" : "border-brand-border bg-transparent"
          }`}
        >
          <ChevronDown
            size={14}
            strokeWidth={1.5}
            aria-hidden="true"
            className={`transition-transform duration-300 ease-out ${open ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </button>

      <div
        className={`absolute z-30 mt-1 w-full overflow-hidden border border-brand-border bg-brand-cream shadow-[0_12px_28px_rgba(43,43,41,0.1)] transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          className="max-h-64 overflow-y-auto py-1"
        >
          {options.map((option, index) => {
            const selected = option === value;
            const active = index === activeIndex;

            return (
              <li
                key={option}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
                className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm transition-colors ${
                  selected
                    ? "bg-brand-header text-brand-navy"
                    : active
                      ? "bg-brand-header/60 text-brand-dark"
                      : "text-brand-dark"
                }`}
              >
                <span>{option}</span>
                {selected ? (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
