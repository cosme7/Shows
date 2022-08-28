import React from "react";
import axios from "axios";
import { Section, PageTitle, Pages } from "../styles/Pages"
import {Img, Rank, Title, Date, Overview, Score, Vote} from "../components/Infos"

const MovieAPI = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=b86dc8c0ad31208e8f005391487bdc78&language=en-US&page=1"
});

export default class Movie extends React.Component {

  state = {
    movies: [],
    moviesFilter: []
  };

  componentDidMount() {
    this.PushApi();
  }

  PushApi = async (item) => {
    const response = await MovieAPI.get();

    const InfoMovies = response.data.results.map((item, index) => {
      return {
        rank: index + 1,
          ...item
      };
    });
    
    this.setState({
      movies: InfoMovies
    });
    
    console.log(response);
  };

  filterMovies = (e) => {
    const Filter = this.state.movies.filter( item => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return true
      }else{
        return ``
      }
    })

    this.setState ({
      moviesFilter: Filter,
    })
  }

  render() {
    return (
      <>
        <main>
          <PageTitle>
            <h2>Movies</h2>
          </PageTitle>
          <Section>
            {/* {this.state.moviesFilter.map((item) => ( */}
            {this.state.movies.map((item) => (
              <Pages key={item.rank}>
                <Img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title} />
                <div>
                  <Rank># {item.rank}</Rank>
                  <Title>{item.title}</Title>
                  <Date>Release Date: <span>{item.release_date}</span></Date>
                  <Overview>{item.overview !== "" ? item.overview : "Sorry, synopsis is not yet available! Return later! XD"}</Overview>
                  <Score>Score: <span>{item.vote_average}</span></Score>
                  <Vote>Vote Count: <span>{item.vote_count}</span></Vote>
                </div>
              </Pages>
            ))}
          </Section>
        </main>
      </>
    );
  }
}
