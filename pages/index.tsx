import { signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

import "../styles/global.css";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const index = () => {
  const { data: user } = useCurrentUser();
  return (
    <div>
      <h1 className="text-green-500 ">NetflixClone</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button className="bg-white h-10 w-full" onClick={() => signOut()}>
        Logout!
      </button>
    </div>
  );
};

export default index;

/*


export default function Index() {
  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <button className="bg-white" onClick={() => signOut()}>
        Hola
      </button>
    </>
  );
}

 */
