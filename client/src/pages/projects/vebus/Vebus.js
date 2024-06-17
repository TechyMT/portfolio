
import billParserBg from 'assets/vebus-2.png';
import billParserMain from 'assets/vebus.png';
import { Footer } from 'components/Footer';
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
  ProjectSectionText,
  ProjectStack,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './receipt-parser.module.css';

const title = 'VeBUS';
const description =
  "VeBUS (Very Effective Business Utility Suite) is an AI-powered productivity suite designed for individuals and businesses. It features PageTalk for chatting with PDFs and integrating conversations into NoteSync; NoteSync for dynamic, collaborative note-taking and automatic storage of Minutes of Meetings (MOMs); and VoiceSync for recording, transcribing, and summarizing meeting dialogues into MOMs.";
const roles = ['Backend Development', 'Product Development', 'Utlity Suite', 'LLM Implementations'];

export const Vebus = () =>
{
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      {/* 30,107,100 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 92 104 255;
              --rgbAccent: 92 104 255;
            }
            [data-theme='light'] {
              --rgbPrimary: 92 104 255;
              --rgbAccent: 92 104 255;
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
              srcSet={[billParserMain, billParserMain]}
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
              <Icon icon={"nextjs"} />
              <Icon icon={"express"} />
              <Icon icon={"nodejs"} />
              <Icon icon={"postgresql"} />
              <Icon icon={"tailwind"} />
              <Icon icon={"reactjs"} />
              <Icon icon={"supabase"} />
              <Icon icon={"redis"} />
              <Icon icon = {"azure"} />
            </ProjectStack>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
