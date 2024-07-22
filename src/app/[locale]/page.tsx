import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('toppage');
  const s = useTranslations('search');
  return (
    <section>
      <div className="w-[90%] ms:container mx-auto my-48 md:my-60">
        <h1 className="mb-4 text-4xl font-bold text-center">{t('title')}</h1>
        <form className="mx-auto">
          <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{s('search')}</label>
          <div className="relative max-w-[500px] mx-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="search" name="search-text" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={s('placeholder')} required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{s('search')}</button>
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{s('range')}</h3>
            <div className="flex">
              <div className="flex items-center me-4">
                <input id="search-range-entry" type="radio" value="entry" name="range" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-range-entry" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('range_ya')}</label>
              </div>
              <div className="flex items-center me-4">
                <input id="search-range-trans" type="radio" value="trans" name="range" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-range-trans" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('range_ja')}</label>
              </div>
              <div className="flex items-center me-4">
                <input id="search-range-each" type="radio" value="each" name="range" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-range-each" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('range_each')}</label>
              </div>
              <div className="flex items-center">
                <input id="search-range-all" type="radio" value="all" name="range" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-range-all" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('range_all')}</label>
              </div>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{s('type')}</h3>
            <div className="flex">
              <div className="flex items-center me-4">
                <input id="search-type-prefix" type="radio" value="prefix" name="type" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-type-prefix" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('type_prefix')}</label>
              </div>
              <div className="flex items-center me-4">
                <input id="search-type-partial" type="radio" value="partial" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-type-partial" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('type_partial')}</label>
              </div>
              <div className="flex items-center me-4">
                <input id="search-type-suffix" type="radio" value="suffix" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-type-suffix" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('type_suffix')}</label>
              </div>
              <div className="flex items-center me-4">
                <input id="search-type-exact" type="radio" value="exact" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-type-exact" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('type_exact')}</label>
              </div>
              <div className="flex items-center">
                <input id="search-type-regex" type="radio" value="regex" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="search-type-regex" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s('type_regex')}</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
