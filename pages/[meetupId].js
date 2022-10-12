import { Fragment } from "react";
import Head from "next/head";
import MeetupDetails from "../components/MeetupDetails";
import connectMongo, { disconnectMongo } from "../utils/connectMongo";
import Meetup from "../models/meetup";

function MeetupDetail(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup._id}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>


      <MeetupDetails
        key={props.meetup._id}
        _id={props.meetup._id}
        description={props.meetup.description}
        title={props.meetup.title}
        image={props.meetup.image}
        address={props.meetup.address}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {

  try {

    await connectMongo();
    const meetupIds = await Meetup.find({}, { _id: 1 });
    await disconnectMongo();

    return {
      fallback: false,
      paths: meetupIds.map(meetup => ({
        params: {
          meetupId: JSON.parse(JSON.stringify(meetup._id)),
        }
      }))

    };
  } catch (error) {
    console.log("getStaticPathsError");
    console.error(error);
  }
}

export async function getStaticProps(context) {
  try {
    const meetupId = context.params.meetupId;

    // get data from server
    await connectMongo();
    const meetupData = await Meetup.findById(meetupId);
    await disconnectMongo();

    return {
      props: {
        meetup: JSON.parse(JSON.stringify(meetupData))
      },
      revalidate: 300
    };
  } catch (error) {
    console.log(error);
  }
}

export default MeetupDetail;