import { Project } from '@slides/projects/types';
import styles from './project-item.module.scss';

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  return (
    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.projectHeader}>
        <span className={styles.projectNumber}>0{index}</span>
        <span className={styles.projectStatus}>{project.status}</span>
      </div>

      <h3>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.techStack}>
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.projectLink}>view project</div>
    </a>
  );
};

export default ProjectItem;
