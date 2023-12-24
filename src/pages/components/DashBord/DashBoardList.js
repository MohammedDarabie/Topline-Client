/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function DashBoardList() {
  /* ---------------------------------- State --------------------------------- */
  const [list, setList] = useState([]);
  /* ------------------------------- Navigation ------------------------------- */
  const nav = useNavigate();
  /* ----------------------------- UseLayoutEffect ---------------------------- */
  useLayoutEffect(() => {
    window.localStorage.getItem("token") ? "" : nav("/portal");
  }, []);
  /* -------------------------------- UseEffect ------------------------------- */
  useEffect(() => {
    try {
      const handleApi = async () => {
        const token = localStorage.getItem("token");
        // console.log(token);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/api/applicant/undecided`,
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

  /* ------------------------ Handle Accept and Reject ------------------------ */
  const handleStatus = async (id, action) => {
    const token = localStorage.getItem("token");
    await axios.post(
      `${process.env.REACT_APP_BACKEND}/api/applicant/${action}`,
      {
        id: id,
      },
      {
        withCredentials: true,
        headers: {
          authorization: token,
        },
      }
    );
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND}/api/applicant/undecided`,
      {
        withCredentials: true,
        headers: {
          authorization: token,
        },
      }
    );

    setList(response.data.data);
  };

  /* -------------------------------------------------------------------------- */
  /*                                   Return                                   */
  /* -------------------------------------------------------------------------- */
  if (!list || list.length === 0) {
    return (
      <>
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Applicant Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div>Empty</div>
        </div>
      </>
    );
  }
  return (
    <div>
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Applicant Information
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
                    <div>
                      <div className="text-xl font-semibold text-gray-900">
                        {candidate.name}
                      </div>
                      <p className="text-sm text-gray-600">
                        {candidate.cityOfResidence}
                      </p>
                    </div>
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
                        name={candidate.id}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() =>
                          handleStatus(candidate.id, "updatereject")
                        }
                      >
                        Reject
                      </button>
                      <button
                        name={candidate.id}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() =>
                          handleStatus(candidate.id, "updateaccept")
                        }
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
    </div>
  );
}
