//Character Selector Functional Component
const CharacterSelector = props => {
  const characterLoader = () => {
    return props.characters.map(char => {
      return (
        <option value={char} key={char}>
          {char}
        </option>
      );
    });
  };

  const selectedCharacter = evt => {
    props.characterSelectedHandler(evt.target.value);
  };

  return (
    <div>
      <select onChange={selectedCharacter}>{characterLoader()}</select>
    </div>
  );
};

//Sub-Class Selector Functional Component
const SubClassSelector = props => {
  const subClassLoader = () => {
    return props.subClasses.map(sub => {
      return (
        <option value={sub} key={sub}>
          {sub}
        </option>
      );
    });
  };

  const selectedSubClass = evt => {
    props.subClassSelectedHandler(evt.target.value);
  };

  return (
    <div>
      <select onChange={selectedSubClass}>{subClassLoader()}</select>
    </div>
  );
};

//Gender Selector Functional Component
const GenderSelector = props => {
  const genderLoader = () => {
    return props.genders.map(gen => {
      return (
        <option value={gen} key={gen}>
          {gen}
        </option>
      );
    });
  };

  const selectedGender = evt => {
    props.genderSelectedHandler(evt.target.value);
  };

  return (
    <div>
      <select onChange={selectedGender}>{genderLoader()}</select>
    </div>
  );
};

//----------------
// React Container
class CharacterShowcase extends React.Component {
  constructor(props) {
    super(props);

    const characters = window.CharactersClassification.allCharacters;
    const subClasses = window.CharactersClassification.subClasses;
    // const bySubClass = window.CharactersClassification.bySubClass;
    // const byGender = window.CharactersClassification.byGender;
    const genders = window.CharactersClassification.genders;

    this.state = {
      characters: characters,
      character: null,
      subClasses: subClasses,
      subClass: null,
      // bySubClass: bySubClass
      // byGender: byGender,
      genders: genders,
      gender: null
    };
  }

  characterSelectedHandler = selectedCharacter => {
    this.setState({ character: selectedCharacter });
  };

  subClassSelectedHandler = selectedSubClass => {
    this.setState({ subClass: selectedSubClass });
  };
  genderSelectedHandler = selectedGender => {
    this.setState({ gender: selectedGender });
  };

  render() {
    return (
      <div>
        <p>React Component!</p>
        <GenderSelector
          genders={this.state.genders}
          genderSelectedHandler={this.genderSelectedHandler}
        />
        <SubClassSelector
          subClasses={this.state.subClasses}
          subClassSelectedHandler={this.subClassSelectedHandler}
        />
        <CharacterSelector
          characters={this.state.characters}
          characterSelectedHandler={this.characterSelectedHandler}
        />
      </div>
    );
  }
}

ReactDOM.render(<CharacterShowcase />, document.getElementById("react-root"));
