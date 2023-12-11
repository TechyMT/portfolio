
import billParserBg from 'assets/billBg.png';
import billParserMain from 'assets/billparser.png';
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
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './receipt-parser.module.css';

const title = 'Receipt Parser';
const description =
  "Implemented a feature allowing users to scan bills effortlessly by simply taking a photo. Used OCR technology to accurately extract text from the scanned bill images. Employed a Language Model to enhance the structured data, ensuring improved accuracy and reliability. Stored the structured bill text in a PostgreSQL database for efficient data management and retrieval. Developed the backend using Nest.js, a powerful Node.js framework, with TypeScript for robust and scalable server-side logic";
const roles = ['Backend Development', 'OCR Model Implementation', 'LLM Implementations'];

export const ReceiptParser = () =>
{
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      {/* 30,107,100 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 030 107 100;
              --rgbAccent: 030 107 100;
            }
            [data-theme='light'] {
              --rgbPrimary: 030 107 100;
              --rgbAccent: 030 107 100;
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
          url="https://github.com/TechyMT/ReceiptParser"
          roles={roles}
          linkLabel='View Source Code'
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
            <ProjectSectionText>
              <Icon icon={"nestjs"} />
              <Icon icon={"prisma"} />
              <Icon icon={"nextjs"} />
              <Icon icon={"express"} />
              <Icon icon={"nodejs"} />
              <Icon icon={"postgresql"} />
              <Icon icon={"tailwind"} />
              <Icon icon={"reactjs"} />
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
