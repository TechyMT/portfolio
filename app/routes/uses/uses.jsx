import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
  ProjectStack,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';
import { Icon } from '~/components/icon';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectStack>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'cpp'} />
                  <div>C++</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'python'} />
                  <div>Python</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'javascript'} />
                  <div>JavaScript</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'typescript'} />
                  <div>TypeScript</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'golang'} />
                  <div>Go</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'html'} />
                  <div>HTML</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'css'} />
                  <div>CSS</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'reactjs'} />
                  <div>ReactJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'nextjs'} />
                  <div>NextJs</div>
                </div>

                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'express'} />
                  <div>ExpressJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'nodejs'} />
                  <div>NodeJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'postgresql'} />
                  <div>PostgreSQL</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'redis'} />
                  <div>Redis</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'mysql'} />
                  <div>MySQL</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'githubLarge'} />
                  <div>GitHub</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'prisma'} />
                  <div>Prisma</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'tailwind'} />
                  <div>Tailwind</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'firebase'} />
                  <div>Firebase</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'mongodb'} />
                  <div>MongoDB</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'nestjs'} />
                  <div>NestJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'docker'} />
                  <div>Docker</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'aws'} />
                  <div>AWS</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'azure'} />
                  <div>Azure</div>
                </div>
              </ProjectStack>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectStack>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'photoshop'} />
                  <div>Photoshop</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'illustrator'} />
                  <div>Illustrator</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'premiere'} />
                  <div>Premiere Pro</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon size={100} icon={'figmaLarge'} />
                  <div>Figma</div>
                </div>
              </ProjectStack>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
