import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news';

export default async function DefaultPage() {
  const latestNews = await getLatestNews();
  return (
    <div>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </div>
  );
}
