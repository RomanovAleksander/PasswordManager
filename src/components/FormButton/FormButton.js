import React from 'react';
import {openGenerator} from "../../actions/generator/actions";
import {connect} from "react-redux";

class FormButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    }
  }

  selectButton = (e) => {
    this.setState({
      active: e.target.id
    });

    this.props.changeButton(e);
  };

  render() {
    const {button} = this.props;

    const selectIcon = (icon) => {
      if (icon === 'open') {
        return 'fa-lock'
      } else if (icon === 'new') {
        return 'fa-plus'
      } else if (icon === 'generate') {
        return 'fa-bolt'
      }
    };

    const setBtnName = (button, isUA) => {
      if (button === 'open') {
        return `${isUA ? 'відкрити' : button}`
      } else if (button === 'new') {
        return `${isUA ? 'новий' : button}`
      }
    };

    return (
      <>
        <input id={button} type="radio" value={button} name="category"
               onChange={this.selectButton} required
        />
        {
          button === 'generate' ?
            <label className="" onClick={() => this.props.openGenerator()}>
              <i className={`fa ${selectIcon(button)} open__icon-i`}> </i>
              <div className="open__icon-text">{`${this.props.isUA ? 'згенерувати' : button}`}</div>
            </label>
            :
            <label className="" htmlFor={button}>
              <i className={`fa ${selectIcon(button)} open__icon-i`}> </i>
              <div className="open__icon-text">{setBtnName(button, this.props.isUA)}</div>
            </label>
        }
      </>
    )
  }
}

const mapDispatchToProps = {
  openGenerator
};

export default connect(null, mapDispatchToProps)(FormButton);
