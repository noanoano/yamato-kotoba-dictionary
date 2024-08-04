import { fireEvent, render, screen, within } from '@testing-library/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

import { SelectLanguage } from '@/components/header/SelectLanguage';

// router mock
jest.mock('@/navigation', () => ({
  useRouter() {
    return {
      replace: () => {},
    };
  },
  usePathname() {
    return '/';
  },
}));

const languages = [
  { view: '日本語', locale: 'ja' },
  { view: '英語', locale: 'en' },
  { view: '大和言葉', locale: 'ya' },
];

const renderSelect = (message: AbstractIntlMessages, locale: string) => {
  return render(
    <NextIntlClientProvider messages={message} locale={locale}>
      <SelectLanguage />
    </NextIntlClientProvider>,
  );
};

describe('ラベル', () => {
  for (const language of languages) {
    const locale_path: string = `@/locales/${language.locale}.json`;
    const message = require(locale_path);
    test(`${language.view}でラベルが表示されているか`, () => {
      renderSelect(message, language.locale);
      expect(screen.getByText(message.header.language)).toBeInTheDocument();
    });
  }
});

describe('セレクト', () => {
  for (const language of languages) {
    const locale_path: string = `@/locales/${language.locale}.json`;
    const message = require(locale_path);
    test(`${language.locale}が選択されている`, () => {
      renderSelect(message, language.locale);
      expect(
        screen.getByDisplayValue(message.header[`language_${language.locale}`]),
      ).toBeInTheDocument();
    });
  }

  for (const language of languages) {
    const locale_path: string = `@/locales/${language.locale}.json`;
    const message = require(locale_path);
    for (const optionLanguage of languages) {
      test(`${language.view}で選択肢に${
        message.header['language_' + optionLanguage.locale]
      }が表示される`, () => {
        renderSelect(message, language.locale);
        const list = screen.getByRole('combobox');
        expect(
          within(list).getByText(optionLanguage.locale),
        ).toBeInTheDocument();
      });
    }
  }

  test('日本語から英語に', () => {
    const message = require('@/locales/ja.json');
    renderSelect(message, 'ja');
    const list = screen.getByRole('combobox');
    fireEvent.change(list, {
      target: { value: 'en' },
    });
    expect(screen.getByDisplayValue('en')).toBeInTheDocument();
  });
});
