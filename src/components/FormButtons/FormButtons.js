import React from 'react';
import { FormButton } from '../FormButton';

export default class FormButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      button: ''
    }
  }

  handleChange = (e) => {
    const { onButtonChange } = this.props;
    const button = e.target.value;
    this.setState({ button });
    onButtonChange(button);
  };

  render() {
    const { buttons } = this.props;
    return (
      <div className="open__icons">
        {
          buttons.map((button) => {
            return (
              <div className="open__icon open__icon-open" key={button}>
                <FormButton button={button} changeButton={this.handleChange} key={button}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}
