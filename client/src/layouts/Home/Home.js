
import noteSyncTexture from 'assets/main-Notesync.png';
import noteSyncTextureLarge from 'assets/main-Notesync.png';
import noteSyncTexturePlaceholder from 'assets/main-Notesync.png';

import pulzionTextureLarge from 'assets/pulzion.png';
import pulzionTexturePlaceholder from 'assets/pulzion.png';
import pulzionTexture from 'assets/pulzion.png';

import billTexture from 'assets/billparser.png';
import billTextureLarge from 'assets/billparser.png';
import billTexturePlaceHolder from 'assets/billparser.png';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { Button } from 'components/Button';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Backend Developer', 'Graphic Designer', 'Video Editor', 'Frontend Developer'];

export const Home = () =>
{
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();


  useEffect(() =>
  {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) =>
      {
        entries.forEach(entry =>
        {
          if (entry.isIntersecting)
          {
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
      ([entry]) =>
      {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section =>
    {

      if (section)
        sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () =>
    {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);


  return (
    <div className={styles.home}>
      <Meta
        title="Web Developer"
        description="Portfolio of Mustafa Trunkwala— a full-stack developer working on web apps with a focus on scalability and visually apealing designs."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
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
              srcSet: [pulzionTexture, pulzionTextureLarge
              ],
              placeholder: pulzionTexturePlaceholder
              ,
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
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [noteSyncTexture, noteSyncTextureLarge],
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
        title="Receipt Parser"
        description="Implemented a bill scanning feature using OCR for accurate text extraction, enhanced by a Language Model. Stored structured data in PostgreSQL via Nest.js backend with TypeScript for scalability."
        buttonText="View project"
        buttonLink="/projects/receipt-parser"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [billTexture, billTextureLarge],
              placeholder: billTexturePlaceHolder,
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
