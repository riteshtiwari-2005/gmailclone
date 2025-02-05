import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Inbox from './components/Inbox';
import Mail from './components/Mail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inbox />} />
        <Route path="mail/:id" element={<Mail />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
