/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT
 *  Almost every word on the website lives in this file. Edit the text here and
 *  every page updates — no need to touch the design code.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Central Asia Peace Scholars",
  fullName: "Central Asia Peace Scholars Program",
  shortName: "CA Peace Scholars",
  email: "info.capeacescholars@gmail.com",
  applicationUrl: "https://forms.gle/g6FBeNyZL73jPYMu8",
  applicationDeadline: "September 1, 2026",
  programDates: "September – December 2026",
  description:
    "A 4-month peace education, conflict resolution, and human rights program for young people aged 16–24 from Kyrgyzstan, Kazakhstan, and Tajikistan.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/program", label: "Program Overview" },
  { href: "/apply", label: "Apply" },
  { href: "/contact", label: "Contact Us" },
] as const;

/** "Peace" in the languages of our region. */
export const peaceWords = [
  { word: "Peace", lang: "English" },
  { word: "Мир", lang: "Russian" },
  { word: "Бейбітшілік", lang: "Kazakh" },
  { word: "Тынчтык", lang: "Kyrgyz" },
  { word: "Сулҳ", lang: "Tajik" },
];

export const home = {
  intro:
    "Central Asia Peace Scholars is a 4-month peace education, conflict resolution, and human rights program for young people aged 16-24 from Kyrgyzstan, Kazakhstan, and Tajikistan. Participants will learn about violence and conflict throughout the world, gaining the knowledge, skills, and perspectives necessary to understand complex social, political, and community challenges. Throughout the program, participants will explore the root causes of conflict, peacebuilding strategies, and the role of young people in promoting sustainable peace through lectures, guest speaker presentations, and collaborative projects. Participants will leave the program empowered to advocate for peace in their home countries and with a community of likeminded youth.",
  stats: [
    { value: "4", unit: "months", label: "of weekly learning, September to December" },
    { value: "3", unit: "countries", label: "Kazakhstan, Kyrgyzstan & Tajikistan" },
    { value: "16–24", unit: "years old", label: "young people ready to lead" },
    { value: "2", unit: "languages", label: "sessions in English, some in Russian" },
  ],
  pillars: [
    {
      title: "Root causes of conflict",
      text: "Learn about violence and conflict throughout the world — and the social, political, and community forces that drive it.",
    },
    {
      title: "Peacebuilding strategies",
      text: "Gain the knowledge, skills, and perspectives needed to understand complex challenges and respond to them constructively.",
    },
    {
      title: "Youth as peacemakers",
      text: "Explore the role young people play in promoting sustainable peace — and how to advocate for it in your own community.",
    },
  ],
  formats: [
    { title: "Lectures", text: "Core sessions on peace and conflict studies, international law, and human rights." },
    { title: "Guest speakers", text: "Presentations from people working on peace, justice, and human rights." },
    { title: "Collaborative projects", text: "Work with peers from across the region on shared projects." },
  ],
};

export const countries = [
  { name: "Kazakhstan", peace: "Бейбітшілік", accent: "sun" },
  { name: "Kyrgyzstan", peace: "Тынчтык", accent: "coral" },
  { name: "Tajikistan", peace: "Сулҳ", accent: "mint" },
] as const;

/**
 * TEAM — "About Us" page.
 * Copy each person's details from the "Peace Scholars Local Coordinator
 * Information Form" spreadsheet:
 *   - name:    first name + last initial, e.g. "Kristie M."
 *   - country: the country they represent
 *   - bio:     their short biography
 *   - photo:   drop the image in /public/team/ and put its path here,
 *              e.g. "/team/kristie.jpg". Leave it out to show initials.
 */
export type TeamMember = {
  name: string;
  role: string;
  country: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Program Founder",
    role: "Founder & Program Director",
    country: "Central Asia",
    bio: "Biography coming soon.",
  },
  {
    name: "Kazakhstan Coordinator",
    role: "Country Coordinator",
    country: "Kazakhstan",
    bio: "Biography coming soon.",
  },
  {
    name: "Kyrgyzstan Coordinator",
    role: "Country Coordinator",
    country: "Kyrgyzstan",
    bio: "Biography coming soon.",
  },
  {
    name: "Tajikistan Coordinator",
    role: "Country Coordinator",
    country: "Tajikistan",
    bio: "Biography coming soon.",
  },
];

/**
 * PROGRAM OVERVIEW page.
 * Paste the details from the "Central Asia Peace Scholars 2026" document here.
 * Session dates can be filled in once they are decided.
 */
export const program = {
  summary:
    "Over four months, Peace Scholars meet weekly online to study peace and conflict, international law, and human rights — then put what they learn into practice together.",
  glance: [
    { label: "When", value: "September – December 2026" },
    { label: "Where", value: "Online — join from anywhere" },
    { label: "How often", value: "Weekly sessions" },
    { label: "Language", value: "English, with some sessions in Russian" },
    { label: "Who", value: "Ages 16–24 from Kazakhstan, Kyrgyzstan & Tajikistan" },
    { label: "Format", value: "Lectures, guest speakers & projects" },
  ],
  phases: [
    {
      month: "Month 01",
      title: "Understanding conflict",
      text: "Foundations of peace and conflict studies: how violence and conflict take shape around the world, and the root causes behind them.",
      topics: ["What is peace?", "Types of violence", "Root causes of conflict"],
    },
    {
      month: "Month 02",
      title: "Rights & the rule of law",
      text: "An introduction to human rights and international law — the frameworks the world uses to protect people and resolve disputes.",
      topics: ["Human rights", "International law", "Justice & accountability"],
    },
    {
      month: "Month 03",
      title: "Building peace",
      text: "Peacebuilding strategies and conflict resolution skills, with guest speakers sharing what this work looks like in practice.",
      topics: ["Conflict resolution", "Dialogue & mediation", "Guest speaker sessions"],
    },
    {
      month: "Month 04",
      title: "Youth in action",
      text: "The role of young people in promoting sustainable peace. Scholars work together on collaborative projects and plan how to advocate for peace at home.",
      topics: ["Youth leadership", "Collaborative projects", "Advocacy at home"],
    },
  ],
  outcomes: [
    "Knowledge of peace and conflict studies, international law, and human rights",
    "Skills to analyze complex social, political, and community challenges",
    "Experience collaborating with peers across Central Asia",
    "Confidence to advocate for peace in your home country",
    "A lasting community of like-minded young people",
  ],
  schedule: {
    title: "Session dates",
    note: "Session dates will be announced soon. Sessions run weekly from September through December 2026.",
  },
};

export const apply = {
  eligibility: [
    "Aged 16–24 from Kazakhstan, Kyrgyzstan, or Tajikistan",
    "Interested in peace and conflict studies, international law, and human rights",
    "Able to commit to attending weekly sessions from September – December 2026",
    "Access to internet and a device (computer or phone)",
    "Intermediate level English language abilities (a majority of program sessions will be conducted in English, with some conducted in Russian)",
  ],
};
