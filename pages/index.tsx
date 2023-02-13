import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import type { RootState } from "../store/store";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Head>
        <title>fotopie</title>
      </Head>

      {/* tailwind example */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* redux example */}
      <div>
        <h1>The value of count is {count}</h1>
        <button
          className="w-full h-10 bg-green-400"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="w-full h-10 bg-red-400"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <Link href="/posts/first-post">go</Link>
    </Layout>
  );
};

export default Home;
