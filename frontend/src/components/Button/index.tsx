function Button({ text }) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-orange-400 border-2  hover:bg-orange-500 focus:ring-4 focus:outline-none focus:bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {text}
    </button>
  );
}

export default Button;
