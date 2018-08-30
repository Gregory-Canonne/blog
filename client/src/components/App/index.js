/**
 * Import
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Local import
 */
// Composants

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = ({ light, toggleLight }) => {
  const className = classNames(
    'app',
    {
      'app--night': !light
    }
  );

  return (
    <div className={className}>
      <h1 className="app-title">Modèle React</h1>
      <p className="app-content">Hello tout le monde !</p>
      <button onClick={toggleLight}>
        { light ? 'Off' : 'On' }
      </button>
    </div>
  );
}

/**
 * Export
 */
export default App;
