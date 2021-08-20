import React from "react";
import PropTypes from "prop-types";
import { FaSearch,FaHome,FaUserCircle} from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import HomePoster from "../../components/HomePoster";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Backdrop = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;


const MyLogPresenter = ({ moviesResults, tvResults, username, error, loading }) => (
     <>
        <Helmet>
            <title>MyLog | Logflix</title>
        </Helmet>
        {loading ?
        ( <Loader /> ) :
        error ? <Message color="#e74c3c" text = {error} /> :
        (
        <>
            
        </>
        )}
    </>
);

MyLogPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
};

export default MyLogPresenter;
