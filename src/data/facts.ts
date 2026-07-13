// Single source of truth for perishable product facts used across the site.
// When the product moves (video length, counts, offer terms), update HERE only.
export const facts = {
  brand: "ViewOps AI",
  domain: "viewopsai.com",
  tagline: "The governed AI workforce for back-office operations",
  oneLiner:
    "AI agents that operate your real software the way your team does: on screen, through APIs and tools, under guardrails you set.",
  trustLine: "Supervised until proven. Autonomous once trusted.",
  sovereignLine:
    "Sovereign by default: it runs in your environment, on a model you host. Your data never leaves.",
  audienceLine:
    "Built for regulated back offices: insurance, healthcare, financial services, and any team that cannot ship its data to an AI vendor.",
  // TODO(founder): stand up this mailbox (or swap for the address you want public).
  contactEmail: "sales@viewopsai.com",
  videoMinutes: "6-minute",
  teaserSeconds: "55-second",
  // Bump when media files are replaced in place, so cached copies refresh.
  mediaVersion: "20260712",
  demoApps: "Box, Wave, and a synthetic claims stack (payer API, claims warehouse, MCP service)",
  demoAppsGloss:
    "standing in for the document, accounting, and claims systems your team already uses",
  proofClaims: {
    realFootage:
      "Everything on this page is real: live software, real runs, synthetic data. Payment and purchase decisions always remain with your people, in every mode.",
  },
  compliance:
    "SOC 2 and HIPAA control sets are built into the platform. The formal attestation program is underway.",
} as const;
