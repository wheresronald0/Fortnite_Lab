(function() {
  "use strict";

  const AllCharecters = props => {
    //need to map options to select tag
    //get info from API and pass it thru props
    console.log(props);
    return (
      <div>
        <select>
          <option>Char 1</option>
        </select>
      </div>
    );
  };

  //----------------
  // React Container
  class CharacterShowcase extends React.Component {
    constructor(props) {
      super(props);

      const characters = window.Characters.AllCharacters;
      console.log(characters);
      this.state = {
        characters: characters,
        character: "Boo Boo"
      };
    }
    render() {
      console.log(this.state);
      return (
        <div>
          <p>React Component!</p>
          <AllCharecters charectersList={this.state.characters} />
        </div>
      );
    }
  }

  ReactDOM.render(<CharacterShowcase />, document.getElementById("react-root"));
})();
