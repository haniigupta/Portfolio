export const contributionStats = [
  {
    value: "20+",
    label: "Pull Requests",
  },
  {
    value: "15+",
    label: "Issues Raised",
  },
  {
    value: "10+",
    label: "Repositories",
  },
];

export const organizations = [
  {
    id: 1,
    title: "Open Source Connect Global",
    duration: "Feb 2026 – March 2026",
    prCount: "10+ PRs",
    issueCount: "10+ Issues",
    subtitle: "Primary Contribution Program",

    color: "from-violet-500 to-indigo-500",

    tags: ["React", "Node.js", "UI/UX"],

    repositories: [
      "WalletWise",
      "Innovision",
      "Fleetiva",
      "Fediverse",
    ],
  },

  {
    id: 2,
    title: "Social Summer of Code",
    duration: "Jun 2026 – Aug 2026",
    prCount: "5 PRs",
    issueCount: "4 Issues",

    subtitle:
      "fixing bugs and improving UI/UX and backend reliability.",

    color: "from-cyan-500 to-blue-500",

    tags: ["Next.js", "Backend", "MongoDB"],
    repositories: [
      "DevEvent Tracker",
      "File Sharing System",
    ],
  },

  {
    id: 3,
    title: "GirlScript Summer of Code",
    duration: "May 2026",
    prCount: "1 PR",
    issueCount: "1 Issue",

    subtitle: "Feature card animations",
      

    color: "from-pink-500 to-rose-500",

    tags: ["React", "Animation"],

    repositories: ["Innovision Open Source"],
  },
];

export const featuredPRs = [
  {
    id: 1,
    repository: "WalletWise",

    title:
      "Add reusable ConfirmDialog for modal close confirmation",

    tech: ["React", "UI"],

    type: "Frontend",

    status: "Merged",

    url: "https://github.com/SoumyaMishra-7/WalletWise/pull/237",
  },

  {
    id: 2,

    repository: "Innovision",

    title:
      "Add proper loading component when API fails",

    tech: ["React", "Component Design"],

    type: "Frontend",

    status: "Merged",

    url: "https://github.com/ItsVikasA/Innovision-Open-Source/pull/81",
  },

  {
    id: 3,

    repository: "DevEvent Tracker",

    title:
      "Fix invalid cache & Redis auth loading",

    tech: ["Next.js", "Backend"],

    type: "Bug Fix",

    status: "Merged",

    url: "https://github.com/niharika-mente/DevEvent_Tracker/pull/123",
  },

  {
    id: 4,

    repository: "File Sharing System",

    title:
      "Fix auth loading when Redis is unavailable",

    tech: ["MongoDB", "Node.js"],

    type: "Backend",

    status: "Merged",

    url: "https://github.com/imanchalsingh/File-Sharing-System/pull/29",
  },
];

export const featuredIssues = [
  {
    id: 1,

    repository: "DevEvent Tracker",

    title:
      "Explore Events button does not navigate",

    status: "closed",
  },

  {
    id: 2,

    repository: "File Sharing System",

    title:
      "Hero section buttons are not functional",

    status: "closed",
  },

  {
    id: 3,
    repository: "WalletWise",

    title:
      "Implement delete option for savings goals",

    status: "closed",
  },

  {
    id: 4,

    repository: "Innovision",

    title:
      "Infinite API refetch loop",

    status: "Closed",
  },
];