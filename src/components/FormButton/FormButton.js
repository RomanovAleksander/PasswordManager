import React from 'react';

export class FormButton extends React.Component {
  constructor() {
    super();
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
    const { button } = this.props;

    const selectIcon = (icon) => {
      if (icon === 'open') {
        return 'fa-lock'
      } else if (icon === 'new') {
        return 'fa-plus'
      } else if (icon === 'generate') {
        return 'fa-bolt'
      }
    };

    return (
      <>
        <input id={button} type="radio" value={button} name="category"
               onChange={this.selectButton} required
        />
          <label className="" htmlFor={button}>
            <i className={`fa ${selectIcon(button)} open__icon-i`}> </i>
            <div className="open__icon-text">{button}</div>
          </label>
      </>
    )
  }
}
