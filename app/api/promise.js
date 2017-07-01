export default store => next => action => {
    let {type, promise, ...rest} = action;

    if (!promise) return next(action);

    const SUCCESS = type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({...rest, type: REQUEST});
    return promise
        .then(req => {
            next({...rest, req, type: SUCCESS});
            return true;
        })
        .catch(error => {
            next({...rest, error, type: FAILURE});
            return false;
        });
};