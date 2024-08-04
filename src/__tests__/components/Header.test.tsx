import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

jest.mock('@/components/header/SelectLanguage', () => ({
  SelectLanguage: () => <div>Mocked SelectLanguage</div>,
}));

jest.mock('@/components/header/SelectTheme', () => ({
  SelectTheme: () => <div>Mocked SelectTheme</div>,
}));

describe('Headerコンポーネントのテスト', () => {
  test('ヘッダーがクラッシュせずにレンダリングされる', () => {
    render(<Header />);
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  test('リンクが正しく表示される', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'title' })).toBeInTheDocument();
  });

  test('SelectThemeコンポーネントが表示される', () => {
    render(<Header />);
    expect(screen.getByText('Mocked SelectTheme')).toBeInTheDocument();
  });

  test('SelectLanguageコンポーネントが表示される', () => {
    render(<Header />);
    expect(screen.getByText('Mocked SelectLanguage')).toBeInTheDocument();
  });
});
