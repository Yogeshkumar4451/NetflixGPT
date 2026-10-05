import { useSelector } from 'react-redux';

import GPTSearch from './GPTSearch';
import MainContainer from './MainContainer';

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return showGPTSearch ? <GPTSearch /> : <MainContainer />;
};

export default Browse;
