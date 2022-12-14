import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./TherapistCard.css";

const TherapistCard = ({ id, name, labels, imageUrl, address, phoneNumber, practice }) => {
  const splitAdress = address.split(', ');
  const street = splitAdress[0];
  const cityState = splitAdress.slice(1, 3).join(', ');

  const listLabels = JSON.parse(labels);
  const formatLabels = listLabels.map((label, index) => <li key={ `${label}${index}` } className="one-label">{ label }</li>);

  //TODO
  // phoneNumber needs to be formated for consistency
  // currently coming back as (111)111-1111 or 111-111-1111 or 111.111.1111

  const linkStyle = {
    textDecoration: "none",
    color: 'white'
  };

  return (
    <Link to={ `/${id}` } className="therapist-card" style={ linkStyle }>
      <img src={ imageUrl } alt="therapist profile" className='profile-img' width="450" height="425" />
      <h2>{ name } </h2>
      <p>{ practice }</p>
      <br />
      <p>{ street }</p>
      <p>{ cityState }</p>
      <br />
      <p>{ phoneNumber }</p>
      <br />
      <ul>
        { formatLabels }
      </ul>
    </Link>
  );
};

export default TherapistCard;

TherapistCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labels: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  practice: PropTypes.string.isRequired
};