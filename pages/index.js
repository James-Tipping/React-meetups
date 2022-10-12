import Header from "../components/Header";
import ItemList from "../components/ItemList";
import connectMongo, { disconnectMongo } from "../utils/connectMongo";
import Meetup from "../models/meetup";
import Head from "next/head";
import { Fragment } from "react";



function Homepage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse upcoming and past meetups"></meta>
      </Head>
      <div className=" pt-5 bg-white">
        <ItemList
          meetups={props.meetups}
        />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  // console.log("Connecting to mongodb");
  await connectMongo();
  // console.log("Connected to mongodb");
  // console.log("Fetching documents");
  const meetups = await Meetup.find({});
  await disconnectMongo();
  // console.log("Fetched documents");
  // console.log(meetups);

  return {
    props: {
      meetups: JSON.parse(JSON.stringify(meetups))
    },
    revalidate: 10
  };
}

export default Homepage;
