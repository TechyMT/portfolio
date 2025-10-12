import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import pulzionMainLarge from '~/assets/pulzion.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/pulzion.png';
import pulzionMainDark from '~/assets/pulzion.png';
import imageSprLessonBuilderLightLarge from '~/assets/pulzion.png';
import imageSprLessonBuilderLightPlaceholder from '~/assets/pulzion.png';
import pulzionMain from '~/assets/pulzion.png';
import { Footer } from '~/components/footer';
import { Icon } from '~/components/icon';
import { useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
  ProjectStack,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import { Fragment } from 'react';
import styles from './pulzion.module.css';
const title = 'Pulzion EMS';
const description =
  "I played a key role in steering the PULZION'23 EMS project towards success. Our aim was to elevate the annual PASC flagship event, handling 3400+ registrations and 40000+ requests. The project embraced a monolithic architecture, featuring vital microservices like mailing, notification, MCQ platform, and an Online Judge. Notably, we optimized daily operations by deploying Linux VMs on Microsoft Azure, ensuring seamless cloud-based functionality.";
const roles = ['Backend Development', 'Frontend Development', 'Event Management'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Pulzion = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --accent: rgb(221 101 020);
            }
            [data-theme='light'] {
              --accent: rgb(134 99 23);
            }
          `,
        }}
      />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://pulzion.pictacm.in/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${pulzionMainDark} 1280w, ${pulzionMainLarge} 2560w`
                  : `${pulzionMain} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
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

            <ProjectStack>
              <Icon size={100} icon={'nextjs'} />
              <Icon size={100} icon={'express'} />
              <Icon size={100} icon={'nodejs'} />
              <Icon size={100} icon={'postgresql'} />
              <Icon size={100} icon={'docker'} />
              <Icon size={100} icon={'aws'} />
              <Icon size={100} icon={'azure'} />
            </ProjectStack>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
