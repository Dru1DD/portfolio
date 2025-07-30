export enum ProjectStatus {
    Active = 'active',
    Beta = 'beta',
    Concept = 'concept',
    Closed = 'closed'
}

export interface Project {
    title: string;
    description: string;
    link: string;
    status: ProjectStatus;
    tech: string[];
}
