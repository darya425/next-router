import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function Page({ params }) {
  const { newsSlug } = params;
  const newsItem = DUMMY_NEWS.find(item => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
