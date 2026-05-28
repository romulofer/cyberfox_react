export interface AiTarget {
  name: string;
  filename: string;
}

export const AI_TARGETS: AiTarget[] = [
  { name: "Claude Code", filename: "CLAUDE.md" },
  { name: "Cursor", filename: ".cursorrules" },
  { name: "Windsurf", filename: ".windsurfrules" },
  { name: "Cline", filename: ".clinerules" },
  { name: "GitHub Copilot", filename: "copilot-instructions.md" },
  { name: "Aider", filename: "CONVENTIONS.md" },
  { name: "Devin", filename: "AGENTS.md" },
];

export interface TechStackEntry {
  category: string;
  technology: string;
  versionOrNotes: string;
}

export interface SetupCommand {
  command: string;
  description: string;
}

export interface DocumentationReference {
  title: string;
  url: string;
  description: string;
}

export interface ProjectConfig {
  projectName: string;
  description: string;
  targetAi: AiTarget;
  techStack: TechStackEntry[];
  setupCommands: SetupCommand[];
  coreFeatures: string[];
  acceptanceCriteria: string[];
  whatNotToDo: string[];
  documentationReferences: DocumentationReference[];
}
