import { Link } from "react-router-dom";

function HomeLink() {
  return (
    <Link
      to="/fake-store-api-new/"
      className="cursor-pointer p-2 text-lg font-bold transition-all duration-300 focus:rounded-full focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-50"
    >
      Comfy
    </Link>
  );
}

export default HomeLink;
