import blogsBackgroundLarge from 'assets/bg.png';
import blogsBackgroundPlaceholder from 'assets/bg.png';
import blogsBackground from 'assets/bg.png';
import blogsLarge from 'assets/main.png';
import blogsMainLargePlaceholder from 'assets/main.png';
import blogsMain from 'assets/main.png';

import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Icon } from 'components/Icon';
import {
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
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './blogs.module.css';

const title = 'TEDxPICT Blogs Website';
const description =
  "The project focused on creating an impactful online presence by incorporating a visually stunning and fully responsive layout optimized for mobile screens. As a leader, I steered a proficient development team through the entire project lifecycle, ensuring successful completion. To enhance data management, we implemented the Atlas MongoDB cloud database, centralizing and streamlining storage for efficient operations. The project's success was evident in the live website, which consistently handled over 200+ requests per day, underscoring its significance and positive reception in the online space.";
const roles = ['Backend Development', 'Frontend Development', 'UI/UX'];

export function Blogs() {
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
              <Icon icon={"nextjs"} />
              <Icon icon={"express"} />
              <Icon icon={"nodejs"} />
              <Icon icon={"mongodb"} />
              <Icon icon={"tailwind"} />
              <Icon icon={"reactjs"} />
             

            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={[volkiharBook, volkiharBookLarge]}
              placeholder={volkiharBookPlaceholder}
              alt="A book containing a sketch depicting the logo and armor"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Armor alt="3D model of the Volkihar Knight armor" />
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Armor design</ProjectSectionHeading>
              <ProjectSectionText>
                As a player I noticed there weren’t any heavy armor options for the
                Volkihar faction. This kinda sucks when you’ve specialised in heavy armor
                and decide to join the faction and discover they all wear light armor.
              </ProjectSectionText>
              <ProjectSectionText>
                My solution was to create a mod that combines meshes from the Volkihar
                faction armor with heavy plate armor. The mod builds upon textures and
                meshes from the base game, so it unifies with Skyrim’s overall aesthetic.
                I combined and modified the meshes in 3DS Max. To establish a cohesive
                design across the set, I edited existing textures, and designed custom
                textures in Photoshop.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.logoContainer}>
              <VolkiharKnightLogo
                role="img"
                aria-label="The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
              />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Identity design</ProjectSectionHeading>
              <ProjectSectionText>
                The monogram uses custom designed typography to get the right balance of
                weight and angularity. I combined this with Trajan for the text, which is
                also used for Skyrim’s game title wordmark.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={volkiharSlidePlaceholder}
              images={[
                {
                  srcSet: [volkiharSlide1, volkiharSlide1Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [volkiharSlide2, volkiharSlide2Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of the custom gauntlets design.',
                },
                {
                  srcSet: [volkiharSlide3, volkiharSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={[volkiharEnderalLogo, volkiharEnderalLogoLarge]}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Featured in Enderal</ProjectSectionHeading>
              <ProjectSectionText>
                I was super stoked to have my work featured in the major standalone mod
                Enderal, which won best fan creation at the game awards in 2016. Within
                the game my armor design can be found being used for the Wandering Mage
                armor set.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/"
              >
                View on Steam
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
