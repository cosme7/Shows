import React from "react";
import axios from "axios";
import { Section, Pages } from "../styles/Pages"
import {Img, Rank, Title, Date, Overview, Score, Vote} from "../components/Infos"

const SeriesAPI = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=b86dc8c0ad31208e8f005391487bdc78&language=en-US&page=1"
});

export default class Shows extends React.Component {
  
  state = {
    series: [],
    listShows: []
  };

  componentDidMount() {
    this.PushApi();
  }

  PushApi = async () => {
    const response = await SeriesAPI.get();

    const InfoSeries = response.data.results.map((item, index) => {
      return {
        rank: index + 1,
        ...item,
      };
    });

    this.setState({
        series: InfoSeries
    });

    console.log(response);
  };

  filterShows = (e) => {
    const Filter = this.state.series.filter( item => {
      if (item.name.toLowerCase().includes(e.target.value.toLowerCase())){
        return true
      }else{
        return ``
      }
    })

    this.setState ({
      listShows: Filter,
    })
  };
  
  render() {
    return (
      <>
        <main>
          <Section>
            {/* {this.state.listShows.map((item) => ( */}
            {this.state.series.map((item) => (
              <Pages key={item.rank}>
                <Img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.name} />
                <div>
                  <Rank># {item.rank}</Rank>
                  <Title>{item.name}</Title>
                  <Date>Release Date: <span>{item.first_air_date}</span></Date>
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
