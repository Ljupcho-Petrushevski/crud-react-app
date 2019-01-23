import axios from 'axios';

const UsersAPI = (() => {
    
    const getUsers = () => {
        return axios.get('./data/usersData.json')
            .then((response) => response.data)
            .catch((error) => {
                throw error;
            })
    }


    return {
        getUsers: getUsers
    };

})();


export default UsersAPI;