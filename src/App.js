import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './NavigationBar.js';
import DaveForm from './DaveForm.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ signOut }) {
  return (
    /*<View className="App">
      <Card>
        <>
          <NavigationBar />
          <DaveForm />
        </>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>*/
    <>
      <NavigationBar authState={signOut}/>
      <DaveForm />
    </>
    
  );
}

export default withAuthenticator(App);