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
 *   - bio:     their short biography (one string per paragraph)
 *   - photo:   drop the image in /public/team/ and put its path here,
 *              e.g. "/team/kristie.jpg". Leave it out to show initials.
 */
export type TeamMember = {
  name: string;
  role: string;
  country: string;
  /** One string per paragraph. */
  bio: string[];
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Kristie M.",
    role: "Founder",
    country: "United States",
    photo: "/team/kristie.jpg",
    bio: [
      "Kristie Moore is a Mexican-Slovak American from Southern California. She is currently an undergraduate student at the University of California, Berkeley studying Global Studies and Slavic Languages & Literatures. Her specific interests revolve around conflict resolution, mass atrocity prevention, and peacebuilding in Central Asia and the South Caucasus. She is an alumna of the National Security Language Initiative for Youth (NSLI-Y) and Critical Language Scholarship (CLS) programs, a student researcher for UC Berkeley’s Human Rights Investigations Lab, and the founder of Central Asia Peace Scholars. Originally from Irvine, California, Kristie has spent time studying and living in Kyrgyzstan, Kazakhstan, and Tajikistan.",
    ],
  },
  {
    name: "Bekzhan B.",
    role: "Country Coordinator",
    country: "Kazakhstan",
    // Photo coming soon — add /public/team/bekzhan.jpg and set: photo: "/team/bekzhan.jpg"
    bio: [
      "Hello! My name is Bekzhan, and I am an undergraduate student at Al-Farabi Kazakh National University in Kazakhstan, specializing in Chinese Studies with a strong interest in international relations, human rights and politics.",
      "I founded and run a Russian-speaking club for international students from the Philippines, China, and Japan, creating opportunities for language practice and cultural exchange. In addition, I participated in the Russian Language and Area Studies Program (RLASP) through American Councils, where I helped American students improve their Russian language skills, introduced them to Kazakh culture, and accompanied them on educational trips across Kazakhstan.",
      "I am currently participating in the Central Asia Media Literacy Program (CAMLP). This is a 3-month media literacy and journalism exchange program for Central Asian students. I attended lectures on disinformation, misinformation, journalism and human rights. At the moment, I am working on my own project related to human rights field.",
    ],
  },
  {
    name: "Ainazik A.",
    role: "Country Coordinator",
    country: "Kyrgyzstan",
    photo: "/team/ainazik.jpg",
    bio: [
      "My name is Ainazik Azamatova, and I am a Linguistics student specializing in English Language at the International University of Central Asia (IUCA). I am an active member and speaker in Enactus and have participated in international educational and youth initiatives. I also have international work experience through a Ferienjob in Germany, where I worked in a multicultural environment. I am interested in international cooperation, intercultural communication, and youth initiatives. In my free time, I enjoy traveling, exploring new places, and hiking.",
    ],
  },
  {
    name: "Mirzo A.",
    role: "Country Coordinator",
    country: "Tajikistan",
    photo: "/team/mirzo.jpg",
    bio: [
      "My name is Mirzo, and I’m originally from Tajikistan. I serve as the Country Coordinator for Tajikistan, where I support the program’s website, CRM systems, and data analysis to help strengthen operations and track our impact across the region. I’m passionate about connecting Central Asian communities and building tools that help programs like this grow and reach more people. I’m excited to contribute to the program’s work during the 2026-2027 term.",
    ],
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
