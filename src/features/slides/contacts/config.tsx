import { Github, Linkedin, Mail } from 'lucide-react';
import { Contact, SocialMedia } from './types';

export const contactLinks: Contact[] = [
  {
    type: SocialMedia.Email,
    label: 'email',
    value: 'olexandrandrichuk@gmail.com',
    href: 'mailto:olexandrandrichuk@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    type: SocialMedia.Linkedin,
    label: 'linkedin',
    value: '/in/oleksandr-andriichuk',
    href: 'https://www.linkedin.com/in/oleksandr-andriichuk-7ba94b224/',
    icon: Linkedin,
    external: true,
  },
  {
    type: SocialMedia.Github,
    label: 'github',
    value: '/dru1dd',
    href: 'https://github.com/dru1dd',
    icon: Github,
    external: true,
  },
];
