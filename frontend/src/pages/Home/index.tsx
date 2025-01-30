import { useGetAllBooksQuery } from "../../store/api/Books";
import Spinner from "../../components/Spinner";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

function Home() {
  const { data: books, error, isLoading } = useGetAllBooksQuery(null);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Failed to load books. Please try again later.</p>;
  }

  return (
    <div>
      <Navbar />
      <Hero/>
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-3">
        {books?.map((book) => (
          <div
            key={book.title}
            className="max-w-[250px] bg-white border border-gray-300 rounded-lg shadow-md"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={book.coverImage}
                alt={`${book.title} cover`}
              />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-black">
                  {book.title}
                </h5>
              </a>
              <p className="mb-2 text-sm font-medium text-gray-600">
                By {book.author}
              </p>
              <p className="mb-3 text-sm text-gray-600">{book.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none"
              >
                Request to Loan
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;
