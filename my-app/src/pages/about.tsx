import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { translations } from '../locales/translations';
import './about.scss';

const About: FC = () => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <h1>{translations[language].aboutTitle}</h1>
            <p>{translations[language].aboutParFirst}</p>
            <p>{translations[language].aboutParSecond}</p>
            <p>{translations[language].aboutParThird}</p>
            <p>{translations[language].aboutParFoutrh}</p>
            <p>{translations[language].aboutParFirst}</p>
            <p>{translations[language].aboutParSecond}</p>
            <p>{translations[language].aboutParThird}</p>
            <p>{translations[language].aboutParFoutrh}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
