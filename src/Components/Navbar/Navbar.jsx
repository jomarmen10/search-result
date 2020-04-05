import React from "react";
import { StyledNavbar } from "../StyledComponent/StyledComponent";
import { NavLink } from "react-router-dom";
import { Component } from "react";

export default class Navbar extends Component {
    state = {
        search: "",
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.search);
    };

    inputHandler = (e) => {
        this.setState({
            search: e.currentTarget.value,
        });
    };

    render() {
        return (
            <StyledNavbar>
                <div className="center">
                    <div id="search-result">
                        <form onSubmit={this.submitHandler}>
                            <input
                                placeholder="Search..."
                                onChange={this.inputHandler}
                            ></input>
                        </form>
                    </div>
                    <div className="div-nav">
                        <NavLink exact to={"/"}>
                            All
                        </NavLink>
                        <NavLink
                            exact
                            to={"/Movies"}
                            onClick={() => this.props.homeSearch()}
                        >
                            <i className="fas fa-film"> Movies</i>
                        </NavLink>
                        <NavLink exact to={"/TV"}>
                            <i className="fas fa-tv"> TV Shows</i>
                        </NavLink>
                        <NavLink exact to={"/Games"}>
                            <i className="fas fa-gamepad"> Games & Apps</i>
                        </NavLink>
                        <NavLink exact to={"/Blog"}>
                            <i className="far fa-comment-dots"> Blog</i>
                        </NavLink>

                        <NavLink exact to={"/Other"}>
                            Other
                        </NavLink>
                    </div>
                </div>
            </StyledNavbar>
        );
    }
}
