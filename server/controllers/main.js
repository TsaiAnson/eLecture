exports.notFound = function (request, response, next) {
    response.status(404).json({message: request.params['uri'] + ' Not Found'});
};
