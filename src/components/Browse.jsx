import { useSelector } from 'react-redux';
import useOnPlayMovies from '../hooks/useOnPlayMovies';

import Header from './Header';
import MainContainer from './MainContainer';
import GPTSearch from './GPTSearch';

const Browse = () => {
  useOnPlayMovies();

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <>
      <Header />

      {showGPTSearch ? <GPTSearch /> : <MainContainer />}
    </>
  );
};

export default Browse;
