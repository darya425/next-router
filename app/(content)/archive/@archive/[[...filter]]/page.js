import NewsList from '@/components/news-list';
import { getAvailableNewsMonths, getNewsForYearAndMonth, getNewsForYear, getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';
import { Suspense } from 'react';

async function FilteredHeader({ month, year }) {
  const avalibleYears = await getAvailableNewsYears();
  let links = avalibleYears;

  if ((year && !avalibleYears.includes(year)) || (month && !getAvailableNewsMonths(year).includes(month))) {
    throw new Error('Invalid filter');
  }

  if (year && !month) {
    links = getAvailableNewsMonths(selectedYear);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function Page({ params }) {
  const { filter } = params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredHeader month={selectedMonth} year={selectedYear} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
