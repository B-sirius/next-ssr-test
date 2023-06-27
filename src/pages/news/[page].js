import Stories from '@/components/stories'
import fetchData from '@/lib/fetch-data'
import { useRouter } from 'next/router';

export const getServerSideProps = async () => {
  const storyIds = await fetchData('topstories');

  return {
    props: { storyIds }
  }
}

export default function Page({ storyIds }) {
  const router = useRouter();
  const { page } = router.query;

  return (
    <Stories page={page} storyIds={storyIds} />
  )
}
