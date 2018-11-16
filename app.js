//need to map options to select tag
//get info from API and pass it thru props
const CharacterSelector = props => {
  const helper = () => {
    return props.characters.map(char => {
      return <option value={char}>{char}</option>;
    });
  };

  return (
    <div>
      <select>{helper()}</select>
    </div>
  );
};

//----------------
// React Container
class CharacterShowcase extends React.Component {
  constructor(props) {
    super(props);

    const characters = window.Characters.allCharacters;
    console.log(characters);
    this.state = {
      characters: characters,
      character: "Boo Boo"
    };
  }
  render() {
    return (
      <div>
        <p>React Component!</p>
        <CharacterSelector characters={this.state.characters} />
      </div>
    );
  }
}

ReactDOM.render(<CharacterShowcase />, document.getElementById("react-root"));
