import React, { useState } from "react";
import Magnetic from "../../motion/Magnetic";
import { profile } from "../../data/profile";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 rounded-3xl border border-line/10 bg-surface p-7 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <input className="field" type="text" placeholder="Your name" required value={form.name} onChange={set("name")} />
        <input className="field" type="email" placeholder="Your email" required value={form.email} onChange={set("email")} />
      </div>
      <textarea
        className="field resize-none"
        rows={5}
        placeholder="Your message"
        required
        value={form.message}
        onChange={set("message")}
      />
      <Magnetic>
        <button type="submit" data-cursor data-cursor-label="Send" className="btn btn-primary w-fit px-10">
          Send message →
        </button>
      </Magnetic>
    </form>
  );
}
