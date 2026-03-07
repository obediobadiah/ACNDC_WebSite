export const useAuth = () => {
    const user = localStorage.getItem('Token')
    if (user) {
        return true;
    } else {
        return false
    }
};