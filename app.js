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
        <option>Select</option>
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
        <option>Select</option>
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
        <option>Select</option>
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
        height: "420px",
        margin: "145px 0 0 145px"
      }}
      src={`./Assets/${props.character}.png`}
    />
  );
};

//secription funtional component
const Description = props => {
  return <p>{props.description}</p>;
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
      character: "question",
      subClasses: subClasses,
      subClass: null,
      byGender: null,
      genders: genders,
      gender: null,
      description:
        "Heroes are the main playable characters in Save the World. There are currently four main classes of Heroes, which each have a number of sub classes. While every Hero in Fortnite can build, explore, and hold their own on the battlefield, each sub class has access to a unique set of Abilities and Traits that gives them a unique style of play."
    };
  }

  characterSelectedHandler = selectedCharacter => {
    const profile = window.CharactersClassification.profile[selectedCharacter];

    this.setState({
      character: selectedCharacter,
      description: profile
    });
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
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <div
          style={{
            margin: "5% 8% 0% 0%",
            width: "8%"
          }}
        >
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
        <div style={{ width: "60%" }}>
          <DisplayCharacter character={this.state.character} />
          <img
            style={{
              position: "relative",
              height: "45%"
            }}
            src="./Assets/frame.png"
          />
        </div>
        <div style={{ width: "10%", margin: "0% 0% 0% 4%" }}>
          <h3>Description:</h3>
          <Description description={this.state.description} />
        </div>
      </section>
    );
  }
}
// style={{ height: "800px", width: "900px" }}
ReactDOM.render(<CharacterShowcase />, document.getElementById("react-root"));
