import css from './App.module.css';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {//<NavBarSimple />
      }
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
// challenge to be continued: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RE101+2021_T1/courseware/f2f64b0686d941f3bc23c95799a3b2c0/54a68d243a174819837b8dafeac74166/?child=first