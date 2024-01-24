import logo from './logo.svg';
import './App.css';
import ParentFunctionComponent from './components/ParentFunctionComponent';
import ParentClassComponent from './components/ParentClassComponent';
import Counter from './components/Counter';
import LoginForm from './components/FormHandling/LoginForm';
import ListRender from './components/ListRendering/ListRender';
import PortalDemo from './components/Portals/PortalDemo';
import NoPortalComponent from './components/ModelPortal/NoPortalComponent';
import ModalComponent from './components/ModelPortal/ModalComponent';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCount';
import ClickCounterTwo from './components/Render/ClickCounterTwo';
import HoverCounterTwo from './components/Render/HoverCounterTwo';
import RenderCounter from './components/Render/RenderCounter';
import PostList from './components/HTTPCall/PostList';
import FormPost from './components/HTTPCall/FormPost';
import HookCounter from './components/Hook/HookCounter';
import HookCounterArray from './components/Hook/HookCounterArray';
import UseEffectCount from './components/Hook/UseEffectCount';
import ConditionalUseEffect from './components/Hook/ConditionalUseEffect';
import HookMouse from './components/Hook/HookMouse';
import EventUnMount from './components/Hook/EventUnMount';
import DataFetching from './components/UseEffect/DataFetching';
import DataFetchingWithId from './components/UseEffect/DataFetchingWithId';
import ComponentA from './components/Context/ComponentA';
import React, { createContext } from 'react'

export const UserContext = createContext()


function App() {
  return (
    <div className="App">
      {/* <ParentClassComponent />
      <ParentFunctionComponent />
      <Counter />    */}
      {/* <LoginForm/>  */}
      {/* <ListRender/> */}
      {/* <PortalDemo/> */}
      {/* <NoPortalComponent/> */}
      {/* <ModalComponent/> */}
      {/* <ClickCounter name='jayashri'/>
     <HoverCounter/> */}

      {/* <ClickCounterTwo/>
     <HoverCounterTwo/> */}
      {/* <RenderCounter render={(count, handleClick) => <ClickCounterTwo count={count} handleClick={handleClick}></ClickCounterTwo>} />
      <RenderCounter render={(count, handleClick) => <HoverCounterTwo count={count} handleClick={handleClick}></HoverCounterTwo>} /> */}


      {/* <PostList/> */}
      {/* <FormPost/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterArray/> */}
      {/* <UseEffectCount/> */}
      {/* <ConditionalUseEffect/> */}
      {/* <HookMouse/> */}
      {/* <EventUnMount/> */}
      {/* <DataFetching/> */}
      {/* <DataFetchingWithId/> */}


      <UserContext.Provider value={'jayashri'}>
        <ComponentA />
      </UserContext.Provider>


    </div>
  );
}

export default App;
