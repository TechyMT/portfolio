import blogsBackgroundLarge from '~/assets/bg-notesync.png';
import blogsBackgroundPlaceholder from '~/assets/bg-notesync.png';
import blogsBackground from '~/assets/bg-notesync.png';
import blogsLarge from '~/assets/main-Notesync.png';
import blogsMainLargePlaceholder from '~/assets/main-Notesync.png';
import noteSyncMain from '~/assets/main-Notesync.png';

import { Footer } from '~/components/footer';
import { Icon } from '~/components/icon';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectStack,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './notesync.module.css';

const title = 'NoteSync';
const description =
  'NoteSync is a real-time collaborative note-taking app with a Notion-like editor, supporting up to 100 concurrent users. Powered by Yjs for efficient synchronization and Blocknote with TipTap/ProseMirror for a rich text experience, it ensures seamless collaboration. Session management is handled by PartyKit, and OAuth guarantees secure access. Zustand enhances responsiveness, and the Agile-driven team prioritizes continuous improvement for user satisfaction.';
const roles = ['Real-Time Collaboration', 'WYSIWYG Editor', 'UI/UX'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Notesync = () => {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --accent: rgb(96 165 250);
            }
            [data-theme='light'] {
              --accent: rgb(134 99 23);
            }
          `,
        }}
      />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          srcSet={`${blogsBackground} 1280w, ${blogsBackgroundLarge} 2560w`}
          placeholder={blogsBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Visit the website"
          url="https://notesync-app.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${noteSyncMain} 1280w, ${blogsLarge} 2560w`}
              placeholder={blogsMainLargePlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack Used:</ProjectSectionHeading>

            <ProjectStack>
              <Icon size={100} icon={'nextjs'} />
              <Icon size={100} icon={'express'} />
              <Icon size={100} icon={'nodejs'} />
              <Icon size={100} icon={'mongodb'} />
              <Icon size={100} icon={'tailwind'} />
              <Icon size={100} icon={'reactjs'} />
              {/* <Icon icon={'zustand'} /> */}
            </ProjectStack>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
