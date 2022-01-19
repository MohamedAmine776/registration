/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ImageDefault from "../../../../assets/default-card.jpg";

export default function Card() {
  return (
    <Link to={"/"}>
    <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img
        src={ImageDefault}
        alt="course header"
        className="h-40 object-cover rounded-xl shadow-lg"
      />
      <div className="my-3">
        <span className="bg-purple-600 rounded-2xl inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
          {moment(new Date()).format("MMM Do YYYY")}
        </span>
        <span className="bg-[#363457] rounded-2xl inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5 mx-2">
          Author
        </span>
      </div>
      <h3>
        <span className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-gray-600">
          Title
        </span>
      </h3>
      <p className="text-base text-body-color">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <p className="font-bold mt-4">
          13.59$
      </p>
    </div>
    </Link>
  );
}
