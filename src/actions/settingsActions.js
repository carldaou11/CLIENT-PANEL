import {
    DISABLE_BALANCE_ON_ADD,
    DISABLE_BALANCE_ON_EDIT,
    ALLOW_REGISTRATION
  } from './types';


  export const setDisableBalanceOnAdd = () => {
    // Get Settings from local storage
    const settings = JSON.parse(localStorage.getItem('settings'));
  

    // Toggle
    settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  

    // Set back to local storage
    localStorage.setItem('settings', JSON.stringify(settings));
  
    return {
      type: DISABLE_BALANCE_ON_ADD,
     payload: settings.DisableBalanceOnAdd
    };
  };
  
  export const setDisableBalanceOnEdit = () => {
    // Get Settings from local storage
   const settings = JSON.parse(localStorage.getItem('settings'));
  
    // Toggle
   settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  
    // Set back to local storage
 localStorage.setItem('settings', JSON.stringify(settings));
  
    return {
      type: DISABLE_BALANCE_ON_EDIT,
     payload: settings.disableBalanceOnEdit
    };
  };
  
  export const setAllowRegistration = () => {
    // Get Settings from local storage
   const settings = JSON.parse(localStorage.getItem('settings'));
  
    // Toggle
   settings.allowRegistration = !settings.allowRegistration;
  
    // Set back to local storage
    localStorage.setItem('settings', JSON.stringify(settings));
  
    return {
      type: ALLOW_REGISTRATION,
      payload: settings.allowRegistration
    };
  };
