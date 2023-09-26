export function createApi(service: string) {
  const API_URL = import.meta.env.VITE_API_URL;
  const TARGET_URL = API_URL + service;

  return {
    get: function (method: string, query?: object) {
      /* eslint-disable */
      // https://github.com/microsoft/TypeScript/issues/15338

      const parsedQuery = query ? new URLSearchParams(query as any).toString() : undefined;

      return fetch([`${TARGET_URL}/${method}`, parsedQuery].join("?"))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
      /* eslint-enable */
    },
    // post()
    // put()
  };
}
