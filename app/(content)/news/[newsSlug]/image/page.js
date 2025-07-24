import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';

export default async function Page({ params }) {
  const { newsSlug } = params;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
