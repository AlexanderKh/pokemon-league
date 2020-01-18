import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, InformationLabel } from './common';
import { getIsSelectedLookupPokemonInLineup, getLineupIsFull } from '../selectors';
import { bindActionCreators } from 'redux';
import { addCurrentLookupPokemonToLineup } from '../actions';
import { connect } from 'react-redux';
import Spinner from './spinner/Spinner';

class PokedexPokemonInformation extends Component {
  getAddButtonText = () => {
    const {
      isSelectedLookupPokemonInLineup,
      lineupIsFull,
    } = this.props;

    if (lineupIsFull) {
      return 'Lineup is full'
    } else if (isSelectedLookupPokemonInLineup) {
      return 'Added';
    } else {
      return 'Add to Lineup';
    }
  };

  getIsAddButtonActive = () => {
    const {
      isSelectedLookupPokemonInLineup,
      lineupIsFull,
    } = this.props;

    return !isSelectedLookupPokemonInLineup && !lineupIsFull;
  };

  onPokemonAddToLineup = () => {
    if (!this.props.isSelectedLookupPokemonInLineup) {
      this.props.addCurrentLookupPokemonToLineup();
    }
  };

  renderContent() {
    const { selectedLookupPokemon } = this.props;

    if (!selectedLookupPokemon) {
      return <InformationLabel>No Pokemon Selected</InformationLabel>;
    }

    return <React.Fragment>
      <PokemonSprite src={selectedLookupPokemon.sprite}/>

      <PokemonInfoSeparator/>

      <PokemonInfoTable>
        <tbody>
        <tr>
          <td>Name</td>
          <td>{selectedLookupPokemon.displayName}</td>
        </tr>
        </tbody>
      </PokemonInfoTable>

      <AddPokemonButton
        active={this.getIsAddButtonActive()}
        onClick={this.onPokemonAddToLineup}
      >
        {this.getAddButtonText()}
      </AddPokemonButton>
    </React.Fragment>
  }

  render() {
    return <PokedexPokemonInformationBlock>
      {this.props.selectedLookupPokemonLoaded ? this.renderContent() : <Spinner/>}
    </PokedexPokemonInformationBlock>;
  }
}

const mapStateToProps = (state) => ({
  selectedLookupPokemon: state.selectedLookupPokemon,
  selectedLookupPokemonLoaded: state.selectedLookupPokemonLoaded,
  isSelectedLookupPokemonInLineup: getIsSelectedLookupPokemonInLineup(state),
  lineupIsFull: getLineupIsFull(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addCurrentLookupPokemonToLineup,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPokemonInformation);

const PokedexPokemonInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const PokemonSprite = styled.img`
  width: 80px;
  border: 1px dashed lightgray;
  border-radius: 5px;
`;

const PokemonInfoSeparator = styled.div`
  width: 80%;
  height: 0;
  border-top: 1px solid lightgray;
  margin: 10px 0;
`;

const PokemonInfoTable = styled.table`
  width: 100%;
`;

const AddPokemonButton = styled(Button)`
  margin: 10px 0;
`;
