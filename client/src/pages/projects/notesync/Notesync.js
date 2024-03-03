import blogsBackgroundLarge from 'assets/bg-notesync.png';
import blogsBackgroundPlaceholder from 'assets/bg-notesync.png';
import blogsBackground from 'assets/bg-notesync.png';
import blogsLarge from 'assets/main-Notesync.png';
import blogsMainLargePlaceholder from 'assets/main-Notesync.png';
import noteSyncMain from 'assets/main-Notesync.png';

// import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
// import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Icon } from 'components/Icon';
import
{
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,

  ProjectSectionContent,
  ProjectSectionHeading,

  ProjectStack,
  ProjectTextRow,
} from 'layouts/Project';
// import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
// import styles from './blogs.module.css';

const title = 'NoteSync';
const description =
  "NoteSync is a real-time collaborative note-taking app with a Notion-like editor, supporting up to 100 concurrent users. Powered by Yjs for efficient synchronization and Blocknote with TipTap/ProseMirror for a rich text experience, it ensures seamless collaboration. Session management is handled by PartyKit, and OAuth guarantees secure access. Zustand enhances responsiveness, and the Agile-driven team prioritizes continuous improvement for user satisfaction.";
const roles = ['Real-Time Collaboration', 'WYSIWYG Editor', 'UI/UX'];

export function Notesync()
{
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 96 165 250;
              --rgbAccent: 96 165 250;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[blogsBackground, blogsBackgroundLarge]}
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
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[noteSyncMain, blogsLarge]}
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
              <Icon icon={"nextjs"} />
              <Icon icon={"express"} />
              <Icon icon={"nodejs"} />
              <Icon icon={"mongodb"} />
              <Icon icon={"tailwind"} />
              <Icon icon={"reactjs"} />
              {/* <Icon icon={'zustand'} /> */}
            </ProjectStack>

          </ProjectTextRow>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
