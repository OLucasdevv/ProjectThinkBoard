import { useTranslation } from 'react-i18next';

const Ideas = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>{t('Ideas.title')}</h2>
    </div>
  );
};

// Export default é obrigatório pra importação como você fez
export default Ideas;
