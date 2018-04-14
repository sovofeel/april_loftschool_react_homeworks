import React, {Component, Fragment} from 'react';
import './Switcher.css';
import VideoPlayer from './../VideoPlayer'
import CardNumberHolder from './../CardNumberHolder'
import ModalButton from './../ModalButton'

// Для работы этой компоненты нужно использовать методы React.Children.toArray а
// так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  }

  componentList = ['VideoPlayer', 'Card number formating', 'ModalButton']

  handleChangeChild = (ev) => {}

  HOCSwitcherCild = (WrappedComponent) => {
    return class extends Component {
      render() {
        return <Fragment>
          <nav>
            <ul className='component-list'>
              {this
                .componentList
                .map((component, idx) => <li
                  class="component-list__name"
                  data-id={idx}
                  key={idx}
                  onClick={this.handleChangeChild}>{component}</li>)}
            </ul>
          </nav>
          <div className="component-wrapper">
            <WrappedComponent/>
          </div>
        </Fragment>
      }
    }
  }

  render() {
    const {selectedChild} = this.state;
    return <div className="Switcher">
      {/*<VideoPlayer/> */}
      {/*<CardNumberHolder/>*/}
      <ModalButton/>
    </div>;
  }
}

export default Switcher;
