import { useQuery } from 'react-query';

const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2';
const API_KEY = 'YVTkKAKtPz4rq7Tc6fyEZKIPnvAcTi47';

export default function FetchDataViewed(period) {
  const { isLoading, error, data } = useQuery('viewedArticle', () =>
    fetch(`${baseUrl}/viewed/${period}.json?api-key=${API_KEY}`).then((res) => res.json()),
  );
  return { isLoading, error, data };
}

export function FetchDataEmailed(period) {
  const { isLoading, error, data } = useQuery('viewedEmail', () =>
    fetch(`${baseUrl}/viewed/${period}.json?api-key=${API_KEY}`).then((res) => res.json()),
  );
  return { isLoading, error, data };
}
