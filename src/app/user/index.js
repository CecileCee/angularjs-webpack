const user = () => {
  return {
    getName : (id) => {
      // return Restangular.one('user').get(id);
      return 'Vladimir'
    }
  }
}

export default user;