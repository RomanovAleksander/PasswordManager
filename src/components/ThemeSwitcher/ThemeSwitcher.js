import React from 'react';
import {connect} from 'react-redux';
import {changeTheme} from "../../actions/settings/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './themeSwitcher.css';

class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  toggleTheme = () => {
    const { changeTheme, isDark } = this.props;
    changeTheme(!isDark);
    document.body.className = isDark ? 'th-light' : 'th-dark';
  }

  render() {
    return (
      <div className={this.props.isFooter ? 'switch-rel' : 'switch-abs'}>
        <input type="checkbox" className="checkbox" id="chk" onChange={this.toggleTheme}/>
        <label className="label" htmlFor="chk">
          <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faSun} />
          <div className="ball"/>
        </label>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDark: state.settings.isDark
  }
};

const mapDispatchToProps = {
  changeTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
