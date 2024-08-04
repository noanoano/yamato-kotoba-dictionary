import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { Footer } from '@/components/Footer';

const languages = [
  { view: '日本語', locale: 'ja' },
  { view: '英語', locale: 'en' },
  { view: '大和言葉', locale: 'ya' },
];

describe('サイトタイトル', () => {
  for (const language of languages) {
    const locale_path: string = `@/locales/${language.locale}.json`;
    const message = require(locale_path);
    test(`${language.view}でサイトタイトルが表示されているか`, () => {
      render(
        <NextIntlClientProvider messages={message} locale={language.locale}>
          <Footer />
        </NextIntlClientProvider>,
      );
      expect(screen.getByText(message.footer.title)).toBeInTheDocument();
    });
  }
});

describe('コピーライト', () => {
  for (const language of languages) {
    const locale_path: string = `@/locales/${language.locale}.json`;
    const message = require(locale_path);
    test(`${language.view}でコピーライトが表示されているか`, () => {
      render(
        <NextIntlClientProvider messages={message} locale={language.locale}>
          <Footer />
        </NextIntlClientProvider>,
      );
      expect(screen.getByText(message.footer.copy)).toBeInTheDocument();
    });
  }
});
