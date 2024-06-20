import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
// import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import
{ Icon } from 'components/Icon';
import
{
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectStack,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () =>
{
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />


        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectStack>
                <div className={styles.stackGrid}>
                  <Icon icon={"cpp"} />
                  <div>C++</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"python"} />
                  <div>Python</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"javascript"} />
                  <div>JavaScript</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"typescript"} />
                  <div>TypeScript</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"golang"} />
                  <div>Go</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"html"} />
                  <div>HTML</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"css"} />
                  <div>CSS</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"reactjs"} />
                  <div>ReactJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"nextjs"} />
                  <div>NextJs</div>
                </div>

                <div className={styles.stackGrid}>
                  <Icon icon={"express"} />
                  <div>ExpressJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"nodejs"} />
                  <div>NodeJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"postgresql"} />
                  <div>PostgreSQL</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"redis"} />
                  <div>Redis</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"mysql"} />
                  <div>MySQL</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"githubLarge"} />
                  <div>GitHub</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"prisma"} />
                  <div>Prisma</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"tailwind"} />
                  <div>Tailwind</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"firebase"} />
                  <div>Firebase</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"mongodb"} />
                  <div>MongoDB</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"nestjs"} />
                  <div>NestJs</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"docker"} />
                  <div>Docker</div>

                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"aws"} />
                  <div>AWS</div>

                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"azure"} />
                  <div>Azure</div>
                </div>
              </ProjectStack>

            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectStack>
                <div className={styles.stackGrid}>
                  <Icon icon={"photoshop"} />
                  <div>Photoshop</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"illustrator"} />
                  <div>Illustrator</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"premiere"} />
                  <div>Premiere Pro</div>
                </div>
                <div className={styles.stackGrid}>
                  <Icon icon={"figmaLarge"} />
                  <div>Figma</div>
                </div>
              </ProjectStack>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
