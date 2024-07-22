import { useTranslations } from "next-intl";
import Link from "next/link";
import { SelectLanguage } from "./header/SelectLanguage";
import { SelectTheme } from "./header/SelectTheme";

export const Header = () => {
  const t = useTranslations('header');
  return (
    <header className="shadow shadow-gray-400 dark:bg-black dark:border-b-gray-600">
      <div className="flex justify-between py-4 mx-4 md:mx-10 items-center">
        <Link href="/">
          <p className="text-lg text-black dark:text-white">{t('title')}</p>
        </Link>
        <div className="flex space-x-2 text-gray-500 items-center">
          <div>
            <SelectTheme />
          </div>
          <div>
            <SelectLanguage />
          </div>
        </div>
      </div>
    </header>
  );
};