import NewsList from '@/components/news-list';
import { getAllNews } from '@/lib/news';

export default async function Page() {
  const news = await getAllNews();

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
