import { useSelector } from 'react-redux';

import GptSearch from './GptSearch';
import MainContainer from './MainContainer';

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return showGPTSearch ? <GptSearch /> : <MainContainer />;
};

export default Browse;
