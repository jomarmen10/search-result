import React, { Component } from "react";
import { StyledFilter } from "../StyledComponent/StyledComponent";

export default class Movie extends Component {
    state = {
        display: "none",
        subFilter: "none",
    };

    showFilterMenu = () => {
        if (this.state.display === "none") {
            this.setState({
                display: "flex",
            });
        } else {
            this.setState({
                display: "none",
            });
        }
    };

    showSubFilter = () => {
        if (this.state.subFilter === "none") {
            this.setState({
                subFilter: "flex",
            });
        } else {
            this.setState({
                subFilter: "none",
            });
        }
    };

    render() {
        return (
            <StyledFilter>
                <div id="right">
                    <ul>
                        <li>
                            <a href="#" onClick={this.showFilterMenu}>
                                Filter <i className="fas fa-chevron-down"></i>
                            </a>
                        </li>
                        <li>
                            Sorted By:{" "}
                            <a href="#">
                                Popularity{" "}
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="left" style={{ display: this.state.display }}>
                    <div>
                        <ul>
                            <li>
                                <a href="#">
                                    Release Year{" "}
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Genre{" "}
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                            </li>
                            <li onClick={this.showSubFilter}>
                                <a href="#">
                                    Rating{" "}
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                            </li>
                            <div
                                style={{
                                    display: this.state.subFilter,
                                }}
                            >
                                <ul id="sub-filter">
                                    <li>
                                        <input type="checkbox" />G
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        PG
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        PG-13
                                    </li>
                                    <li>
                                        <input type="checkbox" />R
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        NC-17
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <button>Clear Filter</button>
                            </li>
                            <li>
                                <button>Apply Filter</button>
                            </li>
                            <li onClick={this.showFilterMenu}>
                                <button id="exit">
                                    <i className="fas fa-times"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </StyledFilter>
        );
    }
}
