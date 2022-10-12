import Header from "./Header";
import MeetupItem from "../components/MeetupItem";

function ItemList(props) {
    return (
        <div className=" bg-white">
            {props.meetups.map(meetup => (
                <MeetupItem 
                    key={meetup._id}
                    _id={meetup._id}
                    title={meetup.title}
                    image={meetup.image}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </div>
    );
}

export default ItemList;