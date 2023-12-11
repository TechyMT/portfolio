import React from 'react';
import styles from './allProjects.module.css';
import Card from 'components/Card/Card';
import printezMain from '../../../assets/logo.png';
import tataPowerMain from '../../../assets/tatapower.png';

export const AllProjects = () =>
{
    return (
        <div>
            <div className={styles.sectionTitle}>All Projects</div>
            <div className={styles.container}>
                <div>
                    <Card title={"PrinTEZ"} description={"Printing made easy!"} src={printezMain} />
                </div>
                <div>
                    <Card title={`Mindspark Hackathon`} description={"Frontend Project made during a 24hr hackathon"} src={tataPowerMain} />
                </div>

            </div>
        </div>
    );
};

