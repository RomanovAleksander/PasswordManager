import React from 'react';
import {connect} from 'react-redux';
import {changeTheme, changeLanguage} from "../../actions/settings/actions";
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
    const { isDark, isUA, isFooter, changeLanguage } = this.props;
    return (
      <div className={isFooter ? 'switch-rel' : 'switch-abs'}>
        <input type="checkbox" className="checkbox" id="chk" defaultChecked={isDark}/>
        <label className="label" htmlFor="chk" onClick={this.toggleTheme}>
          <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faSun} />
          <div className="ball"/>
        </label>
        <div className={`change-lng ${isFooter ? 'right-lng' : 'left-lng'}`} onClick={() => changeLanguage()}>{isUA ? 'UA' : 'EN'}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDark: state.settings.isDark,
    isUA: state.settings.isUA
  }
};

const mapDispatchToProps = {
  changeTheme,
  changeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
