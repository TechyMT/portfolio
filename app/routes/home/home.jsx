import noteSyncTexture from '~/assets/main-Notesync.png';
import noteSyncTextureLarge from '~/assets/main-Notesync.png';
import noteSyncTexturePlaceholder from '~/assets/main-Notesync.png';

import pulzionTextureLarge from '~/assets/pulzion.png';
import pulzionTexturePlaceholder from '~/assets/pulzion.png';
import pulzionTexture from '~/assets/pulzion.png';

import vebusTexture from '~/assets/vebus.png';
import vebusTextureLarge from '~/assets/vebus.png';
import vebusTexturePlaceholder from '~/assets/vebus.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';


export const meta = () => {
  return baseMeta({
    title: 'Software Engineer',
    description: `Portfolio of ${config.name} — a full-stack developer working on web apps with a focus on scalability and visually apealing designs.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Pulzion EMS"
        description="The primary goal of the PULZION’23 website was to host the annual flagship event of PASC which received around 3400+ registrations and 40000+ requests."
        buttonText="View project"
        buttonLink="/projects/pulzion"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${pulzionTexture} 1280w, ${pulzionTextureLarge} 2560w`,
              placeholder: pulzionTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="NoteSync"
        description="NoteSync combines a Notion-like editor and real-time collaboration for up to 100 users, using Yjs, Blocknote, and secure OAuth access. It offers seamless editing, efficient session management with PartyKit, and responsive design through Zustand, prioritizing user experience and security."
        buttonText="View project"
        buttonLink="/projects/notesync"
        model={{
          type: 'laptop',
          alt: 'NoteSync',
          textures: [
            {
              srcSet: `${noteSyncTexture} 375w, ${noteSyncTextureLarge} 750w`,
              placeholder: noteSyncTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="VeBUS"
        description="VeBUS (Very Effective Business Utility Suite) is an AI-powered productivity suite featuring tools for chatting with PDFs, dynamic note-taking, and automated meeting transcriptions."
        buttonText="View project"
        buttonLink="/projects/vebus"
        model={{
          type: 'laptop',
          alt: 'VeBUS',
          textures: [
            {
              srcSet: [vebusTexture, vebusTextureLarge],
              placeholder: vebusTexturePlaceholder,
            },
          ],
        }}
      />
      <div className={styles.button}>
        <Button iconHoverShift href="/projects/allprojects" iconEnd="arrowRight">
          See All projects
        </Button>
      </div>
      {/* )} */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
