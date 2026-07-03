// Single source of truth for perishable product facts used across the site.
// When the product moves (video length, counts, offer terms), update HERE only.
export const facts = {
  brand: "ViewOps AI",
  domain: "viewopsai.com",
  tagline: "The governed AI workforce for back-office operations",
  oneLiner:
    "AI agents that operate your real software the way your team does, on screen, under guardrails you set.",
  trustLine: "Supervised until proven. Autonomous once trusted.",
  // TODO(founder): stand up this mailbox (or swap for the address you want public).
  contactEmail: "hello@viewopsai.com",
  videoMinutes: "4-minute",
  demoApps: "Box, Wave, and Zoho CRM",
  proofClaims: {
    realFootage:
      "Everything on this page is real: live software, real runs, synthetic data. Nothing is ever sent or paid without a human, unless you promote the use case yourself.",
  },
  compliance:
    "SOC 2 and HIPAA control sets are built into the platform. The formal attestation program is underway.",
} as const;
