import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CryptoCard from "./CryptoCard"

const CardList = props => {

  const results = props.apiData
  let cards = results.map(card => 
    <Grid item s>
      <CryptoCard
        name={card.name}
        description={card.description}
        img={card.owner.avatar_url}
        language={card.language}
        openIssues={card.open_issues}
        forks={card.forks}
        homepage={card.homepage}
      />
    </Grid>
  )
  
  return(
    <Grid container spacing={24} justify="center">
      {cards}
    </Grid>
  )
  
}

CardList.propTypes = {
  apiData: PropTypes.array.isRequired
}

export default CardList;