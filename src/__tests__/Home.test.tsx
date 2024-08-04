import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/[locale]/page';

jest.mock('next-intl', () => ({
  useTranslations: (namespace: string) => {
    return (key: string) => `${namespace}_${key}`;
  },
}));

describe('Homeコンポーネントのテスト', () => {
  test('コンポーネントがクラッシュせずにレンダリングされる', () => {
    render(<Home />);
    expect(screen.getByText('toppage_title')).toBeInTheDocument();
  });

  test('検索フォームが正しく表示される', () => {
    render(<Home />);
    expect(screen.getByLabelText('search_search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('search_placeholder'),
    ).toBeInTheDocument();
  });

  test('検索範囲のオプションが正しく表示される', () => {
    render(<Home />);
    expect(screen.getByLabelText('search_range_ya')).toBeInTheDocument();
    expect(screen.getByLabelText('search_range_ja')).toBeInTheDocument();
    expect(screen.getByLabelText('search_range_each')).toBeInTheDocument();
    expect(screen.getByLabelText('search_range_all')).toBeInTheDocument();
  });

  test('検索タイプのオプションが正しく表示される', () => {
    render(<Home />);
    expect(screen.getByLabelText('search_type_prefix')).toBeInTheDocument();
    expect(screen.getByLabelText('search_type_partial')).toBeInTheDocument();
    expect(screen.getByLabelText('search_type_suffix')).toBeInTheDocument();
    expect(screen.getByLabelText('search_type_exact')).toBeInTheDocument();
    expect(screen.getByLabelText('search_type_regex')).toBeInTheDocument();
  });
});
