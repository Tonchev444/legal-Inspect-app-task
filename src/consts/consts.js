export const PAGE_TITLES = {
  "/": "AI Analysis Overview",
  "/cases": "Cases",
  "/legal-search": "Legal Search",
  "/smart-review": "Smart Review",
  "/compliance": "Compliance View",
  "/legal-forms": "Legal Forms",
  "/team": "Team Management",
  "/integrations": "Integrations",
  "/settings": "Settings",
  "/support": "Support Center",
};

export const RELEVANT_CASES = [
  {
    title: "Nova Systems Corp",
    countryCode: "UK",
    year: 2025,
    percentage: 78,
    text: "Clause 5.1",
    state: "win",
  },
  {
    title: "Confidentiality Clause Dispute",
    countryCode: "EU",
    year: 2022,
    percentage: 64,
    text: "Clause 5.2",
    state: "settled",
  },
  {
    title: "TechSoft vs. Orion Ltd",
    countryCode: "UK",
    year: 2024,
    percentage: 51,
    text: "Clause 2.3",
    state: "loss",
  },
  {
    title: "Clause 2.3 Interpratation",
    countryCode: "EU",
    year: 2023,
    percentage: 88,
    text: "-",
    state: "win",
  },
  {
    title: "Helix Innovations Inc.",
    countryCode: "UK",
    year: 2025,
    percentage: 70,
    text: "Clause 7.4",
    state: "settled",
  },
];

export const RELEVANT_CASES_HEADER = [
  { key: "title", label: "Case Name" },
  { key: "countryCode", label: "Juristiction" },
  { key: "year", label: "Year" },
  { key: "percentage", label: "Relavence" },
  { key: "text", label: "Clause Match" },
  { key: "state", label: "Outcome" },
];

export const DATA = [
  { month: "Jan", analyzed: 15, risks: 21 },
  { month: "Feb", analyzed: 17, risks: 25 },
  { month: "Mar", analyzed: 33, risks: 11 },
  { month: "Apr", analyzed: 26, risks: 15 },
  { month: "May", analyzed: 33, risks: 8 },
  { month: "Jun", analyzed: 30, risks: 7 },
  { month: "Jul", analyzed: 39, risks: 20 },
  { month: "Aug", analyzed: 26, risks: 8 },
  { month: "Sep", analyzed: 32, risks: 23 },
  { month: "Oct", analyzed: 12, risks: 18 },
  { month: "Nov", analyzed: 26, risks: 12 },
  { month: "Dec", analyzed: 36, risks: 10 },
];

export const INITIAL_LAST_FILES = [
  {
    id: "1",
    isPdf: true,
    title: "NDA_v3.2_Draft.pdf",
    subtitle: "PDF • 1.1MB",
  },
  {
    id: "2",
    isPdf: false,
    title: "SupplierContract.docx",
    subtitle: "DOC • 0.63MB",
  },
  {
    id: "3",
    isPdf: true,
    title: "NDA_v4.1_Final.pdf",
    subtitle: "PDF • 1.4MB",
  },
];

export const SAMPLE_REWRITES = [
  "This agreement shall remain effective for 12 months unless terminated earlier by mutual written consent.",
  "All confidential information disclosed hereunder shall be protected using industry-standard security measures.",
  "Neither party shall be liable for indirect, incidental, or consequential damages arising from this contract.",
];
