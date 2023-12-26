import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import spinner from "../../../assets/spinner.gif";

const RejectedList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const handleApi = async () => {
        const token = localStorage.getItem("token");
        // console.log(token);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/api/applicant/rejected`,
          {
            withCredentials: true,
            headers: {
              authorization: token,
            },
          }
        );

        setList(response.data.data);
      };
      handleApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRemoveCandidate = async (id) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    await axios.delete(
      `${process.env.REACT_APP_BACKEND}/api/applicant/deleteapplicant`,
      {
        data: { id: id },
        withCredentials: true,
        headers: {
          authorization: token,
        },
      }
    );
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND}/api/applicant/rejected`,
      {
        withCredentials: true,
        headers: {
          authorization: token,
        },
      }
    );

    setList(response.data.data);
    setIsLoading(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                                   RETURN                                   */
  /* -------------------------------------------------------------------------- */
  if (!list || list.length === 0) {
    return (
      <>
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Rejected Candidates ({list ? list.length : 0})
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  List is Empty
                </h3>
                <p className="text-sm text-gray-500">
                  There are no items in the list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <img src={spinner} alt="Loading..." />
        </div>
      )}
     <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
             Rejected Applicants ({list ? list.length : 0})
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Personal details and application.
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Nationality
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      City Of Residence
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date of Birth
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {list.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <img
                              className="h-11 w-11 rounded-full"
                              src={person.profilePicLink}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="mt-1 text-gray-500">
                              {person.pastWorkBrief}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {person.nationality}
                        </div>
                        <div className="mt-1 text-gray-500">
                          {person.department}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {person.cityOfResidence}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {person.phoneNumber}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {person.dateOfBirth}
                      </td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <div className="mt-4 flex justify-between items-center">
                        <button
                      onClick={() =>
                        handleRemoveCandidate(person.id.toString())
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectedList;
