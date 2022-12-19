import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import Checkbox from './src/components/checkbox/checkbox.jsx';
import Dropdownlist from './src/components/dropdown/dropdown.jsx';
import Modal from './src/components/modal/modal.jsx';
import Navbar from './src/components/navbar/navbar.jsx';
import SwitchButton from './src/components/switch/switch.jsx';
import Tablist from './src/components/tab/tab.jsx';
import Table from './src/components/table/table.jsx';
import Tooltip from './src/components/tooltip/tooltip.jsx';
import Test from './test.jsx';
import TestAlertBox from './testAlertBox.jsx';
import TestAvatar from './testAvatar.jsx';
import TestChips from './testChips.jsx';
import TestProgressBar from './testProgress.jsx';
import TestTextBox from './testTextBox.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
  // root.render(<Test/>)
  // root.render(<TestTextBox/>)
  // root.render(<TestAlertBox/>)
  // root.render(<Checkbox/>)
  root.render(<Dropdownlist/>)
  // root.render(<Table/>)
  // root.render(<TestChips/>)
  // root.render(<TestAvatar/>)
  // root.render(<Modal/>)
  // root.render(<Navbar/>)
  // root.render(<TestProgressBar/>)
  // root.render(<SwitchButton/>)
  // root.render(<Tablist/>)
  // root.render(<Tooltip/>)