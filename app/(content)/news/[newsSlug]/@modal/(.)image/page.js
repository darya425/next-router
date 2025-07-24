'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';

export default function Page({ params }) {
  const { newsSlug } = params;
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find(item => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}></div>
      <dialog className="modal" open>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </dialog>
    </>
  );
}
