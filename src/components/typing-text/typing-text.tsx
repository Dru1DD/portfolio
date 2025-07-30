import { useState, useEffect } from 'react';
import { Roles } from './config';
import styles from './typing-text.module.scss';

const DeletingSpeed = 40;
const WritingSpeed = 100;
const PauseTime = 1000;

const rolesList = Object.values(Roles);

interface TypingTextProps {
  className?: string;
}

const TypingText = ({ className }: TypingTextProps) => {
  const [text, setText] = useState('');

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = rolesList[roleIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, DeletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rolesList.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, WritingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  return (
    <h1 className={className}>
      I'm <span className={styles.hint}>{text}</span>
      <span className={styles.cursor}>|</span>
    </h1>
  );
};

export default TypingText;
