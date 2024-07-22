'use client'
import { useTranslations } from "next-intl";
import useTheme from "next-theme";
import { ChangeEventHandler, useEffect, useState } from "react";

export const SelectTheme = () => {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('header');
  const { setTheme, theme } = useTheme();

  const ChangeTheme:ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value);
  }

  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) { return null }

  return (
    <div className="max-w-sm mx-auto">
      <label htmlFor="theme" className="text-xs">{t('theme')}</label>
      <select id="theme" onChange={ChangeTheme} value={theme} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="light">{t('theme_light')}</option>
        <option value="dark">{t('theme_dark')}</option>
        <option value="system">{t('theme_system')}</option>
      </select>
    </div>
  );
}