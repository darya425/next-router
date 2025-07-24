import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news';

export default function DefaultPage() {
  const latestNews = getLatestNews();
  return (
    <div>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </div>
  );
}
