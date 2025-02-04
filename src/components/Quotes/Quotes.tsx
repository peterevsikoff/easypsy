let status = "pending";
let result;

const fetchPosts = () => {
  // let url = `https://jsonplaceholder.typicode.com/posts${
  //   userId ? "?userId=" + userId : ""
  // }`;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  // const res = await fetch("https://dummyjson.com/quotes?limit=14546").catch(error => error);
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  // const r = await res.json();
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  // return () => {return r};

  let fetching = fetch("https://dummyjson.com/quotes?limit=14546")
    .then((res) => res.json())
    // Fetch request has gone well
    .then((success) => {
      status = "fulfilled";

      result = success;
    })
    // Fetch request has failed
    .catch((error) => {
      status = "rejected";

      result = error;
    });

  return () => {
    if (status === "pending") {
      throw fetching; // Suspend(A way to tell React data is still fetching)
    } else if (status === "rejected") {
      setTimeout(() => {
        throw result; // Result is an error
      }, 5000);
    } else if (status === "fulfilled") {
      // const p = new Promise(resolve => setTimeout(resolve, 5000));
      // p.then(() => {
      return result;
      // });
      //await new Promise(resolve => setTimeout(resolve, 5000));
      //setTimeout(() => {
      //return result; // Result is an error
      //}, 5000);
      //return result; // Result is a fulfilled promise
    }
  };
};

const postsData = fetchPosts();

const Quotes = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const quotes = postsData();

  return <ul>{quotes?.quotes.map((x) => <li key={x.id}>{x.quote}</li>)}</ul>;
};

export { Quotes };
