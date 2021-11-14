import './App.css';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import PostList from './components/PostList/PostList';
import BlogProvider from './contexts/blog.context'

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Error/>
        <Form />
        <PostList/>
      </div>
    </BlogProvider>

  );
}

export default App;
