import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return React.createElement(
    'select',
    {
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => i18n.changeLanguage(e.target.value),
      value: i18n.language,
      className: 'border rounded px-2 py-1'
    },
    React.createElement('option', { value: 'en' }, 'English'),
    React.createElement('option', { value: 'hi' }, 'हिन्दी')
  );
};

export default LanguageSwitcher;
