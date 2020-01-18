export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
};

export const pokemonNameToDisplayName = (name) => {
  return name.split('-').map((word) => capitalize(word)).join(' ');
};

const _selectSpriteFromAPISprites = (apiSprites) => {
  if (apiSprites['front_default']) {
    return apiSprites['front_default'];
  }

  if (apiSprites['front_shiny']) {
    return apiSprites['front_shiny'];
  }

  const availableSprites = Object.values(apiSprites).filter((apiSpriteURL) => !!apiSpriteURL);

  return availableSprites.length > 0 ? availableSprites[0] : null;
};

export const mapPokemonAPIDataToLocalFormat = (apiData) => {
  return {
    name: apiData.name,
    sprite: _selectSpriteFromAPISprites(apiData.sprites),
    displayName: pokemonNameToDisplayName(apiData.name),
    height: apiData.height,
    weight: apiData.weight,
  }
};
