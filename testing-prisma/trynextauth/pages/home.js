import { useSession } from "next-auth/react";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div>
      {session ? (
        <p>You are logged in!</p>
      ) : (
        <p>
          You are not logged in 😞, to login pes{" "}
          <Link href="http://localhost:3000/">Here</Link>
        </p>
      )}
    </div>
  );
}
