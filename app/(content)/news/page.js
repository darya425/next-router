import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/news-list';

export default function Page() {
  return (
    <div>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
