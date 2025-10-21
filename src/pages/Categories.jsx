import { useTranslation } from 'react-i18next';

const Categories = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>{t('Categories.title')}</h2>
    </div>
  );
};

// Export default é obrigatório pra importação como você fez
export default Categories;
