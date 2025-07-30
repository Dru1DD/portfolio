import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

export enum SocialMedia {
    Email = 'email',
    Linkedin = 'linkedin',
    Github = 'github'
}

export interface Contact {
    type: SocialMedia,
    label: string;
    value: string;
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    external: boolean;
}
