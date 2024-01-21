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
     <ClickCounter name='jayashri'/>
     <HoverCounter/>
    </div>
  );
}

export default App;
