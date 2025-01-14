function Button({ text }) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-blue-600 border-2 bg-blue-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {text}
    </button>
  );
}

export default Button;
