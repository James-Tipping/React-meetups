import { useState } from "react";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetup(props) {

  const [data, setData] = useState({
    title: "",
    image: "",
    address: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData(prevData => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }

  async function handleClick(event) {
    event.preventDefault();
    // console.log(data);
    // console.log(JSON.stringify(data));
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response)
    const result = await response.json();
    console.log(result);

    setData({
      title: "",
      image: "",
      address: "",
      description: ""
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Add Meetup</title>
        <meta name="description" content="Create a new meetup"></meta>
      </Head>
      <div className=" text-black bg-white max-w-2xl mx-auto">
        <form onSubmit={handleClick}>
          <div className="py-4">
            <label className=" justify-start font-semibold">Meetup Title</label>
            <input className="bg-white border-2 border-slate-200 rounded-md w-full" id="mTitle" name="title" value={data.title} onChange={handleChange}></input>
          </div>
          <div className="py-4">
            <label className=" justify-start font-semibold">Meetup Image URL</label>
            <input className="bg-white border-2 border-slate-200 rounded-md w-full" id="mImage" name="image" value={data.image} onChange={handleChange}></input>
          </div>
          <div className="py-4">
            <label className=" justify-start font-semibold">Meetup Address</label>
            <input className="bg-white border-2 border-slate-200 rounded-md w-full" id="mAddress" name="address" value={data.address} onChange={handleChange}></input>
          </div>
          <div className="py-4">
            <label className=" justify-start font-semibold">Description</label>
            <textarea className="bg-white border-2 border-slate-200 rounded-md w-full" id="mDescription" name="description" rows="4" value={data.description} onChange={handleChange}></textarea>
          </div>
          <div className="text-right text-white">
            <button className=" bg-red-900 px-6 py-1 rounded-md hover:bg-red-500" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default NewMeetup;