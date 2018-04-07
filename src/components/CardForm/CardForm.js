import React, {Component} from 'react';
import "./CardForm.css";
import Title from "../Title";

class CardForm extends Component {

  constructor(props) {
    super(props);
  }

  handleChangeForm = (e) => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };

  render() {
    return (
      <div>
        <Title text="Номер карты"/>
        <div className="card-form" data-test="card-form">
          <input type="text" onChange={this.handleChangeForm} name="cardNumber" value={this.props.cardNumber}
                 placeholder="cardNumber"/>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount..");
  }
}

export default CardForm;
