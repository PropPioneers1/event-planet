/* eslint-disable react/prop-types */


const Progress = ({rating}) => {
    return (
        <progress
        className="progress progress-secondary"
        value={rating?.rating}
        max="5"
        ></progress>
    );
};

export default Progress;