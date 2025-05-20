import React from 'react';
import { useTranslation } from 'react-i18next';

import ProjectsContainer from '../../ui/ProjectsContainer/ProjectsContainer';

//---------------------------------------------------------------------

export default function ProjectsSection() {
    const { t } = useTranslation('projects');

    return (
        <div className="projects-section">
            <div className="projects-section__title">
                <h2>{t('title')}</h2>
            </div>
            <ProjectsContainer />
        </div>
    );
}
