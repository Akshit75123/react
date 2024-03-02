import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet';
// import Welcome from './Components/Welcome';
// import Hello from './Components/Hello';
// import Props from './Components/Props';
// import PropsClass from './Components/PropsClass';
// import Message from './Components/Message';
// import Counter from './Components/Counter';
// import FunctionClick from './Components/FunctionClick';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind'
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import ListRender from "./Components/ListRender";
// import IndexKey from "./Components/IndexKey";
// import Stylesheets from "./Components/Stylesheets";
// import Inline from "./Components/Inline";
// import './appStyles.css';
// import styles from './appStyles.module.css'
// import Form from './Components/Form';
// import LifecycleA from "./Components/LifecycleA";
// import LifecycleC from "./Components/LifecycleC";
// import FragmentDemo from "./Components/FragmentDemo";
// import Table from "./Components/Table";
// import PureComp from "./Components/PureComp";
// import RegComponent from "./Components/RegComponent";
// import ParentComp from "./Components/ParentComp";
// import MemoComp from "./Components/MemoComp";
// import RefsDemo from "./Components/RefsDemo";
// import RefsDemo from "./Components/RefsDemo";
// import FocusInput from "./Components/FocusInput";
// import FRParentInput from "./Components/FRParentInput";
// import PortalDemo from "./Components/PortalDemo";
// import Hero from './Components/Hero'
// import ErrorBoundary from "./Components/ErrorBoundary";
// import ClassClick from "./Components/ClassClick";
// import ClickCounter from "./ClickCounter";
// import HoverCounter from "./HoverCounter";
// import ClickCounterTwo from "./Components/ClickCounterTwo";
// import HoverCounterTwo from "./Components/HoverCounterTwo";
// import User from "./Components/User";
import CounterTwo from "./Components/CounterTwo";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import HoverCounterTwo from "./Components/HoverCounterTwo";
class App extends Component {
  render(){
    return (
        <div>
          <CounterTwo render = {(count, incrementCount)=>
              <ClickCounterTwo
                  count={count}
                  incrementCount={incrementCount}
              />
          } />
          <CounterTwo render ={(count, incrementCount)=>
              <HoverCounterTwo
                  count={count}
                  incrementCount={incrementCount}
              />
          }
          />
          {/*<User render ={ (isLoggedIn)=>isLoggedIn ?'Akshit':'Guest'}/>*/}
          {/*<User name ={ ()=>'Akshit'}/>*/}
          {/*<User name="Akshit"/>*/}
          {/*<ClickCounterTwo />*/}
          {/*<HoverCounterTwo />*/}
          {/*<HoverCounter />*/}
          {/*  <ClickCounter name = "akshit"/>*/}

       {/*// <div className="App">*/}
       {/*//     <ErrorBoundary >*/}
       {/*//          <Hero heroName="Batman"/>*/}
       {/*//     </ErrorBoundary>*/}
       {/*//     <ErrorBoundary>*/}
       {/*//         <Hero heroName="Superman"/>*/}
       {/*//     </ErrorBoundary>*/}
       {/*//*/}
       {/*//      <ErrorBoundary>*/}
       {/*//          <Hero heroName="Joker"/>*/}
       {/*//     </ErrorBoundary>*/}

       {/*  // <PortalDemo />*/}
         {/*<FRParentInput />*/}
         {/*<FocusInput />*/}
         {/*<RefsDemo />*/}
         {/*<MemoComp />*/}
         {/*  <ParentComp />*/}
         {/*<RegComponent />*/}
         {/*<PureComp />*/}
         {/*<Table />*/}
         {/*<FragmentDemo />*/}
         {/*<LifecycleC />*/}
         {/*<LifecycleA />*/}
           {/*<Form />*/}
         {/*<h1 className="error">Error</h1>*/}
         {/*<h1 className={styles.succes}>Success</h1>*/}
         {/*<Inline />*/}

         {/*<Stylesheets primary={true}/>*/}
         {/*<IndexKey />*/}
         {/*<ListRender />*/}
         {/*<UserGreeting />*/}
       {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick />
        <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
        {/* <Props name="Akshit" jobName="WebD">
          <p>This is children props</p>
        </Props>
        <Props name="Lovedeep" jobName="CP">
          <button>Click Here</button>
        </Props>
        <Props name="Rohit" jobName="CyberSecurity"/> */}
        {/* <PropsClass name="Akshit" job="WebD" />
        <PropsClass name="Lovedeep" job="CP" /> */}
      </div>
    );

  }
}

export default App;
