import styled from "styled-components";

// style for Movie component
export const StyledMovie = styled.div`
    width: 1160px;
    margin: 0 auto;

    img {
        width: 250px;
        height: 375px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }

    li {
        width: 250px;
        padding: 0 20px;
    }
`;

export const StyledNavbar = styled.div`
    width: 1140px;
    margin: 0 auto;
    padding-top: 50px;

    .center {
        display: flex;
        justify-content: space-between;
    }

    li {
        display: inline;
    }

    a {
        margin: 13px;
        text-decoration: none;
        color: #b1b1b1;
    }

    a:hover {
        color: #000;
    }

    .active {
        color: black;
    }

    .div-nav {
        padding-top: 50px;
    }

    #search-result {
        padding-left: 40px;
    }

    .nav-logo {
        width: 25px;
        height: 25px;
    }

    input {
        text-transform: uppercase;
        font-size: 50px;
        border: 0;
        padding: 0;
    }

    input:focus {
        outline: none;
    }
`;

// style for Filter component
export const StyledFilter = styled.div`
    width: 1140px;
    margin: 0 auto;

    #right {
        text-align: right;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline;
        margin-left: 15px;
        color: #b1b1b1;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    #left {
        display: none;
        justify-content: space-between;
    }

    button {
        border: 3px solid #b1b1b1;
        padding: 5px 40px;
        background-color: white;
    }

    button:hover {
        border-color: #000;
    }

    button:focus {
        outline: none;
    }

    #exit {
        padding: 0;
        border: 0;
    }

    #exit i {
        font-size: 15px;
    }

    #sub-filter {
        border: 1px solid black;
        background-color: white;
        text-align: center;
        position: absolute;
        left: 300px;
        width: 100px;
    }

    #sub-filter li {
        display: block;
        color: #000;
        margin: 0;
    }

    @media (max-width: 1024px) {
        #sub-filter {
            left: 200px;
        }
    }
`;
