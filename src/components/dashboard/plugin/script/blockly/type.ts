export interface ToolboxBlock {
  type: string;
}

export interface ToolboxCategory {
  nameid: string;

  name: string;
  color: string;
  icon?: string;
  blocks: ToolboxBlock[];
}
