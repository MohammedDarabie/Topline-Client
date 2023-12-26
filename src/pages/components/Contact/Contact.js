import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import spinner from "../../../assets/spinner.gif";
import { citiesInKSA } from "../../../resources/resources";


const MyForm = () => {
  /* ------------------------------ State of Form ----------------------------- */
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    nationality: "",
    cityOfResidence: "",
    phoneNumber: "",
    profilePicLink: null,
    pastWorkBrief: "",
  });
  /* ----------------------------------- --- ---------------------------------- */
  /* ------------------------------ Handle Change ----------------------------- */
  /* ----------------------------------- --- ---------------------------------- */
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    let file = files && files[0];

    if ((name === "profilePicLink" || name === "cv") && file) {
      let validTypes;
      if (name === "profilePicLink") {
        validTypes = ["image/jpeg", "image/png"];
      } 

      if (!validTypes.includes(file.type)) {
        alert(
          `Please select a valid ${
            name === "profilePicLink" ? "image" : "CV"
          } file (${name === "profilePicLink" ? "JPEG or PNG" : "PDF or DOCX"})`
        );
        e.target.value = "";

        return;
      }
    }

    setFormData({
      ...formData,
      [name]: type === "file" ? file : value,
    });
  };
  /* ----------------------------------- --- ---------------------------------- */
  /* ------------------------------ Handle Submit ----------------------------- */
  /* ----------------------------------- --- ---------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const CloudformData = new FormData();
    CloudformData.append("file", formData.profilePicLink);
    CloudformData.append("upload_preset", "eiu5ciuz");
    let sendedData = {};
    fetch(process.env.REACT_APP_CLOUDINARY, {
      method: "POST",
      body: CloudformData,
    })
      .then((response) => response.json())
      .then(async (data) => {
        sendedData = { ...formData, profilePicLink: data.secure_url };
        await axios.post(
          `${process.env.REACT_APP_BACKEND}/api/applicant`,
          sendedData
        );
        setIsLoading(false);
        toast.success("Form Submitted");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
    setFormData((prevstate) => ({
      ...prevstate,
      name: "",
      dateOfBirth: "",
      nationality: "",
      cityOfResidence: "",
      phoneNumber: "",
      profilePicLink: null,
      pastWorkBrief: "",
    }));
    return;
  };
  /* -------------------------------------------------------------------------- */
  /*                                   RETURN                                   */
  /* -------------------------------------------------------------------------- */
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={spinner} alt="Loading..." className="w-20 h-20" />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="p-4 w-full max-w-lg mx-auto">
      <div className="my-8">
        <h1 className="text-3xl font-bold">Join our Team</h1>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          الاسم (Name)
        </label>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          تاريخ الميلاد (Birth Date)
        </label>
        <input
          required
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          الجنسية (Nationality)
        </label>
        <input
          required
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          المدينة التي تقيم بها (City of Residence)
        </label>
        <select
          required
          name="cityOfResidence"
          value={formData.cityOfResidence}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">اختر مدينة</option>
          {citiesInKSA.map((cityOfResidence, index) => (
            <option key={index} value={cityOfResidence}>
              {cityOfResidence}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          رقم الهاتف (phoneNumber Number)
        </label>
        <input
          required
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          رفع صورة شخصية (Upload Profile Picture)
        </label>
        <input
          required
          type="file"
          name="profilePicLink"
          onChange={handleChange}
          className="shadow w-full leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          نبذة بسيطة عن عملك بالماضي (Brief about your Past Work)
        </label>
        <textarea
          required
          name="pastWorkBrief"
          value={formData.pastWorkBrief}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
