import { Await, useLoaderData, useNavigation } from "react-router-dom";
import { Loader } from "../Loader";
import { Suspense, useEffect, useState } from "react";
import { Quotes } from "../Quotes";
import Chart from "react-google-charts";

const Main = () => {
  // const navigation = useNavigation();
  // const quotes = useLoaderData();
  // // const [text, setText] = useState("");
  // console.log(quotes, navigation);
  // useEffect(() => {
  //     setTimeout(() => setText("hjgfytre"), 5000);
  // }, []);
  const options = {
    allowHtml: true,
    allowCollapse: true,
    compactRows: false,
    nodeClass: "node"
  };

  const data = [
    // [
    //   {
    //     v: "Mike",
    //     f: 'Mike<div style="color:red; font-style:italic">President</div>',
    //   },
    //   "",
    //   "The President",
    // ],
    // [
    //   {
    //     v: "Jim",
    //     f: 'Jim<div style="color:red; font-style:italic">Vice President</div>',
    //   },
    //   "Mike",
    //   "VP",
    // ],
    // ["Alice", "Mike", ""],
    // ["Bob", "Jim", "Bob Sponge"],
    // ["Carol", "Bob", ""],

    [   {
         v: "1",
         f: 'dsfwgrt',
       }, "", "ergrt4"],
    [{v: "11", f: "11"}, "1", "rewtyhtr4"],
    ["12", "1", ""],
    ["111", "11", ""],
    ["112", "11", ""],
    ["113", "11", ""],
    ["113", "11", ""],
    ["114", "11", ""],
    ["115", "11", ""],
    ["116", "11", ""],
    ["117", "11", ""],
    ["118", "11", ""],
    ["119", "11", ""],
    ["120", "11", ""],
    ["1200", "11", ""],
    ["1201", "11", ""],
    ["1202", "11", ""],
    ["12042", "11", ""],
    ["12022", "11", ""],
    ["120225", "11", ""],
    ["1202555", "11", ""],
    ["1203", "11", ""],
    ["119", "11", ""],
    ["121", "12", ""],
    ["122", "12", ""],
    ["1211", "121", ""],
  ];




  return (
    <div>
      <Suspense fallback={<Loader />}>
        {/* <Quotes /> */}
        <Chart
          chartType="OrgChart"
          data={data}
          options={options}
          width="50%"
          height="400px"
        />
        {/* <Await resolve={quotes} errorElement={<div>Eroor</div>}>
                {
                    ({quotes}) =>(
                    <ul>
                        {
                            quotes.map(x => <li key={x.id}>{x.quote}</li>)
                        }
                    </ul>
                    )
                }
                    
                </Await> */}


      </Suspense>
      {/* {
                navigation.state === "loading" &&
                <Loader/>
            } */}
      {/* <div>{text}</div> */}
    </div>
  );
};

export { Main };
