import React from 'react';
import axios from 'axios';

const headers = {
  'Client-ID': 'mlczp17f4a0i40k6uo8joqkwwhnnm6',
  Authorization: 'Bearer v4qa6h6sjh9dar1h5ouwgc4aeu3ncz',
};

const query = 'fields involved_companies.* where involved_companies != null';

const ApiPage = ({ data }: any) => {
  //  render data..
  console.log(data);
  return <></>;
};

export const getServerSideProps = async () => {
  let data;

  const res = await axios({
    url: 'https://api.igdb.com/v4/games',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': 'mlczp17f4a0i40k6uo8joqkwwhnnm6',
      Authorization: 'Bearer v4qa6h6sjh9dar1h5ouwgc4aeu3ncz',
    },
    data: 'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;',
  })
    .then(response => {
      console.log(response.data);
      data = response.data;
    })
    .catch(err => {
      console.error(err);
    });

  return { props: { data } };
};

export default ApiPage;
