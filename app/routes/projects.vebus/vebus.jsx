import billParserBg from '~/assets/vebus-2.png';
import billParserMain from '~/assets/vebus.png';
import { Footer } from '~/components/footer';
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
import { Fragment} from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './vebus.module.css';
import { Icon } from '~/components/icon';
const title = 'VeBUS';
const description =
  'VeBUS (Very Effective Business Utility Suite) is an AI-powered productivity suite designed for individuals and businesses. It features PageTalk for chatting with PDFs and integrating conversations into NoteSync; NoteSync for dynamic, collaborative note-taking and automatic storage of Minutes of Meetings (MOMs); and VoiceSync for recording, transcribing, and summarizing meeting dialogues into MOMs.';
const roles = [
  'Backend Development',
  'Product Development',
  'Utlity Suite',
  'LLM Implementations',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function Vebus() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --accent: rgb(92 104 255);
            }
            [data-theme='light'] {
              --accent: rgb(92 104 255);
            }
          `,
        }}
      />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={billParserBg}
          srcSet={`${billParserBg.src} 1280w, ${billParserBg.src} 2560w`}
          placeholder={billParserBg}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://impetus-landing-page.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${billParserMain} 1280w, ${billParserMain} 2560w`}
              placeholder={billParserMain}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
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
              <Icon size={100} icon={'postgresql'} />
              <Icon size={100} icon={'tailwind'} />
              <Icon size={100} icon={'reactjs'} />
              <Icon size={100} icon={'supabase'} />
              <Icon size={100} icon={'redis'} />
              <Icon size={100} icon={'azure'} />
            </ProjectStack>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
