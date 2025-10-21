import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>{t('AboutUs.title')}</h2>
    </div>
  );
};

// Export default é obrigatório pra importação como você fez
export default AboutUs;