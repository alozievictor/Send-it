// OrderContext.js
import React, { createContext, useContext, useReducer, useState } from 'react';

// Define your initial state
const initialState = {
  senderDetails: {},
  receiverDetails: {},
};

// Define your reducer function
const orderReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SENDER_DETAILS':
      return { ...state, senderDetails: action.payload };
    case 'SET_RECEIVER_DETAILS':
      return { ...state, receiverDetails: action.payload };
    default:
      return state;
  }
};

// Create the context
const OrderContext = createContext();

// Provider component
export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

// Custom hooks for using the context
export const useOrderState = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderState must be used within an OrderProvider');
  }
  return context.state;
};

export const useOrderDispatch = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderDispatch must be used within an OrderProvider');
  }
  return context.dispatch;
};