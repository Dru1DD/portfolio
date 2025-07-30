import avatarImgSrc from '@/assets/avatar.jpeg';
import styles from './avatar.module.scss';

const Avatar = () => <img src={avatarImgSrc} className={styles.avatar} alt="avatar" />;

export default Avatar;
