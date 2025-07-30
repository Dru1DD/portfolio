import { Contact } from '@slides/contacts/types';
import styles from './contact-item.module.scss';

interface ContactItemProps {
  contact: Contact;
}

const ContactItem = ({ contact }: ContactItemProps) => {
  const IconComponent = contact.icon;

  return (
    <a
      key={contact.type}
      href={contact.href}
      target={contact.external ? '_blank' : '_self'}
      rel={contact.external ? 'noopener noreferrer' : undefined}
      className={`${styles.contactLink} ${styles[contact.type]}`}
    >
      <IconComponent className={styles.contactIcon} />
      <span className={styles.contactLabel}>{contact.label}</span>
      <span className={styles.contactValue}>{contact.value}</span>
      <span className={styles.arrow}>→</span>
    </a>
  );
};

export default ContactItem;
