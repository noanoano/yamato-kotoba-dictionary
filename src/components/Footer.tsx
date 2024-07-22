import { useTranslations } from "next-intl";
import Link from "next/link"
export const Footer = () => {
  const t = useTranslations('footer');
  return (
    <>
      <footer className="bg-white rounded-lg shadow shadow-gray-400 dark:shadow-none dark:bg-gray-900 mx-4 mt-auto mb-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">{t('title')}</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">{t('license')}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t('contact')}</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">{t('copy')}</span>
        </div>
      </footer>
    </>
  );
}