import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionLabel, InformationLabel, Button } from './common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePokemon } from '../actions';

class PokemonConfigurator extends Component {
  state = {
    pokemon: null,
    updateActive: false,
  };

  componentDidMount() {
    this.setState({
      pokemon: this.props.selectedPokemon,
      updateActive: false,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedPokemon !== this.props.selectedPokemon) {
      this.setState({
        pokemon: this.props.selectedPokemon,
        updateActive: false,
      })
    }
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState((state) => {
      return {
        ...state,
        updateActive: value.length > 0,
        pokemon: {
          ...state.pokemon,
          [name]: value,
        }
      }
    })
  };

  onUpdateClick = () => {
    this.props.updatePokemon(this.state.pokemon);
  };

  renderContent() {
    return <React.Fragment>
      <ParameterBlock>
        <ParameterLabel>Name</ParameterLabel>
        <ParameterInput
          type='text'
          value={this.state.pokemon.displayName}
          name='displayName'
          required='true'
          onChange={this.onInputChange}
        />
      </ParameterBlock>
      <ParameterBlock>
        <ParameterLabel>Weight</ParameterLabel>
        <ParameterInput
          type='number'
          value={this.state.pokemon.weight}
          name='weight'
          min='1'
          onChange={this.onInputChange}
        />
      </ParameterBlock>
      <ParameterBlock>
        <ParameterLabel>Height</ParameterLabel>
        <ParameterInput
          type='number'
          value={this.state.pokemon.height}
          name='height'
          min='1'
          onChange={this.onInputChange}
        />
      </ParameterBlock>

      <UpdateButton active={this.state.updateActive} onClick={this.onUpdateClick}>Update</UpdateButton>
    </React.Fragment>
  }

  render() {
    return <PokemonConfiguratorBlock name='PokemonConfigurator'>
      <SectionLabel>Pokemon Data</SectionLabel>
      {this.state.pokemon ? this.renderContent() : <InformationLabel>No Pokemon Selected</InformationLabel>}
    </PokemonConfiguratorBlock>
  }
}

const mapStateToProps = (state) => ({
  selectedPokemon: state.selectedPokemon,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updatePokemon,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PokemonConfigurator);

const PokemonConfiguratorBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

const ParameterBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 5px 0;
`;

const ParameterLabel = styled.div``;

const ParameterInput = styled.input``;

const UpdateButton = styled(Button)`
  align-self: center;
  margin: 10px 0;  
`;
