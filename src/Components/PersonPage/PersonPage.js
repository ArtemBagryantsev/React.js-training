import React from "react";
import usePerson from "./hooks/usePerson";
import Person from "./Person";


const PersonPage = () => {
    const { personList, isLoaded } = usePerson();

    if (!isLoaded) {
        return 'Loading...'
    }

    return (
        <div>
            <h1>Star Wars characters</h1>
            <ul>
                {personList.map((person) =>
                    <Person
                        key={person.name}
                        name={person.name}
                    ></Person>
                )}
            </ul>
        </div>
    )
};

export default PersonPage;