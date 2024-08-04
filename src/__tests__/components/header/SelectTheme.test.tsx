import { render, screen, fireEvent } from '@testing-library/react';
import { SelectTheme } from '@/components/header/SelectTheme';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

const setThemeMock = jest.fn();

jest.mock('next-theme', () => ({
  __esModule: true,
  default: () => ({
    setTheme: setThemeMock,
    theme: 'light',
  }),
}));

describe('SelectThemeコンポーネント', () => {
  beforeEach(() => {
    setThemeMock.mockClear();
  });

  it('クラッシュせずレンダリングされる', () => {
    render(<SelectTheme />);
    expect(screen.getByLabelText('theme')).toBeInTheDocument();
  });

  it('optionが全て問題なく表示される', () => {
    render(<SelectTheme />);
    expect(screen.getByText('theme_light')).toBeInTheDocument();
    expect(screen.getByText('theme_dark')).toBeInTheDocument();
    expect(screen.getByText('theme_system')).toBeInTheDocument();
  });

  it('テーマの変更が動作する', () => {
    render(<SelectTheme />);
    fireEvent.change(screen.getByLabelText('theme'), {
      target: { value: 'dark' },
    });
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('マウント前に表示されないこと', () => {
    render(<SelectTheme />);
    expect(screen.queryByLabelText('theme')).toBeInTheDocument();
  });
});
