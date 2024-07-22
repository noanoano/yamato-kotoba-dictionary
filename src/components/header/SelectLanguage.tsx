'use client'
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { ChangeEventHandler, startTransition } from "react";

export const SelectLanguage = () => {
  const t = useTranslations('header');
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const ChangeLanguage: ChangeEventHandler<HTMLSelectElement> = (event) => {
    startTransition(() => {
      router.replace(pathname, { locale: event.target.value as "en" | "ja" | "ya" })
    })
  }
  return (
    <form className="max-w-sm mx-auto">
      <label htmlFor="language" className="text-xs">{t('language')}</label>
      <select id="language" onChange={ChangeLanguage} defaultValue={locale} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="ja">{t('language_ja')}</option>
        <option value="en">{t('language_en')}</option>
        <option value="ya">{t('language_ya')}</option>
      </select>
    </form>
  );
}