// Curated news items for /news. Newest first is handled by the page (sorted by date),
// so items can be appended in any order. Keep entries honest: attributed quotes,
// "as reported by" framing, and a link to the original source for every item.
// Adding a story is a one-entry change here; the page needs no edits.

export interface NewsItem {
  /** ISO date the story was published or the statement was made. */
  date: string;
  /** Who said it or what happened. */
  title: string;
  /** Publication or venue the link points to. */
  source: string;
  url: string;
  /** A short attributed quote or factual summary. No paraphrase presented as quote. */
  quote: string;
  /** One or two sentences connecting the story to sovereign, in-house deployment. */
  whyItMatters: string;
  /** Short label shown as a chip, e.g. the speaker or company. */
  tag: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "2026-07-12",
    title:
      "Satya Nadella says enterprises pay for AI twice: once in money, again in proprietary knowledge",
    source: "Business Standard",
    url: "https://www.business-standard.com/technology/artificial-intelligence/satya-nadella-reverse-information-paradox-ai-risks-126071300520_1.html",
    quote:
      "In an essay he calls the Reverse Information Paradox, the Microsoft CEO writes: \"You essentially pay for intelligence twice, once with money, and again with something even more valuable: the proprietary knowledge you must reveal to make that intelligence useful.\" His prescription is a hard trust boundary in which customers own their data, traces, evals, and adapted weights.",
    whyItMatters:
      "The trust boundary Nadella describes is where ViewOps starts. Agents run in your environment on a model you host, so prompts, corrections, and run history stay yours and compound for you, not for a vendor.",
    tag: "Microsoft",
  },
  {
    date: "2026-07-07",
    title:
      "David Sacks: Karp was \"exactly right\" to warn enterprises against feeding data to frontier labs",
    source: "Benzinga via Yahoo Finance",
    url: "https://finance.yahoo.com/technology/ai/articles/david-sacks-says-palantirs-alex-133106158.html",
    quote:
      "On the All-In Podcast, Sacks argued that real AI safety for an enterprise means control over its compute, models, data stack, and proprietary knowledge, and warned that frontier labs risk absorbing clients' know-how and turning it into competing products.",
    whyItMatters:
      "Owning the stack is not paranoia, it is table stakes. A workforce of agents you host, on infrastructure you control, is the version of AI safety an operations leader can actually verify.",
    tag: "David Sacks",
  },
  {
    date: "2026-07-01",
    title:
      "Palantir CEO Alex Karp: businesses are \"paying for tokens that create no value\" while labs collect their data",
    source: "Tom's Hardware",
    url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/palantir-ceo-alex-karp-claims-ai-companies-are-stealing-customers-data-while-charging-them-for-unproductive-tokens-says-livid-businesses-are-paying-for-tokens-that-create-no-value",
    quote:
      "In a CNBC interview, Karp said executives privately worry that frontier AI companies gain access to their proprietary data and their \"alpha,\" likening the arrangement to a wealth tax on business. He pointed to Figma, which was surprised by a competing product from a lab it had worked closely with.",
    whyItMatters:
      "The fix Karp implies is the deployment model we build for: the model, the runs, and the learning all live inside your boundary, so your alpha never becomes someone else's training data.",
    tag: "Palantir",
  },
  {
    date: "2026-06-17",
    title:
      "Nadella asks whether the future belongs to frontier models or frontier ecosystems",
    source: "Pure AI",
    url: "https://pureai.com/articles/2026/06/17/nadella-asks-will-the-future-of-ai-belong-to-frontier-models-or-frontier-ecosystems.aspx",
    quote:
      "In a post titled \"A frontier without an ecosystem is not stable,\" Nadella argues that enterprises should be able to swap models without losing their institutional intelligence, and that portable knowledge systems, not any single model, are the durable asset.",
    whyItMatters:
      "ViewOps is model-portable by design. The workflows, guardrails, and run evidence belong to you, so the model underneath can change without your operational knowledge walking out the door.",
    tag: "Microsoft",
  },
  {
    date: "2026-04-17",
    title:
      "Anthropic launches Claude Design days after its executive leaves Figma's board",
    source: "Upstarts Media",
    url: "https://www.upstartsmedia.com/p/scoop-how-a-board-departure-and-product",
    quote:
      "As reported by Upstarts Media, Anthropic launched Claude Design, a direct competitor to Figma, three days after Anthropic's chief product officer stepped down from Figma's board. The two companies had been collaborating on product features two months earlier.",
    whyItMatters:
      "A partner one quarter can be a competitor the next. When your AI vendor can see how your business works, the safest assumption is that the boundary you control is the only boundary that holds.",
    tag: "Figma",
  },
  {
    date: "2023-05-02",
    title:
      "Samsung bans ChatGPT and other generative AI after employees leak source code",
    source: "TechCrunch",
    url: "https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/",
    quote:
      "After engineers pasted confidential source code and meeting notes into ChatGPT, Samsung banned external generative AI tools company-wide and said it would build its own in-house AI for software development and translation.",
    whyItMatters:
      "The earliest mainstream lesson in this list, and still the clearest. The answer to employees leaking know-how into public AI is not a ban forever, it is AI that runs where the data already lives.",
    tag: "Samsung",
  },
];
