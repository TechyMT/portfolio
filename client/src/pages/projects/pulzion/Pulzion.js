import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import pulzionMainLarge from 'assets/pulzion.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/pulzion.png';
import pulzionMainDark from 'assets/pulzion.png';
import imageSprLessonBuilderLightLarge from 'assets/pulzion.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/pulzion.png';
import pulzionMain from 'assets/pulzion.png';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
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
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './Pulzion.module.css';


const title = 'Managing a heavy scale event.';
const description =
  "I played a key role in steering the PULZION'23 EMS project towards success. Our aim was to elevate the annual PASC flagship event, handling 3400+ registrations and 40000+ requests. The project embraced a monolithic architecture, featuring vital microservices like mailing, notification, MCQ platform, and an Online Judge. Notably, we optimized daily operations by deploying Linux VMs on Microsoft Azure, ensuring seamless cloud-based functionality.";
const roles = [
  'Backend Development',
  'Frontend Development',
  'Event Management',

];

export const Pulzion = () =>
{
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index =>
  {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        {/* 221,101,20 */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            [data-theme='dark'] {
              --rgbPrimary: 221 101 020;
              --rgbAccent: 221 101 020;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
          }}
        />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://pulzion.co.in/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [pulzionMainDark, pulzionMainLarge]
                  : [pulzionMain, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack Used:</ProjectSectionHeading>
            <ProjectSectionText>
              <Icon icon={"nextjs"} />
              <Icon icon={"express"} />
              <Icon icon={"nodejs"} />
              <Icon icon={"postgresql"} />
              <Icon icon={"docker"} />
              <Icon icon={"aws"} />
              <Icon icon={"azure"} />
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
