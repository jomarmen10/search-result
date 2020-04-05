import React, { Component } from "react";
import Movie from "./Components/Movies/Movie";
import Filter from "./Components/Filter/Filter";
import Navbar from "./Components/Navbar/Navbar";

const API_KEY = process.env.REACT_APP_KEY;

class App extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        try {
            const resFindAll = await fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
            );
            const parsedRes = await resFindAll.json();
            this.setState({
                movies: parsedRes.results,
            });
        } catch (err) {
            return err;
        }
    }

    handleSearch = async (str) => {
        if (str) {
            const findMovie = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${str}`
            );
            const parsedRes = await findMovie.json();
            this.setState({
                movies: parsedRes.results,
            });
        }
    };

    homeSearch = async (str) => {
        const findMovie = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
        );
        const parsedRes = await findMovie.json();
        this.setState({
            movies: parsedRes.results,
        });
    };

    render() {
        const { movies } = this.state;
        return (
            <div>
                <Navbar
                    homeSearch={this.homeSearch}
                    handleSearch={this.handleSearch}
                />
                <Filter />
                <Movie movies={movies} />
            </div>
        );
    }
}

export default App;
