import React from 'react';
import styles from './allProjects.module.css';
import Card from 'components/Card/Card';
import printezMain from '../../../assets/logo.png';
import tataPowerMain from '../../../assets/tatapower.png';
import tedxMain from '../../../assets/main.png';

export const AllProjects = () =>
{
    return (
        <div>
            <div className={styles.sectionTitle}>All Projects</div>
            <div className={styles.container}>
                <div>
                    <Card id="card#1" title={"PrinTEZ"} description={"Printing made easy!"} src={printezMain} webLink={"https://printez.netlify.app"} gitLink={"https://github.com/TechyMT/PrinTEZ"} />
                </div>
                <div>
                    <Card id="card#2" title={`Mindspark Hackathon`} description={"Frontend Project made during a 24hr hackathon"} src={tataPowerMain} webLink={"https://tatapowerhackathon.netlify.app/"} gitLink={"https://github.com/TechyMT/circuitSlingers-tataPowerHackathon"} />
                </div>
                <div>
                    <Card id="card#3" title={`TEDxPICT Blogs Website`} description={"Visually appealing blogs website for TEDxPICT"} src={tedxMain} webLink={"https://blogs.tedxpict.in"} gitLink={"https://github.com/TechyMT/"} />
                </div>

            </div>
        </div>
    );
};

