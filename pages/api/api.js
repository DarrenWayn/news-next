import { useQuery } from "react-query";

const baseUrl = "https://api.nytimes.com/svc/mostpopular/v2";
const API_KEY = "YVTkKAKtPz4rq7Tc6fyEZKIPnvAcTi47";

function _fetchDataViewed(period) {
  const { isLoading, error, data } = useQuery("viewedArticle", () =>
    fetch(`${baseUrl}/viewed/${period}.json?api-key=${API_KEY}`).then((res) =>
      res.json()
    )
  );
  return { isLoading, error, data };
  console.log(data);
}

function _fetchDataEmailed(period) {
  const { isLoading, error, data } = useQuery("viewedEmail", () =>
    fetch(`${baseUrl}/viewed/${period}.json?api-key=${API_KEY}`).then((res) =>
      res.json()
    )
  );
  return { isLoading, error, data };
}

export { _fetchDataViewed, _fetchDataEmailed };
