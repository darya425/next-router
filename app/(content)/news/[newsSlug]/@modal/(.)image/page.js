import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';
import Backdrop from '@/components/backdrop';

export default async function Page({ params }) {
  const { newsSlug } = params;

  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <Backdrop />
      <dialog className="modal" open>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </dialog>
    </>
  );
}
