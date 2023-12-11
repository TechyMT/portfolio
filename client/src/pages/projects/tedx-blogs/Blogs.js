import blogsBackgroundLarge from 'assets/bg.png';
import blogsBackgroundPlaceholder from 'assets/bg.png';
import blogsBackground from 'assets/bg.png';
import blogsLarge from 'assets/main.png';
import blogsMainLargePlaceholder from 'assets/main.png';
import blogsMain from 'assets/main.png';

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
  ProjectSectionText,
  ProjectStack,
  ProjectTextRow,
} from 'layouts/Project';
// import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
// import styles from './blogs.module.css';

const title = 'TEDxPICT Blogs Website';
const description =
  "The project focused on creating an impactful online presence by incorporating a visually stunning and fully responsive layout optimized for mobile screens. As a leader, I steered a proficient development team through the entire project lifecycle, ensuring successful completion. To enhance data management, we implemented the Atlas MongoDB cloud database, centralizing and streamlining storage for efficient operations. The project's success was evident in the live website, which consistently handled over 200+ requests per day, underscoring its significance and positive reception in the online space.";
const roles = ['Backend Development', 'Frontend Development', 'UI/UX'];

export function Blogs()
{
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 255 000 000;
              --rgbAccent: 255 000 000;
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
          url="https://blogs.tedxpict.in/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[blogsMain, blogsLarge]}
              placeholder={blogsMainLargePlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack Used:</ProjectSectionHeading>
            <ProjectSectionText>
              <ProjectStack>
                <Icon icon={"nextjs"} />
                <Icon icon={"express"} />
                <Icon icon={"nodejs"} />
                <Icon icon={"mongodb"} />
                <Icon icon={"tailwind"} />
                <Icon icon={"reactjs"} />
              </ProjectStack>
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
