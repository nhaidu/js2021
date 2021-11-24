import axios from 'axios';

const searchMovieByKeyword = async (keword = '') => {
    const url = 'https://api.themoviedb.org/3/search/movie?query={keyword}&api_key=cfe422613b250f702980a3bbf9e90716';
    const responese = await axios.get(url);
    const result = responese.status === 200 ? responese.data : [];
    return result;
}

export default searchMovieByKeyword;
