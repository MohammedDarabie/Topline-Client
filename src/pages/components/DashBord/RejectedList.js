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
              Rejected Candidates
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div class="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <div class="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
                <h3 class="mt-2 text-lg font-medium text-gray-900">
                  List is Empty
                </h3>
                <p class="text-sm text-gray-500">
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
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Rejected Candidates
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <ul>
          {list.map((candidate) => {
            return (
              <div
                key={candidate.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={candidate.profilePicLink}
                      alt="User Pic"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-semibold text-gray-900">
                        {candidate.name}
                      </div>
                      <p className="text-sm text-gray-600">
                        {candidate.cityOfResidence}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        handleRemoveCandidate(candidate.id.toString())
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-600">
                      {candidate.pastWorkBrief}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      {candidate.phoneNumber}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        type="button"
                      >
                        Reject
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        type="button"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RejectedList;
