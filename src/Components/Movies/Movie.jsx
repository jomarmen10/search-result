import React, { Component } from "react";
import { StyledMovie } from "../StyledComponent/StyledComponent";

export default class Movie extends Component {
    render() {
        const { movies } = this.props;
        return (
            <StyledMovie>
                <ul>
                    {movies ? (
                        movies.map((m, i) => {
                            if (m.poster_path) {
                                return (
                                    <li key={i}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                                            alt={`img of ${m.title}`}
                                        ></img>

                                        <h1>{m.title}</h1>
                                    </li>
                                );
                            }
                        })
                    ) : (
                        <h1>Loading.....</h1>
                    )}
                </ul>
            </StyledMovie>
        );
    }
}
