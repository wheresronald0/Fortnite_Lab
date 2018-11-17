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
      <h3>Select Your Character</h3>
      <select onChange={selectedCharacter}>
        <option />
        {characterLoader()}
      </select>
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
      <h3>Select Your Characters Sub-Class</h3>
      <select onChange={selectedSubClass}>
        <option />
        {subClassLoader()}
      </select>
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
      <h3>Select Your Characters Gender</h3>
      <select onChange={selectedGender}>
        <option />
        {genderLoader()}
      </select>
    </div>
  );
};

//Display character functional component
const DisplayCharacter = props => {
  return (
    <img
      style={{
        position: "absolute",
        margin: "12% 0 0 8%"
      }}
      src={`./Assets/${props.character}.png`}
    />
  );
};

//----------------
// React Container

class CharacterShowcase extends React.Component {
  constructor(props) {
    super(props);

    const characters = window.CharactersClassification.allCharacters;
    const subClasses = window.CharactersClassification.subClasses;
    const genders = window.CharactersClassification.genders;

    this.state = {
      characters: characters,
      character: "Hazard_the_13th",
      subClasses: subClasses,
      subClass: null,
      // bySubClass: bySubClass
      byGender: null,
      genders: genders,
      gender: null
    };
  }

  characterSelectedHandler = selectedCharacter => {
    this.setState({ character: selectedCharacter });
  };

  subClassSelectedHandler = selectedSubClass => {
    const soldierMale = window.CharactersClassification.bySubClass.soldierMale;
    const constructorMale =
      window.CharactersClassification.bySubClass.constructorMale;
    const ninjaMale = window.CharactersClassification.bySubClass.ninjaMale;
    const outlanderMale =
      window.CharactersClassification.bySubClass.outlanderMale;
    const soldierFemale =
      window.CharactersClassification.bySubClass.soldierFemale;
    const constructorFemale = ["No Characters Available"];
    const ninjaFemale = window.CharactersClassification.bySubClass.ninjaFemale;
    const outlanderFemale =
      window.CharactersClassification.bySubClass.outlanderFemale;

    //Male
    if (this.state.gender === "Male" && selectedSubClass === "Soldier") {
      this.setState({ subClass: selectedSubClass, characters: soldierMale });
    } else if (
      this.state.gender === "Male" &&
      selectedSubClass === "Constructor"
    ) {
      this.setState({
        subClass: selectedSubClass,
        characters: constructorMale
      });
    } else if (this.state.gender === "Male" && selectedSubClass === "Ninja") {
      this.setState({
        subClass: selectedSubClass,
        characters: ninjaMale
      });
    } else if (
      this.state.gender === "Male" &&
      selectedSubClass === "Outlander"
    ) {
      this.setState({
        subClass: selectedSubClass,
        characters: outlanderMale
      });
    }
    //Female
    if (this.state.gender === "Female" && selectedSubClass === "Soldier") {
      this.setState({ subClass: selectedSubClass, characters: soldierFemale });
    } else if (
      this.state.gender === "Female" &&
      selectedSubClass === "Constructor"
    ) {
      this.setState({
        subClass: selectedSubClass,
        characters: constructorFemale
      });
    } else if (this.state.gender === "Female" && selectedSubClass === "Ninja") {
      this.setState({
        subClass: selectedSubClass,
        characters: ninjaFemale
      });
    } else if (
      this.state.gender === "Female" &&
      selectedSubClass === "Outlander"
    ) {
      this.setState({
        subClass: selectedSubClass,
        characters: outlanderFemale
      });
    }
  };

  genderSelectedHandler = selectedGender => {
    const MaleGender = window.CharactersClassification.byGender.male;
    const FemaleGender = window.CharactersClassification.byGender.female;
    if (selectedGender === "Male") {
      this.setState({ gender: selectedGender, characters: MaleGender });
    } else if (selectedGender === "Female") {
      this.setState({ gender: selectedGender, characters: FemaleGender });
    }
  };

  render() {
    return (
      <section
        style={{
          width: "1280px",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div style={{ margin: "10% 8% 0% 0%" }}>
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
        <div>
          <DisplayCharacter character={this.state.character} />
          <img
            style={{ position: "relative", height: "115%", width: "75%" }}
            src="./Assets/frame.png"
          />
        </div>
      </section>
    );
  }
}
// style={{ height: "800px", width: "900px" }}
ReactDOM.render(<CharacterShowcase />, document.getElementById("react-root"));
