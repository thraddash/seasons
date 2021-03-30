import React from 'react';

// create configuration object to clean up the ternary expr
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
      // javascript ternary expression
      return lat > 0 ? 'summer' : 'winter';
  } else {
      return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const  { text, iconName } =  seasonConfig[season] // ref seasonConfig

    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;