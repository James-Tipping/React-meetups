import Link from "next/link";

function MeetupItem(props) {
  return (
    <div className=" md:w-5/12 overflow-hidden mx-auto rounded-md border-2 shadow-md my-2">
      <img className=" overflow-hidden rounded-t-md object-cover mx-auto"
        src={props.image}
      />
      <div className=" text-center justify-center text-black p-6">
        <ul>
          <h3 className=" text-xl font-medium">{props.title}</h3>
          <p>{props.description}</p>
          <p>{props.address}</p>
        </ul>
        <div>
          <Link
            href={"/" + props._id}
          >
            <button className=" text-center font-medium text-2xl bg-red-900 hover:bg-red-500 text-white rounded-md py-3 px-6 mt-4">Show Details</button>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default MeetupItem;