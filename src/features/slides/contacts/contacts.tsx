import { contactLinks } from './config';
import ContactItem from './contact-item';
import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.note}>
        Available for freelance projects and full-time opportunities. Let's build something amazing together.
      </p>

      <div className={styles.links}>
        {contactLinks.map((contact) => (
          <ContactItem contact={contact} />
        ))}
      </div>

      <div className={styles.availabilityStatus}>
        <div className={styles.statusDot} />
        <span className={styles.statusText}>available for work</span>
      </div>
    </div>
  );
};

export default Contacts;
