import React from "react";

const Input = React.forwardRef(({ error, id, label, ...rest }: any, ref) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 text-left"
      >
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className="bg-white border border-gray-300 text-black placeholder-[#51545e] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-3"
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
});

export default Input;
