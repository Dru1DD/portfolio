import ScrollIndicator from '@/components/scroll-indicator';
import { projects } from './config';
import styles from './projects.module.scss';
import ProjectItem from './project-item';

const Projects = () => {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.title}>projects</h2>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {duplicatedProjects.map((project, index) => (
            <ProjectItem project={project} index={index} />
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Projects;
