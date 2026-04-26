"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Script from "next/script";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CountUp } from "./CountUp";
import { SectionHeading } from "./SectionHeading";

const workflowNodes = [
  {
    id: "lead-intake",
    title: "Lead Intake",
    detail:
      "Capture forms, calls, and messages into one stream. No lead gets lost.",
    outputs: [
      "New lead captured from website form",
      "Missed call converted into SMS conversation",
      "Facebook message auto-ingested",
    ],
  },
  {
    id: "ai-qualification",
    title: "AI Qualification",
    detail:
      "Instant intent scoring, conversation summary, and routing by priority.",
    outputs: [
      "High Intent score generated: 92%",
      "Auto summary: Customer needs emergency roof repair",
      "Tagged as Urgent / High Value",
    ],
  },
  {
    id: "sales-activation",
    title: "Sales Activation",
    detail:
      "Auto-schedule follow-ups, notify your team, and trigger downstream ops.",
    outputs: [
      "Appointment scheduled for Tuesday 2:30 PM",
      "Sales rep notified instantly",
      "Follow-up SMS sent automatically",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Identify Gaps",
    detail:
      "We map your existing workflows, find inefficiencies, and quantify revenue leaks.",
  },
  {
    step: "02",
    title: "Build Your System",
    detail:
      "We architect and develop custom AI software around your actual operations.",
  },
  {
    step: "03",
    title: "Implement & Scale",
    detail:
      "We deploy, optimize, and continuously improve performance as your business grows.",
  },
];

const basePerformanceData = [
  { time: "Day 1", leads: 12, converted: 3 },
  { time: "Day 2", leads: 24, converted: 8 },
  { time: "Day 3", leads: 39, converted: 15 },
  { time: "Day 4", leads: 58, converted: 24 },
  { time: "Day 5", leads: 80, converted: 36 },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export function LandingSections() {
  const [activeNode, setActiveNode] = useState(workflowNodes[1]?.id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const activeIndex = useMemo(
    () => workflowNodes.findIndex((n) => n.id === activeNode),
    [activeNode]
  );

  useEffect(() => {
    document.body.style.overflow = isBookingOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBookingOpen]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <AnimatedBackdrop />
      <main id="top" className="relative mx-auto w-full max-w-7xl px-6 pb-28 md:px-10">
        <TopNav onBook={() => setIsBookingOpen(true)} />
        <HeroSection onBook={() => setIsBookingOpen(true)} />

        <section className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="System Failures"
              title="Most Businesses Are Still Running Manually"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["Missed leads", "bg-rose-400/15", "⚠"],
                ["Slow responses", "bg-orange-400/15", "⏳"],
                ["Repetitive admin work", "bg-yellow-400/15", "↻"],
                ["Disconnected systems", "bg-red-400/15", "⟂"],
                ["Human error costing money", "bg-rose-500/20", "✕"],
              ].map(([title, tone, icon], i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-2xl border border-white/10 p-4 transition hover:-translate-y-1 hover:border-rose-300/35 ${tone}`}
                >
                  <span className="text-lg">{icon}</span>
                  <p className="mt-2 text-sm text-zinc-100">{title}</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full bg-rose-300/80"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${72 + i * 4}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="mt-8 text-lg text-zinc-100 md:text-xl">
              These aren&apos;t people problems. They&apos;re system problems.
            </p>
          </motion.div>
        </section>

        <section className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="Transformation"
              title="We Turn Businesses Into AI-Powered Systems"
              description="We don&apos;t just add tools. We redesign your operating layer."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <p className="text-xs tracking-[0.15em] text-zinc-400 uppercase">
                  Before
                </p>
                <h3 className="mt-3 text-xl">Manual and fragmented</h3>
                <ul className="mt-4 space-y-2 text-zinc-300">
                  <li>• Multiple disconnected apps</li>
                  <li>• Slow lead follow-up and dropped opportunities</li>
                  <li>• Repetitive admin blocking growth</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card border-blue-300/30 bg-blue-300/[0.08] p-6"
              >
                <p className="text-xs tracking-[0.15em] text-blue-100 uppercase">
                  After
                </p>
                <h3 className="mt-3 text-xl">Unified AI operating system</h3>
                <ul className="mt-4 space-y-2 text-zinc-100">
                  <li>• Automated lead capture and qualification</li>
                  <li>• Real-time pipeline visibility and prioritization</li>
                  <li>• Scalable workflows without adding overhead</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="workflow" className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="Interactive Workflow"
              title="AI Workflow Operating Layer"
              description="Hover each stage to inspect live behavior and data flow."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="glass-card p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {workflowNodes.map((node, i) => {
                    const active = node.id === activeNode;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onMouseEnter={() => setActiveNode(node.id)}
                        onFocus={() => setActiveNode(node.id)}
                        className={`group rounded-2xl border p-4 text-left transition ${
                          active
                            ? "border-blue-300/55 bg-blue-300/[0.13]"
                            : "border-white/10 bg-white/[0.02] hover:border-blue-300/35"
                        }`}
                      >
                        <p className="text-xs tracking-[0.14em] text-zinc-400 uppercase">
                          Stage {i + 1}
                        </p>
                        <p className="mt-2 text-base font-medium">{node.title}</p>
                        <p className="mt-2 text-sm text-zinc-300">{node.detail}</p>
                        <div className="mt-3 space-y-2">
                          {node.outputs.map((item, outputIndex) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.06 * outputIndex + i * 0.04,
                                duration: 0.35,
                              }}
                              className={`rounded-lg border px-2.5 py-2 text-xs ${
                                active
                                  ? "border-blue-200/35 bg-blue-300/[0.12] text-zinc-100"
                                  : "border-white/10 bg-white/[0.03] text-zinc-300"
                              }`}
                            >
                              {item}
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-300 to-violet-300"
                            animate={{ width: active ? "100%" : "35%" }}
                            transition={{ duration: 0.45 }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm text-zinc-300">
                  {workflowNodes.map((node, i) => (
                    <div key={node.id} className="flex items-center gap-3">
                      <motion.span
                        className="inline-block h-3 w-3 rounded-full"
                        animate={{
                          backgroundColor:
                            i <= activeIndex ? "#93c5fd" : "rgba(255,255,255,0.22)",
                          boxShadow:
                            i <= activeIndex
                              ? "0 0 18px rgba(147,197,253,0.75)"
                              : "none",
                        }}
                      />
                      {i < workflowNodes.length - 1 ? (
                        <span className="h-[1px] w-16 bg-white/15 md:w-24" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <p className="text-xs tracking-[0.14em] text-zinc-400 uppercase">
                  Live Metrics
                </p>
                <div className="mt-4 space-y-4">
                  <MetricRow label="Qualified in under 3s" value={91} />
                  <MetricRow label="Pipeline conversion lift" value={37} />
                  <MetricRow label="Manual workload removed" value={61} />
                </div>
                <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4">
                  <p className="text-sm text-zinc-200">
                    Leads Processed & Converted in Real Time
                  </p>
                  <p className="mt-1 text-xs text-blue-200">
                    +37% conversion lift with AI system
                  </p>
                  <div className="mt-3 h-44 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-2">
                    <PipelineGrowthChart />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading title="What We Do" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Custom AI Software Development",
                  desc: "Tailored AI systems built around your business model and workflows.",
                },
                {
                  title: "Full Business AI Integration",
                  desc: "Connected deployment across sales, operations, and communication.",
                },
                {
                  title: "Automation & Process Streamlining",
                  desc: "Replace manual work with high-leverage systems that compound.",
                },
              ].map((service, i) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group glass-card relative overflow-hidden p-6"
                >
                  <motion.div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/20 blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.75, 0.45] }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                  />
                  <h3 className="text-lg font-medium">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {service.desc}
                  </p>
                  <p className="mt-5 text-xs tracking-[0.14em] text-zinc-400 uppercase">
                    Hover to inspect capability
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="process" className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading
              title="How It Works"
              description="A three-phase system that moves from diagnosis to durable execution."
            />
            <div className="relative mt-10 space-y-5">
              <div className="absolute left-3 top-0 h-full w-px bg-white/15 md:left-[74px]" />
              {process.map((step, i) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[130px_1fr_180px]"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-300/45 bg-blue-300/20 text-xs">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-xl">{step.title}</h3>
                    <p className="mt-2 text-zinc-300">{step.detail}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-zinc-300">
                    <p>Phase {i + 1}</p>
                    <motion.div
                      className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-blue-300 to-violet-300"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${65 + i * 10}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="results" className="section-shell">
          <motion.div {...reveal}>
            <SectionHeading
              title="Built to Drive Real Business Outcomes"
              description="Measured, visual, and operationally meaningful."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="glass-card p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <StatCard
                    label="Pipeline Growth"
                    value={<CountUp prefix="+" to={37} suffix="%" />}
                  />
                  <StatCard
                    label="Response Speed"
                    value={<CountUp to={2} suffix=".3s" />}
                  />
                  <StatCard
                    label="Manual Work Reduced"
                    value={<CountUp prefix="-" to={61} suffix="%" />}
                  />
                  <StatCard
                    label="Revenue Impact"
                    value={<CountUp prefix="$" to={420} suffix="k+" />}
                  />
                </div>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm text-zinc-300">Before vs After Conversion</p>
                <div className="mt-5 grid gap-4">
                  <Bar label="Before (manual)" percent={24} tone="bg-zinc-500/40" />
                  <Bar
                    label="After (AI system)"
                    percent={78}
                    tone="bg-gradient-to-r from-blue-300 to-violet-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="founder" className="section-shell">
          <motion.div
            {...reveal}
            className="glass-card grid gap-7 p-7 md:grid-cols-[180px_1fr]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-transparent to-violet-300/30" />
              <div className="relative flex h-full min-h-44 items-center justify-center text-center">
                <span className="text-xs tracking-[0.15em] text-zinc-200 uppercase">
                  Michael Melillo
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.14em] text-zinc-400 uppercase">
                Founder
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Michael Melillo
              </h2>
              <p className="mt-4 max-w-3xl text-zinc-300">
                Founder of ProSync Digital Solutions with 3+ years of experience
                helping businesses grow through systems, automation, and AI.
              </p>
              <p className="mt-3 text-zinc-300">
                Bachelor&apos;s Degree from Kent State University.
              </p>
              <p className="mt-3 text-zinc-200">
                Focus: Building custom AI systems that replace manual processes and
                help businesses scale efficiently.
              </p>
            </div>
          </motion.div>
        </section>

        <CtaBlock onBook={() => setIsBookingOpen(true)} />
      </main>
      <BookingModal open={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

function TopNav({ onBook }: { onBook: () => void }) {
  return (
    <header className="sticky top-0 z-40 mb-12 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/12 bg-black/25 px-5 py-2.5 shadow-[0_10px_36px_-24px_rgba(102,126,255,0.7)] backdrop-blur-xl">
        <p className="text-sm tracking-[0.15em] text-zinc-200 uppercase">
          ProSync Digital Solutions
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#workflow"
            className="rounded-full border border-white/15 px-4 py-2 text-xs text-zinc-200 transition hover:border-blue-300/45"
          >
            Workflow
          </a>
          <button
            type="button"
            onClick={onBook}
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-blue-100"
          >
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ onBook }: { onBook: () => void }) {
  return (
    <section className="grid min-h-[92vh] items-center gap-10 pb-10 lg:grid-cols-[1.08fr_0.92fr]">
      <motion.div {...reveal}>
        <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-300/[0.12] px-4 py-2 text-xs tracking-[0.14em] text-blue-100 uppercase">
          AI Systems for Scale
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 90, damping: 18 }}
          className="mt-6 text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          {"Custom Software That Fixes Broken Business Systems".split(" ").map(
            (word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 * i,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            )
          )}
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          We design and implement AI-powered systems that capture more leads,
          automate operations, and eliminate revenue leaks across your business.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">
          We don&apos;t sell tools. We build the system your business should have
          been running on from the start.
        </p>
        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
          <button
            type="button"
            onClick={onBook}
            className="cta-btn cta-btn-primary w-full sm:w-auto"
          >
            Book a Call
          </button>
          <a href="#process" className="cta-btn w-full sm:w-auto">
            See How It Works
          </a>
        </div>
        <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
          <MetricChip label="Revenue generated" value={<CountUp prefix="$" to={420} suffix="k+" />} />
          <MetricChip label="Manual work reduced" value={<CountUp prefix="-" to={61} suffix="%" />} />
          <MetricChip label="Avg response time" value={<CountUp to={2} suffix=".3s" />} />
        </div>
      </motion.div>

      <motion.div {...reveal} className="glass-card p-5">
        <p className="text-xs tracking-[0.14em] text-zinc-400 uppercase">
          AI System Simulation
        </p>
        <div className="mt-4 grid gap-4">
          {[
            ["Lead Captured", "23 new leads captured automatically today"],
            ["Qualification Engine", "Leads qualified in 2.3 seconds"],
            [
              "Sales Activation",
              "11 follow-ups and bookings running automatically",
            ],
          ].map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className="rounded-xl border border-white/10 bg-black/25 p-4"
            >
              <p>{label}</p>
              <p className="mt-1 text-sm text-zinc-400">{value}</p>
            </motion.div>
          ))}
          <div className="rounded-xl border border-blue-300/30 bg-blue-300/[0.1] p-4">
            <p className="text-sm text-zinc-200">Live flow health</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-300 to-violet-300"
                animate={{ width: ["24%", "82%", "64%", "90%"] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PipelineGrowthChart() {
  const [data, setData] = useState(basePerformanceData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((point, index) => {
          if (index === 0 || index === prev.length - 1) return point;
          const leadWave = Math.sin(Date.now() / 1000 + index) * 1.8;
          const convWave = Math.sin(Date.now() / 1300 + index) * 1.2;
          const leadJitter = Math.round((Math.random() - 0.5) * 2);
          const convJitter = Math.round((Math.random() - 0.5) * 2);
          return {
            ...point,
            leads: Math.max(4, point.leads + leadWave + leadJitter),
            converted: Math.max(1, point.converted + convWave + convJitter),
          };
        })
      );
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-x-6 top-2 z-0 h-10 rounded-full bg-blue-400/15 blur-2xl" />
      <div className="relative z-10 h-full w-full overflow-hidden rounded-md">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: 14, left: -14, bottom: 2 }}>
          <defs>
            <linearGradient id="leadsStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="convertedStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <filter id="aiGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis
            dataKey="time"
            tick={{ fill: "#9ca3af", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={28}
          />
          <Tooltip
            cursor={{ stroke: "rgba(147,197,253,0.45)", strokeWidth: 1 }}
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(10,12,20,0.92)",
              color: "#e5e7eb",
            }}
            formatter={(value: number, name: string) => [
              `${Math.round(value)} ${
                name === "Leads Converted"
                  ? "leads converted automatically"
                  : "leads captured"
              }`,
              name,
            ]}
            labelFormatter={(label) => `Time: ${label}`}
          />
          <Legend
            iconType="circle"
            verticalAlign="top"
            align="left"
            wrapperStyle={{ fontSize: "11px", color: "#d4d4d8", paddingBottom: "6px" }}
          />
          <Line
            type="monotone"
            dataKey="leads"
            name="Leads Captured"
            stroke="url(#leadsStroke)"
            strokeWidth={2.5}
            isAnimationActive
            animationDuration={1000}
            animationEasing="ease-out"
            dot={{ r: 0 }}
            activeDot={{
              r: 4,
              stroke: "#93c5fd",
              strokeWidth: 2,
              fill: "#0b1020",
            }}
          />
          <Line
            type="monotone"
            dataKey="converted"
            name="Leads Converted"
            stroke="url(#convertedStroke)"
            strokeWidth={3}
            filter="url(#aiGlow)"
            isAnimationActive
            animationDuration={1200}
            animationEasing="ease-out"
            dot={{ r: 0 }}
            activeDot={{
              r: 4,
              stroke: "#c4b5fd",
              strokeWidth: 2,
              fill: "#0b1020",
            }}
          />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function MetricChip({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <p className="text-xl font-semibold text-white">{value}</p>
      <p className="text-xs tracking-[0.12em] text-zinc-400 uppercase">{label}</p>
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm text-zinc-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-300 to-violet-300"
          initial={{ width: "0%" }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs tracking-[0.12em] text-zinc-400 uppercase">{label}</p>
    </div>
  );
}

function Bar({
  label,
  percent,
  tone,
}: {
  label: string;
  percent: number;
  tone: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm text-zinc-300">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={`h-full rounded-full ${tone}`}
          initial={{ width: "0%" }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

function CtaBlock({ onBook }: { onBook: () => void }) {
  return (
    <motion.section
      id="book"
      {...reveal}
      className="mt-6 rounded-3xl border border-blue-300/30 bg-gradient-to-b from-blue-300/20 to-transparent px-8 py-14 text-center"
    >
      <h2 className="text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
        Stop Running Your Business Manually
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-200 md:text-lg">
        Start automating, scaling, and operating with AI.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={onBook} className="cta-btn cta-btn-primary">
          Book a Call
        </button>
        <a href="#workflow" className="cta-btn">
          View Workflow
        </a>
      </div>
    </motion.section>
  );
}

function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 backdrop-blur-md md:p-6"
          onClick={onClose}
        >
          <Script src="https://link.prosyncmint.com/js/form_embed.js" strategy="lazyOnload" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-[96vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-[#090b14] md:h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-sm text-white hover:border-blue-300/60"
            >
              Close
            </button>
            <div className="h-full w-full overflow-y-auto">
              <iframe
                title="Book a call"
                src="https://link.prosyncmint.com/widget/booking/uDdr8BIDekguSUSVNdJm"
                style={{ width: "100%", height: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}

function AnimatedBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(96,123,255,0.22),transparent_36%),radial-gradient(circle_at_86%_8%,rgba(132,105,255,0.16),transparent_32%),#06070d]" />
      <motion.div
        className="pointer-events-none absolute -left-24 top-28 h-80 w-80 rounded-full bg-blue-500/25 blur-[120px]"
        animate={{ x: [0, 70, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-[44rem] h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]"
        animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
    </>
  );
}
